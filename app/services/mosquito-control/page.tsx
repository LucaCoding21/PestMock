import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'

const diseases = [
  { name: 'West Nile Virus', description: 'Most common mosquito-borne disease in the US' },
  { name: 'Zika Virus', description: 'Can cause birth defects if contracted during pregnancy' },
  { name: 'Eastern Equine Encephalitis', description: 'Rare but serious brain infection' },
  { name: 'Dengue Fever', description: 'Increasing threat in southern states' },
]

const breedingSites = [
  'Standing water in flower pots, buckets, or containers',
  'Clogged gutters and downspouts',
  'Bird baths and decorative ponds',
  'Old tires, tarps, or pool covers',
  'Low spots in lawns that collect water',
  'Unused swimming pools or hot tubs',
]

const preventionTips = [
  {
    title: 'Eliminate Standing Water',
    description: 'Remove any standing water from pots, containers, and low spots',
    icon: 'droplet',
  },
  {
    title: 'Clean Gutters',
    description: 'Keep gutters and downspouts clear and flowing properly',
    icon: 'home',
  },
  {
    title: 'Maintain Bird Baths',
    description: 'Change bird bath water at least weekly',
    icon: 'sparkle',
  },
  {
    title: 'Pool Maintenance',
    description: 'Keep swimming pools properly chlorinated and covered',
    icon: 'shield',
  },
  {
    title: 'Repair Screens',
    description: 'Fix any holes or tears in window and door screens',
    icon: 'box',
  },
  {
    title: 'Use Outdoor Fans',
    description: 'Mosquitoes are weak fliers - fans help keep them away',
    icon: 'scissors',
  },
]

const tickTypes = [
  { name: 'Deer Ticks', description: 'Transmit Lyme disease and other serious illnesses' },
  { name: 'American Dog Ticks', description: 'Can transmit Rocky Mountain spotted fever' },
  { name: 'Lone Star Ticks', description: 'Known for aggressive biting behavior' },
  { name: 'Brown Dog Ticks', description: 'Primarily affect dogs but will bite humans' },
]

export default function MosquitoControlPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/mosquito.jpg"
              alt="Mosquito Control"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/85" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-500/20 text-brand-300 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Outdoor Pest Control
            </span>
            <h1 className="text-display-lg text-white">
              Mosquito, Flea & Tick Control
            </h1>
            <p className="mt-6 text-xl text-brand-200 max-w-2xl mx-auto">
              Take back your yard with professional mosquito, flea, and tick control. Protect your family and pets from these disease-carrying pests.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 h-14 px-8 bg-white hover:bg-brand-50 text-brand-800 font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </Link>
          </div>
        </section>

        {/* Why Control Matters */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Health Risks
              </span>
              <h2 className="text-display text-brand-900">Mosquito-Borne Diseases</h2>
              <p className="mt-6 text-xl text-muted">
                Mosquitoes are more than just annoying - they&apos;re the world&apos;s deadliest animal, responsible for millions of deaths annually. In the US, they can transmit several serious diseases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {diseases.map((disease) => (
                <div key={disease.name} className="bg-red-50 rounded-2xl p-6">
                  <h3 className="font-bold text-brand-900 text-lg mb-2">{disease.name}</h3>
                  <p className="text-muted text-sm">{disease.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tick Control */}
        <section className="py-24 lg:py-32 bg-warm-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                  Tick Control
                </span>
                <h2 className="text-display text-brand-900">Protect Against Ticks</h2>
                <p className="mt-6 text-lg text-muted">
                  Ticks are a growing concern throughout the US. They can transmit Lyme disease, Rocky Mountain spotted fever, and other serious illnesses. Our tick control services create a protective barrier around your property.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {tickTypes.map((tick) => (
                    <div key={tick.name} className="bg-white rounded-xl p-4 shadow-card">
                      <h4 className="font-bold text-brand-900">{tick.name}</h4>
                      <p className="text-sm text-muted mt-1">{tick.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/mosquito.jpg"
                  alt="Tick control"
                  className="rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Breeding Sites */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Problem Areas
              </span>
              <h2 className="text-display text-brand-900">Common Mosquito Breeding Sites</h2>
              <p className="mt-6 text-xl text-muted">
                Mosquitoes only need a small amount of standing water to breed. A single bottle cap can produce hundreds of mosquitoes. Here&apos;s where to look:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {breedingSites.map((site, index) => (
                <div key={index} className="bg-brand-50 rounded-2xl p-6 flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white font-bold rounded-lg flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-brand-800">{site}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Treatment Process */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-display text-white">Our Treatment Process</h2>
              <p className="mt-4 text-xl text-brand-300">Comprehensive outdoor pest control</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Inspection', desc: 'Identify breeding sites, harborage areas, and high-activity zones' },
                { step: '2', title: 'Source Reduction', desc: 'Eliminate or treat standing water and breeding sites' },
                { step: '3', title: 'Barrier Treatment', desc: 'Apply residual treatments to vegetation and resting areas' },
                { step: '4', title: 'Ongoing Protection', desc: 'Regular treatments throughout the season for continuous control' },
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

        {/* Flea Control */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="/mosquito.jpg"
                  alt="Flea control"
                  className="rounded-2xl shadow-elevated"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                  Flea Control
                </span>
                <h2 className="text-display text-brand-900">Protect Your Pets & Family</h2>
                <p className="mt-6 text-lg text-muted">
                  Fleas aren&apos;t just a nuisance - they can transmit tapeworms and cause allergic reactions in both pets and humans. Our flea control services target all life stages for complete elimination.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    'Interior treatment targeting carpets, furniture, and pet areas',
                    'Exterior treatment of yards and outdoor pet areas',
                    'Targeting all life stages - eggs, larvae, pupae, and adults',
                    'Coordination with your vet for pet treatment',
                    'Follow-up treatments to break the flea life cycle',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-600 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-brand-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Safe & Sustainable */}
        <section className="py-24 lg:py-32 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Safe & Sustainable
              </span>
              <h2 className="text-display text-brand-900">Eco-Friendly Outdoor Protection</h2>
              <p className="mt-6 text-xl text-muted">
                Our outdoor pest control methods are designed to protect your family, pets, and the environment while effectively reducing mosquitoes, fleas, and ticks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  ),
                  title: 'Pet & Child Safe',
                  desc: 'Our treatments dry quickly and are safe for kids and pets once dry. We always advise when it\'s safe to return to treated areas.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                  ),
                  title: 'Pollinator-Conscious',
                  desc: 'We apply treatments at times and in ways that minimize impact on beneficial pollinators like bees and butterflies.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  ),
                  title: 'Natural Options',
                  desc: 'We offer botanical and natural product options for customers seeking the most eco-friendly approach to outdoor pest control.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" />
                    </svg>
                  ),
                  title: 'Source Reduction Focus',
                  desc: 'We prioritize eliminating breeding sites - a sustainable approach that reduces the need for ongoing chemical treatments.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-card text-center hover:shadow-card-hover transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-brand-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-muted text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-brand-900 mb-4 text-center">Our Commitment to Safety</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'EPA-registered products that break down naturally',
                  'Targeted application to minimize environmental impact',
                  'Treatment timing that protects pollinators',
                  'Natural and botanical product options available',
                  'Source reduction to minimize chemical use',
                  'Trained technicians with eco-conscious methods'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brand-800 text-sm">{item}</span>
                  </div>
                ))}
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
              <h2 className="text-display text-brand-900">How to Reduce Mosquito Activity</h2>
              <p className="mt-6 text-xl text-muted">
                Combine professional treatment with these tips for maximum protection.
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
              <h2 className="text-display text-brand-900">Seasonal Protection Plans</h2>
              <p className="mt-6 text-xl text-muted">
                Get continuous protection throughout mosquito, flea, and tick season. Bundle with our general pest control plans for maximum savings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-xl font-bold text-brand-900">Mosquito Control</h3>
                <p className="text-brand-600 font-semibold mt-1">Seasonal Treatment</p>
                <p className="mt-4 text-muted text-sm">Monthly treatments during mosquito season (April-October).</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Monthly barrier treatments
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Source reduction
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free re-treatments
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
                <h3 className="text-xl font-bold text-brand-900">Complete Outdoor</h3>
                <p className="text-brand-600 font-semibold mt-1">Mosquito + Tick + Flea</p>
                <p className="mt-4 text-muted text-sm">Comprehensive outdoor pest protection for your entire property.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    All outdoor pests covered
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Monthly treatments
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Save 20% vs individual
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-xl font-bold text-brand-900">Home Shield + Outdoor</h3>
                <p className="text-brand-600 font-semibold mt-1">Total Protection</p>
                <p className="mt-4 text-muted text-sm">Combine indoor and outdoor protection for complete peace of mind.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Indoor pest control
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Outdoor pest control
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Save 25% bundled
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>

            <p className="mt-12 text-center text-muted">
              All outdoor plans include free re-treatments if pests return between scheduled visits.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-display text-white">Take Back Your Yard</h2>
            <p className="mt-6 text-xl text-brand-200">
              Don&apos;t let mosquitoes, fleas, and ticks keep you indoors. Schedule your free inspection today.
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
