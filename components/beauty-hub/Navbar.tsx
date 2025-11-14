'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen)

  return (
    <nav className="bg-[#F5F3F0] border-b border-[#E5E1DC] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/beauty-hub" className="flex items-center">
              <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center">
                <Image
                  src="/images/beautyhub-project/logo.png"
                  alt="Dang Beauty Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 lg:w-16 lg:h-16"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/beauty-hub" 
              className="text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/beauty-hub/about" 
              className="text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
            >
              About Us
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProducts}
                className="flex items-center text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
              >
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-[#E5E1DC] py-2 z-50">
                  <Link 
                    href="/beauty-hub/products" 
                    className="block px-4 py-2 text-[#8B4513] hover:bg-[#F5F3F0] hover:text-[#2D5A3D] transition-colors duration-200"
                  >
                    Skincare
                  </Link>
                  <Link 
                    href="/beauty-hub/products" 
                    className="block px-4 py-2 text-[#8B4513] hover:bg-[#F5F3F0] hover:text-[#2D5A3D] transition-colors duration-200"
                  >
                    Wellness
                  </Link>
                  <Link 
                    href="/beauty-hub/products" 
                    className="block px-4 py-2 text-[#8B4513] hover:bg-[#F5F3F0] hover:text-[#2D5A3D] transition-colors duration-200"
                  >
                    Beauty Tools
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/beauty-hub/contact" 
              className="text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              className="p-2 text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="p-2 text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200 relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#2D5A3D] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button 
              className="p-2 text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              className="p-2 text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="p-2 text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200 relative"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#2D5A3D] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                0
              </span>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-[#E5E1DC] py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/beauty-hub" 
                className="text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/beauty-hub/about" 
                className="text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <div className="space-y-2">
                <button
                  onClick={toggleProducts}
                  className="flex items-center text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
                >
                  Products
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 space-y-2">
                    <Link 
                      href="/beauty-hub/products/skincare" 
                      className="block text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Skincare
                    </Link>
                    <Link 
                      href="/beauty-hub/products/wellness" 
                      className="block text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Wellness
                    </Link>
                    <Link 
                      href="/beauty-hub/products/tools" 
                      className="block text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Beauty Tools
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                href="/beauty-hub/contact" 
                className="text-[#8B4513] font-medium hover:text-[#2D5A3D] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-[#E5E1DC]">
                <button 
                  className="flex items-center text-[#8B4513] hover:text-[#2D5A3D] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-2" />
                  Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}