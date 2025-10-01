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
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Target, Calendar } from "lucide-react";

export default function HopeFoundationCampaignPage() {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
            id="campaign-hero"
            className="relative min-h-[80vh] flex items-center overflow-hidden"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hopefoundation-project/campaignbg.png"
                alt="Hope Foundation Campaign Background"
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
                    Empowering Change, 
                    One Campaign at a Time
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
                        Campaigns
                      </span>
                    </nav>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </section>
        </AnimatedSection>

        {/* Active Campaigns Section */}
        <AnimatedSection>
          <section id="active-campaigns" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4">
                  OUR CAMPAIGNS
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  TURNING ACTIONS INTO RESULTS
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Turning Actions into Results Your support is making real, measurable change. This is just the beginning. Every contribution, whether big or small, fuels the momentum for a better tomorrow.
                </p>
              </motion.div>

              {/* Campaign Cards - Single Column Layout */}
              <div className="space-y-12">
                {/* Campaign Card 1 - Clean Water for All */}
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Campaign Image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/hopefoundation-project/Img.png"
                      alt="Clean Water Initiative"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Campaign Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Clean Water for All
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Access to clean and safe water is a fundamental human right, yet millions around the world still lack this basic necessity. Our Clean Water for All campaign focuses on building sustainable water infrastructure in underserved communities, providing clean water access, proper sanitation, and related health opportunities for growth.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Through partnerships with local organizations and direct community involvement, we're not just providing immediate relief but building long-term solutions. Our approach includes drilling wells, installing water purification systems, educating communities about water safety, and building living water to every corner of the globe.
                    </p>
                    
                    {/* Goal and Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold text-gray-900">Goal: $100000</span>
                        <span className="text-lg font-semibold text-gray-900">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full transition-all duration-500" style={{ width: "75%" }}></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">Raised: $75,000</span>
                        <span className="text-sm text-gray-600">75 Donors</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-medium">
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>

                {/* Campaign Card 2 - Improve Education */}
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {/* Campaign Image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/hopefoundation-project/Img (1).png"
                      alt="Education Initiative"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Campaign Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Improve Education
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Education is the cornerstone of sustainable development. It empowers individuals, strengthens communities, and builds nations. Our Improve Education campaign focuses on providing quality education to children and adults in underserved areas, breaking the cycle of poverty through knowledge and skills development.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      Education is our privilege — it's a right. When we invest in a child's learning, we invest in the future of our world. Join us in building schools, training teachers, and providing the materials and resources that make education accessible to all.
                    </p>
                    
                    {/* Goal and Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold text-gray-900">Goal: $150000</span>
                        <span className="text-lg font-semibold text-gray-900">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-yellow-500 h-3 rounded-full transition-all duration-500" style={{ width: "60%" }}></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">Raised: $90,000</span>
                        <span className="text-sm text-gray-600">120 Donors</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-medium">
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>

                {/* Campaign Card 3 - End Hunger */}
                <motion.div
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Campaign Image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src="/images/hopefoundation-project/Img (2).png"
                      alt="End Hunger Initiative"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Campaign Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      End Hunger
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      In a world that produces enough food to feed everyone, hunger is a solvable crisis. Yet, nearly 735 million people faced acute food insecurity in 2023. Our End Hunger campaign tackles this urgent issue through comprehensive food security programs, sustainable agriculture initiatives, and emergency food assistance.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      A life without hunger is within reach for everyone, but providing nourishment and creating sustainable food systems requires collective action. Join us in our mission to ensure that no one goes to bed hungry, and that communities have the tools and resources they need to feed themselves sustainably.
                    </p>
                    
                    {/* Goal and Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-semibold text-gray-900">Goal: $200000</span>
                        <span className="text-lg font-semibold text-gray-900">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full transition-all duration-500" style={{ width: "85%" }}></div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm text-gray-600">Raised: $170,000</span>
                        <span className="text-sm text-gray-600">200 Donors</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 text-lg font-medium">
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>


        {/* Donation Section */}
        <AnimatedSection>
          <DonateSection />
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection>
          <HopeFoundationFooter />
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}