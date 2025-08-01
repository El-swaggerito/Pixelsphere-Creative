import Header from "@/components/header"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import { Check, FileImage, PenTool, Layers, Megaphone } from "lucide-react"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function GraphicDesignPage() {
  const services = [
    {
      icon: FileImage,
      title: "Visual Assets",
      description: "Effectively communicating your brand message through compelling visuals.",
      features: ["Custom Graphics", "Illustrations", "Infographics", "Digital Assets"],
    },
    {
      icon: PenTool,
      title: "Branding Collaterals",
      description: "Social media kits and marketing materials tailored to your brand identity.",
      features: ["Social Media Graphics", "Business Cards", "Letterheads", "Email Signatures"],
    },
    {
      icon: Layers,
      title: "Graphic Templates",
      description: "Custom designs for consistent and professional visual communication.",
      features: ["Presentation Templates", "Document Templates", "Social Media Templates", "Marketing Templates"],
    },
    {
      icon: Megaphone,
      title: "Promotional Design",
      description: "Eye-catching promotional materials that convert viewers to clients.",
      features: ["Flyers & Brochures", "Banners & Posters", "Digital Ads", "Print Materials"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Brief & Discovery",
      description:
        "We understand your requirements, target audience, and design objectives.",
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Our designers create initial concepts based on your brand guidelines.",
    },
    {
      step: "03",
      title: "Design Refinement",
      description: "We refine the designs based on your feedback to achieve the perfect result.",
    },
    {
      step: "04",
      title: "Finalization & Delivery",
      description: "We deliver the final designs in all required formats for your use.",
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-300/20 rounded-full blur-xl animate-pulse delay-500"></div>

        <Header currentPage="services" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-sora">Graphic Design</h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Creative graphic design services that communicate your message effectively and enhance your brand presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="DESIGN SERVICES"
            title="Creative Visual Solutions"
            description="From digital assets to print materials, we provide comprehensive graphic design services for all your needs."
          />

          <div className="grid md:grid-cols-2 gap-8">
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
            title="How We Create Your Designs"
            description="Our proven process ensures your graphic design projects are delivered on time and exceed expectations."
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
        title="Ready for Professional Designs?"
        description="Let's create visual assets that elevate your brand and engage your audience."
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