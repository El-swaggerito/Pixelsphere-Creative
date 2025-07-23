import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import SectionHeader from "@/components/section-header"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import WorkCTA from "@/components/work-cta"
import Link from "next/link"

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Work Hero Section - Similar to Home Page */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <HeroBackground>
          {/* Decorative vector line at top left */}
          <div className="absolute top-8 left-8 z-10">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 50 Q 30 10, 60 30 T 110 20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
              <path d="M5 40 Q 25 5, 55 25 T 105 15" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <Header currentPage="work" />

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center relative z-20 px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">OUR WORK</h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
                Crafting engaging brand experiences begins with innovative approach to design and development. Our
                portfolio showcases a diverse range of projects that reflect our commitment to delivering exceptional
                results for our clients.
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Design Collection Images - Same as Home Page */}
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

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="OUR WORKS" title="Brands That Perform, Connect, and Last" />

          {/* Filter Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-8">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium">All</button>
              <button className="text-gray-600 hover:text-gray-900 px-6 py-2 font-medium">Web Design</button>
              <button className="text-gray-600 hover:text-gray-900 px-6 py-2 font-medium">Development</button>
            </div>
          </div>

          <div className="space-y-20">
            {/* Project 1 - DRIP AND GRIND */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-gray-900 font-semibold text-lg">DRIP AND GRIND</span>
                  <Link
                    href="/work/drip-and-grind"
                    className="ml-auto flex items-center text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-lg p-6 aspect-[4/3]">
                    <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4"></div>
                        <div className="text-purple-600 font-semibold">App Interface</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-orange-200" />

            {/* Project 2 - HOPE FOUNDATION */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-900 font-semibold text-lg">HOPE FOUNDATION</span>
                  <Link
                    href="/work/hope-foundation"
                    className="ml-auto flex items-center text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
                  <div className="bg-white rounded-lg p-4 aspect-[16/10]">
                    <div className="w-full h-full bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-12 bg-green-600 rounded mx-auto mb-4"></div>
                        <div className="text-green-600 font-semibold">Website Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-orange-200" />

            {/* Project 3 - EDTECH LEARNING PLATFORM */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-gray-900 font-semibold text-lg">EDTECH LEARNING PLATFORM</span>
                  <Link
                    href="/work/edtech-learning-platform"
                    className="ml-auto flex items-center text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-lg p-6 aspect-[4/3]">
                    <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4"></div>
                        <div className="text-purple-600 font-semibold">Learning Platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-orange-200" />

            {/* Repeat projects as shown in design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="text-gray-900 font-semibold text-lg">HOPE FOUNDATION</span>
                  <Link
                    href="/work/hope-foundation"
                    className="ml-auto flex items-center text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl">
                  <div className="bg-white rounded-lg p-4 aspect-[16/10]">
                    <div className="w-full h-full bg-green-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-12 bg-green-600 rounded mx-auto mb-4"></div>
                        <div className="text-green-600 font-semibold">Website Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-orange-200" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-gray-900 font-semibold text-lg">DRIP AND GRIND</span>
                  <Link
                    href="/work/drip-and-grind"
                    className="ml-auto flex items-center text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
                <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-lg p-6 aspect-[4/3]">
                    <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4"></div>
                        <div className="text-purple-600 font-semibold">App Interface</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-orange-200" />

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="text-gray-900 font-semibold text-lg">EDTECH LEARNING PLATFORM</span>
                  <Link
                    href="/work/edtech-learning-platform"
                    className="ml-auto flex items-center text-gray-500 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-sm mr-2">DETAILS</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
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
              <div className="lg:order-1 relative">
                <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                  <div className="bg-white rounded-lg p-6 aspect-[4/3]">
                    <div className="w-full h-full bg-purple-100 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-600 rounded-lg mx-auto mb-4"></div>
                        <div className="text-purple-600 font-semibold">Learning Platform</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work CTA Section */}
      <WorkCTA />

      <FinalCTA />
      <Footer />
    </div>
  )
}
