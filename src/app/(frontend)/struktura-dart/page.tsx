import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function StrukturaDartPage() {
  const payload = await getPayload({ config })
  
  const { docs: departments } = await payload.find({
    collection: 'departments',
    depth: 1,
    limit: 100,
    sort: 'index',
  })

  // Group departments by parent if needed, but the original layout just lists them.
  // Looking at Webflow, it has multiple collection lists.
  
  return (
    <div className="w-layout-blockcontainer o-container alt-structure header-trigger w-container">
      
      <h2 className="structure-header">Структура Державного агентства розвитку туризму України</h2>
      <div className="structure-wrap">
        <div className="orders-wrapper w-dyn-list">
          {departments.length > 0 ? (
            <div role="list" className="w-dyn-items">
              {departments.map((dept: any) => (
                <div key={dept.id} role="listitem" className="w-dyn-item">
                  <Link href={`/departments/${dept.slug}`} className="devdep-link w-inline-block">
                    <div>{dept.name}</div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-dyn-empty">
              <div>No items found.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
