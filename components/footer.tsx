import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">PixelSphere</div>
            <p className="text-blue-200 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              We start with a discovery call to understand your company. The problems you are facing.
            </p>
            <div className="mb-6 sm:mb-8">
              <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow us</div>
              <div className="flex space-x-3 sm:space-x-4">
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                  aria-label="Instagram"
                >
                  <Instagram className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                  aria-label="Twitter"
                >
                  <Twitter className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Solutions</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-200 text-sm sm:text-base">
              <li>
                <Link href="#" className="hover:text-white">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Social Media
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Pay-per-click
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Web Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Industries</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-200 text-sm sm:text-base">
              <li>
                <Link href="#" className="hover:text-white">
                  Virtual Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Keyword Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Blog Management
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-blue-200 text-sm sm:text-base">
              <li>
                <Link href="#" className="hover:text-white">
                  Consumer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Content Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-blue-200 text-sm sm:text-base text-center sm:text-left">
            All rights reserved by © Besnik creative 2025
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm sm:text-base">
            <Link href="#" className="hover:text-white text-center sm:text-left">
              Privacy & Policy
            </Link>
            <Link href="#" className="hover:text-white text-center sm:text-left">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
