import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // У Next.js 15/16 це тепер тут, а не в experimental
  serverExternalPackages: ['@payloadcms/db-postgres', 'payload'],
  experimental: {
    // Це може допомогти з модулями Payload
  },
}

export default withPayload(nextConfig)
