import React from 'react'

export default function SubsidiaryPage() {
  return (
    <div className="contacts-wrap header-trigger">
      
      <div className="o-container subsidiary-container">
        <h1 className="categories-page-header1">Підвідомчі організації</h1>
        <a href="https://tourism.gov.ua/subsidiary/ukraine-touristic" target="_blank" rel="noopener noreferrer" className="subsidiary-link w-inline-block">
          <div className="subsidiary-table">
            <div className="subsidiary-table-cell">
              <div className="subsidiary-table-bold">Назва</div>
              <div className="subsidiary-table-text">Державне підприємство &quot;Україна туристична&quot;</div>
            </div>
            <div className="subsidiary-table-cell">
              <div className="subsidiary-table-bold">Адреса</div>
              <div className="subsidiary-table-text second-text">01001, вул. Прорізна, 2, м. Київ<br />‍</div>
            </div>
            <div className="subsidiary-table-cell">
              <div className="subsidiary-table-bold">електронна пошта</div>
              <div className="subsidiary-table-text">SE.ukrainetravel@gmail.com<br />‍</div>
            </div>
            <div className="subsidiary-table-cell">
              <div className="subsidiary-table-bold">Телефон</div>
              <div className="subsidiary-table-text last-text">+38(096)086 7986<br />‍<br /> </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
