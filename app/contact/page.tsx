"use client"
import Image from "next/image"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Plus, MessageCircle, Minus } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import PageTransition from "@/components/PageTransition"
import AnimatedSection from "@/components/AnimatedSection"
import { motion, AnimatePresence } from "framer-motion"

import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div
      className="border border-gray-200 rounded-lg bg-white"
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <motion.button
        className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="font-semibold text-gray-900 text-lg">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? (
            <Minus className="h-5 w-5 text-gray-500 flex-shrink-0" />
          ) : (
            <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
          )}
        </motion.div>
      </motion.button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    source: "",
    budget: "",
    customBudget: "",
    message: "",
    files: null as FileList | null,
    agreeToPrivacy: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, files: e.target.files }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToPrivacy: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.")
  }

  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <PageTransition>
      <main>
        {/* Hero Section with Contact Image */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <HeroBackground>
            <Header currentPage="contact" />

            <div className="relative z-10 max-w-7xl mx-auto px-2 xxxxs:px-3 xxxs:px-4 xxs:px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 xxxxs:pt-18 xxxs:pt-20 xxs:pt-24 xs:pt-28 sm:pt-32 lg:pt-36 xl:pt-40 pb-8 xxxxs:pb-10 xxxs:pb-12 xxs:pb-16 xs:pb-20 sm:pb-24 lg:pb-28 xl:pb-32">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">Contact Us</h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Welcome to the support portal! Search your answers with the search box, or if you're stuck you can
                    create a support ticket.
                  </p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
                      onClick={scrollToContactForm}
                    >
                      Let's Work Together
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Content - Hero Image with Overlays */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative">
                    <Image
                      src="/images/contact-hero-woman.png"
                      alt="Customer support representative"
                      width={600}
                      height={600}
                      className="(max-width: 280px) 100vw, (max-width: 320px) 99.8vw, (max-width: 375px) 99vw, (max-width: 640px) 97vw, 100vw"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </HeroBackground>
        </section>

        {/* Contact Form Section */}
        <AnimatedSection>
          <section id="contact-form" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Information - Now on the Left */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">We'd love to hear from you</h2>
                  <p className="text-gray-600 mb-8">
                    Need something cleared up? Here are our most frequently asked questions.
                  </p>

                  <div className="space-y-8">
                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Mail className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">Our friendly team is here to help.</p>
                        <a href="mailto:info@pixelsphere.ca" className="text-blue-600 hover:text-blue-700">
                          info@pixelsphere.ca
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Phone className="h-6 w-6 text-purple-600" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                        <a href="tel:+5145127873" className="text-blue-600 hover:text-blue-700">
                          +(514) 512-7873
                        </a>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start space-x-4"
                      whileHover={{ scale: 1.02, x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <MapPin className="h-6 w-6 text-green-600" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                        <p className="text-gray-600 mb-2">Come say hello at our office HQ.</p>
                        <p className="text-gray-700">Serving clients worldwide</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Contact Form - Now on the Right */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Form Header */}
                  <div className="text-center lg:text-left mb-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full text-orange-600 text-sm font-medium mb-4"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Let's Start a Conversation
                    </motion.div>
                    <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
                      Get in touch
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Ready to bring your vision to life? We'd love to hear from you.
                    </p>
                  </div>

                  {/* Modern Form Card */}
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div 
                          className="group"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                            First name *
                          </label>
                          <div className="relative">
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder="Your first name"
                              className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                              required
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                          </div>
                        </motion.div>
                        <motion.div 
                          className="group"
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                            Last name
                          </label>
                          <div className="relative">
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder="Your last name"
                              className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Email Field */}
                      <motion.div 
                        className="group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                          Email *
                        </label>
                        <div className="relative">
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                            required
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Phone Field */}
                      <motion.div 
                        className="group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                          Phone number *
                        </label>
                        <div className="relative">
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+1 (555) 123-4567"
                            className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                            required
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Service Field */}
                      <motion.div 
                        className="group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                          What services are you looking for? *
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                            required
                          >
                            <option value="">Select a service</option>
                            <option value="brand-positioning">Brand Positioning & Messaging</option>
                            <option value="visual-identity">Visual Identity Systems</option>
                            <option value="brand-architecture">Brand Architecture</option>
                            <option value="rebranding">Rebranding & Brand Refreshes</option>
                            <option value="digital-strategy">Digital Brand Strategy</option>
                            <option value="employer-branding">Employer Branding</option>
                            <option value="web-development">Web Development</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Source Field */}
                      <motion.div 
                        className="group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                          Where did you hear about us?
                        </label>
                        <div className="relative">
                          <select
                            name="source"
                            value={formData.source}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                          >
                            <option value="">Select an option</option>
                            <option value="google">Google Search</option>
                            <option value="social-media">Social Media</option>
                            <option value="referral">Referral</option>
                            <option value="website">Website</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Budget Field */}
                      <motion.div 
                        className="group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                          What is your budget? *
                        </label>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                            required
                          >
                            <option value="">Select your budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-10k">$5,000 - $10,000</option>
                            <option value="10k-25k">$10,000 - $25,000</option>
                            <option value="25k-50k">$25,000 - $50,000</option>
                            <option value="over-50k">Over $50,000</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Conditional Custom Budget Input */}
                      <AnimatePresence>
                        {formData.budget === "over-50k" && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="group"
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                              Please specify your budget amount *
                            </label>
                            <div className="relative">
                              <Input
                                name="customBudget"
                                value={formData.customBudget}
                                onChange={handleInputChange}
                                placeholder="e.g., $75,000"
                                className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                                required={formData.budget === "over-50k"}
                              />
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Message Field */}
                      <motion.div 
                        className="group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                          Tell us more about your project *
                        </label>
                        <div className="relative">
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Describe your project, goals, timeline, and any specific requirements..."
                            rows={5}
                            className="w-full p-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400 resize-none"
                            required
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* File Upload */}
                      <motion.div
                        className="group"
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                          File Upload
                        </label>
                        <motion.div
                          className="relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center bg-gray-50/30 hover:border-orange-400 hover:bg-orange-50/30 transition-all duration-300 cursor-pointer group"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <input type="file" className="hidden" id="file-upload" multiple onChange={handleFileChange} />
                          <label htmlFor="file-upload" className="cursor-pointer">
                            <div className="text-gray-600">
                              <motion.div
                                className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl flex items-center justify-center mb-4 group-hover:from-orange-200 group-hover:to-pink-200 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                <svg
                                  className="w-8 h-8 text-orange-600"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </motion.div>
                              <p className="text-lg font-medium text-gray-700 mb-2">Click to upload files or drag and drop</p>
                              <p className="text-sm text-gray-500">PNG, JPG, PDF up to 10MB</p>
                            </div>
                          </label>
                        </motion.div>
                      </motion.div>

                      {/* Privacy Checkbox */}
                      <motion.div 
                        className="flex items-start space-x-3 p-4 bg-gray-50/50 rounded-xl"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Checkbox 
                          id="privacy" 
                          checked={formData.agreeToPrivacy} 
                          onCheckedChange={handleCheckboxChange}
                          className="mt-1 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                          I agree to the{" "}
                          <a href="#" className="text-orange-600 hover:text-orange-700 font-medium underline">
                            privacy policy
                          </a>{" "}
                          and understand that my information will be used to contact me about this inquiry.
                        </label>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }} 
                        whileTap={{ scale: 0.98 }}
                        className="pt-4"
                      >
                        <Button 
                          type="submit" 
                          className="w-full h-14 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            Send Message
                            <motion.svg 
                              className="w-5 h-5 ml-2" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </motion.svg>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Button>
                      </motion.div>
                    </form>
                  </motion.div>
                </motion.div>

                {/* Contact Information */}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection>
          <section id="faq" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Orange decorative shape - top right edge */}
            <motion.div
              className="absolute top-8 right-0 opacity-80 z-0"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-rhYKEs7iyHqIRKtnF7t0Yu5r57IRmQ.png"
                alt="Decorative orange shape"
                width={120}
                height={120}
                className="w-24 h-24 lg:w-32 lg:h-32"
              />
            </motion.div>

            {/* Cyan spiral - left side middle */}
            <motion.div
              className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-80 z-0"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69-k4S86mlsl1BRamdSHJCBXNfdqJJKZK.png"
                alt="Decorative cyan spiral"
                width={80}
                height={80}
                className="w-16 h-16 lg:w-20 lg:h-20"
              />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Left Column - FAQ Title and Questions */}
                <div>
                  <motion.h2
                    className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Frequently
                    <br />
                    asked questions
                  </motion.h2>

                  <div className="space-y-4">
                    {[
                      {
                        question: "What services does PixelSphere offer?",
                        answer:
                          "PixelSphere specializes in strategic brand consulting including Brand Positioning & Messaging, Visual Identity Systems, Brand Architecture, Rebranding & Brand Refreshes, Digital Brand Strategy, and Employer Branding.",
                      },
                      {
                        question: "How long does it take to complete a brand strategy project?",
                        answer:
                          "The timeline varies depending on the complexity and scope of the project. A brand positioning project might take 4-6 weeks, while a complete rebrand can take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
                      },
                      {
                        question: "Do you work with startups or only established companies?",
                        answer:
                          "We work with businesses at all stages - from startups shaping their first impression to legacy brands evolving their next chapter. Our scalable solutions are designed to grow with your business.",
                      },
                      {
                        question: "What's included in a brand strategy project?",
                        answer:
                          "Our brand strategy projects typically include deep discovery research, competitive analysis, brand positioning, messaging framework, visual identity guidelines, and implementation roadmap. Each project is customized to your specific needs.",
                      },
                      {
                        question: "How do you measure the success of a brand project?",
                        answer:
                          "We measure success through various metrics including brand awareness, customer engagement, market differentiation, and business growth indicators. We establish clear KPIs at the project start and track progress throughout.",
                      },
                      {
                        question: "Can you help improve our existing brand without a complete rebrand?",
                        answer:
                          "We offer brand refreshes and optimization services that can enhance your existing brand without starting from scratch. This might include messaging refinement, visual updates, or digital strategy improvements.",
                      },
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <FAQItem question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Additional Help Card */}
                <div className="flex items-start justify-center lg:pt-32">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="p-8 bg-white shadow-lg max-w-sm w-full">
                      <CardContent className="p-0 text-center">
                        <motion.div
                          className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-6"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <MessageCircle className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Do you have more questions?</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          End-to-end payments and financial management in a single solution. Meet the right platform to
                          help realize.
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg"
                            onClick={() => window.location.href = 'mailto:info@pixelsphere.ca'}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <CTASection
            title="Crafting Digital Experiences That Make Brands Stand Out"
            description="We design and develop websites and applications that help startups and businesses grow, connect, and thrive online."
            buttonText="Contact Us"
            backgroundImage="/images/cta-bg.png"
          />
        </AnimatedSection>


        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </main>
    </PageTransition>
  )
}
