import Link from 'next/link'

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
              <form id="email-form" name="email-form" className="form">
                <div className="form-1st-block">
                  <input className="txt-field form-main-input w-input" maxLength={256} name="name" placeholder="Ім'я" type="text" id="name" required />
                  <input className="txt-field-2 form-main-input w-input" maxLength={256} name="email" placeholder="Електронна адреса" type="email" id="email" required />
                </div>
                <textarea id="field" name="field" maxLength={5000} placeholder="Повідомлення" required className="txt-area form-main-area w-input"></textarea>
                <div className="submit-checkbox">
                  <label className="w-checkbox checkbox-wrap">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                    <input id="checkbox" type="checkbox" name="checkbox" required style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
                    <span className="checkbox-label w-form-label" htmlFor="checkbox">Я згоден з обробкою персональних даних</span>
                  </label>
                  <div className="form-cta submit-button">
                    <input type="submit" className="form-main-submit w-button" value="Надіслати" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
