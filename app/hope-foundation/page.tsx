"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { AboutSection, DonateSection, HopeFoundationFooter, HopeFoundationNavbar, ScrollIndicator } from "@/components/hope-foundation";


const regions = [
  { name: "North America", projects: 15, coordinates: { x: 20, y: 40 } },
  { name: "South America", projects: 12, coordinates: { x: 25, y: 65 } },
  { name: "Africa", projects: 28, coordinates: { x: 52, y: 55 } },
  { name: "Asia", projects: 22, coordinates: { x: 70, y: 45 } },
  { name: "Europe", projects: 8, coordinates: { x: 48, y: 35 } },
];

export default function HopeFoundationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add this line

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
        <HopeFoundationNavbar/>
        
        {/* Scroll Indicator */}
        <ScrollIndicator />

        {/* Hero Section - Matching Reference Image */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden pt-16"
          style={{ backgroundColor: "#131A1B" }}
        >
          {/* Background Image with Seamless Blend */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hopefoundation-project/hero.png"
              alt="Hope Foundation Hero Background"
              fill
              className="object-cover object-right"
              priority
            />
            {/* Gradient overlay for seamless left-side blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#131A1B] via-[#131A1B]/80 via-40% to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="min-h-[80vh] flex items-center">
              {/* Content - Takes up left side */}
              <motion.div
                className="text-white max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* BE THE CHANGE Tag */}
                <motion.div
                  className="inline-block mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span
                    className="text-yellow-400 text-sm font-bold tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    BE THE CHANGE
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  CHANGING LIVES,
                  <br />
                  ONE COMMUNITY
                  <br />
                  AT A TIME.
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  To create a world where everyone, regardless of background,
                  has the tools and support to live a healthy, educated, and
                  empowered life.
                </motion.p>

                {/* Donate Button */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl border-0 rounded-sm"
                      style={{ fontFamily: "Movement, sans-serif" }}
                      onClick={() => {
                        const donationSection =
                          document.getElementById("donation");
                        if (donationSection) {
                          donationSection.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      DONATE
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Donor Avatars */}
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <div className="flex -space-x-2 mr-4">
                    {[
                      "/images/Avatar (1).png",
                      "/images/Avatar (2).png",
                      "/images/Avatar (3).png",
                      "/images/Avatar (4).png",
                    ].map((avatar, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                      >
                        <Image
                          src={avatar}
                          alt={`Donor ${index + 1}`}
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white shadow-lg"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.1 }}
                  >
                    100+ Donators
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator with Smooth Scroll */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 group-hover:border-yellow-400/60 rounded-full flex justify-center transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-3 bg-yellow-400 group-hover:bg-yellow-300 rounded-full mt-2 transition-colors duration-300"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Scroll to About
            </div>
            
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          </motion.div>
        </section>

        {/* About Us Section - Following Hero */}
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>

        {/* Our Campaigns Section */}
        <AnimatedSection>
          <section
            id="campaigns"
            className="py-16 lg:py-24"
            style={{ backgroundColor: "#FEFEF4" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    OUR CAMPAIGNS
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  FIGHTING FOR A BETTER TOMORROW
                </motion.h2>
              </motion.div>

              {/* Campaigns Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.6,
                    },
                  },
                }}
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Education Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Education
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Fermentum nisl accumsan nisl sapien in. Accumsan nisl sapien
                    in...
                  </p>
                </motion.div>

                {/* Clean Water Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Clean Water
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Ultricies lacus turpis proin tempor faucibus
                  </p>
                </motion.div>

                {/* Health Care Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Health Care
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Adipiscing in vitae necsque eget fringilla a morbi
                  </p>
                </motion.div>

                {/* Local Communities Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Local communities
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Nunc tristique quis leo duis gravida volutpat vitae
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Latest Causes Section */}
        <AnimatedSection>
          <section id="causes" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    OUR CAMPAIGN
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  TURNING ACTIONS INTO RESULTS
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Turning Actions into Results Your support is making real,
                  measurable change. This is just the beginning. Every
                  contribution, whether big or small, fuels the momentum for a
                  better tomorrow.
                </motion.p>
              </motion.div>

              {/* Causes Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.8,
                    },
                  },
                }}
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Clean Water for All */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/hopefoundation-project/Img.png"
                      alt="Clean Water Initiative"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Clean Water for All
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Access to clean and safe water is a fundamental human
                      right, yet millions around the world still...
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span
                            className="font-bold text-gray-900"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            Goal: $100000
                          </span>
                          <span className="text-gray-500 ml-4">
                            10 donations
                          </span>
                        </div>
                      </div>
                      <div className="mt-1">
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Raised: $ 60000
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-medium transition-all duration-200"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>

                {/* Improve Education */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/hopefoundation-project/Img (1).png"
                      alt="Education Program"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Improve Education
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Education is the cornerstone of sustainable development.
                      It empowers individuals...
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: "53%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span
                            className="font-bold text-gray-900"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            Goal: $150000
                          </span>
                          <span className="text-gray-500 ml-4">
                            25 donations
                          </span>
                        </div>
                      </div>
                      <div className="mt-1">
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Raised: $ 80000
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-medium transition-all duration-200"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>

                {/* End Hunger */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/hopefoundation-project/Img (2).png"
                      alt="End Hunger Initiative"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      End Hunger
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      In a world that produces enough food to feed everyone,
                      hunger is a solvable crisis. Yet, nearly...
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span
                            className="font-bold text-gray-900"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            Goal: $200000
                          </span>
                          <span className="text-gray-500 ml-4">
                            6 donations
                          </span>
                        </div>
                      </div>
                      <div className="mt-1">
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Raised: $ 60000
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-medium transition-all duration-200"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Projects by Region - Updated to Match "Our Reach" Design */}
        <AnimatedSection>
          <section id="projects" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    OUR REACH
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  PROJECTS BY REGION
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Turning Actions into Results Your support is making real,
                  measurable change. This is just the beginning. Every
                  contribution, whether big or small, fuels the momentum for a
                  better tomorrow.
                </motion.p>
              </motion.div>

              {/* Region Tabs */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { name: "Central Africa", active: true },
                  { name: "Eastern Europe", active: false },
                  { name: "Southeast Asia", active: false },
                  { name: "Central America", active: false },
                ].map((region, index) => (
                  <motion.button
                    key={region.name}
                    className={`px-6 py-3 text-lg font-medium transition-all duration-200 ${
                      region.active
                        ? "text-yellow-500 border-b-2 border-yellow-500"
                        : "text-gray-600 hover:text-yellow-500"
                    }`}
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {region.name}
                  </motion.button>
                ))}
              </motion.div>

              {/* World Map with Pins */}
              <motion.div
                className="relative max-w-6xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {/* Dotted World Map Background */}
                <div className="relative mx-auto max-w-4xl">
                  <Image
                    src="/images/hopefoundation-project/map.png"
                    alt="World Map with Project Locations"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />

                  {/* Interactive Pins */}
                  {regions.map((region, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform duration-200"
                      style={{
                        left: `${region.coordinates.x}%`,
                        top: `${region.coordinates.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      whileHover={{ scale: 1.5 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {region.name}: {region.projects} projects
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Donate Now Section - Following Our Reach */}
        <AnimatedSection>
          <DonateSection />
        </AnimatedSection>
      </div>

      {/* Footer */}
      <AnimatedSection>
        <HopeFoundationFooter />
      </AnimatedSection>
    </PageTransition>
  );
}
