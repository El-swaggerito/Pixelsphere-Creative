import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, Palette, Zap, Target, Users, BarChart3 } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import StatsDisplay from "@/components/stats-display"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"

export default function AboutPage() {
  const stats = [
    { label: "Projects completed", value: "200+" },
    { label: "Client retention rate", value: "95%" },
    { label: "Years of experience", value: "5" },
  ]

  return (
    <main className="lg:pt-12">
      {/* About Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <HeroBackground>
          <Header currentPage="about" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">About PixelSphere</h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  We are a team of passionate designers and developers dedicated to creating digital experiences that
                  move, resonate, and endure.
                </p>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/about-hero-team.png"
                  alt="Our diverse team"
                  width={600}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </HeroBackground>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute top-12 left-12 opacity-20">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-orange-400 rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/professional-woman.png"
                alt="Our team member"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-orange-500 font-medium text-sm tracking-wide uppercase">WHO WE ARE</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                We craft identities that move, resonate, and endure
              </h2>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                At PixelSphere, we don't strictly build brands — we craft identities that move, resonate, and endure.
                Founded on the belief that great brands are built at the intersection of strategy, creativity, and
                clarity.
              </p>

              <StatsDisplay stats={stats} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="OUR SERVICES" title="We craft identities that move, resonate, and endure" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Website</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our Web Design & Development service offers a perfect blend of design elements to your specific needs,
                  featuring optimized pages for a seamless user experience.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">E-Commerce Website</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our Web Design & Development service offers a perfect blend of design elements to your specific needs,
                  featuring optimized pages for a seamless user experience.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Branding and Digital services</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our Web Design & Development service offers a perfect blend of design elements to your specific needs,
                  featuring optimized pages for a seamless user experience.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Branding and Digital services</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our Web Design & Development service offers a perfect blend of design elements to your specific needs,
                  featuring optimized pages for a seamless user experience.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">UI UX Design/Plugins</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our Web Design & Development service offers a perfect blend of design elements to your specific needs,
                  featuring optimized pages for a seamless user experience.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">UI UX Design Project</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  Our Web Design & Development service offers a perfect blend of design elements to your specific needs,
                  featuring optimized pages for a seamless user experience.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-sm">
                  Discover More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Crafting Digital Experiences That Make Brands Stand Out"
        description="We design and develop digital experiences that connect brands with their audiences and drive meaningful results."
        buttonText="Contact Us"
        backgroundImage="/images/cta-bg.png"
      />

      {/* Insight-Driven Strategy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Insight-Driven Strategy with Bold Creative Execution
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We combine insight-driven strategy with bold creative execution. Every project begins with deep
                discovery and ends with a brand that not only thinks good — it performs, connects, and lasts.
              </p>
              <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                From brand identity and web design — to UX/UI ideation, your presence, your strategies. That's why we
                build brands that are as bold as they are.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategy</h3>
                    <p className="text-gray-600 text-sm">Brand positioning and market research</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Palette className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Execution</h3>
                    <p className="text-gray-600 text-sm">Creative development and implementation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <BarChart3 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Measurement</h3>
                    <p className="text-gray-600 text-sm">Performance tracking and optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ux-workspace.png"
                alt="UX design workspace"
                width={600}
                height={500}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Brand Partner Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Strategic Brand Partner</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-blue-50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Experienced Strategists & Designers</h3>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-purple-50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cross-Industry Perspective</h3>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-green-50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaborative Client-First Process</h3>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow bg-orange-50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalable Solutions for Growing Brands</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
