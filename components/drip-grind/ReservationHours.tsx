"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ReservationHoursProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  mondayToFridayHours?: string;
  weekendHours?: string;
  onBookTable?: () => void;
  onContactUs?: () => void;
}

export default function ReservationHours({
  backgroundImage = "/images/drip&grind-project/reservation-bg.png",
  title = "Working Hours",
  subtitle = "RESERVATION",
  mondayToFridayHours = "09:00 AM - 10.00 PM",
  weekendHours = "09:00 AM - 10.00 PM",
  onBookTable,
  onContactUs
}: ReservationHoursProps) {
  const handleBookTable = () => {
    if (onBookTable) {
      onBookTable();
    } else {
      // Default behavior - you can customize this
      console.log('Book a table clicked');
    }
  };

  const handleContactUs = () => {
    if (onContactUs) {
      onContactUs();
    } else {
      // Default behavior - you can customize this
      console.log('Contact us clicked');
    }
  };

  return (
    <section className="relative py-48 bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
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
                {subtitle}
              </p>
              <div className="w-20 h-1 bg-red-600 mb-4"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                {title}
              </h2>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleBookTable}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium"
              >
                BOOK A TABLE
              </Button>
              <Button
                onClick={handleContactUs}
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
              <p className="text-white/90 text-lg">{mondayToFridayHours}</p>
            </div>

            {/* Saturday to Sunday */}
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h3 className="text-white text-xl font-bold mb-2">
                Saturday to Sunday
              </h3>
              <p className="text-white/90 text-lg">{weekendHours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}