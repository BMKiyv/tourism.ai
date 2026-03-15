import Link from 'next/link'

export default function StatisticPage() {
  return (
    <div className="statistic-wrap header-trigger">
      <div className="o-container projects-npa-wrap w-container">
        <div className="content-container">
          <h1 id="IAD" className="statistic-heading"><strong className="bold-text-6">Статистика</strong></h1>
          <div className="o-tabpane-inf statistic">
            <a href="https://drive.google.com/file/d/1VbzkC8sG9muJGJjEUCFkzBfAsIVbke9A/view?usp=sharing" className="laws-list-item">Звіт за результатами опитування «Проведення дослідження внутрішнього та виїзного туризму українців»<br /><br /></a>
            <a href="https://drive.google.com/file/d/1rltoXVxPX-ZXAUbFh6MX682sYRP48ZQ2/view?usp=sharing" className="laws-list-item">Звіт за результатами опитування «Проведення кількісних досліджень в’їзного туризму на пунктах пропуску через державний кордон» (презентація)<br /><br /></a>
            <a href="https://drive.google.com/file/d/15DyGgDthzl3etR_iuVl3BAMxPFVBhj8E/view?usp=sharing" className="laws-list-item">Методика формування вибіркової сукупності для проведення досліджень внутрішнього та виїзного туризму<br /></a>
          </div>
          <div className="o-tabpane-inf statistic">
            <a href="/webflow/documents/дослідження_внутрішнього_туристичного_ринку.pdf" target="_blank" className="laws-list-item">Результати опитування щодо подорожей Україною під час війни</a>
          </div>
        </div>
      </div>
    </div>
  )
}
