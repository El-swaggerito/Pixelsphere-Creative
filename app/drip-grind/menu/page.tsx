"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  // Handle hash navigation on page load
  useEffect(() => {
    if (window.location.hash) {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const navigateToReservation = () => {
    router.push("/drip-grind/contact#book-reservation");
  };

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
            {/* Main Hero Text - Matching the reference design */}
            <h1 className="font-roboto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Discover Our Culinary
              <br />
              <span className="text-red-500">Masterpieces</span>
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8"
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
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={navigateToReservation}
            >
              Book a Table
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Deal of the Day Section - Mobile Responsive */}
      <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-black">
        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen lg:min-h-0">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-white order-2 lg:order-1 py-12 lg:py-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-red-500 text-sm font-medium tracking-wider uppercase mb-4">
                  DEAL OF THE DAY
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Today's Special
                  <br />
                  <span className="text-red-500">Hamburger</span>
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                  Indulge in our signature hamburger crafted with premium beef,
                  fresh vegetables, and our secret sauce. Available only today
                  with a special discount!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                  <div className="text-3xl sm:text-4xl font-bold text-red-500">
                    $12.99
                    <span className="text-lg text-gray-400 line-through ml-2">
                      $18.99
                    </span>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Order Now
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2 h-64 sm:h-80 lg:h-96">
              <Image
                src="/images/drip&grind-project/deal.jpg"
                alt="Today's hamburger special"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trending Food Menu Section */}
      <section id="trending-menu" className="py-20 bg-black">
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
                      CHICAGO BURGER KING
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$18.00</span>
                  </div>
                </motion.div>

                {/* Chicken Burger */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICKEN BURGER
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$15.00</span>
                  </div>
                </motion.div>

                {/* Chicken Fry */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICKEN FRY
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$12.00</span>
                  </div>
                </motion.div>

                {/* Chicken Masala */}
                <motion.div
                  className="flex justify-between items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICKEN MASALA
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$20.00</span>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Chicken Leg Fry */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICKEN LEG FRY
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$16.00</span>
                  </div>
                </motion.div>

                {/* French Fry */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      FRENCH FRY
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$8.00</span>
                  </div>
                </motion.div>

                {/* Chicken Chap */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICKEN CHAP
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$14.00</span>
                  </div>
                </motion.div>

                {/* Chicken Biryani */}
                <motion.div
                  className="flex justify-between items-start pb-6 border-b border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICKEN BIRYANI
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$25.00</span>
                  </div>
                </motion.div>

                {/* Chicken Roast */}
                <motion.div
                  className="flex justify-between items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      CHICKEN ROAST
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Its the perfect dining experience where Experience quick and efficient
                    </p>
                  </div>
                  <div className="ml-6">
                    <span className="text-2xl font-bold text-red-600">$19.00</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use the reusable PopularMeals component */}
      <PopularMeals />

      {/* Use the reusable SpecialMenu component */}
      <SpecialMenu />

      {/* Use the reusable FAQ component */}
      <FAQ />

      {/* Use the reusable Footer component */}
      <Footer />
    </div>
  );
}