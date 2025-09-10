"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Heart,
  Users,
  Globe,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Play,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";
import { hopeFoundationProject } from "@/data/projects/hope-foundation";

const impactStats = [
  {
    number: "50,000+",
    label: "Lives Impacted",
    icon: Heart,
  },
  {
    number: "25",
    label: "Communities Served",
    icon: Users,
  },
  {
    number: "15",
    label: "Countries Reached",
    icon: Globe,
  },
  {
    number: "100+",
    label: "Projects Completed",
    icon: Award,
  },
];

const causes = [
  {
    title: "Education for All",
    description:
      "Providing quality education and learning resources to underserved communities worldwide.",
    image: "/images/hopefoundation-project/Img.png",
    raised: "$45,000",
    goal: "$60,000",
    percentage: 75,
  },
  {
    title: "Clean Water Initiative",
    description:
      "Building sustainable water systems to ensure access to clean, safe drinking water.",
    image: "/images/hopefoundation-project/Img (1).png",
    raised: "$32,000",
    goal: "$50,000",
    percentage: 64,
  },
  {
    title: "Healthcare Access",
    description:
      "Delivering essential healthcare services and medical supplies to remote areas.",
    image: "/images/hopefoundation-project/Img (2).png",
    raised: "$28,000",
    goal: "$40,000",
    percentage: 70,
  },
];

const testimonials = [
  {
    quote:
      "Hope Foundation changed our entire community. The education program gave our children a future we never thought possible.",
    author: "Maria Santos",
    location: "Guatemala",
    image: "/images/hopefoundation-project/about-img-1.jpg.png",
  },
  {
    quote:
      "The clean water project brought life back to our village. We can't thank Hope Foundation enough for their dedication.",
    author: "James Okoye",
    location: "Nigeria",
    image: "/images/hopefoundation-project/about-img-2.jpg.png",
  },
];

const regions = [
  { name: "North America", projects: 15, coordinates: { x: 20, y: 40 } },
  { name: "South America", projects: 12, coordinates: { x: 25, y: 65 } },
  { name: "Africa", projects: 28, coordinates: { x: 52, y: 55 } },
  { name: "Asia", projects: 22, coordinates: { x: 70, y: 45 } },
  { name: "Europe", projects: 8, coordinates: { x: 48, y: 35 } },
];

export default function HopeFoundationPage() {
  const [selectedCause, setSelectedCause] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Add this line
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const predefinedAmounts = ["25", "50", "100", "250"];

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
    <PageTransition>
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "Movement, sans-serif" }}
      >
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800"
          style={{ backgroundColor: "#131A1B" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
                <div className="flex items-center">
                  {/* Hope Foundation Logo */}
                  <Image
                    src="/images/hopefoundation-project/logo.png"
                    alt="Hope Foundation Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                    priority
                  />
                </div>
              </motion.div>

              {/* Desktop Navigation Links */}
              <motion.div
                className="hidden md:flex items-center space-x-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  { name: "Home", href: "#home", active: true },
                  { name: "About", href: "#about", active: false },
                  { name: "Campaign", href: "#causes", active: false },
                  { name: "Contact", href: "#contact", active: false },
                ].map((item, index) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.href}
                      className={`text-base font-medium transition-colors duration-200 relative ${
                        item.active
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 transition-colors duration-200"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="sr-only">Open main menu</span>
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {!mobileMenuOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
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
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </motion.div>
                </motion.button>
              </div>

              {/* GET INVOLVED Button */}
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2.5 font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl border-0 rounded-sm"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    onClick={() => {
                      const donationSection =
                        document.getElementById("donation");
                      if (donationSection) {
                        donationSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    GET INVOLVED
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden border-t border-gray-700"
                style={{ backgroundColor: "#131A1B" }}
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
                  {[
                    { name: "Home", href: "#home" },
                    { name: "About", href: "#about" },
                    { name: "Campaign", href: "#causes" },
                    { name: "Contact", href: "#contact" },
                  ].map((item, index) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-white hover:text-yellow-400 hover:bg-white/10 rounded-md font-medium transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ fontFamily: "Movement, sans-serif" }}
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
                        const donationSection =
                          document.getElementById("donation");
                        if (donationSection) {
                          donationSection.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      GET INVOLVED
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section - Matching Reference Image */}
        <section
          id="home"
          className="relative min-h-screen flex items-center overflow-hidden pt-16"
          style={{ backgroundColor: "#131A1B" }}
        >
          {/* Background Image with Seamless Blend */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hopefoundation-project/hero.png"
              alt="Hope Foundation Hero Background"
              fill
              className="object-cover object-right"
              priority
            />
            {/* Gradient overlay for seamless left-side blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#131A1B] via-[#131A1B]/80 via-40% to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="min-h-[80vh] flex items-center">
              {/* Content - Takes up left side */}
              <motion.div
                className="text-white max-w-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* BE THE CHANGE Tag */}
                <motion.div
                  className="inline-block mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <span
                    className="text-yellow-400 text-sm font-bold tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    BE THE CHANGE
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  CHANGING LIVES,
                  <br />
                  ONE COMMUNITY
                  <br />
                  AT A TIME.
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-lg"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  To create a world where everyone, regardless of background,
                  has the tools and support to live a healthy, educated, and
                  empowered life.
                </motion.p>

                {/* Donate Button */}
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl border-0 rounded-sm"
                      style={{ fontFamily: "Movement, sans-serif" }}
                      onClick={() => {
                        const donationSection =
                          document.getElementById("donation");
                        if (donationSection) {
                          donationSection.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    >
                      DONATE
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Donor Avatars */}
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                >
                  <div className="flex -space-x-2 mr-4">
                    {[
                      "/images/Avatar (1).png",
                      "/images/Avatar (2).png",
                      "/images/Avatar (3).png",
                      "/images/Avatar (4).png",
                    ].map((avatar, index) => (
                      <motion.div
                        key={index}
                        className="relative"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                      >
                        <Image
                          src={avatar}
                          alt={`Donor ${index + 1}`}
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white shadow-lg"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <motion.span
                    className="text-white text-sm font-medium"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 2.1 }}
                  >
                    100+ Donators
                  </motion.span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="w-1 h-3 bg-yellow-400 rounded-full mt-2"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </section>

        {/* About Us Section - Following Hero */}
        <AnimatedSection>
          <section id="about" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Images */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Main Image Container */}
                  <div className="relative">
                    {/* Large Main Image */}
                    <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/hopefoundation-project/about-img-2.jpg.png"
                        alt="Hope Foundation Community Impact"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Smaller Overlapping Image */}
                    <motion.div
                      className="absolute -top-8 -left-8 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Image
                        src="/images/hopefoundation-project/about-img-1.jpg.png"
                        alt="Community Children"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column - Content */}
                <motion.div
                  className="lg:pl-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Section Tag */}
                  <motion.div
                    className="inline-block mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <span
                      className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      ABOUT US
                    </span>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h2
                    className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    TO SEE COMMUNITIES
                    <br />
                    FLOURISH
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-8"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    We are a grassroots-driven organization dedicated to
                    transforming lives in marginalized communities through
                    practical, sustainable programs. Founded in 2025, our team
                    is passionate about addressing inequality, promoting
                    education, and empowering women and youth.
                  </motion.p>

                  {/* Values List */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    {[
                      "Compassion",
                      "Transparency",
                      "Collaboration",
                      "Respect for human dignity",
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span
                          className="text-gray-700 font-medium"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Our Campaigns Section */}
        <AnimatedSection>
          <section
            id="campaigns"
            className="py-16 lg:py-24"
            style={{ backgroundColor: "#FEFEF4" }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    OUR CAMPAIGNS
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  FIGHTING FOR A BETTER TOMORROW
                </motion.h2>
              </motion.div>

              {/* Campaigns Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.6,
                    },
                  },
                }}
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Education Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Education
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Fermentum nisl accumsan nisl sapien in. Accumsan nisl sapien
                    in...
                  </p>
                </motion.div>

                {/* Clean Water Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Clean Water
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Ultricies lacus turpis proin tempor faucibus
                  </p>
                </motion.div>

                {/* Health Care Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Health Care
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Adipiscing in vitae necsque eget fringilla a morbi
                  </p>
                </motion.div>

                {/* Local Communities Campaign */}
                <motion.div
                  className="text-center group"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-12 h-12 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl lg:text-2xl font-bold text-gray-900 mb-4"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Local communities
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Nunc tristique quis leo duis gravida volutpat vitae
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Latest Causes Section */}
        <AnimatedSection>
          <section id="causes" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    OUR CAMPAIGN
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  TURNING ACTIONS INTO RESULTS
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Turning Actions into Results Your support is making real,
                  measurable change. This is just the beginning. Every
                  contribution, whether big or small, fuels the momentum for a
                  better tomorrow.
                </motion.p>
              </motion.div>

              {/* Causes Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.8,
                    },
                  },
                }}
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Clean Water for All */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/hopefoundation-project/Img.png"
                      alt="Clean Water Initiative"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Clean Water for All
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Access to clean and safe water is a fundamental human
                      right, yet millions around the world still...
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span
                            className="font-bold text-gray-900"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            Goal: $100000
                          </span>
                          <span className="text-gray-500 ml-4">
                            10 donations
                          </span>
                        </div>
                      </div>
                      <div className="mt-1">
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Raised: $ 60000
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-medium transition-all duration-200"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>

                {/* Improve Education */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/hopefoundation-project/Img (1).png"
                      alt="Education Program"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Improve Education
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      Education is the cornerstone of sustainable development.
                      It empowers individuals...
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: "53%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span
                            className="font-bold text-gray-900"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            Goal: $150000
                          </span>
                          <span className="text-gray-500 ml-4">
                            25 donations
                          </span>
                        </div>
                      </div>
                      <div className="mt-1">
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Raised: $ 80000
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-medium transition-all duration-200"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>

                {/* End Hunger */}
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    },
                  }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/images/hopefoundation-project/Img (2).png"
                      alt="End Hunger Initiative"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      End Hunger
                    </h3>
                    <p
                      className="text-gray-600 text-sm leading-relaxed mb-6"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      In a world that produces enough food to feed everyone,
                      hunger is a solvable crisis. Yet, nearly...
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                        <div
                          className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div>
                          <span
                            className="font-bold text-gray-900"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            Goal: $200000
                          </span>
                          <span className="text-gray-500 ml-4">
                            6 donations
                          </span>
                        </div>
                      </div>
                      <div className="mt-1">
                        <span
                          className="text-sm text-gray-600"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Raised: $ 60000
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <Button
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 font-medium transition-all duration-200"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      VIEW DETAILS
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Projects by Region - Updated to Match "Our Reach" Design */}
        <AnimatedSection>
          <section id="projects" className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    OUR REACH
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  PROJECTS BY REGION
                </motion.h2>

                <motion.p
                  className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Turning Actions into Results Your support is making real,
                  measurable change. This is just the beginning. Every
                  contribution, whether big or small, fuels the momentum for a
                  better tomorrow.
                </motion.p>
              </motion.div>

              {/* Region Tabs */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { name: "Central Africa", active: true },
                  { name: "Eastern Europe", active: false },
                  { name: "Southeast Asia", active: false },
                  { name: "Central America", active: false },
                ].map((region, index) => (
                  <motion.button
                    key={region.name}
                    className={`px-6 py-3 text-lg font-medium transition-all duration-200 ${
                      region.active
                        ? "text-yellow-500 border-b-2 border-yellow-500"
                        : "text-gray-600 hover:text-yellow-500"
                    }`}
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {region.name}
                  </motion.button>
                ))}
              </motion.div>

              {/* World Map with Pins */}
              <motion.div
                className="relative max-w-6xl mx-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                {/* Dotted World Map Background */}
                <div className="relative mx-auto max-w-4xl">
                  <Image
                    src="/images/hopefoundation-project/Map+ pins.png"
                    alt="World Map with Project Locations"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                  />

                  {/* Interactive Pins */}
                  {regions.map((region, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-4 h-4 bg-green-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform duration-200"
                      style={{
                        left: `${region.coordinates.x}%`,
                        top: `${region.coordinates.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      whileHover={{ scale: 1.5 }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {region.name}: {region.projects} projects
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Donate Now Section - Following Our Reach */}
        <AnimatedSection>
          <section
            id="donation"
            className="py-16 lg:py-24"
            style={{ backgroundColor: "#FBFDAC" }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    DONATE NOW
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  SUPPORT LASTING CHANGE
                </motion.h2>
              </motion.div>

              {/* Donation Form */}
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <form className="space-y-8">
                  {/* Donation Amount Selection */}
                  <div>
                    <motion.div
                      className="grid grid-cols-3 gap-4 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {/* $25 Button */}
                      <motion.button
                        type="button"
                        onClick={() => setDonationAmount("25")}
                        className={`p-6 rounded-lg font-bold text-xl transition-all duration-200 ${
                          donationAmount === "25"
                            ? "bg-yellow-400 text-gray-900 shadow-lg"
                            : "bg-white border-2 border-gray-300 text-gray-900 hover:border-yellow-400 hover:bg-yellow-50"
                        }`}
                        style={{ fontFamily: "Movement, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        $25
                      </motion.button>

                      {/* $50 Button */}
                      <motion.button
                        type="button"
                        onClick={() => setDonationAmount("50")}
                        className={`p-6 rounded-lg font-bold text-xl transition-all duration-200 ${
                          donationAmount === "50"
                            ? "bg-yellow-400 text-gray-900 shadow-lg"
                            : "bg-white border-2 border-gray-300 text-gray-900 hover:border-yellow-400 hover:bg-yellow-50"
                        }`}
                        style={{ fontFamily: "Movement, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        $50
                      </motion.button>

                      {/* $100 Button */}
                      <motion.button
                        type="button"
                        onClick={() => setDonationAmount("100")}
                        className={`p-6 rounded-lg font-bold text-xl transition-all duration-200 ${
                          donationAmount === "100"
                            ? "bg-yellow-400 text-gray-900 shadow-lg"
                            : "bg-white border-2 border-gray-300 text-gray-900 hover:border-yellow-400 hover:bg-yellow-50"
                        }`}
                        style={{ fontFamily: "Movement, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        $100
                      </motion.button>
                    </motion.div>

                    {/* Custom Amount Input and Donate Button */}
                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount("");
                        }}
                        className="flex-1 h-14 text-lg border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 h-14 text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl border-0"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          DONATE
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </form>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>
      </div>

      {/* Footer */}
      <AnimatedSection>
        <footer
          className="relative overflow-hidden"
          style={{ backgroundColor: "#131A1B" }}
        >
          {/* Main Footer Content */}
          <div className="relative z-10 py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Top Section - Main CTA */}
              <motion.div
                className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 pb-8 border-b border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6 lg:mb-0">
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    READY TO WORK WITH
                    <br />
                    US?
                  </h2>
                  <p
                    className="text-gray-300 text-lg"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Empowering Communities. Protecting Humanity.
                  </p>
                </div>

                {/* Distinctive Round Button */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    {/* Circular Button with Border Text */}
                    <div 
                      className="w-24 h-24 bg-yellow-400 rounded-full relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group"
                      onClick={() => {
                        const contactSection = document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {/* Circular Text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                          <defs>
                            <path
                              id="circle"
                              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                            />
                          </defs>
                          <text className="text-[8px] fill-gray-900 font-medium" style={{ fontFamily: 'Movement, sans-serif' }}>
                            <textPath href="#circle" startOffset="0%">
                              CONTACT NOW • CONTACT NOW • CONTACT NOW • 
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      
                      {/* Center Arrow */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-gray-900 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Footer Links Grid */}
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Contact Info */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <div className="mb-8">
                    {/* Logo/Icon */}
                    <div className="w-12 h-12 flex items-center justify-center mb-6">
                      <Image
                        src="/images/hopefoundation-project/logo.png"
                        alt="Hope Foundation Logo"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                        priority
                      />{" "}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p
                          className="text-white font-medium mb-1"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Phone:
                        </p>
                        <p
                          className="text-gray-300"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          (610) 366-7883
                        </p>
                      </div>

                      <div>
                        <p
                          className="text-white font-medium mb-1"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          Address:
                        </p>
                        <p
                          className="text-gray-300 leading-relaxed"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          8911 Tanglewood Ave.
                          <br />
                          Capitol Heights, MD 20743
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* About Us */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <h4
                    className="text-white font-semibold mb-6 text-lg"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    About Us
                  </h4>
                  <ul className="space-y-3">
                    {["About Us", "Causes", "Volunteers", "Partners..."].map(
                      (item, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </motion.div>

                {/* Useful Links */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <h4
                    className="text-white font-semibold mb-6 text-lg"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Useful Links
                  </h4>
                  <ul className="space-y-3">
                    {["F.A.Q", "News", "Reports", "Terms of Use..."].map(
                      (item, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                            style={{ fontFamily: "Movement, sans-serif" }}
                          >
                            {item}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </motion.div>

                {/* Gallery */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <h4
                    className="text-white font-semibold mb-6 text-lg"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    Gallery
                  </h4>
                  <div className="grid grid-cols-3 gap-1">
                    {[
                      { src: '/images/hopefoundation-project/gallery-1.png', alt: 'Community Education Program' },
                      { src: '/images/hopefoundation-project/gallery-2.png', alt: 'Clean Water Initiative' },
                      { src: '/images/hopefoundation-project/gallery-3.png', alt: 'Healthcare Outreach' },
                      { src: '/images/hopefoundation-project/gallery-4.png', alt: 'Youth Empowerment' },
                      { src: '/images/hopefoundation-project/gallery-5.png', alt: 'Community Development' },
                      { src: '/images/hopefoundation-project/gallery-6.png', alt: 'Volunteer Activities' }
                    ].map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover group-hover:opacity-80 transition-opacity duration-200"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <div className="w-6 h-6 bg-white/90 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {/* Social Media Links - Fixed */}
                <div className="flex items-center space-x-4 mb-4 md:mb-0">
                  {[
                    { Icon: Facebook, label: 'Facebook', href: '#' },
                    { Icon: Twitter, label: 'Twitter', href: '#' },
                    { Icon: Instagram, label: 'Instagram', href: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-700 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-200 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.Icon className="w-4 h-4 text-gray-300 group-hover:text-gray-900 transition-colors duration-200" />
                    </motion.a>
                  ))}
                </div>

                {/* Copyright */}
                <p
                  className="text-gray-400 text-sm text-center md:text-right"
                  style={{ fontFamily: "Movement, sans-serif" }}
                >
                  © Copyright Charity 2025. Design by PixelSphere
                </p>
              </motion.div>
            </div>
          </div>

          {/* Background Pattern/Texture */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent" />
          </div>
        </footer>
      </AnimatedSection>
    </PageTransition>
  );
}
