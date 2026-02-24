import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Search, TrendingUp, Map, FileCode } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function SEOOptimizationPage() {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Identifying high-value search terms to target the right audience.",
      features: ["Competitor Analysis", "Search Volume Analysis", "Long-tail Strategy", "Content Gap Analysis"],
    },
    {
      icon: FileCode,
      title: "On-Page Optimization",
      description: "Optimizing your website's structure and content for search engines.",
      features: ["Meta Tags Optimization", "Content Optimization", "Internal Linking", "Schema Markup"],
    },
    {
      icon: TrendingUp,
      title: "Technical SEO",
      description: "Improving site performance and crawlability for better rankings.",
      features: ["Site Speed Optimization", "Mobile Friendliness", "XML Sitemaps", "Core Web Vitals"],
    },
    {
      icon: Map,
      title: "Local SEO",
      description: "Boosting visibility for local searches and Google Maps rankings.",
      features: ["Google Business Profile", "Local Citations", "Review Management", "Local Content"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Analysis",
      description:
        "We conduct a comprehensive audit of your website to identify issues and opportunities.",
    },
    {
      step: "02",
      title: "Strategy Formulation",
      description: "We develop a customized SEO strategy based on your goals and competitive landscape.",
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our team implements on-page, off-page, and technical optimizations.",
    },
    {
      step: "04",
      title: "Monitoring & Reporting",
      description: "We track rankings, traffic, and conversions, providing regular reports on progress.",
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <Header currentPage="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">SEO Optimization</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Data-driven SEO strategies that increase visibility, drive organic traffic, and convert visitors into customers.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="SEO SERVICES"
            title="Complete Search Solutions"
            description="From technical audits to content optimization, we provide end-to-end SEO services to improve your rankings."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Create IDs based on service titles
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              
              return (
                <div key={index} id={serviceId} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-yellow-600" />
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
            title="How We Improve Your Rankings"
            description="Our proven SEO methodology ensures sustainable growth and long-term results for your business."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        title="Ready to Rank Higher?"
        description="Let's optimize your website to reach more customers and grow your business organically."
        buttonText="Get Your Free Audit"
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
