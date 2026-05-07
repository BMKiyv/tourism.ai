import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'
import type { Order } from '@/payload-types'
import { DocListItem } from '@/components/DocListItem'

export default async function OrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page } = await searchParams
  const payload = await getPayload({ config })
  
  const { docs: orders, totalPages, page: pageNumber } = await payload.find({
    collection: 'orders',
    depth: 1,
    limit: 20,
    page: page ? parseInt(page) : 1,
    sort: '-date',
  })

  const currentPage = pageNumber || 1

  return (
    <div className="c-section finances-wrap header-trigger">
      
      <div className="o-container projects-npa-wrap w-container">
        <div className="content-container">
          <h1 id="IAD" className="finances-heading">Нормативна база</h1>
          <DocListItem href="https://mkip.gov.ua/files/pdf/%D0%9C%D1%96%D0%B6%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%96%20%D0%B0%D0%BA%D1%82%D0%B8.pdf" label="Міжнародні акти" />
          <DocListItem href="https://zakon.rada.gov.ua/laws/show/324/95-%D0%B2%D1%80#Text" label="Закони України" />
          <DocListItem href="https://zakon.rada.gov.ua/laws/show/324/95-%D0%B2%D1%80" label='Закон України "Про туризм"' />
          <DocListItem href="https://zakon.rada.gov.ua/laws/show/2026-14" label='Закон України "Про курорти"' />
          <DocListItem href="https://zakon.rada.gov.ua/laws/show/1047/98" label='Указ Президента України "Про День туризму"' />
          <DocListItem href="https://docs.google.com/document/d/1GBbONgqiJ1vOvcMteapWDKh6djxk2DueiqcN7KRi3TA/edit?usp=sharing" label="Акти Кабінету Міністрів України" />
          <DocListItem href="https://mkip.gov.ua/files/pdf/%D0%86%D0%BD%D1%88%D1%96%20%D0%BD%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%B2%D0%BD%D0%BE.pdf" label="Інші нормативно-правові акти" />
          <DocListItem href="https://mkip.gov.ua/files/pdf/%D0%93%D0%B0%D0%BB%D1%83%D0%B7%D0%B5%D0%B2%D1%96%20%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%B8.pdf" label="Галузеві стандарти" />
        </div>

        <div className="content-container">
          <h2 id="IAD2" className="finances-heading">Накази</h2>
          <div className="orders-wrapper w-dyn-list">
            {orders.length > 0 ? (
              <div role="list" className="orders-list w-dyn-items">
                {orders.map((order: Order) => {
                  const date = order.date ? new Date(order.date).toLocaleDateString('uk-UA') : ''

                  return (
                    <div key={order.id} role="listitem" className="orders-list-item w-dyn-item">
                      <Link href={`/orders/${order.slug}`} className="laws-list-link w-inline-block">
                        <div className="orders-title">Наказ</div>
                        {date && (
                          <>
                            <div className="orders-title">від</div>
                            <div className="orders-title">{date}</div>
                          </>
                        )}
                        {order.number && (
                          <>
                            <div className="orders-title">№</div>
                            <div className="orders-title">{order.number}</div>
                          </>
                        )}
                        <div className="orders-title">&quot;</div>
                        <div className="orders-title">{order.name}</div>
                        <div className="orders-title">&quot;</div>
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
              <div role="navigation" aria-label="List" className="w-pagination-wrapper orders-pagination">
                {currentPage > 1 && (
                  <a href={`/orders?page=${currentPage - 1}`} className="w-pagination-previous pagination-next">
                    <div className="orders-text w-inline-block">Назад</div>
                  </a>
                )}
                {currentPage < totalPages && (
                  <a href={`/orders?page=${currentPage + 1}`} className="w-pagination-next pagination-next">
                    <div className="orders-text w-inline-block">Далі</div>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
