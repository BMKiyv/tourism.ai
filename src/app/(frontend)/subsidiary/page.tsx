import Link from 'next/link'

export default function SubsidiaryPage() {
  return (
    <div className="contacts-wrap header-trigger">
      <div className="o-container subsidiary-container w-container">
        <h1 className="categories-page-header1">Підвідомчі організації</h1>
        <div className="subsidiary-table">
          <div className="subsidiary-table-cell">
            <div className="subsidiary-table-bold">Назва</div>
            <div className="subsidiary-table-text">Державне підприємство "Україна туристична"</div>
          </div>
          <div className="subsidiary-table-cell">
            <div className="subsidiary-table-bold">Адреса</div>
            <div className="subsidiary-table-text second-text">01001, вул. Прорізна, 2, м. Київ</div>
          </div>
          <div className="subsidiary-table-cell">
            <div className="subsidiary-table-bold">електронна пошта</div>
            <div className="subsidiary-table-text">SE.ukrainetravel@gmail.com</div>
          </div>
          <div className="subsidiary-table-cell">
            <div className="subsidiary-table-bold">Телефон</div>
            <div className="subsidiary-table-text last-text">+38(096)086 7986</div>
          </div>
        </div>
      </div>
    </div>
  )
}
