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

<AnimatedSection>
 <section aria-labelledby="listings-heading" className="bg-[#f7f7f8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <h2 id="listings-heading" className="text-[#1F2937] font-extrabold tracking-[-0.02em] text-[28px] sm:text-[32px] leading-tight">Property Listings</h2>
            <div className="hidden sm:flex items-center gap-3" aria-label="Sort and layout options">
              {/* Sort label */}
              <button type="button" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors" aria-haspopup="listbox" aria-expanded="false">
                <span>Most popular</span>
                <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {/* List icon */}
              <button type="button" aria-label="List view" className="h-9 w-9 rounded-lg border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>
                </svg>
              </button>
              {/* Grid icon (active) */}
              <button type="button" aria-label="Grid view" aria-pressed="true" className="h-9 w-9 rounded-lg bg-[#EFF6FF] text-[#1E40AF] border border-[#3B82F6] flex items-center justify-center shadow-[inset_0_0_0_1px_#93C5FD]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/>
                  <rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>
                </svg>
              </button>
            </div>
          </header>

          {/* Filters */}
          <motion.form
            className="bg-white rounded-2xl shadow-sm p-4 sm:p-5 mb-8"
            role="search"
            aria-label="Property filters"
            {...getAnimationProps({ initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 } })}
          >
            <div className="flex flex-wrap gap-3">
              <label className="sr-only" htmlFor="q">Search</label>
              <input id="q" name="q" placeholder="What are looking for" className="flex-1 min-w-[200px] px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300" />
              {['Status','Type','Beds','Baths'].map((label,idx)=> (
                <div key={label} className="relative">
                  <label className="sr-only">{label}</label>
                  <button type="button" className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm flex items-center gap-2 hover:border-gray-300">
                    {label}
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              ))}
              <button type="button" aria-label="Reset filters" className="px-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm hover:border-gray-300">↻</button>
              <button type="button" aria-label="More filters" className="px-3 py-2.5 rounded-lg border border-gray-200 text-gray-700 text-sm hover:border-gray-300">⌄</button>
              <button type="submit" className="ml-auto bg-[#EB6753] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#d65948] transition-colors">Search</button>
            </div>

            {/* Secondary filters */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Price */}
              <fieldset>
                <legend className="sr-only">Price</legend>
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <label className="sr-only" htmlFor="price-max">Max Price</label>
                  <input id="price-max" placeholder="Max Price" className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm" />
                  <span aria-hidden className="text-gray-300">⇄</span>
                  <label className="sr-only" htmlFor="price-min">Min Price</label>
                  <input id="price-min" placeholder="Min Price" className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm" />
                </div>
              </fieldset>
              {/* Area */}
              <fieldset>
                <legend className="sr-only">Area</legend>
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <label className="sr-only" htmlFor="area-max">Max Area</label>
                  <input id="area-max" placeholder="Max Area" className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm" />
                  <span aria-hidden className="text-gray-300">⇄</span>
                  <label className="sr-only" htmlFor="area-min">Min Area</label>
                  <input id="area-min" placeholder="Min Area" className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm" />
                </div>
              </fieldset>
              {/* Year Built */}
              <fieldset>
                <legend className="sr-only">Year Built</legend>
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <label className="sr-only" htmlFor="year-min">Min Year</label>
                  <input id="year-min" placeholder="Min Year" className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm" />
                  <span aria-hidden className="text-gray-300">⇄</span>
                  <label className="sr-only" htmlFor="year-max">Max Year</label>
                  <input id="year-max" placeholder="Max Year" className="flex-1 min-w-0 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm" />
                </div>
              </fieldset>
            </div>
          </motion.form>

          {/* Listings */}
          <div className="space-y-6">
            {[1,2,3].map((i)=> (
              <motion.article key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden" {...getAnimationProps({ initial:{opacity:0,y:8}, animate:{opacity:1,y:0}, transition:{duration:0.4, delay:i*0.05}})}>
                <div className="grid grid-cols-1 md:grid-cols-[300px,1fr]">
                  {/* Image */}
                  <figure className="relative md:h-[180px]">
                    <img 
                      src="/images/realestatepro/list1.png" 
                      alt="Modern villa exterior" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                    <figcaption className="sr-only">Comfortable Villa exterior photo</figcaption>
                    <span className="absolute top-4 left-4 bg-[#EB6753] text-white text-xs font-semibold px-2 py-1 rounded-full">Featured</span>
                  </figure>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-900 font-semibold text-base sm:text-lg">{i===1? 'Comfortable Villa Green':'Quality House For Sale'}</h3>
                      <button className="text-xs sm:text-sm px-3 py-1.5 border border-[#EB6753] text-[#EB6753] rounded-lg hover:bg-[#EB6753] hover:text-white transition-colors">View Detail</button>
                    </div>
                    <p className="mt-1 text-gray-600 text-sm">Southwestern Ontario, Ontario, Canada</p>

                    {/* Meta */}
                    <div className="mt-3 flex flex-wrap items-center gap-4 text-gray-600 text-xs sm:text-sm">
                      <span className="flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 11h18M5 15h14M7 19h10" strokeWidth="2"/></svg>41</span>
                      <span className="flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 11h16M6 15h12M8 19h8" strokeWidth="2"/></svg>32</span>
                      <span className="flex items-center gap-1"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16v16H4z" strokeWidth="2"/></svg>122,280 sqft</span>
                    </div>

                    {/* Price */}
                    <div className="mt-4 flex items-center gap-2">
                      <span className="text-[#EB6753] text-xl sm:text-2xl font-bold">$ 5,800</span>
                      <span className="text-gray-500 text-xs">/Month</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
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