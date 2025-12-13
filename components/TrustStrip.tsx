export default function TrustStrip() {
  const stats = [
    {
      value: '12',
      label: 'Years Serving Austin',
      sublabel: 'Est. 2012',
      icon: (
        <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
      )
    },
    {
      value: '5,247',
      label: 'Homes Protected',
      sublabel: 'Since 2012',
      icon: (
        <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      value: '4.9',
      label: 'Google Rating',
      sublabel: '500+ reviews',
      icon: (
        <svg className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      value: '<1hr',
      label: 'Response Time',
      sublabel: 'Avg. business hours',
      icon: (
        <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ]

  return (
    <section className="bg-brand-900 py-6 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile: Horizontal scroll strip */}
        <div className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-800/50 rounded-xl flex items-center justify-center">
                <div className="scale-75">{stat.icon}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-brand-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Original grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-800/50 rounded-2xl mb-4 group-hover:bg-brand-700/50 transition-colors">
                {stat.icon}
              </div>
              <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-brand-300 font-medium">{stat.label}</div>
              <div className="text-xs text-brand-400">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
