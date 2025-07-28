"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Eye } from "lucide-react"
import { motion } from "framer-motion"

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
  onContactClick,
}: ProjectProps) {
  return (
    <motion.div
      className={`grid lg:grid-cols-2 gap-12 items-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className={isReversed ? "lg:order-2" : ""}>
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
                View Details
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="mb-4">
          <span className="text-sm text-gray-600">Category • {category}</span>
          <span className="text-sm text-gray-600 ml-8">Time Taken • {timeTaken}</span>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <p className="text-gray-600 mb-6 leading-relaxed">
          <strong>Design Direction:</strong> {designDirection}
        </p>

        {additionalInfo && <p className="text-gray-600 mb-6 leading-relaxed">{additionalInfo}</p>}

        <div className="mb-6">
          <div className="text-sm text-gray-600 mb-3">TECHNOLOGIES USED</div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100">
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
        className={`relative ${isReversed ? "lg:order-1" : ""}`} 
        whileHover={{ scale: 1.02, y: -5 }} 
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
          <div className="bg-white rounded-lg p-6 aspect-[4/3]">
            <div className={`w-full h-full bg-${visualColor}-100 rounded-lg flex items-center justify-center`}>
              <div className="text-center">
                <motion.div
                  className={`w-16 h-16 bg-${visualColor}-600 rounded-lg mx-auto mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={`text-${visualColor}-600 font-semibold`}>{visualType}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}