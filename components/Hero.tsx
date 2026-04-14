'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const PHONE_NUMBER = '(555) 123-4567'
const PHONE_HREF = 'tel:+15551234567'

// Twemoji component to render consistent emojis across platforms
function Twemoji({ emoji, className = '' }: { emoji: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current && typeof window !== 'undefined') {
      // @ts-ignore
      if (window.twemoji) {
        // @ts-ignore
        window.twemoji.parse(ref.current, {
          folder: 'svg',
          ext: '.svg',
          base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/',
        })
      }
    }
  }, [emoji])

  return <span ref={ref} className={className}>{emoji}</span>
}

const pestOptions = [
  { value: 'ants', label: 'Ants', icon: '🐜' },
  { value: 'roaches', label: 'Roaches', icon: '🪳' },
  { value: 'rodents', label: 'Rodents', icon: '🐀' },
  { value: 'spiders', label: 'Spiders', icon: '🕷️' },
  { value: 'termites', label: 'Termites', icon: '🪵' },
  { value: 'other', label: 'Other / Not Sure', icon: '❓' },
]

const serviceOptions = [
  { value: 'emergency', label: 'Emergency', sublabel: 'Same day help', icon: '🚨' },
  { value: 'one-time', label: 'One Time', sublabel: 'Single visit', icon: '✅' },
  { value: 'ongoing', label: 'Ongoing Plan', sublabel: 'Quarterly', icon: '🛡️', badge: 'Most Popular' },
]

const propertyOptions = [
  { value: 'house', label: 'House', icon: '🏠' },
  { value: 'apartment', label: 'Apartment', icon: '🏢' },
  { value: 'business', label: 'Business', icon: '🏪' },
]

interface FormData {
  pestType: string
  serviceType: string
  propertyType: string
  name: string
  phone: string
  zip: string
}

export default function Hero() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    pestType: '',
    serviceType: '',
    propertyType: '',
    name: '',
    phone: '',
    zip: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')

  const handleOptionSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setDirection('forward')
    if (currentStep < 4) {
      setTimeout(() => setCurrentStep(prev => prev + 1), 150)
    }
  }

  const handleBack = () => {
    setDirection('back')
    setCurrentStep(prev => Math.max(1, prev - 1))
  }

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
      case 'zip':
        if (!value.trim()) return 'Zip code is required'
        if (!/^\d{5}(-\d{4})?$/.test(value.trim())) return 'Please enter a valid zip code'
        break
    }
    return undefined
  }

  const handleSubmit = async () => {
    const newErrors: Partial<FormData> = {}
    const nameError = validateField('name', formData.name)
    const phoneError = validateField('phone', formData.phone)
    const zipError = validateField('zip', formData.zip)

    if (nameError) newErrors.name = nameError
    if (phoneError) newErrors.phone = phoneError
    if (zipError) newErrors.zip = zipError

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const ProgressBar = () => (
    <div className="mb-4">
      <div className="flex justify-center items-center text-xs mb-1.5">
        <span className="text-brand-600 font-medium">Step {currentStep} of 4</span>
      </div>
      <div className="h-1.5 bg-brand-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        />
      </div>
    </div>
  )

  const renderStep1 = () => (
    <div className="h-full flex flex-col">
      <h3 className="text-sm font-semibold text-brand-800 mb-3 text-center">
        What&apos;s the issue?
      </h3>
      <div className="grid grid-cols-3 gap-3 flex-1">
        {pestOptions.map(option => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('pestType', option.value)}
            className={`
              rounded-xl border-2 text-center transition-all duration-200 flex flex-col items-center justify-center
              hover:-translate-y-0.5
              ${formData.pestType === option.value
                ? 'border-brand-500 bg-brand-50 shadow-card'
                : 'border-brand-100 hover:border-brand-300 hover:bg-brand-50/50'
              }
            `}
          >
            <Twemoji emoji={option.icon} className="text-2xl sm:text-3xl mb-1 [&>img]:inline [&>img]:w-7 [&>img]:h-7 sm:[&>img]:w-8 sm:[&>img]:h-8" />
            <span className="text-xs font-medium text-brand-800">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div>
      <h3 className="text-sm font-semibold text-brand-800 mb-3 text-center">
        What do you need?
      </h3>
      <div className="space-y-2">
        {serviceOptions.map(option => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('serviceType', option.value)}
            className={`
              relative w-full p-3 rounded-xl border-2 text-left transition-all duration-200
              flex items-center gap-3 hover:-translate-y-0.5
              ${formData.serviceType === option.value
                ? 'border-brand-500 bg-brand-50 shadow-card'
                : 'border-brand-100 hover:border-brand-300 hover:bg-brand-50/50'
              }
            `}
          >
            <Twemoji emoji={option.icon} className="text-xl [&>img]:inline [&>img]:w-6 [&>img]:h-6" />
            <div className="flex-1 min-w-0">
              <span className="font-semibold text-brand-800 text-sm block">{option.label}</span>
              <span className="text-xs text-brand-600/70">{option.sublabel}</span>
            </div>
            {option.badge && (
              <span className="bg-brand-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full whitespace-nowrap">
                {option.badge}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div>
      <h3 className="text-sm font-semibold text-brand-800 mb-3 text-center">
        Property type?
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {propertyOptions.map(option => (
          <button
            key={option.value}
            onClick={() => handleOptionSelect('propertyType', option.value)}
            className={`
              p-3 sm:p-4 rounded-xl border-2 text-center transition-all duration-200
              hover:-translate-y-0.5
              ${formData.propertyType === option.value
                ? 'border-brand-500 bg-brand-50 shadow-card'
                : 'border-brand-100 hover:border-brand-300 hover:bg-brand-50/50'
              }
            `}
          >
            <Twemoji emoji={option.icon} className="text-2xl sm:text-3xl mb-1 block [&>img]:inline [&>img]:w-7 [&>img]:h-7 sm:[&>img]:w-8 sm:[&>img]:h-8" />
            <span className="text-xs font-medium text-brand-800">{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div>
      <h3 className="text-sm font-semibold text-brand-800 mb-3 text-center">
        Where should we call?
      </h3>
      <div className="space-y-2.5">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className={`
              w-full px-3 py-2.5 bg-brand-50 border-2 rounded-lg text-sm text-brand-900
              placeholder:text-brand-400 focus:bg-white transition-all outline-none
              ${errors.name ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-brand-500'}
            `}
          />
          {errors.name && (
            <p className="mt-0.5 text-xs text-red-600">{errors.name}</p>
          )}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
            className={`
              w-full px-3 py-2.5 bg-brand-50 border-2 rounded-lg text-sm text-brand-900
              placeholder:text-brand-400 focus:bg-white transition-all outline-none
              ${errors.phone ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-brand-500'}
            `}
          />
          {errors.phone && (
            <p className="mt-0.5 text-xs text-red-600">{errors.phone}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={(e) => setFormData(prev => ({ ...prev, zip: e.target.value }))}
            className={`
              w-full px-3 py-2.5 bg-brand-50 border-2 rounded-lg text-sm text-brand-900
              placeholder:text-brand-400 focus:bg-white transition-all outline-none
              ${errors.zip ? 'border-red-400 bg-red-50' : 'border-transparent focus:border-brand-500'}
            `}
          />
          {errors.zip && (
            <p className="mt-0.5 text-xs text-red-600">{errors.zip}</p>
          )}
        </div>
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full h-11 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm rounded-lg shadow-button hover:shadow-button-hover hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </span>
          ) : (
            'Get Started'
          )}
        </button>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center py-4">
      <div className="w-14 h-14 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-7 h-7 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-brand-900">
        Thanks, {formData.name.split(' ')[0]}!
      </h3>
      <p className="mt-2 text-sm text-brand-600/70">
        We&apos;ll call you within 1 hour.
      </p>
      {formData.serviceType === 'emergency' && (
        <div className="mt-4 p-3 bg-brand-50 rounded-lg">
          <p className="text-xs text-brand-700 mb-1">Need immediate help?</p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 text-lg font-bold text-brand-600 hover:text-brand-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_NUMBER}
          </a>
        </div>
      )}
    </div>
  )

  const QuoteForm = () => (
    <div className="bg-white rounded-2xl shadow-elevated w-[380px] sm:w-[420px]">
      {/* Form header */}
      <div className="relative p-5 pb-0">
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="absolute left-5 top-5 flex items-center gap-1 text-sm text-brand-500 hover:text-brand-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        )}
        <h2 className="text-lg font-bold text-brand-900 text-center">
          Get Your Free Quote
        </h2>
      </div>

      {/* Fixed dimensions container */}
      <div className="p-5 pt-4">
        {!isSubmitted ? (
          <>
            {/* Step 1: trust line, Step 2+: progress bar */}
            <div className="mb-4 h-[26px] relative">
              <div className={`absolute inset-0 flex items-center justify-center gap-4 text-xs text-brand-600 transition-opacity duration-200 ${currentStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Free quote
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  60 seconds
                </span>
              </div>
              <div className={`absolute inset-0 transition-opacity duration-200 ${currentStep > 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <ProgressBar />
              </div>
            </div>
            {/* Fixed size step container - all steps rendered, only current visible */}
            <div className="h-[300px] overflow-hidden relative">
              <div className={`absolute inset-0 transition-all duration-200 ease-out ${currentStep === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'}`}>
                {renderStep1()}
              </div>
              <div className={`absolute inset-0 transition-all duration-200 ease-out ${currentStep === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'}`}>
                {renderStep2()}
              </div>
              <div className={`absolute inset-0 transition-all duration-200 ease-out ${currentStep === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'}`}>
                {renderStep3()}
              </div>
              <div className={`absolute inset-0 transition-all duration-200 ease-out ${currentStep === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 pointer-events-none translate-x-4'}`}>
                {renderStep4()}
              </div>
            </div>
          </>
        ) : (
          <div className="h-[330px] flex items-center justify-center animate-scaleIn">
            {renderSuccess()}
          </div>
        )}
      </div>
    </div>
  )

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/house-hero.jpg"
          alt="Professional pest control service"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_75%]"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBQYhEhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAYEQEBAQEBAAAAAAAAAAAAAAABAgADEf/aAAwDAQACEQMRAD8AzbS9v7fuq/wWtsIikhbqZiWIA+c+qsHbVgACNOtQB6/mP5SlKLOTXcmuf//Z"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-16">

          {/* Left side - Headlines & Value Props */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            {/* Main headline */}
            <h1 className="mt-16 sm:mt-0 text-5xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight">
              baka pest 124
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-lg mx-auto lg:mx-0">
              Same day inspections. Treatments that actually work. We&apos;ll call you back within 1 hour.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center h-12 px-6 bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm rounded-xl shadow-button hover:shadow-button-hover transition-all transform hover:-translate-y-0.5"
              >
                Get a Free Inspection
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center h-12 px-6 border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-sm rounded-xl transition-all"
              >
                View Our Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/90">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">4.9 from 500+ reviews</span>
              </div>
            </div>

            {/* Phone CTA - desktop only */}
            <div className="mt-8 hidden sm:block">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">Or call {PHONE_NUMBER}</span>
              </a>
            </div>

            {/* Value props - hidden on mobile */}
            <div className="mt-8 hidden sm:grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm">Same day service</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-sm">100% guaranteed</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-sm">Local experts</span>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex justify-center lg:justify-end flex-shrink-0">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
