import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Search, FileText, Link, BarChart, MapPin } from "lucide-react"

export default function SEOServicesPage() {
  const services = [
    {
      icon: Search,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine visibility.",
      features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "Technical Audits"],
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize individual pages to rank higher and earn more relevant traffic.",
      features: ["Keyword Optimization", "Content Optimization", "Meta Tags", "Internal Linking"],
    },
    {
      icon: Link,
      title: "Off-Page SEO",
      description: "Build authority and trust through strategic link building and external signals.",
      features: ["Link Building", "Brand Mentions", "Social Signals", "Authority Building"],
    },
    {
      icon: BarChart,
      title: "Content SEO",
      description: "Create and optimize content that ranks well and engages your audience.",
      features: ["Content Strategy", "Keyword Research", "Content Creation", "Content Optimization"],
    },
    {
      icon: MapPin,
      title: "Local SEO",
      description: "Optimize your online presence for local search results and map listings.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Content"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current SEO performance and identification of opportunities.",
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Create a customized SEO strategy based on your business goals and target audience.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute SEO improvements across technical, on-page, and off-page factors.",
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "Continuous monitoring and optimization to maintain and improve search rankings.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <HeroBackground>
          <Header currentPage="services" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">SEO Services</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Improve your search engine rankings and drive more organic traffic to your website.
            </p>
          </div>
        </HeroBackground>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="SEO SERVICES"
            title="Complete SEO Solutions"
            description="Comprehensive SEO services to improve your search visibility and drive qualified traffic."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-purple-600" />
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
            title="How We Improve Your SEO"
            description="Our data-driven approach ensures sustainable improvements in search rankings."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        title="Ready to Improve Your Search Rankings?"
        description="Let's help you get found by more customers through effective SEO strategies."
        buttonText="Start SEO Project"
        backgroundImage="/images/cta-bg.png"
      />

      <FinalCTA />
      <Footer />
    </div>
  )
}
