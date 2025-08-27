"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ImageCarouselProps {
  images: string[]
  projectName: string
}

export default function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying, images.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Main Image Display */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <Image
              src={images[currentIndex]}
              alt={`${projectName} branding image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority={currentIndex === 0}
              quality={95}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {/* Enhanced Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 group"
        aria-label="Previous image"
      >
        <div className="relative">
          {/* Main button background */}
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-white/10">
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white transition-all duration-300" />
          </div>
          
          {/* Subtle outer glow on hover */}
          <div className="absolute inset-0 w-12 h-12 lg:w-14 lg:h-14 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Active state indicator */}
          <div className="absolute inset-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/0 group-active:border-white/40 transition-all duration-150" />
        </div>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 group"
        aria-label="Next image"
      >
        <div className="relative">
          {/* Main button background */}
          <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full border border-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-white/10">
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white transition-all duration-300" />
          </div>
          
          {/* Subtle outer glow on hover */}
          <div className="absolute inset-0 w-12 h-12 lg:w-14 lg:h-14 bg-white/5 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Active state indicator */}
          <div className="absolute inset-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/0 group-active:border-white/40 transition-all duration-150" />
        </div>
      </button>
      {/* Enhanced Dot Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center justify-center space-x-2 lg:space-x-3 bg-black/30 backdrop-blur-md rounded-full px-4 py-3 lg:px-6 lg:py-4">
          {images.map((_, index) => {
            const isActive = index === currentIndex
            const isAdjacent = Math.abs(index - currentIndex) === 1 || 
                              (currentIndex === 0 && index === images.length - 1) || 
                              (currentIndex === images.length - 1 && index === 0)
            
            return (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative rounded-full transition-all duration-300 ease-out group ${
                  isActive
                    ? "w-8 h-3 lg:w-10 lg:h-4"
                    : "w-3 h-3 lg:w-4 lg:h-4 hover:w-4 hover:h-4 lg:hover:w-5 lg:hover:h-5"
                }`}
                aria-label={`Go to image ${index + 1}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background dot */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white shadow-lg shadow-white/25"
                      : isAdjacent
                      ? "bg-white/70 group-hover:bg-white/90"
                      : "bg-white/40 group-hover:bg-white/60"
                  }`}
                />
                
                {/* Active indicator with gradient */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-gray-100 to-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                {/* Subtle inner glow for active state */}
                {isActive && (
                  <div className="absolute inset-0.5 rounded-full bg-white/20 blur-sm" />
                )}
                
                {/* Progress indicator for active dot */}
                {isActive && isAutoPlaying && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white/30"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute top-6 lg:top-8 right-6 lg:right-8 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 lg:px-4 lg:py-2">
        <span className="text-white text-sm lg:text-base font-medium">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      {/* Project Title */}
      <div className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10">
        <h1 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold font-sora">
          {projectName} Branding
        </h1>
      </div>

    </div>
  )
}