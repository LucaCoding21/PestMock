import Link from 'next/link'

const plans = [
  {
    name: 'Monthly',
    price: '79',
    period: '/mo',
    description: 'Best for active infestations',
    features: ['Monthly treatments', 'Priority scheduling', 'Free re-service', 'Interior + exterior'],
    popular: false,
    cta: 'Start Monthly Plan',
    savings: null,
  },
  {
    name: 'Quarterly',
    price: '119',
    period: '/qtr',
    description: 'Best value for prevention',
    features: ['Quarterly treatments', 'Interior + exterior', 'Free re-service', 'Pest guarantee', 'Priority response'],
    popular: true,
    cta: 'Start Quarterly Plan',
    savings: 'Save $197/year vs monthly',
  },
  {
    name: 'One-Time',
    price: '179',
    period: '',
    description: 'Immediate single treatment',
    features: ['Comprehensive treatment', '30-day guarantee', 'Free follow-up inspection'],
    popular: false,
    cta: 'Book Treatment',
    savings: null,
  },
]

export default function PlansPreview() {
  return (
    <section className="py-24 lg:py-32 bg-warm-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            Simple Pricing
          </span>
          <h2 className="text-display text-brand-900">
            Protection Plans
          </h2>
          <p className="mt-6 text-xl text-muted leading-relaxed">
            No contracts. Cancel anytime. Every plan includes <span className="font-semibold text-brand-700">free inspections</span>.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                    Best Value
                  </span>
                </div>
              )}

              <div className="p-8 lg:p-10">
                <div className="text-center mb-8 pt-2">
                  <h3 className="text-xl font-bold text-brand-900">{plan.name}</h3>
                  <p className="text-xs uppercase tracking-wide text-brand-600 font-semibold mt-4">Starting at</p>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-sm font-bold text-muted">$</span>
                    <span className="text-6xl font-extrabold text-brand-900 tracking-tight">{plan.price}</span>
                    <span className="text-lg font-semibold text-muted">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-muted">{plan.description}</p>
                  {plan.savings && (
                    <p className="mt-2 text-sm font-semibold text-green-600 bg-green-50 rounded-full px-3 py-1 inline-block">
                      {plan.savings}
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4">
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-brand-800 font-medium">{feature}</span>
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
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Link to full plans page */}
        <div className="mt-16 text-center">
          <Link
            href="/plans"
            className="inline-flex items-center gap-3 text-brand-700 font-bold text-lg hover:text-brand-800 transition-colors group"
          >
            See Full Plan Details
            <span className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center group-hover:bg-brand-200 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
