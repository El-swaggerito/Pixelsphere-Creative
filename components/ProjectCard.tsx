"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Eye } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import clsx from "clsx"

export interface ProjectProps {
  title: string
  slug: string
  category: string
  timeTaken: string
  description: string
  designDirection: string
  additionalInfo?: string
  technologies: string[]
  isStarred?: boolean
  isReversed?: boolean
  visualType: string
  visualColor: string
  image: string
  onContactClick: () => void
}

export default function ProjectCard({
  title,
  slug,
  category,
  timeTaken,
  description,
  designDirection,
  additionalInfo,
  technologies,
  isStarred = false,
  isReversed = false,
  visualType,
  visualColor,
  image,
  onContactClick,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [hoverImageLoaded, setHoverImageLoaded] = useState(false)
  const [hoverImageLoading, setHoverImageLoading] = useState(true)

  // Generate hover image path by adding '-hover' before the file extension
  const hoverImage = image.replace(/\.(png|jpg|jpeg|webp)$/i, '-hover.$1')

  // Preload hover image
  useEffect(() => {
    const img = new window.Image() as HTMLImageElement
    img.src = hoverImage
    img.onload = () => {
      setHoverImageLoaded(true)
      setHoverImageLoading(false)
    }
    img.onerror = () => {
      console.warn(`Failed to load hover image: ${hoverImage}`)
      setHoverImageLoaded(false)
      setHoverImageLoading(false)
    }
  }, [hoverImage])

  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={clsx({ "lg:order-2": isReversed })}>
        <div className="flex items-center mb-4">
          {isStarred ? (
            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Star className="h-5 w-5 text-orange-500 mr-2" />
            </motion.div>
          ) : (
            <motion.div
              className="w-3 h-3 bg-orange-500 rounded-full mr-2"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.3 }}
            />
          )}
          <span className="text-gray-900 font-semibold text-lg">{title}</span>
          <motion.div className="ml-auto" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href={`/work/${slug}`}>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium text-sm"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Project
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="mb-4">
          <span className="text-sm text-gray-600">Category • {category}</span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          <strong>Design Direction:</strong> {designDirection}
        </p>

        {additionalInfo && <p className="text-gray-600 mb-6 leading-relaxed">{additionalInfo}</p>}

        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-3">TECHNOLOGIES USED</div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-gray-100">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3"
            onClick={onContactClick}
          >
            BOOK A CALL
          </Button>
        </motion.div>
      </div>

      <motion.div
        className={clsx("relative", { "lg:order-1": isReversed })}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/work/${slug}`} className="block cursor-pointer">
          <div className="rounded-lg p-6 aspect-[4/3]">
            <div className="w-full h-full rounded-lg overflow-hidden relative">
              <motion.div
                className="w-full h-full relative"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {hoverImageLoading && isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10 animate-pulse">
                    <span className="text-gray-400">Loading preview...</span>
                  </div>
                )}
                <Image
                  src={isHovered && hoverImageLoaded ? hoverImage : image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain rounded-lg transition-all duration-500 ease-in-out"
                  priority={false}
                  style={{
                    filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)',
                  }}
                />
                {/* Optional: Add a subtle overlay to indicate it's clickable */}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <motion.div
                    className="opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg">
                      <Eye className="h-6 w-6 text-gray-800" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}