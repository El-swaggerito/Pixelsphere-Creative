"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EdtechFooter() {
  return (
    <footer className="bg-[#2B5D2D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="mb-6">
              <Image
                src="/images/edtech-project/footer-logo.png"
                alt="EdTech Platform Logo"
                width={120}
                height={40}
                className="h-12 w-auto"
              />
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-green-100 font-montserrat">hello@edtech.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-green-100 font-montserrat">+91 91813 23 2309</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-100 font-montserrat">Somewhere in the World</span>
              </div>
            </div>
          </motion.div>

          {/* Home Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-6 font-montserrat text-lg">Home</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/edtech-platform/about#benefits" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/edtech-platform/courses#all-courses" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link href="/edtech-platform#testimonials" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/edtech-platform#faq" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* About Us Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-6 font-montserrat text-lg">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#" className="text-green-100 hover:text-white transition-colors duration-200 font-montserrat">
                  Our Goals
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-6 font-montserrat text-lg">Social Profiles</h3>
            <div className="flex space-x-3">
              <motion.a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </motion.a>
              
              <motion.a
                href="#"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-green-100 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Border and Copyright */}
        <motion.div
          className="border-t border-green-600 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center">
            <p className="text-green-100 font-montserrat">
              © 2025 edtech. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}