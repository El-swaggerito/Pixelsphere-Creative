"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Clock, MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const popularMeals = [
  {
    id: 1,
    name: "Crispy Chicken Burger",
    price: "$12.99",
    image: "/images/drip&grind-project/popularmeal-1.png",
    rating: 4.8,
    category: "Burgers"
  },
  {
    id: 2,
    name: "BBQ Bacon Burger",
    price: "$14.99",
    image: "/images/drip&grind-project/popularmeal-2.png",
    rating: 4.9,
    category: "Burgers"
  },
  {
    id: 3,
    name: "Classic Cheeseburger",
    price: "$10.99",
    image: "/images/drip&grind-project/popularmeal-3.png",
    rating: 4.7,
    category: "Burgers"
  },
  {
    id: 4,
    name: "Spicy Wings",
    price: "$8.99",
    image: "/images/drip&grind-project/popularmeal-4.png",
    rating: 4.6,
    category: "Appetizers"
  },
  {
    id: 5,
    name: "Loaded Fries",
    price: "$6.99",
    image: "/images/drip&grind-project/popularmeal-5.png",
    rating: 4.5,
    category: "Sides"
  },
  {
    id: 6,
    name: "Grilled Chicken Salad",
    price: "$11.99",
    image: "/images/drip&grind-project/popularmeal-6.png",
    rating: 4.4,
    category: "Salads"
  },
  {
    id: 7,
    name: "Fish & Chips",
    price: "$13.99",
    image: "/images/drip&grind-project/popularmeal-7.png",
    rating: 4.8,
    category: "Seafood"
  },
  {
    id: 8,
    name: "Chocolate Milkshake",
    price: "$4.99",
    image: "/images/drip&grind-project/popularmeal-8.png",
    rating: 4.9,
    category: "Beverages"
  }
]

const customerExperience = [
  {
    image: "/images/drip&grind-project/Mask group.png",
    title: "Fresh Ingredients",
    description: "We source only the finest, freshest ingredients for every meal"
  },
  {
    image: "/images/drip&grind-project/Mask group (1).png",
    title: "Expert Chefs",
    description: "Our experienced chefs craft each dish with passion and precision"
  },
  {
    image: "/images/drip&grind-project/Mask group (2).png",
    title: "Fast Delivery",
    description: "Quick and reliable delivery service to your doorstep"
  },
  {
    image: "/images/drip&grind-project/Mask group (3).png",
    title: "Quality Service",
    description: "Exceptional customer service that exceeds expectations"
  }
]

const galleryImages = [
  "/images/drip&grind-project/Rectangle 4341.png",
  "/images/drip&grind-project/Rectangle 4342.png",
  "/images/drip&grind-project/Rectangle 4343.png",
  "/images/drip&grind-project/Rectangle 4344.png",
  "/images/drip&grind-project/Rectangle 4345.png",
  "/images/drip&grind-project/Rectangle 4347.png",
  "/images/drip&grind-project/Rectangle 4348.png"
]

export default function DripGrindHomepage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false) // Add this line
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const categories = ["All", "Burgers", "Appetizers", "Sides", "Salads", "Seafood", "Beverages"]

  const filteredMeals = selectedCategory === "All" 
    ? popularMeals 
    : popularMeals.filter(meal => meal.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="#home" 
                className="text-white hover:text-red-400 font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="#menu" 
                className="text-white hover:text-red-400 font-medium transition-colors duration-200 relative group"
              >
                Menu
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="#about" 
                className="text-white hover:text-red-400 font-medium transition-colors duration-200 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link 
                href="#contact" 
                className="text-white hover:text-red-400 font-medium transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-400 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!mobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/20"
                onClick={() => {
                  const reservationSection = document.getElementById('reservation');
                  if (reservationSection) {
                    reservationSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Make Reservation
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-black/90 backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#home"
              className="block px-3 py-2 text-white hover:text-red-400 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#menu"
              className="block px-3 py-2 text-white hover:text-red-400 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-white hover:text-red-400 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-white hover:text-red-400 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-200 border border-white/20"
                onClick={() => {
                  setMobileMenuOpen(false);
                  const reservationSection = document.getElementById('reservation');
                  if (reservationSection) {
                    reservationSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Make Reservation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/drip&grind-project/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Hero Text - Exact Specification */}
            <h1 className="font-roboto text-5xl md:text-xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-wide mb-6">
              Welcome to <span className="text-red-500 font-medium">Élégance</span>,
              {" "}a refined destination for{" "}
              <span className="text-red-500 font-medium">culinary</span>{" "}
              connoisseurs.
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto mb-12 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience a symphony of flavors, curated wines, and impeccable
            <br className="hidden md:block" />
            service all in an atmosphere of timeless sophistication.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              onClick={() => {
                const menuSection = document.getElementById('menu');
                if (menuSection) {
                  menuSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Menu
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Popular Meals Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-roboto text-4xl md:text-5xl font-bold mb-4" style={{ color: '#C9C9C9' }}>
              Popular Meals
            </h2>
          </div>

          {/* Complete Meals Grid - Optimized Image Display */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Row 1 */}
            {/* Delicious Burger */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-1.png"
                  alt="Delicious Burger"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -25%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">60.00$</span>
                  <span className="text-gray-900 font-bold text-lg">45.00$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Delicious Burger</h3>
              </div>
            </div>

            {/* Grilled Chicken */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-2.png"
                  alt="Grilled Chicken"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -7%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">42.00$</span>
                  <span className="text-gray-900 font-bold text-lg">39.00$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Grilled Chicken</h3>
              </div>
            </div>

            {/* Ruti With Chicken */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-3.png"
                  alt="Ruti With Chicken"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -10%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">29.00$</span>
                  <span className="text-gray-900 font-bold text-lg">26.00$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Ruti With Chicken</h3>
              </div>
            </div>

            {/* Fast Food Combo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-4.png"
                  alt="Fast Food Combo"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -18%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">34.00$</span>
                  <span className="text-gray-900 font-bold text-lg">28.00$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Fast Food Combo</h3>
              </div>
            </div>

            {/* Row 2 */}
            {/* Chicago Deep Pizza */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-5.png"
                  alt="Chicago Deep Pizza"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -21%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">28.00$</span>
                  <span className="text-gray-900 font-bold text-lg">22.00$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Chicago Deep Pizza</h3>
              </div>
            </div>

            {/* Chinese Pasta */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-6.png"
                  alt="Chinese Pasta"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -15%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">40.00$</span>
                  <span className="text-gray-900 font-bold text-lg">34.00$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Chinese Pasta</h3>
              </div>
            </div>

            {/* Whopper Burger King */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-7.png"
                  alt="Whopper Burger King"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -13%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">30.00$</span>
                  <span className="text-gray-900 font-bold text-lg">26.00$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Whopper Burger King</h3>
              </div>
            </div>

            {/* Ruti With Beef Slice */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/drip&grind-project/popularmeal-8.png"
                  alt="Ruti With Beef Slice"
                  width={300}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 left-3 w-10 h-10 bg-gray-200/90 rounded-md flex items-center justify-center hover:bg-gray-300/90 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  -7%
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="mb-3">
                  <span className="text-gray-400 line-through text-sm mr-2">30.52$</span>
                  <span className="text-gray-900 font-bold text-lg">28.52$</span>
                </div>
                <h3 className="font-medium text-lg text-gray-600">Ruti With Beef Slice</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Deliver a high-quality{" "}
                  <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg">
                    customer
                  </span>
                  <br />
                  <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg mt-2">
                    experience
                  </span>
                </h2>
              </div>

              {/* Description Text */}
              <div>
                <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                  Born out of a passion for curated culinary experiences, we bring together the richness of global cuisine with the warmth of local hospitality. Every dish is a celebration — thoughtfully plated, responsibly sourced, and flawlessly served.
                </p>
              </div>

              {/* Book a Table Button */}
              <div>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Book a Table
                </Button>
              </div>
            </div>

            {/* Right Content - Precise Height Control */}
            <div className="grid grid-cols-2 grid-rows-6 gap-4 h-[36rem]">
              {/* Top-left: customerexp-1 (Increased Standard Height - Steak) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/customerexperience-1.png"
                  alt="Grilled steak with flames"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Top-right: customerexp-2 (Much Taller Height - Burger) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/customerexperience-2.png"
                  alt="Gourmet burger stack"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-left: customerexp-3 (Much Taller Height - Fruit Splash) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/customerexperience-3.png"
                  alt="Flying fruit splash ingredients"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-right: customerexp-4 (Increased Standard Height - Rice Bowl) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/customerexperience-4.png"
                  alt="Rice bowl dish presentation"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Black Background with Full-Width Vectors */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-400 mb-4">
              Visit Our Special Menu
            </h2>
          </div>

          {/* Gallery Layout with Full-Width Curved Lines */}
          <div className="relative">
            {/* Full-Width Red Curved Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1400 600" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Left Curve - Extends from far left */}
              <path 
                d="M0 300 Q 200 150, 400 300 Q 500 350, 600 300" 
                stroke="#DC2626" 
                strokeWidth="4" 
                fill="none"
                className="opacity-80"
              />
              {/* Right Curve - Extends to far right */}
              <path 
                d="M800 300 Q 900 250, 1000 300 Q 1200 150, 1400 300" 
                stroke="#DC2626" 
                strokeWidth="4" 
                fill="none"
                className="opacity-80"
              />
            </svg>

            {/* Image Grid */}
            <div className="grid grid-cols-5 gap-6 items-center relative z-10">
              {/* Left Side Image - Steak */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-1.png"
                  alt="Grilled steak with flames"
                  width={200}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Second Image - Burger */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-2.png"
                  alt="Gourmet burger stack"
                  width={200}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Center Image - Fruit Splash (Tallest) */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-3.png"
                  alt="Flying fruit splash ingredients"
                  width={250}
                  height={500}
                  className="w-full h-[32rem] object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Fourth Image - Burger (Mirror) */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-2.png"
                  alt="Gourmet burger stack"
                  width={200}
                  height={400}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Right Side Image - Steak (Mirror) */}
              <div className="relative overflow-hidden rounded-2xl bg-gray-900 group">
                <Image
                  src="/images/drip&grind-project/customerexperience-1.png"
                  alt="Grilled steak with flames"
                  width={200}
                  height={300}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Order Now Button */}
          <div className="text-center mt-16">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              Order Now
            </Button>
          </div>
        </div>
      </section>

      {/* Restaurant Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content - Image Grid */}
            {/* Right Content - Precise Height Control */}
            <div className="grid grid-cols-2 grid-rows-6 gap-4 h-[36rem]">
              {/* Top-left: customerexp-1 (Increased Standard Height - Steak) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/burrito-1.png"
                  alt="burrito"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Top-right: customerexp-2 (Much Taller Height - Burger) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/burrito-2.png"
                  alt="burrito"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-left: customerexp-3 (Much Taller Height - Fruit Splash) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-4">
                <Image
                  src="/images/drip&grind-project/burrito-3.png"
                  alt="burrito"
                  width={300}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Bottom-right: customerexp-4 (Increased Standard Height - Rice Bowl) */}
              <div className="relative overflow-hidden rounded-2xl bg-black group row-span-2">
                <Image
                  src="/images/drip&grind-project/burrito-4.png"
                  alt="burrito"
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Content - Restaurant Info */}
            <div className="space-y-8">
              {/* Main Heading */}
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-6">
                  Ranked #1 high-
                  <br />
                  quality{" "}
                  <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl">
                    Fast Food
                  </span>
                  <br />
                  <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-xl mt-2">
                    Restaurant
                  </span>
                  <div className="flex items-center mt-4">
                    <div className="bg-white rounded-full p-1 border-2 border-gray-200 flex items-center">
                      <div className="rounded-full p-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500">
                          <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </h2>
              </div>

              {/* Restaurant Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-40">
                  <h3 className="text-xl font-bold text-gray-900">Phulka Cuisine</h3>
                
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Chicago</span>
                  </div>
                </div>

                
                <div className="flex items-center gap-48 text-gray-600">
                  
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span>4.3 (500+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Free</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg">
                Indulge in the art of modern cuisine at Drip & Grind, a high-end
                restaurant that blends gourmet dishes, minimalist design, and
                specialty coffee into one unforgettable experience.
              </p>

              {/* View Menu Button */}
              <div>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  View Our Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-300 mb-2">Our FAQ's</h2>
            <p className="text-xl text-white">Find Your Answers with Our FAQ's</p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
              >
                <h3 className="text-xl font-medium text-gray-900">Do We Host During Festivals And Events?</h3>
                <span className="ml-6 flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </button>
              <div className={`px-6 pb-6 ${openFaqIndex === 0 ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">Yes, we offer special hosting services during festivals and events. Please contact us in advance to make arrangements for your special occasion.</p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
              >
                <h3 className="text-xl font-medium text-gray-900">How can I cancel a booking?</h3>
                <span className="ml-6 flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </button>
              <div className={`px-6 pb-6 ${openFaqIndex === 1 ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">You can cancel your booking up to 24 hours before your reservation time through our website or by calling our customer service. Cancellations made less than 24 hours in advance may incur a fee.</p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
              >
                <h3 className="text-xl font-medium text-gray-900">Where can I park my car when I book with the host?</h3>
                <span className="ml-6 flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </button>
              <div className={`px-6 pb-6 ${openFaqIndex === 2 ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">We offer complimentary valet parking for all our guests. Alternatively, there is a public parking garage located one block away from our restaurant.</p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFaqIndex(openFaqIndex === 3 ? null : 3)}
              >
                <h3 className="text-xl font-medium text-gray-900">How can I get a refund?</h3>
                <span className="ml-6 flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </button>
              <div className={`px-6 pb-6 ${openFaqIndex === 3 ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">Refunds are processed within 5-7 business days after approval. To request a refund, please contact our customer service with your booking details and reason for the refund request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Make Reservation
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Information */}
            <div className="md:w-1/3 space-y-8">
              {/* Booking Contact */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">for booking</p>
                  <p className="text-gray-900 font-medium">+1 (850) 344 0 66</p>
                </div>
              </div>

              {/* Private Dining Contact */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">for private dining</p>
                  <p className="text-gray-900 font-medium">info@foodio.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">location</p>
                  <p className="text-gray-900 font-medium">New Street Town 2512x (U.S)</p>
                </div>
              </div>
            </div>

            {/* Reservation Form */}
            <div className="md:w-2/3">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="No of Guest"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Date"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Phone No"
                  />
                </div>
                <div>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Time"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
            {/* Left Column - Brand */}
            <div className="text-left">
              <div className="mb-8">
                <Image
                  src="/images/drip&grind-project/Logo.png"
                  alt="Drip & Grind"
                  width={140}
                  height={45}
                  className="h-10 w-auto"
                  priority
                />
                <div className="space-y-3 text-gray-300">
                  <p className="text-base leading-relaxed">
                    Address of the organization
                  </p>
                  <p className="text-base">
                    +01 (787)-8765456
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column - Social Media */}
            <div className="text-center">
              <h3 className="text-xl font-medium text-white mb-8">
                Find Us On Social Media:
              </h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="#" 
                  className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-red-500 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-red-500 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-red-500 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div className="text-right">
              <h3 className="text-xl font-medium text-white mb-8">
                We're Always Happy To Help
              </h3>
              <p className="text-gray-300 text-base">
                Dripgrind@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom Border and Copyright */}
          <div className="mt-16">
            <div className="border-t border-gray-800 pt-8">
              <div className="text-center">
                <p className="text-gray-400 text-base">
                  Copyright © 2025 Drip & Grind
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}