import React from 'react'
import Image from 'next/image'

export const GuideTab = () => {
  const pages = Array.from({ length: 74 }, (_, i) => i + 1)

  return (
    <div id="guide" className="c-section u-switch-1 u-margin">
      <div className="o-container w-container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          {pages.map((page) => {
            const pageNum = page.toString().padStart(4, '0')
            return (
              <img 
                key={page}
                src={`/webflow/images/гайд-для-викривачів-корупції_page-${pageNum}_1.webp`}
                loading="lazy"
                alt={`Гайд для викривачів корупції сторінка ${page}`}
                className="anticor-press"
                style={{ width: '100%', height: 'auto', maxWidth: '1241px' }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
