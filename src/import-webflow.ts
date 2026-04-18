import { getPayload } from 'payload'
import config from './payload.config'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { getOrCreateMediaFromUrl, getOrCreateMediaFromLocalPath } from './lib/media-utils'
import { JSDOM } from 'jsdom'

const WEBFLOW_PATH = path.resolve('./webflow')

async function importOrders() {
  const payload = await getPayload({ config })
  
  // Знайти файл з Order у назві
  const files = fs.readdirSync(WEBFLOW_PATH)
  const orderFile = files.find(f => f.includes('Orders'))
  
  if (!orderFile) {
    console.error('Orders CSV not found')
    return
  }

  const csvData = fs.readFileSync(path.join(WEBFLOW_PATH, orderFile), 'utf-8')
  const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true,
  })

  console.log(`Importing ${records.length} orders...`)

  for (const record of records) {
    try {
      const logoUrl = record['logo of order']
      let logoId = null
      
      if (logoUrl) {
        logoId = await getOrCreateMediaFromUrl(payload, logoUrl, `Logo for ${record['Name of order'] || record['Name']}`)
      }

      await payload.create({
        collection: 'orders',
        data: {
          name: record['Name of order'] || record['Name'],
          slug: record['Slug'],
          number: record['Number of order'],
          date: record['Date of order'] ? new Date(record['Date of order']).toISOString() : null,
          link: record['link'],
          url: record['url'],
          logo: logoId,
        },
      })
    } catch (e: any) {
      console.error(`Failed to import order ${record['Slug']}: ${e.message}`)
    }
  }
}

async function importBlogs() {
  const payload = await getPayload({ config })
  const files = fs.readdirSync(WEBFLOW_PATH)
  const blogFile = files.find(f => f.includes('Blogs') && !f.includes('Eng'))
  
  if (!blogFile) return

  const csvData = fs.readFileSync(path.join(WEBFLOW_PATH, blogFile), 'utf-8')
  const records = parse(csvData, { columns: true, skip_empty_lines: true })

  console.log(`Importing/Updating ${records.length} blogs...`)
  for (const record of records) {
    try {
      const existing = await payload.find({
        collection: 'blogs',
        where: { slug: { equals: record['Slug'] } }
      })

      const imageUrl = record['img']
      let imageId = null

      if (imageUrl) {
        imageId = await getOrCreateMediaFromUrl(payload, imageUrl, record['Name'])
      }

      const blogData: any = {
        name: record['Name'],
        slug: record['Slug'],
        date: record['Date'] ? new Date(record['Date']).toISOString() : new Date(record['Created On']).toISOString(),
        author: record['Author'],
        anounce: record['anounce'],
        rich: record['rich'],
        is_popular: record['is_popular'] === 'true',
        webflow_item_id: record['Item ID'],
        img: imageId,
      }

      if (existing.docs.length > 0) {
        await payload.update({
          collection: 'blogs',
          id: existing.docs[0].id,
          data: blogData,
        })
      } else {
        await payload.create({
          collection: 'blogs',
          data: blogData,
        })
      }
    } catch (e: any) {
      console.error(`Failed blog ${record['Slug']}: ${e.message}`)
    }
  }
}

async function importDepartments() {
  const payload = await getPayload({ config })
  const files = fs.readdirSync(WEBFLOW_PATH)
  const depFile = files.find(f => f.includes('Departments') && !f.includes('Eng'))
  
  if (!depFile) return

  const csvData = fs.readFileSync(path.join(WEBFLOW_PATH, depFile), 'utf-8')
  const records = parse(csvData, { columns: true, skip_empty_lines: true })

  console.log(`Importing ${records.length} departments...`)
  for (const record of records) {
    try {
      await payload.create({
        collection: 'departments',
        data: {
          name: record['Name'],
          slug: record['Slug'],
          description: record['description'],
          index: parseInt(record['index']) || 0,
        },
      })
    } catch (e: any) {
      console.error(`Failed department ${record['Slug']}: ${e.message}`)
    }
  }
}

async function importVacancies() {
  const payload = await getPayload({ config })
  const files = fs.readdirSync(WEBFLOW_PATH)
  const vacFile = files.find(f => f.includes('Vacancies'))
  
  if (!vacFile) return

  const csvData = fs.readFileSync(path.join(WEBFLOW_PATH, vacFile), 'utf-8')
  const records = parse(csvData, { columns: true, skip_empty_lines: true })

  console.log(`Importing ${records.length} vacancies...`)
  for (const record of records) {
    try {
      await payload.create({
        collection: 'vacancies',
        data: {
          name: record['Name'],
          slug: record['Slug'],
          link: record['link'],
        },
      })
    } catch (e: any) {
      console.error(`Failed vacancy ${record['Slug']}: ${e.message}`)
    }
  }
}

async function importTeamFromHtml() {
  const payload = await getPayload({ config })
  const htmlPath = path.join(WEBFLOW_PATH, 'our-team.html')
  
  if (!fs.existsSync(htmlPath)) {
    console.error('our-team.html not found')
    return
  }

  const html = fs.readFileSync(htmlPath, 'utf-8')
  const dom = new JSDOM(html)
  const doc = dom.window.document
  const teamItems = doc.querySelectorAll('.team-item')

  console.log(`Importing ${teamItems.length} team members from HTML...`)

  let index = 0
  for (const item of Array.from(teamItems)) {
    try {
      const surname = item.querySelector('.team-surname')?.textContent?.trim() || ''
      const name = item.querySelector('.team-name')?.textContent?.trim() || ''
      const position = item.querySelector('.team-text')?.textContent?.trim() || ''
      const email = item.querySelector('a[href^="mailto:"]')?.getAttribute('href')?.replace('mailto:', '') || null
      const phone = item.querySelector('a[href^="tel:"]')?.getAttribute('href')?.replace('tel:', '') || null
      const facebook = item.querySelector('a[href*="facebook.com"]')?.getAttribute('href') || null
      const imageSrc = item.querySelector('.team-img img')?.getAttribute('src') || ''
      
      let imageId = null
      if (imageSrc) {
        // Resolve relative path to webflow directory
        const absoluteImagePath = path.join(WEBFLOW_PATH, imageSrc)
        imageId = await getOrCreateMediaFromLocalPath(payload, absoluteImagePath, `${name} ${surname}`)
      }

      await payload.create({
        collection: 'team',
        data: {
          name,
          surname,
          position,
          email,
          phone,
          facebook,
          image: imageId,
          index: index++,
        },
      })
    } catch (e: any) {
      console.error(`Failed to import team member: ${e.message}`)
    }
  }
}

async function run() {
  console.log('--- Starting Webflow Import ---')
  await importOrders()
  await importBlogs()
  await importDepartments()
  await importVacancies()
  await importTeamFromHtml()
  console.log('--- Import Complete ---')
  process.exit(0)
}

run()
