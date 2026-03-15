'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAuth } from './AuthProvider'

export const Header = () => {
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false)
  const isEn = pathname.startsWith('/en')

  useEffect(() => {
    const header = document.querySelector("header");
    const about = document.querySelector(".about") as HTMLElement;
    const activity = document.querySelector(".activity") as HTMLElement;
    const menu1 = document.querySelector(".second-menu") as HTMLElement;
    const menu2 = document.querySelector("#activity-menu") as HTMLElement;
    const main = document.querySelector(".header-trigger") as HTMLElement;
    const search = document.querySelector(".serch-container") as HTMLElement;
    const globalSearchButtons = document.querySelectorAll(".global-search");
    
    // Mobile specific
    const mobMenuBtn = document.querySelector(".tab-link-menu") as HTMLElement;
    const mobileActivitiesTrigger = document.querySelector(".modal-menu-list-last") as HTMLElement;
    const additionalList = document.querySelector(".additional-list") as HTMLElement;
    const mobileBackBtn = document.querySelector(".mobile-back") as HTMLElement;

    if (!header || !about || !activity || !main) return;

    main.style.transition = "padding-top 0.2s ease-in-out";
    if (menu1) menu1.style.transition = "height 0.2s ease-in-out, opacity 0.2s ease-in-out";
    if (menu2) menu2.style.transition = "height 0.2s ease-in-out, opacity 0.2s ease-in-out";
    if (search) search.style.transition = "height 0.2s ease-in-out, border-bottom 0.2s ease-in-out";

    const handleAboutClick = () => {
      if (window.innerWidth < 992) return;
      if (menu2) menu2.style.height = "0.5px";
      if (!menu1.style.height || menu1.style.height === "0px") {
        menu1.style.height = "64px";
        if (search) {
            search.style.height = '0px';
            search.style.borderBottom = '0px solid #c2c5cb';
        }
        main.style.paddingTop = "5vw";
      } else {
        menu1.style.height = "0px";
        main.style.paddingTop = "0px";
      }
    };

    const handleActivityClick = () => {
      if (window.innerWidth < 992) return;
      if (menu1) menu1.style.height = "0px";
      if (!menu2.style.height || menu2.style.height === "0.5px") {
        menu2.style.height = isEn ? "9vw" : "9vw";
        if (search) {
            search.style.height = '0px';
            search.style.borderBottom = '0px solid #c2c5cb';
        }
        main.style.paddingTop = "11vw";
      } else {
        menu2.style.height = "0.5px";
        main.style.paddingTop = "0px";
      }
    };

    const handleSearchClick = () => {
      if (!search) return;
      if (search.style.height === '0px' || !search.style.height) {
        search.style.height = '146px';
        search.style.borderBottom = '0.5px solid #c2c5cb';
        if (menu2) menu2.style.height = "0.5px";
        if (menu1) menu1.style.height = "0px";
        main.style.paddingTop = "12vw";
      } else {
        search.style.borderBottom = '0px solid #c2c5cb';
        search.style.height = '0px';
        main.style.paddingTop = "0px";
      }
    };

    const openMobileSubmenu = () => {
        if (additionalList) {
            additionalList.classList.remove("initialListTransition", "backListTransition");
            additionalList.classList.add("listTransition");
        }
    };

    const closeMobileSubmenu = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        if (additionalList) {
            additionalList.classList.remove("listTransition");
            additionalList.classList.add("backListTransition");
        }
    };

    about.addEventListener("click", handleAboutClick);
    activity.addEventListener("click", handleActivityClick);
    globalSearchButtons.forEach(btn => btn.addEventListener("click", handleSearchClick));
    if (mobileActivitiesTrigger) mobileActivitiesTrigger.addEventListener("click", openMobileSubmenu);
    if (mobileBackBtn) mobileBackBtn.addEventListener("click", closeMobileSubmenu);

    return () => {
      about.removeEventListener("click", handleAboutClick);
      activity.removeEventListener("click", handleActivityClick);
      globalSearchButtons.forEach(btn => btn.removeEventListener("click", handleSearchClick));
      if (mobileActivitiesTrigger) mobileActivitiesTrigger.removeEventListener("click", openMobileSubmenu);
      if (mobileBackBtn) mobileBackBtn.removeEventListener("click", closeMobileSubmenu);
    };
  }, [isEn]);

  const switchLanguage = (lang: 'ua' | 'en') => {
    if (lang === 'en') {
      router.push('/en')
    } else {
      router.push('/')
    }
    setIsLangOpen(false)
    setIsMobMenuOpen(false)
  }

  return (
    <header id="structure-alt" className="c-inner-header alt-inner-header">
      <div className="alt-container header-container w-container">
        {/* MOBILE NAV */}
        <nav className="nav-tab strucutre-list">
          <div className="inner-nav-block">
            <Link href={isEn ? "/en" : "/"} className="nav-logo alt-hed-logo w-inline-block">
              <div className="alt-logo-wrap">
                <div className="logo-point">
                  <img src="/webflow/images/logo_1.svg" loading="lazy" width="60" alt="logo-scroll" className="image-5" />
                </div>
                <div className="logo-word">
                  <img src={isEn ? "/webflow/images/logo_SATD_RGB.svg" : "/webflow/images/logo_word.svg"} loading="lazy" alt="" className="image-6" />
                </div>
              </div>
            </Link>
            <div className="mob-nav-wrap">
              <div onClick={() => setIsMobMenuOpen(!isMobMenuOpen)} className={`tab-link-menu w-inline-block ${isMobMenuOpen ? 'w--open' : ''}`} style={{ cursor: 'pointer' }}>
                <div className="tlm-bg mob-menu"></div>
                <div className={`tlm-ico mob-menu-item ${isMobMenuOpen ? 'hidden' : ''}`} style={{ display: isMobMenuOpen ? 'none' : 'block' }}></div>
                <div className={`tlm-ico u-hover mob-menu-exit ${isMobMenuOpen ? 'block' : 'hidden'}`} style={{ display: isMobMenuOpen ? 'block' : 'none' }}></div>
              </div>
            </div>
          </div>
          <div className={`nav-hide-block alt-nav-hide ${isMobMenuOpen ? 'w--open' : ''}`} style={{ display: isMobMenuOpen ? 'flex' : 'none', flexDirection: 'column' }}>
            <Link href={isEn ? "/en" : "/"} className="m-link-block modal-menu-list-link w-inline-block" onClick={() => setIsMobMenuOpen(false)}>
              <h2 className="modal-menu-list-item">{isEn ? "Main" : "Головна"}</h2>
            </Link>
            {isEn ? (
              <>
                <Link href="/en/structure" className="m-link-block modal-menu-list-link w-inline-block" onClick={() => setIsMobMenuOpen(false)}>
                  <h2 className="modal-menu-list-item">Structure of agency</h2>
                </Link>
                <Link href="/en/leadership" className="m-link-block modal-menu-list-link w-inline-block" onClick={() => setIsMobMenuOpen(false)}>
                  <h2 className="modal-menu-list-item">Leadership</h2>
                </Link>
                <Link href="/en/news" className="m-link-block modal-menu-list-link w-inline-block" onClick={() => setIsMobMenuOpen(false)}>
                  <h2 className="modal-menu-list-item">News and anoncement</h2>
                </Link>
              </>
            ) : (
              <>
                <Link href="/news" className="m-link-block modal-menu-list-link w-inline-block" onClick={() => setIsMobMenuOpen(false)}>
                  <h2 className="modal-menu-list-item">Новини та анонси</h2>
                </Link>
                <Link href="/struktura-dart" className="m-link-block modal-menu-list-link w-inline-block" onClick={() => setIsMobMenuOpen(false)}>
                  <h2 className="modal-menu-list-item">Структура агентства</h2>
                </Link>
                <Link href="/vacancies" className="m-link-block modal-menu-list-link w-inline-block" onClick={() => setIsMobMenuOpen(false)}>
                  <h2 className="modal-menu-list-item">Вакансії</h2>
                </Link>
              </>
            )}
            
            <div className="modal-menu-list-last">
              <h2 className="modal-menu-list-item">{isEn ? "Activities" : "Діяльність"}</h2>
              <div className="additional-list">
                {isEn ? (
                    <>
                        <Link href="/en/tour-operator-licensing" className="modal-menu-drop-link w-inline-block">
                            <div className="modal-menu-drop-text">Tour operator licensing</div>
                        </Link>
                        <Link href="/en/hotel-categorization" className="modal-menu-drop-link w-inline-block">
                            <div className="modal-menu-drop-text">Hotel categorization</div>
                        </Link>
                        <Link href="/en/statistics" className="modal-menu-drop-link w-inline-block">
                            <div className="modal-menu-drop-text">Statistics</div>
                        </Link>
                        <Link href="/en/plans-and-reports-of-satd-activities" className="modal-menu-drop-link w-inline-block">
                            <div className="modal-menu-drop-text">Plans and reports of activities</div>
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/licensuvannya" className="modal-menu-drop-link w-inline-block">
                            <div className="modal-menu-drop-text">Ліцензування туроператорів</div>
                        </Link>
                        <Link href="/categorization" className="modal-menu-drop-link w-inline-block">
                            <div className="modal-menu-drop-text">Категоризація готелів</div>
                        </Link>
                        <Link href="/orders" className="modal-menu-drop-link w-inline-block">
                            <div className="modal-menu-drop-text">Нормативна база та накази</div>
                        </Link>
                    </>
                )}
                <a href="#" className="back-link back mobile-back w-inline-block">
                  <div className="modal-menu-link">
                    <div className="text-block-13">{isEn ? "Back" : "Назад"}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="div-block-13" style={{ marginTop: '20px' }}>
              <div className="language" style={{ display: 'flex', gap: '15px' }}>
                <div className={`lang-ua ${!isEn ? 'active' : ''}`} onClick={() => switchLanguage('ua')} style={{ color: !isEn ? '#2d5ca6' : '#333', fontWeight: !isEn ? 'bold' : 'normal' }}>UA</div>
                <div className={`lang-en ${isEn ? 'active' : ''}`} onClick={() => switchLanguage('en')} style={{ color: isEn ? '#2d5ca6' : '#333', fontWeight: isEn ? 'bold' : 'normal' }}>EN</div>
              </div>
            </div>
          </div>
        </nav>

        {/* DESKTOP NAV */}
        <div className="alt-nav-wrap">
          <nav className="nav-bar alt-nav">
            <Link href={isEn ? "/en" : "/"} className="nav-logo alt-hed-logo w-inline-block">
              <div className="alt-logo-wrap">
                <div className="logo-point">
                  <img src="/webflow/images/logo_1.svg" loading="lazy" width="60" alt="logo-scroll" className="image-5" />
                </div>
                <div className="logo-word">
                  <img src={isEn ? "/webflow/images/logo_SATD_RGB.svg" : "/webflow/images/logo_word.svg"} loading="lazy" alt="" className="image-6" />
                </div>
              </div>
            </Link>
            <div className="nav-menu-block">
              <Link href={isEn ? "/en" : "/"} className="nm-link header-decktop">{isEn ? "Main" : "Головна"}</Link>
              <div id="about" role="button" className="nm-link about">{isEn ? "Activities" : "Про ДАРТ"}</div>
              <Link href={isEn ? "/en/news" : "/news"} className="nm-link header-decktop">{isEn ? "News and anonsements" : "Новини та анонси"}</Link>
              <div id="activity" role="button" className="nm-link header-decktop activity">{isEn ? "About SATD" : "Діяльність"}</div>
            </div>
            <div className="nav-cta-block alternate">
              {user ? (
                <div className="flex items-center gap-4">
                  <Link href="/user-account" className="nm-link header-decktop">
                    {user.name || user.email}
                  </Link>
                  <button onClick={() => logout()} className="nm-link header-decktop" style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}>
                    {isEn ? "Logout" : "Вихід"}
                  </button>
                </div>
              ) : (
                <Link href="/log-in" role="button" className="nav-cta w-inline-block">
                  <div className="nc-bg _2 alt-button"></div>
                  <div className="nc-inf button-1">{isEn ? "Log In" : "Вхід"}</div>
                </Link>
              )}
              <Link href={isEn ? "/en/contacts" : "/contact"} role="button" className="nav-cta w-inline-block">
                <div className="nc-bg _2 alt-button"></div>
                <div className="nc-inf button-1">{isEn ? "Contact us" : "контакти"}</div>
              </Link>
              <div className="div-block-13">
                <div tabIndex={0} role="button" className="global-search">
                  <img src="/webflow/images/search-icon.svg" loading="lazy" width="25" alt="" />
                </div>
                
                {/* REFINED Language Switcher Desktop */}
                <div 
                  className="language" 
                  onMouseEnter={() => setIsLangOpen(true)} 
                  onMouseLeave={() => setIsLangOpen(false)}
                >
                  <div className="lang-active-wrap">
                    {isEn ? 'En' : 'Ua'}
                    <div className="triangle-wrap">
                      <div className={isLangOpen ? "triangle-down" : "triangle-up"}></div>
                    </div>
                  </div>
                  
                  <div className="lang-dropdown" style={{ height: isLangOpen ? '35px' : '0px' }}>
                    <div 
                      className="lang-item" 
                      onClick={() => switchLanguage(isEn ? 'ua' : 'en')}
                    >
                      {isEn ? 'Ua' : 'En'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* DROPDOWN MENUS DESKTOP */}
        <div id="activity-menu" className="menu-block">
          <div className="o-container alt-page-menu activity-menu">
            {isEn ? (
              <>
                <Link href="/en/tour-operator-licensing" className="nm-link drop-menu w-inline-block">Tour operator licensing</Link>
                <Link href="/en/hotel-categorization" className="nm-link drop-menu w-inline-block">Hotel categorization</Link>
                <Link href="/en/statistics" className="nm-link drop-menu w-inline-block">Statistics</Link>
                <Link href="/en/plans-and-reports-of-satd-activities" className="nm-link drop-menu w-inline-block">Plans and reports of SATD activities</Link>
              </>
            ) : (
              <>
                <Link href="/licensuvannya" className="nm-link drop-menu w-inline-block">Ліцензування туроператорів</Link>
                <Link href="/categorization" className="nm-link drop-menu w-inline-block">Категоризація готелів</Link>
                <Link href="/for-sitizens" className="nm-link drop-menu w-inline-block">Громадськості</Link>
                <Link href="/statistic" className="nm-link drop-menu w-inline-block">Статистика</Link>
                <Link href="/projects-npa" className="nm-link drop-menu w-inline-block">Проекти НПА та регуляторна діяльність</Link>
                <Link href="/anticor" className="nm-link drop-menu w-inline-block">Антикорупційна діяльність та очищення влади</Link>
                <Link href="/finances" className="nm-link drop-menu w-inline-block">Фінанси та бюджет</Link>
                <Link href="/public-orders" className="nm-link drop-menu w-inline-block">Публічні закупівлі</Link>
                <Link href="/plans-and-report" className="nm-link drop-menu w-inline-block">Плани та звіти діяльності ДАРТ</Link>
                <Link href="/orders" className="nm-link drop-menu w-inline-block">Нормативна база та накази</Link>
              </>
            )}
          </div>
        </div>
        <div id="about-menu" className="second-menu">
          <div className="o-container alt-page-menu">
            {isEn ? (
              <>
                <Link href="/en/structure" className="nm-link drop-menu w-inline-block">The Structure of the Agency</Link>
                <Link href="/en/leadership" className="nm-link drop-menu w-inline-block">Leadership team</Link>
              </>
            ) : (
              <>
                <Link href="/struktura-dart" className="nm-link header-decktop w-inline-block">Структура агентства</Link>
                <Link href="/our-team" className="nm-link header-decktop w-inline-block">Команда ДАРТ</Link>
                <Link href="/vacancies" className="nm-link header-decktop w-inline-block">Вакансії</Link>
                <Link href="/professional-development" className="nm-link header-decktop w-inline-block">Професійний розвиток</Link>
                <Link href="/subsidiary" className="nm-link header-decktop w-inline-block">Підвідомчі організації</Link>
              </>
            )}
          </div>
        </div>
        <div className="serch-container">
          <form action="/search" className="search w-form">
            <label htmlFor="search-2" className="field-label">{isEn ? "Search in this site" : "Пошук на сайті"}</label>
            <input className="search-input w-input" maxLength={256} name="query" placeholder={isEn ? "Tap here key word" : "Введіть назву чи ключове слово"} type="search" id="search-in-component" required />
            <input type="submit" className="search-button w-button" value={isEn ? "Search" : "Пошук"} />
          </form>
        </div>
      </div>
    </header>
  )
}
