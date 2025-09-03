"use client"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import emailjs from "@emailjs/browser"

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      // Newsletter subscription parameters
      const newsletterParams = {
        subscriber_email: email.trim(),
        subscription_date: new Date().toLocaleDateString(),
        year: new Date().getFullYear(),
        to_email: "newsletter@pixelsphere.com", // Replace with your newsletter email
      };
      
      // Send newsletter subscription email using EmailJS
      if (process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
          newsletterParams,
          process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_PUBLIC_KEY!
        );
      }
      
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail("");
        setError("");
      }, 3000);
      
    } catch (error) {
      console.error("Failed to send newsletter subscription:", error);
      setError("Sorry, there was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-blue-700 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Subscription Card */}
        <motion.div 
          className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Mail className="w-8 h-8 mr-3 text-white" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Subscribe to our newsletter
                </h3>
              </div>
              <p className="text-orange-100 text-base sm:text-lg leading-relaxed">
                Get exclusive design tips, industry insights, and early access to our latest projects delivered straight to your inbox.
              </p>
            </div>
            
            {/* Right Column - Form */}
            <div className="">
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      className={`h-12 text-base bg-white border-0 text-gray-900 placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-500 ${
                        error ? "ring-2 ring-red-300" : ""
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className={`h-12 px-6 sm:px-8 font-semibold transition-all duration-300 whitespace-nowrap ${
                      isSuccess 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-white hover:bg-gray-100 text-orange-600 hover:text-orange-700'
                    }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600 mr-2"></div>
                        Subscribing...
                      </div>
                    ) : isSuccess ? (
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Subscribed!
                      </div>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </div>
                {error && (
                  <p className="text-red-200 text-sm mt-2">{error}</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>

        {/* Existing Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image src="/images/footer-logo.png"  className="-my-12" alt="" width={150} height={100}/>
            </motion.div>
            <p className="text-blue-200 sm:mb-8 leading-relaxed text-sm sm:text-base max-w-md">
            PixelSphere Creative – Your trusted partner for custom websites, smart branding, and digital growth strategies in Canada and beyond.
            </p>
            <div className="mb-6 sm:mb-8">
              <div className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow us</div>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="https://web.facebook.com/people/PixelSphere-Creatives/pfbid0B6rspCn3TZcKihRrx2KwjyQ9UsFSDkoErGH9SpySwX4i68BH2J1195s4j5HG7W4Dl/"
                    rel="noopener noreferrer nofollow" 
                    target="_blank"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="https://www.instagram.com/pixelsphere.creatives/"
                    rel="noopener noreferrer nofollow" 
                    target="_blank"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="https://www.linkedin.com/company/pixelspherecreatives/"
                    rel="noopener noreferrer nofollow" 
                    target="_blank"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Link
                    href="https://x.com/PixelsphereC"
                    rel="noopener noreferrer nofollow" 
                    target="_blank"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer"
                    aria-label="Twitter"
                  >
                    <Twitter className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Our Services</h3>
            <ul className="space-y-3 sm:space-y-4 text-blue-200 text-sm sm:text-base">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/custom-web-solutions" className="hover:text-white transition-colors">
                    Web Design & Development 
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/ux-design-strategy" className="hover:text-white transition-colors">
                    UI UX Design
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/branding-identity" className="hover:text-white transition-colors">
                    Brand Identity
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/graphic-design" className="hover:text-white transition-colors">
                    Graphics Design
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/services/digital-growth" className="hover:text-white transition-colors">
                    Digital Growth
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Resources & Support</h3>
            <ul className="space-y-3 sm:space-y-4 text-blue-200 text-sm sm:text-base">
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/work" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/contact#faq" className="hover:text-white transition-colors">
                    FAQS
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section - uses same container alignment */}
        <div className="border-t border-blue-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-blue-200 text-sm sm:text-base text-center sm:text-left">
            All rights reserved by © PixelSphere 2025
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 text-blue-200 text-sm sm:text-base">
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="hover:text-white text-center sm:text-left transition-colors">
                Privacy & Policy
              </Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link href="#" className="hover:text-white text-center sm:text-left transition-colors">
                Terms & Conditions
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
