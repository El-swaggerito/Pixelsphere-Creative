import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, BarChart, PenTool, Palette, FileText } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function BrandingIdentityPage() {
  const services = [
    {
      icon: BarChart,
      title: "Brand Strategy",
      description: "Discover and position your brand for growth in your market.",
      features: ["Market Research", "Brand Positioning", "Competitive Analysis", "Target Audience Definition"],
    },
    {
      icon: PenTool,
      title: "Visual Assets & Identity",
      description: "Everything that visually defines your brand across all touchpoints.",
      features: ["Logo Design", "Color Palette", "Typography", "Visual Elements"],
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "A full visual identity system that tells your unique story.",
      features: ["Logo Design", "Brand Guidelines", "Visual Language", "Brand Applications"],
    },
    {
      icon: FileText,
      title: "Brand Story",
      description: "Crafting your brand's values, purpose, and personality effectively.",
      features: ["Brand Narrative", "Mission & Vision", "Value Proposition", "Brand Voice"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Research",
      description:
        "We analyze your market, competitors, and audience to understand your brand's position.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "We create a comprehensive brand strategy that aligns with your business goals.",
    },
    {
      step: "03",
      title: "Design & Creation",
      description: "Our designers develop visual elements that bring your brand identity to life.",
    },
    {
      step: "04",
      title: "Implementation & Guidelines",
      description: "We provide guidelines and assets to ensure consistent brand application.",
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <Header currentPage="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">Branding & Identity</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Strategic brand development services that create memorable identities and drive business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="BRANDING SERVICES"
            title="Complete Brand Solutions"
            description="From strategy to visual identity, we provide comprehensive branding services tailored to your business."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Create IDs based on service titles
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              
              return (
                <div key={index} id={serviceId} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
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
            title="How We Build Your Brand"
            description="Our proven process ensures your brand identity is strategic, memorable, and effective."
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
      </AnimatedSection>

      <AnimatedSection>
      <CTASection
        title="Ready to Build Your Brand?"
        description="Let's create a brand identity that resonates with your audience and drives business growth."
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
