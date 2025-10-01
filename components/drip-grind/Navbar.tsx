"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigateToReservation = () => {
    router.push("/drip-grind/contact#book-reservation");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/drip-grind">
              <Image
                src="/images/drip&grind-project/Logo.png"
                alt="Drip & Grind"
                width={140}
                height={45}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/drip-grind"
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium font-roboto transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                href="/drip-grind/about"
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium font-roboto transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/drip-grind/menu"
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium font-roboto transition-colors duration-200"
              >
                Menu
              </Link>
              <Link
                href="/drip-grind/contact"
                className="text-white hover:text-red-500 px-3 py-2 text-sm font-medium font-roboto transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium font-roboto transition-colors duration-200"
              onClick={navigateToReservation}
            >
              Make Reservation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 focus:outline-none focus:text-red-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              <Link
                href="/drip-grind"
                className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium font-roboto"
              >
                Home
              </Link>

              <Link
                href="/drip-grind/about"
                className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium font-roboto"
              >
                About
              </Link>
              <Link
                href="/drip-grind/menu"
                className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium font-roboto"
              >
                Menu
              </Link>
              <Link
                href="/drip-grind/contact"
                className="text-white hover:text-red-500 block px-3 py-2 text-base font-medium font-roboto"
              >
                Contact
              </Link>
              <button
                className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded font-medium font-roboto transition-colors duration-200"
                onClick={navigateToReservation}
              >
                Make Reservation
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
