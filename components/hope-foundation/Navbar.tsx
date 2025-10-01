"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  navItems?: NavItem[];
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundColor?: string;
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { name: "Home", href: "/hope-foundation" },
  { name: "About", href: "/hope-foundation/about" },
  { name: "Campaign", href: "/hope-foundation/campaign" },
  { name: "Contact", href: "/hope-foundation/contact" },
];

export default function HopeFoundationNavbar({
  logoSrc = "/images/hopefoundation-project/logo.png",
  logoAlt = "Hope Foundation Logo",
  logoWidth = 120,
  logoHeight = 40,
  navItems = defaultNavItems,
  ctaText = "GET INVOLVED",
  onCtaClick,
  backgroundColor = "#131A1B",
  className = "",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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

  const handleCtaClick = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      const donationSection = document.getElementById("donation");
      if (donationSection) {
        donationSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-800 ${className}`}
      style={{ backgroundColor }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/hope-foundation" className="flex items-center group" aria-label="Hope Foundation Home">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <motion.div
            className="hidden md:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item, index) => (
              <motion.div key={item.name} variants={itemVariants} className="relative">
                <Link
                  href={item.href}
                  className={`relative text-white font-medium transition-all duration-300 py-2 px-1 group ${
                    isActive(item.href) 
                      ? "text-yellow-400" 
                      : "hover:text-yellow-400"
                  }`}
                  style={{ fontFamily: "Movement, sans-serif" }}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                  
                  {/* Active indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    initial={false}
                    animate={{
                      scaleX: isActive(item.href) ? 1 : 0,
                      opacity: isActive(item.href) ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400/60"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ 
                      scaleX: isActive(item.href) ? 0 : 1, 
                      opacity: isActive(item.href) ? 0 : 1 
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-md -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white hover:text-yellow-400 transition-all duration-300 p-2 rounded-md hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>

          {/* Desktop CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={handleCtaClick}
              className="bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 px-6 py-2.5 font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border-0 rounded-sm transform"
              style={{ fontFamily: "Movement, sans-serif" }}
            >
              {ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden border-t border-gray-700"
            style={{ backgroundColor }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="px-2 pt-2 pb-3 space-y-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item, index) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-3 rounded-md font-medium transition-all duration-300 relative ${
                      isActive(item.href)
                        ? "text-yellow-400 bg-yellow-400/10 border-l-4 border-yellow-400"
                        : "text-white hover:text-yellow-400 hover:bg-white/10 hover:translate-x-1"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontFamily: "Movement, sans-serif" }}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.1 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
              <motion.div className="pt-2" variants={itemVariants}>
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-gray-900 px-6 py-2.5 font-bold text-sm transition-all duration-300 border-0 rounded-sm hover:scale-105 active:scale-95 transform"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleCtaClick();
                  }}
                >
                  {ctaText}
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}