import { getPayload } from 'payload'
import config from './payload.config'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

const WEBFLOW_PATH = path.resolve('../webflow')

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
      await payload.create({
        collection: 'orders',
        data: {
          name: record['Name of order'] || record['Name'],
          slug: record['Slug'],
          number: record['Number of order'],
          date: record['Date of order'] ? new Date(record['Date of order']).toISOString() : null,
          link: record['link'],
          url: record['url'],
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
  const blogFile = files.find(f => f.includes('Blogs'))
  
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

      const blogData = {
        name: record['Name'],
        slug: record['Slug'],
        date: record['Date'] ? new Date(record['Date']).toISOString() : new Date(record['Created On']).toISOString(),
        author: record['Author'],
        anounce: record['anounce'],
        rich: record['rich'], // Додаємо контент!
        is_popular: record['is_popular'] === 'true',
        webflow_item_id: record['Item ID'],
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

async function run() {
  console.log('--- Starting Webflow Import ---')
  await importOrders()
  await importBlogs()
  await importDepartments()
  await importVacancies()
  console.log('--- Import Complete ---')
  process.exit(0)
}

run()
