import Link from 'next/link'

const PHONE_HREF = 'tel:+15551234567'
const PHONE_NUMBER = '(555) 123-4567'

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/diff-action.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-900/90" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="text-white font-medium">Technicians Available Today</span>
        </span>

        <h2 className="text-display-lg text-white">
          Ready to Live
          <br />
          <span className="text-brand-400">Pest-Free?</span>
        </h2>

        <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
          Book your <span className="text-white font-semibold">free inspection</span> — we&apos;ll identify the problem and give you honest options. No pushy sales tactics.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center h-14 sm:h-16 px-8 sm:px-10 bg-white text-brand-800 font-bold text-base sm:text-lg uppercase tracking-wider rounded-2xl shadow-elevated hover:shadow-button-hover hover:bg-brand-50 transition-all transform hover:-translate-y-1"
          >
            Book Free Inspection
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-3 h-14 sm:h-16 px-6 sm:px-8 border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {PHONE_NUMBER}
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-white/70">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Free Inspection</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>No Obligation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
