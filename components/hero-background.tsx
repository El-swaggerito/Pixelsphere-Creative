import type React from "react"
interface HeroBackgroundProps {
  children: React.ReactNode
  className?: string
}

export default function HeroBackground({ children, className = "" }: HeroBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* CSS Background with gradient and curved lines */}
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
          <path
            d="M-100 200 Q 200 100, 500 200 T 1000 150 Q 1200 120, 1500 180"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-50 600 Q 300 500, 700 550 T 1200 500 Q 1400 480, 1600 520"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M200 50 Q 500 -20, 800 80 T 1300 60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
        </svg>
      </div>
      {children}
    </div>
  )
}
