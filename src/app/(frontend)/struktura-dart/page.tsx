import Link from 'next/link'

export default function StructurePage() {
  return (
    <div className="w-layout-blockcontainer o-container alt-structure header-trigger w-container">
      <h2 className="structure-header">Структура Державного агентства розвитку туризму України</h2>
      <div className="structure-wrap">
        <div className="structure-grid">
          {/* 
            Based on the Webflow file, there are several collection lists.
            Since they were empty or dynamic, I will provide a placeholder 
            structure that matches the visual intent of the original page.
          */}
          <div className="structure-column">
            <Link href="/our-team" className="devdep-link w-inline-block">
              <div className="text-block-24">Керівництво</div>
            </Link>
          </div>
          
          <div className="structure-column">
            <h3 className="hs3-h" style={{ color: '#2d5ca6', fontSize: '24px', marginBottom: '20px' }}>Управління та Відділи</h3>
            <div className="devdep w-dyn-list">
              <div className="w-dyn-empty">
                <div>Тут буде перелік департаментів з бази даних.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
