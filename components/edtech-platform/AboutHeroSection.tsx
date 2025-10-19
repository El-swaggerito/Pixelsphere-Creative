"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutHeroSection() {
  const router = useRouter();
  const navigateToCoursesAll = () => {
    router.push("/edtech-platform/courses#all-courses");
  };
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