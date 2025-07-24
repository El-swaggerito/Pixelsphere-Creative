import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Globe, Smartphone, Zap, Shield } from "lucide-react"

export default function WebsiteServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Website Design",
      description: "Custom website designs that reflect your brand identity and engage your audience.",
      features: ["Responsive Design", "User-Centered Approach", "Brand Integration", "Modern Aesthetics"],
    },
    {
      icon: Smartphone,
      title: "Website Development",
      description: "Professional web development using the latest technologies and best practices.",
      features: ["Modern Frameworks", "SEO Optimized", "Fast Loading", "Cross-Browser Compatible"],
    },
    {
      icon: Zap,
      title: "Mock Ups",
      description: "Detailed mockups and prototypes to visualize your website before development.",
      features: ["Interactive Prototypes", "Visual Mockups", "User Flow Design", "Feedback Integration"],
    },
    {
      icon: Shield,
      title: "Prototyping",
      description: "Interactive prototypes that help test and refine user experiences.",
      features: ["Clickable Prototypes", "User Testing", "Iterative Design", "Stakeholder Reviews"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We analyze your requirements, target audience, and business goals to create a comprehensive strategy.",
    },
    {
      step: "02",
      title: "Design & Wireframing",
      description: "Our designers create wireframes and visual designs that align with your brand identity.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your website using modern technologies and conduct thorough testing across devices.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing support to ensure optimal performance.",
    },
  ]

  return (
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Website Services</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professional website design and development services that drive results and enhance your online presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="WEBSITE SERVICES"
            title="Complete Web Solutions"
            description="From design to development, we provide comprehensive website services tailored to your needs."
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="OUR PROCESS"
            title="How We Build Your Website"
            description="Our proven process ensures your website is delivered on time and exceeds expectations."
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

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Website?"
        description="Let's create a website that drives results for your business."
        buttonText="Get Started"
        backgroundImage="/images/cta-bg.png"
      />

      <FinalCTA />
      <Footer />
    </div>
  )
}
