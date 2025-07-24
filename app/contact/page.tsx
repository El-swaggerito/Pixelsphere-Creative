"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin, Plus, MessageCircle, Minus } from "lucide-react"
import Header from "@/components/header"
import HeroBackground from "@/components/hero-background"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";


import { useState } from "react"

interface FAQItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border border-gray-200 rounded-lg bg-white">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-semibold text-gray-900 text-lg">{question}</h3>
        {isOpen ? (
          <Minus className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function ContactPage() {
  return (
    <PageTransition>
    <main className="lg:pt-10 sm:pt-0">
      {/* Hero Section with Contact Image */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <HeroBackground className="pt-32">
          <Header currentPage="contact" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">Contact Us</h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Welcome to the support portal! Search your answers with the search box, or if you're stuck you can
                  create a support ticket.
                </p>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
                >
                  Let's Work Together
                </Button>
              </div>

              {/* Right Content - Hero Image with Overlays */}
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/images/contact-hero-woman.png"
                    alt="Customer support representative"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroBackground>
      </section>

      {/* Contact Form Section */}
        <AnimatedSection>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-8">We'd love to hear from you. Please fill out this form.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name *</label>
                    <Input placeholder="Your first name" className="w-full" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <Input placeholder="Your last name" className="w-full" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <Input type="email" placeholder="Your email" className="w-full" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone number *</label>
                  <Input placeholder="Your phone number" className="w-full" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What services are you looking for? *
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="brand-positioning">Brand Positioning & Messaging</option>
                    <option value="visual-identity">Visual Identity Systems</option>
                    <option value="brand-architecture">Brand Architecture</option>
                    <option value="rebranding">Rebranding & Brand Refreshes</option>
                    <option value="digital-strategy">Digital Brand Strategy</option>
                    <option value="employer-branding">Employer Branding</option>
                    <option value="web-development">Web Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Where did you hear about us?</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="website">Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What is your budget? *</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select your budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us more about your project *
                  </label>
                  <Textarea
                    placeholder="Describe your project, goals, timeline, and any specific requirements..."
                    rows={4}
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">File Upload</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                    <input type="file" className="hidden" id="file-upload" multiple />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="text-gray-600">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="mt-2 text-sm">Click to upload files or drag and drop</p>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    You agree to our friendly privacy policy.
                  </label>
                </div>

                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3">Send Message</Button>
              </form>
            </div>

            {/* Contact Information - Keep existing content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">We'd love to hear from you</h2>
              <p className="text-gray-600 mb-8">
                Need something cleared up? Here are our most frequently asked questions.
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Our friendly team is here to help.</p>
                    <a
                      href="mailto:https://info@pixelsphere.ca"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      info@pixelsphere.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+5145127873" className="text-blue-600 hover:text-blue-700">
                      +(514) 512-7873
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
                    <p className="text-gray-600 mb-2">Come say hello at our office HQ.</p>
                    <p className="text-gray-700">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </AnimatedSection>

      {/* FAQ Section */}
        <AnimatedSection>
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Orange decorative shape - top right edge */}
        <div className="absolute top-8 right-0 opacity-80 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-rhYKEs7iyHqIRKtnF7t0Yu5r57IRmQ.png"
            alt="Decorative orange shape"
            width={120}
            height={120}
            className="w-24 h-24 lg:w-32 lg:h-32"
          />
        </div>

        {/* Cyan spiral - left side middle */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-80 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/69-k4S86mlsl1BRamdSHJCBXNfdqJJKZK.png"
            alt="Decorative cyan spiral"
            width={80}
            height={80}
            className="w-16 h-16 lg:w-20 lg:h-20"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - FAQ Title and Questions */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-12 leading-tight">
                Frequently
                <br />
                asked questions
              </h2>

              <div className="space-y-4">
                {[
                  {
                    question: "What services does PixelSphere offer?",
                    answer:
                      "PixelSphere specializes in strategic brand consulting including Brand Positioning & Messaging, Visual Identity Systems, Brand Architecture, Rebranding & Brand Refreshes, Digital Brand Strategy, and Employer Branding.",
                  },
                  {
                    question: "How long does it take to complete a brand strategy project?",
                    answer:
                      "The timeline varies depending on the complexity and scope of the project. A brand positioning project might take 4-6 weeks, while a complete rebrand can take 2-4 months. We'll provide a detailed timeline during our initial consultation.",
                  },
                  {
                    question: "Do you work with startups or only established companies?",
                    answer:
                      "We work with businesses at all stages - from startups shaping their first impression to legacy brands evolving their next chapter. Our scalable solutions are designed to grow with your business.",
                  },
                  {
                    question: "What's included in a brand strategy project?",
                    answer:
                      "Our brand strategy projects typically include deep discovery research, competitive analysis, brand positioning, messaging framework, visual identity guidelines, and implementation roadmap. Each project is customized to your specific needs.",
                  },
                  {
                    question: "How do you measure the success of a brand project?",
                    answer:
                      "We measure success through various metrics including brand awareness, customer engagement, market differentiation, and business growth indicators. We establish clear KPIs at the project start and track progress throughout.",
                  },
                  {
                    question: "Can you help improve our existing brand without a complete rebrand?",
                    answer:
                      "We offer brand refreshes and optimization services that can enhance your existing brand without starting from scratch. This might include messaging refinement, visual updates, or digital strategy improvements.",
                  },
                ].map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
                ))}
              </div>
            </div>

            {/* Right Column - Additional Help Card */}
            <div className="flex items-start justify-center lg:pt-32">
              <Card className="p-8 bg-white shadow-lg max-w-sm w-full">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Do you have more questions?</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    End-to-end payments and financial management in a single solution. Meet the right platform to help
                    realize.
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
        </AnimatedSection>

        <AnimatedSection>
      <CTASection
        title="Crafting Digital Experiences That Make Brands Stand Out"
        description="We design and develop websites and applications that help startups and businesses grow, connect, and thrive online."
        buttonText="Contact Us"
        backgroundImage="/images/cta-bg.png"
      />
        </AnimatedSection>
        <AnimatedSection>
      <FinalCTA />
        </AnimatedSection>
        <AnimatedSection>
      <Footer />
        </AnimatedSection>
    </main>
    </PageTransition>
  )
}
