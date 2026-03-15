import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function OrdersPage() {
  const payload = await getPayload({ config })
  
  const { docs: orders } = await payload.find({
    collection: 'orders',
    sort: '-date',
    limit: 100,
  })

  return (
    <div className="c-section finances-wrap header-trigger">
      <div className="o-container projects-npa-wrap w-container">
        <div className="content-container">
          <h1 id="IAD" className="finances-heading">Нормативна база</h1>
          <div className="o-tabpane-inf">
            <a href="https://zakon.rada.gov.ua/laws/show/324/95-%D0%B2%D1%80" target="_blank" className="laws-list-item">Закони України</a>
          </div>
          <div className="o-tabpane-inf">
            <a href="https://zakon.rada.gov.ua/laws/show/1047/98" target="_blank" className="laws-list-item">Указ Президента України "Про День туризму"</a>
          </div>
          <div className="o-tabpane-inf">
            <a href="https://docs.google.com/document/d/1GBbONgqiJ1vOvcMteapWDKh6djxk2DueiqcN7KRi3TA/edit?usp=sharing" className="laws-list-item">Акти Кабінету Міністрів України</a>
          </div>
          
          <h2 className="finances-heading" style={{ marginTop: '40px' }}>Накази ДАРТ</h2>
          <div className="orders-list">
            {orders.map((order) => (
              <div key={order.id} className="o-tabpane-inf">
                <a href={order.url || order.link || '#'} target="_blank" rel="noopener noreferrer" className="laws-list-item">
                  {order.name} {order.number ? `№ ${order.number}` : ''} {order.date ? `від ${new Date(order.date).toLocaleDateString('uk-UA')}` : ''}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
