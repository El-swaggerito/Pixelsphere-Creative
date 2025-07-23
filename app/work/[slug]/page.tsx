import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import WorkCTA from "@/components/work-cta"

// Mock work data - you can replace this with actual data fetching
const getWorkProject = (slug: string) => {
  const workProjects = {
    "drip-and-grind": {
      title: "Drip and Grind",
      category: "Web Design & Branding",
      categoryColor: "bg-purple-100 text-purple-800",
      client: "Drip and Grind",
      clientDesignation: "100% Editable Slides",
      duration: "Jan 2024 - July 2024",
      website: "Creative Branding",
      featuredImage: "/images/mobile-designs.png",
      briefDescription: `Drip and Grind is a sophisticated coffee shop and co-working space tailored for freelancers, entrepreneurs, and coffee aficionados. They sought a comprehensive digital identity that mirrors their distinctive fusion of productivity and leisure.

The mission was to forge a unified brand experience appealing to both coffee enthusiasts and professionals in search of a conducive workspace. We devised a holistic branding strategy encapsulating the essence of hustle culture while preserving the inviting ambiance of a premium coffee establishment.

Our strategy centered on crafting a unique visual identity conveying quality, productivity, and community through contemporary design principles and strategic brand positioning.`,
      projectGoal: `Our goal was to create a distinctive brand identity and digital presence that would differentiate Drip and Grind from traditional coffee shops. We aimed to establish a strong visual identity that communicates quality, productivity, and community.

The project required developing a complete brand ecosystem including logo design, color palette, typography, packaging design, and a responsive website that serves both as an information hub and a booking platform for co-working spaces. We focused on creating an experience that seamlessly blends the comfort of a coffee shop with the functionality of a modern workspace.`,
      productBranding: `The branding approach focused on creating a modern, minimalist aesthetic that balances professionalism with warmth. We developed a distinctive logo that combines coffee elements with productivity symbols, creating a unique visual language that speaks to our target audience.

Our color palette features rich purples and energetic oranges, representing both the premium coffee culture and the dynamic energy of entrepreneurship. The typography choices reflect modern professionalism while maintaining approachability and readability across all touchpoints. Every design element was carefully crafted to reinforce the brand's core values of quality, community, and productivity.`,
      userStatement: `"I needed a space where I could work productively while enjoying great coffee. Most coffee shops are either too noisy for work or too sterile to feel welcoming. I wanted a place that understood the needs of modern professionals who work remotely."

This insight drove our entire design process, helping us create spaces and digital experiences that cater specifically to the remote work community while maintaining the social aspects that make coffee shops special. We conducted extensive user research to understand the pain points of remote workers and designed solutions that address these specific needs.`,
      problemList: [
        "Lack of dedicated co-working spaces in coffee shops",
        "Inconsistent WiFi and power outlet availability",
        "Noise levels not conducive to professional calls",
        "Limited booking system for guaranteed workspace",
        "Weak brand identity in a saturated market",
        "No clear value proposition for remote workers",
        "Outdated digital presence and booking system",
      ],
      solutions: [
        "Designed a user-friendly booking system for workspace reservations",
        "Created dedicated quiet zones with professional amenities",
        "Developed a strong brand identity that appeals to remote workers",
        "Implemented a comprehensive digital strategy across all platforms",
        "Designed flexible workspace layouts for different work styles",
        "Created a loyalty program that rewards regular co-working members",
        "Established clear brand guidelines for consistent experience",
        "Developed a mobile app for easy booking and community features",
      ],
      clientFeedback: {
        quote: `"Great Designer, doing great work and is very flexible with change. A positive programmer and was working via ZOOM designer is definitely well qualified for the job."`,
        client: "Sarah Johnson, Founder of Drip and Grind",
        rating: 5,
      },
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "Adobe Creative Suite"],
      deliverables: [
        "Complete Brand Identity Package",
        "Responsive Website Design & Development",
        "Mobile Application Design",
        "Packaging and Merchandise Design",
        "Social Media Templates",
        "Brand Guidelines Document",
      ],
      servicesProvided: ["UI/UX Design", "Webflow Development", "Product Marketing", "Website Content Writing"],
    },
    "hope-foundation": {
      title: "Hope Foundation",
      category: "Web Development & Branding",
      categoryColor: "bg-green-100 text-green-800",
      client: "Hope Foundation",
      clientDesignation: "Non-Profit Organization",
      duration: "3 months",
      website: "Non-Profit Organization",
      featuredImage: "/images/website-mockups.png",
      briefDescription: `Hope Foundation is a non-profit organization dedicated to providing education and healthcare services to people with disabilities. They needed a comprehensive digital presence that would effectively communicate their mission and facilitate community engagement.

The challenge was to create an accessible, user-friendly website that serves multiple stakeholders including beneficiaries, donors, volunteers, and community partners. We developed a clean, human-centered design that prioritizes accessibility and clear communication of the organization's impact.

Our approach focused on storytelling through compelling visuals and testimonials, making it easy for visitors to understand the foundation's work and find ways to get involved or contribute to their cause.`,
      projectGoal: `Our primary goal was to create a digital platform that would increase Hope Foundation's visibility and impact in the community. We aimed to design a website that not only informs but also inspires action and facilitates meaningful connections between the organization and its supporters.

The project required developing a comprehensive content strategy, implementing accessibility best practices, and creating intuitive user journeys for different types of visitors. We focused on building trust through transparent communication about the foundation's work, impact metrics, and financial accountability.`,
      productBranding: `The branding approach emphasized hope, compassion, and empowerment through a warm, approachable visual identity. We developed a logo that symbolizes growth and community support, using colors that convey trust, hope, and accessibility.

Our design system prioritizes readability and accessibility, ensuring that all users, including those with disabilities, can easily navigate and interact with the content. Every visual element was chosen to reinforce the foundation's commitment to inclusivity and human dignity.`,
      userStatement: `"As someone with a disability, I often struggle to find organizations that truly understand our needs and provide accessible ways to engage with their services. I needed a platform that not only offers help but also treats us with dignity and respect."

This feedback shaped our entire approach to the website design, ensuring that accessibility wasn't an afterthought but a core principle guiding every design decision. We conducted extensive user testing with people with various disabilities to ensure the platform truly serves its intended audience.`,
      problemList: [
        "Limited online presence and visibility",
        "Lack of accessible website design",
        "Difficulty in communicating impact to donors",
        "No centralized platform for volunteer coordination",
        "Outdated donation processing system",
        "Poor mobile experience for users",
        "Limited storytelling and testimonial features",
      ],
      solutions: [
        "Created a fully accessible website following WCAG guidelines",
        "Developed compelling storytelling sections with impact metrics",
        "Implemented secure, user-friendly donation processing",
        "Built a volunteer portal with easy registration and coordination",
        "Designed responsive layouts optimized for all devices",
        "Created a content management system for easy updates",
        "Established clear navigation and information architecture",
        "Integrated social media and newsletter signup features",
      ],
      clientFeedback: {
        quote: `"The new website has transformed how we connect with our community. We've seen a 300% increase in online donations and volunteer applications since launch."`,
        client: "Maria Rodriguez, Executive Director of Hope Foundation",
        rating: 5,
      },
      technologies: ["WordPress", "PHP", "HTML5", "CSS3", "JavaScript", "Accessibility Tools"],
      deliverables: [
        "Accessible Website Design & Development",
        "Content Management System",
        "Donation Processing Integration",
        "Volunteer Portal",
        "Brand Guidelines",
        "SEO Optimization",
      ],
      servicesProvided: ["Web Development", "Branding", "SEO Optimization"],
    },
    "edtech-learning-platform": {
      title: "EdTech Learning Platform",
      category: "Web Design & Development",
      categoryColor: "bg-blue-100 text-blue-800",
      client: "EduTech Solutions",
      clientDesignation: "Educational Technology",
      duration: "6 months",
      website: "Educational Technology",
      featuredImage: "/images/web-design-collection.png",
      briefDescription: `EduTech Solutions needed a comprehensive learning management system that would serve students, educators, and administrators across multiple educational institutions. The platform required sophisticated functionality while maintaining an intuitive, engaging user experience.

The challenge was to create a scalable platform that could handle diverse learning styles, multiple content formats, and complex user hierarchies. We developed a modern, responsive platform that makes online learning accessible and engaging for users of all technical skill levels.

Our approach focused on creating seamless user journeys, implementing gamification elements, and ensuring the platform could adapt to different educational methodologies and institutional requirements.`,
      projectGoal: `Our goal was to revolutionize online education by creating a platform that combines the best aspects of traditional classroom learning with the flexibility and accessibility of digital education. We aimed to build a system that would increase student engagement and improve learning outcomes.

The project required developing advanced features like real-time collaboration tools, adaptive learning algorithms, comprehensive analytics, and multi-media content support. We focused on creating an ecosystem that supports both self-paced learning and instructor-led courses.`,
      productBranding: `The branding strategy emphasized innovation, accessibility, and academic excellence through a modern, professional visual identity. We used vibrant colors and dynamic design elements to create an energetic, motivational atmosphere that encourages learning and exploration.

Our design system balances professionalism with approachability, ensuring that the platform feels both credible and welcoming to users of all ages and backgrounds. Every interface element was designed to reduce cognitive load and enhance the learning experience.`,
      userStatement: `"As an adult learner returning to education, I needed a platform that could accommodate my busy schedule while providing the same quality of education as traditional classroom settings. I wanted something that was intuitive to use and could adapt to my learning pace."

This insight guided our development of flexible learning paths, mobile-optimized interfaces, and comprehensive progress tracking features. We ensured that the platform serves both traditional students and working professionals seeking to advance their skills.`,
      problemList: [
        "Fragmented learning management systems",
        "Poor mobile learning experiences",
        "Limited collaboration tools for remote learning",
        "Lack of personalized learning paths",
        "Insufficient progress tracking and analytics",
        "Complex user interfaces deterring engagement",
        "Limited multimedia content support",
      ],
      solutions: [
        "Developed a unified, comprehensive learning management system",
        "Created responsive design optimized for mobile learning",
        "Implemented real-time collaboration and communication tools",
        "Built adaptive learning algorithms for personalized experiences",
        "Designed comprehensive analytics dashboard for all user types",
        "Created intuitive, user-friendly interfaces with minimal learning curve",
        "Integrated support for various multimedia content formats",
        "Established gamification elements to increase engagement",
      ],
      clientFeedback: {
        quote: `"This platform has completely transformed our online education offerings. Student engagement is up 250% and completion rates have improved dramatically."`,
        client: "Dr. James Wilson, Chief Technology Officer at EduTech Solutions",
        rating: 5,
      },
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Machine Learning APIs"],
      deliverables: [
        "Complete Learning Management System",
        "Mobile Applications (iOS & Android)",
        "Admin Dashboard",
        "Analytics and Reporting Tools",
        "API Documentation",
        "User Training Materials",
      ],
      servicesProvided: ["Web Design", "Web Development", "Database Management"],
    },
  }

  return workProjects[slug as keyof typeof workProjects] || workProjects["drip-and-grind"]
}

export default function WorkSinglePage({ params }: { params: { slug: string } }) {
  const project = getWorkProject(params.slug)

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="work" textColor="black" />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/work" className="hover:text-orange-600">
              Work
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900">{project.title}</span>
          </div>
        </div>
      </section>

      {/* Project Hero */}
      <section className="pt-8 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Project Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4">{project.title}</h1>
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-600">Drip and Grind - RALPH EDWARDS</h2>
          </div>

          {/* Hero Design Showcase - Isometric Grid Image */}
          <div className="relative mb-16">
            <div className="w-full max-w-6xl mx-auto">
              <Image
                src="/images/isometric-grid-1.png"
                alt="Isometric design showcase grid"
                width={1200}
                height={600}
                className="w-full h-auto"
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
                    {project.servicesProvided?.map((service, index) => (
                      <li key={index} className="text-gray-900 font-medium">
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Project Duration</div>
                  <div className="text-gray-900 font-medium">{project.duration}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Client</div>
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
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-medium">
                  Launch Project - Live Preview
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 px-8 py-3 text-lg font-medium bg-transparent hover:bg-orange-50"
                >
                  View Case Study On Behance
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Showcase 2 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src="/images/isometric-grid-2.png"
              alt="Isometric design showcase grid"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Project Goal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Goal</h2>
          <div className="prose prose-lg text-gray-700">
            {project.projectGoal.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Product Branding */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Branding</h2>
          <div className="prose prose-lg text-gray-700">
            {project.productBranding.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase 3 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src="/images/isometric-grid-3.png"
              alt="Isometric design showcase grid"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* User Statement & Problem List */}
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

      {/* Solutions */}
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

      {/* Final Design Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            <Image
              src="/images/isometric-grid-4.png"
              alt="Final isometric design showcase grid"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Client Feedback</h2>
          <Card className="p-12 bg-gray-50 border-none shadow-lg">
            <CardContent className="p-0">
              <div className="flex justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 mb-8 italic leading-relaxed">
                "{project.clientFeedback.quote}"
              </blockquote>
              <div className="text-gray-900 font-semibold text-lg">{project.clientFeedback.client}</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <WorkCTA />
      <FinalCTA />
      <Footer />
    </div>
  )
}
