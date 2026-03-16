'use client'

import React from 'react'

export const AccessibilityWidget = () => {
  return (
    <div className="availability-box">
      <div className="w-embed">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons&amp;text=ads_click,text_rotation_none,text_fields,format_size,blind,restart_alt,close,link,local_parking,contrast,spellcheck,local_library,format_bold,format_line_spacing" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
          .asw-menu {
              font-family: 'Inter';
              position: fixed;
              right: 20px;
              top: 20px;
              border-radius: 8px;
              box-shadow: 0px 0px 20px #00000080;
              opacity: 1;
              transition: .3s;
              z-index: 500000;
              overflow: hidden;
              background: #f9f9f9;
              width: 500px;
              line-height: 1;
              font-size: 16px;
              letter-spacing: 0.015em;
              height: calc(100% - 40px - 75px);
              color: #000 ;
          }
          .asw-menu-header {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding-left: 18px;
              height: 60px;
              font-size: 18px;
              font-weight: 700;
              border-bottom: 1px solid #dedede;
              color: #000;
          }
          .asw-menu-header > div {
              display: flex;
          }
          .asw-menu-header div[role="button"] {
              padding: 12px;
              cursor: pointer;
              color: #000;
          }
          .asw-menu-header div[role="button"]:hover {
              opacity: 0.8;
              color: #000;
          }
          .asw-card {
              margin: 0 15px 30px;
          }
          .asw-items {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 1rem;
          }
          .asw-btn {
              aspect-ratio: 6 / 5;
              border-radius: 4px;
              padding: 0 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              text-align: center;
              color: #333;
              font-size: 16px !important;
              background: #fff;
              border: 1px solid #dedede;
              transition: all 0.3s ease;
              cursor: pointer;
              line-height: 1.4;
          }
          .asw-btn .asw-translate {
              font-size: 15px !important;
          }
          .asw-btn .material-icons {
              margin-bottom: 16px;
          }
          .asw-btn:hover {
              border-color:  #2d5ca6;
          }
          .asw-btn.asw-selected {
              background: #2d5ca6;
              color: white;
              border-color: #2d5ca6;
          }
          .asw-menu-content {
              overflow-y: scroll;
              max-height: calc(100% - 80px);
              color: #333;
              padding: 15px 0;
          }
          .asw-widget,
          .asw-menu {
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              font-weight: 400;
              -webkit-font-smoothing: antialiased;
          }
          .asw-widget *,
          .asw-menu * {
              box-sizing: border-box;
          }
          .asw-menu-btn {
              position: fixed;
              z-index: 500000;
              right: 20px;
              top: 25px;
              background: #2d5ca6 ;
              box-shadow: 0 5px 15px 0 rgb(37 44 97 / 15%), 0 2px 4px 0 rgb(93 100 148 / 20%);
              transition: .3s;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              transform: scale(1);
              width: 40px;
              height: 40px;
              display: flex;
              cursor: pointer;
              border: 4px solid white ;
              outline: 4px solid #2d5ca6;
              text-decoration: none;
          }
          .asw-menu-btn:hover {
              transform: scale(1.1);
              outline: 4px solid #2d5ca6;
          }
          .material-icons.md-36.white { font-size: 25px; color: #f9f9f9; }
          @font-face {
                  font-family: 'OpenDyslexic';
                  src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic-Regular.woff") format("woff"), url("https://website-widgets.pages.dev/fonts/OpenDyslexic-Regular.ttf") format("truetype");
              }
          @media only screen and (max-width: 560px) {
              .asw-menu-btn {
                  width: 38px;
                  height: 38px;
              }
              .asw-menu-btn svg {
                  width: 24px;
                  height: 24px;
                  min-height: 24px;
                  min-width: 24px;
                  max-width: 24px;
                  max-height: 24px;
              }
          }
          @media only screen and (max-width: 560px) {
              .asw-menu {
                  width: calc(100% - 20px);
                  left: 10px;
              }
          }
          @media only screen and (max-width: 420px) {
              .asw-items {
                  grid-template-columns: repeat(2, minmax(0, 1fr));
                  gap: 0.5rem;
              }
              .asw-menu {
                  width: calc(100% - 20px);
                  left: 10px;
              }
          }
              @media only screen and (max-width: 959px) {
              .asw-menu-btn {
                  top: 160px;
              }
          }
              @media only screen and (max-width: 569px) {
              .asw-menu-btn {
                  top: 120px;
              }
          }
          .asw-menu-btn:focus-visible,
          .asw-menu-reset:focus-visible,
          .asw-menu-close:focus-visible,
          .asw-btn:focus-visible {
              outline: 3px solid #005fcc;
              outline-offset: 2px;
              box-shadow: 0 0 0 4px white;
          }
          .asw-menu[hidden] {
              display: none;
          }
        ` }} />
      </div>
      <div className="w-embed">
        <div className="asw-menu" id="aswMenu" role="dialog" aria-modal="true" aria-labelledby="aswMenuHeader" hidden>
          <div className="asw-menu-header">
            <div className="asw-translate" id="aswMenuHeader">
              Accessibility Menu
            </div>
            <div>
              <button type="button" className="asw-menu-reset" title="Reset settings" id="aswResetBtn">
                <span className="material-icons">restart_alt</span>
              </button>
              <button type="button" className="asw-menu-close" title="Close" id="aswCloseBtn">
                <span className="material-icons">close</span>
              </button>
            </div>
          </div>
          <div className="asw-menu-content">
            <div className="asw-card">
              <div className="asw-items content">
                <button className="asw-btn" type="button" data-asw-action="fontSize" data-asw-value="0.1">
                  <span className="material-icons">format_size</span>
                  <span className="asw-translate">Increase Font Size</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="fontSize" data-asw-value="-0.1">
                  <span className="material-icons">text_fields</span>
                  <span className="asw-translate">Decrease Font Size</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="lineHeight">
                  <span className="material-icons">format_line_spacing</span>
                  <span className="asw-translate">Line Spacing</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="letterSpacing">
                  <span className="material-icons">text_rotation_none</span>
                  <span className="asw-translate">Letter Spacing</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="dyslexicFont">
                  <span className="material-icons">spellcheck</span>
                  <span className="asw-translate">Dyslexic Font</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="highlightHeadings">
                  <span className="material-icons">local_parking</span>
                  <span className="asw-translate">Highlight Headings</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="highlightLinks">
                  <span className="material-icons">link</span>
                  <span className="asw-translate">Highlight Links</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="fontWeight">
                  <span className="material-icons">format_bold</span>
                  <span className="asw-translate">Font Weight</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="bigCursor">
                  <span className="material-icons">ads_click</span>
                  <span className="asw-translate">Bigger Cursor</span>
                </button>
                <button className="asw-btn" type="button" data-asw-action="contrast">
                  <span className="material-icons">contrast</span>
                  <span className="asw-translate">Contrast</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="asw-widget">
          <button className="asw-menu-btn" title="Open Accessibility Menu" aria-expanded="false" aria-controls="aswMenu" id="aswMenuBtn">
            <span className="material-icons md-36 white">blind</span>
          </button>
        </div>
      </div>
    </div>
  )
}
