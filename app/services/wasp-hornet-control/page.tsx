import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'

const waspTypes = [
  { name: 'Yellow Jackets', description: 'Aggressive wasps that nest in the ground or wall voids', image: '/hornet/yellowjacket.jpg' },
  { name: 'Paper Wasps', description: 'Build umbrella-shaped nests under eaves and overhangs', image: '/hornet/paper-wasps.jpg' },
  { name: 'Bald-Faced Hornets', description: 'Large black and white hornets with aerial paper nests', image: '/hornet/bald-hornet.webp' },
  { name: 'European Hornets', description: 'Large brown hornets that nest in hollow trees or walls', image: '/hornet/european-hornet.jpg' },
]

const signs = [
  'Visible nests under eaves, in trees, or on structures',
  'Increased wasp or hornet activity around your property',
  'Wasps entering and exiting holes in the ground or walls',
  'Buzzing sounds coming from walls or ceiling',
  'Chewed wood or paper-like material near nest sites',
]

const preventionTips = [
  {
    title: 'Seal Entry Points',
    description: 'Close gaps around windows, doors, and utility penetrations',
    icon: 'shield',
  },
  {
    title: 'Cover Food Outdoors',
    description: 'Keep food and drinks covered during outdoor activities',
    icon: 'box',
  },
  {
    title: 'Manage Garbage',
    description: 'Use tight-fitting lids and clean bins regularly',
    icon: 'home',
  },
  {
    title: 'Trim Vegetation',
    description: 'Keep bushes and trees trimmed away from your home',
    icon: 'scissors',
  },
  {
    title: 'Remove Fallen Fruit',
    description: 'Clean up fallen fruit that attracts wasps',
    icon: 'sparkle',
  },
  {
    title: 'Early Detection',
    description: 'Check for new nests in spring when they are small',
    icon: 'droplet',
  },
]

export default function WaspHornetControlPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hornet/european-hornet.jpg"
              alt="Wasp and Hornet Control"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/85" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-500/20 text-brand-300 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Professional Stinging Insect Control
            </span>
            <h1 className="text-display-lg text-white">
              Wasp & Hornet Removal
            </h1>
            <p className="mt-6 text-xl text-brand-200 max-w-2xl mx-auto">
              Safe, professional removal of wasp and hornet nests. Protect your family from painful stings with our expert technicians.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 h-14 px-8 bg-white hover:bg-brand-50 text-brand-800 font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
          </div>
        </section>

        {/* Understanding Wasps & Hornets */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-display text-brand-900">Understanding Wasps & Hornets</h2>
              <p className="mt-6 text-xl text-muted">
                Wasps and hornets are beneficial predators that help control other insect populations, but they become a serious threat when they nest near your home. Unlike bees, they can sting multiple times and will aggressively defend their colony.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {waspTypes.map((wasp) => (
                <div key={wasp.name} className="bg-brand-50 rounded-2xl overflow-hidden text-center">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={wasp.image}
                      alt={wasp.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-brand-900 text-lg mb-2">{wasp.name}</h3>
                    <p className="text-muted text-sm">{wasp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signs of Infestation */}
        <section className="py-24 lg:py-32 bg-warm-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                  Warning Signs
                </span>
                <h2 className="text-display text-brand-900">Signs You Have a Wasp Problem</h2>
                <p className="mt-6 text-lg text-muted">
                  Early detection is key to preventing a small wasp problem from becoming a large, dangerous infestation. Watch for these signs:
                </p>
                <ul className="mt-8 space-y-4">
                  {signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-brand-800">{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square">
                <img
                  src="/hornet/hornet-nest.webp"
                  alt="Wasp nest signs"
                  className="w-full h-full object-cover rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Treatment Process */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-display text-white">Our Removal Process</h2>
              <p className="mt-4 text-xl text-brand-300">Safe, effective nest removal by trained professionals</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Inspection', desc: 'Locate all nests and identify the species for proper treatment' },
                { step: '2', title: 'Safety Setup', desc: 'Establish safety perimeter and prepare protective equipment' },
                { step: '3', title: 'Treatment', desc: 'Apply targeted treatment to eliminate the colony' },
                { step: '4', title: 'Nest Removal', desc: 'Safely remove the nest and seal entry points' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-brand-500 text-white font-extrabold text-2xl rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-button">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                  <p className="text-brand-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safe & Sustainable */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                  Safe & Sustainable
                </span>
                <h2 className="text-display text-brand-900">Safe Wasp & Hornet Removal</h2>
                <p className="mt-6 text-lg text-muted">
                  Our trained technicians use professional-grade equipment and targeted treatments to safely eliminate wasp and hornet colonies while minimizing environmental impact.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">Pet & Child Safe</h4>
                      <p className="text-sm text-muted mt-1">Targeted treatments that don&apos;t affect your family</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">Bee-Friendly</h4>
                      <p className="text-sm text-muted mt-1">We protect beneficial pollinators like honey bees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">Professional Equipment</h4>
                      <p className="text-sm text-muted mt-1">Specialized gear for safe, effective removal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">Complete Removal</h4>
                      <p className="text-sm text-muted mt-1">We remove nests and seal entry points</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-brand-900 mb-6">Our Commitment to Safety</h3>
                <ul className="space-y-4">
                  {[
                    'All technicians wear protective equipment',
                    'EPA-registered products only',
                    'Same-day emergency service available',
                    'Complete nest removal included',
                    'Entry point sealing to prevent return',
                    '30-day guarantee on all removals',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-brand-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                DIY Prevention
              </span>
              <h2 className="text-display text-brand-900">How to Prevent Wasp Problems</h2>
              <p className="mt-6 text-xl text-muted">
                While professional removal is essential for existing nests, these tips can help prevent wasps from establishing colonies on your property.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventionTips.map((tip, index) => (
                <div key={index} className="bg-warm-50 rounded-2xl p-8 text-center hover:shadow-card transition-shadow">
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    {tip.icon === 'shield' && (
                      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    {tip.icon === 'box' && (
                      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    )}
                    {tip.icon === 'sparkle' && (
                      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    )}
                    {tip.icon === 'scissors' && (
                      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                      </svg>
                    )}
                    {tip.icon === 'droplet' && (
                      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    )}
                    {tip.icon === 'home' && (
                      <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-bold text-brand-900 text-lg mb-2">{tip.title}</h3>
                  <p className="text-muted">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bundle & Save */}
        <section className="py-24 lg:py-32 bg-brand-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-600 text-white rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Bundle & Save
              </span>
              <h2 className="text-display text-brand-900">Protection Plans</h2>
              <p className="mt-6 text-xl text-muted">
                Get comprehensive pest protection including wasp and hornet removal. Our plans cover all common stinging insects.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-xl font-bold text-brand-900">Premium Guard</h3>
                <p className="text-brand-600 font-semibold mt-1">Monthly Protection</p>
                <p className="mt-4 text-muted text-sm">Year-round protection with monthly inspections.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wasp & hornet removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All common pests covered
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free re-service guarantee
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elevated ring-2 ring-brand-500 relative text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full">Best Value</span>
                </div>
                <h3 className="text-xl font-bold text-brand-900">Home Shield</h3>
                <p className="text-brand-600 font-semibold mt-1">Quarterly Protection</p>
                <p className="mt-4 text-muted text-sm">Comprehensive protection with seasonal treatments.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Wasp & hornet removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Preventive nest treatments
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Annual termite inspection
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-xl font-bold text-brand-900">Quick Response</h3>
                <p className="text-brand-600 font-semibold mt-1">One-Time Service</p>
                <p className="mt-4 text-muted text-sm">Emergency nest removal with satisfaction guarantee.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Same-day service available
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Complete nest removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30-day guarantee
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>

            <p className="mt-12 text-center text-muted">
              All plans include free inspections. Bundle multiple pest services and save up to 20%.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-display text-white">Need Emergency Wasp Removal?</h2>
            <p className="mt-6 text-xl text-brand-200">
              Don&apos;t risk getting stung. Our trained technicians can safely remove wasp and hornet nests - often the same day.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-10 h-16 px-10 bg-white hover:bg-brand-50 text-brand-800 font-bold text-lg uppercase tracking-wider rounded-2xl shadow-elevated hover:-translate-y-1 transition-all"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
      <ChatBot />
    </>
  )
}
