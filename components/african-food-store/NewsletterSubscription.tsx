'use client'

import Image from 'next/image'

/**
 * AfricanFoodNewsletter
 * Renders the newsletter subscription callout section with headline, input and image.
 * Usage: place within page content where the CTA should appear.
 */
export function AfricanFoodNewsletter(): JSX.Element {
  return (
    <section className="bg-gradient-to-r from-green-100 to-green-50 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 lg:pr-12 mb-8 lg:mb-0">
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                SALE 20% OFF ALL STORE
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Subscribe our Newsletter
            </h2>
            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 placeholder-gray-500"
              />
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 relative">
            <Image
              src="/images/africanfoodstore-project/cta.png"
              alt="Newsletter Subscription"
              width={400}
              height={400}
              className="w-full max-w-sm lg:max-w-md h-auto"
            />
            {/* Purple Dot Accent */}
            <div className="absolute top-8 left-8 w-4 h-4 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}