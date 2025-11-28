'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#F5F1E8] text-[#2D2D2D] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src="/images/beautyhub-project/logo.png"
                  alt="Beauty Hub Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-[#2D2D2D] text-sm font-medium leading-relaxed">
              We'd Love to Hear From You!
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://google.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#E8DDD0] flex items-center justify-center text-[#8B7355] hover:bg-[#D4C4B0] transition-colors duration-200"
                aria-label="Google"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#E8DDD0] flex items-center justify-center text-[#8B7355] hover:bg-[#D4C4B0] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#E8DDD0] flex items-center justify-center text-[#8B7355] hover:bg-[#D4C4B0] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#E8DDD0] flex items-center justify-center text-[#8B7355] hover:bg-[#D4C4B0] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[#2D2D2D] text-lg font-semibold">Quick links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/beauty-hub" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/about" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/about#benefits-title" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/products#products-heading" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Shop products
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div className="space-y-6">
            <h3 className="text-[#2D2D2D] text-lg font-semibold">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/beauty-hub/products#products-heading" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Vitamin C Serum
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/products#products-heading" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Hydrating Face Mist
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/products#products-heading" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Body Polish Scrub
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/products#products-heading" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Hair Repair Mask
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/products#products-heading" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Essential Oils
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-[#2D2D2D] text-lg font-semibold">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/beauty-hub/about#benefits-title" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Facials & Skin Therapy
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/about#benefits-title" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Body Spa Treatments
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/about#benefits-title" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Hair & Scalp Care
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/about#benefits-title" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Wellness Consultation
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/about#benefits-title" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Massage Therapy
                </Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div className="space-y-6">
            <h3 className="text-[#2D2D2D] text-lg font-semibold">More</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/beauty-hub/contact" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/contact" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link 
                  href="/beauty-hub/contact" 
                  className="text-[#666666] hover:text-[#2D2D2D] transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}