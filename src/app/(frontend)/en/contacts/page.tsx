import React from 'react'
import { ContactForm } from '@/components/ContactForm'
import { AccessibilityTrigger } from '@/components/AccessibilityTrigger'

export default function EnglishContactsPage() {
  return (
    <section id="contact" className="contacts-wrap header-trigger">
      <AccessibilityTrigger />
      
      <div className="o-container contacts w-container">
        <div className="contacts-content">
          <h1 className="contacts-content-header">Contacts of State Agency for tourism development of Ukraine</h1>
          <div className="contacts-items">
            <div className="contacts-item contacts-item-adress">
              <div className="contacts-item-header">Reception desk</div>
              <div className="contacts-item-content">
                <a href="tel:+380442780808" className="contacts-link">tel. (044) 278-08-08</a><br />
                <a href="mailto:dart@tourism.gov.ua" className="contacts-link">email: dart@tourism.gov.ua</a><br />
                01001, Muzeynyi lane. 12, Kyiv<br />
                Mon - Thu - 09:00 - 18:00<br />
                Wen - 09:00 - 16:45<br />
                Sat - Sun - Vacations
              </div>
            </div>
            <div className="contacts-item">
              <div className="contacts-text-block">
                <div className="contacts-item-header"><strong>&quot;Categorization/Licensing&quot;</strong></div>
                <a href="mailto:adminservice@tourism.gov.ua" className="contacts-link w-inline-block">
                  <div className="contacts-item-content">adminservice@tourism.gov.ua</div>
                </a>
              </div>
              <div className="contacts-text-block">
                <div className="contacts-item-header"><strong>Press Office</strong></div>
                <a href="mailto:press@tourism.gov.ua" className="contacts-link w-inline-block">
                  <div className="contacts-item-content">press@tourism.gov.ua</div>
                </a>
              </div>
              <div className="contacts-text-block">
                <div className="contacts-item-header"><strong>International Cooperation &amp; Partnerships</strong></div>
                <a href="mailto:ic@tourism.gov.ua" className="contacts-link w-inline-block">
                  <div className="contacts-item-content">ic@tourism.gov.ua</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="_4column-flex">
          <div className="_4col-last-block">
            <h3 className="form-main-header">Write us:</h3>
            <div className="form-block-2 main-form w-form">
              {/* Note: In a real app, I'd pass a 'locale' prop to ContactForm to translate labels */}
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
