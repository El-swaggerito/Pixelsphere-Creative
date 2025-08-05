import { ProjectProps } from "@/components/ProjectCard"

// Function to handle contact form scrolling (reused from work page)
const scrollToContactForm = () => {
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: "smooth" })
  } else {
    window.location.href = "/contact#contact-form"
  }
}

export const projects: ProjectProps[] = [
  {
    title: "DRIP AND GRIND",
    slug: "drip-and-grind",
    category: "Web Design",
    timeTaken: "6 months",
    description: "PixelSphere worked with Drip & Grind, a luxury dining brand, to create a digital experience that matches their upscale, modern aesthetic. The goal was to design a visually striking website that communicates elegance, encourages reservations, and mirrors the ambiance of the physical restaurant.",
    designDirection: "Trendy, youthful, and urban. Use bold fonts, coffee tones, and visual identity that merges productivity with lifestyle aesthetics.",
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    isStarred: true,
    isReversed: false,
    visualType: "App Interface",
    visualColor: "purple",
    image: "/images/drip&grind.png", // Add this line
    onContactClick: scrollToContactForm
  },
  {
    title: "HOPE FOUNDATION",
    slug: "hope-foundation",
    category: "Web Development & Branding",
    timeTaken: "3 months",
    description: "Hope Foundation, a non-profit dedicated to empowering underserved communities, needed a website that told their story while driving engagement and donations. PixelSphere designed and developed a clean, emotionally-driven platform to highlight their impact and encourage support.",
    designDirection: " Clean, accessible layout with a human-centered design. ",
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    isStarred: false,
    isReversed: true,
    visualType: "Website Design",
    visualColor: "green",
    image: "/images/hope.png", // Add this line
    onContactClick: scrollToContactForm
  },
  {
    title: "EDTECH LEARNING PLATFORM",
    slug: "edtech-learning-platform",
    category: "Web Design",
    timeTaken: "6 months",
    description: "A platform for self-paced and guided online learning tailored to students, professionals, and educators.",
    designDirection: "Engaging and motivational UI with vibrant tones (green), icons, and smooth UX. Focus on usability, onboarding flows, and storytelling through student success and instructor expertise.",
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    isStarred: true,
    isReversed: false,
    visualType: "Learning Platform",
    visualColor: "purple",
    image: "/images/edtech.png", // Add this line
    onContactClick: scrollToContactForm
  }
]