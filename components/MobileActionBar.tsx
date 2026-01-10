'use client'

import Link from 'next/link'

const PHONE_HREF = 'tel:+15551234567'

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-brand-100 shadow-elevated safe-area-bottom">
      <div className="grid grid-cols-2 gap-3 p-3">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 h-14 bg-green-500 text-white font-bold rounded-xl shadow-button active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 h-14 bg-brand-600 text-white font-bold uppercase tracking-wide rounded-xl shadow-button active:scale-[0.98] transition-transform"
        >
          Free Inspection
        </Link>
      </div>
    </div>
  )
}
