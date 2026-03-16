import React from 'react'
import { DocListItem } from '@/components/DocListItem'
import { AccessibilityTrigger } from '@/components/AccessibilityTrigger'

export default function FinancesPage() {
  return (
    <div className="c-section finances-wrap header-trigger">
      <AccessibilityTrigger />
      
      <div className="o-container projects-npa-wrap w-container">
        <div>
          <h1 id="IAD" className="finances-heading">Фінанси та план роботи ДАРТ</h1>
          <div className="finances-reports">
            <DocListItem href="/webflow/documents/Річний-звіт-ДАРТ-за--2024-рік.pdf" label="Річна фінансова та бюджетна звітність ДАРТ за 2024 рік" />
            <DocListItem href="/webflow/documents/Річний-звіт-ДАРТ-за-2023-рік.pdf" label="Річна фінансова та бюджетна звітність ДАРТ за 2023 рік" />
            <DocListItem href="https://drive.google.com/file/d/1jY1JlrAb9wHvSHi27tAVr2sn2Acz8SUn/view" label="План діяльності з внутрішнього аудиту на 2023-2025 роки" />
            <DocListItem href="/webflow/documents/Річний-звіт-ДАРТ-за-2022-рік.pdf" label="Річна фінансова та бюджетна звітність ДАРТ за 2022 рік" />
            <DocListItem href="https://drive.google.com/file/d/1ohkdZbK7GfoYF6x7R2DCAGkUUdZOWlwp/view" label="Орієнтовний план проведення консультацій з громадськістю на 2022 рік" />
            <DocListItem href="https://drive.google.com/file/d/10hchIm4hcwTGqwA3cEYBKVmryRocP1Dn/view?usp=sharing" label='Наказ № 310 від 31.12.2021 "Про затвердження Орієнтовного плану проведення консультацій з громадськістю на 2022 рік"' />
            <DocListItem href="https://drive.google.com/file/d/1AtcECZxYteZfkEsjXF0GbNHM9n1VCsxN/view" label="Публічний звіт Голови Державного агентства розвитку туризму України Мар'яни Олеськів за 2022 рік" />
            <DocListItem href="https://drive.google.com/file/d/1ajBWS7OXTRN5fn39Ech55ZH2ruv5K9do/view?usp=sharing" label="Стратегічний план діяльності з внутрішнього аудиту на 2022 – 2024 роки" />
            <DocListItem href="https://drive.google.com/file/d/1DywX2UVhHl4I_CR9__1ec4DqEV_sQswR/view?usp=sharing" label="Операційний план з внутрішнього аудиту на 2022" />
            <DocListItem href="/webflow/documents/Річний-звіт-ДАРТ-за-2021-рік.pdf" label="Річна фінансова та бюджетна звітність ДАРТ за 2021 рік" />
            <DocListItem href="https://drive.google.com/file/d/1P5igH0wNg-9x0coit2KLirXfir0FPYoi/view?usp=sharing" label="Кошторис на 2021 рік (28.10.2021)" />
            <DocListItem href="https://drive.google.com/file/d/1TN1MfeIu4NJemHvXqkdR3vhrsZfRPbi4/view?usp=sharing" label='Наказ №619 від 16.11.2021 "Про затвердження бюджетної програми на 2021 за КПКВК 3106010' />
            <DocListItem href="https://drive.google.com/file/d/1ItST6nVoHYGVbvnTLe-tRgxZc6iIQk60/view?usp=sharing" label="Штатний розпис" />
            <DocListItem href="https://drive.google.com/file/d/1NA2dR7yi6Wx14chQlxL_gOTZyuE1cjrZ/view?usp=sharing" label="Кошторис на 2021 рік (28 січня 2021)" />
            <DocListItem href="/webflow/documents/Річний-звіт-ДАРТ-за-2020-рік.pdf" label="Річна фінансова та бюджетна звітність ДАРТ за 2020 рік" />
            <DocListItem href="https://drive.google.com/file/d/1TYD7MZZ0yRN1GRInrd4XU2vO7WOuBnyE/view?usp=sharing" label="План діяльності Державного агентства розвитку туризму України на 2021 рік" />
            <DocListItem href="/webflow/documents/52_план-ДАРТ.pdf" label="План діяльності Державного агенства розвитку туризму України на серпень — грудень 2020 року" />
            <DocListItem href="/webflow/documents/Звіт-ДАРТ-2020.pdf" label="Звіт Державного агентства розвитку туризму України за результатами виконання покладених завдань та плану роботи за 2020 рік" />
          </div>

          <h2 className="finances-heading">Перелік нормативно-правових актів що регулюють оплату праці керівника та заступників керівників ДАРТ</h2>
          <p className="categories--page--text">Структура, принципи формування та розмір оплати праці, винагороди, додаткові блага керівника та заступників керівників ДАРТ формуються на основі наступних законів та нормативно-правових актів:</p>
          
          <div className="content-container">
            <DocListItem href="https://zakon.rada.gov.ua/laws/show/889-19#Text" label="Закон України «Про державну службу»" />
            <DocListItem href="https://zakon.rada.gov.ua/laws/show/1682-18#Text" label="Закон України «Про очищення влади»" />
            <DocListItem href="https://zakon.rada.gov.ua/laws/show/246-2016-%D0%BF#Text" label="Постанова Кабінету Міністрів України від 25 березня 2016 року № 246 «Про затвердження Порядку проведення конкурсу на зайняття посад державної служби»" />
            <DocListItem href="https://zakon.rada.gov.ua/laws/show/z0903-16#Text" label="Наказ Міністерства соціальної політики України 13 червня 2016 року № 646 «Типове положення про преміювання державних службовців органів державної влади, інших державних органів, їхніх апаратів (секретаріатів)»" />
            <DocListItem href="https://zakon.rada.gov.ua/laws/show/15-2017-%D0%BF#Text" label="Постанова Кабінету Міністрів України від 18 січня 2017 року № 15 «Питання оплати праці працівників державних органів»" />
            <DocListItem href="https://zakon.rada.gov.ua/laws/show/500-2016-%D0%BF#Text" label="Постанова Кабінету Міністрів України від 8 серпня 2016 року № 500 «Про затвердження Порядку надання державним службовцям матеріальної допомоги для вирішення соціально-побутових питань»" />
            <DocListItem href="https://zakon.rada.gov.ua/laws/show/z0081-20#Text" label="Наказ Міністерства соціальної політики України 16.12.2019  №1767 «Про затвердження Типового положення про преміювання державних службовців,які займають посади державної служби категорії «А»" />
          </div>
        </div>
      </div>
    </div>
  )
}
