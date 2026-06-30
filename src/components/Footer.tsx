'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const socialLinks = {
  uk: [
    {
      id: 'w-node-_696bb326-b972-7206-c000-c270a8ec8166-a8ec814b',
      href: 'https://www.facebook.com/DARTUkraine',
      title: 'Фейсбук',
      icon: '/webflow/images/facebook.svg',
    },
    {
      id: 'w-node-_696bb326-b972-7206-c000-c270a8ec816a-a8ec814b',
      href: 'https://t.me/DARTUkraine?fbclid=IwAR2FnWXIaSFlfv-YYS6DU7n19XYta4OXMcwzc2rFxlMjrFfkfx2cRJjeBmw',
      title: 'Телеграм',
      icon: '/webflow/images/telegram.svg',
    },
    {
      id: 'w-node-_696bb326-b972-7206-c000-c270a8ec816e-a8ec814b',
      href: 'https://www.instagram.com/ukrainenow_travel',
      title: 'Інстаграм',
      icon: '/webflow/images/instagram.svg',
    },
    {
      id: 'w-node-_696bb326-b972-7206-c000-c270a8ec8172-a8ec814b',
      href: 'https://www.youtube.com/channel/UCV4648Lv6svmY7lQd0snGug',
      title: 'Ютуб',
      icon: '/webflow/images/youtube.svg',
    },
  ],
  en: [
    {
      id: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006684-76006661',
      href: 'https://www.facebook.com/DARTUkraine',
      title: 'Facebook',
      icon: '/webflow/images/facebook.svg',
    },
    {
      id: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006688-76006661',
      href: 'https://t.me/DARTUkraine?fbclid=IwAR2FnWXIaSFlfv-YYS6DU7n19XYta4OXMcwzc2rFxlMjrFfkfx2cRJjeBmw',
      title: 'Telegram',
      icon: '/webflow/images/telegram.svg',
    },
    {
      id: 'w-node-_66cf2188-a3c3-b625-f14a-069c7600668c-76006661',
      href: 'https://www.instagram.com/ukrainenow_travel',
      title: 'Instagram',
      icon: '/webflow/images/instagram.svg',
    },
    {
      id: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006690-76006661',
      href: 'https://www.youtube.com/channel/UCV4648Lv6svmY7lQd0snGug',
      title: 'YouTube',
      icon: '/webflow/images/youtube.svg',
    },
  ],
} as const

export const Footer = () => {
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

  const footer = isEn
    ? {
        footerId: 'eng-footer',
        homeHref: '/en',
        logoId: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006664-76006661',
        contactsId: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006666-76006661',
        usefulLinksId: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006670-76006661',
        socialId: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006680-76006661',
        copyrightId: 'w-node-_66cf2188-a3c3-b625-f14a-069c76006694-76006661',
        logo: '/webflow/images/logo_SATD_full.svg',
        addressTitle: 'Our address:',
        phone: 'tel. (044) 278 08 08',
        mailSubject: 'лист з офіційного сайту',
        address: 'Kyiv, Muzeynyi lane, 12',
        usefulLinksTitle: 'Useful links:',
        socialTitle: 'Social media:',
        copyright: `2020-${new Date().getFullYear()} The State Agency for Tourism Development of Ukraine`,
        socials: socialLinks.en,
      }
    : {
        footerId: 'uk-footer',
        homeHref: '/',
        logoId: 'w-node-_8bcb07db-ad27-85db-cd37-159508a6348c-a8ec814b',
        contactsId: 'w-node-_696bb326-b972-7206-c000-c270a8ec814f-a8ec814b',
        usefulLinksId: 'w-node-_696bb326-b972-7206-c000-c270a8ec8158-a8ec814b',
        socialId: 'w-node-_696bb326-b972-7206-c000-c270a8ec8162-a8ec814b',
        copyrightId: 'w-node-_696bb326-b972-7206-c000-c270a8ec8176-a8ec814b',
        logo: '/webflow/images/main-logo--blue.svg',
        addressTitle: 'Наша адреса:',
        phone: 'тел. (044) 278 08 08',
        mailSubject: 'лист з офіційного сайту',
        address: 'м. Київ, пров. Музейний, 12',
        usefulLinksTitle: 'Корисні посилання:',
        socialTitle: 'Соціальні мережі:',
        copyright: `2020-${new Date().getFullYear()} Державне Агентство Розвитку Туризму України`,
        socials: socialLinks.uk,
      }

  const mailHref = `mailto:dart@tourism.gov.ua?subject=${encodeURIComponent(footer.mailSubject)}`

  return (
    <footer id={footer.footerId} className="footer">
      <div className="w-layout-blockcontainer o-container w-container">
        <div className="div-block-20 footer-grid">
          <Link href={footer.homeHref} id={footer.logoId} className="link-block-11 w-inline-block">
            <Image src={footer.logo} width={140} height={40} alt={isEn ? "State Agency for Tourism Development logo" : "Логотип Державного агентства розвитку туризму"} className="image-8" />
          </Link>

          <div id={footer.contactsId} className="footer-contacts">
            <h4 className="adress-header">{footer.addressTitle}</h4>
            <div className="footer-adress">{footer.phone}</div>
            <a href={mailHref} className="footer-mail w-inline-block">
              <div className="footer-adress">e-mail: dart@tourism.gov.ua</div>
            </a>
            <div className="footer-adress">{footer.address}</div>
          </div>

          <div id={footer.usefulLinksId} className="footer-icons">
            <h4 className="icons-header">{footer.usefulLinksTitle}</h4>
            <div className="icons-block">
              <a href="https://mindev.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-5 w-inline-block">
                <Image src="/webflow/images/logo-dark-miu-ukr.svg" width={140} height={35} title="Міністерство розвитку громад та територій" alt="Міністерство розвитку громад та територій" className="image-9" />
              </a>
              <a href="https://dpsu.gov.ua/ua/" target="_blank" rel="noopener noreferrer" className="link-block-10 w-inline-block">
                <Image src="/webflow/images/bordersguard.webp" width={34} height={34} alt="Державна прикордонна служба України" title="Державна прикордонна служба України" className="border" />
              </a>
              <a href="https://www.president.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-8 w-inline-block">
                <Image src="/webflow/images/president.webp" width={35} height={35} title="Президент України" alt="Президент України" />
              </a>
              <a href="https://www.rada.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-6 w-inline-block">
                <Image src="/webflow/images/parlaiment.webp" width={46} height={35} alt="Верховна Рада України" title="Верховна Рада України" className="parliament" />
              </a>
              <a href="https://www.kmu.gov.ua/" target="_blank" rel="noopener noreferrer" className="link-block-9 w-inline-block">
                <Image src="/webflow/images/cabinet_ministry_1.webp" width={100} height={33} alt="Кабінет Міністрів України" title="Кабінет Міністрів України" />
              </a>
            </div>
          </div>

          <div id={footer.socialId} className="social-icons">
            <h4 className="icons-header">{footer.socialTitle}</h4>
            <div className="social-icons-block">
              {footer.socials.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-wrap w-inline-block"
                >
                  <div className="social-icon">
                    <Image src={social.icon} width={24} height={24} title={social.title} alt={social.title} className="footer-img" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div id={footer.copyrightId} className="copywrite">
            {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}
