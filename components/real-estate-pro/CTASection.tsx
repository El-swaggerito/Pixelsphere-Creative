'use client'

import AnimatedSection from '@/components/AnimatedSection'
import { motion } from 'framer-motion'

type CTASectionProps = {
  getAnimationProps: (baseProps: any) => any
}

export default function CTASection({ getAnimationProps }: CTASectionProps) {
  return (
    <AnimatedSection>
      <section className="bg-[#EB675312] py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 animate-fade-in-up">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-200">
                  Get Your Dream House
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
                  Discover beautiful properties tailored to your lifestyle and make your dream a reality.
                </p>
              </div>

              {/* CTA Button */}
              <motion.a
                href="/real-estate-pro/listings"
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
              </motion.a>
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
  )
}
