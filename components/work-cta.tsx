"use client"
import { Button } from "@/components/ui/button"
import { Mail, Phone, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

interface WorkCTAProps {
  title?: string
  subtitle?: string
  email?: string
  phone?: string
  buttonText?: string
}

export default function WorkCTA({
  title = "Have a project idea in mind.",
  subtitle = "Get in touch and let's chat!",
  email = "info@pixelsphere.com",
  phone = "(406) 555-0120",
  buttonText = "Request Quote",
}: WorkCTAProps) {
  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/contact#contact-form"
    }
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Blue gradient background with curved lines */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 40%, rgba(255, 115, 0, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 85% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 55%),
            linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 35%, #2563eb 60%, #3b82f6 85%, #60a5fa 100%)
          `,
        }}
      >
        {/* Curved line elements */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M-100 200 Q 200 100, 500 200 T 1000 150 Q 1200 120, 1500 180"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M-50 600 Q 300 500, 700 550 T 1200 500 Q 1400 480, 1600 520"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M200 50 Q 500 -20, 800 80 T 1300 60"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.h2>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-16 mb-8 sm:mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </motion.div>
            <div className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">Email Address</div>
            <div className="text-white text-base sm:text-lg md:text-xl font-medium">{email}</div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
            </motion.div>
            <div className="text-white/80 text-xs sm:text-sm mb-1 sm:mb-2">Phone Number</div>
            <div className="text-white text-base sm:text-lg md:text-xl font-medium">{phone}</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg w-full sm:w-auto"
            onClick={scrollToContactForm}
          >
            {buttonText}
            <div className="ml-3 w-5 h-5 sm:w-6 sm:h-6 bg-white/20 rounded-full flex items-center justify-center">
              <motion.div whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 text-white" />
              </motion.div>
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
