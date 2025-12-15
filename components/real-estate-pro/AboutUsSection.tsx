'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function AboutUsSection() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Buying or Rent Real estate pro it's Very Easy.
              <br />
              Just like Click, Search & Find
            </h2>
          </div>

          {/* First Content Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                We live on Digital Era 4.0.
                <br />
                We can help you in Our
                <br />
                Expertise about REP
              </h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Listing more than one? Enjoy full control over your
                  advertisements, manage your entire space. Once you
                  list a property on our platform, you only have to sit back
                  and watch the world want it.
                </p>
                <p>
                  If you're looking for a real estate service that will operate
                  as an extension to your family - stay with
                  us and see!
                </p>
              </div>
              <a href="/real-estate-pro/about#vision-heading" className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300 mt-8">
                Explore Now
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="/images/realestatepro/about1.png"
                  alt="Modern white house with contemporary architecture showcasing our real estate expertise"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Second Content Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="relative">
                <img
                  src="/images/realestatepro/about2.png"
                  alt="Multi-story residential building demonstrating our transparent commission and payment system"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div className="order-2">
              <h3 className="text-3xl font-bold mb-6 leading-tight">
                Transparent Commission
                <br />
                and Payment under Our
                <br />
                Trusted License
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                When your property Sold, Buyed or Booked with New
                Guests. You may to have 50% Commission based on
                Budget Deals. So, Don't Worry brother :)
              </p>
              {/* Features List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">100% Trusted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Customer Support 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Indomaret Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">Get paid quick!</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-300">LinkAja or Ovo, Bebas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
