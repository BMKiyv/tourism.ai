import Link from 'next/link'

export default function PlansAndReportPage() {
  return (
    <div className="w-layout-blockcontainer o-container department header-trigger w-container">
      <h1 className="plans-header">Плани та звіти діяльності ДАРТ</h1>
      <div className="o-tabpane-inf">
        <div className="plans-links">
          <a href="/webflow/documents/dart_report_2025_web.pdf" target="_blank" className="laws-list-item">Публічний звіт Голови Державного агентства розвитку туризму України Наталі Табаки за 2025 рік</a>
        </div>
        <div className="plans-links">
          <a href="/webflow/documents/Публічний-звіт-ДАРТ_2024.pdf" target="_blank" className="laws-list-item">Публічний звіт Державного агентства розвитку туризму України за 2024 рік</a>
        </div>
        <div className="plans-links">
          <a href="/webflow/documents/Орієнтовний-план_-проведення-консультацій-з-громадськістю-на-2025-рік.pdf" target="_blank" className="laws-list-item">Орієнтовний план проведення консультацій з громадськістю на 2025 рік</a>
        </div>
      </div>
    </div>
  )
}
