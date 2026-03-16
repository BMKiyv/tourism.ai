'use client'

import React, { useState } from 'react'

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
    }, 1500)
  }

  if (status === 'success') {
    return (
      <div className="success w-form-done" style={{ display: 'block' }}>
        <div className="fr-flex-block">
          <div className="x-img">
            <img src="https://uploads-ssl.webflow.com/5fe0d5ffb18e7f407fe86850/5fe0d5ffb18e7fbeeee868c4_chk-mark.svg" loading="lazy" alt="" className="x-svg" />
          </div>
          <div className="s-txt">Дякуємо! Ваше повідомлення надіслано. Ми зв&#x27;яжемося з вами найближчим часом.</div>
        </div>
      </div>
    )
  }

  return (
    <div className="form-block w-form">
      <form id="email-form" name="email-form" className="form" onSubmit={handleSubmit}>
        <h1 className="form-h">Написати нам</h1>
        <div className="form-1st-block">
          <input className="txt-field w-input" maxLength={256} name="name" placeholder="Ім'я" type="text" id="name" required />
          <input className="txt-field-2 w-input" maxLength={256} name="email" placeholder="Електронна адреса" type="email" id="email" required />
        </div>
        <textarea placeholder="Повідомлення" maxLength={5000} id="field" name="field" required className="txt-area w-input"></textarea>
        <div className="btm-form-block">
          <label className="w-checkbox ch-field">
            <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox"></div>
            <input type="checkbox" id="checkbox" name="checkbox" required style={{ opacity: 0, position: 'absolute', zIndex: -1 }} />
            <span className="ch-label w-form-label" htmlFor="checkbox">Я згоден з обробкою персональних даних</span>
          </label>
          <div className="form-cta">
            <div className="nc-bg hover _2"></div>
            <input type="submit" value={status === 'loading' ? 'Очікуйте...' : 'Надіслати'} className="sub-cta w-button" disabled={status === 'loading'} />
          </div>
        </div>
      </form>
      {status === 'error' && (
        <div className="error w-form-fail" style={{ display: 'block' }}>
          <div>Упс! Щось пішло не так при відправці форми.</div>
        </div>
      )}
    </div>
  )
}
