"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface HeaderProps {
  currentPage?: string
  textColor?: "white" | "black"
}

export default function Header({ currentPage = "home", textColor = "white" }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

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
                  ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
                  : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
              }`}
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center space-x-1 ${
                  currentPage?.startsWith("services")
                    ? `${textColor === "black" ? "text-gray-900 hover:text-orange-600" : "text-white hover:text-orange-300"} font-medium`
                    : `${textColor === "black" ? "text-gray-700 hover:text-gray-900" : "text-white/80 hover:text-white"}`
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="fixed left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 z-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-5 gap-12">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-6">
                          <Link
                            href={category.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex items-center space-x-3 group"
                          >
                            <div
                              className={`w-3 h-3 rounded-full ${
                                category.color === "blue"
                                  ? "bg-blue-500"
                                  : category.color === "orange"
                                    ? "bg-orange-500"
                                    : category.color === "green"
                                      ? "bg-green-500"
                                      : category.color === "purple"
                                        ? "bg-purple-500"
                                        : "bg-gray-500"
                              }`}
                            ></div>
                            <h3
                              className={`font-semibold text-lg ${getColorClasses(category.color)} group-hover:text-orange-600 transition-colors`}
                            >
                              {category.title}
                            </h3>
                          </Link>
                          <div className="space-y-3">
                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                                className="block text-gray-600 hover:text-orange-600 transition-colors text-sm pl-6"
                                onClick={() => setIsServicesOpen(false)}
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
