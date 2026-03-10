import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@/payload.config'

export const GET = async (req: Request, { params }: { params: Promise<{ segments: string[] }> }) => {
  console.log('API GET request, config is:', config ? 'defined' : 'undefined')
  return REST_GET(config)(req, { params: await params })
}

export const POST = async (req: Request, { params }: { params: Promise<{ segments: string[] }> }) => 
  REST_POST(config)(req, { params: await params })

export const DELETE = async (req: Request, { params }: { params: Promise<{ segments: string[] }> }) => 
  REST_DELETE(config)(req, { params: await params })

export const PATCH = async (req: Request, { params }: { params: Promise<{ segments: string[] }> }) => 
  REST_PATCH(config)(req, { params: await params })

export const PUT = async (req: Request, { params }: { params: Promise<{ segments: string[] }> }) => 
  REST_PUT(config)(req, { params: await params })

export const OPTIONS = async (req: Request, { params }: { params: Promise<{ segments: string[] }> }) => 
  REST_OPTIONS(config)(req, { params: await params })
