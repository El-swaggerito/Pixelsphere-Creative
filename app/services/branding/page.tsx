import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Search, Eye, Palette, BookOpen, Target } from "lucide-react"

export default function BrandingServicesPage() {
  const services = [
    {
      icon: Search,
      title: "Research & Strategy",
      description: "In-depth market research and strategic planning to position your brand effectively.",
      features: ["Market Analysis", "Competitor Research", "Brand Positioning", "Strategic Planning"],
    },
    {
      icon: Eye,
      title: "Visual Identity",
      description: "Create a cohesive visual identity that represents your brand across all touchpoints.",
      features: ["Logo Design", "Color Palette", "Typography", "Visual Guidelines"],
    },
    {
      icon: Palette,
      title: "Visual Assets",
      description: "Comprehensive visual assets that maintain consistency across your brand.",
      features: ["Marketing Materials", "Digital Assets", "Print Collateral", "Brand Templates"],
    },
    {
      icon: BookOpen,
      title: "Brand Identity",
      description: "Develop a complete brand identity that resonates with your target audience.",
      features: ["Brand Voice", "Messaging Framework", "Brand Personality", "Value Proposition"],
    },
    {
      icon: Target,
      title: "Brand Story",
      description: "Craft compelling brand narratives that connect emotionally with your audience.",
      features: ["Brand Narrative", "Content Strategy", "Storytelling", "Brand Messaging"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Brand Discovery",
      description: "We dive deep into your business, values, and target audience to understand your brand essence.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a comprehensive brand strategy that aligns with your business goals and market position.",
    },
    {
      step: "03",
      title: "Visual Creation",
      description: "Design your visual identity including logo, colors, typography, and brand guidelines.",
    },
    {
      step: "04",
      title: "Implementation",
      description: "Apply your new brand across all touchpoints and provide guidelines for consistent usage.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <HeroBackground>
          <Header currentPage="services" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Branding Services</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Build a powerful brand identity that resonates with your audience and drives business growth.
            </p>
          </div>
        </HeroBackground>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="BRANDING SERVICES"
            title="Complete Brand Solutions"
            description="From strategy to execution, we help you build a brand that stands out in the marketplace."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-orange-600" />
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="OUR PROCESS"
            title="How We Build Your Brand"
            description="Our systematic approach ensures your brand is authentic, memorable, and effective."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        title="Ready to Build Your Brand?"
        description="Let's create a brand identity that sets you apart from the competition."
        buttonText="Start Your Brand Journey"
        backgroundImage="/images/cta-bg.png"
      />

      <FinalCTA />
      <Footer />
    </div>
  )
}
