'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Contact Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/images/realestatepro/logo.png" 
                alt="RealEstate Pro Logo" 
                className="w-10 h-10 object-contain"
                loading="lazy"
              />
              <span className="text-xl font-bold">RealEstate Pro</span>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Total Free Customer Care</p>
                <p className="text-white font-semibold">+(088) 123 456 789</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-2">Live Support?</p>
                <p className="text-white font-semibold">hi@homez.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-6">
            <h3 className="text-lg sm:text-xl font-bold">Keep Yourself Up to Date</h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>

          {/* Apps Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Apps</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="font-semibold text-sm">Apple Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div>
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="font-semibold text-sm">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Popular Search Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Popular Search</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Apartment for Sale</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Apartment for Rent</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Offices for Sale</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Offices for Rent</a>
            </div>
          </div>
        </div>

        {/* Secondary Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Terms of Use</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Pricing Plans</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Our Services</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Contact</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Careers</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">FAQs</a>
            </div>
          </div>

          {/* Discovery */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Discovery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Chicago</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">Los Angeles</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">New Jersey</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">New York</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-300 text-sm">California</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold">Follow us on social media</h3>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.73-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">© Homez - All rights reserved</p>
          <div className="flex gap-4 sm:gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}