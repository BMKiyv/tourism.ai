'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const Footer = () => {
  const pathname = usePathname()
  const [isEn, setIsEn] = useState(false)

  useEffect(() => {
    setIsEn(pathname.startsWith('/en'))
  }, [pathname])

  const footerId = isEn ? "eng-footer" : "uk-footer"

  return (
    <footer id={footerId} className="footer">
      <div className="w-layout-blockcontainer o-container w-container">
        <div className="div-block-20 footer-grid">
          <Link href={isEn ? "/en" : "/"} className="link-block-11 w-inline-block">
            <img 
              src={isEn ? "/webflow/images/logo_SATD_full.svg" : "/webflow/images/main-logo--blue.svg"} 
              loading="lazy" 
              width="140" 
              alt="" 
              className="image-8" 
            />
          </Link>
          
          <div className="footer-contacts">
            <h4 className="adress-header">{isEn ? "Our address:" : "Наша адреса:"}</h4>
            <div className="footer-adress"> {isEn ? "tel." : "тел."} (044) 278 08 08</div>
            <a href="mailto:dart@tourism.gov.ua?subject=list from official site" className="footer-mail w-inline-block">
              <div className="footer-adress"> e-mail: dart@tourism.gov.ua</div>
            </a>
            <div className="footer-adress"> {isEn ? "Kyiv, Muzeynyi lane, 12" : "м. Київ, пров. Музейний, 12"}</div>
          </div>

          <div className="footer-icons">
            <h4 className="icons-header">{isEn ? "Useful links:" : "Корисні посилання:"}</h4>
            <div className="icons-block">
              <a href="https://mindev.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-5 w-inline-block">
                <img src="/webflow/images/logo-dark-miu-ukr.svg" loading="lazy" title="Міністерство розвитку громад та територій" height="35" alt="" className="image-9" />
              </a>
              <a href="https://dpsu.gov.ua/ua/" target="_blank" rel="noopener noreferrer" className="link-block-10 w-inline-block">
                <img src="/webflow/images/bordersguard.webp" loading="lazy" width="34" height="34" alt="" title="Державна прикордонна служба України" className="border" />
              </a>
              <a href="https://www.president.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-8 w-inline-block">
                <img src="/webflow/images/president.webp" loading="lazy" title="Президент України" height="35" alt="" />
              </a>
              <a href="https://www.rada.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-6 w-inline-block">
                <img src="/webflow/images/parlaiment.webp" loading="lazy" width="46" height="35" alt="" title="Верховна Рада України" className="parliament" />
              </a>
              <a href="https://www.kmu.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-9 w-inline-block">
                <img src="/webflow/images/cabinet_ministry_1.webp" height="33" alt="" sizes="100vw" title="Кабінет Міністрів України" loading="lazy" />
              </a>
            </div>
          </div>

          <div className="social-icons">
            <h4 className="icons-header">{isEn ? "Social media:" : "Соціальні мережі:"}</h4>
            <div className="social-icons-block">
              <a href="https://www.facebook.com/DARTUkraine" target="_blank" rel="noopener noreferrer" className="footer-icon-wrap w-inline-block">
                <div className="social-icon"><img src="/webflow/images/facebook.svg" loading="lazy" title="Фейсбук" alt="" className="footer-img" /></div>
              </a>
              <a href="https://t.me/DARTUkraine" target="_blank" rel="noopener noreferrer" className="footer-icon-wrap w-inline-block">
                <div className="social-icon"><img src="/webflow/images/telegram.svg" loading="lazy" title="Телеграм" alt="" className="footer-img" /></div>
              </a>
              <a href="https://www.instagram.com/ukrainenow_travel" target="_blank" rel="noopener noreferrer" className="footer-icon-wrap w-inline-block">
                <div className="social-icon"><img src="/webflow/images/instagram.svg" loading="lazy" title="Інстаграм" alt="" className="footer-img" /></div>
              </a>
              <a href="https://www.youtube.com/channel/UCV4648Lv6svmY7lQd0snGug" target="_blank" rel="noopener noreferrer" className="footer-icon-wrap w-inline-block">
                <div className="social-icon"><img src="/webflow/images/youtube.svg" loading="lazy" alt="" title="Ютуб" className="footer-img" /></div>
              </a>
            </div>
          </div>
          
          <div className="copywrite">
            2020-{new Date().getFullYear()} {isEn ? "The State Agency for Tourism Development of Ukraine" : "Державне Агентство Розвитку Туризму України"}
          </div>
        </div>
      </div>
    </footer>
  )
}
