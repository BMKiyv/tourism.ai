import { getPayload } from 'payload'
import config from './payload.config'

const seed = async () => {
  console.log('--- Seeding database ---')
  const payload = await getPayload({ config })

  console.log('--- Creating first user ---')
  const user = await payload.create({
    collection: 'users',
    data: {
      email: 'adm@tourism.gov.ua',
      password: 'D@rtAdm1n_2026',
      name: 'Admin',
    },
  })

  console.log('--- Seed complete! ---')
  process.exit(0)
}

seed()
