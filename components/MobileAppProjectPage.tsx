"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ChevronRight, Download } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageTransition from "@/components/PageTransition"
import AnimatedSection from "@/components/AnimatedSection"
import { Button } from "@/components/ui/button"
import type { MobileAppProject } from "@/data/mobile-app-projects"

interface MobileAppProjectPageProps {
  project: MobileAppProject
}

export default function MobileAppProjectPage({ project }: MobileAppProjectPageProps) {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <Header currentPage="portfolio" textColor="black" background="white" />

        <AnimatedSection>
          <section className="pt-32 pb-12 bg-gray-50 border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center text-sm text-gray-600 mb-8">
                <Link href="/" className="hover:text-orange-600">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <Link href="/portfolio" className="hover:text-orange-600">
                  Portfolio
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-gray-900">{project.title}</span>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="max-w-4xl">
                  <div className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
                    {project.category}
                  </div>
                  <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-sora">
                    {project.title}
                  </h1>
                  <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-gray-600">
                    {project.description.split("\n\n").map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base sm:text-lg"
                    >
                      <a href={project.storeUrl} target="_blank" rel="noopener noreferrer nofollow">
                        Live Preview / Download
                        <Download className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-gray-300 text-gray-900 hover:bg-gray-100 px-8 py-3 text-base sm:text-lg bg-transparent"
                    >
                      <Link href="/portfolio">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Portfolio
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                  <div className="w-full max-w-[320px] sm:max-w-[380px] rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
                    <div className="relative aspect-square">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 70vw, (max-width: 1024px) 320px, 380px"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
                <div>
                  <p className="text-orange-500 font-medium text-sm tracking-wide uppercase mb-3">
                    App Preview
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-sora">
                    Explore the {project.title} experience
                  </h2>
                </div>
                <a
                  href={project.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Open on Google Play
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot}
                    className="rounded-3xl border border-gray-200 bg-gray-50 p-4 sm:p-5 shadow-sm"
                  >
                    <div className="relative mx-auto w-full max-w-[320px] aspect-[9/19.5] overflow-hidden rounded-[2rem] bg-white shadow-inner">
                      <Image
                        src={screenshot}
                        alt={`${project.title} preview ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </div>
    </PageTransition>
  )
}
