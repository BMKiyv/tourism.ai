import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

console.log('PAYLOAD_CONFIG: Initializing with DATABASE_URI:', process.env.DATABASE_URI ? 'PRESENT' : 'MISSING')

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [],
  localization: {
    locales: [
      {
        label: 'Українська',
        code: 'uk',
      },
      {
        label: 'English',
        code: 'en',
      },
    ],
    defaultLocale: 'uk',
    fallback: true,
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        create: () => true,
        read: ({ req: { user } }) => {
          if (user) {
            return {
              id: {
                equals: user.id,
              },
            }
          }
          return false
        },
        update: ({ req: { user } }) => {
          if (user) {
            return {
              id: {
                equals: user.id,
              },
            }
          }
          return false
        },
        delete: ({ req: { user } }) => {
          if (user?.role === 'admin') return true
          return false
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'role',
          type: 'select',
          defaultValue: 'user',
          options: [
            { label: 'Admin', value: 'admin' },
            { label: 'User', value: 'user' },
          ],
          access: {
            update: ({ req: { user } }) => user?.role === 'admin',
          },
        },
      ],
    },
    {
      slug: 'blogs',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        { name: 'name', type: 'text', required: true, localized: true },
        { name: 'slug', type: 'text', required: true, unique: true },
        { name: 'date', type: 'date' },
        { name: 'author', type: 'text' },
        { name: 'img', type: 'upload', relationTo: 'media' },
        { name: 'anounce', type: 'textarea', localized: true },
        { name: 'rich', type: 'richText', localized: true },
        { name: 'is_popular', type: 'checkbox' },
        { name: 'webflow_item_id', type: 'text', admin: { readOnly: true } },
      ],
    },
    {
      slug: 'departments',
      admin: { useAsTitle: 'name' },
      fields: [
        { name: 'name', type: 'text', required: true, localized: true },
        { name: 'slug', type: 'text', required: true },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'parent', type: 'relationship', relationTo: 'departments' },
        { name: 'index', type: 'number' },
      ],
    },
    {
      slug: 'orders',
      admin: { useAsTitle: 'name' },
      fields: [
        { name: 'name', type: 'text', required: true, localized: true },
        { name: 'slug', type: 'text', required: true },
        { name: 'number', type: 'text' },
        { name: 'date', type: 'date' },
        { name: 'link', type: 'text' },
        { name: 'url', type: 'text' },
        { name: 'logo', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      slug: 'vacancies',
      admin: { useAsTitle: 'name' },
      fields: [
        { name: 'name', type: 'text', required: true, localized: true },
        { name: 'slug', type: 'text', required: true },
        { name: 'link', type: 'text' },
      ],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        {
          name: 'alt',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_KEY_HERE',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    idType: 'uuid',
    migrationDir: path.resolve(dirname, 'migrations'),
  }),
})
