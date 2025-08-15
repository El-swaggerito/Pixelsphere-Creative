import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Database, Smartphone, Shield, Search } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function DigitalGrowthPage() {
  const services = [
    {
      icon: Database,
      title: "Software Application",
      description: "Custom-built applications that solve real-world problems for your business.",
      features: ["Custom Development", "Scalable Architecture", "Integration Capabilities", "Ongoing Support"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Scalable mobile solutions tailored to enhance user experience and business goals.",
      features: ["iOS & Android Apps", "Cross-Platform Development", "User-Centered Design", "Performance Optimization"],
    },
    {
      icon: Shield,
      title: "Brand Audit",
      description: "Comprehensive review of brand performance, consistency, and overall health.",
      features: ["Brand Assessment", "Competitive Analysis", "Audience Perception", "Improvement Recommendations"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Strategies to improve your search engine ranking and drive organic traffic.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Performance Tracking"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Analysis & Strategy",
      description:
        "We analyze your current digital presence and develop a growth strategy aligned with your goals.",
    },
    {
      step: "02",
      title: "Solution Development",
      description: "Our team develops custom digital solutions tailored to your specific needs.",
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description: "We implement the solutions and conduct thorough testing to ensure optimal performance.",
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "We continuously monitor performance and optimize for improved results.",
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <Header currentPage="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">Digital Growth & Future Offerings</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Advanced digital solutions to accelerate your business growth and prepare for future opportunities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="GROWTH SERVICES"
            title="Digital Growth Solutions"
            description="From custom applications to SEO optimization, we provide comprehensive services to accelerate your digital growth."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Create IDs based on service titles
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              
              return (
                <div key={index} id={serviceId} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-purple-600" />
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
            title="How We Drive Digital Growth"
            description="Our strategic process ensures digital solutions that drive measurable growth and prepare your business for the future."
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
      </AnimatedSection>

      <AnimatedSection>
      <CTASection
        title="Ready to Accelerate Your Digital Growth?"
        description="Let's create digital solutions that drive measurable results and prepare your business for the future."
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
