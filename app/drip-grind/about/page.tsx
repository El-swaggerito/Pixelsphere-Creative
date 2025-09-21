"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Utensils, Bean, ChefHat } from "lucide-react";

// Import the reusable components
import { Navbar, Footer, SpecialMenu, FAQ } from "@/components/drip-grind";

export default function DripGrindAboutPage() {
  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Use the reusable Navbar component */}
      <Navbar />

      {/* About Us Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/drip&grind-project/aboutusbg.jpg"
            alt="Sophisticated dining space"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Hero Text - Matching the reference design */}
            <h1 className="font-roboto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Sophisticated Space That
              <br />
              Nurtures Great <span className="text-red-500">Taste</span>
            </h1>
          </motion.div>

          <motion.p
            className="font-roboto text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're here for a curated tasting menu or a perfectly brewed
            <br className="hidden md:block" />
            espresso, our space is designed to delight the senses and inspire
            <br className="hidden md:block" />
            connection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              className="font-roboto bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                // Scroll to reservation section or navigate to reservation page
                const reservationSection =
                  document.getElementById("reservation");
                if (reservationSection) {
                  reservationSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book a Table
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-white text-sm font-medium tracking-wider uppercase">
                ABOUT US
              </p>
              <div className="w-16 h-1 bg-red-600"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Where Modern Dining Meets Timeless Taste
              </h2>
              <p className="text-[#797B78] text-lg leading-relaxed">
                At Drip & Grind, we’re more than a restaurant we’re an
                experience. Nestled in the heart of the city, our high-end
                modern eatery blends bold flavors, elegant ambiance, and
                artisanal craftsmanship to serve up meals that linger in memory
                long after the last bite.
              </p>
              <p className="text-[#797B78] text-lg leading-relaxed">
                Born out of a passion for curated culinary experiences, we bring
                together the richness of global cuisine with the warmth of local
                hospitality. Every dish is a celebration thoughtfully plated,
                responsibly sourced, and flawlessly served.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/drip&grind-project/about-1.png"
                  alt="Chef preparing gourmet dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            {/* Left Image */}
            <div className="relative lg:order-1">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/drip&grind-project/about-2.png"
                  alt="Chef plating dish"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 lg:order-2">
              <p className="text-white text-sm font-medium tracking-wider uppercase">
                OUR MISSION
              </p>
              <div className="w-16 h-1 bg-red-600"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                What Makes Us Different:
              </h2>
              <p className="text-[#797B78] text-lg leading-relaxed">
                To create a dining space where food lovers, creatives, and
                connoisseurs come together to enjoy not just what's on the
                plate, but the atmosphere, aesthetics, and community that
                surrounds it.
              </p>
              <div className="space-y-4">
                <p className="text-[#797B78] text-base">
                  <strong>Chef-Curated Menus:</strong> Seasonal and locally
                  inspired menus crafted by top culinary talent.
                </p>
                <p className="text-[#797B78] text-base">
                  <strong>Refined Ambiance:</strong> A sleek, minimalist
                  interior designed to match our modern, upscale vibe.
                </p>
                <p className="text-[#797B78] text-base">
                  <strong>Coffee Culture Redefined:</strong> Specialty brews and
                  gourmet espresso crafted with precision and style.
                </p>
                <p className="text-[#797B78] text-base">
                  <strong>Locally Roasted, Globally Inspired:</strong> We honor
                  local ingredients while infusing international flair.
                </p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-medium rounded-lg">
                READ MORE
              </Button>
            </div>
          </div>

          {/* Third Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-white text-sm font-medium tracking-wider uppercase">
                OUR TEAM
              </p>
              <div className="w-16 h-1 bg-red-600"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                The Minds Behind the Flavour
              </h2>
              <p className="text-[#797B78] text-lg leading-relaxed">
                At Drip & Grind, we believe that great food begins with great
                people. Our team is a passionate mix of chefs, baristas, and
                hospitality professionals who bring dedication, creativity, and
                precision to every plate and pour.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-base font-medium rounded-lg">
                READ MORE
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/images/drip&grind-project/about-3.png"
                  alt="Chef in kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Why people choose us?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
              At Drip & Grind, we believe that great food begins with great
              people. Our team is a passionate mix of chefs, baristas, and
              hospitality professionals who bring dedication, creativity, and
              precision to every plate and pour.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Menu for Every Taste */}
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                MENU FOR EVERY TASTE
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Our chef-driven menus combine bold flavours, seasonal
                ingredients, and artistic presentation, all served in an
                atmosphere designed for elegance and ease.
              </p>
            </div>

            {/* Personalized Guest Experience */}
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Bean className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                PERSONALIZED GUEST EXPERIENCE
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                We pride ourselves on warm, attentive service. From reservation
                to final bite, our team ensures you feel seen, celebrated, and
                satisfied — every visit.
              </p>
            </div>

            {/* Experienced Chefs */}
            <div className="text-center space-y-6">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                EXPERIENCED CHEFS
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Our team is a passionate mix of chefs, baristas, and hospitality
                professionals who bring dedication, creativity, and precision to
                every plate and pour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="relative py-48 bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/drip&grind-project/reservation-bg.png"
            alt="Chef preparing food"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-white/80 text-sm font-medium tracking-wider uppercase mb-4">
                  RESERVATION
                </p>
                <div className="w-20 h-1 bg-red-600 mb-4"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                  Working Hours
                </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium">
                  BOOK A TABLE
                </Button>
                <Button
                  variant="outline"
                  className="bg-inherit border-none text-white hover:bg-inherit hover:text-white px-8 py-3 text-base font-medium"
                >
                  CONTACT US
                </Button>
              </div>
            </div>

            {/* Right Content - Working Hours */}
            <div className="space-y-8">
              {/* Monday to Friday */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-white text-xl font-bold mb-2">
                  Monday to Friday
                </h3>
                <p className="text-white/90 text-lg">09:00 AM - 10.00 PM</p>
              </div>

              {/* Saturday to Sunday */}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-white text-xl font-bold mb-2">
                  Saturday to Sunday
                </h3>
                <p className="text-white/90 text-lg">09:00 AM - 10.00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Menu*/}
      <SpecialMenu />

      {/* FAQ */}
      <FAQ />
      {/* Use the reusable Footer component */}
      <Footer />
    </div>
  );
}
