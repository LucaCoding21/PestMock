'use client'

import { useState, FormEvent } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileActionBar from '@/components/MobileActionBar'

const PHONE_NUMBER = '(555) 123-4567'
const PHONE_HREF = 'tel:+15551234567'

const pestTypes = [
  'Ants',
  'Cockroaches',
  'Spiders',
  'Mice / Rats',
  'Termites',
  'Mosquitoes',
  'Bed Bugs',
  'Wasps / Hornets',
  'Other / Not Sure',
]

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  address?: string
  zip?: string
  pest?: string
}

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        break
      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        const phoneClean = value.replace(/\D/g, '')
        if (phoneClean.length < 10) return 'Please enter a valid 10-digit phone number'
        break
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address'
        }
        break
      case 'address':
        if (!value.trim()) return 'Address is required'
        break
      case 'zip':
        if (!value.trim()) return 'Zip code is required'
        if (!/^\d{5}(-\d{4})?$/.test(value.trim())) return 'Please enter a valid zip code'
        break
      case 'pest':
        if (!value) return 'Please select a pest type'
        break
    }
    return undefined
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    // Validate all fields
    const newErrors: FormErrors = {}
    const fields = ['name', 'phone', 'email', 'address', 'zip', 'pest']
    fields.forEach(field => {
      const value = formData.get(field) as string
      const error = validateField(field, value)
      if (error) newErrors[field as keyof FormErrors] = error
    })

    setErrors(newErrors)
    setTouched(fields.reduce((acc, f) => ({ ...acc, [f]: true }), {}))

    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pb-20 md:pb-0">
        {/* Hero */}
        <section className="relative bg-brand-900 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-brand-900" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-display-lg text-white">
              Get Your Free Quote
            </h1>
            <p className="mt-4 text-xl text-brand-200">
              No obligation. Same-day response guaranteed.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-warm-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Form */}
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-card">
                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <svg className="w-10 h-10 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-heading-xl text-brand-900">Request Received!</h2>
                    <p className="mt-4 text-lg text-muted">
                      We&apos;ll get back to you within the hour.
                    </p>
                    <a
                      href={PHONE_HREF}
                      className="inline-flex items-center gap-3 mt-8 text-brand-700 font-bold text-lg"
                    >
                      <span className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </span>
                      Or call us: {PHONE_NUMBER}
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="text-heading-xl text-brand-900 mb-8">Request Free Inspection</h2>

                    <div className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-brand-800 mb-2">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 bg-brand-50 border-2 rounded-xl text-brand-900 placeholder:text-muted focus:bg-white transition-all outline-none ${
                              errors.name && touched.name
                                ? 'border-red-400 bg-red-50 focus:border-red-500'
                                : 'border-transparent focus:border-brand-500'
                            }`}
                            placeholder="John Smith"
                          />
                          {errors.name && touched.name && (
                            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-brand-800 mb-2">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 bg-brand-50 border-2 rounded-xl text-brand-900 placeholder:text-muted focus:bg-white transition-all outline-none ${
                              errors.phone && touched.phone
                                ? 'border-red-400 bg-red-50 focus:border-red-500'
                                : 'border-transparent focus:border-brand-500'
                            }`}
                            placeholder="(555) 000-0000"
                          />
                          {errors.phone && touched.phone && (
                            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-brand-800 mb-2">
                          Email Address <span className="text-muted text-xs font-normal">(optional)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className={`w-full px-4 py-4 bg-brand-50 border-2 rounded-xl text-brand-900 placeholder:text-muted focus:bg-white transition-all outline-none ${
                            errors.email && touched.email
                              ? 'border-red-400 bg-red-50 focus:border-red-500'
                              : 'border-transparent focus:border-brand-500'
                          }`}
                          placeholder="john@email.com"
                        />
                        {errors.email && touched.email && (
                          <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="address" className="block text-sm font-semibold text-brand-800 mb-2">
                            Street Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 bg-brand-50 border-2 rounded-xl text-brand-900 placeholder:text-muted focus:bg-white transition-all outline-none ${
                              errors.address && touched.address
                                ? 'border-red-400 bg-red-50 focus:border-red-500'
                                : 'border-transparent focus:border-brand-500'
                            }`}
                            placeholder="123 Main St"
                          />
                          {errors.address && touched.address && (
                            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.address}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="zip" className="block text-sm font-semibold text-brand-800 mb-2">
                            Zip Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`w-full px-4 py-4 bg-brand-50 border-2 rounded-xl text-brand-900 placeholder:text-muted focus:bg-white transition-all outline-none ${
                              errors.zip && touched.zip
                                ? 'border-red-400 bg-red-50 focus:border-red-500'
                                : 'border-transparent focus:border-brand-500'
                            }`}
                            placeholder="12345"
                          />
                          {errors.zip && touched.zip && (
                            <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              {errors.zip}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="pest" className="block text-sm font-semibold text-brand-800 mb-2">
                          What pest are you dealing with? <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="pest"
                          name="pest"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          className={`w-full px-4 py-4 bg-brand-50 border-2 rounded-xl text-brand-900 focus:bg-white transition-all outline-none appearance-none cursor-pointer ${
                            errors.pest && touched.pest
                              ? 'border-red-400 bg-red-50 focus:border-red-500'
                              : 'border-transparent focus:border-brand-500'
                          }`}
                        >
                          <option value="">Select a pest...</option>
                          {pestTypes.map((pest) => (
                            <option key={pest} value={pest}>{pest}</option>
                          ))}
                        </select>
                        {errors.pest && touched.pest && (
                          <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            {errors.pest}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-16 bg-brand-600 hover:bg-brand-700 text-white font-bold text-lg uppercase tracking-wide rounded-xl shadow-button hover:shadow-button-hover hover:-translate-y-0.5 transition-all disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                      </button>

                      <p className="text-sm text-muted text-center">
                        No obligation. We&apos;ll call you within the hour.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Info Side */}
              <div className="space-y-8">
                {/* Phone CTA */}
                <div className="bg-brand-600 rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-2">Prefer to Call?</h3>
                  <p className="text-white/80 mb-6">Speak with a pest control expert now.</p>
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-4 text-3xl font-extrabold"
                  >
                    <span className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    {PHONE_NUMBER}
                  </a>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-3xl p-8 shadow-card">
                  <h3 className="text-xl font-bold text-brand-900 mb-6">Hours of Operation</h3>
                  <ul className="space-y-4 text-brand-800">
                    <li className="flex justify-between">
                      <span className="text-muted">Monday - Friday</span>
                      <span className="font-semibold">7:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted">Saturday</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted">Sunday</span>
                      <span className="font-semibold">Closed</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-brand-100">
                    <p className="text-brand-600 font-semibold">
                      24/7 Emergency Line Available
                    </p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: (
                        <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                      ),
                      label: 'Licensed & Insured'
                    },
                    {
                      icon: (
                        <svg className="w-8 h-8 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ),
                      label: '4.9 Star Rating'
                    },
                    {
                      icon: (
                        <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      label: 'Free Inspections'
                    },
                    {
                      icon: (
                        <svg className="w-8 h-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                      ),
                      label: 'Satisfaction Guaranteed'
                    },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-2xl p-5 shadow-card text-center">
                      <div className="flex justify-center mb-2">{item.icon}</div>
                      <div className="text-sm font-semibold text-brand-900">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileActionBar />
    </>
  )
}
