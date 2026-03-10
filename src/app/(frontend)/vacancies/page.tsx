import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function VacanciesPage() {
  const payload = await getPayload({ config })
  
  const { docs: vacancies } = await payload.find({
    collection: 'vacancies',
    sort: '-createdAt',
  })

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      <nav className="mb-8 flex items-center text-sm text-gray-500 gap-2">
        <Link href="/" className="hover:text-[#2d5ca6]">Головна</Link>
        <span>/</span>
        <span className="font-bold text-gray-900">Вакансії</span>
      </nav>

      <header className="mb-12">
        <h1 className="text-5xl font-oswald uppercase font-black text-gray-900 mb-4 tracking-tighter">
          Вакансії
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Долучайтеся до команди Державного агентства розвитку туризму України. Ми шукаємо талановитих фахівців для розвитку галузі.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vacancies.length > 0 ? (
          vacancies.map((vacancy) => (
            <div key={vacancy.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black text-[#2d5ca6] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">Вакансія</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{vacancy.name}</h2>
              </div>
              <a 
                href={vacancy.link || '#'} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2d5ca6] font-bold hover:underline group"
              >
                Детальніше про вакансію
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))
        ) : (
          <div className="col-span-2 bg-gray-50 p-12 rounded-3xl text-center">
            <p className="text-gray-500 font-medium">Наразі відкритих вакансій немає. Слідкуйте за оновленнями!</p>
          </div>
        )}
      </div>
    </div>
  )
}
