import { dripAndGrindProject } from './drip-and-grind'
import { hopeFoundationProject } from './hope-foundation'
import { edtechLearningPlatformProject } from './edtech-learning-platform'

export interface ProjectData {
  slug: string
  title: string
  category: string
  categoryColor: string
  client: string
  clientDesignation: string
  duration: string
  website: string
  featuredImage: string
  images: {
    showcase1: string
    showcase2: string
    showcase3: string
    showcase4: string | null  // Allow null for projects with only 3 images
  }
  briefDescription: string
  projectGoal: string
  productBranding: string
  userStatement: string
  problemList: string[]
  solutions: string[]
  clientFeedback: {
    quote: string
    client: string
    rating: number
  }
  technologies: string[]
  deliverables: string[]
  servicesProvided: string[]
  brandingLink?: string  // Optional branding link for projects that have one
}

export const projectsRegistry: Record<string, ProjectData> = {
  'drip-and-grind': dripAndGrindProject,
  'hope-foundation': hopeFoundationProject,
  'edtech-learning-platform': edtechLearningPlatformProject,
}

export const getProjectBySlug = (slug: string): ProjectData | null => {
  return projectsRegistry[slug] || null
}

export const getAllProjects = (): ProjectData[] => {
  return Object.values(projectsRegistry)
}
