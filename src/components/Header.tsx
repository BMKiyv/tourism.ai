'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isEn, setIsEn] = useState(false)

  useEffect(() => {
    setIsEn(pathname.startsWith('/en'))
  }, [pathname])

  const toggleLanguage = () => {
    if (isEn) {
      router.push(pathname.replace('/en', '') || '/')
    } else {
      router.push(`/en${pathname === '/' ? '' : pathname}`)
    }
  }

  return (
    <header id="structure-alt" className="c-inner-header alt-inner-header">
      <div className="alt-container header-container w-container">
        {/* Mobile Navigation */}
        <nav className="nav-tab strucutre-list">
          <div className="inner-nav-block">
            <Link href={isEn ? "/en" : "/"} className="nav-logo alt-hed-logo w-inline-block">
              <div className="alt-logo-wrap">
                <div className="logo-point"><img src="/webflow/images/logo_1.svg" loading="lazy" width="60" alt="logo-scroll" className="image-5" /></div>
                <div className="logo-word">
                  <img src={isEn ? "/webflow/images/logo_SATD_RGB.svg" : "/webflow/images/logo_word.svg"} loading="lazy" alt="" className="image-6" />
                </div>
              </div>
              <div className="alt-logo-hover">
                <img src="/webflow/images/logo_1_hover.svg" loading="lazy" width="30" alt="" className="image-5" />
                <img src="/webflow/images/logo_word_hover.svg" loading="lazy" alt="" className="image-6" />
              </div>
            </Link>
            <div className="mob-nav-wrap">
              <a href="#" className="tab-link-menu w-inline-block">
                <div className="tlm-bg mob-menu"></div>
                <div className="tlm-ico u-hover mob-menu-exit"></div>
                <div className="tlm-ico mob-menu-item"></div>
              </a>
            </div>
          </div>
          {/* ... mobile menu items omitted for brevity but should follow original ... */}
        </nav>

        {/* Desktop Navigation */}
        <div className="alt-nav-wrap">
          <nav className="nav-bar alt-nav">
            <Link href={isEn ? "/en" : "/"} className="nav-logo alt-hed-logo w-inline-block">
              <div className="alt-logo-wrap">
                <div className="logo-point"><img src="/webflow/images/logo_1.svg" loading="lazy" width="60" alt="logo-scroll" className="image-5" /></div>
                <div className="logo-word">
                  <img src={isEn ? "/webflow/images/logo_SATD_RGB.svg" : "/webflow/images/logo_word.svg"} loading="lazy" alt="" className="image-6" />
                </div>
              </div>
              <div className="alt-logo-hover">
                <img src="/webflow/images/logo_1_hover.svg" loading="lazy" width="30" alt="" className="image-5" />
                <img src="/webflow/images/logo_word_hover.svg" loading="lazy" alt="" className="image-6" />
              </div>
            </Link>
            <div className="nav-menu-block">
              <Link href={isEn ? "/en" : "/"} className="nm-link header-decktop">{isEn ? "Main" : "Головна"}</Link>
              <div id="about" role="button" className="nm-link about">{isEn ? "About SATD" : "Про ДАРТ"}</div>
              <Link href={isEn ? "/en/news" : "/news"} className="nm-link header-decktop">{isEn ? "News and announcements" : "Новини та анонси"}</Link>
              <div id="activity" role="button" className="nm-link header-decktop activity">{isEn ? "Activities" : "Діяльність"}</div>
            </div>
            <div className="nav-cta-block alternate">
              <Link href={isEn ? "/en/contacts" : "/contact"} role="button" className="nav-cta w-inline-block">
                <div className="nc-bg _2 alt-button"></div>
                <div className="nc-inf button-1">{isEn ? "Contact us" : "контакти"}</div>
              </Link>
              <div className="div-block-13">
                <div className="global-search" style={{ cursor: 'pointer' }}>
                  <img src="/webflow/images/search-icon.svg" loading="lazy" width="25" alt="" />
                </div>
                <div className="language" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
                  <div className={`lang-ua ${!isEn ? 'active' : ''}`}>Ua</div>
                  <div className={`lang-en ${isEn ? 'active' : ''}`}>En</div>
                  <div className="triangle-up"></div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Submenus and Search - should follow original height transition logic via CSS/JS */}
      <div id="activity-menu" className="menu-block">
        <div className="o-container alt-page-menu activity-menu">
          <Link href={isEn ? "/en/tour-operator-licensing" : "/licensuvannya"} className="nm-link drop-menu w-inline-block">{isEn ? "Tour operator licensing" : "Ліцензування туроператорів"}</Link>
          <Link href={isEn ? "/en/hotel-categorization" : "/categorization"} className="nm-link drop-menu w-inline-block">{isEn ? "Hotel categorization" : "Категоризація готелів"}</Link>
          <Link href={isEn ? "/for-sitizens" : "/for-sitizens"} className="nm-link drop-menu w-inline-block">{isEn ? "Citizens" : "Громадськості"}</Link>
          <Link href={isEn ? "/en/statistics" : "/statistic"} className="nm-link drop-menu w-inline-block">{isEn ? "Statistics" : "Статистика"}</Link>
          {/* ... other items ... */}
        </div>
      </div>
      {/* ... rest of submenus and search container ... */}
    </header>
  )
}
