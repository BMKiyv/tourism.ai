"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export const Header = () => {
  const router = useRouter()
  const pathname = usePathname()

  const isEn = pathname.startsWith('/en')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [activityOpen, setActivityOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const [prevPathname, setPrevPathname] = useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setMobileOpen(false)
    setAboutOpen(false)
    setActivityOpen(false)
    setSearchOpen(false)
  }

  useEffect(() => {
    const main = document.querySelector('.header-trigger') as HTMLElement
    if (!main) return

    if (activityOpen || searchOpen) {
      main.style.paddingTop = '11vw'
    } else if (aboutOpen) {
      main.style.paddingTop = '5vw'
    } else {
      main.style.paddingTop = '2vw'
    }
  }, [activityOpen, aboutOpen, searchOpen])

  const toggleLanguage = () => {
    if (isEn) {
      router.push(pathname.replace("/en", "") || "/");
      return;
    }

    router.push(`/en${pathname === "/" ? "" : pathname}`);
  };

  const closeDesktopMenus = () => {
    setAboutOpen(false);
    setActivityOpen(false);
    setSearchOpen(false);
  };

  return (
    <header id="structure-alt" className="c-inner-header alt-inner-header">
      <div className="alt-container header-container w-container">
        <nav className="nav-tab strucutre-list">
          <div className="inner-nav-block">
            <Link
              href={isEn ? "/en" : "/"}
              className="nav-logo alt-hed-logo w-inline-block"
            >
              <div className="alt-logo-wrap">
                <div className="logo-point">
                  <Image
                    src="/webflow/images/logo_1.svg"
                    loading="lazy"
                    width={60}
                    height={60}
                    alt="logo-scroll"
                    className="image-5"
                  />
                </div>
                <div className="logo-word">
                  <Image
                    src={
                      isEn
                        ? "/webflow/images/logo_SATD_RGB.svg"
                        : "/webflow/images/logo_word.svg"
                    }
                    loading="lazy"
                    width={180}
                    height={60}
                    alt=""
                    className="image-6"
                  />
                </div>
              </div>
              <div className="alt-logo-hover">
                <Image
                  src="/webflow/images/logo_1_hover.svg"
                  loading="lazy"
                  width={30}
                  height={30}
                  alt=""
                  className="image-5"
                />
                <Image
                  src="/webflow/images/logo_word_hover.svg"
                  loading="lazy"
                  width={180}
                  height={60}
                  alt=""
                  className="image-6"
                />
              </div>
            </Link>
            <div className="mob-nav-wrap">
              <button
                type="button"
                className="tab-link-menu w-inline-block"
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label="Open mobile menu"
              >
                <div className="tlm-bg mob-menu"></div>
                <div className="tlm-ico u-hover mob-menu-exit"></div>
                <div className="tlm-ico mob-menu-item"></div>
              </button>
            </div>
          </div>
          <div
            className="nav-hide-block alt-nav-hide"
            style={{ display: mobileOpen ? "block" : "none" }}
          >
            <Link
              href={isEn ? "/en" : "/"}
              className="m-link-block modal-menu-list-link w-inline-block"
            >
              <h2 className="modal-menu-list-item">
                {isEn ? "Main" : "Головна"}
              </h2>
            </Link>
            <Link
              href="/news"
              className="m-link-block modal-menu-list-link w-inline-block"
            >
              <h2 className="modal-menu-list-item">
                {isEn ? "News and announcements" : "Новини та анонси"}
              </h2>
            </Link>
            <Link
              href="/struktura-dart"
              className="m-link-block modal-menu-list-link w-inline-block"
            >
              <h2 className="modal-menu-list-item">
                {isEn ? "Structure" : "Структура агентства"}
              </h2>
            </Link>
            <Link
              href="/vacancies"
              className="m-link-block modal-menu-list-link w-inline-block"
            >
              <h2 className="modal-menu-list-item">
                {isEn ? "Vacancies" : "Вакансії"}
              </h2>
            </Link>
            <Link
              href="/our-team"
              className="m-link-block modal-menu-list-link w-inline-block"
            >
              <h2 className="modal-menu-list-item">
                {isEn ? "Team" : "Команда"}
              </h2>
            </Link>
            <div className="modal-menu-list-last">
              <h2 className="modal-menu-list-item">
                {isEn ? "Activities" : "Діяльність"}
              </h2>
              <div className="additional-list">
                <Link
                  href={isEn ? "/en/tour-operator-licensing" : "/licensuvannya"}
                  className="modal-menu-drop-link w-inline-block"
                >
                  <div className="modal-menu-drop-text">
                    {isEn
                      ? "Tour operator licensing"
                      : "Ліцензування туроператорів"}
                  </div>
                </Link>
                <Link
                  href={isEn ? "/en/hotel-categorization" : "/categorization"}
                  className="modal-menu-drop-link w-inline-block"
                >
                  <div className="modal-menu-drop-text">
                    {isEn ? "Hotel categorization" : "Категоризація готелів"}
                  </div>
                </Link>
                <Link
                  href={isEn ? "/en/statistics" : "/statistic"}
                  className="modal-menu-drop-link w-inline-block"
                >
                  <div className="modal-menu-drop-text">
                    {isEn ? "Statistics" : "Статистика"}
                  </div>
                </Link>
                <Link
                  href="/for-sitizens"
                  className="modal-menu-drop-link w-inline-block"
                >
                  <div className="modal-menu-drop-text">
                    {isEn ? "Citizens" : "Громадськості"}
                  </div>
                </Link>
              </div>
            </div>
            <div className="modal-menu-button">
              <Link
                href={isEn ? "/en/contacts" : "/contact"}
                className="modal-menu-link w-inline-block"
              >
                <div className="text-block-13">
                  {isEn ? "Contacts" : "Контакти"}
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className="alt-nav-wrap">
          <nav className="nav-bar alt-nav">
            <Link
              href={isEn ? "/en" : "/"}
              className="nav-logo alt-hed-logo w-inline-block"
              onMouseEnter={closeDesktopMenus}
            >
              <div className="alt-logo-wrap">
                <div className="logo-point">
                  <Image
                    src="/webflow/images/logo_1.svg"
                    loading="lazy"
                    width={60}
                    height={60}
                    alt="logo-scroll"
                    className="image-5"
                  />
                </div>
                <div className="logo-word">
                  <Image
                    src={
                      isEn
                        ? "/webflow/images/logo_SATD_RGB.svg"
                        : "/webflow/images/logo_word.svg"
                    }
                    loading="lazy"
                    width={180}
                    height={60}
                    alt=""
                    className="image-6"
                  />
                </div>
              </div>
              <div className="alt-logo-hover">
                <Image
                  src="/webflow/images/logo_1_hover.svg"
                  loading="lazy"
                  width={30}
                  height={30}
                  alt=""
                  className="image-5"
                />
                <Image
                  src="/webflow/images/logo_word_hover.svg"
                  loading="lazy"
                  width={180}
                  height={60}
                  alt=""
                  className="image-6"
                />
              </div>
            </Link>
            <div className="nav-menu-block" onMouseLeave={closeDesktopMenus}>
              <Link
                href={isEn ? "/en" : "/"}
                className="nm-link header-decktop"
              >
                {isEn ? "Main" : "Головна"}
              </Link>
              <button
                type="button"
                id="about"
                className="nm-link about"
                onMouseEnter={() => {
                  setAboutOpen(true);
                  setActivityOpen(false);
                  setSearchOpen(false);
                }}
              >
                {isEn ? "About SATD" : "Про ДАРТ"}
              </button>
              <Link href="/news" className="nm-link header-decktop">
                {isEn ? "News and announcements" : "Новини та анонси"}
              </Link>
              <button
                type="button"
                id="activity"
                className="nm-link header-decktop activity"
                onMouseEnter={() => {
                  setActivityOpen(true);
                  setAboutOpen(false);
                  setSearchOpen(false);
                }}
              >
                {isEn ? "Activities" : "Діяльність"}
              </button>
            </div>
            <div className="nav-cta-block alternate">
              <Link
                href={isEn ? "/en/contacts" : "/contact"}
                role="button"
                className="nav-cta w-inline-block"
              >
                <div className="nc-bg _2 alt-button"></div>
                <div className="nc-inf button-1">
                  {isEn ? "Contact us" : "контакти"}
                </div>
              </Link>
              <div className="div-block-13">
                <button
                  type="button"
                  className="global-search"
                  onClick={() => {
                    setSearchOpen((prev) => !prev);
                    setAboutOpen(false);
                    setActivityOpen(false);
                  }}
                >
                  <Image
                    src="/webflow/images/search-icon.svg"
                    loading="lazy"
                    width={25}
                    height={25}
                    alt=""
                  />
                </button>
                <button
                  type="button"
                  className="language"
                  onClick={toggleLanguage}
                >
                  <div className={`lang-ua ${!isEn ? "active" : ""}`}>Ua</div>
                  <div className={`lang-en ${isEn ? "active" : ""}`}>En</div>
                  <div className="triangle-up"></div>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div
        id="activity-menu"
        className="menu-block"
        style={{ height: activityOpen ? "140px" : ".5px" }}
      >
        <div className="o-container alt-page-menu activity-menu">
          <Link
            href={isEn ? "/en/tour-operator-licensing" : "/licensuvannya"}
            className="nm-link drop-menu w-inline-block"
          >
            {isEn ? "Tour operator licensing" : "Ліцензування туроператорів"}
          </Link>
          <Link
            href={isEn ? "/en/hotel-categorization" : "/categorization"}
            className="nm-link drop-menu w-inline-block"
          >
            {isEn ? "Hotel categorization" : "Категоризація готелів"}
          </Link>
          <Link
            href="/for-sitizens"
            className="nm-link drop-menu w-inline-block"
          >
            {isEn ? "Citizens" : "Громадськості"}
          </Link>
          <Link
            href={isEn ? "/en/statistics" : "/statistic"}
            className="nm-link drop-menu w-inline-block"
          >
            {isEn ? "Statistics" : "Статистика"}
          </Link>
          <Link
            href="/projects-npa"
            className="nm-link drop-menu w-inline-block"
          >
            {isEn ? "NPA projects" : "Проєкти НПА"}
          </Link>
          <Link href="/anticor" className="nm-link drop-menu w-inline-block">
            {isEn
              ? "Anti-corruption"
              : "Очищення влади та антикорупційна діяльність"}
          </Link>
          <Link href="/finances" className="nm-link drop-menu w-inline-block">
            {isEn ? "Finance and budget" : "Фінанси та бюджет"}
          </Link>
          <Link
            href="/public-orders"
            className="nm-link drop-menu w-inline-block"
          >
            {isEn ? "Public procurement" : "Публічні закупівлі"}
          </Link>
          <Link
            href="/plans-and-report"
            className="nm-link drop-menu w-inline-block"
          >
            {isEn ? "Plans and reports" : "Плани та звіти діяльності ДАРТ"}
          </Link>
          <Link href="/orders" className="nm-link drop-menu w-inline-block">
            {isEn ? "Orders and regulations" : "Нормативна база та накази"}
          </Link>
        </div>
      </div>
      <div
        id="about-menu"
        className="second-menu"
        style={{ height: aboutOpen ? "70px" : "0px" }}
      >
        <div className="o-container alt-page-menu">
          <Link
            href="/struktura-dart"
            className="nm-link header-decktop w-inline-block"
          >
            {isEn ? "Structure" : "Структура агентства"}
          </Link>
          <Link
            href="/our-team"
            className="nm-link header-decktop w-inline-block"
          >
            {isEn ? "Team" : "Команда ДАРТ"}
          </Link>
          <Link
            href="/vacancies"
            className="nm-link header-decktop w-inline-block"
          >
            {isEn ? "Vacancies" : "Вакансії"}
          </Link>
          <Link
            href="/professional-development"
            className="nm-link header-decktop w-inline-block"
          >
            {isEn ? "Professional development" : "Професійний розвиток"}
          </Link>
          <Link
            href="/subsidiary"
            className="nm-link header-decktop w-inline-block"
          >
            {isEn ? "Subsidiary organizations" : "Підвідомчі організації"}
          </Link>
        </div>
      </div>
      <div
        className="serch-container"
        style={{ height: searchOpen ? "130px" : "0px" }}
      >
        <form action="/search" className="search w-form">
          <label htmlFor="search-in-component" className="field-label">
            {isEn ? "Search on site" : "Пошук на сайті"}
          </label>
          <input
            className="search-input w-input"
            maxLength={256}
            name="query"
            placeholder={
              isEn ? "Type title or keyword" : "Введіть назву чи ключове слово"
            }
            type="search"
            id="search-in-component"
            required
          />
          <input
            type="submit"
            className="search-button w-button"
            value={isEn ? "Search" : "Пошук"}
          />
        </form>
      </div>
    </header>
  );
};
