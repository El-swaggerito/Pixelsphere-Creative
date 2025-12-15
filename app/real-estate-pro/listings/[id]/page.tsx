'use client'

import Image from 'next/image'
import PageTransition from '@/components/PageTransition'
import AnimatedSection from '@/components/AnimatedSection'
import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Navbar, Footer, CTASection } from '@/components/real-estate-pro/'

type Property = {
  id: string
  title: string
  image: string
  location: string
  price: string
  period?: string
  beds: number
  baths: number
  area: string
  description: string
  gallery: string[]
}

const PROPERTIES: Record<string, Property> = {
  '1': {
    id: '1',
    title: 'Comfortable Villa Green',
    image: '/images/realestatepro/list1.png',
    location: 'Southwestern Ontario, Ontario, Canada',
    price: '$ 5,800',
    period: '/Month',
    beds: 4,
    baths: 3,
    area: '122,280 sqft',
    description:
      'A modern villa with generous indoor-outdoor living, premium finishes and a bright open floor plan ideal for families.',
    gallery: [
      '/images/realestatepro/list1.png',
      '/images/realestatepro/list2.png',
      '/images/realestatepro/list3.png',
    ],
  },
  '2': {
    id: '2',
    title: 'Quality House For Sale',
    image: '/images/realestatepro/list2.png',
    location: 'Toronto, Ontario, Canada',
    price: '$ 820,000',
    beds: 3,
    baths: 2,
    area: '2,100 sqft',
    description:
      'Thoughtfully updated single-family home with spacious bedrooms, chef’s kitchen, and a sunlit backyard retreat.',
    gallery: [
      '/images/realestatepro/list2.png',
      '/images/realestatepro/list1.png',
      '/images/realestatepro/list3.png',
    ],
  },
  '3': {
    id: '3',
    title: 'Quality House For Sale',
    image: '/images/realestatepro/list3.png',
    location: 'Vancouver, British Columbia, Canada',
    price: '$ 1,150,000',
    beds: 4,
    baths: 3,
    area: '2,850 sqft',
    description:
      'Contemporary residence featuring panoramic windows, private deck, and refined interiors designed for modern living.',
    gallery: [
      '/images/realestatepro/list3.png',
      '/images/realestatepro/list2.png',
      '/images/realestatepro/list1.png',
    ],
  },
}

export default function ListingDetailPage() {
  const params = useParams<{ id: string }>()
  const router = useRouter()
  const shouldReduceMotion = useReducedMotion()
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const getAnimationProps = (baseProps: any) => {
    if (shouldReduceMotion || prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.2 },
      }
    }
    return baseProps
  }

  const property = params?.id ? PROPERTIES[params.id] : undefined

  useEffect(() => {
    if (!property) {
      router.push('/real-estate-pro/listings')
    }
  }, [property, router])

  if (!property) return null

  return (
    <PageTransition className="overflow-hidden">
      <div className="min-h-screen">
        <div className="relative min-h-[40vh]">
          <div className="absolute inset-0">
            <Image
              src="/images/realestatepro/cta.png"
              alt="Property detail hero background"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10">
            <Navbar
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              closeMobileMenu={closeMobileMenu}
            />
          </div>

          <AnimatedSection>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">{property.title}</h1>
              <p className="mt-2 text-white/85">{property.location}</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <section className="py-10 sm:py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-10">
                <div>
                  <div className="rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
                    <Image
                      src={property.image}
                      alt={property.title}
                      width={1200}
                      height={800}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {property.gallery.map((src) => (
                      <div key={src} className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
                        <Image src={src} alt={property.title} width={400} height={300} className="w-full h-28 sm:h-32 object-cover" />
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">{property.description}</p>
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5 p-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#EB6753] text-3xl font-bold">{property.price}</span>
                      {property.period && <span className="text-gray-500 text-sm">{property.period}</span>}
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-4 text-gray-700">
                      <div className="rounded-lg bg-gray-50 p-3 text-center">
                        <div className="text-xl font-semibold">{property.beds}</div>
                        <div className="text-xs text-gray-500">Beds</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3 text-center">
                        <div className="text-xl font-semibold">{property.baths}</div>
                        <div className="text-xs text-gray-500">Baths</div>
                      </div>
                      <div className="rounded-lg bg-gray-50 p-3 text-center">
                        <div className="text-sm font-semibold">{property.area}</div>
                        <div className="text-xs text-gray-500">Area</div>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <motion.a
                        href="/real-estate-pro/contact"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#EB6753] text-white font-semibold hover:bg-[#d65948] transition-colors"
                        {...getAnimationProps({ whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 }, transition: { duration: 0.2 } })}
                      >
                        Contact Agent
                      </motion.a>
                      <motion.a
                        href="/real-estate-pro/listings"
                        className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
                        {...getAnimationProps({ whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 }, transition: { duration: 0.2 } })}
                      >
                        Back to Listings
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <CTASection getAnimationProps={getAnimationProps} />
        <Footer />
      </div>
    </PageTransition>
  )
}
