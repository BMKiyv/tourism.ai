import Link from 'next/link'

export default function EnglishHomePage() {
  return (
    <>
      <div className="first-wrap">
        <div className="first">
          <div className="first-wideo">
            <div className="div-block-19 first-text-wrap main-page"></div>
            <div className="background-video w-background-video w-background-video-atom">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ backgroundImage: 'url("/webflow/videos/first_screen_background-poster-00001.jpg")' }}
                data-wf-ignore="true"
              >
                <source src="/webflow/videos/first_screen_background-transcode.mp4" data-wf-ignore="true" />
                <source src="/webflow/videos/first_screen_background-transcode.webm" data-wf-ignore="true" />
              </video>
            </div>
          </div>
          <h1 className="first-title">State Agency for Tourism Development of Ukraine -</h1>
          <div className="first-text">
            is the central executive authority responsible for implementing the state policy in the field of tourism and resorts in Ukraine.&nbsp;<br />
            We are a team working on improving the quality of the national tourism product, developing travel in Ukraine and promoting Ukraine as a tourist destination in the world.<br />
          </div>
        </div>
      </div>

      <div className="w-layout-blockcontainer o-container our-mission-wrap w-container">
        <div className="w-layout-grid _3-col-grid mission-grid">
          <div className="gr-col-block">
            <div className="second-screen-img">
              <img src="/webflow/images/bg-img-1_1.webp" loading="lazy" alt="mission" className="image-description" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="gr-2nd-col-block">
              <h2 className="gr-col-h mission-item-heading">Mission</h2>
              <div className="gr-col-inf mission-item-text">
                We are building a modern, sustainable, and digitalized tourism system in Ukraine based on transparency, reliable statistics, innovative services, and a high-quality tourism product that meets European standards. We are working on the recovery and strategic transformation of the industry to prepare it for the return of foreign tourist flows and full-scale post-war development.
              </div>
            </div>
          </div>
          <div className="gr-col-block">
            <div className="second-screen-img">
              <img src="/webflow/images/bg-img-3_1.webp" loading="lazy" alt="vision" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="gr-2nd-col-block">
              <h2 className="gr-col-h mission-item-heading">Vision</h2>
              <div className="gr-col-inf mission-item-text">
                We see Ukraine as an innovative, integrated into the European space tourism destination that is dynamically developing, and where tourism is accessible, convenient, open, and attractive for large-scale investment, equal in opportunities for every traveler, and one of the components of economic growth.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="o-container alt-container w-container">
        <div className="alt-projects">
          <h2 className="alt-project-head">SATD Projects</h2>
          <div className="alt-project-text">
            We implement projects that popularize Ukraine for both Ukrainians and the world. In these projects, we support local initiatives, promote new routes, and draw attention to tourist destinations.
          </div>
        </div>
        <div className="w-layout-grid _4-column-grid">
          <a href="https://www.facebook.com/MandruiUkrainoiu/" target="_blank" rel="noopener noreferrer" className="grid-item w-inline-block">
            <div className="u-overflow">
              <img src="/webflow/images/mandruy-pict_1.webp" loading="lazy" alt="mandruy" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="gr-2nd-col-block">
              <h3 className="grid-item-head">#MandruyUkrainoyu</h3>
              <div className="grid-item-text">A media project that introduces Ukrainians to Ukraine: unknown, beautiful, diverse, and interesting. Everyone will be able to discover new locations, learn incredible stories, and will definitely add the suggested routes to their "must-visit" list.</div>
            </div>
          </a>
          <a href="/webflow/documents/marshrouts.pdf" target="_blank" rel="noopener noreferrer" className="grid-item w-inline-block">
            <div className="u-overflow">
              <img src="/webflow/images/marshruty-pict_1.webp" loading="lazy" alt="routes of memory" style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="gr-2nd-col-block">
              <h3 className="grid-item-head">Routes of Memory</h3>
              <div className="grid-item-text">A network of locations that honor the memory of the fallen, events, and places related to the armed aggression of Russia against Ukraine and the opposition to it. A route with several memorial sites will be created in each region to show the scale of this war.</div>
            </div>
          </a>
        </div>
      </div>

      <div className="news__section-wrap">
        <div className="o-container news-header-container">
          <h2 className="main-all-news">News</h2>
        </div>
        <section className="news-section">
          <div className="o-container news-main w-container">
            <div className="collection-list-wrapper alt-news-collection w-dyn-list">
              <div role="list" className="collection-list second-collection w-dyn-items">
                {/* Static placeholders for now */}
                <div role="listitem" className="collection-item news-item w-dyn-item">
                  <div className="o-layout-nws u-anim news-item-wrap">
                    <div className="o-layout-nws-overflow news-img-wrap">
                      <img loading="lazy" src="/webflow/images/hero_1.webp" alt="news" className="o-layout-img" />
                    </div>
                    <h3 className="news-heading">Coming soon: English news section</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="contact" className="h-section-5 alt-main-form">
        <div className="o-container u-size last-section w-container">
          <div className="_4column-flex">
            <div className="div-block-18">
              <h3 className="banner-heading">Our Information Partners</h3>
              <div className="slider-block">
                <div className="slider-3 w-slider">
                  <div className="mask w-slider-mask">
                    <div className="slide-6 w-slide">
                      <img src="/webflow/images/slide-link-1-img_1.webp" loading="lazy" alt="" className="o-img alt-page-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_4col-last-block">
              <h3 className="form-main-header">Write to Us</h3>
              <div className="form-block-2 main-form w-form">
                <form id="email-form" name="email-form" className="form">
                  <div className="form-1st-block">
                    <input className="txt-field form-main-input w-input" maxLength={256} name="name-2" placeholder="Full Name" type="text" id="name-2" required />
                    <input className="txt-field-2 form-main-input w-input" maxLength={256} name="email-2" placeholder="Email Address" type="email" id="email-2" required />
                  </div>
                  <textarea className="txt-area form-main-area w-input" maxLength={5000} name="field-2" placeholder="Your Message" id="field-2" required></textarea>
                  <div className="submit-checkbox">
                    <label className="w-checkbox checkbox-wrap">
                      <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
                      <input id="checkbox-2" type="checkbox" name="checkbox-2" required style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
                      <span className="checkbox-label w-form-label" htmlFor="checkbox-2">I agree to the processing of personal data</span>
                    </label>
                    <div className="form-cta submit-button">
                      <input type="submit" className="form-main-submit w-button" value="Send" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
