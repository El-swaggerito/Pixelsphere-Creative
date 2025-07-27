"use client"
import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface HeroBackgroundProps {
  children: ReactNode
  className?: string;
}

export default function HeroBackground({ children, className }: HeroBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 15% 40%, rgba(255, 115, 0, 0.4) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 85% 25%, rgba(99, 102, 241, 0.3) 0%, transparent 55%)
          `,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Animated wave patterns */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="rgba(255,255,255,0.1)"
          strokeWidth="1"
          stroke="rgba(255,255,255,0.2)"
        />
      </svg>

      {/* Content */}
      {children}
    </div>
  )
}
