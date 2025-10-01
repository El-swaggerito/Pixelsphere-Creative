"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Import the new reusable components
import {
  Navbar,
  PopularMeals,
  FAQ,
  Reservation,
  Footer,
  SpecialMenu,
} from "@/components/drip-grind";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

// ... existing code for popularMeals, customerExperience arrays and other data ...

export default function DripGrindPage() {
   const router = useRouter();

  const navigateToTrendingMenu = () => {
    router.push("/drip-grind/menu#trending-menu");
  };

  const navigateToReservation = () => {
    router.push("/drip-grind/contact#book-reservation");
  };

  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Use the reusable Navbar component */}
      <Navbar />
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/images/drip&grind-project/hero-bg.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 pt-16">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Hero Text - Exact Specification */}
            <h1 className="font-roboto text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-wide mb-6">
              Welcome to{" "}
              <span className="text-red-500 font-medium">Élégance</span>, a
              refined destination for{" "}
              <span className="text-red-500 font-medium">culinary</span>{" "}
              connoisseurs.
            </h1>
          </motion.div>

          <motion.p
            className="font-roboto text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto mb-12 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience a symphony of flavors, curated wines, and impeccable
            <br className="hidden md:block" />
            service all in an atmosphere of timeless sophistication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              className="font-roboto bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={navigateToTrendingMenu}
            >
              View Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Use the reusable PopularMeals component */}
      <PopularMeals />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Deliver a high-quality{" "}
                  <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg">
                    customer
                  </span>
                  <br />
                  <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg mt-2">
                    experience
                  </span>
                </h2>
              </div>

              {/* Description Text */}
              <div>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  Born out of a passion for curated culinary experiences, we
                  bring together the richness of global cuisine with the warmth
                  of local hospitality. Every dish is a celebration —
                  thoughtfully plated, responsibly sourced, and flawlessly
                  served.
                </p>
              </div>

              {/* Book a Table Button */}
              <div>
                <Button 
                  onClick={navigateToReservation}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book a Table
                </Button>
              </div>
            </div>

            {/* Right Content - Precise Height Control */}
            <div className="grid grid-cols-2 grid-rows-6 gap-4 h-[36rem]">
              {/* Top-left: customerexp-1 (Increased Standard Height - Steak) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/customerexperience-1.png"
                  alt="Grilled steak with flames"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Top-right: customerexp-2 (Much Taller Height - Burger) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/customerexperience-2.png"
                  alt="Gourmet burger stack"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-left: customerexp-3 (Much Taller Height - Fruit Splash) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/customerexperience-3.png"
                  alt="Flying fruit splash ingredients"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-right: customerexp-4 (Increased Standard Height - Rice Bowl) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/customerexperience-4.png"
                  alt="Rice bowl dish presentation"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Use the reusable SpecialMenu component */}
      <SpecialMenu />

            {/* Restaurant Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Image Grid */}
            <div className="grid grid-cols-2 grid-rows-6 gap-4 h-[36rem]">
              {/* Top-left: customerexp-1 (Increased Standard Height - Steak) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/burrito-1.png"
                  alt="burrito"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Top-right: customerexp-2 (Much Taller Height - Burger) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/burrito-2.png"
                  alt="burrito"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-left: customerexp-3 (Much Taller Height - Fruit Splash) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/burrito-3.png"
                  alt="burrito"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-right: customerexp-4 (Increased Standard Height - Rice Bowl) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/burrito-4.png"
                  alt="burrito"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Content - Restaurant Info */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6">
                  Ranked #1 high-
                  <br />
                  quality{" "}
                  <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl">
                    Fast Food
                  </span>
                  <br />
                  <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl mt-2">
                    Restaurant
                  </span>
                  <div className="flex items-center mt-4">
                    <div className="bg-white rounded-full p-1 border-2 border-gray-200 flex items-center">
                      <div className="rounded-full p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                          <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>

              {/* Restaurant Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-40">
                  <h3 className="text-xl font-bold text-gray-900">Phulka Cuisine</h3>
                
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Chicago</span>
                  </div>
                </div>

                
                <div className="flex items-center gap-48 text-gray-600">
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span>4.3 (500+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Free</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg">
                Indulge in the art of modern cuisine at Drip & Grind, a high-end
                restaurant that blends gourmet dishes, minimalist design, and
                specialty coffee into one unforgettable experience.
              </p>

              {/* View Menu Button */}
              <div>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={navigateToTrendingMenu}
                >
                  View Our Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Use the reusable FAQ component */}
      <FAQ />

      {/* Use the reusable Reservation component */}
      <Reservation
        onSubmit={(formData) => {
          // Handle reservation submission
          console.log("Reservation submitted:", formData);
        }}
      />

      {/* Use the reusable Footer component */}
      <Footer />
    </div>
  );
}
