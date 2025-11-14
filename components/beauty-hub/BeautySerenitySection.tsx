import { motion } from 'framer-motion'

export function BeautySerenitySection() {
  return (
    <section className="beauty-serenity-section py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          <motion.div 
            className="image-grid-container relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
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

          <motion.div 
            className="content-area space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <motion.h2 
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2D2D2D] leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              Where Beauty Meets Serenity
            </motion.h2>

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
  )
}
