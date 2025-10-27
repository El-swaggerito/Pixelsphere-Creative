'use client'

import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function RealEstatePro() {
  const shouldReduceMotion = useReducedMotion()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

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
    <PageTransition>
      <div className="min-h-screen">
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
          <nav className="relative z-20 flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
            <div className="flex items-center">
              <Image
                src="/images/realestatepro/logo.png"
                alt="Real Estate Pro Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto"
                quality={95}
              />
            </div>
          
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#" className="text-white hover:text-gray-200 transition-colors font-medium text-sm xl:text-base">Home</a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors font-medium text-sm xl:text-base">About</a>
              <div className="relative group">
                <a href="#" className="text-white hover:text-gray-200 transition-colors font-medium flex items-center text-sm xl:text-base">
                  Properties
                  <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a href="#" className="text-white hover:text-gray-200 transition-colors font-medium flex items-center text-sm xl:text-base">
                  Agents
                  <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-white hover:text-gray-200 transition-colors font-medium text-sm xl:text-base">Contact</a>
            </div>
          
            <div className="hidden md:flex items-center">
              <button className="bg-transparent border border-white text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center font-medium text-sm xl:text-base">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Property
              </button>
            </div>
          
            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
      
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
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See How Realtor Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get expert guidance to find, buy, or sell your dream property with ease.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buy a Property Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Buy a property
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
                Find a home
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Sell a Property Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  <circle cx="12" cy="8" r="2" strokeWidth={1.5} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sell a property
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200">
                Place an ad
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Rent a Property Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rent a property
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200">
                Find a rental
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Buying or Rent Real estate pro it's Very Easy.
              <br />
              Just like Click, Search & Find
            </h2>
          </div>

          {/* First Content Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                We live on Digital Era 4.0.
                <br />
                We can help you in Our
                <br />
                Expertise about REP
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Listing more than one? Enjoy full control over your
                  advertisements, manage your entire space. Once you
                  list a property on our platform, you only have to sit back
                  and watch the world want it.
                </p>
                <p>
                  If you're looking for a real estate service that will operate
                  as an extension to your family - stay with
                  us and see!
                </p>
              </div>
              <button className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 mt-8">
                Explore Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/realestatepro/about1.png"
                  alt="Modern white house with contemporary architecture showcasing our real estate expertise"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Second Content Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="relative">
                <img
                  src="/images/realestatepro/about2.png"
                  alt="Multi-story residential building demonstrating our transparent commission and payment system"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Transparent Commission
                <br />
                and Payment under Our
                <br />
                Trusted License
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                When your property Sold, Buyed or Booked with New
                Guests. You may to have 50% Commission based on
                Budget Deals. So, Don't Worry brother :)
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">100% Trusted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Customer Support 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Indomaret Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Get paid quick!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">LinkAja or Ovo, Bebas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

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
      <AnimatedSection>
        <section className="py-[120px] bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-[80px]">
            <h2 className="text-[48px] leading-[58px] font-bold text-gray-900 mb-4 tracking-[-0.02em]">
              People Love Living with Real estate pro
            </h2>
            <p className="text-[18px] leading-[28px] text-gray-600 font-normal">
              Find your next home in the most sought-after locations.
            </p>
          </div>

          {/* Testimonials Container */}
          <div className="relative">
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-[24px] p-6 sm:p-8 h-[380px] sm:h-[400px] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-bold text-gray-900 mb-6">Great Work</h3>
                  <p className="text-[16px] leading-[26px] text-gray-700 mb-8">
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et"
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* User Profile */}
                 <div className="flex items-center gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <img
                    src="/images/realestatepro/avatar1.jpg"
                    alt="Ali Tufan profile picture"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[16px] leading-[24px] font-semibold text-gray-900">Ali Tufan</h4>
                    <p className="text-[14px] leading-[20px] text-gray-600">Marketing</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-[24px] p-6 sm:p-8 h-[380px] sm:h-[400px] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-bold text-gray-900 mb-6">Good Job</h3>
                  <p className="text-[16px] leading-[26px] text-gray-700 mb-8">
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae"
                  </p>
                  {/* Star Rating - 4 stars */}
                  <div className="flex gap-1 mb-8">
                     {[...Array(4)].map((_, i) => (
                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                {/* User Profile */}
                   <div className="flex items-center gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <img
                    src="/images/realestatepro/avatar2.jpg"
                    alt="Albert Flores profile picture"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[16px] leading-[24px] font-semibold text-gray-900">Albert Flores</h4>
                    <p className="text-[14px] leading-[20px] text-gray-600">Designer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 rounded-[24px] p-6 sm:p-8 h-[380px] sm:h-[400px] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-bold text-gray-900 mb-6">Perfect</h3>
                  <p className="text-[16px] leading-[26px] text-gray-700 mb-8">
                    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo"
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-8">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* User Profile */}
                   <div className="flex items-center gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <img
                    src="/images/realestatepro/avatar3.jpg"
                    alt="Robert Fox profile picture"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[16px] leading-[24px] font-semibold text-gray-900">Robert Fox</h4>
                    <p className="text-[14px] leading-[20px] text-gray-600">Developer</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="  bg-[#EB675312]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Content */}
             <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 animate-fade-in-up">
               <div className="space-y-4 sm:space-y-6">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
                   Get Your Dream House
                 </h2>
                 <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                 </p>
               </div>
               
               {/* CTA Button */}
               <motion.button 
                 className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg animate-fade-in-up animation-delay-600"
                 {...getAnimationProps({
                   whileHover: { 
                     scale: 1.05, 
                     backgroundColor: "#1f2937",
                     boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                   },
                   whileTap: { scale: 0.95 },
                   transition: { duration: 0.2, ease: "easeOut" }
                 })}
               >
                 Get Started
                 <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                 </svg>
               </motion.button>
             </div>

             {/* Image */}
             <div className="relative order-1 lg:order-2 animate-fade-in-up animation-delay-300">
               <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                 <motion.img
                   src="/images/realestatepro/cta.png"
                   alt="Modern architectural building with blue glass facades representing dream house"
                   className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
                   {...getAnimationProps({
                     initial: { opacity: 0, scale: 1.1 },
                     animate: { opacity: 1, scale: 1 },
                     transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
                   })}
                   loading="lazy"
                 />
                 {/* Overlay for better image quality */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent hover:from-black/5 transition-all duration-500"></div>
               </div>
             </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            
            {/* Logo and Contact Section */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="/images/realestatepro/logo.png" 
                  alt="RealEstate Pro Logo" 
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                />
                <span className="text-xl font-bold">RealEstate Pro</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm mb-2">Total Free Customer Care</p>
                  <p className="text-white font-semibold">+(088) 123 456 789</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-2">Live Support?</p>
                  <p className="text-white font-semibold">hi@homez.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-6">
              <h3 className="text-lg sm:text-xl font-bold">Keep Yourself Up to Date</h3>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Apps Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Apps</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div>
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="font-semibold text-sm">Apple Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="font-semibold text-sm">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Popular Search Section */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Popular Search</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Apartment for Sale</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Apartment for Rent</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Offices for Sale</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Offices for Rent</a>
              </div>
            </div>
          </div>

          {/* Secondary Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800">
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Terms of Use</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Pricing Plans</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Services</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">FAQs</a>
              </div>
            </div>

            {/* Discovery */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Discovery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Chicago</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Los Angeles</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">New Jersey</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">New York</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">California</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold">Follow us on social media</h3>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">© Homez - All rights reserved</p>
            <div className="flex gap-4 sm:gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  )
}