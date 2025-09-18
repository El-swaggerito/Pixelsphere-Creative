"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, Menu, X } from "lucide-react";
import { edtechLearningPlatformProject } from "@/data/projects/edtech-learning-platform";

export default function EdTechPlatformPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="min-h-screen bg-white font-montserrat">
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="/images/edtech-project/logo_edtech.png"
                  alt="EdTech Platform Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </motion.div>

              {/* Desktop Navigation Links */}
              <motion.div
                className="hidden md:flex items-center space-x-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { name: "Home", href: "#", active: true },
                  { name: "Courses", href: "#", active: false },
                  { name: "About Us", href: "#", active: false },
                  { name: "Contact", href: "#", active: false },
                ].map((item, index) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`text-base font-medium font-montserrat transition-colors duration-200 relative ${
                        item.active
                          ? "text-green-600"
                          : "text-gray-700 hover:text-green-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Desktop Action Buttons */}
              <motion.div
                className="hidden md:flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-green-600 font-medium font-montserrat"
                >
                  Sign Up
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-medium font-montserrat">
                  Login
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 transition-colors duration-200"
                  whileTap={{ scale: 0.95 }}
                >
                  {!mobileMenuOpen ? (
                    <Menu className="h-6 w-6" />
                  ) : (
                    <X className="h-6 w-6" />
                  )}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden border-t border-gray-100 bg-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-4">
                {[
                  { name: "Home", href: "#" },
                  { name: "Courses", href: "#" },
                  { name: "About Us", href: "#" },
                  { name: "Contact", href: "#" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-green-600 font-medium font-montserrat transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-green-600 font-montserrat"
                  >
                    Sign Up
                  </Button>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-montserrat">
                    Login
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Hero Section with Montserrat Font */}
        <section 
          className="relative min-h-screen flex items-center pt-16 overflow-hidden"
          style={{
            background: 'linear-gradient(90deg, #2B5D2D 100%, #FFFFFF 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[85vh]">
              {/* Left Column - Content */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Main Heading with Montserrat */}
                <motion.h1
                  className="text-white leading-tight mb-8 font-montserrat"
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: '700',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
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
                    fontSize: '1.125rem',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    maxWidth: '480px'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Join thousands of learners gaining real-world
                  <br />
                  skills for a better future.
                </motion.p>

                {/* CTA Button with Montserrat */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className="bg-white text-gray-900 hover:bg-gray-50 font-semibold font-montserrat rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center"
                      style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        padding: '14px 28px',
                        borderRadius: '8px'
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {/* White Container */}
                <div 
                  className="bg-white p-6 rounded-3xl shadow-2xl"
                  style={{
                    padding: '30px',
                    borderRadius: '10px',
                    maxWidth: '500px',
                    margin: '0 auto'
                  }}
                >
                  {/* 3x2 Grid Layout */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* Grid Images */}
                    {[
                      { src: "/images/edtech-project/herogrid-1.png", alt: "Student studying outdoors" },
                      { src: "/images/edtech-project/herogrid-2.png", alt: "Study materials with STUDY text" },
                      { src: "/images/edtech-project/herogrid-3.png", alt: "Children learning together" },
                      { src: "/images/edtech-project/herogrid-4.png", alt: "Books with TEACH text" },
                      { src: "/images/edtech-project/herogrid-5.png", alt: "Collaborative learning session" },
                      { src: "/images/edtech-project/herogrid-6.png", alt: "Group study session" }
                    ].map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative rounded-2xl overflow-hidden shadow-md"
                        style={{ height: '180px' }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 + (index * 0.1) }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
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
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                    delayChildren: 0.3
                  }
                }
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">General</h3>
                    <p className="text-gray-600 text-sm font-montserrat">63,476 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Business Category */}
              <motion.div
                className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Business</h3>
                    <p className="text-gray-600 text-sm font-montserrat">52,822 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Finance & Accounting Category */}
              <motion.div
                className="bg-orange-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Finance & Accounting</h3>
                    <p className="text-gray-600 text-sm font-montserrat">33,841 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* IT & Software Category */}
              <motion.div
                className="bg-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">IT & Software</h3>
                    <p className="text-gray-600 text-sm font-montserrat">22,649 Courses</p>
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
                    delayChildren: 0.6
                  }
                }
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center group-hover:bg-orange-300 transition-colors duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 font-montserrat">Personal Development</h3>
                    <p className="text-orange-100 text-sm font-montserrat">20,126 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Office Productivity Category */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Office Productivity</h3>
                    <p className="text-gray-600 text-sm font-montserrat">13,932 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Marketing Category */}
              <motion.div
                className="bg-purple-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Marketing</h3>
                    <p className="text-gray-600 text-sm font-montserrat">12,068 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Photography & Video Category */}
              <motion.div
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Photography & Video</h3>
                    <p className="text-gray-600 text-sm font-montserrat">6,196 Courses</p>
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
                    delayChildren: 0.9
                  }
                }
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 1v6m6-6v6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Lifestyle</h3>
                    <p className="text-gray-600 text-sm font-montserrat">2,736 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Design Category */}
              <motion.div
                className="bg-red-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Design</h3>
                    <p className="text-gray-600 text-sm font-montserrat">2,600 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Health & Fitness Category */}
              <motion.div
                className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Health & Fitness</h3>
                    <p className="text-gray-600 text-sm font-montserrat">1,678 Courses</p>
                  </div>
                </div>
              </motion.div>

              {/* Music Category */}
              <motion.div
                className="bg-yellow-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 font-montserrat">Music</h3>
                    <p className="text-gray-600 text-sm font-montserrat">959 Courses</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Browse All Link */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-gray-600 mb-4 font-montserrat">
                We have more category & subcategory.
              </p>
              <motion.a
                href="#"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold font-montserrat transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Browse All
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
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
                  Choose from dozens of courses and start your journey in minutes.
                </p>
              </div>
              <motion.a
                href="#"
                className="text-gray-900 hover:text-green-600 font-semibold font-montserrat transition-colors duration-200 hidden md:block"
                whileHover={{ x: 5 }}
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
                    delayChildren: 0.3
                  }
                }
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        4 Weeks
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Beginner
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">By John Doe</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    English Language Mastery
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Read, write, and speak confidently.
                    <br />
                    Learn grammar, comprehension, writing skills, and how to express yourself clearly in everyday and academic situations.
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        6 Weeks
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Intermediate
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">By Jane Doe</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    Mathematics for Real Life
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Solve problems with logic and ease.
                    <br />
                    Master basic arithmetic, algebra, geometry, and word problems in a fun and understandable way.
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        8 Weeks
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                        Intermediate
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">By David Brown</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    Basic Science
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Explore the wonders of the world around you.
                    <br />
                    Discover how plants grow, why the sky is blue, and how your body works through interactive science lessons.
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        10 Weeks
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        Beginner
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 font-montserrat">By Sarah Thompson</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                    Social Studies
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 font-montserrat">
                    Understand the people, places, and systems around you.
                    <br />
                    Learn about your community, culture, government, and how to be a responsible citizen.
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
                href="#"
                className="text-gray-900 hover:text-green-600 font-semibold font-montserrat transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                View All
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* We Always Ensure Best Course Section */}
        <section className="py-16 lg:py-24 bg-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Image Cards */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {/* Background Card - Blue */}
                <motion.div
                  className="relative w-80 h-64 bg-blue-400 rounded-3xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Image
                    src="/images/edtech-project/cta-1.png"
                    alt="Student with tablet learning"
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Foreground Card - Yellow */}
                <motion.div
                  className="absolute -bottom-8 -right-8 w-80 h-64 bg-yellow-400 rounded-3xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Image
                    src="/images/edtech-project/cta-2.png"
                    alt="Student with books learning"
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Content */}
              <motion.div
                className="lg:pl-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Main Heading */}
                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight font-montserrat"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  We Always Ensure Best Course for your learning
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-gray-600 text-lg leading-relaxed mb-8 font-montserrat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Whether you're starting from scratch, upskilling for your dream job, or exploring a new field — our courses are designed to help you succeed.
                </motion.p>

                {/* Get Started Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold font-montserrat rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                      Get started
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

                {/* Our Testimonials Section */}
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
                We believe quality education should be affordable and accessible to all. That's why we offer flexible, value-packed plans for learners at every level.
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
                    delayChildren: 0.3
                  }
                }
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
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block mb-6">
                    <h3 className="font-semibold font-montserrat">Free Plan</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 font-montserrat">$0</span>
                    <span className="text-gray-600 font-montserrat">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center font-montserrat">Available Features</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Access to selected free courses.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Limited course materials and resources.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Basic community support.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">No certification upon completion.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Ad-supported platform.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-500 font-montserrat">Access to exclusive Pro Plan community forums.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-500 font-montserrat">Early access to new courses and updates.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-semibold font-montserrat rounded-lg transition-all duration-200">
                  Get Started
                </Button>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg inline-block mb-6">
                    <h3 className="font-semibold font-montserrat">Pro Plan</h3>
                  </div>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900 font-montserrat">$79</span>
                    <span className="text-gray-600 font-montserrat">/month</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-6 text-center font-montserrat">Available Features</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Unlimited access to all courses.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Unlimited course materials and resources.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Priority support from instructors.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Course completion certificates.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Ad-free experience.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Access to exclusive Pro Plan community forums.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-montserrat">Early access to new courses and updates.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 font-semibold font-montserrat rounded-lg transition-all duration-200">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>


                {/* Frequently Asked Questions Section */}
        <section className="py-16 lg:py-24 bg-white">
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
                  Explore our eLearning platform's FAQ section for quick solutions to common queries, ensuring a seamless learning journey
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
                      <span className="text-gray-600 font-medium font-montserrat">Q:1</span>
                      <span className="text-gray-900 font-medium font-montserrat">How Many Courses Do I Get in Passive Journal?</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">Answer</span>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      <span className="text-gray-600 font-medium font-montserrat">Q:2</span>
                      <span className="text-gray-900 font-medium font-montserrat">How Many Courses Do I Get in Passive Journal?</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">Answer</span>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      <span className="text-gray-600 font-medium font-montserrat">Q:3</span>
                      <span className="text-gray-900 font-medium font-montserrat">How Many Courses Do I Get in Passive Journal?</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">Answer</span>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      <span className="text-gray-600 font-medium font-montserrat">Q:4</span>
                      <span className="text-gray-900 font-medium font-montserrat">How Many Courses Do I Get in Passive Journal?</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">Answer</span>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      <span className="text-gray-600 font-medium font-montserrat">Q:5</span>
                      <span className="text-gray-900 font-medium font-montserrat">How Many Courses Do I Get in Passive Journal?</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-medium font-montserrat text-sm">Answer</span>
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>


                {/* Footer Section */}
        <footer className="bg-[#2B5D2D] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Logo and Contact Info */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Logo */}
                <div className="mb-6">
                  <Image
                    src="/images/edtech-project/footer-logo.png"
                    alt="EdTech Platform Logo"
                    width={120}
                    height={40}
                    className="h-12 w-auto"
                  />
                </div>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-green-100 font-montserrat">hello@edtech.com</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-green-100 font-montserrat">+91 91813 23 2309</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-100 font-montserrat">Somewhere in the World</span>
                  </div>
                </div>
              </motion.div>

              {/* Home Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-white font-semibold mb-6 font-montserrat text-lg">Home</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                      Benefits
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                      Our Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                      Our Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                      Our FAQ
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* About Us Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-white font-semibold mb-6 font-montserrat text-lg">About Us</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                      Company
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                      Our Goals
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Social Profiles */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h3 className="text-white font-semibold mb-6 font-montserrat text-lg">Social Profiles</h3>
                                <div className="flex space-x-3">
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Bottom Border and Copyright */}
            <motion.div
              className="border-t border-green-600 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <p className="text-green-100 font-montserrat">
                  © 2025 edtech. All rights reserved.
                </p>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}

       