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
    <div className="w-layout-blockcontainer o-container header-trigger department w-container">
      <h1 className="plans-header">Вакансії</h1>
      <div className="categories--page--text">
        Відповідно до Закону України «Про внесення змін до деяких законів України щодо функціонування державної служби та місцевого самоврядування у період дії воєнного стану», яким внесено зміни до Закону України «Про правовий режим воєнного стану», в Державному агентстві розвитку туризму України оголошено добори на зайняття вакантних посад державної служби в період дії воєнного стану:<br /><br />
        Резюме за <a href="/webflow/documents/резюме-встановленої-форми.doc" target="_blank" className="laws-list-item">встановленою формою</a> приймаються на електрону адресу: <a href="mailto:hr@tourism.gov.ua?subject=Резюме з сайту" className="laws-list-item">hr@tourism.gov.ua</a>.
      </div>
      <div className="vacancies-wrap w-dyn-list">
        {vacancies.length > 0 ? (
          <div role="list" className="w-dyn-items">
            {vacancies.map((vacancy) => (
              <div key={vacancy.id} role="listitem" className="w-dyn-item" style={{ marginBottom: '20px' }}>
                <a href={vacancy.link || '#'} target="_blank" rel="noopener noreferrer" className="devdep-link w-inline-block">
                  <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid #2d5ca6' }}>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{vacancy.name}</div>
                    <div style={{ color: '#2d5ca6', marginTop: '10px', fontWeight: 'bold' }}>Докладніше →</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-dyn-empty">
            <div>Наразі відкритих вакансій немає. Слідкуйте за оновленнями!</div>
          </div>
        )}
      </div>
    </div>
  )
}
