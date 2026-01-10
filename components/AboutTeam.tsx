import Link from 'next/link'

export default function AboutTeam() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column - Hidden on mobile, shown on desktop */}
          <div className="relative h-[500px] lg:h-[650px] hidden lg:block">
            <img
              src="/pestcontrol-team.jpg"
              alt="Our pest control team"
              className="w-full h-full object-cover rounded-2xl shadow-card"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-500/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-400/20 rounded-full blur-2xl -z-10" />
          </div>

          {/* Content Column */}
          <div>
            <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              About Our Team
            </span>
            <h2 className="text-display text-brand-900">
              Local Experts You Can Trust
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              For over 20 years, our family-owned business has been protecting homes and businesses throughout the community. We take pride in delivering honest, effective pest control solutions.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Every technician on our team is licensed, insured, and undergoes rigorous training to ensure the highest quality service. We treat every home like it&apos;s our own.
            </p>

            {/* Image - Mobile only, shown after text */}
            <div className="relative h-[350px] mt-8 lg:hidden">
              <img
                src="/pestcontrol-team.jpg"
                alt="Our pest control team"
                className="w-full h-full object-cover rounded-2xl shadow-card"
              />
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { stat: '20+', label: 'Years Experience' },
                { stat: '10,000+', label: 'Homes Protected' },
                { stat: '100%', label: 'Satisfaction Rate' },
                { stat: '24/7', label: 'Emergency Support' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-warm-50 rounded-xl">
                  <div className="text-2xl font-extrabold text-brand-600">{item.stat}</div>
                  <div className="text-sm text-muted mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-8 bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
              >
                Meet the Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-8 bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-bold text-sm uppercase tracking-wide rounded-xl transition-all"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
