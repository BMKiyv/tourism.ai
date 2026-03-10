import Link from 'next/link'

export const Footer = () => {
  return (
    <footer id="uk-footer" className="footer">
      <div className="w-layout-blockcontainer o-container w-container">
        <div className="div-block-20 footer-grid">
          <Link id="w-node-_8bcb07db-ad27-85db-cd37-159508a6348c-a8ec814b" href="/" aria-current="page" className="link-block-11 w-inline-block w--current">
            <img src="/webflow/images/main-logo--blue.svg" loading="lazy" width="140" alt="" className="image-8" />
          </Link>
          <div id="w-node-_696bb326-b972-7206-c000-c270a8ec814f-a8ec814b" className="footer-contacts">
            <h4 className="adress-header">Наша адреса:</h4>
            <div className="footer-adress"> тел. (044) 278 08 08</div>
            <a href="mailto:dart@tourism.gov.ua?subject=лист з офіційного сайту" className="footer-mail w-inline-block">
              <div className="footer-adress"> e-mail: dart@tourism.gov.ua</div>
            </a>
            <div className="footer-adress"> м. Київ, пров. Музейний, 12</div>
          </div>
          <div id="w-node-_696bb326-b972-7206-c000-c270a8ec8158-a8ec814b" className="footer-icons">
            <h4 className="icons-header">Корисні посилання:</h4>
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
                <img src="/webflow/images/cabinet_ministry_1.webp" height="33" alt="" title="Кабінет Міністрів України" loading="lazy" />
              </a>
            </div>
          </div>
          <div id="w-node-_696bb326-b972-7206-c000-c270a8ec8162-a8ec814b" className="social-icons">
            <h4 className="icons-header">Соціальні мережі:</h4>
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
          <div id="w-node-_696bb326-b972-7206-c000-c270a8ec8176-a8ec814b" className="copywrite">
            2020-{new Date().getFullYear()} Державне Агентство Розвитку Туризму України
          </div>
        </div>
      </div>
    </footer>
  )
}
