import React from 'react'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'

export default function AboutDartPage() {
  return (
    <div className="about-page-content">
      
      <header className="hiw-header">
        <img 
          src="/webflow/images/0_1.webp" 
          loading="lazy" 
          sizes="100vw" 
          srcSet="/webflow/images/0_10.webp 500w, /webflow/images/0_10.webp 800w, /webflow/images/0_10.webp 1080w, /webflow/images/0_10.webp 1600w, /webflow/images/0_10.webp 2000w, /webflow/images/0_1.webp 3000w" 
          alt="" 
          className="hiw-bg-img" 
        />
        <div className="o-container u-size w-container">
          <div className="h-connected-block _2">
            <div className="h-centered-flex-block u-borders">
              <div className="hcb-inner-block">
                <h1 className="hcb-h">Про <strong>ДАРТ</strong></h1>
                <div className="hcb-inf">Державне агентство розвитку туризму (ДАРТ) є центральним органом виконавчої влади, який реалізує державну політику в галузі туризму та курортів України.</div>
                <div className="hcb-cta-block">
                  <a href="#contact" className="nav-cta _2 _1 w-inline-block">
                    <div className="nc-bg _2"></div>
                    <div className="nc-bg hover"></div>
                    <div className="nc-inf _2 _1">Зв&#x27;язатися з нами</div>
                  </a>
                  <Link href="/contact" className="nav-cta _3 w-inline-block">
                    <div className="nc-bg"></div>
                    <div className="nc-bg hover"></div>
                    <div className="nc-inf _3">Контакти</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="c-section">
        <div className="o-container w-container">
          <h1 className="_1st-col-h u-none"><strong>Державне агентство розвитку туризму України</strong></h1>
          <div className="w-layout-grid _3-col-grid">
            <div className="gr-col-block">
              <div className="c-bg-img">
                <div className="c-ellipse">
                  <h1 className="c-h">1</h1>
                </div>
              </div>
              <div className="gr-2nd-col-block">
                <h3 className="gr-col-h">Місія</h3>
                <div className="gr-col-inf">Бути дієвим інститутом, що реалізовує державну політику в сфері туризму і забезпечує сталий розвиток галузі, шляхом об’єднання досвіду, знань і ресурсів усіх учасників туристичного ринку України та міжнародних партнерів.</div>
              </div>
            </div>
            <div className="gr-col-block">
              <div className="c-bg-img img-2">
                <div className="c-ellipse">
                  <h1 className="c-h">2</h1>
                </div>
              </div>
              <div className="gr-2nd-col-block">
                <h3 className="gr-col-h">Візія</h3>
                <div className="gr-col-inf">Через 10 років Україна приваблива туристична дестинація та центр для проведення міжнародних конференцій і культурних заходів.</div>
              </div>
            </div>
            <div className="gr-col-block">
              <div className="c-bg-img img-3">
                <div className="c-ellipse">
                  <h1 className="c-h">3</h1>
                </div>
              </div>
              <div className="gr-2nd-col-block">
                <h3 className="gr-col-h">Мета</h3>
                <div className="gr-col-inf">Люди активно подорожують Україною в цілях туризму.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="c-section">
        <div className="h-s-3-bg"></div>
        <div className="o-container is--marg-y w-container">
          <div className="_2-col-flex-block-fix-width">
            <h1 className="_1st-col-h color-white"><strong>Цілі на <br />2020 — 2024</strong></h1>
            <div className="_2nd-col-block tab-first">
              <img src="/webflow/images/dart-logo_white.svg" loading="lazy" alt="" className="o-img" />
            </div>
          </div>
          <div className="w-layout-grid c-grid">
            {[
              "Покращення іміджу України у світі",
              "Збільшення кількості туристів з цільових ринків",
              "Розвиток туристичної інфраструктури",
              "Інновації в туризмі",
              "Розвиток ділового туризму",
              "Розвиток внутрішнього туризму",
              "Якісний сервіс та освіта",
              "Підвищення ефективності управління туристичною сферою (ДПП і СРО)",
              "Аналіз ринку та статистика",
              "Вдосконалення нормативно-правової бази в сфері туризму"
            ].map((goal, index) => (
              <div key={index} className="gr-col-block">
                <div className="c-grid__custom-item">
                  <h1 className="h1 u-custom">{(index + 1).toString().padStart(2, '0')}</h1>
                  <div className="c-grid__custom-item__grad"></div>
                </div>
                <div className="c-grid__custom-infos width">
                  <h3 className="c-grid__title is--color-white--cap-df">{goal}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="h-section-2">
        <div className="o-container w-container">
          <div className="_2-col-flex-block-fix-width">
            <h1 className="_1st-col-h">Діяльність <br /><strong>агентства</strong></h1>
            <div className="_2nd-col-block">
              <div className="_2nd-col-inf">Державне агенство розвитку туризму є центральним органом виконавчої влади, який реалізує державну політику у туристичній сфері.</div>
            </div>
          </div>
          <div className="w-layout-grid _3-col-grid">
            <div className="gr-col-block">
              <div className="gr-coll-ill"></div>
              <div className="gr-2nd-col-block">
                <h3 className="gr-col-h">#МандруйУкраїною</h3>
                <div className="gr-col-inf">Проєкт ДАРТу, спрямований на популяризацію внутрішнього туризму серед співвітчизників .</div>
              </div>
            </div>
            <div className="gr-col-block">
              <div className="gr-coll-ill _2"></div>
              <div className="gr-2nd-col-block">
                <h3 className="gr-col-h">Туристичні магніти</h3>
                <div className="gr-col-inf">Популяризація українських пам&#x27;яток природи та архітектури для співвітчизників та іноземців.</div>
              </div>
            </div>
            <div className="gr-col-block">
              <div className="gr-coll-ill _3"></div>
              <div className="gr-2nd-col-block">
                <h3 className="gr-col-h">UkraineNOW</h3>
                <div className="gr-col-inf">Новий бренд України, що демонструє привабливість України для туризму, культурної взаємодії та бізнесу</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="h-section-5">
        <div className="o-container u-size w-container">
          <div className="_2-col-flex-block">
            <div className="_1st-col-h _2">
              <h1 className="_1st-col-h-2">Державне <br />агентство розвитку<strong> <br />туризму</strong></h1>
              <div className="_1st-col-inf">Маєте ідеї, як зробити Україну привабливішу для туристів, або пропозиції стосовно нашої роботи? Напишіть нам!</div>
              <div className="_1st-col-cta-block"></div>
            </div>
            <div className="_2nd-col-block-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
