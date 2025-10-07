"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function EdtechNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 backdrop-blur-sm will-change-transform"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ height: '64px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.div
              className="flex items-center flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ width: '120px', height: '40px' }}
            >
              <Image
                src="/images/edtech-project/logo_edtech.png"
                alt="EdTech Platform Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
                style={{ maxWidth: '120px', height: 'auto' }}
              />
            </motion.div>

            {/* Desktop Navigation Links */}
            <motion.div
              className="hidden md:flex items-center space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "Home", href: "#", active: true },
                { name: "Courses", href: "#", active: false },
                { name: "About Us", href: "#", active: false },
                { name: "Contact", href: "#", active: false },
              ].map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`text-base font-medium font-montserrat transition-colors duration-200 relative ${
                      item.active
                        ? "text-green-600"
                        : "text-gray-700 hover:text-green-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop Action Buttons */}
            <motion.div
              className="hidden md:flex items-center space-x-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-green-600 font-medium font-montserrat"
              >
                Sign Up
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-medium font-montserrat">
                Login
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 transition-colors duration-200"
                whileTap={{ scale: 0.95 }}
              >
                {!mobileMenuOpen ? (
                  <Menu className="h-6 w-6" />
                ) : (
                  <X className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 border-t border-gray-100 bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
              maxHeight: '400px',
              overflowY: 'auto',
              overflowAnchor: 'none'
            }}
          >
            <div className="px-4 py-4 space-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "Courses", href: "#" },
                { name: "About Us", href: "#" },
                { name: "Contact", href: "#" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-green-600 font-medium font-montserrat transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-green-600 font-montserrat"
                >
                  Sign Up
                </Button>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-montserrat">
                  Login
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
      {/* Add spacing to account for fixed navbar */}
      <div style={{ height: '64px' }}></div>
    </>
  );
}