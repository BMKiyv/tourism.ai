'use client'

import { useState, useEffect } from 'react'

export const AccessibilityTrigger = () => {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast')
    } else {
      document.documentElement.classList.remove('high-contrast')
    }
  }, [highContrast])

  return (
    <button 
      onClick={() => setHighContrast(!highContrast)}
      className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-sm"
      aria-label="Перемкнути версію для людей з порушенням зору"
    >
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
      {highContrast ? 'Звичайна версія' : 'Для слабозорих'}
    </button>
  )
}
