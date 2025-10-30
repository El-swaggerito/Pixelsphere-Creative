'use client'

import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/beauty-hub/Navbar'
import { Footer } from '@/components/beauty-hub/Footer'
import './beauty-hub.css'



export default function BeautyHubPage() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="min-h-screen bg-transparent beauty-hub-page" data-page="beauty-hub">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(249, 245, 239, 0.3) 0%, rgba(255, 228, 188, 0.3) 111.84%)' }}>
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
                    className="text-black text-xl lg:text-2xl font-light tracking-wide"
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
                  className="text-[#8B4513] text-base lg:text-lg leading-relaxed max-w-lg font-light font-inter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  At Dang Beauty, we believe that true beauty comes from within and caring for 
                  yourself is not a luxury, but a lifestyle. From therapeutic massages and facials to 
                  beauty treatments and wellness rituals, we are your sanctuary for rejuvenation 
                  and self-care.
                </motion.p>

             
              </motion.div>

              {/* Right Image */}
              <motion.div 
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[500px] xl:h-[600px]">
                  
                  {/* Main hero image */}
                  <div className="relative z-10 w-full h-full overflow-hidden">
                    <Image
                      src="/images/beautyhub-project/hero-image.png"
                      alt="Beautiful woman with jade facial tools enjoying a relaxing beauty treatment"
                      fill
                      className="object-cover object-center"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    
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

       

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-[#2D5A3D] rounded-full"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-[#8B4513] rounded-full"></div>
            <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#2D5A3D] rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#8B4513] rounded-full"></div>
          </div>
        </section>

        {/* Benefits of Wellness Section */}
        <section className="benefits-wellness-section py-20 lg:py-32 bg-[#F8F6F3] relative overflow-hidden" aria-labelledby="benefits-title">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16 lg:mb-20">
              <motion.h2 
                id="benefits-title"
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2D5A3D] mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Benefits of Wellness
              </motion.h2>
              <motion.p 
                className="text-lg lg:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                Unwind, recharge, and reveal your natural glow at Dang Beauty, where beauty meets serenity.
              </motion.p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Boost Confidence */}
              <motion.div 
                className="benefit-card group text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="benefit-icon-wrapper mb-8 mx-auto w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg 
                    className="w-10 h-10 lg:w-12 lg:h-12 text-[#2D5A3D] group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#2D5A3D] mb-4 group-hover:text-[#8B4513] transition-colors duration-300">
                  Boost Confidence
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm lg:text-base">
                  Taking time to care for yourself through spa treatments, meditation creates moments of calm in a stressful world.
                </p>
              </motion.div>

              {/* Improved Mental Health */}
              <motion.div 
                className="benefit-card group text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div className="benefit-icon-wrapper mb-8 mx-auto w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg 
                    className="w-10 h-10 lg:w-12 lg:h-12 text-[#2D5A3D] group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#2D5A3D] mb-4 group-hover:text-[#8B4513] transition-colors duration-300">
                  Improved Mental Health
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm lg:text-base">
                  Taking time to care for yourself through spa treatments, meditation creates moments of calm in a stressful world.
                </p>
              </motion.div>

              {/* Long-term Health */}
              <motion.div 
                className="benefit-card group text-center md:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="benefit-icon-wrapper mb-8 mx-auto w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg 
                    className="w-10 h-10 lg:w-12 lg:h-12 text-[#2D5A3D] group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[#2D5A3D] mb-4 group-hover:text-[#8B4513] transition-colors duration-300">
                  Long-term Health
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm lg:text-base">
                  Taking time to care for yourself through spa treatments, meditation creates moments of calm in a stressful world.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-[#2D5A3D] rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-[#8B4513] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#2D5A3D] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#8B4513] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </section>

        {/* Our Latest Products Section */}
        <section className="latest-products-section py-20 lg:py-32 bg-white relative overflow-hidden" aria-labelledby="products-title">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* First Grid - Text Content and Button */}
              <motion.div 
                className="space-y-8 flex flex-col justify-center md:col-span-1 lg:col-span-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="space-y-6">
                  <motion.h2 
                    id="products-title"
                    className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D2D2D] leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Our Latest Products
                  </motion.h2>
                  
                  <motion.div 
                    className="space-y-4 text-[#6B7280]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    <p className="text-sm lg:text-base leading-relaxed">
                      Wide range of organic products and all are handpicker and for you to see.
                    </p>
                    <p className="text-xs lg:text-sm leading-relaxed">
                      In here, we show some our new products for you. For more detail you can click the link below to see all our latest products
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <button 
                    className="view-all-btn bg-[#722F37] hover:bg-[#5A252A] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#722F37] focus:ring-opacity-30"
                    aria-label="View all products"
                  >
                    View All
                  </button>
                </motion.div>
              </motion.div>

              {/* Product 1 - GlowFix Vitamin C Serum */}
              <motion.div 
                className="product-card group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="product-image-wrapper mb-6 relative overflow-hidden rounded-2xl  bg-[#F5F5F5] aspect-square">
                  <img 
                    src="/images/beautyhub-project/latestproduct-1.png"
                    alt="GlowFix Vitamin C Serum"
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="product-info text-center space-y-2">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#2D2D2D] group-hover:text-[#722F37] transition-colors duration-300">
                    GlowFix Vitamin C Serum
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Body Cologne
                  </p>
                </div>
              </motion.div>

              {/* Product 2 - Eau de Parfume */}
              <motion.div 
                className="product-card group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div className="product-image-wrapper mb-6 relative overflow-hidden rounded-2xl bg-[#A8C5E8] aspect-square">
                  <img 
                    src="/images/beautyhub-project/latestproduct-2.png"
                    alt="Eau de Parfume"
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="product-info text-center space-y-2">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#2D2D2D] group-hover:text-[#722F37] transition-colors duration-300">
                    Eau de Parfume
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Rose Parfume
                  </p>
                </div>
              </motion.div>

              {/* Product 3 - SilkTouch Body Polish Scrub */}
              <motion.div 
                className="product-card group cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="product-image-wrapper mb-6 relative overflow-hidden rounded-2xl bg-[#F5F5F5] aspect-square">
                  <img 
                    src="/images/beautyhub-project/latestproduct-3.png"
                    alt="SilkTouch Body Polish Scrub"
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="product-info text-center space-y-2">
                  <h3 className="text-lg lg:text-xl font-semibold text-[#2D2D2D] group-hover:text-[#722F37] transition-colors duration-300">
                    SilkTouch Body Polish Scrub
                  </h3>
                  <p className="text-[#6B7280] text-sm">
                    Body Oil Cleanser
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Where Beauty Meets Serenity Section */}
        <section className="beauty-serenity-section py-16 lg:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
              
              {/* Left Side - Image Grid */}
              <motion.div 
                className="image-grid-container relative"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="relative w-full h-[500px] lg:h-[600px]">
                  {/* Primary Image - Large */}
                  <motion.div 
                    className="primary-image-wrapper absolute top-0 left-0 w-[75%] h-[70%] z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src="/images/beautyhub-project/beauty-1.jpg"
                        alt="Woman enjoying spa treatment with face mask"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
                    </div>
                  </motion.div>

                  {/* Secondary Image - Smaller, positioned bottom right */}
                  <motion.div 
                    className="secondary-image-wrapper absolute bottom-0 right-0 w-[55%] h-[50%] z-20"
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                      <img 
                        src="/images/beautyhub-project/beauty-2.jpg"
                        alt="Woman applying skincare product"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                    </div>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div 
                    className="absolute top-8 right-8 w-16 h-16 bg-[#E8F5E8] rounded-full opacity-60 blur-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.6, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                  ></motion.div>
                  <motion.div 
                    className="absolute bottom-16 left-8 w-12 h-12 bg-[#F0E8F5] rounded-full opacity-50 blur-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 0.5, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div 
                className="content-area space-y-8"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              >
                {/* Main Heading */}
                <motion.h2 
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D2D2D] leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  Where Beauty Meets Serenity
                </motion.h2>

                {/* Description Paragraphs */}
                <div className="space-y-6">
                  <motion.p 
                    className="text-[#6B7280] text-base lg:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  >
                    At Dang Beauty, we believe that true beauty comes from within and caring for yourself is not a luxury, but a lifestyle.
                  </motion.p>

                  <motion.p 
                    className="text-[#6B7280] text-base lg:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  >
                    From therapeutic massages and facials to beauty treatments and wellness rituals, we are your sanctuary for rejuvenation and self-care.
                  </motion.p>
                </div>

                {/* Feature List */}
                <motion.div 
                  className="features-list space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                >
                  <div className="feature-item flex items-center space-x-3">
                    <div className="checkmark w-5 h-5 bg-[#4ADE80] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#2D2D2D] text-base lg:text-lg font-medium">Certified therapists & estheticians</span>
                  </div>

                  <div className="feature-item flex items-center space-x-3">
                    <div className="checkmark w-5 h-5 bg-[#4ADE80] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#2D2D2D] text-base lg:text-lg font-medium">100% natural skincare products</span>
                  </div>

                  <div className="feature-item flex items-center space-x-3">
                    <div className="checkmark w-5 h-5 bg-[#4ADE80] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-[#2D2D2D] text-base lg:text-lg font-medium">Relaxing, spa-like atmosphere</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits of Wellness Section */}
        <section className="benefits-wellness-section py-16 lg:py-24 bg-gradient-to-br from-[#F8F9FA] to-[#F1F3F4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D2D2D] mb-6">
                Benefits of Wellness
              </h2>
              <p className="text-[#6B7280] text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Unwind, recharge, and reveal your natural glow at Dang Beauty, where beauty meets serenity.
              </p>
            </motion.div>

            {/* Products Grid */}
            <div className="wellness-products-grid">
              {/* Top Row - Face and Body Facial */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
                {/* Face Facial Product */}
                <motion.div 
                  className="wellness-product-card group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                  <div className="product-image-container mb-8 relative">
                    <div className="aspect-square bg-gradient-to-br from-[#E8F5E8] to-[#F0F9F0] rounded-3xl p-8 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/beautyhub-project/face.png"
                        alt="Face Facial Treatment Product"
                        className="w-full h-full max-w-[280px] max-h-[280px] object-contain group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="product-info text-center space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#722F37] group-hover:text-[#5A252A] transition-colors duration-300">
                      Face Facial
                    </h3>
                    
                    <div className="price-container">
                      <span className="text-3xl lg:text-4xl font-bold text-[#4ADE80]">
                        75,00 USD
                      </span>
                    </div>
                    
                    <motion.button 
                      className="buy-button bg-[#722F37] hover:bg-[#5A252A] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#722F37] focus:ring-opacity-30 flex items-center justify-center gap-2 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Buy It
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Body Facial Product */}
                <motion.div 
                  className="wellness-product-card group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="product-image-container mb-8 relative">
                    <div className="aspect-square bg-gradient-to-br from-[#FFF7ED] to-[#FEF3E2] rounded-3xl p-8 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/beautyhub-project/body.png"
                        alt="Body Facial Treatment Product"
                        className="w-full h-full max-w-[280px] max-h-[280px] object-contain group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="product-info text-center space-y-6">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#722F37] group-hover:text-[#5A252A] transition-colors duration-300">
                      Body Facial
                    </h3>
                    
                    <div className="price-container">
                      <span className="text-3xl lg:text-4xl font-bold text-[#4ADE80]">
                        55,00 USD
                      </span>
                    </div>
                    
                    <motion.button 
                      className="buy-button bg-[#722F37] hover:bg-[#5A252A] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#722F37] focus:ring-opacity-30 flex items-center justify-center gap-2 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Buy It
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Bottom Row - Double Pack Package */}
              <div className="flex justify-center">
                <motion.div 
                  className="wellness-product-card group max-w-md w-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                >
                  <div className="product-info text-center space-y-8">
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#722F37] group-hover:text-[#5A252A] transition-colors duration-300">
                      Double Pack Package
                    </h3>
                    
                    <div className="price-container">
                      <span className="text-3xl lg:text-4xl font-bold text-[#4ADE80]">
                        100,00 USD
                      </span>
                    </div>
                    
                    <motion.button 
                      className="buy-button bg-[#722F37] hover:bg-[#5A252A] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#722F37] focus:ring-opacity-30 flex items-center justify-center gap-2 mx-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Buy It
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonial Section */}
        <section className="customer-testimonial-section py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Product Image with Decorative Elements */}
              <motion.div 
                className="testimonial-product-container relative order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Decorative Golden Leaves */}
                <div className="absolute -top-8 -left-8 w-20 h-20 opacity-80">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]">
                    <path d="M20 50 Q30 20, 50 30 Q70 20, 80 50 Q70 80, 50 70 Q30 80, 20 50 Z" fill="currentColor" />
                    <path d="M25 45 Q35 25, 50 35 Q65 25, 75 45" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-16 h-16 opacity-60">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#D4AF37]">
                    <path d="M30 50 Q40 30, 60 40 Q80 30, 90 50 Q80 70, 60 60 Q40 70, 30 50 Z" fill="currentColor" />
                  </svg>
                </div>

                {/* Product Image */}
                <div className="product-showcase relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="relative">
                    <Image
                      src="/images/beautyhub-project/cta.png"
                      alt="Vitamin E Moisture Cream"
                      width={400}
                      height={400}
                      className="w-full h-auto max-w-sm mx-auto object-contain"
                      priority
                    />
                    
                    {/* Product Label */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
                      <div className="text-sm font-medium text-[#722F37] mb-1">
                        THE BODY SHOP
                      </div>
                      <div className="text-xs text-gray-600 mb-1">
                        VITAMIN E
                      </div>
                      <div className="text-lg font-bold text-[#722F37]">
                        Vitamin E
                      </div>
                      <div className="text-sm font-semibold text-[#722F37]">
                        Moisture Cream
                      </div>
                      <div className="text-lg font-bold text-[#4ADE80] mt-2">
                        25,00 USD
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <motion.div 
                className="testimonial-content relative order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                {/* Large Quotation Marks */}
                <div className="absolute -top-8 -left-4 lg:-left-8">
                  <svg width="120" height="90" viewBox="0 0 120 90" className="text-[#4ADE80] opacity-90">
                    <path d="M0 45C0 20.1 20.1 0 45 0C69.9 0 90 20.1 90 45C90 69.9 69.9 90 45 90C20.1 90 0 69.9 0 45Z" fill="currentColor" fillOpacity="0.1"/>
                    <path d="M15 35C15 25 23 17 33 17C43 17 51 25 51 35C51 45 43 53 33 53H15V35Z" fill="currentColor"/>
                    <path d="M69 35C69 25 77 17 87 17C97 17 105 25 105 35C105 45 97 53 87 53H69V35Z" fill="currentColor"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <div className="relative z-10 space-y-8">
                  <blockquote className="text-xl lg:text-2xl xl:text-3xl leading-relaxed text-[#2D2D2D] font-light">
                    "Dang Beauty is my monthly escape. The facial treatments are heavenly, 
                    and the environment is so soothing!"
                  </blockquote>

                  {/* Customer Information */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#4ADE80] rounded-full"></div>
                      <div className="w-8 h-0.5 bg-[#4ADE80]"></div>
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-xl lg:text-2xl font-bold text-[#722F37]">
                        Anje Keizer
                      </h4>
                      <p className="text-lg text-[#6B7280] font-medium">
                        Ehya Cosmetics Customer
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}