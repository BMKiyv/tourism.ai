import Link from 'next/link'

export default function AnticorPage() {
  return (
    <div className="w-layout-blockcontainer o-container sitizens header-trigger w-container">
      <h1 className="sitizen-first-header">Антикорупційна діяльність</h1>
      <div className="o-tabpane-inf">
        <a href="/webflow/documents/anticor-plan.pdf" target="_blank" className="laws-list-item">План антикорупційних заходів на 2026 рік</a>
      </div>
      <div className="o-tabpane-inf">
        <Link href="/anticor/report" className="laws-list-item">Звіт про виконання антикорупційної програми</Link>
      </div>
    </div>
  )
}
