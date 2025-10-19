"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const CourseHeroSection = () => {
  const router = useRouter();
  const navigateToCoursesAll = () => {
    router.push("/edtech-platform/courses#all-courses");
  };
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