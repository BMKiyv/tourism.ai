import Link from 'next/link'

export default function FinancesPage() {
  return (
    <div className="finances-wrap header-trigger">
      <div className="o-container projects-npa-wrap w-container">
        <div>
          <h1 id="IAD" className="finances-heading">Фінанси та план роботи ДАРТ</h1>
          <div className="finances-reports">
            <a href="/webflow/documents/Річний-звіт-ДАРТ-за--2024-рік.pdf" target="_blank" className="laws-list-item">Річна фінансова та бюджетна звітність ДАРТ за 2024 рік</a>
            <a href="/webflow/documents/Річний-звіт-ДАРТ-за-2023-рік.pdf" target="_blank" className="laws-list-item">Річна фінансова та бюджетна звітність ДАРТ за 2023 рік</a>
            <a href="https://drive.google.com/file/d/1jY1JlrAb9wHvSHi27tAVr2sn2Acz8SUn/view" className="laws-list-item">План діяльності з внутрішнього аудиту на 2023-2025 роки</a>
            <a href="/webflow/documents/Річний-звіт-ДАРТ-за-2022-рік.pdf" target="_blank" className="laws-list-item">Річна фінансова та бюджетна звітність ДАРТ за 2022 рік</a>
          </div>
        </div>
      </div>
    </div>
  )
}
