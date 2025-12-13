'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import ServicesPreview from '@/components/ServicesPreview'
import PlansPreview from '@/components/PlansPreview'
import ReviewsPreview from '@/components/ReviewsPreview'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'
import ChatBot from '@/components/ChatBot'
import ExitIntentPopup from '@/components/ExitIntentPopup'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="pb-20 md:pb-0">
        <Hero />
        <TrustStrip />
        <ServicesPreview />
        <PlansPreview />
        <ReviewsPreview />
        <CTABanner />
      </main>
      <Footer />
      <MobileActionBar />
      <ChatBot />
      <ExitIntentPopup />
    </>
  )
}
