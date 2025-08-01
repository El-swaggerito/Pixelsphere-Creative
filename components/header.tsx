"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, BarChart, Palette, Layout, LineChart, Smartphone, Globe, Code, Layers, PenTool, FileImage, FileText, Megaphone, Monitor, FolderTree, MousePointer, TestTube, Database, Phone, Shield, Search } from "lucide-react"
import { useState, useRef, useEffect, useCallback } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface HeaderProps {
  currentPage?: string
  textColor?: "white" | "black"
  background?: "white" | "gradient"
}

export default function Header({ currentPage = "home", textColor = "white", background = "gradient" }: HeaderProps) {
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  // Navigate to contact form function
  const navigateToContact = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/contact#contact-form"
    }
  }

  // Close menus on route change
  useEffect(() => {
    setIsDesktopServicesOpen(false)
    setIsMobileServicesOpen(false)
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Click-outside & Escape to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isDesktopServicesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsDesktopServicesOpen(false)
      }
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
        setIsMobileServicesOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDesktopServicesOpen(false)
        setIsMobileServicesOpen(false)
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isDesktopServicesOpen, isMobileMenuOpen, isMobileServicesOpen])

  const handleToggleDesktopDropdown = useCallback(() => {
    setIsDesktopServicesOpen((prev) => !prev)
  }, [])

  const serviceCategories = [
    {
      title: "CUSTOM WEB SOLUTIONS",
      href: "/services/custom-web-solutions",
      color: "blue",
      services: [
        { 
          name: "Website Design", 
          href: "/services/custom-web-solutions", 
          description: "Modern websites tailored to your brand.",
          icon: Globe
        },
        { 
          name: "Web Development", 
          href: "/services/custom-web-solutions", 
          description: "Fully responsive and functional websites.",
          icon: Code
        },
        { 
          name: "Mockups & Prototyping", 
          href: "/services/custom-web-solutions", 
          description: "Visual concepts before full development.",
          icon: Layers
        },
        { 
          name: "Website in-a-day", 
          href: "/services/custom-web-solutions", 
          description: "Launch-ready websites built in a day.",
          icon: Layout
        },
      ],
    },
    {
      title: "BRANDING & IDENTITY",
      href: "/services/branding-identity",
      color: "blue",
      services: [
        { 
          name: "Brand Strategy", 
          href: "/services/branding-identity", 
          description: "Discover and position your brand for growth.",
          icon: BarChart
        },
        { 
          name: "Visual Assets & Identity", 
          href: "/services/branding-identity", 
          description: "Everything that visually defines your brand.",
          icon: PenTool
        },
        { 
          name: "Brand Identity", 
          href: "/services/branding-identity", 
          description: "A full visual identity system that tells your story.",
          icon: Palette
        },
        { 
          name: "Brand Story", 
          href: "/services/branding-identity", 
          description: "Crafting your brand's values, purpose, and personality.",
          icon: FileText
        },
      ],
    },
    {
      title: "GRAPHIC DESIGN",
      href: "/services/graphic-design",
      color: "blue",
      services: [
        { 
          name: "Visual Assets", 
          href: "/services/graphic-design", 
          description: "Effectively communicating your findings.",
          icon: FileImage
        },
        { 
          name: "Branding Collaterals", 
          href: "/services/graphic-design", 
          description: "Social media kits tailored to your brand.",
          icon: PenTool
        },
        { 
          name: "Graphic Templates", 
          href: "/services/graphic-design", 
          description: "Custom designs for visual communication.",
          icon: Layers
        },
        { 
          name: "Promotional Design", 
          href: "/services/graphic-design", 
          description: "Flyers, banners, posters, and promo materials.",
          icon: Megaphone
        },
      ],
    },
    {
      title: "UX DESIGN & STRATEGY",
      href: "/services/ux-design-strategy",
      color: "blue",
      services: [
        { 
          name: "UI/UX Design", 
          href: "/services/ux-design-strategy",
          description: "User-friendly interface designs.",
          icon: Monitor
        },
        { 
          name: "Information Architecture", 
          href: "/services/ux-design-strategy",
          description: "Logical navigation for smooth user journeys.",
          icon: FolderTree
        },
        { 
          name: "Interaction Design", 
          href: "/services/ux-design-strategy",
          description: "Digital experiences through interactions.",
          icon: MousePointer
        },
        { 
          name: "Usability Testing", 
          href: "/services/ux-design-strategy",
          description: "Find and improve UX issues and improve results.",
          icon: TestTube
        },
      ],
    },
    {
      title: "DIGITAL GROWTH & FUTURE OFFERINGS",
      href: "/services/digital-growth",
      color: "blue",
      services: [
        { 
          name: "Software Application", 
          href: "/services/digital-growth",
          description: "Custom-built applications that solve real-world problems.",
          icon: Database
        },
        { 
          name: "Mobile App Development", 
          href: "/services/digital-growth",
          description: "Scalable mobile solutions tailored to user experience.",
          icon: Smartphone
        },
        { 
          name: "Brand Audit", 
          href: "/services/digital-growth",
          description: "Comprehensive review of performance and health.",
          icon: Shield
        },
        { 
          name: "SEO Optimization",
          href: "/services/digital-growth",
          description: "Rank higher on Google.",
          icon: Search
        },
      ],
    },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-30 shadow-sm ${
        background === "white" ? "bg-white text-blue-900" : "text-white"
      }`}
      style={
        background === "white"
          ? { borderBottom: "1px solid rgba(0,0,0,0.05)" }
          : {
              background: `
                radial-gradient(circle at 15% 40%, rgba(255, 115, 0, 0.15) 0%, transparent 60%),
                radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 85% 25%, rgba(99, 102, 241, 0.12) 0%, transparent 55%),
                linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 35%, #2563eb 60%, #3b82f6 85%, #60a5fa 100%)
              `,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }
      }
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                href="/"
                className={`text-xl sm:text-2xl font-bold ${textColor === "black" ? "text-gray-900" : "text-white"}`}
              >
               <Image src="/images/company-logo.png" alt="Pixelsphere Creatives Logo" width={250} height={200} className="relative"/>
              </Link>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 lg:space-x-8" aria-label="Main navigation">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/"
                className={`text-sm lg:text-base ${
                  currentPage === "home"
                    ? `${
                        textColor === "black"
                          ? "text-gray-900 hover:text-orange-600"
                          : "text-white hover:text-orange-300"
                      } font-medium`
                    : `${
                        textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                      }`
                }`}
              >
                Home
              </Link>
            </motion.div>

            {/* Services Dropdown */}
            <div className="relative">
              <motion.button
                ref={buttonRef}
                onClick={handleToggleDesktopDropdown}
                aria-haspopup="true"
                aria-expanded={isDesktopServicesOpen}
                aria-controls="services-dropdown"
                className={`flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-all duration-200 text-sm lg:text-base ${
                  currentPage?.startsWith("services")
                    ? `${
                        textColor === "black"
                          ? "text-gray-900 hover:text-orange-600"
                          : "text-white hover:text-orange-300"
                      } font-medium`
                    : `${
                        textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                      }`
                }`}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Services</span>
                <motion.div
                  animate={{ rotate: isDesktopServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isDesktopServicesOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="fixed inset-0 bg-black/50 z-40"
                      onClick={() => setIsDesktopServicesOpen(false)}
                      aria-hidden="true"
                    />
                    <motion.div
                      ref={dropdownRef}
                      id="services-dropdown"
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="fixed left-0 right-0 top-[64px] sm:top-[80px] w-screen bg-white text-gray-800 border-t border-gray-200 z-50 shadow-xl"
                      role="menu"
                      aria-label="Services submenu"
                      tabIndex={-1}
                    >
                      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.title} className="space-y-6">
                              <h3 className="text-sm font-semibold text-gray-500 tracking-wider">{category.title}</h3>
                              <ul className="space-y-5">
                                {category.services.map((service) => {
                                  const Icon = service.icon;
                                  return (
                                    <li key={service.name}>
                                      <Link 
                                        href={service.href}
                                        className="group flex items-start"
                                        onClick={() => setIsDesktopServicesOpen(false)}
                                      >
                                        <div className="flex-shrink-0 h-6 w-6 text-gray-500 group-hover:text-blue-600">
                                          <Icon size={20} />
                                        </div>
                                        <div className="ml-3">
                                          <p className="text-base font-medium text-gray-900 group-hover:text-blue-600">
                                            {service.name}
                                          </p>
                                          <p className="mt-1 text-sm text-gray-500 group-hover:text-gray-600">
                                            {service.description}
                                          </p>
                                        </div>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Rest of the navigation remains the same */}
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/about"
                className={`text-sm lg:text-base ${
                  currentPage === "about"
                    ? `${
                        textColor === "black"
                          ? "text-gray-900 hover:text-orange-600"
                          : "text-white hover:text-orange-300"
                      } font-medium`
                    : `${
                        textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                      }`
                }`}
              >
                About Us
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/work"
                className={`text-sm lg:text-base ${
                  currentPage === "work"
                    ? `${
                        textColor === "black"
                          ? "text-gray-900 hover:text-orange-600"
                          : "text-white hover:text-orange-300"
                      } font-medium`
                    : `${
                        textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                      }`
                }`}
              >
                Portfolio
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/blog"
                className={`text-sm lg:text-base ${
                  currentPage === "blog"
                    ? `${
                        textColor === "black"
                          ? "text-gray-900 hover:text-orange-600"
                          : "text-white hover:text-orange-300"
                      } font-medium`
                    : `${
                        textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                      }`
                }`}
              >
                Blog
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/contact"
                className={`text-sm lg:text-base ${
                  currentPage === "contact"
                    ? `${
                        textColor === "black"
                          ? "text-gray-900 hover:text-orange-600"
                          : "text-white hover:text-orange-300"
                      } font-medium`
                    : `${
                        textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"
                      }`
                }`}
              >
                Contact
              </Link>
            </motion.div>
          </nav>

          {/* Mobile/Tablet toggles - Changed from md:hidden to lg:hidden */}
          <div className="lg:hidden flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                onClick={navigateToContact}
              >
                Contact Us
              </Button>
            </motion.div>
            <motion.button
              ref={mobileMenuButtonRef}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className={`p-2 ${textColor === "black" ? "text-gray-900" : "text-white"} transition-all duration-200`}
              aria-label="Toggle mobile menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Desktop Contact - Changed from md:block to lg:block */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
            <Button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 lg:px-6 py-2 rounded-lg font-medium text-sm lg:text-base transition-all duration-200"
              onClick={navigateToContact}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Mobile/Tablet Navigation - Updated class from md:hidden to lg:hidden */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef}
              className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50 max-h-[80vh] overflow-y-auto"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium ${
                      currentPage === "home" ? "text-orange-600" : "text-gray-900"
                    } hover:text-orange-600`}
                  >
                    Home
                  </Link>
                </motion.div>

                {/* Mobile Services */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <button
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    className="flex items-center justify-between w-full text-base font-medium text-gray-900 hover:text-orange-600"
                  >
                    Services
                    <motion.div animate={{ rotate: isMobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-4 h-4 transition-transform" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        className="pl-4 space-y-3 border-l-2 border-orange-200"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {serviceCategories.map((category, index) => (
                          <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              href={category.href}
                              onClick={() => {
                                setIsMobileServicesOpen(false)
                                setIsMobileMenuOpen(false)
                              }}
                              className="block text-sm font-semibold text-gray-800 hover:text-orange-600"
                            >
                              {category.title}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium ${
                      currentPage === "about" ? "text-orange-600" : "text-gray-900"
                    } hover:text-orange-600`}
                  >
                    About Us
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="/work"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium ${
                      currentPage === "work" ? "text-orange-600" : "text-gray-900"
                    } hover:text-orange-600`}
                  >
                    Portfolio
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium ${
                      currentPage === "blog" ? "text-orange-600" : "text-gray-900"
                    } hover:text-orange-600`}
                  >
                    Blog
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-base font-medium ${
                      currentPage === "contact" ? "text-orange-600" : "text-gray-900"
                    } hover:text-orange-600`}
                  >
                    Contact
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
