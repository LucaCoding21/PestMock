'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'HomeCare', href: '/plans' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

const PHONE_NUMBER = '(555) 123-4567'
const PHONE_HREF = 'tel:+15551234567'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY

          // Only hide when scrolled down past 100px
          if (scrollY > 100 && !isScrolled) {
            setIsScrolled(true)
          }
          // Only show when back at the very top
          else if (scrollY <= 5 && isScrolled) {
            setIsScrolled(false)
          }

          lastScrollY = scrollY
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isScrolled])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-100">
      {/* Top announcement bar - hides on scroll */}
      <div className={`bg-brand-900 text-white overflow-hidden transition-all duration-300 ${isScrolled ? 'h-0' : 'h-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 text-sm">
            <Link href="/reviews" className="hidden sm:flex flex-col items-start hover:text-brand-300 transition-colors">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium">1500+ Reviews on Google</span>
            </Link>
            <div className="flex items-center gap-5 ml-auto">
              <a
                href="mailto:info@nopests.com"
                className="hidden md:flex flex-col items-end hover:text-brand-300 transition-colors"
              >
                <span className="text-xs text-brand-300 font-medium">Email Us</span>
                <span className="flex items-center gap-2 font-semibold">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@nopests.com
                </span>
              </a>
              <span className="hidden md:block w-px h-10 bg-white/20" />
              <a
                href={PHONE_HREF}
                className="flex flex-col items-end hover:text-brand-300 transition-colors"
              >
                <span className="text-xs text-brand-300 font-medium">24/7 Emergency Line</span>
                <span className="flex items-center gap-2 font-semibold">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_NUMBER}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-brand-600 rounded-xl flex items-center justify-center shadow-button group-hover:shadow-button-hover transition-shadow">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-2xl text-brand-900 tracking-tight">PestMaster</span>
              <span className="hidden sm:block text-xs text-muted font-medium tracking-wide uppercase">Pest Control</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  pathname === link.href
                    ? 'bg-brand-50 text-brand-700'
                    : 'text-brand-800 hover:bg-brand-50 hover:text-brand-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/plans"
              className="inline-flex items-center justify-center h-11 px-5 border-2 border-brand-200 text-brand-700 hover:border-brand-500 hover:bg-brand-50 font-semibold text-sm rounded-xl transition-all"
            >
              View Plans
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-11 px-6 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
            >
              Free Inspection
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl text-brand-700 hover:bg-brand-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation - Animated */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-6 border-t border-brand-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3.5 font-semibold rounded-xl transition-all duration-200 ${
                    pathname === link.href
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-brand-800 hover:bg-brand-50'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-brand-100">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center h-14 leading-[3.5rem] bg-brand-600 text-white font-bold uppercase tracking-wide rounded-xl shadow-button"
                >
                  Get Free Inspection
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

    </header>
  )
}
