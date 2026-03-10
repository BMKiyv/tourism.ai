import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function HomePage() {
  const payload = await getPayload({ config })
  
  const { docs: blogs } = await payload.find({
    collection: 'blogs',
    limit: 6,
    sort: '-date',
  })

  const { docs: orders } = await payload.find({
    collection: 'orders',
    limit: 5,
    sort: '-date',
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-oswald uppercase mb-8 border-l-4 border-[#2d5ca6] pl-4 font-bold text-gray-900 tracking-tight">Останні новини</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog.id} className="group border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all bg-white flex flex-col">
              <div className="p-8 flex flex-col h-full">
                <time className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-3 block">{blog.date ? new Date(blog.date).toLocaleDateString('uk-UA') : ''}</time>
                <h2 className="text-xl font-oswald uppercase mb-4 line-clamp-2 font-bold text-gray-900 group-hover:text-[#2d5ca6] transition-colors">{blog.name}</h2>
                <p className="text-gray-600 line-clamp-3 mb-6 text-sm leading-relaxed flex-grow">{blog.anounce}</p>
                <Link href={`/news/${blog.slug}`} className="text-[#2d5ca6] font-bold hover:underline flex items-center gap-1 mt-auto group/link">
                  Читати далі <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f0f7ff] to-white p-10 rounded-[2.5rem] border border-blue-50 shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="space-y-1">
            <h2 className="text-4xl font-oswald uppercase font-black text-gray-900">Останні накази</h2>
            <p className="text-gray-500 font-medium">Офіційні документи Державного агентства розвитку туризму</p>
          </div>
          <Link href="/orders" className="text-[#2d5ca6] hover:bg-blue-50 px-6 py-3 rounded-2xl shadow-sm border border-blue-100 transition-colors font-bold whitespace-nowrap bg-white">Всі накази →</Link>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm border border-white transition-all hover:shadow-md hover:bg-white group">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center gap-3 mb-3">
                   <span className="text-[10px] font-black text-[#2d5ca6] uppercase tracking-widest bg-blue-100 px-2.5 py-1 rounded-full">Документ</span>
                   <span className="text-sm font-bold text-gray-400">№ {order.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#2d5ca6] transition-colors">{order.name}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  {order.date ? new Date(order.date).toLocaleDateString('uk-UA') : ''}
                </div>
              </div>
              <a href={order.url || '#'} target="_blank" rel="noopener noreferrer" className="bg-[#2d5ca6] text-white px-10 py-3.5 rounded-2xl hover:bg-[#1e4480] transition-all font-bold whitespace-nowrap shadow-lg shadow-blue-200/50 hover:shadow-blue-300/60 active:scale-95">
                Завантажити PDF
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
