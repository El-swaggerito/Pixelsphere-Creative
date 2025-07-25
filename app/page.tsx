"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Globe, ShoppingCart, Palette, Smartphone } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import StatsDisplay from "@/components/stats-display"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import PageTransition from "@/components/PageTransition"
import AnimatedSection from "@/components/AnimatedSection"
import { motion } from "framer-motion"

export default function HomePage() {
  const stats = [
    { label: "Projects completed", value: "200+" },
    { label: "Client retention rate", value: "95%" },
    { label: "Years of experience", value: "5" },
  ]

  const navigateToContact = () => {
    window.location.href = "/contact#contact-form"
  }

  return (
    <PageTransition>
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col overflow-hidden">
          <HeroBackground>
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

            <Header currentPage="home" />

            {/* Hero Content */}
            <div className="flex-1 flex items-center justify-center relative z-20 pt-8 sm:pt-10 px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-4xl mx-auto">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Empowering Businesses Through
                  <br className="hidden sm:block" />
                  <span className="block sm:inline"> Tailored Technology Solutions</span>
                </motion.h1>
                <motion.p
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4 sm:px-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We bridge the gap between businesses and their audiences by
                  <br className="hidden md:block" />
                  <span className="block md:inline"> delivering high-quality digital solutions that amplify brand</span>
                  <br className="hidden md:block" />
                  <span className="block md:inline"> voices.</span>
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg w-full sm:w-auto"
                    onClick={navigateToContact}
                  >
                    Let's Work Together
                    <motion.div className="ml-2" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Design Collection Images - Positioned at very bottom */}
            <motion.div
              className="relative z-20 mt-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
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

        {/* Who We Are Section */}
        <AnimatedSection>
          <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
            {/* Decorative dots pattern */}
            <motion.div
              className="absolute top-6 left-6 sm:top-12 sm:left-12 opacity-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-6 sm:grid-cols-8 gap-1 sm:gap-2">
                {Array.from({ length: 48 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-orange-400 rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.01 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
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
                    className="rounded-xl sm:rounded-2xl shadow-lg w-full h-auto"
                  />
                </motion.div>
                <div className="order-1 lg:order-2">
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
                    <span className="text-orange-500 font-medium text-xs sm:text-sm tracking-wide uppercase">
                      WHO WE ARE
                    </span>
                  </motion.div>
                  <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
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
                    At PixelSphere, we don't strictly build brands — we craft identities that move, resonate, and
                    endure. Founded on the belief that great brands are built at the intersection of strategy,
                    creativity, and clarity.
                  </motion.p>

                  <StatsDisplay stats={stats} />
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
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
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
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Custom Website</h3>
                      <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                        Tailored web solutions that reflect your brand identity and drive conversions with modern design
                        and functionality.
                      </p>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="#"
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
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
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
                        Powerful online stores that maximize sales and enhance user experience with seamless checkout
                        processes.
                      </p>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="#"
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
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
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
                        Complete brand identity and digital marketing solutions that drive growth and build lasting
                        connections.
                      </p>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="#"
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
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
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
                        Intuitive designs and custom plugins that enhance functionality and create exceptional user
                        experiences.
                      </p>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="#"
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
              <SectionHeader label="OUR WORKS" title="Brands That Perform, Connect, and Last" />
              <div className="space-y-12 sm:space-y-16 md:space-y-20">
                {/* Project 1 - DRIP AND GRIND */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
                      </motion.div>
                      <span className="text-gray-900 font-semibold text-base sm:text-lg">DRIP AND GRIND</span>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="/work/drip-and-grind"
                          className="ml-auto flex items-center text-gray-500 hover:text-orange-500 transition-colors"
                        >
                          <span className="text-xs sm:text-sm mr-2">DETAILS</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="mb-4 flex flex-col sm:flex-row sm:space-x-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-0">Category • Web Design</span>
                      <span className="text-xs sm:text-sm text-gray-600">Time Taken • 6 months</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      A stylish café and co-working hub for freelancers and entrepreneurs. The name reflects hustle
                      culture ("grind") and café vibes ("drip").
                    </motion.p>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <strong>Design Direction:</strong> Trendy, youthful, and urban. Use bold fonts, coffee tones, and
                      visual identity that merges productivity with lifestyle aesthetics.
                    </motion.p>

                    <motion.div
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">TECHNOLOGIES USED</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            WordPress
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            PHP
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            HTML5
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            CSS3
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            JavaScript
                          </Badge>
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3"
                        onClick={navigateToContact}
                      >
                        BOOK A CALL
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div
                    className="relative order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                      <div className="bg-white rounded-lg p-6 aspect-[4/3]">
                        <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <motion.div
                              className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            />
                            <div className="text-purple-600 font-semibold">App Interface</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <hr className="border-orange-200" />

                {/* Project 2 - HOPE FOUNDATION */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="lg:order-2 order-2">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="w-3 h-3 bg-orange-500 rounded-full mr-2"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-gray-900 font-semibold text-base sm:text-lg">HOPE FOUNDATION</span>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="/work/hope-foundation"
                          className="ml-auto flex items-center text-gray-500 hover:text-orange-500 transition-colors"
                        >
                          <span className="text-xs sm:text-sm mr-2">DETAILS</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="mb-4 flex flex-col sm:flex-row sm:space-x-8"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-0">
                        Category • Web Development & Branding
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600">Time Taken • 3 months</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      A non-profit organization providing education and healthcare services to people with disabilities.
                    </motion.p>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      They partner with local communities to support sustainable development initiatives.
                    </motion.p>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <strong>Design Direction:</strong> Clean, accessible layout with a human-centered design.
                    </motion.p>

                    <motion.div
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">TECHNOLOGIES USED</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            WordPress
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            PHP
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            HTML5
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            CSS3
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            JavaScript
                          </Badge>
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3"
                        onClick={navigateToContact}
                      >
                        BOOK A CALL
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div
                    className="lg:order-1 relative order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
                      <div className="bg-white rounded-lg p-4 aspect-[16/10]">
                        <div className="w-full h-full bg-green-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <motion.div
                              className="w-20 h-12 bg-green-600 rounded mx-auto mb-4"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            />
                            <div className="text-green-600 font-semibold">Website Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <hr className="border-orange-200" />

                {/* Project 3 - EDTECH LEARNING PLATFORM */}
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
                      </motion.div>
                      <span className="text-gray-900 font-semibold text-base sm:text-lg">EDTECH LEARNING PLATFORM</span>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Link
                          href="/work/edtech-learning-platform"
                          className="ml-auto flex items-center text-gray-500 hover:text-orange-500 transition-colors"
                        >
                          <span className="text-xs sm:text-sm mr-2">DETAILS</span>
                          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                        </Link>
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="mb-4 flex flex-col sm:flex-row sm:space-x-8"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-0">Category • Web Design</span>
                      <span className="text-xs sm:text-sm text-gray-600">Time Taken • 6 months</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      A platform for self-paced and guided online learning tailored to students, professionals, and
                      educators.
                    </motion.p>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <strong>Design Direction:</strong> Engaging and motivational UI with vibrant tones (green), icons,
                      and smooth UX.
                    </motion.p>

                    <motion.p
                      className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      Focus on usability, onboarding flows, and storytelling through student success and instructor
                      expertise.
                    </motion.p>

                    <motion.div
                      className="mb-4 sm:mb-6"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">TECHNOLOGIES USED</div>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            WordPress
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            PHP
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            HTML5
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            CSS3
                          </Badge>
                        </motion.div>
                        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
                          <Badge variant="secondary" className="bg-gray-100 text-xs sm:text-sm">
                            JavaScript
                          </Badge>
                        </motion.div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3"
                        onClick={navigateToContact}
                      >
                        BOOK A CALL
                      </Button>
                    </motion.div>
                  </div>
                  <motion.div
                    className="relative order-1 lg:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                      <div className="bg-white rounded-lg p-6 aspect-[4/3]">
                        <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <motion.div
                              className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            />
                            <div className="text-purple-600 font-semibold">Learning Platform</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="text-center mt-12 sm:mt-16">
                <motion.div whileHover={{ scale: 1.05, x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/work" className="text-orange-500 hover:text-orange-600 font-medium text-base sm:text-lg">
                    View All →
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection>
          <section
            className="py-12 sm:py-16 md:py-19 relative overflow-hidden"
            style={{
              background: "#FFFFFF",
            }}
          >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
                {/* Left side - Testimonial cards with masonry layout */}
                <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden order-2 lg:order-1">
                  {/* Left Column */}
                  <div className="absolute left-0 top-0 w-1/2 pr-1 sm:pr-2">
                    <div className="space-y-2 sm:space-y-4 transform -translate-y-4 sm:-translate-y-8">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "Working with this team has been an absolute pleasure. They delivered beyond our
                              expectations, even with our tight budget!"
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">Operations Director - Green Wave</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "They turned our ideas into reality with precision and creativity. Highly recommended for
                              anyone looking for top-notch results!"
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">Product Manager - NextGen</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "Their attention to detail and commitment to excellence are second to none. We couldn't be
                              happier with the final product."
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">CEO - Visionary Media</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "The team was a joy to work with. They listened to our needs and brought our project to
                              life with incredible skill."
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">Founder - Creative Solutions</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="absolute right-0 top-0 w-1/2 pl-1 sm:pl-2">
                    <div className="space-y-2 sm:space-y-4 transform translate-y-8 sm:translate-y-16">
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "Their creativity and professionalism are unmatched. They truly understood our needs and
                              delivered perfectly."
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">Marketing Manager - Bright Ideas Inc.</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "A fantastic experience from start to finish. The team was responsive, innovative, and
                              always ready to go the extra mile."
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">CEO - Tech Solutions Ltd.</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "Outstanding quality, fast delivery, and excellent communication throughout the project."
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">Head of Design - Urban Aesthetics</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.45 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.02 }}
                      >
                        <Card className="p-3 sm:p-4 bg-blue-600 border-blue-500 rounded-xl sm:rounded-2xl">
                          <CardContent className="p-0">
                            <div className="flex items-center mb-1 sm:mb-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <motion.div
                                  key={star}
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Star className="h-2 w-2 sm:h-3 sm:w-3 fill-yellow-400 text-yellow-400" />
                                </motion.div>
                              ))}
                            </div>
                            <p className="text-white mb-2 sm:mb-3 text-xs sm:text-sm leading-relaxed">
                              "Exceptional service and results that exceeded all our expectations. Highly recommend!"
                            </p>
                            <div>
                              <div className="text-white font-semibold text-xs sm:text-sm">ayotilewa</div>
                              <div className="text-blue-200 text-xs">Director - Innovation Hub</div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="text-left order-1 lg:order-2">
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
                    At PIXELSPHERE, our clients' satisfaction is our top priority. We take pride in the relationships we
                    build and the successes we help create.
                  </motion.p>
                  <motion.div
                    className="flex items-center mb-3 sm:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.span
                      className="text-orange-600 text-xl sm:text-2xl font-bold mr-2"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                        delay: 0.4,
                      }}
                      viewport={{ once: true }}
                    >
                      5.0
                    </motion.span>
                    <span className="text-black text-sm sm:text-base">from 100 reviewers</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-sm flex items-center justify-center mr-2"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-blue-600 font-bold text-xs sm:text-sm">G</span>
                    </motion.div>
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                      >
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
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
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Link href="/blog/build-professional-website" className="block group">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src="/images/office-workspace.png"
                          alt="UX review presentations"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <Badge className="bg-blue-100 text-blue-800 mb-2 sm:mb-3 text-xs sm:text-sm">Design</Badge>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center group-hover:text-orange-500 transition-colors duration-300">
                          UX review presentations
                          <motion.div
                            className="ml-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-orange-500 transition-colors duration-300" />
                          </motion.div>
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                          How do you create compelling presentations that wow your colleagues and impress your managers?
                        </p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-2 sm:mr-3"></div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                              Olivia Rhye
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                              12 July 2025
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Link href="/blog/migrating-to-linear" className="block group">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src="/images/office-team.png"
                          alt="Migrating to Linear 101"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <Badge className="bg-purple-100 text-purple-800 mb-2 sm:mb-3 text-xs sm:text-sm">Product</Badge>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center group-hover:text-orange-500 transition-colors duration-300">
                          Migrating to Linear 101
                          <motion.div
                            className="ml-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-orange-500 transition-colors duration-300" />
                          </motion.div>
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                          Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get
                          started.
                        </p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-2 sm:mr-3"></div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                              Phoenix Baker
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                              12 July 2025
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="sm:col-span-2 lg:col-span-1"
                >
                  <Link href="/blog/building-api-stack" className="block group">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src="/images/home-office.png"
                          alt="Building your API Stack"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4 sm:p-6">
                        <Badge className="bg-green-100 text-green-800 mb-2 sm:mb-3 text-xs sm:text-sm">
                          Software Engineering
                        </Badge>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center group-hover:text-orange-500 transition-colors duration-300">
                          Building your API Stack
                          <motion.div
                            className="ml-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileHover={{ x: 5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-orange-500 transition-colors duration-300" />
                          </motion.div>
                        </h3>
                        <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
                          The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing
                          them.
                        </p>
                        <div className="flex items-center">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-2 sm:mr-3"></div>
                          <div>
                            <div className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                              Lana Steiner
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                              12 July 2025
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
