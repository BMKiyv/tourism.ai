'use client'

import React, { useState } from 'react'
import { DocListItem } from '@/components/DocListItem'
import { DocumentLink } from '@/components/DocumentLink'

export const CleaningTab = () => {
  const [showDetail, setShowDetail] = useState(false)

  if (showDetail) {
    return (
      <div id="tabcontent" className="tabcontent" style={{ display: 'block' }}>
        <a 
          href="#cleaning" 
          className="table-link w-inline-block" 
          onClick={(e) => {
            e.preventDefault()
            setShowDetail(false)
          }}
        >
          <div className="laws-list-item">Назад</div>
        </a>
        <div className="bio_text">
          Законом України <DocumentLink href="https://zakon.rada.gov.ua/laws/show/1682-18#Text">«Про очищення влади»</DocumentLink> передбачено проведення перевірки достовірності відомостей щодо застосування заборон, передбачених частинами третьою і четвертою статті 1 Закону України «Про очищення влади», поданих державними службовцями, які обіймають відповідні посади, та претендентами на їх заміщення. Порядок проведення такої перевірки та перелік органів, що її проводять, затверджено постановою Кабінету Міністрів України від 16 жовтня 2014 р. № 563 <DocumentLink href="https://zakon.rada.gov.ua/laws/show/563-2014-%D0%BF#Text">«Деякі питання реалізації Закону України «Про очищення влади»</DocumentLink>. На виконання вимог Закону України «Про очищення влади»<br />
          Державне агентство розвитку туризму України інформує про те, що розпочато перевірку<strong> стосовно осіб:</strong>
        </div>
        <div className="bio-table-wrap">
          <div className="table-link w-inline-block">
            <div className="subsidiary-table">
              <div className="subsidiary-table-cell first">
                <div className="subsidiary-table-bold">№ п/п</div>
                <div className="subsidiary-table-text">1<br /></div>
              </div>
              <div className="subsidiary-table-cell">
                <div className="subsidiary-table-bold">П.І.Б</div>
                <div className="subsidiary-table-text second-text">ПАВЛИШИН О. О.<br /></div>
              </div>
              <div className="subsidiary-table-cell">
                <div className="subsidiary-table-bold">Посада</div>
                <div className="subsidiary-table-text">Головний спеціаліст Відділу розвитку туризму та цифровізації</div>
              </div>
              <div className="subsidiary-table-cell">
                <div className="subsidiary-table-bold">Дата початку перевірки</div>
                <div className="subsidiary-table-text last-text">02.07.2025<br /><br /> </div>
              </div>
            </div>
          </div>
        </div>
        <DocumentLink href="/webflow/documents/Заява_Павлишин_О_О_.pdf" className="table-link w-inline-block">
          <div className="laws-list-item">Файли, що додаються:</div>
        </DocumentLink>
      </div>
    )
  }

  return (
    <div id="cleaning" className="tablinks">
      <div className="anticor-tab-wrap">
        <DocListItem href="/webflow/documents/ПОВІДОМЛЕННЯ_від_04_02_2021_року_Про_початок_проходження_перевірки.pdf" label="ПОВIДОМЛЕННЯ про початок проходження перевірки відповідно до Закону України &quot;Про очищения влади&quot;" date="04.01.2021" />
      </div>
      <div className="anticor-tab-wrap">
        <DocListItem href="/webflow/documents/start-inspection.pdf" label="ПОВIДОМЛЕННЯ про початок проходження перевірки відповідно до Закону України &quot;Про очищения влади&quot;" date="08.05.2024" />
      </div>
      <div className="anticor-tab-wrap">
        <div className="o-tabpane-inf">
          <a 
            id="pavlyshyn" 
            href="#tabcontent" 
            className="laws-list-item"
            onClick={(e) => {
              e.preventDefault()
              setShowDetail(true)
            }}
          >
            ПАВЛИШИН О.О. - Інформація щодо проведення перевірки, передбаченої Законом України &quot;Про очищення влади&quot;
          </a>
        </div>
        <span className="anticor-date">02.07.2025</span>
      </div>
    </div>
  )
}
