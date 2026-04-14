import Link from 'next/link'

const PHONE_NUMBER = '(555) 123-4567'
const PHONE_HREF = 'tel:+15551234567'

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 bg-brand-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="font-extrabold text-xl">PestMaster</span>
                <span className="block text-xs text-brand-400 font-medium tracking-wide uppercase">Pest Control</span>
              </div>
            </Link>
            <p className="mt-6 text-brand-300 leading-relaxed">
              Professional pest control services. Licensed, insured, and committed to keeping your home pest free.
            </p>
            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-3 text-white font-bold text-lg hover:text-brand-300 transition-colors"
            >
              <span className="w-10 h-10 bg-brand-800 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Ant Control', 'Rodent Control', 'Termite Protection', 'Cockroach Treatment', 'Spider Removal', 'All Services'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-brand-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {[
                { label: 'Plans & Pricing', href: '/plans' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Service Areas', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-brand-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-6">Hours</h3>
            <ul className="space-y-4 text-brand-300 max-w-[200px] mx-auto md:mx-0">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span className="text-white font-medium">7am - 7pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">8am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">Closed</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-brand-800/50 rounded-xl max-w-[200px] mx-auto md:mx-0">
              <p className="text-brand-400 font-semibold text-sm">24/7 Emergency Line</p>
              <p className="text-white font-bold">{PHONE_NUMBER}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-400 text-sm">
              &copy; {new Date().getFullYear()} PestMaster. All rights reserved.
            </p>
            <div className="flex gap-6 text-brand-400 text-sm">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
