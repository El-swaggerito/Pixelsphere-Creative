import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, MessageCircle, Globe, Eye } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function ConsultationAuditPage() {
  const services = [
    {
      icon: MessageCircle,
      title: "Business Consultation",
      description: "Strategic guidance to help your business grow and succeed in the digital landscape.",
      features: ["Digital Strategy", "Business Analysis", "Growth Planning", "Technology Consulting"],
    },
    {
      icon: Globe,
      title: "Website Audit",
      description: "Comprehensive analysis of your website's performance, SEO, and user experience.",
      features: ["Performance Analysis", "SEO Audit", "UX Review", "Technical Assessment"],
    },
    {
      icon: Eye,
      title: "Brand Audit",
      description: "Evaluate your brand's effectiveness and identify opportunities for improvement.",
      features: ["Brand Analysis", "Market Position", "Competitive Review", "Improvement Strategy"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We conduct a thorough analysis of your current situation and identify key areas for improvement.",
    },
    {
      step: "02",
      title: "Detailed Analysis",
      description: "Deep dive into specific areas with comprehensive audits and data-driven insights.",
    },
    {
      step: "03",
      title: "Strategic Recommendations",
      description: "Provide actionable recommendations and strategic guidance based on our findings.",
    },
    {
      step: "04",
      title: "Implementation Support",
      description: "Ongoing support to help you implement recommendations and achieve your goals.",
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Consultation & Audit</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Expert guidance and comprehensive audits to optimize your digital presence and business strategy.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="CONSULTATION & AUDIT"
            title="Expert Analysis & Strategic Guidance"
            description="Get professional insights and actionable recommendations to improve your digital presence."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-green-600" />
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
            title="How We Analyze & Advise"
            description="Our systematic approach ensures comprehensive analysis and actionable recommendations."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        title="Ready for Expert Analysis?"
        description="Get professional insights that will help you make informed decisions and drive growth."
        buttonText="Schedule Consultation"
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
