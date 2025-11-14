import { motion } from 'framer-motion'

export function BenefitsWellnessSectionTwo() {
  return (
    <section className="benefits-wellness-section py-16 lg:py-24 bg-gradient-to-br from-[#F8F9FA] to-[#F1F3F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="wellness-products-grid">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
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
  )
}
