"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  AfricanFoodHeaderNav,
  AfricanFoodNewsletter,
  AfricanFoodFooter,
  AfricanFoodProductShowcase,
  AfricanFoodTrendingProducts,
} from "@/components/african-food-store";

export default function AfricanFoodStorePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <AfricanFoodHeaderNav />

      {/* Hero Section */}
      <main>
        <section className="relative bg-gradient-to-br from-green-50 via-green-75 to-green-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row items-center min-h-[600px] lg:min-h-[700px]">
              {/* Left Content */}
              <div className="flex-1 py-12 lg:py-16 text-center lg:text-left">
                <div className="max-w-xl mx-auto lg:mx-0">
                  {/* Tagline */}
                  <p className="text-sm sm:text-base font-medium text-gray-600 mb-4 tracking-wide uppercase">
                    Authentic. Affordable. African.
                  </p>

                  {/* Main Heading */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight mb-6">
                    Bringing a Taste of
                    <br />
                    <span className="text-green-600 relative">
                      Africa
                      <svg
                        className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400 opacity-60"
                        viewBox="0 0 200 12"
                        fill="currentColor"
                      >
                        <path d="M0,8 Q50,2 100,8 T200,8 L200,12 L0,12 Z" />
                      </svg>
                    </span>{" "}
                    to Your
                    <br />
                    Canadian Doorstep
                  </h1>

                  {/* Offer */}
                  <div className="mb-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg inline-block">
                    <p className="text-lg text-gray-700 mb-2 font-medium">
                      Exclusive offer
                    </p>
                    <div className="flex items-baseline justify-center lg:justify-start space-x-2">
                      <span className="text-4xl sm:text-5xl font-bold text-yellow-500 drop-shadow-sm">
                        35%
                      </span>
                      <span className="text-lg text-gray-700 font-medium">
                        off this week
                      </span>
                    </div>
                  </div>

                  {/* CTA Button - positioned right under the offer card */}
                  <div className="mb-8">
                    <button
                      type="button"
                      onClick={() => router.push("/african-food-store/shop")}
                      className="relative z-10 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 active:scale-95"
                      aria-label="Shop now for African groceries"
                    >
                      Shop Now
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex-1 relative mt-8 lg:mt-0">
                <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
                  <Image
                    src="/images/africanfoodstore-project/hero.png"
                    alt="Fresh African groceries in shopping bag with vegetables and fruits"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="pointer-events-none absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="pointer-events-none absolute bottom-20 right-20 w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
                <div className="pointer-events-none absolute top-1/2 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full opacity-25"></div>
                <div className="pointer-events-none absolute top-1/4 left-10 w-4 h-4 bg-red-400 rounded-full opacity-30 animate-ping"></div>

                {/* Floating Elements */}
                <div className="pointer-events-none absolute top-20 left-5 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg animate-float">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <div className="pointer-events-none absolute bottom-32 left-8 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg animate-float-delayed">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none -z-10">
            <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 border-2 border-green-600 rounded-full"></div>
            <div className="absolute bottom-20 left-40 w-20 h-20 sm:w-24 sm:h-24 border-2 border-yellow-500 rounded-full"></div>
            <div className="absolute top-40 right-60 w-12 h-12 sm:w-16 sm:h-16 border-2 border-orange-500 rounded-full"></div>
            <div className="absolute top-60 left-1/4 w-8 h-8 border-2 border-red-400 rounded-full"></div>
          </div>

          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes float {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }
            @keyframes float-delayed {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-15px);
              }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }
            .animate-float-delayed {
              animation: float-delayed 4s ease-in-out infinite 1s;
            }
          `}</style>
        </section>

        {/* Categories Section */}
        <section
          className="py-16 bg-white"
          aria-labelledby="categories-heading"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
              {/* Fresh & Dry Food */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/africanfoodstore-project/fresh.png"
                      alt="Fresh and dry African food products"
                      width={80}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
                  Fresh & Dry Food
                </h3>
                <p className="text-sm text-gray-600 text-center">3 Product</p>
              </div>

              {/* Snacks & Beverages */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/africanfoodstore-project/snacks.png"
                      alt="African snacks and beverages"
                      width={80}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
                  Snacks & Beverages
                </h3>
                <p className="text-sm text-gray-600 text-center">3 Product</p>
              </div>

              {/* Vegetables */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/africanfoodstore-project/vegetable.png"
                      alt="Fresh African vegetables"
                      width={80}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
                  Vegetables
                </h3>
                <p className="text-sm text-gray-600 text-center">2 Product</p>
              </div>

              {/* Natural Body & Hair Care */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/africanfoodstore-project/natural.png"
                      alt="Natural African body and hair care products"
                      width={80}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
                  Natural Body & Hair Care
                </h3>
                <p className="text-sm text-gray-600 text-center">3 Product</p>
              </div>

              {/* Kitchen Staples */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mb-4 transition-transform duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/africanfoodstore-project/kitchen.png"
                      alt="African kitchen staples and cooking essentials"
                      width={80}
                      height={80}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">
                  Kitchen Staples
                </h3>
                <p className="text-sm text-gray-600 text-center">2 Product</p>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Free Delivery */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Free Delivery
                  </h4>
                  <p className="text-sm text-gray-600">Orders from all item</p>
                </div>
              </div>

              {/* Return & Refund */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Return & Refund
                  </h4>
                  <p className="text-sm text-gray-600">Money back guarantee</p>
                </div>
              </div>

              {/* Member Discount */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Member Discount
                  </h4>
                  <p className="text-sm text-gray-600">
                    One very order over $140.00
                  </p>
                </div>
              </div>

              {/* Support 24/7 */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Support 24/7
                  </h4>
                  <p className="text-sm text-gray-600">
                    Contact us 24 hours a day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Products Section */}
        <AfricanFoodTrendingProducts />

        {/* Deal of the Day Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-12">
              <div className="relative">
                <h2 className="text-4xl font-bold text-gray-900 relative z-10">
                  Deal of The Day
                </h2>
                {/* Curved Vector Line Behind Text */}
                <div className="absolute -bottom-2 left-0 w-full">
                  <svg
                    width="280"
                    height="20"
                    viewBox="0 0 280 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                  >
                    <path
                      d="M5 15C25 5, 45 18, 75 12C105 6, 135 16, 165 10C195 4, 225 14, 255 8C265 6, 275 8, 275 8"
                      stroke="#EF4444"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>

              <a href="/african-food-store/shop" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2">
                <span>View All Deals</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Deal Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Deal Card 1 - Black seed oil */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative aspect-square p-6">
                  <Image
                    src="/images/africanfoodstore-project/deal1.png"
                    alt="Natural Body & Hair Care Black seed oil"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Natural Body & Hair Care
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Black seed oil
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      (2 Review)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400 line-through">
                      $130
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      $123.50
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">62</div>
                      <div className="text-xs text-gray-500 uppercase">
                        Days
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">23</div>
                      <div className="text-xs text-gray-500 uppercase">Hrs</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">46</div>
                      <div className="text-xs text-gray-500 uppercase">Min</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">27</div>
                      <div className="text-xs text-gray-500 uppercase">Sec</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deal Card 2 - Seasoning cubes */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative aspect-square p-6">
                  <Image
                    src="/images/africanfoodstore-project/deal2.png"
                    alt="Spices & Seasonings Seasoning cubes"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">
                    Spices & Seasonings
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Seasoning cubes
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 fill-current text-gray-300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      (2 Review)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-blue-600">
                      $80.00
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">
                        Days
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Hrs</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Min</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Sec</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deal Card 3 - Food Flask */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative aspect-square p-6">
                  <Image
                    src="/images/africanfoodstore-project/deal3.png"
                    alt="Kitchen Staples Food Flask"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">Kitchen Staples</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Food Flask
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 fill-current text-gray-300"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">
                      (1 Review)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400 line-through">
                      $150
                    </span>
                    <span className="text-xl font-bold text-blue-600">
                      $145.50
                    </span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">
                        Days
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Hrs</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Min</div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Sec</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotional Banner Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Banner Card - Fresh Products */}
              <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl overflow-hidden min-h-[280px] group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center h-full">
                  {/* Text Content */}
                  <div className="flex-1 p-8 lg:p-12 z-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                      Everyday Fresh &<br />
                      Clean with Our
                      <br />
                      Products
                    </h2>
                    <a href="/african-food-store/shop" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Shop Now
                    </a>
                  </div>

                  {/* Image */}
                  <div className="flex-1 relative h-full min-h-[280px]">
                    <Image
                      src="/images/africanfoodstore-project/banner1.png"
                      alt="Fresh onions and vegetables"
                      fill
                      className="object-contain object-right group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Right Banner Card - Healthy Breakfast */}
              <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden min-h-[280px] group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center h-full">
                  {/* Text Content */}
                  <div className="flex-1 p-8 lg:p-12 z-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-6">
                      Make your Breakfast
                      <br />
                      Healthy and Easy
                    </h2>
                    <a href="/african-food-store/shop" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Shop Now
                    </a>
                  </div>

                  {/* Image */}
                  <div className="flex-1 relative h-full min-h-[280px]">
                    <Image
                      src="/images/africanfoodstore-project/banner2.png"
                      alt="Healthy strawberry milk bottle"
                      fill
                      className="object-contain object-right group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <AfricanFoodProductShowcase />

        {/* Simple Image Grid Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <Image
                src="/images/africanfoodstore-project/image 26.png"
                alt="African Food Product"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <Image
                src="/images/africanfoodstore-project/image 27.png"
                alt="African Food Product"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <Image
                src="/images/africanfoodstore-project/image 28.png"
                alt="African Food Product"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <Image
                src="/images/africanfoodstore-project/image 29.png"
                alt="African Food Product"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
              <Image
                src="/images/africanfoodstore-project/image 30.png"
                alt="African Food Product"
                width={300}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <AfricanFoodNewsletter />
      </main>

      <AfricanFoodFooter />
    </div>
  );
}
