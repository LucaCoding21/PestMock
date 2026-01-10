import Image from 'next/image'

const advantages = [
  {
    title: 'Year Round Protection',
    description: 'Consistent coverage that keeps pests out every season',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Scheduled Treatments',
    description: 'Regular visits so you never have to worry about infestations',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Priority Service',
    description: 'Get faster response times and dedicated support',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Cost Savings',
    description: 'Save more compared to single emergency treatments',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Peace of Mind',
    description: 'Rest easy knowing your home is always protected',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
]

export default function HomecareSolutions() {
  return (
    <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-display text-brand-900">
            Homecare Solutions
          </h2>
          <p className="mt-6 text-xl text-muted leading-relaxed">
            Proactive pest protection tailored to your home. Keep your family safe with ongoing care that prevents problems before they start.
          </p>
        </div>

        {/* Advantages List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-10 mb-12 lg:mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="flex items-start gap-4 lg:items-center"
            >
              <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
                {advantage.icon}
              </div>
              <div>
                <h3 className="font-bold text-brand-900">{advantage.title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed lg:hidden">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image - Centered */}
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[4/3] lg:aspect-[16/10]">
            <Image
              src="/homecare.png"
              alt="Homecare Solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-contain"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-8 bg-brand-600 hover:bg-brand-500 text-white font-bold text-base rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
          >
            Protect Your Home Today
          </a>
        </div>
      </div>
    </section>
  )
}
