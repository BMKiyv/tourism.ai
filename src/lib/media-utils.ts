import { Payload } from 'payload'
import path from 'path'
import fs from 'fs'

/**
 * Downloads an image from a URL and uploads it to Payload's media collection.
 */
export async function getOrCreateMediaFromUrl(
  payload: Payload,
  url: string,
  alt: string
): Promise<number | null> {
  if (!url) return null

  try {
    const urlObj = new URL(url)
    const filename = path.basename(urlObj.pathname)

    const existingMedia = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
    })

    if (existingMedia.docs.length > 0) {
      return existingMedia.docs[0].id as number
    }

    console.log(`Downloading: ${url}`)
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Fetch failed: ${response.statusText}`)

    const buffer = Buffer.from(await response.arrayBuffer())

    const result = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: buffer,
        name: filename,
        mimetype: response.headers.get('content-type') || 'image/jpeg',
        size: buffer.byteLength,
      },
    })

    return result.id as number
  } catch (error: any) {
    console.error(`Error downloading ${url}:`, error.message)
    return null
  }
}

/**
 * Uploads a local file to Payload's media collection.
 */
export async function getOrCreateMediaFromLocalPath(
  payload: Payload,
  filePath: string,
  alt: string
): Promise<number | null> {
  if (!fs.existsSync(filePath)) {
    console.warn(`Local file not found: ${filePath}`)
    return null
  }

  try {
    const filename = path.basename(filePath)

    const existingMedia = await payload.find({
      collection: 'media',
      where: { filename: { equals: filename } },
    })

    if (existingMedia.docs.length > 0) {
      return existingMedia.docs[0].id as number
    }

    console.log(`Uploading local file: ${filePath}`)
    const buffer = fs.readFileSync(filePath)
    
    // Basic mimetype detection
    const ext = path.extname(filename).toLowerCase()
    const mimetypes: any = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.svg': 'image/svg+xml',
      '.webp': 'image/webp',
    }

    const result = await payload.create({
      collection: 'media',
      data: { alt },
      file: {
        data: buffer,
        name: filename,
        mimetype: mimetypes[ext] || 'image/jpeg',
        size: buffer.byteLength,
      },
    })

    return result.id as number
  } catch (error: any) {
    console.error(`Error uploading local file ${filePath}:`, error.message)
    return null
  }
}
