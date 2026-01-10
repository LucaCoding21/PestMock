import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'

const signs = [
  'Red, itchy bite marks in lines or clusters on skin',
  'Small blood stains on sheets or pillowcases',
  'Dark spots (excrement) on mattresses, bedding, or walls',
  'Tiny white eggs or eggshells in mattress seams',
  'Live bed bugs in mattress seams, headboards, or furniture',
  'Musty, sweet odor in heavily infested areas',
]

const howYouGetThem = [
  'Staying in infested hotels or vacation rentals',
  'Purchasing used furniture or mattresses',
  'Guests bringing them in luggage or belongings',
  'Moving into a previously infested home',
  'Public transportation or movie theaters',
  'Bringing home secondhand clothing',
]

const preventionTips = [
  {
    title: 'Inspect Hotel Rooms',
    description: 'Inspect hotel rooms before unpacking - check mattress seams and headboard',
    icon: 'shield',
  },
  {
    title: 'Protect Luggage',
    description: 'Keep luggage on hard surfaces, not beds or upholstered furniture',
    icon: 'box',
  },
  {
    title: 'Wash Travel Clothes',
    description: 'Wash and dry travel clothes on high heat immediately after returning',
    icon: 'sparkle',
  },
  {
    title: 'Check Used Furniture',
    description: 'Inspect secondhand furniture thoroughly before bringing it home',
    icon: 'scissors',
  },
  {
    title: 'Use Encasements',
    description: 'Use protective encasements on mattresses and box springs',
    icon: 'home',
  },
  {
    title: 'Reduce Clutter',
    description: 'Reduce clutter to minimize hiding spots',
    icon: 'droplet',
  },
]

export default function BedBugControlPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/bedbug.jpg"
              alt="Bed Bug Control"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/85" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-500/20 text-brand-300 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Professional Bed Bug Control
            </span>
            <h1 className="text-display-lg text-white">
              Bed Bug Treatment Services
            </h1>
            <p className="mt-6 text-xl text-brand-200 max-w-2xl mx-auto">
              Discreet, effective bed bug elimination using proven heat treatment and targeted applications. Sleep soundly again with our guaranteed results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 h-14 px-8 bg-white hover:bg-brand-50 text-brand-800 font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
            >
              Get Free Inspection
            </Link>
          </div>
        </section>

        {/* Understanding Bed Bugs */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-display text-brand-900">Understanding Bed Bugs</h2>
                <p className="mt-6 text-lg text-muted">
                  Bed bugs are small, flat, reddish-brown insects about the size of an apple seed. They feed exclusively on blood, preferring humans, and are most active at night. Despite their name, bed bugs can be found in many places beyond beds.
                </p>
                <p className="mt-4 text-lg text-muted">
                  Bed bugs are excellent hitchhikers and don&apos;t discriminate - they can be found in five-star hotels as easily as budget accommodations. An infestation is not a sign of poor hygiene; these pests are simply looking for their next meal.
                </p>
                <p className="mt-4 text-lg text-muted">
                  What makes bed bugs particularly challenging is their ability to hide in tiny cracks and crevices, their resistance to many over-the-counter treatments, and their rapid reproduction rate.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/bedbug.jpg"
                  alt="Bed bug close-up"
                  className="rounded-2xl shadow-elevated"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How You Get Bed Bugs */}
        <section className="py-24 lg:py-32 bg-warm-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Common Sources
              </span>
              <h2 className="text-display text-brand-900">How Bed Bugs Enter Your Home</h2>
              <p className="mt-6 text-xl text-muted">
                Understanding how bed bugs spread can help you take precautions to avoid bringing them home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {howYouGetThem.map((source, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-card flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-600 text-white font-bold rounded-lg flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-brand-800">{source}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signs of Infestation */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/bedbug/bedbug-sign.webp"
                    alt="Bed bug bites"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/bedbug/bedbug-sign2.webp"
                    alt="Bed bug stains"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/bedbug/bedbug-sign3.jpg"
                    alt="Bed bug eggs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl shadow-card">
                  <img
                    src="/bedbug/bedbug-sign4.jpeg"
                    alt="Bed bug infestation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                  Warning Signs
                </span>
                <h2 className="text-display text-brand-900">Signs of Bed Bugs</h2>
                <p className="mt-6 text-lg text-muted">
                  Early detection is crucial for effective bed bug control. Look for these telltale signs:
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
            </div>
          </div>
        </section>

        {/* Our Treatment Process */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-display text-white">Our Bed Bug Treatment Process</h2>
              <p className="mt-4 text-xl text-brand-300">Comprehensive elimination with guaranteed results</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Inspection', desc: 'Thorough examination to confirm bed bugs and assess infestation level' },
                { step: '2', title: 'Preparation', desc: 'We guide you through simple prep steps for maximum treatment effectiveness' },
                { step: '3', title: 'Treatment', desc: 'Heat treatment and/or targeted chemical applications to eliminate all life stages' },
                { step: '4', title: 'Follow-up', desc: 'Post-treatment inspection and additional treatments if needed' },
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

        {/* Treatment Options */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-display text-brand-900">Treatment Options</h2>
              <p className="mt-6 text-xl text-muted">
                We offer multiple treatment methods tailored to your situation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-brand-50 rounded-2xl p-8">
                <div className="w-14 h-14 bg-brand-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Heat Treatment</h3>
                <p className="text-muted mb-4">Our most effective solution. We raise the temperature in your home to levels lethal to bed bugs at all life stages - eggs, nymphs, and adults.</p>
                <ul className="space-y-2 text-sm text-brand-800">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kills all life stages in one treatment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Chemical-free option
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Same-day results
                  </li>
                </ul>
              </div>

              <div className="bg-brand-50 rounded-2xl p-8">
                <div className="w-14 h-14 bg-brand-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">Chemical Treatment</h3>
                <p className="text-muted mb-4">Targeted application of professional-grade products to eliminate bed bugs and provide residual protection.</p>
                <ul className="space-y-2 text-sm text-brand-800">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Residual protection
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cost-effective option
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multiple visits for complete elimination
                  </li>
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
              <h2 className="text-display text-brand-900">Eco-Friendly Bed Bug Solutions</h2>
              <p className="mt-6 text-xl text-muted">
                Our bed bug treatments prioritize your family&apos;s safety while effectively eliminating infestations using the latest proven methods.
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
                  desc: 'Heat treatments require no chemicals. When we do use products, they are applied only after your family and pets are protected.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                  ),
                  title: 'Heat Treatment Option',
                  desc: 'Our preferred method uses no chemicals at all - just precisely controlled heat that eliminates bed bugs at every life stage.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                    </svg>
                  ),
                  title: 'Targeted Application',
                  desc: 'When chemical treatment is needed, we use precise application methods to minimize exposure while maximizing effectiveness.'
                },
                {
                  icon: (
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                  ),
                  title: 'Same-Day Re-Entry',
                  desc: 'With heat treatment, you can return to your home the same day once temperatures return to normal - no lingering chemical concerns.'
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
                  'EPA-registered products when chemicals are needed',
                  'Detailed pre-treatment safety instructions',
                  'Chemical-free heat treatment options',
                  'Clear post-treatment guidelines provided',
                  'Discreet service with unmarked vehicles',
                  'Trained and certified technicians'
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
              <h2 className="text-display text-brand-900">How to Prevent Bed Bug Infestations</h2>
              <p className="mt-6 text-xl text-muted">
                Follow these tips to reduce your risk of bringing bed bugs home.
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
                Treatment Options
              </span>
              <h2 className="text-display text-brand-900">Bed Bug Treatment Plans</h2>
              <p className="mt-6 text-xl text-muted">
                Professional bed bug treatment with guaranteed results. Choose the option that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-xl font-bold text-brand-900">Heat Treatment</h3>
                <p className="text-brand-600 font-semibold mt-1">Single-Day Solution</p>
                <p className="mt-4 text-muted text-sm">Complete elimination in one day using professional heat treatment.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Kills all life stages
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Chemical-free
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    90-day warranty
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-elevated ring-2 ring-brand-500 relative text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-600 text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full">Most Effective</span>
                </div>
                <h3 className="text-xl font-bold text-brand-900">Heat + Chemical</h3>
                <p className="text-brand-600 font-semibold mt-1">Complete Protection</p>
                <p className="mt-4 text-muted text-sm">Heat treatment plus residual chemical barrier for maximum protection.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Immediate elimination
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Residual protection
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    1-year warranty
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-700 transition-colors">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card text-center">
                <h3 className="text-xl font-bold text-brand-900">Chemical Only</h3>
                <p className="text-brand-600 font-semibold mt-1">Budget-Friendly</p>
                <p className="mt-4 text-muted text-sm">Multi-visit chemical treatment for effective bed bug control.</p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    3-visit treatment plan
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Residual protection
                  </li>
                  <li className="flex items-center gap-2 text-sm text-brand-800">
                    <svg className="w-5 h-5 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    60-day warranty
                  </li>
                </ul>
                <Link href="/contact" className="block w-full text-center mt-8 h-12 leading-[3rem] bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>

            <p className="mt-12 text-center text-muted">
              All bed bug treatments are discreet. Unmarked vehicles and confidential service.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-display text-white">Ready to Sleep Soundly Again?</h2>
            <p className="mt-6 text-xl text-brand-200">
              Don&apos;t suffer another sleepless night. Schedule your free, confidential inspection today.
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
