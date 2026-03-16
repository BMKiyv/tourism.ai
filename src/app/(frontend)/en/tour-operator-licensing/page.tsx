import React from 'react'
import { DocumentLink } from '@/components/DocumentLink'
import { AccessibilityTrigger } from '@/components/AccessibilityTrigger'

export default function EnglishLicensingPage() {
  return (
    <div className="categories-page-wrap header-trigger">
      <AccessibilityTrigger />
      
      <div className="w-layout-blockcontainer o-container alt-categories w-container">
        <h1 className="categories-page-header1">Procedure for obtaining a tour operator license</h1>
      </div>

      <div className="w-layout-blockcontainer o-container infographics-wrap w-container">
        <div className="infographics-item first infographics-license">
          <DocumentLink href="https://zakon.rada.gov.ua/laws/file/text/81/f450587n122.doc" className="infographics-link w-inline-block">
            <div className="infographics-content">
              <h3 className="infographics-content-header">Fill out the application</h3>
              <div className="infographics-content-text"><span className="infographics-bold">for a license, </span></div>
              <div className="text-block-29"><span className="infographics-bold"><strong className="bold-text-9">you can download a copy right here</strong></span></div>
            </div>
          </DocumentLink>
        </div>
        <div className="t-arr infographics-arrow second"></div>
        <div className="infographics-item third infographics-licencse">
          <div className="infographics-content">
            <h3 className="infographics-header">Attach the necessary documents and send </h3>
            <h3 className="infographics-content-header">to the SATD mailing address</h3>
            <div className="infographics-content-text">The required list of documents is listed below</div>
          </div>
        </div>
        <div className="flipped-arrow license-arrow">
          <div className="t-arr infographics-semiflipped-arrow fourth"></div>
        </div>
        <div className="infographics-item fifth infographics-licencse">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Consideration of the application</h3>
            <div className="infographics-content-text">by the licensing authority (SATD)</div>
          </div>
        </div>
        <div className="t-arr infogaphics-flipped-arrow sixth"></div>
        <div className="infographics-item seventh infographics-licencse">
          <div className="infographics-content">
            <h3 className="infographics-content-header">Official response</h3>
            <div className="infographics-content-text">Get an official response regarding the license status</div>
          </div>
        </div>
      </div>

      <div className="w-layout-blockcontainer o-container w-container">
        <h1 className="categories-page-header-2">Exhaustive list of documents required to receive the service</h1>
        <ul role="list" className="list">
          <li className="categories--page--text">Application for a license for the right to conduct tour operator activities</li>
          <li className="categories--page--text">Copies of documents (their extracts) confirming the educational and qualification level, work experience of the head of the license applicant, necessary for conducting tour operator activities.</li>
          <li className="categories--page--text">A copy of the document confirming the financial security of civil liability to tourists.</li>
          <li className="categories--page--text">A copy of the contract concluded with the insurance company on the mandatory (medical and accident) insurance of tourists performing tourist trips.</li>
          <li className="categories--page--text">
            <DocumentLink href="https://zakon.rada.gov.ua/laws/show/991-2015-%D0%BF#n67" className="laws-list-item">
              Description of documents submitted for obtaining a license for the right to conduct tour operator activities.
            </DocumentLink>
          </li>
          <li className="categories--page--text">Information regarding the places of implementation of tour operator activities</li>
          <li className="categories--page--text">A document confirming the absence of control over the activities of the business entity in the sense given in Article 1 of the Law of Ukraine "On the Protection of Economic Competition", by residents of states carrying out armed aggression against Ukraine, in the sense given in Article 1 of the Law of Ukraine "On the Defense of Ukraine".</li>
        </ul>
      </div>
    </div>
  )
}
