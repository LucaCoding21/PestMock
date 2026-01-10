import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'

const services = [
  {
    name: 'Ant Control',
    image: '/ants.jpg',
    description: 'Eliminate colonies at the source with lasting barrier protection.',
    href: '/services/ant-control',
  },
  {
    name: 'Rodent Control',
    image: '/rat.jpg',
    description: 'Humane removal and entry point sealing to keep them out.',
    href: '/services/rodent-control',
  },
  {
    name: 'Termite Protection',
    image: '/termite.webp',
    description: 'Complete inspections, treatment, and ongoing monitoring.',
    href: '/services/termite-control',
  },
  {
    name: 'Cockroach Treatment',
    image: '/cockroach.jpg',
    description: 'Targeted treatments that address the root cause.',
    href: '/services/cockroach-control',
  },
  {
    name: 'Spider Removal',
    image: '/spiders.jpg',
    description: 'Safe, family friendly treatments and barrier protection.',
    href: '/contact',
  },
  {
    name: 'Mosquito Control',
    image: '/mosquito.jpg',
    description: 'Take back your yard with effective population control.',
    href: '/services/mosquito-control',
  },
  {
    name: 'Bed Bug Treatment',
    image: '/bedbug.jpg',
    description: 'Discreet, effective elimination using heat and targeted treatments.',
    href: '/services/bed-bug-control',
  },
  {
    name: 'Wasp & Hornet Removal',
    image: '/hornet/yellowjacket.jpg',
    description: 'Safe nest removal by trained technicians.',
    href: '/services/wasp-hornet-control',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/diff-action.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-900/90" />
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-2 bg-brand-500/20 text-brand-300 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Professional Solutions
            </span>
            <h1 className="text-display-lg text-white">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-brand-200 max-w-2xl mx-auto">
              Expert pest control solutions for every situation. All services include free inspection.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-8 h-14 px-8 bg-white hover:bg-brand-50 text-brand-800 font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all border border-gray-100 cursor-pointer"
                >
                  <div className="h-40 relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-brand-900">{service.name}</h2>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{service.description}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-sm text-brand-600 font-semibold group-hover:text-brand-700 transition-colors">
                      {service.href === '/contact' ? 'Get Quote' : 'Learn More'}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial Section */}
        <section className="py-24 lg:py-32 bg-warm-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image Column - Hidden on mobile, shown on desktop */}
              <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
                <img
                  src="/commercial.webp"
                  alt="Commercial pest control services"
                  className="w-full h-full object-cover rounded-2xl shadow-card"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl -z-10" />
              </div>

              {/* Content Column */}
              <div>
                <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                  Commercial Services
                </span>
                <h2 className="text-display text-brand-900">
                  Protect Your Business
                </h2>
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  Keep your commercial property pest-free with our comprehensive business solutions. We understand the unique challenges businesses face and offer discreet, effective treatments.
                </p>

                {/* Image - Mobile only, shown after description */}
                <div className="relative h-[350px] mt-8 lg:hidden">
                  <img
                    src="/commercial.webp"
                    alt="Commercial pest control services"
                    className="w-full h-full object-cover rounded-2xl shadow-card"
                  />
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    { title: 'Minimal Disruption', desc: 'Flexible scheduling around your business hours' },
                    { title: 'Industry Compliance', desc: 'Meet health codes and regulatory requirements' },
                    { title: 'Customized Plans', desc: 'Tailored solutions for your specific industry' },
                    { title: 'Ongoing Monitoring', desc: 'Regular inspections to prevent future issues' },
                    { title: 'Rapid Response', desc: 'Priority service when emergencies arise' },
                    { title: 'Detailed Documentation', desc: 'Complete records for audits and inspections' },
                  ].map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-brand-900">{benefit.title}</h3>
                        <p className="text-sm text-muted">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center mt-10 h-14 px-8 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
                >
                  Get a Commercial Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32 bg-brand-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-display text-white">How It Works</h2>
              <p className="mt-4 text-xl text-brand-300">Simple, straightforward process</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Free Inspection', desc: 'We assess your property and identify the problem' },
                { step: '2', title: 'Custom Treatment', desc: 'Targeted solution based on your specific situation' },
                { step: '3', title: 'Ongoing Protection', desc: 'Optional plans to keep pests away year-round' },
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

        {/* Plans Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
                Protection Plans
              </span>
              <h2 className="text-display text-brand-900">Choose Your Level of Protection</h2>
              <p className="mt-4 text-xl text-muted max-w-2xl mx-auto">
                No contracts. No hidden fees. Free inspections included with every plan.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 px-4 sm:px-0">
              {[
                {
                  name: 'Monthly Protection',
                  tierName: 'Premium Guard',
                  description: 'Maximum protection for high-pest areas or active infestations',
                  features: [
                    'Monthly inspection & treatment',
                    'Interior & exterior coverage',
                    'All common household pests',
                    'Free re-service guarantee',
                  ],
                  popular: false,
                },
                {
                  name: 'Quarterly Protection',
                  tierName: 'Home Shield',
                  description: 'Our most popular plan for year-round peace of mind',
                  features: [
                    'Quarterly inspection & treatment',
                    'Interior & exterior coverage',
                    'All common household pests',
                    'Annual termite inspection',
                  ],
                  popular: true,
                },
                {
                  name: 'One-Time Service',
                  tierName: 'Quick Response',
                  description: 'Immediate treatment for current pest issues',
                  features: [
                    'Single comprehensive treatment',
                    'Interior & exterior coverage',
                    'Target specific pest issue',
                    '30-day satisfaction guarantee',
                  ],
                  popular: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-white rounded-3xl transition-all duration-300 ${
                    plan.popular
                      ? 'ring-4 ring-brand-500 shadow-elevated scale-105 z-10'
                      : 'shadow-card hover:shadow-card-hover border border-gray-100'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-2 bg-brand-600 text-white text-sm font-bold uppercase tracking-wide px-6 py-2.5 rounded-full shadow-button">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Best Value
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <div className="text-center mb-6 pt-4">
                      <h3 className="text-lg font-bold text-brand-900">{plan.name}</h3>
                      <div className="mt-3">
                        <span className="text-2xl font-extrabold text-brand-600 tracking-tight">{plan.tierName}</span>
                      </div>
                      <p className="mt-3 text-sm text-muted">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-5 h-5 bg-brand-100 rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span className="text-sm text-brand-800">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className={`block w-full text-center h-12 leading-[3rem] font-bold text-sm uppercase tracking-wide rounded-xl transition-all ${
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

            <div className="text-center mt-12">
              <Link
                href="/plans"
                className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
              >
                View All Plan Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-32 bg-warm-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-display text-brand-900">Don&apos;t See Your Pest?</h2>
            <p className="mt-4 text-xl text-muted">
              We handle all types of pests. Get in touch for a free consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-10 h-16 px-10 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg uppercase tracking-wider rounded-2xl shadow-button hover:shadow-button-hover hover:-translate-y-1 transition-all"
            >
              Contact Us
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
