import Link from 'next/link'

export default function LicensingPage() {
  return (
    <div className="categories-page-wrap header-trigger">
      <div className="w-layout-blockcontainer o-container alt-categories w-container">
        <h1 className="categories-page-header1">Процедура отримання ліцензії туроператора</h1>
      </div>
      <div className="w-layout-blockcontainer o-container infographics-wrap w-container">
        <div className="infographics-item first infographics-license">
          <a href="https://zakon.rada.gov.ua/laws/file/text/81/f450587n122.doc" className="infographics-link w-inline-block">
            <div className="infographics-content">
              <h3 className="infographics-content-header">Заповніть заяву</h3>
              <div className="infographics-content-text"><span className="infographics-bold">про отримання ліцензії, </span></div>
              <div className="text-block-29"><span className="infographics-bold"><strong className="bold-text-9">завантажити примірник можна прямо тут</strong></span></div>
            </div>
          </a>
        </div>
        {/* ... more infographics items ... */}
      </div>
      
      <div className="o-container infographics-wrap w-container">
        <div className="infographics-item infographics-license">
            <div className="infographics-content">
                <h3 className="infographics-content-header">Перелік документів</h3>
                <div className="infographics-content-text">
                    Для отримання ліцензії туроператор подає до органу ліцензування заяву та підтвердні документи.
                </div>
                <Link href="/licenziyniy-reiestr" className="infographics-link-more">Докладніше</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
