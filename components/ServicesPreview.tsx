import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    name: 'Ant Control',
    image: '/ants.jpg',
    description: 'Eliminate colonies at the source',
    color: 'bg-black/10',
    href: '/services/ant-control',
  },
  {
    name: 'Rodent Control',
    image: '/rat.jpg',
    description: 'Humane removal & exclusion',
    color: 'bg-black/10',
    href: '/services/rodent-control',
  },
  {
    name: 'Termite Protection',
    image: '/termite.webp',
    description: 'Protect your biggest investment',
    color: 'bg-black/10',
    href: '/services/termite-control',
  },
  {
    name: 'Cockroach Treatment',
    image: '/cockroach.jpg',
    description: 'Complete elimination guaranteed',
    color: 'bg-black/10',
    href: '/services/cockroach-control',
  },
  {
    name: 'Bed Bug Treatment',
    image: '/bedbug.jpg',
    description: 'Sleep soundly again',
    color: 'bg-black/10',
    href: '/services/bed-bug-control',
  },
  {
    name: 'Mosquito, Flea & Ticks',
    image: '/mosquito.jpg',
    description: 'Protect your family & pets',
    color: 'bg-black/10',
    href: '/services/mosquito-control',
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <span className="inline-block px-4 py-2 bg-brand-50 text-brand-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
            Our Services
          </span>
          <h2 className="text-display text-brand-900">
            What&apos;s Bugging You?
          </h2>
          <p className="mt-6 text-xl text-muted leading-relaxed">
            From ants to rodents, we handle all common household pests with guaranteed results and eco friendly solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-card hover:shadow-card-hover transition-all duration-500"
            >
              <Image
                src={service.image}
                alt={`${service.name} treatment by NoPests technician`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${service.color} group-hover:opacity-95 transition-opacity`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <h3 className="text-2xl font-bold text-white mb-1">{service.name}</h3>
                <p className="text-white/80 text-sm">{service.description}</p>
              </div>
              <div className="absolute bottom-4 right-4 lg:bottom-5 lg:right-5 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <svg className="w-5 h-5 text-white -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 text-brand-700 font-bold text-lg hover:text-brand-800 transition-colors group"
          >
            View All Services
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
