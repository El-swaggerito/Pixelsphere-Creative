import { ProjectProps } from "@/components/ProjectCard"
import { getAllProjects } from "@/data/projects/index"

// Function to handle contact form scrolling (reused from work page)
const scrollToContactForm = () => {
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: "smooth" })
  } else {
    window.location.href = "/contact#contact-form"
  }
}

// Convert project data to ProjectCard format
const convertToProjectCard = (projectData: any): ProjectProps => ({
  title: projectData.title,
  slug: projectData.slug,
  category: projectData.category,
  timeTaken: projectData.duration,
  description: projectData.briefDescription.split('\n\n')[0], // Use first paragraph
  designDirection: projectData.productBranding.split('\n\n')[0], // Use first paragraph
  technologies: projectData.technologies,
  isStarred: projectData.slug === 'drip-and-grind' || projectData.slug === 'edtech-learning-platform',
  isReversed: projectData.slug === 'hope-foundation',
  visualType: projectData.category,
  visualColor: projectData.slug === 'drip-and-grind' ? 'purple' : projectData.slug === 'hope-foundation' ? 'green' : 'blue',
  image: projectData.featuredImage,
  onContactClick: scrollToContactForm
})

export const projects: ProjectProps[] = getAllProjects().map(convertToProjectCard)
