import Link from 'next/link'

export default function ForCitizensPage() {
  return (
    <div className="w-layout-blockcontainer o-container sitizens header-trigger w-container">
      <div className="w-layout-vflex">
        <h1 className="sitizen-first-header">Інформація для громадськості</h1>
      </div>
      <div className="sitizen-tab-wrap w-tabs">
        <div className="tabs-menu-2 w-tab-menu">
          <div className="sitizen-tab w-inline-block w-tab-link w--current">
            <div className="sitizen-tab-text">Роз'яснення</div>
          </div>
          <div className="sitizen-tab w-inline-block w-tab-link">
            <div className="sitizen-tab-text">Для обговорення</div>
          </div>
          <div className="sitizen-tab w-inline-block w-tab-link">
            <div className="sitizen-tab-text">Доступ до публічної інформації</div>
          </div>
        </div>
        <div className="w-tab-content">
          {/* Tab content would go here */}
          <div className="w-tab-pane w--tab-active">
            <div className="o-tabpane-inf">
                <Link href="/rozyasnennya-ta-proekti" className="laws-list-item">Роз'яснення та проекти</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
