import { RootLayout } from '@payloadcms/next/layouts'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import config from '@/payload.config'
import { importMap } from './importMap'
import { handleServerFunctions } from './serverFunctions'
import './custom.css'

export const metadata: Metadata = {
  title: 'Payload Admin',
}

console.log('ADMIN LAYOUT: config is', config ? 'DEFINED' : 'UNDEFINED')

const Layout = ({ children }: { children: ReactNode }) => (
  <RootLayout 
    config={config} 
    importMap={importMap}
    serverFunction={handleServerFunctions}
  >
    {children}
  </RootLayout>
)

export default Layout
