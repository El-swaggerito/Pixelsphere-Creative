"use client";
import { EdtechNavbar, EdtechFooter, AboutHeroSection, TestimonialsSection, BestCourseSection } from "@/components/edtech-platform";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EdtechAboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <EdtechNavbar />
        <main className="flex-grow">
          <AboutHeroSection />
          
          {/* Grow with EdTech LMS Section */}
          <section id="grow-with-edtech" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <motion.div 
                className="flex flex-col md:flex-row items-center gap-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Left side - Image */}
                <motion.div className="w-full md:w-1/2" variants={itemVariants}>
                  <div className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                      src="/images/edtech-project/grow.png"
                      alt="Woman with laptop and education icons"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
                
                {/* Right side - Content */}
                <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariants}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                    Grow us your skill<br />
                    with EdTech LMS
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      At EdTech, we believe education should be engaging, inclusive, 
                      and accessible to all. Our platform was built by educators, 
                      technologists, and learners who understand the challenges of 
                      traditional learning. From AI-powered course recommendations to 
                      interactive tools for teachers, we're bridging the gap between 
                      learning and results.
                    </p>
                    <p>
                      Whether you're a school administrator, corporate trainer, or self-
                      paced learner—our platform adapts to your goals, your pace, and 
                      your growth.
                    </p>
                  </div>
                  <motion.button
                    className="bg-[#2E7D32] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Benefits</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Why choose our EdTech platform? Because learning should be more than just clicking through slides.
                </p>
              </motion.div>

              <div className="flex justify-between items-center mb-4">
                <div></div>
                <motion.a 
                  href="#" 
                  className="text-sm font-medium text-gray-700 hover:text-[#2E7D32] transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  View All
                </motion.a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 01 */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">01</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert-Led Courses</h4>
                  <p className="text-gray-600 mb-6">Learn from top instructors with hands-on industry experience.</p>
                  <div className="flex justify-end">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="text-[#2E7D32]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Card 02 */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">02</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Flexible Learning</h4>
                  <p className="text-gray-600 mb-6">Study at your pace — anytime, anywhere.</p>
                  <div className="flex justify-end">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="text-[#2E7D32]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Card 03 */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">03</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Diverse Course Offerings</h4>
                  <p className="text-gray-600 mb-6">Gain practical knowledge that prepares you for real opportunities.</p>
                  <div className="flex justify-end">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="text-[#2E7D32]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Card 04 */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">04</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Career-Ready Skills</h4>
                  <p className="text-gray-600 mb-6">Earn proof of your progress and boost your resume.</p>
                  <div className="flex justify-end">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="text-[#2E7D32]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Card 05 */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">05</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Certifications</h4>
                  <p className="text-gray-600 mb-6">Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                  <div className="flex justify-end">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="text-[#2E7D32]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Card 06 */}
                <motion.div 
                  className="bg-white p-8 rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">06</h3>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Interactive Learning Environment</h4>
                  <p className="text-gray-600 mb-6">Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
                  <div className="flex justify-end">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="text-[#2E7D32]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <TestimonialsSection />

          <section id="best-courses">
            <BestCourseSection/>
          </section>
        </main>
        <EdtechFooter />
      </div>
    </PageTransition>
  );
}