import Link from 'next/link'

export default function ProjectsNPAPage() {
  return (
    <div className="c-section u-switch-1 u-margin header-trigger">
      <div className="o-container projects-npa-wrap w-container">
        <div className="content-container">
          <h1 id="IAD" className="finances-heading">Регуляторна діяльність</h1>
          <div className="o-tabpane-inf">
            <a href="https://tourism.gov.ua/blog/povidomlennya-pro-povtorne-oprilyudnennya-proiektu-regulyatornogo-akta" target="_blank" className="laws-list-item">Повідомлення про повторне оприлюднення проєкту постанови Кабінету Міністрів України «Про внесення змін до пункту 2 Порядку надання послуг з тимчасового розміщення (проживання)»</a>
          </div>
          <div className="o-tabpane-inf">
            <a href="/webflow/documents/order14.pdf" target="_blank" className="laws-list-item">Наказ від 10.02.2026 № 14 "Про внесення змін до Плану діяльності ДАРТ з підготовки проєктів регуляторних актів на 2026 рік"</a>
          </div>
          <div className="o-tabpane-inf">
            <a href="/webflow/documents/План-РД.pdf" target="_blank" className="laws-list-item">План діяльності Державного агентства розвитку туризму України з підготовки проєктів регуляторних актів на 2026 рік</a>
          </div>
        </div>
      </div>
    </div>
  )
}
