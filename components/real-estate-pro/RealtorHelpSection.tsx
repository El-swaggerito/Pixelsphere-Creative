'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function RealtorHelpSection() {
  return (
    <AnimatedSection>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See How Realtor Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get expert guidance to find, buy, or sell your dream property with ease.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buy a Property Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Buy a property
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
                Find a home
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Sell a Property Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  <circle cx="12" cy="8" r="2" strokeWidth={1.5} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sell a property
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200">
                Place an ad
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Rent a Property Card */}
            <div className="bg-white rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rent a property
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nullam sollicitudin blandit eros eu pretium. Nullam maximus ultricies auctor.
              </p>
              <button className="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-200">
                Find a rental
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}