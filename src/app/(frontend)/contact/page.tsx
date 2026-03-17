import React from 'react'
import { ContactForm } from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <section id="contact" className="contacts-wrap header-trigger">
      
      <div className="o-container contacts w-container">
        <div className="contacts-content">
          <h1 className="contacts-content-header">Контакти Державного агентства розвитку туризму України</h1>
          <div className="contacts-items">
            <div className="contacts-item contacts-item-adress">
              <div className="contacts-item-header">Приймальня</div>
              <div className="contacts-item-content">
                <a href="tel:+380442780808" className="contacts-link">тел. (044) 278-08-08</a><br />
                <a href="mailto:dart@tourism.gov.ua" className="contacts-link">dart@tourism.gov.ua</a><br />
                01001, м. Київ, пров. Музейний, 12<br />
                Пн - Чт - 09:00 - 18:00<br />
                Пт - 09:00 - 16:45<br />
                Сб - Нд - Вихідні
              </div>
            </div>
            <div className="contacts-item">
              <div className="contacts-text-block">
                <div className="contacts-item-header"><strong>Категоризація/Ліцензування</strong></div>
                <a href="mailto:adminservice@tourism.gov.ua" className="contacts-link w-inline-block">
                  <div className="contacts-item-content">adminservice@tourism.gov.ua</div>
                </a>
              </div>
              <div className="contacts-text-block">
                <div className="contacts-item-header"><strong>Контакти для ЗМІ</strong></div>
                <a href="mailto:press@tourism.gov.ua" className="contacts-link w-inline-block">
                  <div className="contacts-item-content">press@tourism.gov.ua</div>
                </a>
              </div>
              <div className="contacts-text-block">
                <div className="contacts-item-header"><strong>Міжнародна співпраця</strong></div>
                <a href="mailto:ic@tourism.gov.ua" className="contacts-link w-inline-block">
                  <div className="contacts-item-content">ic@tourism.gov.ua</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="_4column-flex">
          <div className="_4col-last-block">
            <h3 className="form-main-header">Написати нам</h3>
            <div className="form-block-2 main-form w-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
