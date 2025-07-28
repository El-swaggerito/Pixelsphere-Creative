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
    description: "A stylish café and co-working hub for freelancers and entrepreneurs. The name reflects hustle culture (\"grind\") and café vibes (\"drip\").",
    designDirection: "Trendy, youthful, and urban. Use bold fonts, coffee tones, and visual identity that merges productivity with lifestyle aesthetics.",
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    isStarred: true,
    isReversed: false,
    visualType: "App Interface",
    visualColor: "purple",
    onContactClick: scrollToContactForm
  },
  {
    title: "HOPE FOUNDATION",
    slug: "hope-foundation",
    category: "Web Development & Branding",
    timeTaken: "3 months",
    description: "A non-profit organization providing education and healthcare services to people with disabilities.",
    designDirection: "Clean, accessible layout with a human-centered design.",
    additionalInfo: "They partner with local communities to support sustainable development initiatives.",
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    isStarred: false,
    isReversed: true,
    visualType: "Website Design",
    visualColor: "green",
    onContactClick: scrollToContactForm
  },
  {
    title: "EDTECH LEARNING PLATFORM",
    slug: "edtech-learning-platform",
    category: "Web Design",
    timeTaken: "6 months",
    description: "A platform for self-paced and guided online learning tailored to students, professionals, and educators.",
    designDirection: "Engaging and motivational UI with vibrant tones (green), icons, and smooth UX.",
    additionalInfo: "Focus on usability, onboarding flows, and storytelling through student success and instructor expertise.",
    technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript"],
    isStarred: true,
    isReversed: false,
    visualType: "Learning Platform",
    visualColor: "purple",
    onContactClick: scrollToContactForm
  }
]