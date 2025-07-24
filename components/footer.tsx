import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">PixelSphere</div>
            <p className="text-blue-200 mb-8 leading-relaxed">
              We start with a discovery call to understand your company. The problems you are facing.
            </p>
            <div className="mb-8">
              <div className="text-lg font-semibold mb-4">Follow us</div>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer" aria-label="Facebook">
                  <Facebook className="text-white w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer" aria-label="Instagram">
                  <Instagram className="text-white w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer" aria-label="Twitter">
                  <Twitter className="text-white w-5 h-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer" aria-label="LinkedIn">
                  <Linkedin className="text-white w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6 text-lg">Solutions</h3>
            <ul className="space-y-3 text-blue-200">
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
            <h3 className="font-semibold mb-6 text-lg">Industries</h3>
            <ul className="space-y-3 text-blue-200">
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
            <h3 className="font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-blue-200">
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

        <div className="border-t border-blue-800 mt-12 pt-8 flex justify-between items-center">
          <p className="text-blue-200">All rights reserved by © Besnik creative 2025</p>
          <div className="flex space-x-8 text-blue-200">
            <Link href="#" className="hover:text-white">
              Privacy & Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
