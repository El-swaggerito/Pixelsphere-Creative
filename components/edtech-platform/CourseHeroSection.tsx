"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CourseHeroSection = () => {
  return (
    <section className="bg-[#1E5631] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left content */}
          <motion.div 
            className="w-full md:w-1/2 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Explore Our<br />Courses
            </h1>
            <p className="text-lg mb-8 max-w-md">
              Unlock unlimited access to our entire library. Plus, 
              enjoy complimentary access to all forthcoming 
              courses at no extra cost!
            </p>
            <motion.button
              className="bg-white text-[#1E5631] px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.div>
          
          {/* Right image */}
          <motion.div 
            className="w-full md:w-1/2 mt-10 md:mt-0 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full h-[300px] md:h-[400px] border-8 border-white rounded-lg shadow-lg">
              <Image
                src="/images/edtech-project/courseherobg.png"
                alt="Start your online class"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseHeroSection;