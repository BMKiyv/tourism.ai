import React from 'react'
import { DocumentLink } from '@/components/DocumentLink'
import { AccessibilityTrigger } from '@/components/AccessibilityTrigger'

export default function CategorizationPage() {
  return (
    <div className="categories-page-wrap header-trigger">
      <AccessibilityTrigger />
      
      <div className="w-layout-blockcontainer o-container alt-categories w-container">
        <h1 className="categories-page-header1">Процедура отримання категорії закладу тимчасового розміщення</h1>
      </div>

      <div className="w-layout-blockcontainer o-container infographics-wrap w-container">
        <div id="1" className="infographics-item first categories-1">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Надсилання заявки</h3>
            <div className="infographics-content-text"><span className="text-span">органу з сертифікації на території якого розміщений готель</span></div>
          </div>
        </div>
        <div id="2" className="t-arr infographics-arrow second categories-2"></div>
        <div id="3" className="infographics-item third categories-3">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Утворення комісії</h3>
            <div className="infographics-content-text">З питань оцінювання готелю органами сертифікації</div>
          </div>
        </div>
        <div id="4" className="t-arr infographics-arrow fourth categories-4"></div>
        <div id="5" className="infographics-item fifth categories-5">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Розгляд заявки на проведеня категоризації</h3>
            <div className="infographics-content-text">органом сертифікації</div>
          </div>
        </div>
        <div className="flipped-arrow categories-6">
          <div id="6" className="t-arr infographics-semiflipped-arrow sixth categories-6"></div>
        </div>
        <div id="11" className="infographics-item eleventh categories-11">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Комісія видає заявнику </h3>
            <div className="infographics-content-text">Свідоцтво про встановлення готелю відповідної категорії</div>
          </div>
        </div>
        <div id="8" className="t-arr infogaphics-flipped-arrow eighth categories-8"></div>
        <div id="9" className="infographics-item nineth categories-9">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Орган сертифікації надсилає до ДАРТ</h3>
            <div className="infographics-content-text">результати оцінювання готелю та пропозиції. Рішення приймається більшістю голосів</div>
          </div>
        </div>
        <div id="10" className="t-arr infogaphics-flipped-arrow tenth categories-10"></div>
        <div id="7" className="infographics-item seventh categoties-7">
          <div className="infographics-content">
            <h3 id="11" className="infographics-content-header">Роботи з оцінювання готелів</h3>
            <div className="infographics-content-text">виконуються відповідно до вимог ДСТУ 4269 &quot;Послуги туристичні. Класифікація готелів&quot;</div>
          </div>
        </div>
      </div>

      <div className="w-layout-blockcontainer o-container categories-lists w-container">
        <h2 className="categories-page-header-2">Вичерпний перелік документів, необхідних для отримання послуги</h2>
        <ul role="list" className="list">
          <li className="categories--page--text">Заява про встановлення відповідної категорії готелю</li>
          <li className="categories--page--text">Опитувальна анкета</li>
          <li className="categories--page--text">Звіт про оцінку відповідності до вимог ДСТУ 4269 &quot;Послуги туристичні. Класифікація готелів&quot;</li>
          <li className="categories--page--text">Сертифікати відповідності, договори оренди тощо до послуг, які надаються в готелі</li>
          <li className="categories--page--text">Фото та відеоматеріали, для визначення відповідності вимогам пунктів ДСТУ 4269</li>
        </ul>
        <div className="categories--page--text">
          Встановлення категорій готелям здійснюється відповідно до Порядку встановлення категорій готелям та іншим об&#x27;єктам, що призначаються для надання послуг з тимчасового розміщення (проживання) затвердженого Постановою Кабінету Міністрів України від 29.07.2009 № 803
        </div>
        
        <h1 className="categories-page-header-2">Строки надання послуги</h1>
        <div className="categories--page--text">Розгляд Комісією з категоризації - 14 днів з дня одержання матеріалів від органу сертифікації</div>
        
        <h1 className="categories-page-header-2">Вартість послуг</h1>
        <div className="categories--page--text">Видача свідоцтва про встановлення категорії готелю здійснюється безоплатно</div>
        
        <h1 className="categories-page-header-2">Видача свідоцтва про встановлення категорії готелю</h1>
        <div className="categories--page--text">Свідоцтво про встановлення категорії готелю надається Державним агентством розвитку туризму України.</div>
        
        <div className="categories-page-termin">
          <div className="text-block-17"><strong>Строк надання послуги:</strong> 14 днів з дня одержання від органу сертифікації, акредитованого для виконання робіт із сертифікації послуг з тимчасового розміщення (проживання)</div>
        </div>
        <div className="categories-page-termin">
          <div className="text-block-18"><strong>Результат надання: </strong>Свідоцтво про встановлення категорії готелю. Наказ про встановлення категорії готелю. Внесення даних до Реєстру свідоцтв категоризованих готелів.</div>
        </div>
        <div className="categories-page-termin">
          <div className="text-block-19">
            <strong>Способи отримання результату: </strong>Повний пакет документів надсилається:<br />
            1) особисто; <br />
            2) поштовим відправленням з описом вкладення (орган ліцензування надсилає поштові відправлення з повідомленням за місце знаходженням здобувача ліцензії протягом одного робочого дня з дня оформлення відповідного документа, якщо інший строк надсилання не встановлено законом);<br />
            3) в електронному вигляді.
          </div>
        </div>

        <h1 className="categories-page-header-2">Перелік підстав для відмови у наданні послуги </h1>
        <ul role="list" className="list-3">
          <li className="categories--page--text">Заявник надав недостовірні або неповні відомості</li>
          <li className="categories--page--text">За наданими відомостями неможливо встановити відповідність вимогам, а саме: ДСТУ 4269: &quot;Послуги туристичні. Класифікація готелів&quot;, ДСТУ 4094-2002 &quot;Послуги перукарень. Загальні вимоги&quot;, ДСТУ 4268:2003 &quot;Послуги туристичні. Засоби розміщування. Загальні вимоги&quot;, ДБН В.2.2-9 &quot;Будинки і споруди. Громадські будинки і споруди. Основні положення&quot;, ДСТУ 4281:2004 &quot;Заклади ресторанного господарства класифікація&quot;</li>
        </ul>

        <h1 className="categories-page-header-2">Відомості про порядок оскарження рішень, дій або бездіяльності посадових осіб</h1>
        <ul role="list" className="list-3">
          <li className="categories--page--text">Спірні питання, що виникають під час встановлення категорії готелям, розглядаються комісією з апеляцій.</li>
          <li className="categories--page--text">Апеляційна заява подається до комісії з апеляції лише в разі наявності відповідного рішення комісії із встановлення категорій.</li>
          <li className="categories--page--text">Апеляційна заява подається в письмовій формі на адресу ДАРТ, особисто заявником не пізніше 10 днів здати одержання ним рішення комісії із встановлення категорій готелям про відмову в установленні категорії такому готелю. До апеляційної заяви додаються матеріали (документи, інформаційні матеріали, фото тощо), які призначені для пояснення позиції заявника, викладеної в апеляційній заяві.</li>
          <li className="categories--page--text">Днем подання апеляційної заяви вважається дата її реєстрації в ДАРТ.</li>
          <li className="categories--page--text">Комісія розглядає апеляційну заяву протягом 14 днів з наступного дня після її надходження.</li>
          <li className="categories--page--text">Розгляду не підлягає повторна апеляційна заява від одного і того самого заявника з того самого питання щодо одного і того самого готелю у разі, якщо попередню заяву було розглянуто і прийнято відповідне рішення.</li>
          <li className="categories--page--text">За результатами розгляду апеляційної заяви Комісія приймає рішення про задоволення або про відмову в задоволенні апеляційної заяви. Інформація щодо прийнятого рішення доводиться ДАРТ до відома заявника та органу із сертифікації шляхом надсилання рекомендованого листа з повідомленням про його вручення у строк, що не перевищує 5 днів з дня прийняття такого рішення.</li>
          <li className="categories--page--text">Рішення Комісії може бути оскаржене заявником у судовому порядку відповідно до законодавства України.</li>
        </ul>

        <h1 className="categories-page-header-2">Нормативно-правові акти з питань надання адміністративної послуги:</h1>
        <DocumentLink href="https://zakon.rada.gov.ua/laws/show/324/95-%D0%B2%D1%80#Text" className="laws-list w-inline-block">
          Закон України «Про туризм»
        </DocumentLink>
        <DocumentLink href="https://zakon.rada.gov.ua/laws/show/803-2009-%D0%BF#n17" className="laws-list w-inline-block">
          Постанова Кабінету Міністрів України від 29 липня 2009 р. № 803 «Про затвердження Порядку встановлення категорій готелям та іншим об’єктам, що призначаються для надання послуг з тимчасового розміщення (проживання)»;
        </DocumentLink>
        <DocumentLink href="https://zakon.rada.gov.ua/laws/show/z1527-22#Text" className="laws-list w-inline-block">
          Наказ Міністерства інфраструктури України від 17 листопада 2022 року № 858 «Положення про Комісію із встановлення категорій готелям та іншим об’єктам, що призначаються для надання послуг з тимчасового розміщення (проживання)»;
        </DocumentLink>

        <h1 className="categories-page-header-2">Національні стандарти:</h1>
        <ul role="list" className="list-3">
          <li className="categories--page--text">ДСТУ 4268:2003 &quot;Послуги туристичні. Засоби розміщування&quot;</li>
          <li className="categories--page--text">ДСТУ 4269:2003 &quot;Послуги туристичні. Класифікація готелів&quot;</li>
          <li className="categories--page--text">ДСТУ 4527:2006 &quot;Послуги туристичні. Засоби розміщування. Терміни та визначення&quot;</li>
          <li className="categories--page--text">ДСТУ 4094-2002 &quot;Послуги перукарень. Загальні вимоги&quot;</li>
          <li className="categories--page--text">ДБН В.2.2-9 &quot;Будинки і споруди. Громадські будинки і споруди. Основні положення&quot;</li>
          <li className="categories--page--text">ДСТУ 4281:2004. &quot;Заклади ресторанного господарства. Класифікація&quot;</li>
        </ul>
      </div>
    </div>
  )
}
