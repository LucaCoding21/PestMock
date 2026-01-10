import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'

const rodentTypes = [
  { name: 'House Mice', description: 'Small, gray-brown mice that invade homes for food and shelter', image: '/rodents/house-mice.webp' },
  { name: 'Norway Rats', description: 'Large brown rats that burrow near foundations', image: '/rodents/norway-rats.webp' },
  { name: 'Roof Rats', description: 'Agile black rats that nest in attics and upper floors', image: '/rodents/roof-rats.jpg' },
  { name: 'Field Mice', description: 'Outdoor mice that enter homes during colder months', image: '/rodents/field-moce.jpg' },
]

const signs = [
  'Droppings near food sources, in drawers, or along walls',
  'Gnaw marks on food packaging, wires, or wood',
  'Scratching or scurrying sounds in walls or ceilings at night',
  'Nests made of shredded paper, fabric, or insulation',
  'Greasy rub marks along walls and baseboards',
]

const preventionTips = [
  {
    title: 'Seal Entry Points',
    description: 'Close gaps larger than 1/4 inch around pipes, vents, and foundations',
    icon: 'shield',
  },
  {
    title: 'Store Food Properly',
    description: 'Keep food in sealed glass or metal containers',
    icon: 'box',
  },
  {
    title: 'Remove Clutter',
    description: 'Eliminate nesting materials like cardboard and paper',
    icon: 'sparkle',
  },
  {
    title: 'Trim Vegetation',
    description: 'Keep shrubs and tree branches away from your home',
    icon: 'scissors',
  },
  {
    title: 'Fix Water Leaks',
    description: 'Eliminate water sources that attract rodents',
    icon: 'droplet',
  },
  {
    title: 'Secure Garbage',
    description: 'Use tight-fitting lids on all trash containers',
    icon: 'home',
  },
]

export default function RodentControlPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/rat.jpg"
              alt="Rodent Control"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/85" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-500/20 text-brand-300 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Professional Rodent Control
            </span>
            <h1 className="text-display-lg text-white">
              Rodent Control Services
            </h1>
            <p className="mt-6 text-xl text-brand-200 max-w-2xl mx-auto">
              Humane, effective rodent removal and exclusion services. We eliminate current infestations and seal entry points to keep them out permanently.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 h-14 px-8 bg-white hover:bg-brand-50 text-brand-800 font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
          </div>
        </section>

        {/* Understanding Rodents */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-display text-brand-900">Understanding Rodent Infestations</h2>
              <p className="mt-6 text-xl text-muted">
                Rodents are among the most problematic pests due to their ability to spread disease, contaminate food, and cause structural damage. A single pair of mice can produce up to 200 offspring in just four months, making early intervention critical.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rodentTypes.map((rodent) => (
                <div key={rodent.name} className="bg-brand-50 rounded-2xl overflow-hidden text-center">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={rodent.image}
                      alt={rodent.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-brand-900 text-lg mb-2">{rodent.name}</h3>
                    <p className="text-muted text-sm">{rodent.description}</p>
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
                <h2 className="text-display text-brand-900">Signs You Have a Rodent Problem</h2>
                <p className="mt-6 text-lg text-muted">
                  Rodents are nocturnal and often go undetected. Watch for these telltale signs of their presence:
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
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/rodents/rat-hole.jpg"
                    alt="Rodent entry hole"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/rodents/rat-nests.jpg"
                    alt="Rodent nest"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/rodents/rat-poop.jpg"
                    alt="Rodent droppings"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/rodents/rat-wire.webp"
                    alt="Rodent wire damage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Treatment Process */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-display text-white">Our Rodent Control Process</h2>
              <p className="mt-4 text-xl text-brand-300">Comprehensive exclusion and elimination</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Inspection', desc: 'Thorough assessment of entry points, nesting areas, and damage' },
                { step: '2', title: 'Exclusion', desc: 'Seal all entry points with rodent-proof materials' },
                { step: '3', title: 'Elimination', desc: 'Strategic placement of traps and bait stations' },
                { step: '4', title: 'Monitoring', desc: 'Follow-up visits to ensure complete elimination' },
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
                <h2 className="text-display text-brand-900">Humane Rodent Control</h2>
                <p className="mt-6 text-lg text-muted">
                  We prioritize humane methods and environmentally responsible solutions. Our approach focuses on exclusion and prevention while keeping your family and pets safe.
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
                      <p className="text-sm text-muted mt-1">Tamper-resistant stations keep your family protected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">Humane Methods</h4>
                      <p className="text-sm text-muted mt-1">We prioritize humane trapping and exclusion techniques</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">Eco-Friendly</h4>
                      <p className="text-sm text-muted mt-1">Targeted treatments that minimize environmental impact</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">Prevention-First</h4>
                      <p className="text-sm text-muted mt-1">Focus on exclusion to prevent future infestations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 rounded-3xl p-10">
                <h3 className="text-2xl font-bold text-brand-900 mb-6">Our Commitment to Safety</h3>
                <ul className="space-y-4">
                  {[
                    'All technicians are licensed and certified',
                    'Tamper-resistant bait stations only',
                    'We use EPA-registered products',
                    'Safe placement away from children and pets',
                    'Thorough sanitation to remove health hazards',
                    'Humane live-trap options available',
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
              <h2 className="text-display text-brand-900">How to Prevent Rodent Infestations</h2>
              <p className="mt-6 text-xl text-muted">
                While professional treatment is the most effective solution, these tips can help make your home less attractive to rodents.
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
                Comprehensive pest protection including rodent control. Our plans include ongoing monitoring and exclusion services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-xl font-bold text-brand-900">Premium Guard</h3>
                <p className="text-brand-600 font-semibold mt-1">Monthly Protection</p>
                <p className="mt-4 text-muted text-sm">Maximum protection with monthly inspections and treatments.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rodent exclusion included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Monthly monitoring
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
                <p className="mt-4 text-muted text-sm">Year-round protection with quarterly treatments and inspections.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Rodent exclusion included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Seasonal pest prevention
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
                <p className="mt-4 text-muted text-sm">Immediate rodent removal with exclusion and sanitation.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Complete rodent removal
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Entry point sealing
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
            <h2 className="text-display text-white">Ready to Get Rid of Rodents?</h2>
            <p className="mt-6 text-xl text-brand-200">
              Don&apos;t let rodents put your family&apos;s health at risk. Schedule your free inspection today.
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
