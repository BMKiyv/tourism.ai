import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import type { Blog, Order } from '@/payload-types'

interface PageProps {
  searchParams: Promise<{ q?: string }>
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q: query } = await searchParams
  const payload = await getPayload({ config })
  
  let blogs: Blog[] = []
  let orders: Order[] = []

  if (query) {
    const blogRes = await payload.find({
      collection: 'blogs',
      where: {
        or: [
          { name: { contains: query } },
          { anounce: { contains: query } }
        ]
      },
      limit: 10
    })
    blogs = blogRes.docs

    const orderRes = await payload.find({
      collection: 'orders',
      where: {
        or: [
          { name: { contains: query } },
          { number: { contains: query } }
        ]
      },
      limit: 10
    })
    orders = orderRes.docs
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <h1 className="text-4xl font-oswald uppercase font-black mb-8">
        Пошук: {query || '...'}
      </h1>

      <form action="/search" className="mb-12 flex gap-4">
        <input 
          type="text" 
          name="q" 
          defaultValue={query}
          placeholder="Шукати новини або накази..."
          className="flex-grow p-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#2d5ca6] outline-none font-medium"
        />
        <button type="submit" className="bg-[#2d5ca6] text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all shadow-lg">
          Знайти
        </button>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-oswald uppercase font-bold mb-6 border-b pb-2">Результати в новинах ({blogs.length})</h2>
          <div className="space-y-6">
            {blogs.map(blog => (
              <Link key={blog.id} href={`/news/${blog.slug}`} className="block group">
                <time className="text-xs text-gray-400 font-bold uppercase">{blog.date ? new Date(blog.date).toLocaleDateString('uk-UA') : ''}</time>
                <h3 className="text-lg font-bold group-hover:text-[#2d5ca6] transition-colors">{blog.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-oswald uppercase font-bold mb-6 border-b pb-2">Результати в наказах ({orders.length})</h2>
          <div className="space-y-6">
            {orders.map(order => (
              <Link key={order.id} href={`/orders/${order.slug}`} className="block group">
                <span className="text-xs text-[#2d5ca6] font-mono font-bold">№ {order.number}</span>
                <h3 className="text-lg font-bold group-hover:text-[#2d5ca6] transition-colors">{order.name}</h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
