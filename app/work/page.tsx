"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import WorkCTA from "@/components/work-cta"
import PageTransition from "@/components/PageTransition"
import AnimatedSection from "@/components/AnimatedSection"
import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/data/projects"
import React from "react"

export default function WorkPage() {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/contact#contact-form"
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Portfolio Hero Section - Similar to Home Page */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          <HeroBackground>
            {/* Decorative vector line at top left */}
            <div className="absolute top-8 left-8 z-10">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q 30 10, 60 30 T 110 20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
                <path d="M5 40 Q 25 5, 55 25 T 105 15" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <Header currentPage="work" />

            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center relative z-20 pt-32 px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  OUR PORTFOLIO
                </motion.h1>
                <motion.p
                  className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Crafting engaging brand experiences begins with innovative approach to design and development. Our
                  portfolio showcases a diverse range of projects that reflect our commitment to delivering exceptional
                  results for our clients.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
                  >
                    View Our Portfolio
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Design Collection Images - Same as Home Page */}
            <motion.div
              className="relative z-20 mt-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div className="w-full">
                <Image
                  src="/images/design-collection.png"
                  alt="Design and development showcase"
                  width={1500}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </HeroBackground>
        </section>

        {/* Portfolio Section */}
        <AnimatedSection>
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader label="OUR PORTFOLIO" title="Brands That Perform, Connect, and Last" />

              {/* Filter Tabs */}
              <motion.div
                className="flex justify-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-8">
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
                    Web Design
                  </motion.button>
                  <motion.button
                    className="text-gray-600 hover:text-gray-900 px-6 py-2 font-medium"
                    whileHover={{ scale: 1.05, color: "#f97316" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Development
                  </motion.button>
                </div>
              </motion.div>

              <div className="space-y-20">
                {/* Map through projects and render ProjectCard components */}
                {projects.map((project, index) => (
                  <React.Fragment key={project.slug}>
                    <ProjectCard {...project} />
                    {index < projects.length - 1 && <hr className="border-orange-200" />}
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
  )
}
