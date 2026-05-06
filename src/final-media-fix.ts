import { getPayload } from 'payload'
import config from './payload.config'
import fs from 'fs'
import path from 'path'

const DISK_PATH = path.resolve('public/media')

async function run() {
  const payload = await getPayload({ config })
  const media = await payload.find({
    collection: 'media',
    limit: 10000,
  })

  const diskFiles = fs.readdirSync(DISK_PATH)
  
  const normalize = (name: string) => {
    try {
      // Decode URL encoding and replace everything non-alphanumeric with _
      return decodeURIComponent(name)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '_')
        .replace(/_+/g, '_')
    } catch {
      return name.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_')
    }
  }

  // Create a map of normalized disk filenames
  const diskMap = new Map<string, string>()
  diskFiles.forEach(f => {
    const norm = normalize(f)
    if (norm.length > 3) { // Avoid mapping very short names like .jpg
        diskMap.set(norm, f)
    }
  })

  const hashPattern = /^[a-f0-9]{24}_/
  const usedFilenames = new Set(media.docs.map(doc => doc.filename as string))

  console.log(`Checking ${media.docs.length} media items...`)

  let updatedCount = 0
  for (const doc of media.docs) {
    const dbFilename = doc.filename as string
    
    // Check if file already exists on disk
    if (fs.existsSync(path.join(DISK_PATH, dbFilename))) {
        continue
    }

    // Try to find a match
    const cleanFilename = dbFilename.replace(hashPattern, '')
    const dbNorm = normalize(cleanFilename)

    let match: string | undefined = undefined

    // 1. Try exact normalized match
    match = diskMap.get(dbNorm)

    // 2. Try match by "image_<id>" pattern which seems common
    if (!match) {
        const potentialImageName = `image_${doc.id}`
        match = diskFiles.find(f => normalize(f).startsWith(potentialImageName))
    }

    // 3. Try suffix matching (if DB filename ends with a disk filename)
    if (!match) {
        for (const diskFile of diskFiles) {
            const diskNorm = normalize(diskFile)
            if (diskNorm.length > 5 && (dbNorm.endsWith(diskNorm) || diskNorm.endsWith(dbNorm))) {
                match = diskFile
                break
            }
        }
    }

    // 4. Try matching by first 20 characters of normalized name
    if (!match && dbNorm.length > 10) {
        const prefix = dbNorm.substring(0, 20)
        match = diskFiles.find(f => normalize(f).startsWith(prefix))
    }

    if (match) {
      let targetFilename = match
      
      // Handle uniqueness
      if (usedFilenames.has(targetFilename) && targetFilename !== dbFilename) {
          const ext = path.extname(targetFilename)
          const base = path.basename(targetFilename, ext)
          targetFilename = `${base}_fixed_${doc.id}${ext}`
          
          const oldPath = path.join(DISK_PATH, match)
          const newPath = path.join(DISK_PATH, targetFilename)
          if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
              fs.copyFileSync(oldPath, newPath)
          }
      }

      console.log(`Matching ID ${doc.id}: ${dbFilename} -> ${targetFilename}`)
      try {
          await payload.update({
            collection: 'media',
            id: doc.id,
            data: { filename: targetFilename },
          })
          usedFilenames.add(targetFilename)
          updatedCount++
      } catch (e: any) {
          console.error(`Failed to update ${doc.id}: ${e.message}`)
      }
    }
  }

  console.log(`Finished. Recovered ${updatedCount} more items.`)
  process.exit(0)
}

run()
