import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import Link from 'next/link'

const plans = [
  {
    name: 'Monthly Protection',
    price: '79',
    period: '/month',
    description: 'Maximum protection for high-pest areas or active infestations',
    features: [
      'Monthly inspection & treatment',
      'Interior & exterior coverage',
      'All common household pests',
      'Free re-service guarantee',
      'Priority scheduling',
      '24/7 emergency support',
    ],
    popular: false,
  },
  {
    name: 'Quarterly Protection',
    price: '119',
    period: '/quarter',
    description: 'Our most popular plan for year-round peace of mind',
    features: [
      'Quarterly inspection & treatment',
      'Interior & exterior coverage',
      'All common household pests',
      'Free re-service guarantee',
      'Seasonal pest prevention',
      'Annual termite inspection',
      'Priority scheduling',
    ],
    popular: true,
  },
  {
    name: 'One-Time Service',
    price: '179',
    period: 'one-time',
    description: 'Immediate treatment for current pest issues',
    features: [
      'Single comprehensive treatment',
      'Interior & exterior coverage',
      'Target specific pest issue',
      '30-day satisfaction guarantee',
      'Free follow-up if needed',
    ],
    popular: false,
  },
]

const faqs = [
  {
    q: 'Can I cancel anytime?',
    a: 'Yes! All our plans are month-to-month with no long-term contracts. Cancel anytime with no fees.',
  },
  {
    q: 'What pests are covered?',
    a: 'All plans cover ants, roaches, spiders, silverfish, earwigs, centipedes, and more. Termites and bed bugs require specialized treatment.',
  },
  {
    q: 'Are treatments safe for pets and kids?',
    a: 'Absolutely. We use EPA-approved products and can accommodate any sensitivities. Most treatments are safe to re-enter within 30 minutes.',
  },
  {
    q: 'What if pests come back between visits?',
    a: 'We\'ll come back and re-treat for free. That\'s our guarantee.',
  },
]

export default function PlansPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative bg-brand-900 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-brand-900" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-500/20 text-brand-300 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Simple, Transparent Pricing
            </span>
            <h1 className="text-display-lg text-white">
              Protection Plans
            </h1>
            <p className="mt-6 text-xl text-brand-200 max-w-2xl mx-auto">
              No contracts. No hidden fees. Free inspections included with every plan.
            </p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-24 lg:py-32 bg-warm-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-3xl transition-all duration-300 ${
                    plan.popular
                      ? 'ring-4 ring-brand-500 shadow-elevated scale-105 z-10'
                      : 'shadow-card hover:shadow-card-hover'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-bold uppercase tracking-wide px-6 py-2.5 rounded-full shadow-button">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8 lg:p-10">
                    <div className="text-center mb-8 pt-4">
                      <h2 className="text-xl font-bold text-brand-900">{plan.name}</h2>
                      <p className="text-xs uppercase tracking-wide text-brand-600 font-semibold mt-4">Starting at</p>
                      <div className="mt-1 flex items-baseline justify-center gap-1">
                        <span className="text-sm font-bold text-muted">$</span>
                        <span className="text-6xl font-extrabold text-brand-900 tracking-tight">{plan.price}</span>
                        <span className="text-lg font-semibold text-muted">/{plan.period.replace('/', '')}</span>
                      </div>
                      <p className="mt-4 text-muted">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-brand-800">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full text-center h-14 leading-[3.5rem] font-bold uppercase tracking-wide rounded-xl transition-all ${
                        plan.popular
                          ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-button hover:shadow-button-hover hover:-translate-y-0.5'
                          : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-16 text-center text-muted">
              Prices vary based on home size and pest situation. Your exact quote is provided during your free inspection - no obligation.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-display text-brand-900">What&apos;s Included</h2>
              <p className="mt-4 text-xl text-muted">Every plan comes with these benefits</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Free Inspection',
                  desc: 'Comprehensive property assessment',
                  icon: (
                    <svg className="w-10 h-10 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  )
                },
                {
                  title: 'Free Re-Service',
                  desc: 'We come back if pests return',
                  icon: (
                    <svg className="w-10 h-10 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  )
                },
                {
                  title: 'Safe Products',
                  desc: 'Pet & child friendly treatments',
                  icon: (
                    <svg className="w-10 h-10 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )
                },
                {
                  title: 'Satisfaction Guarantee',
                  desc: '100% money-back guarantee',
                  icon: (
                    <svg className="w-10 h-10 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
              ].map((item) => (
                <div key={item.title} className="text-center p-8 bg-brand-50 rounded-2xl">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-brand-900 text-lg">{item.title}</h3>
                  <p className="mt-2 text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-warm-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-display text-brand-900 text-center mb-16">
              Common Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-8 shadow-card">
                  <h3 className="font-bold text-brand-900 text-lg">{faq.q}</h3>
                  <p className="mt-3 text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 bg-brand-900 overflow-hidden">
          <div className="absolute inset-0 bg-brand-900" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-display-lg text-white">Ready to Get Started?</h2>
            <p className="mt-6 text-xl text-brand-200">
              Schedule your free inspection today. No obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-10 h-16 px-10 bg-white text-brand-800 font-bold text-lg uppercase tracking-wider rounded-2xl shadow-elevated hover:bg-brand-50 transition-all transform hover:-translate-y-1"
            >
              Schedule Free Inspection
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
