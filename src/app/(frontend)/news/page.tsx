import React from 'react'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@/payload.config'
import type { Blog } from '@/payload-types'

const FALLBACK_IMAGE = '/webflow/images/hero_1.webp'

const getImageUrl = (img: unknown) => {
  if (img && typeof img === 'object' && 'filename' in img) {
    const filename = (img as { filename?: string | null }).filename
    if (filename) return `/media/${filename}`
  }

  return FALLBACK_IMAGE
}

const formatDate = (date?: string | null) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('uk-UA')
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  const pageNumber = page ? parseInt(page, 10) : 1
  const payload = await getPayload({ config })

  const [{ docs: popular }, { docs: latest }, { docs: announcements }, allNews] = await Promise.all([
    payload.find({
      collection: 'blogs',
      limit: 1,
      sort: '-date',
      where: {
        is_popular: {
          equals: true,
        },
      },
    }),
    payload.find({
      collection: 'blogs',
      limit: 1,
      sort: '-date',
    }),
    payload.find({
      collection: 'blogs',
      limit: 1,
      sort: '-date',
      where: {
        and: [
          {
            anounce: {
              exists: true,
            },
          },
          {
            anounce: {
              not_equals: '',
            },
          },
        ],
      },
    }),
    payload.find({
      collection: 'blogs',
      limit: 9,
      page: Number.isNaN(pageNumber) ? 1 : Math.max(1, pageNumber),
      sort: '-date',
    }),
  ])

  const popularNews = popular[0]
  const latestNews = latest[0]
  const announcement = announcements[0]

  return (
    <div className="main header-trigger">
      <div className="popular-news-anoncement">
        <div className="w-layout-blockcontainer o-container news-anoncement w-container">
          <div className="popular_news_wrap">
            <h2 className="popular_news-header anounce-header">Актуальні новини</h2>
            <div className="w-dyn-list">
              {popularNews ? (
                <div role="list" className="collection-list-3 w-dyn-items">
                  <div role="listitem" className="collection-item-4 w-dyn-item">
                    <Link href={`/news/${popularNews.slug}`} className="popular_nwes_link w-inline-block">
                      <div className="popular-nwes-img">
                        <img
                          alt={popularNews.name || 'Популярна новина'}
                          loading="lazy"
                          src={getImageUrl(popularNews.img)}
                          className="popular_img"
                        />
                      </div>
                      <div className="text-block-16">{popularNews.name}</div>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              )}
            </div>
          </div>

          <div className="verical-line"></div>

          <div className="anounce-wrap w-dyn-list">
            {announcement ? (
              <div role="list" className="alt-news-wrap w-dyn-items">
                <div role="listitem" className="collection-item-3 anounce-item w-dyn-item">
                  <h3 className="anounce-header center">Анонс</h3>
                  <div className="anounce-text second-anounce">
                    <Link href={`/news/${announcement.slug}`} className="anounce-link w-inline-block">
                      <div className="anoncement-img">
                        <img
                          alt={announcement.name || 'Анонс'}
                          loading="lazy"
                          src={getImageUrl(announcement.img)}
                          className="anounce-pict"
                        />
                      </div>
                      <div className="anounce-data">
                        <div className="news-date">{formatDate(announcement.date)}</div>
                      </div>
                      <h4 className="anounce-content second">{announcement.anounce || announcement.name}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="empty-state-2 w-dyn-empty">
                <div className="text-block-21">На даний момент анонсів майбутніх подій немає</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="o-container news-container">
        <div className="last-news-wrapper">
          <div className="last-news w-dyn-list">
            {latestNews ? (
              <div role="list" className="alt-news-wrap w-dyn-items">
                <div role="listitem" className="collection-item-3 w-dyn-item">
                  <div className="anounce-text">
                    <Link href={`/news/${latestNews.slug}`} className="anounce-link w-inline-block">
                      <h3 className="anounce-header">Остання новина</h3>
                      <div className="anounce-block">
                        <div className="anounce-img">
                          <img
                            alt={latestNews.name || 'Остання новина'}
                            loading="lazy"
                            src={getImageUrl(latestNews.img)}
                            className="o-layout-img image-7"
                          />
                        </div>
                        <h4 className="anounce-content">{latestNews.name}</h4>
                      </div>
                      <div className="alt-news-details first">
                        <div className="text-block-12">Детальніше</div>
                        <div className="details-icon"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="o-container all-news-container w-container">
        <h2 className="anounce-header popular_news-header">Всі новини</h2>
        <div className="all-news-wrapper w-dyn-list">
          {allNews.docs.length > 0 ? (
            <div role="list" className="collection-list w-dyn-items">
              {(allNews.docs as Blog[]).map((newsItem) => (
                <div key={newsItem.id} role="listitem" className="collection-item w-dyn-item">
                  <Link href={`/news/${newsItem.slug}`} className="news-list-item w-inline-block">
                    <div className="o-layout-nws-overflow">
                      <img
                        loading="lazy"
                        src={getImageUrl(newsItem.img)}
                        alt={newsItem.name || 'Новина'}
                        className="o-layout-img"
                      />
                    </div>
                    <h3 className="o-layout-h-3 height-3lines text-blue">{newsItem.name}</h3>
                    <div className="o-layout-inf date-news">{formatDate(newsItem.date)}</div>
                    <div className="o-layout-baseline"></div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          )}

          {allNews.totalPages > 1 && (
            <div role="navigation" aria-label="List" className="w-pagination-wrapper s-pagination alt-news">
              {allNews.page > 1 && (
                <a href={`/news?page=${allNews.page - 1}`} aria-label="Previous Page" className="w-pagination-previous s-pagination__prev">
                  <div className="s-pagination__prev__txt text-blue w-inline-block">Назад</div>
                </a>
              )}

              {allNews.page < allNews.totalPages && (
                <a href={`/news?page=${allNews.page + 1}`} aria-label="Next Page" className="w-pagination-next s-pagination__next">
                  <div className="s-pagination__next__txt text-blue w-inline-block">Далі</div>
                </a>
              )}

              <div aria-label={`Page ${allNews.page} of ${allNews.totalPages}`} role="heading" aria-level={2} className="w-page-count s-pagination__count text-blue">
                {allNews.page} / {allNews.totalPages}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
