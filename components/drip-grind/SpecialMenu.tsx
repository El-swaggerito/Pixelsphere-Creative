'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'

export default function SpecialMenu() {
  return (
    <>
      {/* Gallery Section - Black Background with Full-Width Vectors */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
              Visit Our Special Menu
            </h2>
          </div>

          {/* Gallery Layout with Full-Width Curved Lines */}
          <div className="relative">
            {/* Full-Width Red Curved Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 600" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Left Curve - Extends from far left */}
              <path 
                d="M0 300 Q 200 150, 400 300 Q 500 350, 600 300" 
                stroke="#DC2626" 
                strokeWidth="4" 
                fill="none"
                className="opacity-80"
              />
              {/* Right Curve - Extends to far right */}
              <path 
                d="M800 300 Q 900 250, 1000 300 Q 1200 150, 1400 300" 
                stroke="#DC2626" 
                strokeWidth="4" 
                fill="none"
                className="opacity-80"
              />
            </svg>

            {/* Image Grid */}
            <div className="grid grid-cols-5 gap-6 items-center relative z-10">
              {/* Left Side Image - Steak */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-1.png"
                  alt="Grilled steak with flames"
                  width={200}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Second Image - Burger */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-2.png"
                  alt="Gourmet burger stack"
                  width={200}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Center Image - Fruit Splash (Tallest) */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-3.png"
                  alt="Flying fruit splash ingredients"
                  width={250}
                  height={500}
                  className="w-full h-[32rem] object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Fourth Image - Burger (Mirror) */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-2.png"
                  alt="Gourmet burger stack"
                  width={200}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Right Side Image - Steak (Mirror) */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-1.png"
                  alt="Grilled steak with flames"
                  width={200}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Order Now Button */}
          <div className="text-center mt-16">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Order Now
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}