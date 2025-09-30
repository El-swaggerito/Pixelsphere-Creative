"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HopeFoundationNavbar } from "@/components/hope-foundation";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

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
      <div className="min-h-screen bg-white" style={{ fontFamily: "Movement, sans-serif" }}>
        {/* Navigation */}
        <HopeFoundationNavbar />

        {/* Hero Section */}
        <AnimatedSection>
          <section
            id="about-hero"
            className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
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
                className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
                aria-hidden="true"
              ></div>
            </div>

            {/* Hero Content */}
            <motion.div
              className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "Movement, sans-serif" }}
                variants={itemVariants}
              >
                About Us
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8"
                style={{ fontFamily: "Movement, sans-serif" }}
                variants={itemVariants}
              >
                Empowering communities, transforming lives, and building a future filled with hope and opportunity for all.
              </motion.p>
              
              <motion.div variants={itemVariants}>
                <Link href="#mission">
                  <button 
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                    aria-label="Learn more about our mission"
                  >
                    Learn Our Story
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              aria-hidden="true"
            >
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </section>
        </AnimatedSection>

        {/* Additional content sections can be added here */}
      </div>
    </PageTransition>
  );
}