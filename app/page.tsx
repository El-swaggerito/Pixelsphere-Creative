"use client";
  import Image from "next/image";
  import Link from "next/link";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import {
    Star,
    ArrowRight,
    Globe,
    ShoppingCart,
    Palette,
    Smartphone,
  } from "lucide-react";
  import Header from "@/components/header";
  import HeroBackground from "@/components/hero-background";
  import SectionHeader from "@/components/section-header";
  import CTASection from "@/components/cta-section";
  import Footer from "@/components/footer";
  import FinalCTA from "@/components/final-cta";
  import PageTransition from "@/components/PageTransition";
  import AnimatedSection from "@/components/AnimatedSection";
  import { motion } from "framer-motion";
  import { projects } from "@/data/projects";
  import React from "react";
  import ProjectCard from "@/components/ProjectCard";
  import { blogPosts } from "@/data/blogPosts";
  import BlogCard from "@/components/BlogCard";
  import NewsletterPopup from "@/components/newsletter-popup";

  export default function HomePage() {
    const navigateToContact = () => {
      window.location.href = "/contact#contact-form";
    };
const testimonials = [
  {
    quote:
      "PixelSphere completely transformed our brand and website. From the logo to the user experience, everything feels cohesive and intentional. Our audience now takes us seriously, and it shows in our sales!",
      name: "Ayo",
      role: "Legend Luxury",
    },
    {
      quote:
      "PixelSphere didn't just design for us, they designed with us. The result? Pure brilliance.",
      name: "Erica",
      role: "Chopify",
  },
  // {
  //   quote:
  //     "Our experience was seamless from start to finish. Their ability to adapt and innovate made all the difference.",
  //   name: "Priya Kapoor",
  //   role: "Head of Marketing - Horizon Media Group",
  // },
  // {
  //   quote:
  //     "Excellent communication, fresh ideas, and flawless execution. I couldn’t ask for a better partner for our campaign.",
  //   name: "Ethan Walker",
  //   role: "Brand Strategist - Elevate Agency",
  // },
  // {
  //   quote:
  //     "The team brought our vision to life with incredible attention to detail. I’ll definitely be working with them again.",
  //   name: "Sofia Ramirez",
  //   role: "CEO - Lumina Designs",
  // },
  // {
  //   quote:
  //     "I was amazed at how quickly they understood our needs and delivered beyond expectations. Simply outstanding.",
  //   name: "Daniel Okoro",
  //   role: "Operations Manager - Nexus Global",
  // },
  // {
  //   quote:
  //     "Creative, reliable, and highly skilled—working with them was one of the best decisions we made this year.",
  //   name: "Hannah Schultz",
  //   role: "Product Lead - InnovateX",
  // },
];


    return (
      <PageTransition>
        <NewsletterPopup delayInSeconds={2} />
        <main className="pt-0">
          {/* Hero Section */}
          <section className="relative min-h-[50vh] xxxxs:min-h-[45vh] xxxs:min-h-[50vh] xxs:min-h-[55vh] xs:min-h-[60vh] sm:min-h-[80vh] md:min-h-[90vh] lg:min-h-[110vh] xl:min-h-[100vh] 4xl:min-h-[80vh] flex flex-col overflow-hidden">
            <HeroBackground className="!min-h-[70vh] md:!min-h-[90vh] lg:!min-h-[110vh] xl:!min-h-[100vh] 4xl:!min-h-[80vh]">
              {/* Decorative vector line at top left */}
              <motion.div
                className="absolute top-0.5 left-0.5 xxxs:top-1 xxxs:left-1 xxs:top-2 xxs:left-2 sm:top-8 sm:left-8 z-10 pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <svg
                  width="60"
                  height="30"
                  viewBox="0 0 120 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[30px] h-[15px] xxxs:w-[40px] xxxs:h-[20px] xxs:w-[50px] xxs:h-[25px] sm:w-[120px] sm:h-[60px] pointer-events-none"
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

              <Header currentPage="home" />

              {/* Hero Content */}
              <div className="relative z-20 flex flex-col items-center justify-center text-center px-2 xxxxs:px-3 xxxs:px-4 xxs:px-6 sm:px-8 lg:px-12 xl:px-16 4xl:px-20 xxxs:pt-16 xxs:pt-16 md:pt-20 lg:pt-24 xl:pt-24 4xl:pt-32 pb-8 xxxxs:pb-10 xxxs:pb-12 xxs:pb-16 xs:pb-20 sm:pb-24 md:pb-16 lg:pb-20 xl:pb-16 4xl:pb-0">
                <h1 className="text-base xxxxs:text-lg xxxs:text-xl xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-5xl 4xl:text-7xl font-bold text-white mb-4 xxxxs:mb-5 xxxs:mb-5 xxs:mb-6 sm:mb-10 4xl:mb-8 leading-tight font-sora">
                  Empowering Businesses Through Tailored Technology Solutions
                </h1>
                <p className="text-xs xxxxs:text-sm xxxs:text-sm xxs:text-base xs:text-lg sm:text-lg lg:text-xl 4xl:text-2xl text-white/90 mb-6 xxxxs:mb-8 xxxs:mb-8 xxs:mb-10 sm:mb-16 4xl:mb-12 max-w-xs xxxxs:max-w-sm xxxs:max-w-md xxs:max-w-lg sm:max-w-2xl lg:max-w-4xl 4xl:max-w-6xl leading-relaxed font-inter">
                  We bridge the gap between businesses and their audiences by delivering high-quality digital solutions that amplify brand voices.
                </p>
                
                {/* Let's Work Together Button */}
                <div className="relative z-10 mt-2 xxxxs:mt-3 xxxs:mt-3 xxs:mt-4 sm:mt-8 4xl:mt-6 mb-8 xxxxs:mb-10 xxxs:mb-10 xxs:mb-12 xs:mb-20 sm:mb-24 lg:mb-28 xl:mb-32 4xl:mb-16">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 xxxxs:px-5 xxxs:px-6 xxs:px-7 xs:px-8 sm:px-10 4xl:px-12 py-2 xxxxs:py-2.5 xxxs:py-3 xxs:py-3.5 xs:py-4 sm:py-5 4xl:py-6 text-xs xxxxs:text-sm xxxs:text-sm xxs:text-base xs:text-base sm:text-lg 4xl:text-xl font-medium rounded-lg w-full xxxs:w-full xxs:w-auto shadow-lg cursor-pointer"
                    onClick={navigateToContact}
                    style={{ pointerEvents: 'auto' }}
                  >
                    Let's Work Together
                    <ArrowRight className="h-3 w-3 xxxxs:h-3.5 xxxxs:w-3.5 xxxs:h-4 xxxs:w-4 xxs:h-4 xxs:w-4 sm:h-5 sm:w-5 4xl:h-6 4xl:w-6 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Design Collection Images - Positioned at very bottom */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 z-10 px-0 xxxxs:px-0.5 xxxs:px-1 xxs:px-1.5 sm:px-0 mt-4 xxxxs:mt-5 xxxs:mt-6 xxs:mt-8 xs:mt-10 sm:mt-12 lg:mt-16 xl:mt-12 2xl:mt-8 pointer-events-none"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
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

          {/* Who We Are Section */}
          <AnimatedSection>
            <section className="py-4 xxxs:py-5 xxs:py-6 xs:py-7 sm:py-8 md:py-8 bg-white relative overflow-hidden">
              {/* Decorative dots pattern */}
              <motion.div
                className="absolute top-3 left-3 xxxs:top-4 xxxs:left-4 xxs:top-6 xxs:left-6 sm:top-12 sm:left-12 opacity-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-4 xxxs:grid-cols-5 xxs:grid-cols-6 xs:grid-cols-7 sm:grid-cols-8 gap-0.5 xxxs:gap-1 sm:gap-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-0.5 h-0.5 xxxs:w-0.5 xxxs:h-0.5 xxs:w-1 xxs:h-1 sm:w-1 sm:h-1 bg-orange-400 rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.01 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </motion.div>

              <div className="max-w-7xl mx-auto px-3 xxxs:px-4 xxs:px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-6 xxxs:gap-7 xxs:gap-8 xs:gap-10 sm:gap-12 md:gap-16 items-center">
                  <motion.div
                    className="relative order-2 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src="/images/meeting-room.png"
                      alt="Our team in a meeting"
                      width={600}
                      height={400}
                      className="rounded-lg xxxs:rounded-xl xxs:rounded-xl sm:rounded-2xl shadow-lg w-full h-auto"
                    />
                  </motion.div>
                  <div className="order-1 lg:order-2">
                    <motion.div
                      className="flex items-center mb-3 xxxs:mb-4 xxs:mb-4 xs:mb-5 sm:mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 xxxs:w-2 xxxs:h-2 xxs:w-2 xxs:h-2 bg-orange-500 rounded-full mr-2 xxxs:mr-3"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-orange-500 font-medium text-xs xxxs:text-xs xxs:text-sm xs:text-sm sm:text-sm tracking-wide uppercase">
                        WHO WE ARE
                      </span>
                    </motion.div>
                    <motion.h2
                      className="text-4xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      We craft identities that move, resonate, and endure
                    </motion.h2>
                    <motion.p
                      className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      At PixelSphere, we don't strictly build brands — we craft
                      identities that move, resonate, and endure. Founded on the
                      belief that great brands are built at the intersection of
                      strategy, creativity, and clarity.
                    </motion.p>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedSection>
          {/* Services Section */}
          <AnimatedSection>
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  label="OUR SERVICES"
                  title="We craft identities that move, resonate, and endure"
                  description="Our comprehensive suite of services is designed to elevate your brand and drive meaningful results across all digital touchpoints."
                />

                <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <motion.div
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          Custom Website
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                          Tailored web solutions that reflect your brand identity
                          and drive conversions with modern design and
                          functionality.
                        </p>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href="/services/custom-web-solutions"
                            className="text-orange-500 hover:text-orange-600 font-medium text-base sm:text-lg"
                          >
                            Discover More →
                          </Link>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <motion.div
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ShoppingCart className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          E-commerce Website
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                          Powerful online stores that maximize sales and enhance
                          user experience with seamless checkout processes.
                        </p>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href="/services/custom-web-solutions"
                            className="text-orange-500 hover:text-orange-600 font-medium text-base sm:text-lg"
                          >
                            Discover More →
                          </Link>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <motion.div
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Palette className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          Branding and Digital services
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                          Complete brand identity and digital marketing solutions
                          that drive growth and build lasting connections.
                        </p>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href="/services/branding-identity"
                            className="text-orange-500 hover:text-orange-600 font-medium text-base sm:text-lg"
                          >
                            Discover More →
                          </Link>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Card className="p-6 sm:p-8 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <motion.div
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-orange-600" />
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                          UI UX Design/Plugins
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                          Intuitive designs and custom plugins that enhance
                          functionality and create exceptional user experiences.
                        </p>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            href="/services/ux-design-strategy"
                            className="text-orange-500 hover:text-orange-600 font-medium text-base sm:text-lg"
                          >
                            Discover More →
                          </Link>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <CTASection
              title="Crafting Digital Experiences That Make Brands Stand Out"
              description="Ready to transform your digital presence? Let's create something extraordinary together."
              buttonText="Start Your Project"
              backgroundImage="/images/cta-bg.png"
            />
          </AnimatedSection>

          {/* Portfolio Section */}
          <AnimatedSection>
            <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                  label="OUR WORKS"
                  title="Brands That Perform, Connect, and Last"
                />
                <div className="space-y-12 sm:space-y-16 md:space-y-20">
                  {/* Display 3 projects from our reusable components */}
                  {projects.slice(0, 3).map((project, index) => (
                    <React.Fragment key={project.slug}>
                      <ProjectCard {...project} />
                      {index < 2 && <hr className="border-orange-200" />}
                    </React.Fragment>
                  ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    <Link
                      href="/work"
                      className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                      View All Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          </AnimatedSection>

          {/* Testimonials Section */}
      {/* Testimonials Section – Vertical Auto Slide (Top → Bottom) */}
<AnimatedSection>
  <section
    className="py-12 sm:py-16 md:py-19 relative overflow-hidden"
    style={{ background: "#FFFFFF" }}
  >
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
        
        {/* Left side – auto-sliding column */}
        <div className="order-2 lg:order-1">
          {/* Viewport */}
          <div className="relative h-[500px] sm:h-[520px] md:h-[560px] overflow-hidden">
            {/* Optional fade masks at top/bottom – comment out if you don’t want it */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10" />

            {/* Scroller: duplicate list for seamless loop */}
            <motion.div
              initial={{ y: "0%" }}
              animate={{ y: ["0%", "-50%"] }} // moves UP instead of DOWN
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              className="flex flex-col gap-4"
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <Card
                  key={i}
                  className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl shadow-lg flex-shrink-0"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center mb-1 sm:mb-2" aria-hidden="true">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                      “{t.quote}”
                    </p>
                    <div>
                      <div className="text-white font-semibold text-xs sm:text-sm">
                        {t.name}
                      </div>
                      <div className="text-blue-200 text-xs">{t.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right side – static content */}
        <div className="text-left order-1 lg:order-2 pt-32">
          <motion.div
            className="flex items-center mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-2 h-2 bg-orange-500 rounded-full mr-3"
              whileHover={{ scale: 1.5 }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-orange-300 font-medium text-xs sm:text-sm tracking-wide uppercase">
              TESTIMONIALS
            </span>
          </motion.div>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our client like us,
            <br />
            and we love them
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Pixelsphere Creatives, our clients' satisfaction is our top priority. We take pride in the relationships we build and the successes we help create.
          </motion.p>
          
          {/* Google 5-Star Rating Widget */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Star Rating Display */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="h-5 w-5 fill-yellow-400 text-yellow-400" 
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-black">5.0</span>
              </div>
              
              {/* Google Reviews Info */}
              <div className="flex items-center gap-2 text-gray-600">
                <span className="text-sm sm:text-base">Based on</span>
                <a 
                  href="https://www.google.com/search?q=PixelSphere+Creatives+reviews" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-800 transition-colors underline"
                >
                  50+ Google Reviews
                </a>
              </div>
            </div>
            
            {/* Google Logo */}
            <div className="flex items-center gap-2 mt-3">
              <svg 
                className="h-4 w-4" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" 
                  fill="#4285F4"
                />
                <path 
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" 
                  fill="#34A853"
                />
                <path 
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" 
                  fill="#FBBC05"
                />
                <path 
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" 
                  fill="#EA4335"
                />
              </svg>
              <span className="text-xs text-gray-500">Powered by Google</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</AnimatedSection>


          {/* Blog Section */}
          <AnimatedSection>
            <section className="py-12 sm:py-16 md:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader label="BLOG" title="Read our Blog" />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {blogPosts
                    .filter((post) => post.featured)
                    .slice(0, 2)
                    .map((post, index) => (
                      <BlogCard
                        key={post.id}
                        post={post}
                        index={index}
                        className={
                          index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                        }
                      />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    <Link
                      href="/blog"
                      className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300"
                    >
                      View All Articles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          </AnimatedSection>
          <AnimatedSection>
            <FinalCTA />
          </AnimatedSection>

          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </main>
      </PageTransition>
    )
  }
