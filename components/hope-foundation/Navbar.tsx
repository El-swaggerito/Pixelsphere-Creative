"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  active?: boolean;
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
  { name: "Home",  href: "/hope-foundation", active: true },
  { name: "About", href: "/hope-foundation/about", active: false },
  { name: "Campaign", href: "/hope-foundation/campaign", active: false },
  { name: "Contact", href: "/hope-foundation/contact", active: false },
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
            <Link href="/" className="flex items-center" aria-label="Hope Foundation Home">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
                className="h-10 w-auto"
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
              <motion.div key={item.name} variants={itemVariants}>
                <Link
                  href={item.href}
                  className={`text-white hover:text-yellow-400 font-medium transition-colors duration-200 ${
                    item.active ? "text-yellow-400" : ""
                  }`}
                  style={{ fontFamily: "Movement, sans-serif" }}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white hover:text-yellow-400 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2.5 font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl border-0 rounded-sm"
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
                    className="block px-3 py-2 text-white hover:text-yellow-400 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ fontFamily: "Movement, sans-serif" }}
                    aria-current={item.active ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div className="pt-2" variants={itemVariants}>
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2.5 font-bold text-sm transition-all duration-200 border-0 rounded-sm"
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