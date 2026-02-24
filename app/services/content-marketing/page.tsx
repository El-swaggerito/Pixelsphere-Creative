import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, Edit3, MessageSquare, Video, FileText } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContentMarketingPage() {
  const services = [
    {
      icon: Edit3,
      title: "Content Strategy",
      description: "Comprehensive content roadmaps aligned with your business goals and audience needs.",
      features: ["Audience Persona Development", "Content Calendar Planning", "Keyword Research", "Brand Voice Guidelines"],
    },
    {
      icon: FileText,
      title: "Copywriting & Blogging",
      description: "Engaging, SEO-optimized articles and copy that educate and convert readers.",
      features: ["Blog Posts & Articles", "Website Copy", "Whitepapers & E-books", "Email Newsletters"],
    },
    {
      icon: Video,
      title: "Video & Visual Content",
      description: "Compelling multimedia content to capture attention across all platforms.",
      features: ["Explainer Videos", "Social Media Shorts", "Infographics", "Visual Storytelling"],
    },
    {
      icon: MessageSquare,
      title: "Social Media Content",
      description: "Platform-specific content designed to spark conversation and engagement.",
      features: ["Post Creation", "Caption Writing", "Hashtag Strategy", "Community Engagement"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Research & Planning",
      description:
        "We dive deep into your industry and audience to uncover topics that resonate and drive traffic.",
    },
    {
      step: "02",
      title: "Creation & Production",
      description: "Our team of writers and creators produce high-quality content tailored to your brand voice.",
    },
    {
      step: "03",
      title: "Distribution & Promotion",
      description: "We strategically distribute content across channels to maximize reach and engagement.",
    },
    {
      step: "04",
      title: "Analysis & Reporting",
      description: "We track performance metrics to measure impact and refine our content strategy.",
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">Content Marketing</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Strategic content solutions that tell your brand story, educate your audience, and drive meaningful engagement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="CONTENT SERVICES"
            title="Impactful Content Solutions"
            description="From blog posts to video production, we create content that connects with your audience and builds authority."
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
            title="How We Create Compelling Content"
            description="Our strategic approach ensures every piece of content serves a purpose and drives results."
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
        title="Ready to Tell Your Story?"
        description="Let's create content that resonates with your audience and establishes your brand as an industry leader."
        buttonText="Start Creating"
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
