"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Navbar,
  Footer,
  Reservation,
  ReservationHours,
  SpecialMenu,
  FAQ,
} from "@/components/drip-grind";

export default function DripGrindContactPage() {
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
    const element = document.getElementById("book-reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToContact = () => {
    // Since we're already on the contact page, scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookTable = () => {
    // Navigate to the reservation section on the same page
    const element = document.getElementById("book-reservation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log("Book a table clicked");
  };


  return (
    <div className="min-h-screen bg-white font-roboto">
      {/* Use the reusable Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/drip&grind-project/contactbg.jpg"
            alt="Restaurant interior background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Centered Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Get In Touch With{" "}
                <span className="text-red-600">Drip & Grind</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                We'd love to hear from you—whether you're planning your next
                visit, booking an event, or just craving good vibes and great
                coffee.
              </p>
            </div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleBookTable}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Table
              </Button>
            </motion.div>

            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-sm">Downtown Location</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span className="text-sm">Open Daily</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/*Reservation*/}
      <Reservation />

      {/*Reservation Hours*/}
      <ReservationHours onBookTable={navigateToReservation} onContactUs={navigateToContact} />

      {/*Special Menu*/}
      <SpecialMenu />

      {/*FAQ*/}
      <FAQ />

      {/* Use the reusable Footer component */}
      <Footer />
    </div>
  );
}
