'use client'

import Image from 'next/image'
import { Navbar } from '@/components/beauty-hub/Navbar'
import { Footer } from '@/components/beauty-hub/Footer'
import '@/app/beauty-hub/beauty-hub.css'
import { BeautySerenitySection, BenefitsWellnessSection, BenefitsWellnessSectionTwo, CustomerTestimonialSection, HeritageSection } from '@/components/beauty-hub'

export default function BeautyHubAboutPage() {
  return (
    <div className="min-h-screen bg-[#4B0D20] beauty-hub-page" data-page="beauty-hub-about">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Welcome To Dang Beauty Where Self-Care Meets Radiance</h1>
          <div className="mt-6 rounded-md overflow-hidden">
            <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px]">
              <Image
                src="/images/beautyhub-project/aboutherobg.png"
                alt="Dang Beauty About Hero"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
          <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed">At Dang Beauty, We Blend Science And Nature To Empower Your Natural Beauty.</p>
        </div>
      </main>


      <BenefitsWellnessSection />
      <HeritageSection />
      <BeautySerenitySection />
      <CustomerTestimonialSection />
      <Footer />
    </div>
  )
}
