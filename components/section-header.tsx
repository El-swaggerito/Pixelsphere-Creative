"use client"
import { motion } from "framer-motion"

interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-12 sm:mb-16`}>
      <motion.div
        className={`flex items-center ${centered ? "justify-center" : "justify-start"} mb-4 sm:mb-6`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-2 h-2 bg-orange-500 rounded-full mr-3"
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.3 }}
        />
        <span className="text-orange-500 font-medium text-xs sm:text-sm tracking-wide uppercase">{label}</span>
      </motion.div>

      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
