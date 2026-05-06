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
      return decodeURIComponent(name).toLowerCase().replace(/ /g, '_').replace(/-/g, '_')
    } catch {
      return name.toLowerCase().replace(/ /g, '_').replace(/-/g, '_')
    }
  }

  // Мапа нормалізованих імен на диску
  const diskMap = new Map()
  diskFiles.forEach(f => {
    const norm = normalize(f)
    if (!diskMap.has(norm)) {
        diskMap.set(norm, f)
    }
  })

  const hashPattern = /^[a-f0-9]{24}_/
  const usedFilenames = new Set<string>()

  // Спочатку збережемо всі поточні імена, які ми НЕ чіпаємо
  media.docs.forEach(doc => usedFilenames.add(doc.filename as string))

  console.log(`Checking ${media.docs.length} media items...`)

  let updatedCount = 0
  for (const doc of media.docs) {
    const dbFilename = doc.filename as string
    const cleanFilename = dbFilename.replace(hashPattern, '')
    const norm = normalize(cleanFilename)

    let match = diskMap.get(norm)
    
    // Fallback: search for suffix
    if (!match) {
        for (const [diskNorm, diskOrig] of diskMap.entries()) {
            if (norm.endsWith(diskNorm) || diskNorm.endsWith(norm)) {
                match = diskOrig
                break
            }
        }
    }

    if (match) {
      let targetFilename = match
      
      // Якщо це ім'я вже використовується іншим записом, додаємо ID
      if (usedFilenames.has(targetFilename) && targetFilename !== dbFilename) {
          const ext = path.extname(targetFilename)
          const base = path.basename(targetFilename, ext)
          targetFilename = `${base}_${doc.id}${ext}`
          
          // Також треба перейменувати файл на диску, щоб Payload його знайшов
          const oldPath = path.join(DISK_PATH, match)
          const newPath = path.join(DISK_PATH, targetFilename)
          if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
              fs.copyFileSync(oldPath, newPath)
              console.log(`Copied disk file: ${match} -> ${targetFilename}`)
          }
      }

      if (targetFilename !== dbFilename) {
        try {
            console.log(`Updating DB: ${dbFilename} -> ${targetFilename}`)
            await payload.update({
              collection: 'media',
              id: doc.id,
              data: {
                filename: targetFilename,
              },
            })
            usedFilenames.delete(dbFilename)
            usedFilenames.add(targetFilename)
            updatedCount++
        } catch (e: any) {
            console.error(`Failed to update ID ${doc.id}: ${e.message}`)
        }
      }
    }
  }

  console.log(`Finished. Updated ${updatedCount} items.`)
  process.exit(0)
}

run()
