"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
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
    <section className="relative text-white overflow-hidden"
       style={{
            minHeight: "100vh",
            paddingTop: "32px", // Account for fixed nav
            background:
              "linear-gradient(90deg, #2B5D2D 100%, #FFFFFF 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
            contain: "layout style paint",
          }}>
      <div className="container mx-auto px-4 md:py-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="w-full md:w-1/2 space-y-6" variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Partner in<br />
              Digital Learning<br />
              Innovation
            </h1>
            <p className="text-lg md:text-xl max-w-md">
              Join thousands of learners gaining real-world
              skills for a better future.
            </p>
            <motion.button
              className="bg-white text-[#2E7D32] px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-end relative"
            variants={itemVariants}
          >
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden bg-[#B3E5FC] z-20">
                <Image
                  src="/images/edtech-project/cta-1.png"
                  alt="Student with tablet"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden bg-[#FFECB3] z-10">
                <Image
                  src="/images/edtech-project/cta-2.png"
                  alt="Student with books"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}