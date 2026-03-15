import Link from 'next/link'

export default function CategorizationPage() {
  return (
    <div className="categories-page-wrap header-trigger">
      <div className="w-layout-blockcontainer o-container alt-categories w-container">
        <h1 className="categories-page-header1">Процедура отримання категорії закладу тимчасового розміщення</h1>
      </div>
      <div className="w-layout-blockcontainer o-container infographics-wrap w-container">
        <div id="1" className="infographics-item first categories-1">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Надсилання заявки</h3>
            <div className="infographics-content-text"><span className="text-span">органу з сертифікації на території якого розміщений готель</span></div>
          </div>
        </div>
        <div id="2" className="t-arr infographics-arrow second categories-2"></div>
        {/* ... more infographics items ... */}
      </div>
    </div>
  )
}
