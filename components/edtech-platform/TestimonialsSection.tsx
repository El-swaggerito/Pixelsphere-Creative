"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  return (
          <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div 
              className="flex items-start justify-between mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-2xl">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-montserrat mb-4">
                  Our Testimonials
                </h2>
                <p className="text-gray-600 font-montserrat text-lg leading-relaxed">
                  Join thousands of satisfied learners and educators who trust our platform to deliver real results. Your success story could be next!
                </p>
              </div>
              <motion.a
                href="#"
                className="text-gray-900 hover:text-green-600 font-semibold font-montserrat transition-colors duration-200 hidden md:block mt-2"
                whileHover={{ x: 5 }}
              >
                View All
              </motion.a>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Sarah L Testimonial */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <p className="text-gray-700 leading-relaxed mb-8 font-montserrat">
                  The course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/edtech-project/sarah.png"
                        alt="Sarah L"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-montserrat">Sarah L</h4>
                    </div>
                  </div>
                  <motion.button
                    className="text-gray-600 hover:text-green-600 font-medium font-montserrat transition-colors duration-200"
                    whileHover={{ x: 3 }}
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </motion.div>

              {/* Jason M Testimonial */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <p className="text-gray-700 leading-relaxed mb-8 font-montserrat">
                  The course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/edtech-project/jason.png"
                        alt="Jason M"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-montserrat">Jason M</h4>
                    </div>
                  </div>
                  <motion.button
                    className="text-gray-600 hover:text-green-600 font-medium font-montserrat transition-colors duration-200"
                    whileHover={{ x: 3 }}
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </motion.div>

              {/* Emily R Testimonial */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <p className="text-gray-700 leading-relaxed mb-8 font-montserrat">
                  The development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/edtech-project/emily.png"
                        alt="Emily R"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-montserrat">Emily R</h4>
                    </div>
                  </div>
                  <motion.button
                    className="text-gray-600 hover:text-green-600 font-medium font-montserrat transition-colors duration-200"
                    whileHover={{ x: 3 }}
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </motion.div>

              {/* Michael K Testimonial */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                <p className="text-gray-700 leading-relaxed mb-8 font-montserrat">
                  I enrolled in the course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/images/edtech-project/michael.png"
                        alt="Michael K"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 font-montserrat">Michael K</h4>
                    </div>
                  </div>
                  <motion.button
                    className="text-gray-600 hover:text-green-600 font-medium font-montserrat transition-colors duration-200"
                    whileHover={{ x: 3 }}
                  >
                    Read Full Story
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Mobile View All Link */}
            <motion.div 
              className="text-center mt-8 md:hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a
                href="#"
                className="text-gray-900 hover:text-green-600 font-semibold font-montserrat transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                View All
              </motion.a>
            </motion.div>
          </div>
        </section>
  );
}