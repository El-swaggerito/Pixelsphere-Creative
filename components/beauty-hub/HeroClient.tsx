'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function HeroClient() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="min-h-screen bg-[#F5F3F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.p 
                className="text-[#8B4513] text-lg lg:text-xl font-light tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                The Art of Healing Through
              </motion.p>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#8B4513] leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Beauty
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p 
              className="text-[#8B4513] text-base lg:text-lg leading-relaxed max-w-lg font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              At Dang Beauty, we believe that true beauty comes from within and caring for 
              yourself is not a luxury, but a lifestyle. From therapeutic massages and facials to 
              beauty treatments and wellness rituals, we are your sanctuary for rejuvenation 
              and self-care.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="bg-[#2D5A3D] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-[#234A32] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Book Appointment
              </button>
              <button className="border-2 border-[#2D5A3D] text-[#2D5A3D] px-8 py-4 rounded-full font-medium text-lg hover:bg-[#2D5A3D] hover:text-white transition-all duration-300 transform hover:scale-105">
                View Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8E4DF] to-[#F5F3F0] rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-[#D4CFC7] to-[#E8E4DF] rounded-3xl transform -rotate-2"></div>
              
              {/* Main hero image */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/beautyhub-project/hero-image.png"
                  alt="Beautiful woman with jade facial tools enjoying a relaxing beauty treatment"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                
                {/* Overlay gradient for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-[#2D5A3D] rounded-full opacity-20"
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#8B4513] rounded-full opacity-15"
                animate={{ 
                  y: [0, 10, 0],
                  scale: [1, 0.95, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center space-y-2 text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-300 group"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-light tracking-wide">Discover More</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </button>
      </motion.div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#2D5A3D] rounded-full"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#8B4513] rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#2D5A3D] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#8B4513] rounded-full"></div>
      </div>
    </section>
  )
}