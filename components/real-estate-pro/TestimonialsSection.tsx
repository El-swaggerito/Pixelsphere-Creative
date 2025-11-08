'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function TestimonialsSection() {
  return (
    <AnimatedSection>
      <section className="py-[120px] bg-[#F7F7F7]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-[80px]">
            <h2 className="text-[48px] leading-[58px] font-bold text-gray-900 mb-4 tracking-[-0.02em]">
              People Love Living with Real estate pro
            </h2>
            <p className="text-[18px] leading-[28px] text-gray-600 font-normal">
              Find your next home in the most sought-after locations.
            </p>
          </div>

          {/* Testimonials Container */}
          <div className="relative">
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-[24px] p-6 sm:p-8 h-[380px] sm:h-[400px] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-bold text-gray-900 mb-6">Great Work</h3>
                  <p className="text-[16px] leading-[26px] text-gray-700 mb-8">
                  At truly excellent standards, they delivered beyond expectations and maintained professionalism throughout.
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* User Profile */}
                 <div className="flex items-center gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <img
                    src="/images/realestatepro/avatar1.jpg"
                    alt="Ali Tufan profile picture"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[16px] leading-[24px] font-semibold text-gray-900">Ali Tufan</h4>
                    <p className="text-[14px] leading-[20px] text-gray-600">Marketing</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-[24px] p-6 sm:p-8 h-[380px] sm:h-[400px] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-bold text-gray-900 mb-6">Good Job</h3>
                  <p className="text-[16px] leading-[26px] text-gray-700 mb-8">
        They handled everything efficiently and with great attention to detail. I’m very satisfied with the results.
                  </p>
                  {/* Star Rating - 4 stars */}
                  <div className="flex gap-1 mb-8">
                     {[...Array(4)].map((_, i) => (
                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                {/* User Profile */}
                   <div className="flex items-center gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <img
                    src="/images/realestatepro/avatar2.jpg"
                    alt="Albert Flores profile picture"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[16px] leading-[24px] font-semibold text-gray-900">Albert Flores</h4>
                    <p className="text-[14px] leading-[20px] text-gray-600">Designer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 rounded-[24px] p-6 sm:p-8 h-[380px] sm:h-[400px] flex flex-col justify-between group hover:shadow-lg transition-all duration-300">
                <div>
                  <h3 className="text-[24px] leading-[32px] font-bold text-gray-900 mb-6">Perfect</h3>
            
                  <p className="text-[16px] leading-[26px] text-gray-700 mb-8">
            The process was smooth and stress-free. Their expertise made everything simple and successful.
                  </p>
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-8">
                     {[...Array(5)].map((_, i) => (
                       <svg key={i} className="w-5 h-5 text-yellow-400 fill-current transform transition-transform duration-200 hover:scale-110" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* User Profile */}
                   <div className="flex items-center gap-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                  <img
                    src="/images/realestatepro/avatar3.jpg"
                    alt="Robert Fox profile picture"
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-[16px] leading-[24px] font-semibold text-gray-900">Robert Fox</h4>
                    <p className="text-[14px] leading-[20px] text-gray-600">Developer</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}