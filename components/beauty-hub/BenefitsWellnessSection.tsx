import { motion } from 'framer-motion'

export function BenefitsWellnessSection() {
  return (
    <section className="benefits-wellness-section py-20 lg:py-32 bg-[#F8F6F3] relative overflow-hidden" aria-labelledby="benefits-title">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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

      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#2D5A3D] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-[#8B4513] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#2D5A3D] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-[#8B4513] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </section>
  )
}
