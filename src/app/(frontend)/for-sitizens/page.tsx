import React from 'react'
import { Tabs } from '@/components/Tabs'
import { DocListItem } from '@/components/DocListItem'
import { DocumentLink } from '@/components/DocumentLink'

export default function ForSitizensPage() {
  const tabs = [
    {
      id: 'explanations',
      label: "Роз'яснення",
      content: (
        <div id="explanations">
          <DocListItem href="https://drive.google.com/file/d/1W3QPo8Frd-bthPDIAf3OJST0Lfx84CD0/view?usp=sharing" label="Інформування суб'єктів господарювання щодо подачі декларації про провадження господарської діяльності без отримання дозвільних документів у період воєнного стану в електронній формі - через Єдиний державний веб-портал електронних послуг" />
          <DocListItem href="/webflow/documents/САЙТ--Повідомлення-про-обробку-персональних-даних.pdf" label="Повідомлення про обробку персональних даних" />
        </div>
      )
    },
    {
      id: 'for-talking',
      label: 'Для обговорення',
      content: (
        <div id="for-talking">
          <DocListItem href="https://drive.google.com/file/d/1Q1i6rnaFgJ6TPVx07WpVhqQ5NTypbUqx/view?usp=sharing" label="Постанова Про внесення змін у додаток до постанови Кабінету Міністрів України від 24 лютого 2022 р. № 153" />
          <DocListItem href="https://drive.google.com/file/d/1LCaNr3bdVfpStvlZO4glwiRaThbR-1Ek/view?usp=sharing" label="Пояснювальна записка до проєкту постанови Кабінету Міністрів України «Про внесення змін у додаток до постанови Кабінету Міністрів України від 24 лютого 2022 р. № 153" />
          <DocListItem href="/webflow/documents/наказ-робоча-група-з-додатками.pdf" label="Наказ про нові редакції додатка до наказу ДАРТ від 19.08.2020 № 42 та затвердженого ним положення" />
          <DocListItem href="https://drive.google.com/file/d/1cDu5TDjhe8GFvrZKeGdEexyUhOJVCqei/view" label="Звіт про проведені консультації з громадськістю у ІІ кварталі 2023 року" />
          <DocListItem href="https://drive.google.com/file/d/1sGn4DpjrSjohyq1n8v_AyxSQdlCtzm7k/view?usp=sharing" label="Методичні рекомендації з питань формування безбар’єрності в туризмі" />
          <DocListItem href="https://drive.google.com/file/d/1wKvpAYE_pTeQMPZDGeT4rsE5sFXYc5gK/view" label="Звіт про проведені консультації з громадськістю у ІІ кварталі 2024 року" />
        </div>
      )
    },
    {
      id: 'public-info',
      label: 'Публічна інформація',
      content: (
        <div id="public-info" className="o-column-large-medium">
          <h2 className="inform-heading"><strong className="bold-text-7">Доступ до публічної інформації</strong></h2>
          <h3 className="heading-11"><strong className="bold-text-5">Порядок складання та подання запиту на інформацію:</strong></h3>
          <ol role="list" className="list-2">
            <li className="content-blue">Запит на інформацію, розпорядником якої є ДАРТ, може бути поданий:<br />на поштову адресу: 01001, м. Київ, вул. Прорізна, 2;<br />на електронну адресу: <a href="mailto:dart@tourism.gov.ua?subject=%D0%97%D0%B0%D0%BF%D0%B8%D1%82%20%D0%BD%D0%B0%20%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D1%96%D1%8E" className="laws-list-item">dart@tourism.gov.ua</a>;</li>
            <li className="content-blue">Запит на інформацію, розпорядником якої є ДАРТ, може бути подано запитувачем особисто за адресою:<br />вул. Прорізна, 2, м. Київ, 01001 (скринька розміщена на першому поверсі приміщення у доступному для громадян місці).</li>
            <li className="content-blue">У формі запиту зазначається інформація про запитувача та спосіб надання інформації з проставленням знаку "+" або"-".</li>
            <li className="content-blue">Відповідь на запит на інформацію надається у спосіб, обраний запитувачем, протягом п'яти робочих днів з дня надходження запиту.</li>
            <li className="content-blue">У разі коли запит стосується надання великого обсягу інформації або потребує пошуку інформації серед значної кількості даних, строк розгляду запиту може бути продовжено до 20 робочих днів з обґрунтуванням такого продовження. Про продовження строку запитувачу повідомляється в письмовій формі не пізніше ніж протягом п'яти робочих днів з дня надходження запиту.</li>
            <li className="content-blue">Інформація на запит надається безкоштовно. У разі якщо задоволення запиту на інформацію передбачає виготовлення копій документів обсягом більш як 10 сторінок, запитувач зобов'язаний відшкодувати фактичні витрати на копіювання та друк.</li>
            <li className="content-blue">Запит на інформацію повинен містити:<br />прізвище, ім’я, по батькові, (найменування) запитувача, поштову адресу або адресу електронної пошти, а також номер засобу зв’язку (якщо такий є);<br />загальний опис інформації або вид, назву, реквізити чи зміст документа, щодо якого зроблено запит (якщо запитувачу це відомо);<br />підпис і дату (за умови подання письмового запиту).</li>
            <li className="content-blue">Датою подання електронного запиту на отримання публічної інформації є дата його надходження на визначену електронну адресу або дата надходження електронної форми.</li>
            <li className="content-blue">Запит на інформацію подається у довільній формі або за <a href="https://docs.google.com/document/d/1XylkUYIFS5QmCU4DQplv3gUcAbsTsLnq/edit?usp=sharing&ouid=101641807070613604490&rtpof=true&sd=true" target="_blank" className="laws-list-item">примірною формою</a>.</li>
          </ol>
          <DocListItem href="/webflow/documents/наказ-від-21.02.2024-№-22.pdf" label='Наказ від 21.02.2024 № 22 "Про затвердження Порядку відшкодування фактичних витрат на копіювання або друк документів, що надаються за запитом на інформацію, розпорядником якої є Державне агентство розвитку туризму України, та їх Розміру"' />
          <DocListItem href="/webflow/documents/Довідка-про-розмір-прожиткового-мінімуму-на-01.01.2024.pdf" label="Довідка про розмір прожиткового мінімуму на 01.01.2024" />
        </div>
      )
    },
    {
      id: 'useful-info',
      label: 'Корисна інформація',
      content: (
        <div id="useful-info" className="o-container w-container">
          <div className="useful">
            {[
              { href: "/webflow/documents/memories-places.pdf", img: "/webflow/images/memories-places.jpg", title: "РЕКОМЕНДАЦІЇ щодо відвідування маршрутів пам'яті російсько-української війни" },
              { href: "/webflow/documents/marshrouts.pdf", img: "/webflow/images/Маршрути-пам’яті_1.webp", title: "Маршрути пам'яті" },
              { href: "https://drive.google.com/file/d/1ZPIZg1btEGLLajx5El8n1N05a2b0qptP/view?usp=sharing", img: "/webflow/images/Метрекомендації_1.avif", title: "Методичні рекомендації для суб'єктів, які провадять туристичну діяльність..." },
              { href: "https://drive.google.com/file/d/1oNpD5Y4dICvtYbpF099tmoJN0aPS24Ak/view?usp=sharing", img: "/webflow/images/opituvannya_1.webp", title: "Опитування ДАРТ щодо стану фізичної доступності засобів розміщення..." },
              { href: "https://drive.google.com/file/d/1sGn4DpjrSjohyq1n8v_AyxSQdlCtzm7k/view?usp=sharing", img: "/webflow/images/recommendations.webp", title: "Формування безбар'єрного простору в туризмі" },
              { href: "https://drive.google.com/file/d/121Bzs_BtfTF07z6DG512N1Dr3KPHxpAw/view?usp=sharing", img: "/webflow/images/Guide__00001.webp", title: "Інтерактивний гайд безбар'єрності" },
              { href: "https://drive.google.com/file/d/1q37j7DKYatT6s-nRiwXE9e9Kt64K63lK/view?usp=sharing", img: "/webflow/images/rights.webp", title: "Уповноважений ВРУ по правам людини" },
              { href: "https://drive.google.com/file/d/10JeBSbZHom8isrLkrrWlUMHvSaITn2EJ/view?usp=sharing", img: "/webflow/images/Звіт_безбарєрність_2025.jpg", title: "Опитування ДАРТ щодо стану фізичної доступності засобів розміщення у регіонах України - 2025" },
            ].map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" className="useful-link w-inline-block">
                <div className="useful-item">
                  <div className="useful-item__img"><img src={item.img} alt="" className="useful-item__image" /></div>
                  <h3 className="useful-item__heading">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'registers',
      label: 'Реєстри',
      content: (
        <div id="registers">
          <div className="o-column-large-medium">
            <h3 className="inform-heading bold-header">Ліцензійний реєстр суб'єктів туроператорської діяльності</h3>
            <div className="o-divide-block">
              <div className="content-blue">Реєстр міститься за посиланням: <a href="https://cutt.ly/vww8sbQz" target="_blank" className="laws-list-item">https://cutt.ly/vww8sbQz</a></div>
              <div className="content-blue">Детальніше з інформацією щодо умов ліцензування можна ознайомитись у розділі <Link href="/licensuvannya" className="laws-list-item">«Ліцензування туроператорів»</Link>.</div>
            </div>
          </div>
          <div className="o-column-large-medium">
            <h3 className="inform-heading bold-header">Реєстр свідоцтв категоризованих готелів</h3>
            <div className="o-divide-block">
              <div className="content-blue">Реєстр свідоцтв категоризованих готелів знаходиться за посиланням: <a href="https://cutt.ly/1wuXoCaF" target="_blank" className="laws-list-item">https://cutt.ly/1wuXoCaF</a></div>
              <div className="content-blue">Детальніше з інформацією щодо умов надання категорій можна ознайомитись у розділі <Link href="/categorization" className="laws-list-item">«Категоризація готелів»</Link></div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'appeal',
      label: 'Громадська приймальня',
      content: (
        <div id="appeal" className="o-column-large-medium">
          <h2 className="inform-heading">Особистий прийом громадян в Державному агентстві розвитку туризму України</h2>
          <div className="content-blue">У зв’язку із введенням воєнного стану... особистий прийом громадян в Державному агентстві розвитку туризму тимчасово припинено.</div>
          <div className="sceldule-table">
            <div className="sceldule-table-row first-row">
              <div className="sceldule-table-cell left-cell"><div className="content-blue bold">Дні прийому</div></div>
              <div className="sceldule-table-cell"><div className="content-blue bold">Години прийому</div></div>
            </div>
            <div className="sceldule-table-row"><div className="sceldule-table-cell left-cell">понеділок-четвер</div><div className="sceldule-table-cell">з 9:30 до 17:30</div></div>
            <div className="sceldule-table-row"><div className="sceldule-table-cell left-cell">п’ятниця</div><div className="sceldule-table-cell">з 9:00 до 16:45</div></div>
          </div>
          <h2 className="inform-heading">Звернення громадян</h2>
          <div className="content-blue">Громадяни України, згідно Закону України "Про звернення громадян", мають право звернутися...</div>
        </div>
      )
    }
  ]

  return (
    <div className="w-layout-blockcontainer o-container sitizens header-trigger w-container">
      
      <h1 className="sitizen-first-header">Інформація для громадськості</h1>
      
      <Tabs 
        tabs={tabs} 
        className="sitizen-tab-wrap"
        tabMenuClassName="tabs-menu-2"
        tabLinkClassName="sitizen-tab"
      />
    </div>
  )
}
