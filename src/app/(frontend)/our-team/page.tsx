import Link from 'next/link'

export default function OurTeamPage() {
  return (
    <div className="main header-trigger">
      <div className="w-layout-blockcontainer o-container our-team w-container">
        <h1 className="our-team-header">Команда ДАРТ</h1>
        <div className="team-wrap">
          <div className="team-item" style={{ opacity: 1 }}>
            <div title="Табака Наталя Михайлівна" className="team-img oleskiv">
              <img 
                src="/webflow/images/WhatsApp-Image-2025-04-29-at-10.56.31.jpeg" 
                loading="lazy" 
                width="253" 
                alt="tabaka pict" 
                className="image-bio" 
              />
            </div>
            <div className="person-wrap">
              <Link href="/biography" className="team-bio-link w-inline-block">
                <div className="team-surname">ТАБАКА</div>
                <div className="team-name">Наталя Михайлівна</div>
                <div className="team-text">Голова Державного агентства розвитку туризму України</div>
              </Link>
            </div>
          </div>
          
          {/* 
            Based on the Webflow file, there might be more team members.
            I will include the first one as found in the HTML.
          */}
        </div>
      </div>
    </div>
  )
}
