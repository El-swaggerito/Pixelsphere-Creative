'use client'

import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState, FormEvent } from 'react'
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
                Meet the Real Estate Pro Team
              </motion.h1>
              <motion.p
                className="text-white/85 text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl"
                {...getAnimationProps({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 } })}
              >
                Professional. Passionate. Proven.
              </motion.p>
            </div>
          </AnimatedSection>
        </div>

        {/* Agents Section */}
        <AnimatedSection>
          <section aria-labelledby="agents-heading" className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 id="agents-heading" className="text-[#1F2937] font-extrabold tracking-[-0.02em] text-[28px] sm:text-[32px] leading-tight">Agents</h2>
                <div className="hidden sm:flex items-center gap-3" aria-label="Sort options">
                  <button type="button" className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors" aria-haspopup="listbox" aria-expanded="false">
                    <span>Most popular</span>
                    <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>

              {/* Search */}
              <motion.form
                role="search"
                aria-label="Agent search"
                className="flex items-center gap-3 mb-8"
                {...getAnimationProps({ initial:{opacity:0,y:8}, animate:{opacity:1,y:0}, transition:{duration:0.4}})}
                onSubmit={(e: FormEvent<HTMLFormElement>)=>{
                  try {
                    e.preventDefault()
                    const form = e.currentTarget
                    const data = new FormData(form)
                    const q = String(data.get('q') ?? '')
                    // placeholder handler
                    console.debug('Search agent:', q)
                  } catch (err) {
                    console.error('Agent search submit failed:', err)
                  }
                }}
              >
                <label htmlFor="agent-q" className="sr-only">Search agents</label>
                <input id="agent-q" name="q" placeholder="Placeholder" className="flex-1 min-w-0 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300" />
                <button type="submit" className="h-[42px] px-5 rounded-lg bg-[#EB6753] text-white text-sm font-semibold hover:bg-[#d65948] transition-colors">Search</button>
              </motion.form>

              {/* Grid of agent cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map((i)=> (
                  <motion.article 
                    key={i} 
                    role="article" 
                    tabIndex={0}
                    aria-label="Agent card"
                    className="relative bg-[#F5F5F7] rounded-2xl shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#EB6753]"
                    onKeyDown={(e: KeyboardEvent)=>{ if(e.key==='Enter'){ console.debug('Agent card focused') } }}
                    {...getAnimationProps({ initial:{opacity:0,y:8}, animate:{opacity:1,y:0}, transition:{duration:0.4, delay:i*0.03}})}
                  >
                    {/* Image */}
                    <figure className="relative aspect-[4/5]">
                      <Image
                        src="/images/realestatepro/agent.png"
                        alt="Portrait of real estate agent holding a folder"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={i<=3}
                      />
                      <figcaption className="sr-only">Agent profile picture</figcaption>

                      {/* Overlay Info Panel */}
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[calc(100%-2rem)] bg-white rounded-xl shadow-sm border border-gray-100 px-5 py-4"
                        aria-label="Agent details"
                      >
                        <h3 className="text-gray-900 font-semibold text-[18px] leading-6 tracking-[-0.01em]">Rachel Dan</h3>
                        <p className="mt-3 text-gray-600 text-sm">Agent License:  090-0348-8346</p>
                        <p className="mt-2 text-gray-600 text-sm">Mobile:(559) 392-5009</p>
                      </div>
                    </figure>
                  </motion.article>
                ))}
              </div>

              {/* View More */}
              <div className="mt-8 flex justify-center">
                <button type="button" className="group inline-flex items-center gap-2 bg-[#EB6753] hover:bg-[#d65948] text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors" onClick={()=>console.debug('View more agents')}> 
                  View More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </section>
        </AnimatedSection>

      


        <TestimonialsSection/>

        <CTASection getAnimationProps={getAnimationProps}/>



        {/* Footer */}
        <Footer />
      </div>
    </PageTransition>
  )
}