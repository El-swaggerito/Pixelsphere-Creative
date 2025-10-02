"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  HopeFoundationNavbar,
  DonateSection,
  HopeFoundationFooter,
} from "@/components/hope-foundation";
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
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "Movement, sans-serif" }}
      >
        {/* Navigation */}
        <HopeFoundationNavbar />

        {/* Hero Section */}
        <AnimatedSection>
          <section
            id="about-hero"
            className="relative min-h-[80vh] flex items-center overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hopefoundation-project/contactbg.png"
                alt="Hope Foundation About Us Background"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle overlay for text visibility */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"
                aria-hidden="true"
              ></div>
            </div>

            {/* Hero Content - Left Aligned */}
            <motion.div
              className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center min-h-[80vh]">
                <div className="w-full lg:w-1/2 xl:w-2/5">
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    variants={itemVariants}
                  >
                    Empowering Change, One Campaign at a Time
                  </motion.h1>

                  <motion.div className="mb-4" variants={itemVariants}>
                    {/* Breadcrumb Navigation */}
                    <nav
                      aria-label="Breadcrumb"
                      className="flex items-center space-x-2 text-sm md:text-base"
                    >
                      <Link
                        href="/hope-foundation"
                        className="text-white hover:text-yellow-400 transition-colors duration-200"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        Home
                      </Link>
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                      <span
                        className="text-yellow-400"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        Contact
                      </span>
                    </nav>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section
            id="contact-form"
            className="py-16 md:py-20 bg-white"
            style={{ fontFamily: "Movement, sans-serif" }}
          >
            {/* Section Header */}
            <div className="max-w-5xl mx-auto text-center px-6">
              <p
                className="text-xs tracking-widest font-semibold mb-3"
                style={{ color: "#7B2B2B", letterSpacing: "0.18em" }}
              >
                OUR CAMPAIGN
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-[40px] font-black mb-4"
                style={{ color: "#111111" }}
              >
                TURNING ACTIONS INTO RESULTS
              </h2>
              <p className="text-[15px] md:text-base leading-7 text-gray-700 max-w-3xl mx-auto">
                Turning Actions into Results Your support is making real,
                measurable change. This is just the beginning. Every
                contribution, whether big or small, fuels the momentum for a
                better tomorrow.
              </p>
            </div>

            {/* Form + Address Grid */}
            <div className="max-w-6xl mx-auto mt-12 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 px-6">
              {/* Left: Form */}
              <form className="lg:col-span-8">
                {/* Row 1: Fast name / Last name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fast name
                    </label>
                    <input
                      type="text"
                      placeholder="Your"
                      className="w-full h-12 px-4 text-gray-800 text-sm border border-[#E6E3D6] bg-[#F5F4EA] focus:outline-none focus:ring-2 focus:ring-[#D6D2C4]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-12 px-4 text-gray-800 text-sm border border-[#E6E3D6] bg-[#F5F4EA] focus:outline-none focus:ring-2 focus:ring-[#D6D2C4]"
                    />
                  </div>
                </div>

                {/* Row 2: Mail / Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mail
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full h-12 px-4 text-gray-800 text-sm border border-[#E6E3D6] bg-[#F5F4EA] focus:outline-none focus:ring-2 focus:ring-[#D6D2C4]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+880"
                      className="w-full h-12 px-4 text-gray-800 text-sm border border-[#E6E3D6] bg-[#F5F4EA] focus:outline-none focus:ring-2 focus:ring-[#D6D2C4]"
                    />
                  </div>
                </div>

                {/* Row 3: Massage */}
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Massage
                  </label>
                  <textarea
                    rows={8}
                    placeholder="Type Your Massage Here..."
                    className="w-full px-4 py-3 text-gray-800 text-sm border border-[#E6E3D6] bg-[#F5F4EA] focus:outline-none focus:ring-2 focus:ring-[#D6D2C4] resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="mt-6 h-12 px-6 inline-flex items-center justify-center text-sm font-bold tracking-wide text-white bg-[#1F1F1F] hover:bg-[#2A2A2A] active:bg-[#141414] transition-colors duration-200"
                >
                  SEND MESSAGE
                </button>
              </form>

              {/* Right: Address Card */}
              <aside className="lg:col-span-4 p-8 border border-[#E6E3D6] bg-[#F5F4EA]">
                <h3
                  className="text-2xl font-extrabold mb-4"
                  style={{ color: "#111111" }}
                >
                  Address
                </h3>
                <p className="text-sm leading-6 text-gray-700 mb-6">
                  Quam Elementum Pulvinar Etiam Non Quam Lacus Suspendisse. A
                  Scelerisque Purus Semper Eget Duis At Lobortis scelerisque
                  Fermentum Dui Faucibus In Ornare....
                </p>

                <div className="space-y-4 text-sm">
                  <p className="text-gray-900">
                    <span className="font-semibold">Location :</span> 4517
                    Washington Ave. Manchester, Kentucky 39495
                  </p>
                  <p className="text-gray-900">
                    <span className="font-semibold">Phone :</span> +88544767456
                  </p>
                  <p className="text-gray-900">
                    <span className="font-semibold">Email :</span>{" "}
                    Givelifecharity@Gmail.Com
                  </p>
                </div>
              </aside>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Impact Section */}
        <AnimatedSection>
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4">
                  OUR IMPACT
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  FIGHTING FOR A BETTER TOMORROW
                </h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Turning Actions into Results Your support is making real,
                  measurable change. This is just the beginning. Every
                  contribution, whether big or small, fuels the momentum for a
                  better tomorrow.
                </p>
              </motion.div>

              {/* Impact Cards Grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Clean Water Card */}
                <motion.div
                  className="bg-blue-900 text-white p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    CLEAN WATER TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>

                {/* Free Education Card */}
                <motion.div
                  className="bg-red-700 text-white p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    FREE EDUCATION TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>

                {/* Free Healthcare Card */}
                <motion.div
                  className="bg-orange-600 text-white p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    FREE HEALTHCARE TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>

                {/* Relief Care Card */}
                <motion.div
                  className="bg-yellow-200 text-gray-900 p-12 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm font-medium mb-4 tracking-wide">
                    RELIEF CARE TO
                    <br />
                    OVER COMMUNITIES
                  </p>
                  <div className="text-6xl lg:text-7xl font-bold">234</div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <DonateSection />
        </AnimatedSection>

        <AnimatedSection>
          <HopeFoundationFooter />
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}
