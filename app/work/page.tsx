"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import HeroBackground from "@/components/hero-background";
import SectionHeader from "@/components/section-header";
import Footer from "@/components/footer";
import FinalCTA from "@/components/final-cta";
import WorkCTA from "@/components/work-cta";
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import React from "react";

export default function WorkPage() {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact#contact-form";
    }
  };

  // Add this new function to scroll to the portfolio section
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-section");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Portfolio Hero Section - Similar to Home Page */}
        <section className="relative min-h-[50vh] xxxxs:min-h-[45vh] xxxs:min-h-[50vh] xxs:min-h-[55vh] xs:min-h-[60vh] sm:min-h-[80vh] md:min-h-[70vh] lg:min-h-screen flex flex-col overflow-hidden">
          <HeroBackground className="!min-h-[50vh] xxxxs:!min-h-[45vh] xxxs:!min-h-[50vh] xxs:!min-h-[55vh] xs:!min-h-[60vh] sm:!min-h-[80vh] md:!min-h-[70vh] lg:!min-h-screen">
            {/* Decorative vector line at top left */}
            <motion.div
              className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <svg
                width="80"
                height="40"
                viewBox="0 0 120 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-[120px] sm:h-[60px]"
              >
                <motion.path
                  d="M10 50 Q 30 10, 60 30 T 110 20"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M5 40 Q 25 5, 55 25 T 105 15"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
              </svg>
            </motion.div>

            <Header currentPage="work" />

            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center relative z-20 pt-32 px-4 sm:px-6 lg:px-8">
              <div className="relative z-20 flex flex-col items-center justify-center text-center px-2">
                <motion.h1 className="text-lg xxxxs:text-xl xxxs:text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 xxxxs:mb-5 xxxs:mb-6 xxs:mb-8 sm:mb-10 leading-tight font-sora"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Our Portfolio
                </motion.h1>
                <motion.p
                  className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Crafting engaging brand experiences begins with innovative
                  approach to design and development.
                </motion.p>
                <motion.div
                  className="relative z-20 mt-2 xxxxs:mt-3 xxxs:mt-4 xxs:mt-6 sm:mt-8 mb-8 xxxxs:mb-10 xxxs:mb-12 xxs:mb-16 xs:mb-20 sm:mb-24 lg:mb-28 xl:mb-16 2xl:mb-12"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ pointerEvents: 'auto' }}
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 xxxxs:px-5 xxxs:px-6 xxs:px-7 xs:px-8 sm:px-10 py-2 xxxxs:py-2.5 xxxs:py-3 xxs:py-3.5 xs:py-4 sm:py-5 text-xs xxxxs:text-sm xxxs:text-sm xxs:text-base xs:text-base sm:text-lg font-medium rounded-lg w-full xxxs:w-full xxs:w-auto shadow-lg transition-all duration-300 hover:shadow-xl"
                    onClick={scrollToPortfolio}
                  >
                    View All Projects
                    <ArrowRight className="h-3 w-3 xxxxs:h-3.5 xxxxs:w-3.5 xxxs:h-4 xxxs:w-4 xxs:h-4 xxs:w-4 sm:h-5 sm:w-5 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Design Collection Images - Same as Home Page */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 z-10 px-0 xxxxs:px-0.5 xxxs:px-1 xxs:px-1.5 sm:px-0 mt-4 xxxxs:mt-5 xxxs:mt-6 xxs:mt-8 xs:mt-10 sm:mt-12 lg:mt-16 xl:mt-12 2xl:mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ pointerEvents: 'none' }}
              >
                <div className="w-full max-w-full xxxxs:max-w-[99.8vw] xxxs:max-w-[99vw] xxs:max-w-[97vw] sm:max-w-full mx-auto overflow-hidden rounded-none">
                  <Image
                    src="/images/design-collection.png"
                    alt="Design and development showcase"
                    width={1500}
                    height={300}
                    className="w-full h-auto object-contain sm:object-cover"
                    priority
                    sizes="(max-width: 280px) 100vw, (max-width: 320px) 99.8vw, (max-width: 375px) 99vw, (max-width: 640px) 97vw, 100vw"
                  />
                </div>
              </motion.div>
          </HeroBackground>
        </section>

        {/* Portfolio Section */}
        <AnimatedSection>
          <section id="portfolio-section" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                label="OUR PORTFOLIO"
                title="Brands That Perform, Connect, and Last"
              />

              {/* Filter Tabs */}
              <motion.div
                className="flex justify-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-wrap justify-center gap-3">
                  <motion.button
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    All
                  </motion.button>
                  <motion.button
                    className="text-gray-600 hover:text-gray-900 px-6 py-2 font-medium"
                    whileHover={{ scale: 1.05, color: "#f97316" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Custom Websites
                  </motion.button>
                  <motion.button
                    className="text-gray-600 hover:text-gray-900 px-6 py-2 font-medium"
                    whileHover={{ scale: 1.05, color: "#f97316" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Branding
                  </motion.button>
                </div>
              </motion.div>

              <div className="space-y-20">
                {/* Map through projects and render ProjectCard components */}
                {projects.map((project, index) => (
                  <React.Fragment key={project.slug}>
                    <ProjectCard {...project} />
                    {index < projects.length - 1 && (
                      <hr className="border-orange-200" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Portfolio CTA Section */}
        <AnimatedSection>
          <WorkCTA />
        </AnimatedSection>

        <AnimatedSection>
          <FinalCTA />
        </AnimatedSection>
        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}
