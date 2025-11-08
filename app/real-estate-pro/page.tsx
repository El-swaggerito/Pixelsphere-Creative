'use client'

import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Footer, CTASection, TestimonialsSection, AboutUsSection, RealtorHelpSection, Navbar } from '@/components/real-estate-pro/'

export default function RealEstatePro() {
  const shouldReduceMotion = useReducedMotion()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion CSS media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when clicking outside or on menu items
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Touch handling for mobile menu swipe gestures
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    // Close menu on left swipe (swipe to right)
    if (isRightSwipe && isMobileMenuOpen) {
      closeMobileMenu()
    }
    
    // Open menu on right swipe from edge (swipe from left edge)
    if (isLeftSwipe && !isMobileMenuOpen && touchStart < 50) {
      toggleMobileMenu()
    }
  }

  // Animation variants that respect reduced motion preferences
  const getAnimationProps = (baseProps: any) => {
    if (shouldReduceMotion || prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 }
      }
    }
    return baseProps
  }
  return (
    <PageTransition className='overflow-hidden'>
      <div className="min-h-screen"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
      {/* Hero Section with Background */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/realestatepro/herobg.jpg"
            alt="Modern luxury home exterior"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          {/* Navigation */}
          <Navbar 
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
            closeMobileMenu={closeMobileMenu}
          />
      
          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 sm:px-6 lg:px-12 text-center">
            {/* Small text above main heading */}
            <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium tracking-wider uppercase mb-3 sm:mb-4 lg:mb-6">
              THE BEST WAY TO
            </p>
            
            {/* Main heading */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6 max-w-4xl px-2">
              Find Your Dream Home
            </h1>
            
            {/* Subtitle */}
            <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-12 max-w-2xl font-light px-2">
              We've more than 745,000 apartments, place & plot.
            </p>
          
            {/* Search Bar */}
            <div className="w-full max-w-4xl bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden mx-4 sm:mx-0">
              {/* Search Tabs */}
              <div className="flex border-b border-gray-100">
                <button className="flex-1 px-3 sm:px-6 py-3 sm:py-4 text-gray-900 bg-white font-semibold border-b-2 border-orange-500 transition-all text-sm sm:text-base">
                  All
                </button>
                <button className="flex-1 px-3 sm:px-6 py-3 sm:py-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-semibold transition-all text-sm sm:text-base">
                  For Sale
                </button>
                <button className="flex-1 px-3 sm:px-6 py-3 sm:py-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-semibold transition-all text-sm sm:text-base">
                  For Rent
                </button>
              </div>
              
              {/* Search Input */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center p-3 sm:p-4 gap-3 sm:gap-0">
                <div className="flex items-center flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 rounded-lg sm:mr-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter an address, neighborhood, city, or ZIP code"
                    className="flex-1 bg-transparent text-gray-700 placeholder-gray-500 outline-none text-sm sm:text-base"
                  />
                </div>
                
                <div className="flex gap-2 sm:gap-4">
                  <button className="px-4 sm:px-6 py-2 sm:py-3 text-gray-600 hover:text-gray-900 font-semibold transition-colors text-sm sm:text-base">
                    Advanced
                  </button>
                  
                  <motion.button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold flex items-center text-sm sm:text-base"
                    {...getAnimationProps({
                      whileHover: { scale: 1.05, boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)" },
                      whileTap: { scale: 0.95 },
                      transition: { duration: 0.2, ease: "easeOut" }
                    })}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden sm:inline">Search</span>
                    <span className="sm:hidden">Go</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Apartment Types Section */}
      <AnimatedSection>
        <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 sm:mb-16 lg:mb-20">
            <div className="mb-6 sm:mb-8 lg:mb-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Explore Apartment Types
              </h2>
              <p className="text-gray-500 text-lg sm:text-xl lg:text-2xl max-w-lg font-light">
                Find the perfect space that matches your style and comfort.
              </p>
            </div>
            
            <button className="flex items-center text-gray-900 hover:text-orange-500 font-semibold text-lg sm:text-xl transition-colors group self-start lg:self-center">
              See All Types
              <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
          
          {/* Property Type Cards Grid */}
          <div className="flex flex-wrap justify-between gap-2 sm:gap-3 lg:gap-4 w-full">
            {/* Houses */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300 group cursor-pointer flex-1 min-w-0">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Houses</span>
            </div>

            {/* Apartments */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300 group cursor-pointer flex-1 min-w-0">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm6-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Apartments</span>
            </div>

            {/* Office */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300 group cursor-pointer flex-1 min-w-0">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Office</span>
            </div>

            {/* Villa */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300 group cursor-pointer flex-1 min-w-0">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3L19 9.3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Villa</span>
            </div>

            {/* Townhome */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300 group cursor-pointer flex-1 min-w-0">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 11v10h5v-6h4v6h5V11L8 6l-7 5zm7 2c0-1.1.9-2 2-2s2 .9 2 2s-2 2-2 2s-2-.9-2-2z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Townhome</span>
            </div>

            {/* Bungalow */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300 group cursor-pointer flex-1 min-w-0">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 5.7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Bungalow</span>
            </div>

            {/* Loft */}
            <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-orange-50 rounded-full transition-all duration-300 group cursor-pointer flex-1 min-w-0">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm4 4H9v-2h2v2zm6-4h-2v-2h2v2zm0-4h-2v-2h2v2z"/>
                </svg>
              </div>
              <span className="text-gray-900 font-medium text-sm whitespace-nowrap">Loft</span>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Featured Listings Section */}
      <AnimatedSection>
        <section className="py-16 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Discover Our Featured Listings
              </h2>
              <p className="text-gray-600 text-lg">
                Experience elegance with finely curated properties designed for your lifestyle.
              </p>
            </div>
            <a 
              href="#" 
              className="flex items-center gap-2 text-gray-900 font-medium hover:text-orange-500 transition-colors group"
            >
              See All Properties
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Property Cards Slider Container */}
          <div className="relative overflow-hidden">
            {/* Slider Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Cards Slider - 3 Cards Per Slide */}
            <div className="flex gap-6 mb-8">
              
              {/* Property Card 1 */}
              <motion.div 
                className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -4
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative">
                  <motion.img 
                    src="/images/realestatepro/list1.png" 
                    alt="Modern House Hollywood"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-gray-900 font-bold text-sm">$4,600</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Modern House Hollywood</h3>
                  <p className="text-gray-600 text-sm mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    374 Jadewood Ave
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2V10c0-2.21-1.79-4-4-4z"/>
                      </svg>
                      <span className="font-medium">6</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H18V4l-1-1V1h-2v2H9V1H7v2H6l-1 1v2H2.5C1.12 6 0 7.12 0 8.5V9h24v-.5C24 7.12 22.88 6 21.5 6z"/>
                      </svg>
                      <span className="font-medium">2</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
                      </svg>
                      <span className="font-medium">200</span> sqft
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <motion.button 
                      className="text-orange-500 font-semibold text-sm"
                      whileHover={{ scale: 1.05, color: "#ea580c" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      For Sale
                    </motion.button>
                    <div className="flex items-center gap-2">
                      <motion.button 
                        className="p-2 rounded-full group"
                        whileHover={{ backgroundColor: "#f3f4f6", scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </motion.button>
                      <motion.button 
                        className="p-2 rounded-full group"
                        whileHover={{ backgroundColor: "#f3f4f6", scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Property Card 2 */}
              <motion.div 
                className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -4
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative">
                  <motion.img 
                    src="/images/realestatepro/list2.png" 
                    alt="Luxury Villa Green"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-gray-900 font-bold text-sm">$5,800</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Luxury Villa Green</h3>
                  <p className="text-gray-600 text-sm mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    78 Broadway, Brooklyn
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2V10c0-2.21-1.79-4-4-4z"/>
                      </svg>
                      <span className="font-medium">9</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H18V4l-1-1V1h-2v2H9V1H7v2H6l-1 1v2H2.5C1.12 6 0 7.12 0 8.5V9h24v-.5C24 7.12 22.88 6 21.5 6z"/>
                      </svg>
                      <span className="font-medium">3</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
                      </svg>
                      <span className="font-medium">500</span> sqft
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                      For Sale
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Property Card 3 */}
              <motion.div 
                className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  y: -4
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="relative">
                  <motion.img 
                    src="/images/realestatepro/list3.png" 
                    alt="Premium Penthouse"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      FEATURED
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-gray-900 font-bold text-sm">$7,200</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">Premium Penthouse</h3>
                  <p className="text-gray-600 text-sm mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    254 E 2nd St
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2V10c0-2.21-1.79-4-4-4z"/>
                      </svg>
                      <span className="font-medium">8</span> Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H18V4l-1-1V1h-2v2H9V1H7v2H6l-1 1v2H2.5C1.12 6 0 7.12 0 8.5V9h24v-.5C24 7.12 22.88 6 21.5 6z"/>
                      </svg>
                      <span className="font-medium">4</span> Baths
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14z"/>
                      </svg>
                      <span className="font-medium">800</span> sqft
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button className="text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors">
                      For Sale
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors group">
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Enhanced Pagination Dots */}
            <div className="flex justify-center items-center gap-3">
              <button className="w-3 h-3 rounded-full bg-orange-500 shadow-sm transition-all duration-300 hover:scale-110"></button>
              <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 hover:scale-110"></button>
              <button className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 hover:scale-110"></button>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* See How Realtor Can Help Section */}
      <RealtorHelpSection />

      {/* About Us Section */}
    <AboutUsSection />

    {/* Explore Cities Section */}
    <AnimatedSection>
      <section className="py-20 bg-gray-50">
  <div className="max-w-[1200px] mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-[48px] leading-[58px] font-bold text-gray-900 mb-4 tracking-[-0.02em]">
        Explore Cities
      </h2>
      <p className="text-[18px] leading-[28px] text-gray-600 max-w-[600px] mx-auto font-normal">
        Find your next home in the most sought-after locations.
      </p>
    </div>

    {/* Optimized 4-column grid layout */}
    <div
      className="
        grid grid-cols-1 gap-6
        md:grid-cols-2
        lg:grid-cols-4 lg:auto-rows-[264px]
        max-w-[1200px] mx-auto
      "
    >
      {/* First Row */}
      {/* Toronto – spans 2 columns (row 1, cols 1-2) */}
      <div className="group cursor-pointer lg:col-start-1 lg:col-span-2 lg:row-start-1">
        <div className="relative h-[264px] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
          <img
            src="/images/realestatepro/toronto.jpg"
            alt="Toronto skyline"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-[24px] leading-[32px] font-bold mb-2 tracking-[-0.01em]">Toronto</h3>
            <p className="text-[16px] leading-[24px] text-gray-200">10 Properties</p>
          </div>
        </div>
      </div>

      {/* Calgary – single column (row 1, col 3) */}
      <div className="group cursor-pointer lg:col-start-3 lg:row-start-1">
        <div className="relative h-[264px] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
          <img
            src="/images/realestatepro/calgary.jpg"
            alt="Calgary skyline"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-[20px] leading-[28px] font-bold mb-1 tracking-[-0.01em]">Calgary</h3>
            <p className="text-[16px] leading-[24px] text-gray-200">1 Property</p>
          </div>
        </div>
      </div>

      {/* Vancouver – single column (row 1, col 4) */}
      <div className="group cursor-pointer lg:col-start-4 lg:row-start-1">
        <div className="relative h-[264px] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
          <img
            src="/images/realestatepro/vancouver.jpg"
            alt="Vancouver skyline"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-[20px] leading-[28px] font-bold mb-1 tracking-[-0.01em]">Vancouver</h3>
            <p className="text-[16px] leading-[24px] text-gray-200">0 Properties</p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      {/* Edmonton – single column (row 2, col 1) */}
      <div className="group cursor-pointer lg:col-start-1 lg:row-start-2">
        <div className="relative h-[264px] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
          <img
            src="/images/realestatepro/edmonton.jpg"
            alt="Edmonton city"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-[18px] leading-[24px] font-bold mb-1 tracking-[-0.01em]">Edmonton</h3>
            <p className="text-[14px] leading-[20px] text-gray-200">1 Property</p>
          </div>
        </div>
      </div>

      {/* Kitchener – single column (row 2, col 2) */}
      <div className="group cursor-pointer lg:col-start-2 lg:row-start-2">
        <div className="relative h-[264px] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
          <img
            src="/images/realestatepro/kitchener.jpg"
            alt="Kitchener city"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-[18px] leading-[24px] font-bold mb-1 tracking-[-0.01em]">Kitchener</h3>
            <p className="text-[14px] leading-[20px] text-gray-200">2 Properties</p>
          </div>
        </div>
      </div>

      {/* Ottawa – spans 2 columns (row 2, cols 3-4) */}
      <div className="group cursor-pointer lg:col-start-3 lg:col-span-2 lg:row-start-2">
        <div className="relative h-[264px] rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2">
          <img
            src="/images/realestatepro/ottawa.jpg"
            alt="Ottawa city"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-[20px] leading-[28px] font-bold mb-1 tracking-[-0.01em]">Ottawa</h3>
            <p className="text-[16px] leading-[24px] text-gray-200">1 Property</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>


      {/* Testimonials Section */}
     <TestimonialsSection  />

      {/* CTA Section */}
      <CTASection getAnimationProps={getAnimationProps} />

      {/* Footer Section */}
     <Footer /> 
    </div>
    </PageTransition>
  )
}