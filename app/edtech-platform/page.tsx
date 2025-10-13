"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  BestCourseSection,
  EdtechFooter,
  EdtechNavbar,
  TestimonialsSection,
} from "@/components/edtech-platform";

export default function EdTechPlatformPage() {
  const router = useRouter();
  const navigateToCoursesAll = () => {
    router.push("/edtech-platform/courses#all-courses");
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Prevent layout shifts during initial load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
        className="bg-white font-montserrat overflow-x-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Navigation */}
        <EdtechNavbar />

        {/* Hero Section with Montserrat Font */}
        <section
          className="relative flex items-center justify-center"
          style={{
            minHeight: "100vh",
            paddingTop: "32px", // Account for fixed nav
            background:
              "linear-gradient(90deg, #2B5D2D 100%, #FFFFFF 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
            contain: "layout style paint",
          }}
        >
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16">
              {/* Left Column - Content */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                style={{ minHeight: "400px" }} // Prevent content jumping
              >
                {/* Main Heading with Montserrat */}
                <motion.h1
                  className="text-white leading-tight mb-8 font-montserrat"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)", // Responsive but stable
                    fontWeight: "700",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                    minHeight: "200px", // Reserve space to prevent shifts
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  Unlock Your
                  <br />
                  Potential Through
                  <br />
                  Learning 🎓
                </motion.h1>

                {/* Description with Montserrat */}
                <motion.p
                  className="text-white/90 mb-10 font-montserrat"
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "400",
                    lineHeight: "1.6",
                    maxWidth: "480px",
                    minHeight: "60px", // Prevent layout shift
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                >
                  Join thousands of learners gaining real-world
                  <br />
                  skills for a better future.
                </motion.p>

                {/* CTA Button with Montserrat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                  style={{ minHeight: "56px" }} // Reserve button space
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      onClick={navigateToCoursesAll}
                      className="bg-white text-gray-900 hover:bg-gray-50 font-semibold font-montserrat rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center will-change-transform"
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        padding: "14px 28px",
                        borderRadius: "8px",
                      }}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Column - Image Grid */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                style={{ minHeight: "500px" }} // Stable container height
              >
                {/* White Container */}
                <div
                  className="bg-white rounded-3xl shadow-2xl mx-auto"
                  style={{
                    padding: "30px",
                    borderRadius: "10px",
                    maxWidth: "500px",
                    width: "100%",
                    aspectRatio: "1.2", // Maintain consistent aspect ratio
                    contain: "layout style",
                  }}
                >
                  {/* 3x2 Grid Layout */}
                  <div className="grid grid-cols-3 gap-2 h-full">
                    {/* Grid Images */}
                    {[
                      {
                        src: "/images/edtech-project/herogrid-1.png",
                        alt: "Student studying outdoors",
                      },
                      {
                        src: "/images/edtech-project/herogrid-2.png",
                        alt: "Study materials with STUDY text",
                      },
                      {
                        src: "/images/edtech-project/herogrid-3.png",
                        alt: "Children learning together",
                      },
                      {
                        src: "/images/edtech-project/herogrid-4.png",
                        alt: "Books with TEACH text",
                      },
                      {
                        src: "/images/edtech-project/herogrid-5.png",
                        alt: "Collaborative learning session",
                      },
                      {
                        src: "/images/edtech-project/herogrid-6.png",
                        alt: "Group study session",
                      },
                    ].map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-md bg-gray-100"
                        style={{
                          aspectRatio: "1",
                          contain: "layout style paint",
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                          opacity: isLoaded ? 1 : 0,
                          scale: isLoaded ? 1 : 0.9,
                        }}
                        transition={{
                          duration: 0.6,
                          delay: 1.0 + index * 0.1,
                          ease: "easeOut",
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 3} // Prioritize above-fold images
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Browse Top Category Section */}
        <section
          className="py-16 lg:py-24 bg-white"
          style={{ contain: "layout style" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ minHeight: "120px" }} // Reserve header space
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-montserrat">
                Browse top category
              </h2>
            </motion.div>

            {/* Category Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* General Category */}
              <motion.div
                className="bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      General
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      63,476 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Business Category */}
              <motion.div
                className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Business
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      52,822 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Finance & Accounting Category */}
              <motion.div
                className="bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Finance & Accounting
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      33,841 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* IT & Software Category */}
              <motion.div
                className="bg-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      IT & Software
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      22,649 Courses
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Second Row */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Personal Development Category */}
              <motion.div
                className="bg-orange-500 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center group-hover:bg-orange-300 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 font-montserrat">
                      Personal Development
                    </h3>
                    <p className="text-orange-100 text-sm font-montserrat">
                      20,126 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Office Productivity Category */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Office Productivity
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      13,932 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Marketing Category */}
              <motion.div
                className="bg-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Marketing
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      12,068 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Photography & Video Category */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Photography & Video
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      6,196 Courses
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Third Row */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.9,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Lifestyle Category */}
              <motion.div
                className="bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Lifestyle
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      2,736 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Design Category */}
              <motion.div
                className="bg-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Design
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      2,600 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Health & Fitness Category */}
              <motion.div
                className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Health & Fitness
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      1,678 Courses
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Music Category */}
              <motion.div
                className="bg-yellow-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">
                      Music
                    </h3>
                    <p className="text-gray-600 text-sm font-montserrat">
                      959 Courses
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* Our Courses Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="flex items-center justify-between mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-montserrat mb-2">
                  Our Courses
                </h2>
                <p className="text-gray-600 font-montserrat">
                  Choose from dozens of courses and start your journey in
                  minutes.
                </p>
              </div>
              <motion.a
                href="/edtech-platform/courses#all-courses"
                className="text-gray-900 hover:text-green-600 font-semibold font-montserrat transition-colors duration-200 hidden md:block"
                whileHover={{ x: 5 }}
                onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                  event.preventDefault();
                  navigateToCoursesAll();
                }}
              >
                View All
              </motion.a>
            </motion.div>

            {/* Courses Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* English Language Mastery Course */}
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/edtech-project/course-1.png"
                    alt="English Language Mastery Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 font-montserrat">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        4 Weeks
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Beginner
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">
                      By John Doe
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    English Language Mastery
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Read, write, and speak confidently.
                    <br />
                    Learn grammar, comprehension, writing skills, and how to
                    express yourself clearly in everyday and academic
                    situations.
                  </p>

                  <Button className="w-full bg-green-50 hover:bg-green-100 text-green-700 font-semibold font-montserrat border-0 rounded-lg py-3">
                    Get it Now
                  </Button>
                </div>
              </motion.div>

              {/* Mathematics for Real Life Course */}
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/edtech-project/course-2.png"
                    alt="Mathematics for Real Life Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 font-montserrat">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        6 Weeks
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Intermediate
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">
                      By Jane Doe
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    Mathematics for Real Life
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Solve problems with logic and ease.
                    <br />
                    Master basic arithmetic, algebra, geometry, and word
                    problems in a fun and understandable way.
                  </p>

                  <Button className="w-full bg-green-50 hover:bg-green-100 text-green-700 font-semibold font-montserrat border-0 rounded-lg py-3">
                    Get it Now
                  </Button>
                </div>
              </motion.div>

              {/* Basic Science Course */}
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/edtech-project/course-3.png"
                    alt="Basic Science Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 font-montserrat">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        8 Weeks
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Intermediate
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">
                      By David Brown
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    Basic Science
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Explore the wonders of the world around you.
                    <br />
                    Discover how plants grow, why the sky is blue, and how your
                    body works through interactive science lessons.
                  </p>

                  <Button className="w-full bg-green-50 hover:bg-green-100 text-green-700 font-semibold font-montserrat border-0 rounded-lg py-3">
                    Get it Now
                  </Button>
                </div>
              </motion.div>

              {/* Social Studies Course */}
              <motion.div
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/images/edtech-project/course-4.png"
                    alt="Social Studies Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 font-montserrat">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        10 Weeks
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Beginner
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">
                      By Sarah Thompson
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    Social Studies
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Understand the people, places, and systems around you.
                    <br />
                    Learn about your community, culture, government, and how to
                    be a responsible citizen.
                  </p>

                  <Button className="w-full bg-green-50 hover:bg-green-100 text-green-700 font-semibold font-montserrat border-0 rounded-lg py-3">
                    Get it Now
                  </Button>
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
                href="/edtech-platform/courses#all-courses"
                className="text-gray-900 hover:text-green-600 font-semibold font-montserrat transition-colors duration-200"
                whileHover={{ x: 5 }}
                onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                  event.preventDefault();
                  navigateToCoursesAll();
                }}
              >
                View All
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* We Always Ensure Best Course Section */}
        <BestCourseSection />

        {/* Our Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* Our Pricing Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-montserrat mb-6">
                Our Pricing
              </h2>
              <p className="text-gray-600 font-montserrat text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                We believe quality education should be affordable and accessible
                to all. That's why we offer flexible, value-packed plans for
                learners at every level.
              </p>

              {/* Monthly/Yearly Toggle */}
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
                  <div className="flex items-center">
                    <button className="px-6 py-2 text-sm font-medium text-white bg-green-600 rounded-md transition-all duration-200 font-montserrat">
                      Monthly
                    </button>
                    <button className="px-6 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-md transition-all duration-200 font-montserrat">
                      Yearly
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Free Plan */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block mb-6">
                    <h3 className="font-semibold font-montserrat">Free Plan</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 font-montserrat">
                      $0
                    </span>
                    <span className="text-gray-600 font-montserrat">
                      /month
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center font-montserrat">
                    Available Features
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Access to selected free courses.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Limited course materials and resources.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Basic community support.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        No certification upon completion.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Ad-supported platform.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-500 font-montserrat">
                        Access to exclusive Pro Plan community forums.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-500 font-montserrat">
                        Early access to new courses and updates.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button onClick={navigateToCoursesAll} className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-semibold font-montserrat rounded-lg transition-all duration-200">
                  Get Started
                </Button>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                }}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block mb-6">
                    <h3 className="font-semibold font-montserrat">Pro Plan</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 font-montserrat">
                      $79
                    </span>
                    <span className="text-gray-600 font-montserrat">
                      /month
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center font-montserrat">
                    Available Features
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Unlimited access to all courses.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Unlimited course materials and resources.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Priority support from instructors.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Course completion certificates.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Ad-free experience.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Access to exclusive Pro Plan community forums.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-montserrat">
                        Early access to new courses and updates.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button onClick={navigateToCoursesAll} className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-semibold font-montserrat rounded-lg transition-all duration-200">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section id="faq" className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left Column - Header */}
              <motion.div
                className="lg:sticky lg:top-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 font-montserrat mb-6 leading-tight">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 font-montserrat text-lg leading-relaxed">
                  Explore our eLearning platform's FAQ section for quick
                  solutions to common queries, ensuring a seamless learning
                  journey
                </p>
              </motion.div>

              {/* Right Column - FAQ Items */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* FAQ Item 1 */}
                <motion.div
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 font-medium font-montserrat">
                        Q:1
                      </span>
                      <span className="text-gray-900 font-medium font-montserrat">
                        How Many Courses Do I Get in Passive Journal?
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">
                        Answer
                      </span>
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </motion.div>

                {/* FAQ Item 2 */}
                <motion.div
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <button className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 font-medium font-montserrat">
                        Q:2
                      </span>
                      <span className="text-gray-900 font-medium font-montserrat">
                        How Many Courses Do I Get in Passive Journal?
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">
                        Answer
                      </span>
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </motion.div>

                {/* FAQ Item 3 */}
                <motion.div
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <button className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 font-medium font-montserrat">
                        Q:3
                      </span>
                      <span className="text-gray-900 font-medium font-montserrat">
                        How Many Courses Do I Get in Passive Journal?
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">
                        Answer
                      </span>
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </motion.div>

                {/* FAQ Item 4 */}
                <motion.div
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <button className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 font-medium font-montserrat">
                        Q:4
                      </span>
                      <span className="text-gray-900 font-medium font-montserrat">
                        How Many Courses Do I Get in Passive Journal?
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">
                        Answer
                      </span>
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </motion.div>

                {/* FAQ Item 5 */}
                <motion.div
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <button className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600 font-medium font-montserrat">
                        Q:5
                      </span>
                      <span className="text-gray-900 font-medium font-montserrat">
                        How Many Courses Do I Get in Passive Journal?
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">
                        Answer
                      </span>
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <EdtechFooter />
      </div>
    </PageTransition>
  );
}
