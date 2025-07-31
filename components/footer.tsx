"use client"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <motion.div
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image src="/images/company-logo.png" alt="" width={150} height={100} />
            </motion.div>
            <p className="text-blue-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            PixelSphere Creative – Your trusted partner for custom websites, smart branding, and digital growth strategies in Canada and beyond.
            </p>
            <div className="mb-6 sm:mb-8">
              <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow us</div>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="https://web.facebook.com/people/PixelSphere-Creatives/pfbid0B6rspCn3TZcKihRrx2KwjyQ9UsFSDkoErGH9SpySwX4i68BH2J1195s4j5HG7W4Dl/"
                    rel="noopener noreferrer nofollow" 
                    target="_blank"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="#"
                    rel="noopener noreferrer nofollow" 
                    target="_blank"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="#"
                    rel="noopener noreferrer nofollow" 
                    target="_blank"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="Twitter"
                  >
                    <Twitter className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="#"
                    
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-200 text-sm sm:text-base">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/" className="hover:text-white transition-colors">
                    Web Design & Development 
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/about" className="hover:text-white transition-colors">
                    UI UX Design
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Brand Identity
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Graphics Design
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Resources</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-200 text-sm sm:text-base">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Study
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQS
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-200 text-sm sm:text-base">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="#" className="hover:text-white transition-colors">
                   Become a Partner
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-blue-200 text-sm sm:text-base text-center sm:text-left">
            All rights reserved by © PixelSphere 2025
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm sm:text-base">
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="hover:text-white text-center sm:text-left transition-colors">
                Privacy & Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="hover:text-white text-center sm:text-left transition-colors">
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
