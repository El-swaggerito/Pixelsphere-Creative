'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, User, Phone } from 'lucide-react'


export function AfricanFoodHeaderNav(): JSX.Element {
  return (
    <>
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
              <Link href="/african-food-store" className="text-white hover:text-green-200 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded px-2 py-1">
                Home
              </Link>
              <Link href="/african-food-store/shop" className="text-white hover:text-green-200 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded px-2 py-1">
                Shop
              </Link>
              <Link href="/african-food-store/contact" className="text-white hover:text-green-200 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 rounded px-2 py-1">
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
    </>
  )
}