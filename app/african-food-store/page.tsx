'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, User, Phone } from 'lucide-react'

export default function AfricanFoodStorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/african-food-store" className="flex items-center group">
                <Image
                  src="/images/africanfoodstore-project/headerlogo.png"
                  alt="REVAMP - African Food Store Logo"
                  width={90}
                  height={50}
                  className="transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Search Bar - Hidden on mobile, shown on tablet+ */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm lg:text-base"
                  aria-label="Search for products"
                />
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Search"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Mobile Search Button */}
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200" aria-label="Search">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    0
                  </span>
                </div>
                <span className="hidden sm:block text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-200">Cart</span>
              </div>
              
              <div className="flex items-center space-x-2 group cursor-pointer">
                <User className="h-6 w-6 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                <span className="hidden sm:block text-sm text-gray-600 group-hover:text-green-600 transition-colors duration-200">Account</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="bg-green-600 shadow-lg" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 lg:h-14">
            <div className="flex items-center">
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300">
                Browse All Categories
              </button>
            </div>
            
            {/* Centered Navigation Links */}
            <div className="flex items-center justify-center space-x-6 lg:space-x-8 flex-1">
              <Link href="#" className="text-white hover:text-green-200 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded px-2 py-1">
                Home
              </Link>
              <Link href="#" className="text-white hover:text-green-200 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded px-2 py-1">
                Shop
              </Link>
              <Link href="#" className="text-white hover:text-green-200 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded px-2 py-1">
                Contact
              </Link>
            </div>
            
            <div className="hidden sm:flex items-center space-x-2 text-white">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">1900 - 888</span>
              <span className="text-xs opacity-90">24/7 Support Center</span>
            </div>
          </div>
        </div>
      </nav>

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
                      <svg className="absolute -bottom-2 left-0 w-full h-3 text-yellow-400 opacity-60" viewBox="0 0 200 12" fill="currentColor">
                        <path d="M0,8 Q50,2 100,8 T200,8 L200,12 L0,12 Z" />
                      </svg>
                    </span> to Your
                    <br />
                    Canadian Doorstep
                  </h1>
                  
                  {/* Offer */}
                  <div className="mb-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg inline-block">
                    <p className="text-lg text-gray-700 mb-2 font-medium">
                      Exclusive offer
                    </p>
                    <div className="flex items-baseline justify-center lg:justify-start space-x-2">
                      <span className="text-4xl sm:text-5xl font-bold text-yellow-500 drop-shadow-sm">35%</span>
                      <span className="text-lg text-gray-700 font-medium">off this week</span>
                    </div>
                  </div>
                  
                  {/* CTA Button - positioned right under the offer card */}
                  <div className="mb-8">
                    <button 
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50 active:scale-95"
                      aria-label="Shop now for African groceries"
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>Shop Now</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
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
                <div className="absolute top-10 right-10 w-16 h-16 sm:w-20 sm:h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-10 h-10 sm:w-12 sm:h-12 bg-green-400 rounded-full opacity-30 animate-bounce"></div>
                <div className="absolute top-1/2 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-400 rounded-full opacity-25"></div>
                <div className="absolute top-1/4 left-10 w-4 h-4 bg-red-400 rounded-full opacity-30 animate-ping"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 left-5 bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg animate-float">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute bottom-32 left-8 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg animate-float-delayed">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 border-2 border-green-600 rounded-full"></div>
            <div className="absolute bottom-20 left-40 w-20 h-20 sm:w-24 sm:h-24 border-2 border-yellow-500 rounded-full"></div>
            <div className="absolute top-40 right-60 w-12 h-12 sm:w-16 sm:h-16 border-2 border-orange-500 rounded-full"></div>
            <div className="absolute top-60 left-1/4 w-8 h-8 border-2 border-red-400 rounded-full"></div>
          </div>
          
          {/* Custom CSS for animations */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            @keyframes float-delayed {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
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
        <section className="py-16 bg-white" aria-labelledby="categories-heading">
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
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">Fresh & Dry Food</h3>
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
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">Snacks & Beverages</h3>
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
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">Vegetables</h3>
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
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">Natural Body & Hair Care</h3>
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
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-1">Kitchen Staples</h3>
                <p className="text-sm text-gray-600 text-center">2 Product</p>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Free Delivery */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Free Delivery</h4>
                  <p className="text-sm text-gray-600">Orders from all item</p>
                </div>
              </div>

              {/* Return & Refund */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Return & Refund</h4>
                  <p className="text-sm text-gray-600">Money back guarantee</p>
                </div>
              </div>

              {/* Member Discount */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Member Discount</h4>
                  <p className="text-sm text-gray-600">One very order over $140.00</p>
                </div>
              </div>

              {/* Support 24/7 */}
              <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Support 24/7</h4>
                  <p className="text-sm text-gray-600">Contact us 24 hours a day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Products Section */}
        <section className="py-16 bg-gray-50" aria-labelledby="trending-products-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12">
              <div className="relative mb-6 sm:mb-0">
                <h2 id="trending-products-heading" className="text-3xl font-bold text-gray-900 relative z-10">
                  Trending Products
                </h2>
                {/* Red decorative vector line behind text - curved swoosh */}
                <svg 
                  className="absolute -bottom-2 left-0 w-32 h-6 text-red-500 opacity-70" 
                  viewBox="0 0 128 24" 
                  fill="none"
                  aria-hidden="true"
                >
                  <path 
                    d="M2 20C20 8, 40 4, 60 8C80 12, 100 16, 126 12" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              
              {/* Navigation Tabs */}
              <div className="flex space-x-8">
                <button className="relative text-blue-600 font-semibold pb-2 transition-colors duration-200 group">
                  New
                  {/* Active state underline */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></div>
                </button>
                <button className="relative text-gray-500 font-semibold pb-2 hover:text-gray-900 transition-colors duration-200 group">
                  Featured
                  {/* Hover state underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                </button>
                <button className="relative text-gray-500 font-semibold pb-2 hover:text-gray-900 transition-colors duration-200 group">
                  Top Sellers
                  {/* Hover state underline */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-full transition-all duration-300"></div>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product 1 - Yam tubers */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending1.png"
                    alt="Fresh yam tubers"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Fresh & Dry Food</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Yam tubers</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 line-through">$120</span>
                    <span className="text-lg font-bold text-blue-600">$103.20</span>
                  </div>
                </div>
              </div>

              {/* Product 2 - Pepper soup spice mix */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending2.png"
                    alt="Pepper soup spice mix"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Pepper soup spice mix</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                       
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 line-through">$130</span>
                    <span className="text-lg font-bold text-blue-600">$123.50</span>
                  </div>
                </div>
              </div>

              {/* Product 3 - Plantain */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending3.png"
                    alt="Fresh plantain"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Snacks & Beverages</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Plantain</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                       
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-600">$110.00</span>
                  </div>
                </div>
              </div>

              {/* Product 4 - Palm kernel oil (Out of Stock) */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group relative">
                <div className="absolute top-2 right-2 z-10">
                  <span className="bg-pink-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    Out-Of-Stock
                  </span>
                </div>
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending4.png"
                    alt="Palm kernel oil"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Natural Body & Hair Care</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Palm kernel oil</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                       
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 line-through">$320</span>
                    <span className="text-lg font-bold text-blue-600">$288.00</span>
                  </div>
                </div>
              </div>

              {/* Product 5 - Mortar and pestle (small) */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending5.png"
                    alt="Mortar and pestle small"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Kitchen Staples</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Mortar and pestle (small)</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 line-through">$1199</span>
                    <span className="text-lg font-bold text-blue-600">$1019.15</span>
                  </div>
                </div>
              </div>

              {/* Product 6 - Plantain chips */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending6.png"
                    alt="Plantain chips"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Fresh & Dry Food</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Plantain chips</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                       
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 line-through">$999</span>
                    <span className="text-lg font-bold text-blue-600">$949.05</span>
                  </div>
                </div>
              </div>

              {/* Product 7 - Thyme */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending7.png"
                    alt="Fresh thyme"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Thyme</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                       
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-600">$80.00</span>
                  </div>
                </div>
              </div>

              {/* Product 8 - Groundnut */}
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-square p-4">
                  <Image
                    src="/images/africanfoodstore-project/trending8.png"
                    alt="Groundnut"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-1">Snacks & Beverages</p>
                  <h3 className="font-semibold text-gray-900 mb-2">Groundnut</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                       
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg font-bold text-blue-600">$80.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center space-x-2">
                <span>View All Deals</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
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
                  <p className="text-sm text-gray-500 mb-2">Natural Body & Hair Care</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Black seed oil</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400 line-through">$130</span>
                    <span className="text-xl font-bold text-blue-600">$123.50</span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">62</div>
                      <div className="text-xs text-gray-500 uppercase">Days</div>
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
                  <p className="text-sm text-gray-500 mb-2">Spices & Seasonings</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Seasoning cubes</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-blue-600">$80.00</span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Days</div>
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Food Flask</h3>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(1 Review)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400 line-through">$150</span>
                    <span className="text-xl font-bold text-blue-600">$145.50</span>
                  </div>

                  {/* Countdown Timer */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-gray-100 rounded-lg p-2">
                      <div className="text-lg font-bold text-gray-900">0</div>
                      <div className="text-xs text-gray-500 uppercase">Days</div>
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
                      Clean with Our<br />
                      Products
                    </h2>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Shop Now
                    </button>
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
                      Make your Breakfast<br />
                      Healthy and Easy
                    </h2>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Shop Now
                    </button>
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Discount Products Column */}
              <div className="space-y-8">
                {/* Section Header */}
                <div className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Discount Products</h2>
                  <div className="absolute -bottom-1 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
                </div>

                {/* Product Cards */}
                <div className="space-y-6">
                  {/* Product 1 - Groundnut */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/discount1.png"
                        alt="Groundnut"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Snacks</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Groundnut</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$103.20</p>
                    </div>
                  </div>

                  {/* Product 2 - Palm kernel oil */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/discount2.png"
                        alt="Palm kernel oil"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Natural Body & Hair care</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Palm kernel oil</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$123.50</p>
                    </div>
                  </div>

                  {/* Product 3 - Thyme */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/discount3.png"
                        alt="Thyme"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Thyme</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$288.00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured Products Column */}
              <div className="space-y-8">
                {/* Section Header */}
                <div className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Products</h2>
                  <div className="absolute -bottom-1 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
                </div>

                {/* Product Cards */}
                <div className="space-y-6">
                  {/* Product 1 - Yam tubers */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/featured1.png"
                        alt="Yam tubers"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Fresh & Dry food</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Yam tubers</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$110.00</p>
                    </div>
                  </div>

                  {/* Product 2 - Peppershoup spices */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/featured3.png"
                        alt="Peppershoup spices"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Spices & Seasonings</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Peppershoup spices</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$1019.15</p>
                    </div>
                  </div>

                  {/* Product 3 - Plantain */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/featured2.png"
                        alt="Plantain"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Fresh & Dry Foods</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Plantain</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                          <svg className="w-4 h-4 fill-current text-gray-300" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$949.05</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Selling Products Column */}
              <div className="space-y-8">
                {/* Section Header */}
                <div className="relative">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Selling Products</h2>
                  <div className="absolute -bottom-1 left-0 w-16 h-1 bg-red-500 rounded-full"></div>
                </div>

                {/* Product Cards */}
                <div className="space-y-6">
                  {/* Product 1 - Mortar & Pestle */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/selling1.png"
                        alt="Mortar & Pestle"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Kitchen staples</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Mortar & Pestle</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(2 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$123.50</p>
                    </div>
                  </div>

                  {/* Product 2 - Body Lotion */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/selling2.png"
                        alt="Body Lotion"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Body care</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Body Lotion</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$103.20</p>
                    </div>
                  </div>

                  {/* Product 3 - Cabbage */}
                  <div className="flex items-center space-x-4 group cursor-pointer">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden group-hover:shadow-lg transition-all duration-300">
                      <Image
                        src="/images/africanfoodstore-project/selling3.png"
                        alt="Cabbage"
                        width={96}
                        height={96}
                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-1">Vegetables</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Cabbage</h3>
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">(3 Review)</span>
                      </div>
                      <p className="text-xl font-bold text-blue-600">$110.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        {/* Newsletter Subscription Section */}
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
      </main>

      {/* Footer */}
      <footer className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Contact Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/images/africanfoodstore-project/footerlogo.png"
                  alt="REVAMP"
                  width={120}
                  height={60}
                  className="mb-6"
                />
              </div>
              
              {/* Contact Information */}
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 mt-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Address: 5171 W Campbell Ave</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call Us: (+91) - 540-025-124553</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>Email: sale@Revamp.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-4 h-4 mt-1 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Hours: 10:00 - 18:00, Mon - Sat</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Delivery Information</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Support Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Careers</a></li>
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Account</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Sign In</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">View Cart</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">My Wishlist</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Track My Order</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Help Ticket</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Shipping Details</a></li>
                <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">Compare products</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex space-x-4 mb-6">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.2.3c3.3 0 3.7 0 5 .1 1.2.1 1.9.2 2.3.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.3 1.1.4 2.3.1 1.3.1 1.7.1 5s0 3.7-.1 5c-.1 1.2-.2 1.9-.4 2.3-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.3-2.3.4-1.3.1-1.7.1-5 .1s-3.7 0-5-.1c-1.2-.1-1.9-.2-2.3-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.3-1.1-.4-2.3-.1-1.3-.1-1.7-.1-5s0-3.7.1-5c.1-1.2.2-1.9.4-2.3.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.3 2.3-.4 1.3-.1 1.7-.1 5-.1zm0 2.2c-3.3 0-3.6 0-4.9.1-1.1 0-1.7.2-2.1.3-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.1.4-.3 1-.3 2.1-.1 1.3-.1 1.6-.1 4.9s0 3.6.1 4.9c0 1.1.2 1.7.3 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .3 2.1.3 1.3.1 1.6.1 4.9.1s3.6 0 4.9-.1c1.1 0 1.7-.2 2.1-.3.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.3-1 .3-2.1.1-1.3.1-1.6.1-4.9s0-3.6-.1-4.9c0-1.1-.2-1.7-.3-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.1-1-.3-2.1-.3-1.3-.1-1.6-.1-4.9-.1zm0 3.8c3.4 0 6.2 2.8 6.2 6.2s-2.8 6.2-6.2 6.2-6.2-2.8-6.2-6.2 2.8-6.2 6.2-6.2zm0 10.2c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm7.8-10.5c0 .8-.6 1.4-1.4 1.4s-1.4-.6-1.4-1.4.6-1.4 1.4-1.4 1.4.6 1.4 1.4z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Up to 15% discount on<br />
                your first subscribe
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}