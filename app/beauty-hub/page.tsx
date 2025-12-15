'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/beauty-hub/Navbar'
import { Footer } from '@/components/beauty-hub/Footer'
import { BenefitsWellnessSection, BeautySerenitySection, BenefitsWellnessSectionTwo, CustomerTestimonialSection } from '@/components/beauty-hub'
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

        <BenefitsWellnessSection />

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
                  <Link 
                    href="/beauty-hub/products#products-heading"
                    className="view-all-btn bg-[#722F37] hover:bg-[#5A252A] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium text-sm lg:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#722F37] focus:ring-opacity-30"
                    aria-label="View all products"
                  >
                    View All
                  </Link>
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

        <BeautySerenitySection />

        <BenefitsWellnessSectionTwo />

        <CustomerTestimonialSection />
      </main>
      <Footer />
    </div>
  )
}
