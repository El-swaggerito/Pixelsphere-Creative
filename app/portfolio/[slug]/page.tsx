import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import WorkCTA from "@/components/work-cta"
import AnimatedSection from "@/components/AnimatedSection"
import { getProjectBySlug, type ProjectData } from "@/data/projects/index"
import { notFound } from "next/navigation"

interface WorkSinglePageProps {
  params: { slug: string }
}

export default function WorkSinglePage({ params }: WorkSinglePageProps) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }

  // Define project preview routes
  const getProjectPreviewRoute = (slug: string) => {
    const routes: { [key: string]: string } = {
      'hope-foundation': '/hope-foundation',
      'drip-and-grind': '/drip-grind',
      'edtech-learning-platform': '/edtech-platform'
    }
    return routes[slug] || '#'
  }

  const hasLivePreview = (slug: string) => {
    return ['hope-foundation', 'drip-and-grind', 'edtech-learning-platform'].includes(slug)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="portfolio" textColor="black" background="white" />

      {/* Breadcrumb */}
      <AnimatedSection>
        <section className="py-4 bg-gray-50 border-b pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm text-gray-600">
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
          </div>
        </section>
      </AnimatedSection>

      {/* Project Hero */}
      <AnimatedSection>
        <section className="pt-8 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Project Title */}
            <div className="text-center mb-16">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-gray-600">
                {project.slug === 'hope-foundation' ? 'Changing Lives One Community at a Time' : 
                 project.slug === 'edtech-learning-platform' ? 'Unlock Your Potential Through Learning' : 
                 project.category}
              </h2>
            </div>

            {/* Hero Design Showcase */}
            <div className="relative mb-16">
              <div className="w-full max-w-6xl mx-auto">
                <Image
                  src={project.images.showcase1}
                  alt={`${project.title} main showcase`}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Project Details & Brief Description */}
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Left Sidebar - Project Details */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Services I Provide</div>
                    <ul className="list-disc pl-4">
                      {project.servicesProvided.map((service, index) => (
                        <li key={index} className="text-gray-900 font-medium">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Project Title</div>
                    <div className="text-gray-900 font-medium">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Client Designation</div>
                    <div className="text-gray-900 font-medium">{project.clientDesignation}</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Brief Description */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Client/Project Brief Description</h2>
                <div className="prose prose-lg text-gray-700 mb-8">
                  {project.briefDescription.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-6 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  {/* Live Preview Button - Updated Logic */}
                  {hasLivePreview(project.slug) ? (
                    <Button 
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium"
                      asChild
                    >
                      <a href={getProjectPreviewRoute(project.slug)} rel="noopener noreferrer nofollow"
                        target="_blank">
                        Launch Project - Live Preview
                      </a>
                    </Button>
                  ) : (
                    <Button className="bg-gray-400 cursor-not-allowed text-white px-8 py-3 text-lg font-medium" disabled>
                      Preview Coming Soon
                    </Button>
                  )}
                  
                  {project.brandingLink ? (
                    <Button
                      variant="outline"
                      className="border-orange-500 text-orange-500 px-8 py-3 text-lg font-medium bg-transparent hover:bg-orange-50"
                      asChild
                    >
                      <a
                        href={project.brandingLink}
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                      >
                        View Branding
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Design Showcase 2 */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto">
              <Image
                src={project.images.showcase2}
                alt={`${project.title} design showcase 2`}
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Project Goal */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-sora">Project Goal</h2>
            <div className="prose prose-lg text-gray-700">
              {project.projectGoal.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Product Branding */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-sora">Product Branding</h2>
            <div className="prose prose-lg text-gray-700">
              {project.productBranding.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Design Showcase 3 */}
      <AnimatedSection>
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto">
              <Image
                src={project.images.showcase3}
                alt={`${project.title} design showcase 3`}
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* User Statement & Problem List */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* User Statement */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="text-4xl mr-3">👤</span>
                  User Statement
                </h2>
                <div className="prose prose-lg text-gray-700">
                  {project.userStatement.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-6 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Problem List */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="text-4xl mr-3">⚠️</span>
                  Problem List
                </h2>
                <ul className="space-y-4">
                  {project.problemList.map((problem, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 text-lg leading-relaxed">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Solutions */}
      <AnimatedSection>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <span className="text-4xl mr-3 text-green-500">✅</span>
              Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-5 h-5 bg-orange-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg leading-relaxed">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final Design Showcase - Only show if showcase4 exists */}
      {project.images.showcase4 && (
        <AnimatedSection>
          <section>
            <div className="text-center">
                <Image
                  src={project.images.showcase4}
                  alt={`Final ${project.title} design showcase`}
                  width={1200}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
          </section>
        </AnimatedSection>
      )}

      <AnimatedSection>
        <WorkCTA />
      </AnimatedSection>
      <AnimatedSection>
        <FinalCTA />
      </AnimatedSection>
      <AnimatedSection>
        <Footer />
      </AnimatedSection>
    </div>
  )
}
