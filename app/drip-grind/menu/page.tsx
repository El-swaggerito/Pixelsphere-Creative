"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";

// Import the reusable components
import {
  Navbar,
  Footer,
  PopularMeals,
  SpecialMenu,
  FAQ,
} from "@/components/drip-grind";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Use the reusable Navbar component */}
      <Navbar />
      
      {/* About Us Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/drip&grind-project/menu.jpg"
            alt="Delicious food collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Hero Text - Exact match to reference */}
            <h1 className="font-roboto text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              The Best Food
              <br />
              Collection <span className="text-red-500">2025</span>
            </h1>
          </motion.div>

          <motion.p
            className="font-roboto text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From early morning cravings to elegant dinner pairings, our menu
            <br className="hidden md:block" />
            blends modern flavors, premium ingredients, and artful presentation
            <br className="hidden md:block" />
            for a dining experience like no other.
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
                const reservationSection = document.getElementById("reservation");
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

      {/* Deal of the Day Section - Mobile Responsive */}
      <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-black">
        <div className="w-full h-full flex flex-col lg:flex-row">
          {/* Left Side - Deal Information */}
          <div className="w-full lg:w-1/3 bg-[#A8151D] flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 min-h-[60vh] lg:min-h-full">
            <div className="text-white max-w-lg w-full">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-white/90 text-base sm:text-lg font-medium mb-3 sm:mb-4 tracking-wide">
                  Deal Of The Day
                </p>
                
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6">
                  TODAY'S The
                  <br />
                  Hamburger DAY
                </h2>
                
                <div className="flex items-center mb-4 sm:mb-5 flex-wrap gap-2">
                  <p className="text-white/90 text-base sm:text-lg">Special Price </p>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold">$55</p>
                </div>
                
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-md">
                  Savor the perfect symphony of flavors It's the perfect dining 
                  experience where Experience quick and efficient with our 
                  signature hamburger, a culinary
                </p>
                
                <Button
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg transition-all duration-300 flex items-center gap-3 group w-full sm:w-auto justify-center"
                >
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-red-600" />
                  Order Now
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Right Side - Food Image */}
          <div className="w-full lg:w-2/3 relative bg-black min-h-[40vh] lg:min-h-full">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <Image
              src="/images/drip&grind-project/deal.jpg"
              alt="Today's hamburger special"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trending Food Menu Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 mb-8">
              Trending Food Menu
            </h2>
          </motion.div>

          {/* Menu Grid */}
          <div className="bg-black border border-gray-200 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Chicago Deep Pizza */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICAGO DEEP PIZZA
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$22.00</span>
                  </div>
                </motion.div>

                {/* Chicago Burger King */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      Chicago Burger King.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$26.00</span>
                  </div>
                </motion.div>

                {/* Chicago French Fries */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      Chicago French Fries.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$28.00</span>
                  </div>
                </motion.div>

                {/* Chicago Beef Jerky */}
                <motion.div
                  className="flex justify-between items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      Chicago Beef Jerky.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$39.00</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Chinese Pasta */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHINESE PASTA
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$34.00</span>
                  </div>
                </motion.div>

                {/* Chicago Chicken Wings */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      Chicago Chicken Wings.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$39.00</span>
                  </div>
                </motion.div>

                {/* Chicago Deep Pasta */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      Chicago Deep Pasta.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$34.00</span>
                  </div>
                </motion.div>

                {/* Chicago Salad Recipes */}
                <motion.div
                  className="flex justify-between items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      Chicago Salad Recipes.
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$26.00</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Meals Section */}
      <PopularMeals />

      {/*Special Menu Section */}
      <SpecialMenu />

      {/*FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}