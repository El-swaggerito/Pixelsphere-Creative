import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Monitor, FolderTree, MousePointer, TestTube } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function UXDesignStrategyPage() {
  const services = [
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "User-friendly interface designs that enhance the user experience.",
      features: ["Interface Design", "User Experience", "Responsive Design", "Design Systems"],
    },
    {
      icon: FolderTree,
      title: "Information Architecture",
      description: "Logical navigation structures for smooth and intuitive user journeys.",
      features: ["Site Mapping", "User Flows", "Content Structure", "Navigation Design"],
    },
    {
      icon: MousePointer,
      title: "Interaction Design",
      description: "Digital experiences that engage users through meaningful interactions.",
      features: ["Micro-interactions", "Animation", "Behavior Design", "Interactive Elements"],
    },
    {
      icon: TestTube,
      title: "Usability Testing",
      description: "Find and improve UX issues to uncover UI issues and improve results.",
      features: ["User Testing", "Heuristic Evaluation", "A/B Testing", "Analytics Integration"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description:
        "We analyze user needs, behaviors, and business requirements to inform our design strategy.",
    },
    {
      step: "02",
      title: "UX Strategy & Planning",
      description: "We develop a comprehensive UX strategy aligned with your business objectives.",
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "Our designers create wireframes, mockups, and interactive prototypes for testing.",
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "We test with real users and refine the design based on feedback and data.",
    },
  ]

  return (
    <PageTransition>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pt-24 sm:pt-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/isometric-grid-1.png')] bg-repeat opacity-20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <Header currentPage="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">UX Design & Strategy</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            User-centered design services that create intuitive, engaging, and effective digital experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="UX SERVICES"
            title="User Experience Solutions"
            description="From interface design to usability testing, we provide comprehensive UX services to enhance your digital products."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="OUR PROCESS"
            title="How We Design User Experiences"
            description="Our user-centered design process ensures digital products that are intuitive, engaging, and effective."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      <AnimatedSection>
      <CTASection
        title="Ready to Enhance User Experience?"
        description="Let's create digital experiences that delight your users and achieve your business goals."
        buttonText="Get Started"
        backgroundImage="/images/cta-bg.png"
      />
      </AnimatedSection>
      <AnimatedSection>
      <FinalCTA />
      </AnimatedSection>
      <AnimatedSection>
      <Footer />
      </AnimatedSection>
    </div>
    </PageTransition>
  )
}