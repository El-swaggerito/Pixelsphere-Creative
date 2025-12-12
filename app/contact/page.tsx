"use client"
import NextImage from "next/image"
import type React from "react"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, Plus, MessageCircle, Minus } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
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
    socialPlatform: "",
    budget: "",
    customBudget: "",
    message: "",
    agreeToPrivacy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }



  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToPrivacy: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic form validation
    if (
      !formData.firstName ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.budget ||
      !formData.message
    ) {
      alert("Please fill in all required fields.")
      return
    }

    if (!formData.agreeToPrivacy) {
      alert("Please agree to the privacy policy to continue.")
      return
    }

    setIsSubmitting(true)

    try {
      // Template parameters for admin notification
      const adminTemplateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        source: formData.source || "Not specified",
        socialPlatform: formData.socialPlatform || (formData.source === "social-media" ? "Not specified" : "N/A"),
        budget: formData.budget,
        customBudget: formData.customBudget || "Not specified",
        message: formData.message,
        to_name: "PixelSphere Team",
        year: new Date().getFullYear(),
      }

      // Template parameters for customer auto-reply
      const customerTemplateParams = {
        customer_name: formData.firstName,
        from_name: `${formData.firstName} ${formData.lastName}`.trim(),
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        source: formData.source || "Not specified",
        socialPlatform: formData.socialPlatform || (formData.source === "social-media" ? "Not specified" : "N/A"),
        budget: formData.budget,
        customBudget: formData.customBudget || "Not specified",
        message: formData.message,
        year: new Date().getFullYear(),
        to_email: formData.email,
        // Don't include reply_to parameter that conflicts
      }

      // Send admin notification email
      const adminResult = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID!,
        adminTemplateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      console.log("Admin email sent successfully:", adminResult.text)

      // Send customer auto-reply email
      const customerResult = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_CUSTOMER_TEMPLATE_ID!,
        customerTemplateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      console.log("Customer auto-reply sent successfully:", customerResult.text)

      // Show success animation
      setIsSuccess(true)
      setShowSuccess(true)
      
      // Hide success message after 4 seconds
      setTimeout(() => {
        setShowSuccess(false)
        setTimeout(() => {
          setIsSuccess(false)
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            service: "",
            source: "",
            socialPlatform: "",
            budget: "",
            customBudget: "",
            message: "",
            agreeToPrivacy: false,
          })
        }, 300)
      }, 4000)

    } catch (error) {
      console.error("Failed to send emails:", error)
      alert(
        "Sorry, there was an error sending your message. Please try again or contact us directly at info@pixelsphere.ca",
      )
    } finally {
      setIsSubmitting(false)
    }
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
        <section className="relative min-h-[80vh] md:min-h-[70vh] lg:min-h-[40vh] xl:min-h-[55vh] 4xl:min-h-[20vh] flex items-center overflow-hidden">
          <HeroBackground className="!min-h-[70vh] lg:!min-h-[40vh] xl:!min-h-[55vh] 4xl:!min-h-[20vh]">
            <Header currentPage="contact" />

            <div className="relative z-10 max-w-7xl mx-auto px-2 xxxxs:px-3 xxxs:px-4 xxs:px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 xxxxs:pt-18 xxxs:pt-20 xxs:pt-24 xs:pt-28 sm:pt-32 lg:pt-20 xl:pt-24 pb-8 xxxxs:pb-10 xxxs:pb-12 xxs:pb-16 xs:pb-20 sm:pb-24 lg:pb-12 xl:pb-16">
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
                    <NextImage
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
          <section
            id="contact-form"
            className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
          >
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
                        <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                        <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                      <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                      <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                      <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                              <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Source Field */}
                      <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Conditional Social Platform Field */}
                      <AnimatePresence>
                        {formData.source === "social-media" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="group"
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                              Which social media app?
                            </label>
                            <div className="relative">
                              <select
                                name="socialPlatform"
                                value={formData.socialPlatform}
                                onChange={handleInputChange}
                                className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                              >
                                <option value="">Select a platform</option>
                                <option value="instagram">Instagram</option>
                                <option value="facebook">Facebook</option>
                                <option value="twitter">Twitter / X</option>
                                <option value="linkedin">LinkedIn</option>
                                <option value="tiktok">TikTok</option>
                                <option value="youtube">YouTube</option>
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
                        )}
                      </AnimatePresence>

                      {/* Budget Field */}
                      <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                            <svg
                              className="w-5 h-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                      </motion.div>

                      {/* Conditional Custom Budget Input */}
                      <AnimatePresence>
                        {formData.budget && formData.budget !== "" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="group"
                          >
                            <label className="block text-sm font-semibold text-gray-700 mb-3 group-hover:text-orange-600 transition-colors">
                              Please specify your exact budget within the selected range *
                            </label>
                            <div className="relative">
                              <Input
                                name="customBudget"
                                value={formData.customBudget}
                                onChange={handleInputChange}
                                placeholder={
                                  formData.budget === "under-5k"
                                    ? "e.g., $3,500"
                                    : formData.budget === "5k-10k"
                                      ? "e.g., $7,500"
                                      : formData.budget === "10k-25k"
                                        ? "e.g., $15,000"
                                        : formData.budget === "25k-50k"
                                          ? "e.g., $35,000"
                                          : formData.budget === "over-50k"
                                            ? "e.g., $75,000"
                                            : "Enter your exact budget"
                                }
                                className="w-full h-12 px-4 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                                required={formData.budget !== ""}
                              />
                              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/0 to-pink-500/0 group-hover:from-orange-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none"></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">
                              {formData.budget === "under-5k" && "Please enter an amount under $5,000"}
                              {formData.budget === "5k-10k" && "Please enter an amount between $5,000 - $10,000"}
                              {formData.budget === "10k-25k" && "Please enter an amount between $10,000 - $25,000"}
                              {formData.budget === "25k-50k" && "Please enter an amount between $25,000 - $50,000"}
                              {formData.budget === "over-50k" && "Please enter an amount over $50,000"}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Message Field */}
                      <motion.div className="group" whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
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
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting || isSuccess}
                          className={`w-full h-14 font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed ${
                            isSuccess 
                              ? 'bg-green-500 hover:bg-green-500' 
                              : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
                          } text-white`}
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            {isSuccess ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="flex items-center"
                              >
                                <motion.svg
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 0.5, ease: "easeOut" }}
                                  className="w-5 h-5 mr-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <motion.path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                  />
                                </motion.svg>
                                Sent Successfully!
                              </motion.div>
                            ) : isSubmitting ? (
                              <div className="flex items-center">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                />
                                Sending...
                              </div>
                            ) : (
                              <>
                                <motion.div
                                  initial={{ opacity: 0, x: -50 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.8 }}
                                >
                                  Send Message
                                </motion.div>
                                <motion.svg
                                  className="w-5 h-5 ml-2"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  whileHover={{ x: 5 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                  />
                                </motion.svg>
                              </>
                            )}
                          </span>
                          
                          {/* Animated background effect */}
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
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
              <NextImage
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
              <NextImage
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
                        question: "What services does PixelSphere Creatives offer?",
                        answer:
                          "PixelSphere Creatives specializes in strategic brand consulting including Brand Positioning & Messaging, Visual Identity Systems, Brand Architecture, Rebranding & Brand Refreshes, Digital Brand Strategy, and Employer Branding.",
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
                            onClick={handleSendMessage}
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

        <CTASection
          title="Crafting Digital Experiences That Make Brands Stand Out"
          description="We design and develop websites and applications that help startups and businesses grow, connect, and thrive online."
          buttonText="Contact Us"
          backgroundImage="/images/cta-bg.png"
        />

        <Footer />
      </main>
    </PageTransition>
  )
}

const handleSendMessage = () => {
  const email = 'info@pixelsphere.ca'
  const subject = 'Inquiry from PixelSphere Website'
  const body = 'Hello PixelSphere team,\n\nI am interested in your services and would like to discuss my project.\n\nBest regards'
  
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  
  // Detect macOS
  const isMac = /Mac|iPod|iPhone|iPad/.test(navigator.platform)
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  
  if (isMac || isSafari) {
    // Use more reliable method for macOS/Safari
    const tempLink = document.createElement('a')
    tempLink.href = mailtoLink
    tempLink.style.display = 'none'
    document.body.appendChild(tempLink)
    
    // Add a small delay for better compatibility
    setTimeout(() => {
      tempLink.click()
      document.body.removeChild(tempLink)
    }, 100)
    
    // Show helpful message for Mac users
    setTimeout(() => {
      if (confirm('If your email client didn\'t open, would you like to copy our email address?')) {
        navigator.clipboard?.writeText(email).then(() => {
          alert('Email address copied to clipboard!')
        }).catch(() => {
          alert(`Our email: ${email}`)
        })
      }
    }, 2000)
    
  } else {
    // Standard method for other platforms
    window.location.href = mailtoLink
  }
}
