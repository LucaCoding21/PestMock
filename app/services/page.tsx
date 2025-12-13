import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import Link from 'next/link'

const services = [
  {
    name: 'Ant Control',
    image: '/diff-action.png',
    description: 'From sugar ants to carpenter ants, we identify the species and eliminate colonies at the source. Our treatment creates a barrier that keeps them out.',
    features: ['Colony elimination', 'Perimeter barrier', 'Entry point sealing'],
  },
  {
    name: 'Rodent Control',
    image: '/diff-action.png',
    description: 'Humane and effective mouse and rat removal. We don\'t just trap—we find and seal entry points to keep them out for good.',
    features: ['Humane removal', 'Entry point exclusion', 'Sanitation guidance'],
  },
  {
    name: 'Termite Protection',
    image: '/diff-action.png',
    description: 'Protect your biggest investment. Complete termite inspections, treatment, and ongoing monitoring to catch issues before they become costly.',
    features: ['Free inspections', 'Liquid & bait treatments', 'Annual monitoring'],
  },
  {
    name: 'Cockroach Treatment',
    image: '/diff-action.png',
    description: 'Comprehensive roach elimination using targeted treatments. We address the root cause—not just the visible problem.',
    features: ['Gel bait treatment', 'Growth regulators', 'Crack & crevice treatment'],
  },
  {
    name: 'Spider Removal',
    image: '/diff-action.png',
    description: 'Remove existing spiders and create barriers to prevent new ones. Safe treatments that are family and pet friendly.',
    features: ['Web removal', 'Barrier treatment', 'Entry point treatment'],
  },
  {
    name: 'Mosquito Control',
    image: '/diff-action.png',
    description: 'Take back your yard. Our mosquito treatments significantly reduce populations so you can enjoy outdoor living again.',
    features: ['Yard treatment', 'Breeding site elimination', 'Monthly programs'],
  },
  {
    name: 'Bed Bug Treatment',
    image: '/diff-action.png',
    description: 'Discreet, effective bed bug elimination. We use heat and targeted treatments to eliminate infestations completely.',
    features: ['Heat treatment option', 'Chemical treatment', 'Follow-up inspections'],
  },
  {
    name: 'Wasp & Hornet Removal',
    image: '/diff-action.png',
    description: 'Safe removal of stinging insect nests. Don\'t risk getting stung—let our trained technicians handle it.',
    features: ['Nest removal', 'Prevention treatment', 'Emergency service'],
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
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.name}
                  className="group bg-warm-50 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-full relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="text-2xl font-bold text-brand-900">{service.name}</h2>
                      <p className="mt-3 text-muted leading-relaxed">{service.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs bg-brand-100 text-brand-700 px-3 py-1.5 rounded-full font-medium"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-6 text-brand-600 font-bold hover:text-brand-700 transition-colors"
                      >
                        Get Free Quote
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 lg:py-32 bg-brand-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-900" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-warm-50">
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
    </>
  )
}
