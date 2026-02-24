import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, BarChart, Calendar, Share2, Users, Search, Target } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function SocialMediaMarketingPage() {
  const services = [
    {
      icon: Target,
      title: "Campaign Management",
      description: "End-to-end management of paid and organic social media campaigns to maximize ROI.",
      features: ["Strategy Development", "Ad Creation & Management", "Budget Optimization", "Performance Tracking"],
    },
    {
      icon: BarChart,
      title: "Analytics & Insights",
      description: "Data-driven insights to measure success and refine your social media strategy.",
      features: ["Performance Dashboards", "Audience Analytics", "Competitor Analysis", "ROI Reporting"],
    },
    {
      icon: Calendar,
      title: "Content Scheduling",
      description: "Strategic content planning and scheduling to maintain a consistent brand presence.",
      features: ["Editorial Calendar", "Multi-Platform Posting", "Optimal Timing", "Automated Publishing"],
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Building and nurturing an engaged community around your brand.",
      features: ["Audience Engagement", "Comment Moderation", "Brand Advocacy", "Customer Support"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Audit & Strategy",
      description:
        "We analyze your current social presence and develop a tailored strategy aligned with your goals.",
    },
    {
      step: "02",
      title: "Content Creation",
      description: "Our creative team produces high-quality visuals and copy that resonate with your audience.",
    },
    {
      step: "03",
      title: "Scheduling & Publishing",
      description: "We schedule and publish content across platforms at optimal times for maximum reach.",
    },
    {
      step: "04",
      title: "Analysis & Optimization",
      description: "We continuously monitor performance metrics and optimize campaigns for better results.",
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <Header currentPage="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">Social Media Marketing</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Strategic social media solutions that amplify your brand voice, engage your audience, and drive measurable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="MARKETING SERVICES"
            title="Comprehensive Social Solutions"
            description="From campaign management to advanced analytics, we provide everything you need to succeed on social media."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Create IDs based on service titles
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
              
              return (
                <div key={index} id={serviceId} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-pink-600" />
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
            title="How We Grow Your Social Presence"
            description="Our proven methodology ensures consistent growth and engagement across all your social channels."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
        title="Ready to Boost Your Social Presence?"
        description="Let's create a social media strategy that connects with your audience and drives real business results."
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
