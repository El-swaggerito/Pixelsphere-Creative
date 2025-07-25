import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Users, Layout, MousePointer, Layers, TestTube } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function UIUXServicesPage() {
  const services = [
    {
      icon: Users,
      title: "User Research",
      description: "Deep insights into user behavior, needs, and motivations to inform design decisions.",
      features: ["User Interviews", "Surveys & Analytics", "Persona Development", "Journey Mapping"],
    },
    {
      icon: Layout,
      title: "Information Architecture",
      description: "Organize and structure content for optimal user experience and navigation.",
      features: ["Site Mapping", "Content Strategy", "Navigation Design", "Information Hierarchy"],
    },
    {
      icon: MousePointer,
      title: "Interaction Design",
      description: "Create intuitive and engaging interactions that delight users.",
      features: ["Micro-interactions", "Animation Design", "Touch Interactions", "Responsive Behavior"],
    },
    {
      icon: Layers,
      title: "Prototyping",
      description: "Interactive prototypes that bring your ideas to life before development.",
      features: ["Low-fi Wireframes", "High-fi Prototypes", "Interactive Demos", "User Flow Testing"],
    },
    {
      icon: TestTube,
      title: "Usability Testing",
      description: "Validate design decisions through comprehensive user testing and feedback.",
      features: ["A/B Testing", "User Testing Sessions", "Heuristic Evaluation", "Performance Analysis"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understand your users, business goals, and technical constraints through comprehensive research.",
    },
    {
      step: "02",
      title: "Design & Wireframing",
      description: "Create wireframes and design systems that solve user problems and meet business objectives.",
    },
    {
      step: "03",
      title: "Prototyping & Testing",
      description: "Build interactive prototypes and conduct user testing to validate design decisions.",
    },
    {
      step: "04",
      title: "Implementation Support",
      description: "Work closely with developers to ensure the final product matches the design vision.",
    },
  ]

  return (
    <PageTransition>
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-24 sm:pt-0">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/isometric-grid-1.png')] bg-repeat opacity-20"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <Header currentPage="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">UI/UX Design</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Create exceptional user experiences that drive engagement and achieve your business goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="UI/UX SERVICES"
            title="User-Centered Design Solutions"
            description="We design digital experiences that are both beautiful and functional, putting users at the center of everything we do."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
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
            title="Design Process That Works"
            description="Our user-centered design process ensures we create solutions that truly meet user needs."
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
        title="Ready to Improve Your User Experience?"
        description="Let's create digital experiences that your users will love and remember."
        buttonText="Start Your UX Project"
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
