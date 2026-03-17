import React from 'react'
import { getPayload } from 'payload'
import config from '@/payload.config'
import Link from 'next/link'

export default async function OurTeamPage() {
  const payload = await getPayload({ config })
  
  const { docs: teamMembers } = await payload.find({
    collection: 'team',
    depth: 1,
    limit: 100,
    sort: 'index',
  })

  // Fallback data if collection is empty
  const staticTeam = [
    {
      id: 'tabaka',
      name: 'Наталя Михайлівна',
      surname: 'ТАБАКА',
      position: 'Голова Державного агентства розвитку туризму України',
      image: '/webflow/images/WhatsApp-Image-2025-04-29-at-10.56.31.jpeg',
      email: 'dart@tourism.gov.ua',
      phone: '+380442780808',
      facebook: 'https://www.facebook.com/DARTUkraine',
      bio_link: '/biography'
    },
    {
      id: 'lozynsky',
      name: 'Тарас Зіновійович',
      surname: 'ЛОЗИНСЬКИЙ',
      position: 'Перший заступник голови Державного агентства розвитку туризму України',
      image: '/webflow/images/lozynsky-min_1.webp',
      email: 'dart@tourism.gov.ua',
      phone: '+380442780808',
      facebook: 'https://www.facebook.com/DARTUkraine',
      bio_link: '/bio-pershiy-zastupnik'
    }
  ]

  const displayTeam = teamMembers.length > 0 ? teamMembers.map((m: any) => ({
    id: m.id,
    name: m.name,
    surname: m.surname,
    position: m.position,
    image: m.image?.url || '/webflow/images/logo_1.svg',
    email: m.email,
    phone: m.phone,
    facebook: m.facebook,
    bio_link: m.bio_link || '#'
  })) : staticTeam

  return (
    <div className="main header-trigger">
      
      <div className="w-layout-blockcontainer o-container our-team w-container">
        <h1 className="our-team-header">Команда ДАРТ</h1>
        <div className="team-wrap">
          {displayTeam.map((member) => (
            <div key={member.id} className="team-item" style={{ opacity: 1 }}>
              <div title={`${member.surname} ${member.name}`} className="team-img oleskiv">
                <img 
                  src={member.image} 
                  loading="lazy" 
                  width="253" 
                  alt={`${member.surname} pict`} 
                  className="image-bio" 
                />
              </div>
              <div className="person-wrap">
                <Link href={member.bio_link} className="team-bio-link w-inline-block">
                  <div className="team-surname">{member.surname}</div>
                  <div className="team-name">{member.name}</div>
                  <div className="team-text">{member.position}</div>
                </Link>
                <div className="team-link-wrap">
                  {member.email && (
                    <a href={`mailto:${member.email}`} className="team-link w-inline-block">
                      <img src="/webflow/images/gmail.svg" loading="lazy" alt="" className="team-img-link" />
                    </a>
                  )}
                  {member.phone && (
                    <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="team-link-facebook w-inline-block">
                      <img src="/webflow/images/phone.svg" loading="lazy" alt="phone" className="team-img-link team-img-facebook" />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" className="team-link-facebook w-inline-block">
                      <img src="/webflow/images/fb.svg" loading="lazy" alt="" className="team-img-link team-img-facebook" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
