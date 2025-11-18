'use client'

import Image from 'next/image'

/**
 * AfricanFoodFooter
 * Renders the footer section with contact info, quick links, account, and social icons.
 * Usage: place at the bottom of the African Food Store page layout.
 */
export function AfricanFoodFooter(): JSX.Element {
  return (
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
  )
}