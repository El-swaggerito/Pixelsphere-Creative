import Image from 'next/image'
import { motion } from 'framer-motion'

export function CustomerTestimonialSection() {
  return (
    <section className="customer-testimonial-section py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            className="testimonial-product-container relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
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

          <motion.div 
            className="testimonial-content relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="absolute -top-8 -left-4 lg:-left-8">
              <svg width="120" height="90" viewBox="0 0 120 90" className="text-[#4ADE80] opacity-90">
                <path d="M0 45C0 20.1 20.1 0 45 0C69.9 0 90 20.1 90 45C90 69.9 69.9 90 45 90C20.1 90 0 69.9 0 45Z" fill="currentColor" fillOpacity="0.1"/>
                <path d="M15 35C15 25 23 17 33 17C43 17 51 25 51 35C51 45 43 53 33 53H15V35Z" fill="currentColor"/>
                <path d="M69 35C69 25 77 17 87 17C97 17 105 25 105 35C105 45 97 53 87 53H69V35Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="relative z-10 space-y-8">
              <blockquote className="text-xl lg:text-2xl xl:text-3xl leading-relaxed text-[#2D2D2D] font-light">
                "Dang Beauty is my monthly escape. The facial treatments are heavenly, 
                and the environment is so soothing!"
              </blockquote>
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
  )
}
