import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-[#2d5ca6] rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-100 group-hover:bg-black transition-colors">
            Д
          </div>
          <div>
            <span className="text-xl font-oswald uppercase font-black tracking-tight text-gray-900 block leading-none">ДАРТ</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mt-1 block">Tourism Ukraine</span>
          </div>
        </Link>

        <nav className="flex items-center gap-8 font-bold text-sm uppercase tracking-widest">
          <Link href="/" className="text-gray-900 hover:text-[#2d5ca6] transition-colors">Новини</Link>
          <Link href="/orders" className="text-gray-900 hover:text-[#2d5ca6] transition-colors">Накази</Link>
          <Link href="/vacancies" className="text-gray-900 hover:text-[#2d5ca6] transition-colors">Вакансії</Link>
          <Link href="/admin" className="bg-gray-50 px-4 py-2 rounded-lg text-gray-400 hover:text-[#2d5ca6] transition-colors">Вхід</Link>
        </nav>
      </div>
    </header>
  )
}
