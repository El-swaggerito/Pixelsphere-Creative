'use client'

import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Navbar, Footer, AboutUsSection, RealtorHelpSection, TestimonialsSection, CTASection } from '@/components/real-estate-pro/'

export default function RealEstateProAbout() {
  const shouldReduceMotion = useReducedMotion()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const getAnimationProps = (baseProps: any) => {
    if (shouldReduceMotion || prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 },
      }
    }
    return baseProps
  }

  return (
    <PageTransition className="overflow-hidden">
      <div className="min-h-screen">
        {/* Hero Section with Background */}
        <div className="relative min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/realestatepro/hero.png"
              alt="Collage of city buildings and people representing real estate expertise"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Top Navigation */}
          <div className="relative z-10">
            <Navbar
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              closeMobileMenu={closeMobileMenu}
            />
          </div>

          {/* Hero Content */}
          <AnimatedSection>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-12 text-center">
              <motion.h1
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6 max-w-5xl"
                {...getAnimationProps({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut' } })}
              >
                Let’s Talk Real Estate
              </motion.h1>
              <motion.p
                className="text-white/85 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl"
                {...getAnimationProps({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } })}
              >
                Ready to buy, sell, or just ask questions? We’re here to help.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact Section */}
        <section
          aria-labelledby="contact-get-in-touch"
          className="relative z-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
              {/* Image card */}
              <div className="rounded-xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[520px]">
                  <Image
                    src="/images/realestatepro/contactus.jpg"
                    alt="Team discussing project plans in an office"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    quality={90}
                  />
                </div>
              </div>

              {/* Form card */}
              <div className="rounded-xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 px-5 sm:px-6 md:px-8 py-6 sm:py-8">
                <h2 id="contact-get-in-touch" className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold text-center">Get In Touch</h2>
                <p className="mt-2 text-center text-gray-600 text-sm sm:text-base">Please enter your details to create a new account.</p>

                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.currentTarget as HTMLFormElement
                    const data = new FormData(form)
                    console.log('Contact form submitted', Object.fromEntries(data.entries()))
                  }}
                  aria-describedby="contact-terms"
                >
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Name"
                      className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us a little bit about your destination dream"
                      rows={5}
                      className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm sm:text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-orange-500 text-white text-sm sm:text-base font-semibold py-3 shadow-sm hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
                    aria-label="Submit contact form"
                  >
                    Submit Now
                  </button>
                </form>

                <p id="contact-terms" className="mt-4 text-center text-gray-600 text-xs sm:text-sm">
                  By contacting us, you agree to our
                  <a href="#" className="mx-1 font-medium text-gray-900 hover:text-orange-600 focus:text-orange-600 underline">Terms Of</a>
                  <span className="mx-1">Service</span>
                  and
                  <a href="#" className="ml-1 font-medium text-gray-900 hover:text-orange-600 focus:text-orange-600 underline">Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Realtor Help Map Section */}
        <AnimatedSection>
          <section
            aria-labelledby="realtor-help-heading"
            className="px-4 sm:px-6 lg:px-12 py-12 sm:py-16"
          >
            <div className="mx-auto max-w-7xl">
              {/* Header */}
              <div className="text-center mb-10 sm:mb-12">
                <h2 id="realtor-help-heading" className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold">See How Realtor Can Help</h2>
                <p className="mt-2 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">From neighborhood insights to market trends, we guide you with proven strategies to buy, sell, or invest no matter where you’re located.</p>
              </div>

              {/* Content + Map */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
                {/* Copy column */}
                <div>
                  <h3 className="text-gray-900 text-xl sm:text-2xl font-semibold mb-4">Connecting Near Or Far</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">Our team partners with clients locally and across major cities to deliver a seamless experience. Whether you’re relocating, upgrading, or exploring investment opportunities, we provide data-backed recommendations and concierge-level support.</p>
                  <dl className="space-y-2 text-gray-700">
                    <div className="flex gap-2"><dt className="font-medium">Address:</dt><dd>Chicago, Los Angeles</dd></div>
                    <div className="flex gap-2"><dt className="font-medium">Mobile:</dt><dd>(559) 392-5009</dd></div>
                    <div className="flex gap-2"><dt className="font-medium">Email:</dt><dd>agency06@gmail.com</dd></div>
                  </dl>

                  {/* Social links */}
                  <nav aria-label="Social media" className="mt-6 flex items-center gap-3">
                    <a href="#" aria-label="Twitter" className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:text-orange-600 hover:bg-gray-200 transition">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.5 4.5 0 00-4.5 4.5c0 .35.04.69.11 1A12.8 12.8 0 013 4s-4 9 5 13a13.1 13.1 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
                    </a>
                    <a href="#" aria-label="Facebook" className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:text-orange-600 hover:bg-gray-200 transition">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.29c-1.27 0-1.66.79-1.66 1.6V12h2.83l-.45 2.91h-2.38v7.04A10 10 0 0022 12z"/></svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:text-orange-600 hover:bg-gray-200 transition">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/></svg>
                    </a>
                    <a href="#" aria-label="YouTube" className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gray-100 text-gray-600 hover:text-orange-600 hover:bg-gray-200 transition">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3.1 3.1 0 00-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5A3.1 3.1 0 00.5 6.2 33 33 0 000 12a33 33 0 00.5 5.8 3.1 3.1 0 002.2 2.2c2 .5 9.3.5 9.3.5s7.3 0 9.3-.5a3.1 3.1 0 002.2-2.2A33 33 0 0024 12a33 33 0 00-.5-5.8zM9.8 15.5V8.5L16 12l-6.2 3.5z"/></svg>
                    </a>
                  </nav>
                </div>

                {/* Interactive map */}
                <div className="rounded-xl overflow-hidden bg-white ring-1 ring-black/5 shadow-sm">
                  <div className="relative w-full aspect-[5/3]">
                    <iframe
                      width="500"
                      height="300"
                      allow="geolocation"
                      src="https://api.maptiler.com/maps/base-v4/?key=YkevWyPDtyrnWT9C5xa7#7.8/37.91034/-100.02787"
                      className="absolute inset-0 w-full h-full"
                      title="Interactive Map"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>


        <CTASection getAnimationProps={getAnimationProps}/>



        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  )
}
