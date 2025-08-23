import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/data/projects/index"
import { getBrandingImages } from "@/data/branding-images"
import ImageCarousel from "@/components/ImageCarousel"
import { Metadata } from "next"

interface BrandingPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BrandingPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found"
    }
  }

  return {
    title: `${project.title} - Branding Showcase | PixelSphere Creative`,
    description: `Explore the complete branding showcase for ${project.title}. View our comprehensive brand identity design, visual elements, and creative assets.`,
    openGraph: {
      title: `${project.title} Branding Showcase`,
      description: `Complete branding showcase for ${project.title}`,
      images: [project.featuredImage]
    }
  }
}

export default function BrandingPage({ params }: BrandingPageProps) {
  const project = getProjectBySlug(params.slug)
  const brandingImages = getBrandingImages(params.slug)
  
  if (!project || brandingImages.length === 0) {
    notFound()
  }

  return (
    <main className="w-full h-screen overflow-hidden bg-black">
      <ImageCarousel 
        images={brandingImages} 
        projectName={project.title}
      />
    </main>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  return [
    { slug: 'drip-and-grind' },
    { slug: 'edtech-learning-platform' },
    { slug: 'hope-foundation' }
  ]
}