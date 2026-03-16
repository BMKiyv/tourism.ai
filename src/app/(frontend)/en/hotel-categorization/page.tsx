import React from 'react'
import { DocumentLink } from '@/components/DocumentLink'
import { AccessibilityTrigger } from '@/components/AccessibilityTrigger'

export default function EnglishCategorizationPage() {
  return (
    <div className="categories-page-wrap header-trigger">
      <AccessibilityTrigger />
      
      <div className="w-layout-blockcontainer o-container alt-categories w-container">
        <h1 className="categories-page-header1">Procedure for obtaining a category of a temporary accommodation facility</h1>
      </div>

      <div className="w-layout-blockcontainer o-container infographics-wrap w-container">
        <div id="1" className="infographics-item first categories-1">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Sending the application</h3>
            <div className="infographics-content-text"><span className="text-span">to the certification body on the territory of which the hotel is located</span></div>
          </div>
        </div>
        <div id="2" className="t-arr infographics-arrow second categories-2"></div>
        <div id="3" className="infographics-item third categories-3">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Formation of the commission</h3>
            <div className="infographics-content-text">On hotel evaluation by certification bodies</div>
          </div>
        </div>
        <div id="4" className="t-arr infographics-arrow fourth categories-4"></div>
        <div id="5" className="infographics-item fifth categories-5">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Consideration of the application for categorization</h3>
            <div className="infographics-content-text">by the certification body</div>
          </div>
        </div>
        <div className="flipped-arrow categories-6">
          <div id="6" className="t-arr infographics-semiflipped-arrow sixth categories-6"></div>
        </div>
        <div id="11" className="infographics-item eleventh categories-11">
          <div className="infographics-content">
            <h3 className="infographics-content-header">The commission issues to the applicant</h3>
            <div className="infographics-content-text">A certificate of establishing the appropriate category for the hotel</div>
          </div>
        </div>
        <div id="8" className="t-arr infogaphics-flipped-arrow eighth categories-8"></div>
        <div id="9" className="infographics-item nineth categories-9">
          <div className="infographics-content">
            <h3 className="infographics-content-header">The certification body sends to the SATD</h3>
            <div className="infographics-content-text">hotel evaluation results and proposals. Decision is made by majority vote</div>
          </div>
        </div>
        <div id="10" className="t-arr infogaphics-flipped-arrow tenth categories-10"></div>
        <div id="7" className="infographics-item seventh categoties-7">
          <div className="infographics-content">
            <h3 id="11" className="infographics-content-header">Hotel evaluation work</h3>
            <div className="infographics-content-text">carried out in accordance with the requirements of DSTU 4269 "Tourist services. Classification of hotels"</div>
          </div>
        </div>
      </div>

      <div className="w-layout-blockcontainer o-container categories-lists w-container">
        <h2 className="categories-page-header-2">Exhaustive list of documents required to receive the service</h2>
        <ul role="list" className="list">
          <li className="categories--page--text">Application for establishing the appropriate category of the hotel</li>
          <li className="categories--page--text">Questionnaire</li>
          <li className="categories--page--text">Report on conformity assessment to the requirements of DSTU 4269 "Tourist services. Classification of hotels"</li>
          <li className="categories--page--text">Certificates of compliance, lease agreements, etc. for services provided in the hotel</li>
          <li className="categories--page--text">Photo and video materials to determine compliance with the points of DSTU 4269</li>
        </ul>
      </div>
    </div>
  )
}
