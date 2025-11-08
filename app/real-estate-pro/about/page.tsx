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
                Your Trusted Real Estate Partners
              </motion.h1>
              <motion.p
                className="text-white/85 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl"
                {...getAnimationProps({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } })}
              >
                Local Experts. Global Reach. Real Results.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>

        {/* Our Vision Section */}
        <AnimatedSection>
          <section
            aria-labelledby="vision-heading"
            className="bg-white"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <div className="text-center mb-12 sm:mb-16">
                <motion.h2
                  id="vision-heading"
                  className="text-gray-900 text-2xl sm:text-3xl md:text-4xl font-bold"
                  {...getAnimationProps({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } })}
                >
                  Our Vision
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                {/* Card 1 */}
                <motion.article
                  className="text-center"
                  aria-label="Creating Lifelong Partnerships"
                  {...getAnimationProps({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.05 } })}
                >
                  <figure className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gray-50 shadow-sm flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="text-[#EB6753]"
                      >
                        <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
                        <circle cx="6" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
                        <circle cx="18" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M8 14l3-4 5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </figure>
                  <h3 className="mt-6 text-gray-900 text-lg sm:text-xl font-semibold">
                    Creating Lifelong Partnerships
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                    Fostering trust and strong relationships for long‑term success in real estate.
                  </p>
                </motion.article>

                {/* Card 2 */}
                <motion.article
                  className="text-center"
                  aria-label="Empowering Real Estate Decisions"
                  {...getAnimationProps({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.15 } })}
                >
                  <figure className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gray-50 shadow-sm flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="text-[#EB6753]"
                      >
                        <rect x="5" y="5" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </figure>
                  <h3 className="mt-6 text-gray-900 text-lg sm:text-xl font-semibold">
                    Empowering Real Estate Decisions
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                    Providing expert insights to help you make confident, informed property choices.
                  </p>
                </motion.article>

                {/* Card 3 */}
                <motion.article
                  className="text-center"
                  aria-label="Innovating For A Better Tomorrow"
                  {...getAnimationProps({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.25 } })}
                >
                  <figure className="flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gray-50 shadow-sm flex items-center justify-center">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="text-[#EB6753]"
                      >
                        <path d="M12 3l2.5 5.5L20 11l-5 1.5L13 18l-1-5-5-1.5 5-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </figure>
                  <h3 className="mt-6 text-gray-900 text-lg sm:text-xl font-semibold">
                    Innovating For A Better Tomorrow
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-md mx-auto">
                    Driving change and sustainable solutions for a brighter, more accessible real estate future.
                  </p>
                </motion.article>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AboutUsSection/>

        <RealtorHelpSection/>

        <TestimonialsSection/>

        <CTASection getAnimationProps={getAnimationProps}/>



        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  )
}