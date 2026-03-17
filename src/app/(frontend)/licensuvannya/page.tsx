import React from 'react'
import { DocumentLink } from '@/components/DocumentLink'

export default function LicensuvannyaPage() {
  return (
    <div className="categories-page-wrap header-trigger">
      
      <div className="w-layout-blockcontainer o-container alt-categories w-container">
        <h1 className="categories-page-header1">Процедура отримання ліцензії туроператора</h1>
      </div>

      <div className="w-layout-blockcontainer o-container infographics-wrap w-container">
        <div className="infographics-item first infographics-license">
          <DocumentLink href="https://zakon.rada.gov.ua/laws/file/text/81/f450587n122.doc" className="infographics-link w-inline-block">
            <div className="infographics-content">
              <h3 className="infographics-content-header">Заповніть заяву</h3>
              <div className="infographics-content-text"><span className="infographics-bold">про отримання ліцензії, </span></div>
              <div className="text-block-29"><span className="infographics-bold"><strong className="bold-text-9">завантажити примірник можна прямо тут</strong></span></div>
            </div>
          </DocumentLink>
        </div>
        <div className="t-arr infographics-arrow second"></div>
        <div className="infographics-item third infographics-licencse">
          <div className="infographics-content">
            <h3 className="infographics-header">Додайте необхідні документи та надішліть </h3>
            <h3 className="infographics-content-header">на поштову адресу ДАРТ</h3>
            <div className="infographics-content-text">Необхідний перелік документів зазначено нижче</div>
          </div>
        </div>
        <div className="flipped-arrow license-arrow">
          <div className="t-arr infographics-semiflipped-arrow fourth"></div>
        </div>
        <div className="infographics-item fifth infographics-licencse">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Розгляд заяви</h3>
            <div className="infographics-content-text">органом ліцензування (ДАРТ)</div>
          </div>
        </div>
        <div className="t-arr infogaphics-flipped-arrow sixth"></div>
        <div className="infographics-item seventh infographics-licencse">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Офіційна відповідь</h3>
            <div className="infographics-content-text">Отримайте офіційну відповідь щодо статусу ліцензії</div>
          </div>
        </div>
      </div>

      <div className="w-layout-blockcontainer o-container w-container">
        <h1 className="categories-page-header-2">Вичерпний перелік документів, необхідних для отримання послуги</h1>
        <ul role="list" className="list">
          <li className="categories--page--text">Заява про отримання ліцензії на право провадження туроператорської діяльності</li>
          <li className="categories--page--text">Копії документів (їх витягів), що підтверджують освітньо-кваліфікаційний рівень, стаж роботи керівника здобувача ліцензії, необхідний для провадження туроператорської діяльності.</li>
          <li className="categories--page--text">Копія документа, що підтверджує фінансове забезпечення цивільної відповідальності перед туристами.</li>
          <li className="categories--page--text">Копія договору, укладеного зі страховою компанією, про обов’язкове (медичне та від нещасних випадків) страхування туристів, що здійснюють туристичні подорожі.</li>
          <li className="categories--page--text">
            <DocumentLink href="https://zakon.rada.gov.ua/laws/show/991-2015-%D0%BF#n67" className="laws-list-item">
              Опис документів, що подаються для одержання ліцензії на правопровадження туроператорської діяльності.
            </DocumentLink>
          </li>
          <li className="categories--page--text">Відомості щодо місць впровадження туроператорської діяльності</li>
          <li className="categories--page--text">Документ, що підтверджує відсутність здійснення контролю за діяльністю суб’єкта господарювання у значенні, наведеному у статті 1 Закону України “Про захист економічної конкуренції”, резидентами держав, що здійснюють збройну агресію проти України, у значенні, наведеному у статті 1 Закону України “Про оборону України”.</li>
        </ul>
        <div className="categories--page--text">ДАРТ, відповідно до п. 24 Положення про Державне агентство розвитку туризму України, видає ліцензії на право провадження туроператорської діяльності та веде ліцензійний Реєстр суб’єктів туроператорської діяльності.</div>
        
        <h1 className="categories-page-header-2">Опис послуг</h1>
        <div className="categories--page--text">Туристичні оператори - це юридичні особи, що мають виняткові права на діяльність з реалізації та надання туристичних послуг, забезпеченню створення та організації туристичного продукту, а також діяльність посередника з надання супровідних і характерних послуг.</div>
        <div className="categories--page--text">Туроператор може здійснювати як туроператорську, так і турагентську діяльність.</div>
        <div className="categories--page--text"><strong>Діяльність туристичного агента, який займається виключно реалізацією туристичних послуг, ліцензуванню не підлягає.</strong></div>
        <div className="categories--page--text">Ліцензія надає виключне право на надання послуг з оформлення документів для виїзду за межі України та право використовувати в назві слово «туроператор».</div>
        <div className="categories--page--text">Ліцензія на туроператорську діяльність є безстроковою.</div>
        
        <h1 className="categories-page-header-2">Види послуг</h1>
        <div className="categories--page--text">Видача, розширення, звуження та анулювання ліцензії на право провадження туроператорської діяльності.</div>
        
        <h1 className="categories-page-header-2">Строки надання послуг</h1>
        <div className="categories--page--text">Видача та розширення - 10 робочих днів з дня одержання заяви.</div>
        <div className="categories--page--text">Звуження та анулювання - 5 робочих днів з дня одержання заяви.</div>
        
        <h1 className="categories-page-header-2">Вартість послуг</h1>
        <div className="categories--page--text">Послуга звуження та анулювання ліцензії – безоплатно.</div>
        <h3 className="categories-header-3">Послуга видачі ліцензії на право провадження туроператорської діяльності</h3>
        <div className="categories--page--text">Адміністративний збір: разова плата в розмірі одного прожиткового мінімуму, з огляду на розмір прожиткового мінімуму для працездатних осіб, що діє на день прийняття органом ліцензування рішення про видачу ліцензії</div>
        <div className="laws-list-item"> (ст.14 <DocumentLink href="http://zakon2.rada.gov.ua/laws/show/222-19/page" className="laws-list-item">Закон України «Про ліцензування видів господарської діяльності»</DocumentLink>)</div>
        <div className="categories--page--text">Плата за видачу ліцензії проводиться у строк не пізніше 10 робочих днів з дня оприлюднення рішення про видачу ліцензії на офіційному веб-сайті Державного агентства розвитку туризму України в розділі &quot;Накази&quot;.</div>
        
        <h1 className="categories-page-header-2">Видача ліцензії на право провадження туроператорської діяльності</h1>
        <div className="categories--page--text">Ліцензія на туроператорську діяльність надається Державним агентством розвитку туризму України.</div>
        
        <div className="categories-page-termin">
          <div className="text-block-17"><strong>Строк надання послуги: </strong>10 робочих днів з дня одержання органом ліцензування заяви про отримання ліцензії</div>
        </div>
        <div className="categories-page-termin">
          <div className="text-block-18"><strong>Результат надання: </strong>Ліцензія на право провадження туроператорської діяльності. Наказ про видачу ліцензії на право провадження туроператорської діяльності. Внесення даних до Ліцензійного реєстру суб&#x27;єктів туроператорської діяльності.</div>
        </div>
        <div className="categories-page-termin">
          <div className="text-block-19">
            <strong>Способи отримання результату: </strong>Повний пакет документів надсилається:<br />
            1) особисто; <br />
            2) поштовим відправленням з описом вкладення (орган ліцензування надсилає поштові відправлення з повідомленням за місце знаходженням здобувача ліцензії протягом одного робочого дня з дня оформлення відповідного документа, якщо інший строк надсилання не встановлено законом);<br />
            3) в електронному вигляді.
          </div>
        </div>
        
        <div className="categories-page-termin">
          <div className="text-block-20"><strong className="categories-header-3">Підстави для відмови:</strong> </div>
        </div>
        <ul role="list" className="list">
          <li className="categories--page--text">установлення невідповідності здобувача ліцензії ліцензійним умовам, установленим для провадження виду господарської діяльності, зазначеного в заяві про отримання ліцензії;</li>
          <li className="categories--page--text">виявлення недостовірності даних у підтвердних документах, поданих здобувачем ліцензії.</li>
        </ul>
        <div className="categories--page--text">Виявленням недостовірності даних у підтвердних документах, поданих суб’єктом господарювання до органу ліцензування, є встановлення на момент подання документів здобувачем ліцензії чи ліцензіатом наявності розбіжності між даними, наведеними в них, та фактичним станом цього суб’єкта господарювання. Не вважаються недостовірними дані, підстава наведення яких суб’єктом господарювання не могла бути для нього завідомо неналежною.</div>
        
        <h1 className="categories-header-3-copy">Порядок оскарження:</h1>
        <div className="categories--page--text">Здобувач ліцензії може звернутись з апеляцією та іншою скаргою на дії органу ліцензування до Експертно-апеляційної ради з питань ліцензування Державної регуляторної служби України (вул. Арсенальна, 9/11, м. Київ, 01011). Форма подачі апеляції є довільною. До апеляції додаються документи, що підтверджують її обґрунтованість.</div>
        
        <h1 className="categories-header-3-copy">Мова обслуговування</h1>
        <div className="categories--page--text">Частиною восьмою статті 23 Закону України «Про забезпечення функціонування української мови як державної» (далі – Закон) передбачено, що мовою туристичного та екскурсійного обслуговування є державна мова. Туристичне чи екскурсійне обслуговування іноземців та осіб без громадянства може здійснюватися іншою мовою.</div>
        <div className="categories--page--text">Відповідно до статті 30 Закону мовою обслуговування споживачів в Україні є державна мова. Підприємства, установи та організації всіх форм власності, фізичні особи-підприємці, інші суб’єкти господарювання, що обслуговують споживачів (крім випадків, встановлених частиною третьою цієї статті), здійснюють обслуговування та надають інформацію про товари (послуги), у тому числі через інтернет-магазини та інтернет-каталоги, державною мовою. Інформація державною мовою може дублюватися іншими мовами. На прохання клієнта його персональне обслуговування може здійснюватися також іншою мовою, прийнятною для сторін.</div>
        <div className="categories--page--text">З огляду на зазначене та з метою запобігання порушенню прав громадян на отримання послуг державною мовою, інформуємо туроператорів про необхідність неухильного дотримання вимог частини восьмої статті 23 та 30 Закону.</div>
        
        <h1 className="categories-page-header-2">Нормативно-правові акти з питань надання адміністративної послуги:</h1>
        <DocumentLink href="https://zakon.rada.gov.ua/laws/show/222-19/page#Text" className="laws-list w-inline-block">
          Закон України «<strong>Про ліцензування видів господарської діяльності</strong>»
        </DocumentLink>
        <DocumentLink href="https://zakon.rada.gov.ua/laws/show/5203-17#Text" className="laws-list w-inline-block">
          Закон України «<strong>Про адміністративні послуги</strong>»
        </DocumentLink>
        <DocumentLink href="https://zakon.rada.gov.ua/laws/show/324/95-%D0%B2%D1%80#Text" className="laws-list w-inline-block">
          Закон України «<strong>Про туризм</strong>»
        </DocumentLink>
        <DocumentLink href="https://zakon.rada.gov.ua/laws/show/991-2015-%D0%BF#Text" className="laws-list w-inline-block">
          Постанова КМУ №991 від 11.11.2015 «<strong>Про затвердження Ліцензійних умов провадження туроператорської діяльності</strong>»
        </DocumentLink>
      </div>
    </div>
  )
}
