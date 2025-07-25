"use client"
import { motion } from "framer-motion"

interface Stat {
  label: string
  value: string
}

interface StatsDisplayProps {
  stats: Stat[]
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{stat.label}</div>
          <motion.div
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2 + index * 0.1,
            }}
            viewport={{ once: true }}
          >
            {stat.value}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
