"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import React, { useState, useRef, useEffect, useCallback } from "react"

interface HeaderProps {
  currentPage?: string;
  textColor?: "white" | "black";
  background?: "white" | "gradient";
}

export default function Header({ currentPage = "home", textColor = "white", background = "gradient" }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Debug: Log state changes
  useEffect(() => {
    console.log("[DEBUG] isServicesOpen:", isServicesOpen)
    if (isServicesOpen) {
      console.log("[DEBUG] Services dropdown rendered")
    }
  }, [isServicesOpen])

  // Handle click outside and Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false)
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsServicesOpen(false)
      }
    }
    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isServicesOpen])

  // Keyboard navigation: focus first link when opened
  useEffect(() => {
    if (isServicesOpen && dropdownRef.current) {
      const firstLink = dropdownRef.current.querySelector("a") as HTMLElement
      if (firstLink) firstLink.focus()
    }
  }, [isServicesOpen])

  // Toggle handler
  const handleToggleDropdown = useCallback(() => {
    setIsServicesOpen((prev) => {
      console.log("[DEBUG] Services button clicked, toggling:", !prev)
      return !prev
    })
  }, [])

  const serviceCategories = [
    {
      title: "Website",
      href: "/services/website",
      color: "blue",
      services: [
        { name: "Website Design", href: "/services/website-design" },
        { name: "Website Development", href: "/services/website-development" },
        { name: "Mock Ups", href: "/services/mock-ups" },
        { name: "Prototyping", href: "/services/prototyping" },
        { name: "and more support", href: "/services/website-support" },
      ],
    },
    {
      title: "Branding",
      href: "/services/branding",
      color: "orange",
      services: [
        { name: "Research & Strategy", href: "/services/research-strategy" },
        { name: "Visual Identity", href: "/services/visual-identity" },
        { name: "Visual Assets", href: "/services/visual-assets" },
        { name: "Brand Identity", href: "/services/brand-identity" },
        { name: "Brand Story", href: "/services/brand-story" },
        { name: "and more support", href: "/services/branding-support" },
      ],
    },
    {
      title: "UI UX",
      href: "/services/ui-ux",
      color: "blue",
      services: [
        { name: "User Research", href: "/services/user-research" },
        { name: "Information Architecture", href: "/services/information-architecture" },
        { name: "Interaction Design", href: "/services/interaction-design" },
        { name: "Prototyping", href: "/services/ux-prototyping" },
        { name: "Usability Testing", href: "/services/usability-testing" },
        { name: "and more support", href: "/services/ux-support" },
      ],
    },
    {
      title: "Consultation & Audit",
      href: "/services/consultation-audit",
      color: "green",
      services: [
        { name: "Business Consultation", href: "/services/business-consultation" },
        { name: "Website Audit", href: "/services/website-audit" },
        { name: "Brand Audit", href: "/services/brand-audit" },
        { name: "and more support", href: "/services/consultation-support" },
      ],
    },
    {
      title: "SEO",
      href: "/services/seo",
      color: "purple",
      services: [
        { name: "Technical SEO", href: "/services/technical-seo" },
        { name: "On-Page SEO", href: "/services/on-page-seo" },
        { name: "Off-Page SEO", href: "/services/off-page-seo" },
        { name: "Content SEO", href: "/services/content-seo" },
        { name: "Local SEO", href: "/services/local-seo" },
        { name: "and more", href: "/services/seo-support" },
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "text-blue-500"
      case "orange":
        return "text-orange-500"
      case "green":
        return "text-green-500"
      case "purple":
        return "text-purple-500"
      default:
        return "text-gray-500"
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] shadow-sm ${background === "white" ? "bg-white text-blue-900" : "text-white"}`}
      style={background === "white"
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
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className={`text-2xl font-bold ${textColor === "black" ? "text-gray-900" : "text-white"}`}>
              PixelSphere
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            <Link
              href="/"
              className={`${
                currentPage === "home"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                ref={buttonRef}
                onClick={handleToggleDropdown}
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                aria-controls="services-dropdown"
                className={`flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 transition-shadow ${
                  currentPage?.startsWith("services")
                    ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
                    : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
                }`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown" && !isServicesOpen) {
                    setIsServicesOpen(true)
                  }
                }}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <>
                  <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsServicesOpen(false)}
                    aria-hidden="true"
                  />
                  <div
                    id="services-dropdown"
                    className="fixed left-0 right-0 top-[80px] w-screen min-h-screen max-w-none rounded-b-xl border-t border-orange-600 z-50 p-8 animate-fade-in"
                    style={{
                      background: `
                        radial-gradient(circle at 15% 40%, rgba(255, 115, 0, 0.15) 0%, transparent 60%),
                        radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                        radial-gradient(circle at 85% 25%, rgba(99, 102, 241, 0.12) 0%, transparent 55%),
                        linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 35%, #2563eb 60%, #3b82f6 85%, #60a5fa 100%)
                      `,
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                    role="menu"
                    aria-label="Services submenu"
                    tabIndex={-1}
                  >
                    <div className="max-w-7xl mx-auto">
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-6 w-full min-w-0">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="space-y-6 px-6 min-w-0 w-full overflow-visible">
                            <Link
                              href={category.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-center space-x-3 group whitespace-normal break-words text-base font-semibold text-white"
                              tabIndex={0}
                            >
                              <div
                                className={`w-3 h-3 rounded-full ${
                                  category.color === "blue"
                                    ? "bg-blue-300"
                                    : category.color === "orange"
                                      ? "bg-orange-200"
                                      : category.color === "green"
                                        ? "bg-green-200"
                                        : category.color === "purple"
                                          ? "bg-purple-200"
                                          : "bg-white/70"
                                }`}
                              ></div>
                              <h3
                                className={`font-semibold text-lg group-hover:text-blue-900 transition-colors whitespace-normal break-words text-white`}
                              >
                                {category.title}
                              </h3>
                            </Link>
                            <div className="space-y-3">
                              {category.services.map((service, serviceIndex) => (
                                <Link
                                  key={serviceIndex}
                                  href={service.href}
                                  className="block text-white/90 hover:text-blue-900 transition-colors text-sm pl-6 whitespace-normal break-words"
                                  onClick={() => setIsServicesOpen(false)}
                                  tabIndex={0}
                                >
                                  ✦ {service.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link
              href="/about"
              className={`${
                currentPage === "about"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              About Us
            </Link>
            <Link
              href="/work"
              className={`${
                currentPage === "work"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Work
            </Link>
            <Link
              href="/blog"
              className={`${
                currentPage === "blog"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`${
                currentPage === "contact"
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
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
