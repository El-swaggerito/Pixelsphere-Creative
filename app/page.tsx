import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Globe, ShoppingCart, Palette, Smartphone } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import CTASection from "@/components/cta-section"
import StatsDisplay from "@/components/stats-display"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"

export default function HomePage() {
  const stats = [
    { label: "Projects completed", value: "200+" },
    { label: "Client retention rate", value: "95%" },
    { label: "Years of experience", value: "5" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <HeroBackground>
          {/* Decorative vector line at top left */}
          <div className="absolute top-8 left-8 z-10">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 50 Q 30 10, 60 30 T 110 20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
              <path d="M5 40 Q 25 5, 55 25 T 105 15" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <Header currentPage="home" />

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center relative z-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Empowering Businesses Through
                <br />
                Tailored Technology Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                We bridge the gap between businesses and their audiences by
                <br />
                delivering high-quality digital solutions that amplify brand
                <br />
                voices.
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
              >
                Let's Work Together
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Design Collection Images - Positioned at very bottom */}
          <div className="relative z-20 mt-auto">
            <div className="w-full">
              <Image
                src="/images/design-collection.png"
                alt="Design and development showcase"
                width={1500}
                height={300}
                className="w-full h-auto"
              />
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
                src="/images/meeting-room.png"
                alt="Our team in a meeting"
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
          <SectionHeader
            label="OUR SERVICES"
            title="We craft identities that move, resonate, and endure"
            description="Our comprehensive suite of services is designed to elevate your brand and drive meaningful results across all digital touchpoints."
          />

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Custom Website</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Tailored web solutions that reflect your brand identity and drive conversions with modern design and
                  functionality.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">E-commerce Website</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Powerful online stores that maximize sales and enhance user experience with seamless checkout
                  processes.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Palette className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Branding and Digital services</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Complete brand identity and digital marketing solutions that drive growth and build lasting
                  connections.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
                  Discover More →
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">UI UX Design/Plugins</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Intuitive designs and custom plugins that enhance functionality and create exceptional user
                  experiences.
                </p>
                <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
                  Discover More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTASection
        title="Crafting Digital Experiences That Make Brands Stand Out"
        description="Ready to transform your digital presence? Let's create something extraordinary together."
        buttonText="Start Your Project"
        backgroundImage="/images/cta-bg.png"
      />

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="OUR WORKS" title="Brands That Perform, Connect, and Last" />

          <div className="space-y-20">
            {/* Project 1 - DRIP AND GRIND */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-gray-900 font-semibold text-lg">DRIP AND GRIND</span>
                  <div className="ml-auto flex items-center text-gray-500">
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-600">Category • Web Design</span>
                  <span className="text-sm text-gray-600 ml-8">Time Taken • 6 months</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  A stylish café and co-working hub for freelancers and entrepreneurs. The name reflects hustle culture
                  ("grind") and café vibes ("drip").
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Design Direction:</strong> Trendy, youthful, and urban. Use bold fonts, coffee tones, and
                  visual identity that merges productivity with lifestyle aesthetics.
                </p>

                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-3">TECHNOLOGIES USED</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-100">
                      WordPress
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      PHP
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      HTML5
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      CSS3
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      JavaScript
                    </Badge>
                  </div>
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3">BOOK A CALL</Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/mobile-designs.png"
                  alt="DRIP AND GRIND project mockup"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <hr className="border-orange-200" />

            {/* Project 2 - HOPE FOUNDATION */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-900 font-semibold text-lg">HOPE FOUNDATION</span>
                  <div className="ml-auto flex items-center text-gray-500">
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-600">Category • Web Development & Branding</span>
                  <span className="text-sm text-gray-600 ml-8">Time Taken • 3 months</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  A non-profit organization providing education and healthcare services to people with disabilities.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  They partner with local communities to support sustainable development initiatives.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Design Direction:</strong> Clean, accessible layout with a human-centered design.
                </p>

                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-3">TECHNOLOGIES USED</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-100">
                      WordPress
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      PHP
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      HTML5
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      CSS3
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      JavaScript
                    </Badge>
                  </div>
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3">BOOK A CALL</Button>
              </div>
              <div className="lg:order-1 relative">
                <Image
                  src="/images/website-mockups.png"
                  alt="HOPE FOUNDATION project mockup"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <hr className="border-orange-200" />

            {/* Project 3 - EDTECH LEARNING PLATFORM */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-gray-900 font-semibold text-lg">EDTECH LEARNING PLATFORM</span>
                  <div className="ml-auto flex items-center text-gray-500">
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm text-gray-600">Category • Web Design</span>
                  <span className="text-sm text-gray-600 ml-8">Time Taken • 6 months</span>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  A platform for self-paced and guided online learning tailored to students, professionals, and
                  educators.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  <strong>Design Direction:</strong> Engaging and motivational UI with vibrant tones (green), icons, and
                  smooth UX.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Focus on usability, onboarding flows, and storytelling through student success and instructor
                  expertise.
                </p>

                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-3">TECHNOLOGIES USED</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-100">
                      WordPress
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      PHP
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      HTML5
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      CSS3
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100">
                      JavaScript
                    </Badge>
                  </div>
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3">BOOK A CALL</Button>
              </div>
              <div className="relative">
                <Image
                  src="/images/mobile-designs.png"
                  alt="EDTECH LEARNING PLATFORM project mockup"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="#" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-19 relative overflow-hidden"
        style={{
          background: "#FFFFFF",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Testimonial cards with masonry layout */}
            <div className="relative h-[600px] overflow-hidden">
              {/* Left Column */}
              <div className="absolute left-0 top-0 w-1/2 pr-2">
                <div className="space-y-4 transform -translate-y-8">
                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "Working with this team has been an absolute pleasure. They delivered beyond our expectations,
                        even with our tight budget!"
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">Operations Director - Green Wave</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "They turned our ideas into reality with precision and creativity. Highly recommended for anyone
                        looking for top-notch results!"
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">Product Manager - NextGen</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "Their attention to detail and commitment to excellence are second to none. We couldn't be
                        happier with the final product."
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">CEO - Visionary Media</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "The team was a joy to work with. They listened to our needs and brought our project to life
                        with incredible skill."
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">Founder - Creative Solutions</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Right Column */}
              <div className="absolute right-0 top-0 w-1/2 pl-2">
                <div className="space-y-4 transform translate-y-16">
                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "Their creativity and professionalism are unmatched. They truly understood our needs and
                        delivered perfectly."
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">Marketing Manager - Bright Ideas Inc.</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "A fantastic experience from start to finish. The team was responsive, innovative, and always
                        ready to go the extra mile."
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">CEO - Tech Solutions Ltd.</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "Outstanding quality, fast delivery, and excellent communication throughout the project."
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">Head of Design - Urban Aesthetics</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-4 bg-blue-600 border-blue-500 rounded-2xl">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-white mb-3 text-sm leading-relaxed">
                        "Exceptional service and results that exceeded all our expectations. Highly recommend!"
                      </p>
                      <div>
                        <div className="text-white font-semibold text-sm">ayotilewa</div>
                        <div className="text-blue-200 text-xs">Director - Innovation Hub</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="text-left">
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                <span className="text-orange-300 font-medium text-sm tracking-wide uppercase">TESTIMONIALS</span>
              </div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Our client like us,
                <br />
                and we love them
              </h2>
              <p className="text-xl text-black mb-8 leading-relaxed">
                At PIXELSPHERE, our clients' satisfaction is our top priority. We take pride in the relationships we
                build and the successes we help create.
              </p>
              <div className="flex items-center mb-4">
                <span className="text-orange-600 text-2xl font-bold mr-2">5.0</span>
                <span className="text-black">from 100 reviewers</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center mr-2">
                  <span className="text-blue-600 font-bold text-sm">G</span>
                </div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="BLOG" title="Read our Blog" />

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/office-workspace.png" alt="UX review presentations" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-blue-100 text-blue-800 mb-3">Design</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  UX review presentations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </h3>
                <p className="text-gray-600 mb-6">
                  How do you create compelling presentations that wow your colleagues and impress your managers?
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Olivia Rhye</div>
                    <div className="text-sm text-gray-500">12 July 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/office-team.png" alt="Migrating to Linear 101" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-purple-100 text-purple-800 mb-3">Product</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  Migrating to Linear 101
                  <ArrowRight className="ml-2 h-4 w-4" />
                </h3>
                <p className="text-gray-600 mb-6">
                  Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get
                  started.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Phoenix Baker</div>
                    <div className="text-sm text-gray-500">12 July 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <Image src="/images/home-office.png" alt="Building your API Stack" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <Badge className="bg-green-100 text-green-800 mb-3">Software Engineering</Badge>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  Building your API Stack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </h3>
                <p className="text-gray-600 mb-6">
                  The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Lana Steiner</div>
                    <div className="text-sm text-gray-500">12 July 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  )
}
