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

  const diskFiles = new Set(fs.readdirSync(DISK_PATH))
  
  console.log(`--- Checking for missing files on disk ---`)
  
  const missing = []
  for (const doc of media.docs) {
    if (!diskFiles.has(doc.filename as string)) {
      missing.push({
        id: doc.id,
        filename: doc.filename,
        alt: doc.alt
      })
    }
  }

  console.log(`Found ${missing.length} missing files in public/media:`)
  missing.forEach(m => {
    console.log(`ID: ${m.id} | Filename: ${m.filename} | Alt: ${m.alt}`)
  })

  fs.writeFileSync('broken_media.json', JSON.stringify(missing, null, 2))
  console.log(`\nDetailed list saved to broken_media.json`)
  process.exit(0)
}

run()
