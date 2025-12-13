'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const PHONE_NUMBER = '(555) 123-4567'
const PHONE_HREF = 'tel:+15551234567'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    // Only trigger if mouse leaves from the top of the viewport
    if (e.clientY <= 0 && !hasShown) {
      setIsVisible(true)
      setHasShown(true)
      // Store in session so it doesn't show again during this visit
      sessionStorage.setItem('exitPopupShown', 'true')
    }
  }, [hasShown])

  useEffect(() => {
    // Check if popup was already shown this session
    const alreadyShown = sessionStorage.getItem('exitPopupShown')
    if (alreadyShown) {
      setHasShown(true)
      return
    }

    // Delay adding the listener so it doesn't trigger immediately
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000) // Wait 5 seconds before enabling exit intent

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseLeave])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fadeIn"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scaleIn">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-brand-600 hover:text-brand-800 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 px-8 py-10 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>
          <h2 className="text-3xl font-bold">Wait! Before You Go...</h2>
          <p className="mt-3 text-white/90 text-lg">
            Get <span className="font-bold text-yellow-300">$50 OFF</span> your first treatment
          </p>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-brand-800 font-medium">Free inspection (no obligation)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-brand-800 font-medium">Same-day service available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-brand-800 font-medium">100% satisfaction guarantee</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <Link
              href="/contact"
              onClick={handleClose}
              className="block w-full h-14 bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover hover:-translate-y-0.5 transition-all text-center leading-[3.5rem]"
            >
              Claim $50 Off Now
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 w-full h-12 border-2 border-brand-200 text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {PHONE_NUMBER}
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-muted">
            Offer expires in 24 hours. New customers only.
          </p>
        </div>
      </div>

    </div>
  )
}
