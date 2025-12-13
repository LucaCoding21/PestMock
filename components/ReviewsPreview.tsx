import Link from 'next/link'
import Image from 'next/image'

const reviews = [
  {
    name: 'Sarah M.',
    text: 'Had a terrible ant problem. They found the colony and solved it permanently. Worth every penny.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face',
    location: 'Austin, TX',
    date: '2 weeks ago',
  },
  {
    name: 'Michael T.',
    text: 'Incredibly thorough. No pressure tactics. They actually talked me OUT of a treatment I didn\'t need.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face',
    location: 'Round Rock, TX',
    date: '1 month ago',
  },
  {
    name: 'Jennifer K.',
    text: 'Same-day service when we found mice. Our quarterly plan has kept the house pest-free since.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face',
    location: 'Cedar Park, TX',
    date: '3 weeks ago',
  },
]

export default function ReviewsPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative background */}
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Big rating */}
          <div>
            <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold uppercase tracking-wide mb-6">
              Customer Reviews
            </span>
            <h2 className="text-display text-brand-900">
              Trusted by Homeowners
            </h2>

            {/* Big rating display */}
            <div className="mt-10 flex items-end gap-6">
              <div className="text-8xl font-extrabold text-brand-900 leading-none">4.9</div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted font-medium">from 500+ verified reviews</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-brand-50 rounded-xl px-5 py-3">
                <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
                <div>
                  <p className="font-bold text-brand-900 text-sm">Top Rated</p>
                  <p className="text-muted text-xs">Local Business 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-brand-50 rounded-xl px-5 py-3">
                <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-brand-900 text-sm">98% Would</p>
                  <p className="text-muted text-xs">Recommend Us</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/reviews"
                className="inline-flex items-center gap-3 text-brand-700 font-bold text-lg hover:text-brand-800 transition-colors group"
              >
                Read All Reviews
                <span className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center group-hover:bg-brand-200 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right side - Review cards */}
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className={`bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all ${
                  index === 1 ? 'lg:translate-x-8' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-muted">{review.date}</span>
                </div>
                <p className="text-brand-800 text-lg leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover ring-2 ring-brand-100"
                  />
                  <div>
                    <p className="font-bold text-brand-900">{review.name}</p>
                    <p className="text-muted text-sm flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
