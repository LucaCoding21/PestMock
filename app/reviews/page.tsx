import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'

const reviews = [
  { name: 'Sarah M.', text: 'Had a terrible ant problem that kept coming back with other services. These guys found the colony outside and solved it permanently. Worth every penny.', avatar: 'SM' },
  { name: 'Michael T.', text: 'The technician was incredibly thorough and explained everything. No pressure to buy extra services. They actually talked me OUT of a treatment I didn\'t need.', avatar: 'MT' },
  { name: 'Jennifer K.', text: 'Same-day service when we found mice. They handled everything professionally and followed up twice. Our quarterly plan has kept the house pest-free since.', avatar: 'JK' },
  { name: 'David R.', text: 'Finally a pest company that doesn\'t try to scare you into services you don\'t need. Fair pricing, honest assessments, and they actually show up on time.', avatar: 'DR' },
  { name: 'Amanda L.', text: 'We have two dogs and were worried about chemicals. They used pet-safe treatments and took time to explain the process. Very considerate.', avatar: 'AL' },
  { name: 'Robert H.', text: 'Good service overall. Had to schedule a re-treatment for spiders but they came back quickly at no extra charge. Appreciate the warranty.', avatar: 'RH' },
  { name: 'Lisa P.', text: 'Quick response, fair price, problem solved. What more could you ask for? Will definitely use again.', avatar: 'LP' },
  { name: 'James W.', text: 'The quarterly plan is perfect for our needs. Technician comes out, does his thing, and we never have to worry about pests. Highly recommend.', avatar: 'JW' },
  { name: 'Maria G.', text: 'After years of dealing with roaches in our apartment building, we finally found a company that actually solved the problem. Professional from start to finish.', avatar: 'MG' },
]

export default function ReviewsPage() {
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
            <div className="inline-flex items-center gap-2 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h1 className="text-display-lg text-white">
              4.9 out of 5 Stars
            </h1>
            <p className="mt-4 text-xl text-brand-200">
              Based on 500+ verified customer reviews
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-b border-brand-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: '98%', label: 'Would Recommend' },
                { value: '500+', label: 'Happy Customers' },
                { value: '10+', label: 'Years in Business' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl lg:text-5xl font-extrabold text-brand-900">{stat.value}</div>
                  <div className="mt-2 text-muted font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-24 lg:py-32 bg-warm-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-brand-800 leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{review.avatar}</span>
                    </div>
                    <div>
                      <p className="font-bold text-brand-900">{review.name}</p>
                      <p className="text-muted text-sm">Verified Customer</p>
                    </div>
                  </div>
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
            <h2 className="text-display-lg text-white">Join Our Happy Customers</h2>
            <p className="mt-6 text-xl text-brand-200">
              See why hundreds of homeowners trust NoPests for their pest control needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center mt-10 h-16 px-10 bg-white text-brand-800 font-bold text-lg uppercase tracking-wider rounded-2xl shadow-elevated hover:bg-brand-50 transition-all transform hover:-translate-y-1"
            >
              Get Your Free Quote
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
