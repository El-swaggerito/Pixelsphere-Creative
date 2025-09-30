"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AboutSection,
  HopeFoundationNavbar,
} from "@/components/hope-foundation";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { DonateSection } from "@/components/hope-foundation";
import { HopeFoundationFooter } from "@/components/hope-foundation";

export default function HopeFoundationAboutPage() {
  // Animation variants
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
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "Movement, sans-serif" }}
      >
        {/* Navigation */}
        <HopeFoundationNavbar />

        {/* Hero Section */}
        <AnimatedSection>
          <section
            id="about-hero"
            className="relative min-h-[80vh] flex items-center overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hopefoundation-project/aboutusbg.png"
                alt="Hope Foundation About Us Background"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle overlay for text visibility */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
                aria-hidden="true"
              ></div>
            </div>

            {/* Hero Content - Left Aligned */}
            <motion.div
              className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center min-h-[80vh]">
                <div className="w-full lg:w-1/2 xl:w-2/5">
                  <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    variants={itemVariants}
                  >
                    ABOUT US
                  </motion.h1>

                  <motion.div className="mb-4" variants={itemVariants}>
                    {/* Breadcrumb Navigation */}
                    <nav
                      aria-label="Breadcrumb"
                      className="flex items-center space-x-2 text-sm md:text-base"
                    >
                      <Link
                        href="/hope-foundation"
                        className="text-white hover:text-yellow-400 transition-colors duration-200"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        Home
                      </Link>
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                      <span
                        className="text-yellow-400"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        About Us
                      </span>
                    </nav>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Additional content sections can be added here */}
        <AboutSection />

        {/* Future Section */}
        <AnimatedSection>
          <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Content */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Main Heading */}
                  <motion.h2
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    THE FUTURE IS IN OUR HANDS.
                  </motion.h2>

                  {/* Mission and Vision Grid */}
                  <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {/* Our Mission */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3
                          className="text-xl font-semibold text-yellow-500"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Our Mission
                        </h3>
                      </div>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                        Sed Diam
                      </p>
                    </div>

                    {/* Our Vision */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <h3
                          className="text-xl font-semibold text-yellow-500"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Our Vision
                        </h3>
                      </div>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
                        Sed Diam
                      </p>
                    </div>
                  </motion.div>

                  {/* Progress Bars */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {/* Donations Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span
                          className="text-black font-medium"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Donations
                        </span>
                        <span
                          className="text-black font-medium"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          75%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-yellow-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "75%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        />
                      </div>
                    </div>

                    {/* Medical Help Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span
                          className="text-black font-medium"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Medical Help
                        </span>
                        <span
                          className="text-black font-medium"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          90%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-yellow-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: "90%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 1.0 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Column - Images */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Main Image Container */}
                  <div className="relative">
                    {/* Large Main Image */}
                    <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/hopefoundation-project/about-img-2.jpg.png"
                        alt="Hope Foundation Community Impact"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Smaller Overlapping Image */}
                    <motion.div
                      className="absolute -top-8 -left-8 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Image
                        src="/images/hopefoundation-project/about-img-1.jpg.png"
                        alt="Community Children"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Impact Section */}
        <AnimatedSection>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4">
                  OUR IMPACT
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  FIGHTING FOR A BETTER TOMORROW
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Turning Actions into Results Your support is making real,
                  measurable change. This is just the beginning. Every
                  contribution, whether big or small, fuels the momentum for a
                  better tomorrow.
                </p>
              </motion.div>

              {/* Impact Cards Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Clean Water Card */}
                <motion.div
                  className="bg-blue-900 text-white p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    CLEAN WATER TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>

                {/* Free Education Card */}
                <motion.div
                  className="bg-red-700 text-white p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    FREE EDUCATION TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>

                {/* Free Healthcare Card */}
                <motion.div
                  className="bg-orange-600 text-white p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    FREE HEALTHCARE TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>

                {/* Relief Care Card */}
                <motion.div
                  className="bg-yellow-200 text-gray-900 p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    RELIEF CARE TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>


                {/* Our Approach Section */}
        <AnimatedSection>
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Column - Text Content and First Image */}
                <div className="space-y-8">
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                      OUR APPROACH
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Hope Foundation with local communities and organizations to develop grassroots campaigns 
                      that tackle environmental and social issues head-on. Through training, resources, and 
                      financial support, we equip communities to lead projects that restore humanity, promote 
                      sustainability, and improve lives.
                    </p>
                  </motion.div>

                  {/* First Image - Meeting/Discussion (below text) */}
                  <motion.div
                    className="relative h-64 rounded-lg overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Image
                      src="/images/hopefoundation-project/approach1.png"
                      alt="Community meeting and collaboration"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Right Column - Second Image */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Second Image - Gardening/Planting */}
                  <div className="relative h-80 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/hopefoundation-project/approach2.png"
                      alt="Community gardening and environmental work"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>


          <AnimatedSection>
            <DonateSection />
          </AnimatedSection>

          <AnimatedSection>
            <HopeFoundationFooter />
          </AnimatedSection>
      </div>
    </PageTransition>
  );
}
