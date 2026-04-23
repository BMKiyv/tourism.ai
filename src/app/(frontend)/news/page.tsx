import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import Image from 'next/image'

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

interface BlogItem {
  id: string
  slug: string
  name: string
  date?: string
  img?: {
    filename?: string
    alt?: string
  } | null
}

export default async function NewsPage({ searchParams }: PageProps) {
  const params = await searchParams
  const pageParam = params.page
  const parsedPage = Array.isArray(pageParam) ? pageParam[0] : pageParam
  const page = parsedPage ? parseInt(parsedPage, 10) : 1

  const payload = await getPayload({ config })

  const { docs: blogs, totalPages, page: currentPage } = await payload.find<BlogItem>({
    collection: 'blogs',
    depth: 1,
    limit: 10,
    page: Number.isNaN(page) || page < 1 ? 1 : page,
    sort: '-date',
  })

  const makePageHref = (targetPage: number) => {
    const nextParams = new URLSearchParams()

    for (const [key, value] of Object.entries(params)) {
      if (key === 'page' || value === undefined) {
        continue
      }

      if (Array.isArray(value)) {
        for (const entry of value) {
          nextParams.append(key, entry)
        }
      } else {
        nextParams.set(key, value)
      }
    }

    nextParams.set('page', String(targetPage))

    return `/news?${nextParams.toString()}`
  }

  return (
    <div className="b-section-2 tab-u-spacing news-section alt-news">
      <div className="o-container all-news-container w-container">
        <h1 className="anounce-header popular_news-header">Всі новини</h1>

        <div className="all-news-wrapper w-dyn-list">
          {blogs.length > 0 ? (
            <div role="list" className="collection-list w-dyn-items">
              {blogs.map((blog) => {
                const imgData = blog.img && typeof blog.img === 'object' ? blog.img : null
                const filename = imgData?.filename
                const imageUrl = filename ? `/media/${filename}` : '/webflow/images/hero_1.webp'

                return (
                  <div key={blog.id} role="listitem" className="collection-item w-dyn-item">
                    <Link href={`/news/${blog.slug}`} className="news-list-item w-inline-block">
                      <div className="o-layout-nws-overflow">
                        <Image
                          loading="lazy"
                          src={imageUrl}
                          alt={imgData?.alt || blog.name}
                          width={400}
                          height={250}
                          className="o-layout-img"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <h3 className="o-layout-h-3 height-3lines text-blue">{blog.name}</h3>
                      <div className="o-layout-inf date-news">
                        {blog.date
                          ? new Date(blog.date).toLocaleDateString('uk-UA', {
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric',
                            })
                          : ''}
                      </div>
                      <div className="o-layout-baseline"></div>
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          )}

          {totalPages > 1 && (
            <div role="navigation" aria-label="List" className="w-pagination-wrapper s-pagination alt-news">
              {currentPage > 1 && (
                <a href={makePageHref(currentPage - 1)} className="w-pagination-previous s-pagination__prev">
                  <div className="s-pagination__prev__txt text-blue w-inline-block">Назад</div>
                </a>
              )}

              {currentPage < totalPages && (
                <a href={makePageHref(currentPage + 1)} className="w-pagination-next s-pagination__next">
                  <div className="s-pagination__next__txt text-blue w-inline-block">Далі</div>
                </a>
              )}

              <div className="w-page-count s-pagination__count text-blue">Page {currentPage} of {totalPages}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
