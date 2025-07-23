import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  currentPage?: string
  textColor?: "white" | "black"
}

export default function Header({ currentPage = "home", textColor = "white" }: HeaderProps) {
  return (
    <header className="relative z-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold ${textColor === "black" ? "text-gray-900" : "text-white"}`}>
              PixelSphere
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`${
                currentPage === "home"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium border-b-2 border-orange-500 pb-1`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Home
            </Link>

            <Link
              href="/services"
              className={`${
                currentPage === "services"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium border-b-2 border-orange-500 pb-1`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`${
                currentPage === "about"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium border-b-2 border-orange-500 pb-1`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              About Us
            </Link>
            <Link
              href="/work"
              className={`${
                currentPage === "work"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium border-b-2 border-orange-500 pb-1`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className={`${
                currentPage === "blog"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium border-b-2 border-orange-500 pb-1`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`${
                currentPage === "contact"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium border-b-2 border-orange-500 pb-1`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Contact
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}
