import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function OrdersPage() {
  const payload = await getPayload({ config })
  
  const { docs: orders } = await payload.find({
    collection: 'orders',
    limit: 100, // Для початку виведемо багато, потім додамо пагінацію
    sort: '-date',
  })

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <nav className="mb-8 flex items-center text-sm text-gray-500 gap-2">
        <Link href="/" className="hover:text-[#2d5ca6]">Головна</Link>
        <span>/</span>
        <span className="font-bold text-gray-900">Накази</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-5xl font-oswald uppercase font-black text-gray-900 mb-4 tracking-tighter">
          Офіційні накази
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Архів наказів та розпоряджень Державного агентства розвитку туризму України.
        </p>
      </header>

      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest">№ Наказу</th>
                <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest">Назва документа</th>
                <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest text-right">Дата</th>
                <th className="px-8 py-5 text-sm font-bold text-gray-400 uppercase tracking-widest text-right">Дія</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-blue-50/30 transition-colors group">
                  <td className="px-8 py-6">
                    <span className="font-mono font-bold text-[#2d5ca6] bg-blue-50 px-3 py-1 rounded-lg">
                      {order.number}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#2d5ca6] transition-colors leading-snug">
                      {order.name}
                    </h3>
                  </td>
                  <td className="px-8 py-6 text-right whitespace-nowrap font-medium text-gray-500">
                    {order.date ? new Date(order.date).toLocaleDateString('uk-UA') : '—'}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <a 
                      href={order.url || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-[#2d5ca6] transition-all shadow-sm active:scale-95"
                    >
                      PDF
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
