import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { AccessibilityTrigger } from '@/components/AccessibilityTrigger'
import { DocumentLink } from '@/components/DocumentLink'
import Link from 'next/link'

export default async function VacanciesPage() {
  const payload = await getPayload({ config })
  
  const { docs: vacancies } = await payload.find({
    collection: 'vacancies',
    depth: 1,
    limit: 100,
  })

  return (
    <div className="w-layout-blockcontainer o-container header-trigger department w-container">
      <AccessibilityTrigger />
      
      <h1 className="plans-header">Вакансії</h1>
      <div className="categories--page--text">
        Відповідно до Закону України «Про внесення змін до деяких законів України щодо функціонування державної служби та місцевого самоврядування у період дії воєнного стану», яким внесено зміни до Закону України «Про правовий режим воєнного стану», в Державному агентстві розвитку туризму України оголошено добори на зайняття вакантних посад державної служби в період дії воєнного стану:
        <br /><br />
        Резюме за <DocumentLink href="/webflow/documents/резюме-встановленої-форми.doc" className="laws-list-item">встановленою формою</DocumentLink> приймаються на електрону адресу: <DocumentLink href="mailto:hr@tourism.gov.ua?subject=%D0%A0%D0%B5%D0%B7%D1%8E%D0%BC%D0%B5%20%D0%B7%20%D1%81%D0%B0%D0%B9%D1%82%D1%83" className="laws-list-item">hr@tourism.gov.ua</DocumentLink>.
      </div>

      <div className="vacancies-wrap w-dyn-list">
        {vacancies.length > 0 ? (
          <div role="list" className="w-dyn-items">
            {vacancies.map((vacancy: any) => (
              <div key={vacancy.id} role="listitem" className="w-dyn-item">
                <DocumentLink href={vacancy.file?.url || '#'} className="devdep-link w-inline-block">
                  <div>{vacancy.title}</div>
                </DocumentLink>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-dyn-empty">
            <div>На даний момент вакансій немає.</div>
          </div>
        )}
      </div>
    </div>
  )
}
