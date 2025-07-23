import { Globe, ShoppingCart, Palette, Smartphone, Code, Search } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description:
        "Tailored web solutions that reflect your brand identity and drive conversions with modern design and functionality.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First"],
      color: "blue",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description:
        "Powerful online stores that maximize sales and enhance user experience with seamless checkout processes.",
      features: ["Payment Integration", "Inventory Management", "Analytics", "Security"],
      color: "green",
    },
    {
      icon: Palette,
      title: "Branding & Digital Marketing",
      description:
        "Complete brand identity and digital marketing solutions that drive growth and build lasting connections.",
      features: ["Logo Design", "Brand Guidelines", "Social Media", "Content Strategy"],
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "UI/UX Design",
      description: "Intuitive designs and user experiences that create exceptional interactions and drive engagement.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      color: "orange",
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Custom web applications built with modern technologies to solve complex business challenges.",
      features: ["Custom Development", "API Integration", "Database Design", "Cloud Hosting"],
      color: "indigo",
    },
    {
      icon: Search,
      title: "SEO & Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase visibility and drive qualified traffic.",
      features: ["SEO Optimization", "PPC Campaigns", "Content Marketing", "Analytics"],
      color: "pink",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We start by understanding your business goals, target audience, and project requirements.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed wireframes, mockups, and project timelines for your approval.",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using best practices and conduct thorough testing before launch.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <HeroBackground>
          <Header currentPage="services" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Our Services</h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand and drive meaningful results.
            </p>
          </div>
        </HeroBackground>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="WHAT WE OFFER"
            title="Services That Drive Results"
            description="From strategy to execution, we provide end-to-end solutions for your digital needs."
          />
          <div className="text-center">
            <p className="text-gray-600 text-lg">Services content coming soon...</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="OUR PROCESS"
            title="How we work with you"
            description="Our proven process ensures that every project is delivered on time, on budget, and exceeds expectations."
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

      {/* CTA Section - Using Reusable Component */}
      <CTASection
        title="Ready to Get Started?"
        description="Let's discuss how our services can help transform your business."
        buttonText="Contact Us"
        backgroundImage="/images/cta-bg.png"
      />

      <FinalCTA />
      <Footer />
    </div>
  )
}
