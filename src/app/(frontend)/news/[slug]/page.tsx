import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config })
  
  const { docs } = await payload.find({
    collection: 'blogs',
    where: {
      slug: { equals: slug }
    }
  })

  const blog = docs[0]

  if (!blog) {
    return notFound()
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <nav className="mb-12 flex items-center text-sm text-gray-500 gap-2">
        <Link href="/news" className="hover:text-[#2d5ca6]">Новини</Link>
        <span>/</span>
        <span className="text-gray-900 truncate">{blog.name}</span>
      </nav>

      <header className="mb-16">
        <time className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
          {blog.date ? new Date(blog.date).toLocaleDateString('uk-UA', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
        </time>
        <h1 className="text-5xl font-oswald uppercase font-black text-gray-900 leading-[1.1] tracking-tight mb-8">
          {blog.name}
        </h1>
        {blog.anounce && (
          <p className="text-2xl text-gray-500 font-medium leading-relaxed border-l-4 border-blue-100 pl-6 py-2 italic">
            {blog.anounce}
          </p>
        )}
      </header>

      {/* Тут ми виводимо основний контент. Якщо в Payload це RichText (Lexical), потрібно використовувати спеціальний рендерер. 
          Але поки ми імпортували дані як текст або HTML з Webflow. */}
      <div className="prose prose-lg max-w-none prose-blue prose-headings:font-oswald prose-headings:uppercase prose-headings:font-bold">
        {/* Якщо контент з Webflow прийшов як HTML string */}
        <div dangerouslySetInnerHTML={{ __html: blog.rich || '' }} />
      </div>

      <footer className="mt-20 pt-10 border-t border-gray-100">
        <div className="flex justify-between items-center bg-gray-50 p-8 rounded-3xl">
          <div>
            <span className="text-gray-400 text-sm block mb-1 font-bold uppercase tracking-widest">Автор публікації</span>
            <span className="text-xl font-bold text-gray-900">{blog.author || 'Прес-служба ДАРТ'}</span>
          </div>
          <Link href="/news" className="bg-[#2d5ca6] text-white px-8 py-3 rounded-2xl font-bold hover:bg-black transition-all shadow-lg shadow-blue-100">
            Всі новини
          </Link>
        </div>
      </footer>
    </article>
  )
}
