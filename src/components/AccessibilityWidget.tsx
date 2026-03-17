'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isEn = pathname.startsWith('/en')

  const toggleMenu = () => setIsOpen(!isOpen)

  const getStored = useCallback((key: string, defaultValue: any) => {
    if (typeof window === 'undefined') return defaultValue
    const val = localStorage.getItem(key)
    if (val === null) return defaultValue
    return val
  }, [])

  const setStored = useCallback((key: string, value: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value.toString())
    }
  }, [])

  const adjustFontSize = useCallback((multiply: number = 0) => {
    const storedPercentage = parseFloat(getStored('fontPercentage', '1'))
    let newPercentage = storedPercentage
    if (multiply !== 0) {
      newPercentage = storedPercentage + multiply
      setStored('fontPercentage', newPercentage)
    }

    document.querySelectorAll('*').forEach((el) => {
      const element = el as HTMLElement
      if (!element.classList.contains('material-icons')) {
        let orgFontSize = parseFloat(element.getAttribute('data-asw-orgFontSize') || '0')
        if (!orgFontSize) {
          orgFontSize = parseFloat(window.getComputedStyle(element).getPropertyValue('font-size'))
          element.setAttribute('data-asw-orgFontSize', orgFontSize.toString())
        }
        element.style.fontSize = `${orgFontSize * newPercentage}px`
      }
    })
  }, [getStored, setStored])

  const adjustLetterSpacing = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isLetterSpacingEnabled', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isLetterSpacingEnabled', isEnabled ? '1' : '0')
    }

    document.querySelectorAll('*').forEach((el) => {
      const element = el as HTMLElement
      if (!element.classList.contains('material-icons')) {
        if (isEnabled) {
          let org = element.getAttribute('data-asw-orgLetterSpacing')
          if (org === null) {
            org = element.style.letterSpacing || 'normal'
            element.setAttribute('data-asw-orgLetterSpacing', org)
            const current = org === 'normal' ? 0 : parseFloat(org)
            element.style.letterSpacing = `${current + 0.1}em`
          }
        } else {
          const org = element.getAttribute('data-asw-orgLetterSpacing')
          if (org !== null) {
            element.style.letterSpacing = org === 'normal' ? '' : org
            element.removeAttribute('data-asw-orgLetterSpacing')
          }
        }
      }
    })
  }, [getStored, setStored])

  const enableDyslexicFont = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isDyslexicFontEnabled', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isDyslexicFontEnabled', isEnabled ? '1' : '0')
    }

    document.querySelectorAll('*').forEach((el) => {
      const element = el as HTMLElement
      if (!element.classList.contains('material-icons')) {
        if (isEnabled) {
          const org = element.style.fontFamily
          if (!element.hasAttribute('data-asw-orgFontFamily')) {
            element.setAttribute('data-asw-orgFontFamily', org)
          }
          element.style.fontFamily = 'OpenDyslexic, sans-serif'
        } else {
          const org = element.getAttribute('data-asw-orgFontFamily')
          if (org !== null) {
            element.style.fontFamily = org
            element.removeAttribute('data-asw-orgFontFamily')
          }
        }
      }
    })
  }, [getStored, setStored])

  const enableBigCursor = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isBigCursorEnabled', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isBigCursorEnabled', isEnabled ? '1' : '0')
    }

    const cursorStyle = isEnabled 
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 512 512'%3E%3Cpath d='M429.742 319.31L82.49 0l-.231 471.744 105.375-100.826 61.89 141.083 96.559-42.358-61.89-141.083 145.549-9.25zM306.563 454.222l-41.62 18.259-67.066-152.879-85.589 81.894.164-333.193 245.264 225.529-118.219 7.512 67.066 152.878z' xmlns='http://www.w3.org/2000/svg'/%3E%3C/svg%3E"), default`
      : ''

    document.querySelectorAll('*').forEach((el) => {
      (el as HTMLElement).style.cursor = cursorStyle
    })
  }, [getStored, setStored])

  const enableHighlightLinks = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isHighlightLinks', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isHighlightLinks', isEnabled ? '1' : '0')
    }

    document.querySelectorAll('a, button').forEach((el) => {
      const element = el as HTMLElement
      if (isEnabled) {
        if (!element.hasAttribute('data-asw-orgLinkColor')) {
          element.setAttribute('data-asw-orgLinkColor', window.getComputedStyle(element).color)
          element.setAttribute('data-asw-orgLinkTextDecoration', window.getComputedStyle(element).textDecoration)
          element.setAttribute('data-asw-orgLinkFontWeight', window.getComputedStyle(element).fontWeight)
        }
        element.style.color = '#ff0000'
        element.style.textDecoration = 'underline'
        element.style.fontWeight = '800'
      } else {
        const orgColor = element.getAttribute('data-asw-orgLinkColor')
        if (orgColor !== null) {
          element.style.color = orgColor
          element.style.textDecoration = element.getAttribute('data-asw-orgLinkTextDecoration') || ''
          element.style.fontWeight = element.getAttribute('data-asw-orgLinkFontWeight') || ''
          element.removeAttribute('data-asw-orgLinkColor')
          element.removeAttribute('data-asw-orgLinkTextDecoration')
          element.removeAttribute('data-asw-orgLinkFontWeight')
        }
      }
    })
  }, [getStored, setStored])

  const enableHighlightHeadings = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isHighlightHeadings', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isHighlightHeadings', isEnabled ? '1' : '0')
    }

    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => {
      const element = el as HTMLElement
      if (isEnabled) {
        if (!element.hasAttribute('data-asw-orgHighlightColor')) {
          element.setAttribute('data-asw-orgHighlightColor', window.getComputedStyle(element).color)
          element.setAttribute('data-asw-orgHighlightTextDecoration', window.getComputedStyle(element).textDecoration)
        }
        element.style.color = '#ff0000'
        element.style.textDecoration = 'underline'
      } else {
        const orgColor = element.getAttribute('data-asw-orgHighlightColor')
        if (orgColor !== null) {
          element.style.color = orgColor
          element.style.textDecoration = element.getAttribute('data-asw-orgHighlightTextDecoration') || ''
          element.removeAttribute('data-asw-orgHighlightColor')
          element.removeAttribute('data-asw-orgHighlightTextDecoration')
        }
      }
    })
  }, [getStored, setStored])

  const adjustLineHeight = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isLineHeightEnabled', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isLineHeightEnabled', isEnabled ? '1' : '0')
    }

    document.querySelectorAll('*').forEach((el) => {
      const element = el as HTMLElement
      if (!element.classList.contains('material-icons')) {
        if (isEnabled) {
          let org = element.getAttribute('data-asw-orgLineHeight')
          if (org === null) {
            org = element.style.lineHeight || window.getComputedStyle(element).lineHeight
            element.setAttribute('data-asw-orgLineHeight', org)
            element.style.lineHeight = '2'
          }
        } else {
          const org = element.getAttribute('data-asw-orgLineHeight')
          if (org !== null) {
            element.style.lineHeight = org
            element.removeAttribute('data-asw-orgLineHeight')
          }
        }
      }
    })
  }, [getStored, setStored])

  const adjustFontWeight = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isFontWeightEnabled', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isFontWeightEnabled', isEnabled ? '1' : '0')
    }

    document.querySelectorAll('*').forEach((el) => {
      const element = el as HTMLElement
      if (!element.classList.contains('material-icons')) {
        if (isEnabled) {
          if (!element.hasAttribute('data-asw-orgFontWeight')) {
            element.setAttribute('data-asw-orgFontWeight', window.getComputedStyle(element).fontWeight)
          }
          element.style.fontWeight = 'bold'
        } else {
          const org = element.getAttribute('data-asw-orgFontWeight')
          if (org !== null) {
            element.style.fontWeight = org
            element.removeAttribute('data-asw-orgFontWeight')
          }
        }
      }
    })
  }, [getStored, setStored])

  const adjustContrast = useCallback((toggle: boolean = false) => {
    let isEnabled = getStored('isContrastEnabled', '0') === '1'
    if (toggle) {
      isEnabled = !isEnabled
      setStored('isContrastEnabled', isEnabled ? '1' : '0')
    }

    document.querySelectorAll('*').forEach((el) => {
      const element = el as HTMLElement
      if (isEnabled) {
        if (!element.hasAttribute('data-asw-orgContrastColor')) {
          element.setAttribute('data-asw-orgContrastColor', element.style.color || window.getComputedStyle(element).color)
          element.setAttribute('data-asw-orgContrastBgColor', element.style.backgroundColor || window.getComputedStyle(element).backgroundColor)
        }
        element.style.color = '#f0c711'
        element.style.backgroundColor = '#4d4d75'
      } else {
        const orgColor = element.getAttribute('data-asw-orgContrastColor')
        if (orgColor !== null) {
          element.style.color = orgColor
          element.style.backgroundColor = element.getAttribute('data-asw-orgContrastBgColor') || ''
          element.removeAttribute('data-asw-orgContrastColor')
          element.removeAttribute('data-asw-orgContrastBgColor')
        }
      }
    })
  }, [getStored, setStored])

  const reset = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.clear()
      window.location.reload()
    }
  }, [])

  useEffect(() => {
    // Initial load
    adjustFontSize()
    adjustLetterSpacing()
    enableDyslexicFont()
    enableBigCursor()
    enableHighlightLinks()
    enableHighlightHeadings()
    adjustLineHeight()
    adjustFontWeight()
    adjustContrast()
  }, [adjustFontSize, adjustLetterSpacing, enableDyslexicFont, enableBigCursor, enableHighlightLinks, enableHighlightHeadings, adjustLineHeight, adjustFontWeight, adjustContrast])

  const labels = {
    title: isEn ? "Accessibility Menu" : "Меню доступності",
    increaseFont: isEn ? "Increase Font Size" : "Збільшити розмір тексту",
    decreaseFont: isEn ? "Decrease Font Size" : "Зменшити розмір тексту",
    lineSpacing: isEn ? "Line Spacing" : "Міжрядковий інтервал",
    letterSpacing: isEn ? "Letter Spacing" : "Міжлітерний інтервал",
    dyslexicFont: isEn ? "Dyslexic Font" : "Дислексія",
    highlightHeadings: isEn ? "Highlight Headings" : "Підсвічування заголовків",
    highlightLinks: isEn ? "Highlight Links" : "Підсвічування посилань",
    fontWeight: isEn ? "Font Weight" : "Жирний шрифт",
    biggerCursor: isEn ? "Bigger Cursor" : "Більший курсор",
    contrast: isEn ? "Contrast" : "Контрастність",
    reset: isEn ? "Reset settings" : "Скинути налаштування",
    close: isEn ? "Close" : "Закрити"
  }

  return (
    <div className="availability-box">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons&amp;text=ads_click,text_rotation_none,text_fields,format_size,blind,restart_alt,close,link,local_parking,contrast,spellcheck,local_library,format_bold,format_line_spacing" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap');
        .asw-menu {
            font-family: 'Inter', sans-serif;
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
        .asw-menu-header button {
            background: transparent;
            border: none;
            padding: 12px;
            cursor: pointer;
            color: #000;
            display: flex;
            align-items: center;
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
        .asw-menu-content {
            overflow-y: auto;
            max-height: calc(100% - 80px);
            color: #333;
            padding: 15px 0;
        }
        .asw-widget, .asw-menu {
            user-select: none;
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
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            cursor: pointer;
            border: 4px solid white ;
            outline: 4px solid #2d5ca6;
        }
        @font-face {
            font-family: 'OpenDyslexic';
            src: url("https://website-widgets.pages.dev/fonts/OpenDyslexic-Regular.woff") format("woff"), url("https://website-widgets.pages.dev/fonts/OpenDyslexic-Regular.ttf") format("truetype");
        }
        @media only screen and (max-width: 959px) { .asw-menu-btn { top: 160px; } }
        @media only screen and (max-width: 569px) { .asw-menu-btn { top: 120px; } }
        @media only screen and (max-width: 560px) {
            .asw-menu { width: calc(100% - 20px); left: 10px; }
        }
        @media only screen and (max-width: 420px) {
            .asw-items { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      ` }} />

      {isOpen && (
        <div className="asw-menu" id="aswMenu" role="dialog" aria-modal="true">
          <div className="asw-menu-header">
            <div className="asw-translate">{labels.title}</div>
            <div>
              <button type="button" onClick={reset} title={labels.reset}>
                <span className="material-icons">restart_alt</span>
              </button>
              <button type="button" onClick={toggleMenu} title={labels.close}>
                <span className="material-icons">close</span>
              </button>
            </div>
          </div>
          <div className="asw-menu-content">
            <div className="asw-card">
              <div className="asw-items content">
                <button className="asw-btn" type="button" onClick={() => adjustFontSize(0.1)}>
                  <span className="material-icons">format_size</span>
                  <span className="asw-translate">{labels.increaseFont}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => adjustFontSize(-0.1)}>
                  <span className="material-icons">text_fields</span>
                  <span className="asw-translate">{labels.decreaseFont}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => adjustLineHeight(true)}>
                  <span className="material-icons">format_line_spacing</span>
                  <span className="asw-translate">{labels.lineSpacing}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => adjustLetterSpacing(true)}>
                  <span className="material-icons">text_rotation_none</span>
                  <span className="asw-translate">{labels.letterSpacing}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => enableDyslexicFont(true)}>
                  <span className="material-icons">spellcheck</span>
                  <span className="asw-translate">{labels.dyslexicFont}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => enableHighlightHeadings(true)}>
                  <span className="material-icons">local_parking</span>
                  <span className="asw-translate">{labels.highlightHeadings}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => enableHighlightLinks(true)}>
                  <span className="material-icons">link</span>
                  <span className="asw-translate">{labels.highlightLinks}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => adjustFontWeight(true)}>
                  <span className="material-icons">format_bold</span>
                  <span className="asw-translate">{labels.fontWeight}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => enableBigCursor(true)}>
                  <span className="material-icons">ads_click</span>
                  <span className="asw-translate">{labels.biggerCursor}</span>
                </button>
                <button className="asw-btn" type="button" onClick={() => adjustContrast(true)}>
                  <span className="material-icons">contrast</span>
                  <span className="asw-translate">{labels.contrast}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="asw-widget">
        <button className="asw-menu-btn" title={labels.title} onClick={toggleMenu}>
          <span className="material-icons md-36 white" style={{ fontSize: '25px', color: '#f9f9f9' }}>blind</span>
        </button>
      </div>
    </div>
  )
}
