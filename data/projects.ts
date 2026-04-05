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
  isStarred: projectData.slug === 'drip-and-grind' || projectData.slug === 'edtech-learning-platform' || projectData.slug === 'chopify',
  isReversed: projectData.slug === 'hope-foundation' || projectData.slug === 'chopify' || projectData.slug === 'beauty-hub',
  visualType: projectData.category,
  visualColor: projectData.slug === 'drip-and-grind' ? 'purple' : 
               projectData.slug === 'hope-foundation' ? 'green' : 
               projectData.slug === 'chopify' ? 'pink' : 
               projectData.slug === 'real-estate-pro' ? 'blue' :
               projectData.slug === 'beauty-hub' ? 'pink' :
               projectData.slug === 'african-food-store' ? 'green' : 'blue',
  image: projectData.featuredImage,
  onContactClick: scrollToContactForm
})

const mobileApplicationProjects: ProjectProps[] = [
  {
    title: "Revva",
    slug: "revva",
    category: "Mobile Application",
    timeTaken: "Mobile Product Design",
    description:
      "Revva helps creators can manage exclusive content with their subscribers. Subscribe can gain access to their favorite creators discover new creators and enjoy their exclusive content. Content creators can showcase their content using audio, text and/or visual formats.",
    designDirection:
      "A creator-first mobile experience designed for premium content discovery, subscriber engagement, and flexible multimedia publishing.",
    technologies: ["Mobile Application", "Creator Platform", "Subscription Experience"],
    visualType: "Mobile Application",
    visualColor: "purple",
    image: "/images/revva card.jpeg",
    hoverImage: null,
    detailHref: "/portfolio/revva",
    detailButtonText: "View Project",
    onContactClick: scrollToContactForm,
  },
  {
    title: "aptLearn",
    slug: "apt-learn",
    category: "Mobile Application",
    timeTaken: "Mobile Learning Platform",
    description:
      "Online learning solution created for engineers by engineers. With a mission to improve lives through learning, aptLearn is an online learning platform that helps learners gain on-demand tech skills they need to compete in today's economy and acquire professional certificates at a fraction of the cost and time.",
    designDirection:
      "A focused learning experience built to make technical education accessible, practical, and affordable for modern learners.",
    technologies: ["Mobile Application", "EdTech", "On-Demand Learning"],
    visualType: "Mobile Application",
    visualColor: "blue",
    isReversed: true,
    image: "/images/apt learn card.jpeg",
    hoverImage: null,
    detailHref: "/portfolio/apt-learn",
    detailButtonText: "View Project",
    onContactClick: scrollToContactForm,
  },
  {
    title: "Echo Vaults",
    slug: "echo-vaults",
    category: "Mobile Application",
    timeTaken: "Offline-First Mobile App",
    description:
      "What happens if something happens to you?\n\nEchoVaults is a secure, offline-first mobile app that helps you prepare for unexpected loss, disappearance, death, or emergency.\n\nIt ensures the people you trust most can access the guidance, words, or information they need to continue fostering your interests and legacy — at the right time, not sooner.",
    designDirection:
      "A privacy-centered mobile experience built around trust, legacy planning, and carefully timed access to sensitive information.",
    technologies: ["Mobile Application", "Offline-First", "Security-Focused UX"],
    visualType: "Mobile Application",
    visualColor: "green",
    image: "/images/echo vaults card.jpeg",
    hoverImage: null,
    detailHref: "/portfolio/echo-vaults",
    detailButtonText: "View Project",
    onContactClick: scrollToContactForm,
  },
]

export const projects: ProjectProps[] = [...getAllProjects().map(convertToProjectCard), ...mobileApplicationProjects]
