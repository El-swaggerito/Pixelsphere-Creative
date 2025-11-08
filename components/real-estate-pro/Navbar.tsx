'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

type NavbarProps = {
  isMobileMenuOpen: boolean
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

export default function Navbar({ isMobileMenuOpen, toggleMobileMenu, closeMobileMenu }: NavbarProps) {
  const shouldReduceMotion = useReducedMotion()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
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
        <Link href="/real-estate-pro" className="text-white hover:text-gray-200 transition-colors font-medium text-sm xl:text-base">Home</Link>
        <Link href="/real-estate-pro/about" className="text-white hover:text-gray-200 transition-colors font-medium text-sm xl:text-base">About</Link>
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
      <motion.button 
        className="md:hidden text-white relative z-50"
        onClick={toggleMobileMenu}
        whileTap={{ scale: 0.95 }}
        aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        <motion.div
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { rotate: 45 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          {isMobileMenuOpen ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <motion.div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, visibility: "visible" },
          closed: { opacity: 0, visibility: "hidden" }
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 0 }
          }}
          onClick={closeMobileMenu}
        />
        {/* Menu Panel */}
        <motion.div
          className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
          variants={{
            open: { x: 0 },
            closed: { x: "100%" }
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="flex flex-col h-full">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center">
                <Image
                  src="/images/realestatepro/logo.png"
                  alt="Real Estate Pro Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  quality={95}
                />
              </div>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 px-6 py-8" role="navigation" aria-label="Mobile navigation menu">
              <div className="space-y-6">
                <motion.a
                  href="/real-estate-pro"
                  className="block text-gray-900 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 font-medium text-lg transition-colors"
                  onClick={closeMobileMenu}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  Home
                </motion.a>
                <motion.div
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/real-estate-pro/about"
                    className="block text-gray-900 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 font-medium text-lg transition-colors"
                    onClick={closeMobileMenu}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    About
                  </Link>
                </motion.div>

                {/* Properties Submenu */}
                <div className="space-y-3" role="group" aria-labelledby="properties-heading">
                  <span id="properties-heading" className="block text-gray-900 font-medium text-lg">Properties</span>
                  <div className="pl-4 space-y-3">
                    <motion.a
                      href="#"
                      className="block text-gray-600 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 font-medium transition-colors"
                      onClick={closeMobileMenu}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                      For Sale
                    </motion.a>
                    <motion.a
                      href="#"
                      className="block text-gray-600 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 font-medium transition-colors"
                      onClick={closeMobileMenu}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                      For Rent
                    </motion.a>
                    <motion.a
                      href="#"
                      className="block text-gray-600 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 font-medium transition-colors"
                      onClick={closeMobileMenu}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                      Commercial
                    </motion.a>
                  </div>
                </div>

                <motion.a
                  href="#"
                  className="block text-gray-900 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 font-medium text-lg transition-colors"
                  onClick={closeMobileMenu}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  Services
                </motion.a>
                <motion.a
                  href="#"
                  className="block text-gray-900 hover:text-orange-500 focus:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md px-2 py-1 font-medium text-lg transition-colors"
                  onClick={closeMobileMenu}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  Contact
                </motion.a>
              </div>
            </nav>

            {/* Menu Footer */}
            <div className="p-6 border-t border-gray-200">
              <motion.button
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
                onClick={closeMobileMenu}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                tabIndex={isMobileMenuOpen ? 0 : -1}
                aria-label="Search for properties"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Properties
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  )
}