import { getPayload } from 'payload'
import config from './payload.config'
import fs from 'fs'

async function run() {
  const payload = await getPayload({ config })
  const media = await payload.find({
    collection: 'media',
    limit: 10000,
  })

  const list = media.docs.map(doc => ({
    id: doc.id,
    filename: doc.filename
  }))

  fs.writeFileSync('db_media.json', JSON.stringify(list, null, 2))
  console.log(`Saved ${list.length} media items to db_media.json`)
  process.exit(0)
}

run()
