import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import WorkCTA from "@/components/work-cta"
import Link from "next/link"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog-office-workspace.png",
      category: "Design",
      categoryColor: "bg-blue-100 text-blue-800",
      title: "Build a Professional Website...",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: {
        name: "Mariana Astorino",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "20 Jan 2024",
      },
      slug: "build-professional-website",
    },
    {
      id: 2,
      image: "/images/blog-office-laptops.png",
      category: "Product",
      categoryColor: "bg-purple-100 text-purple-800",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: {
        name: "Phoenix Baker",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "19 Jan 2024",
      },
      slug: "migrating-to-linear",
    },
    {
      id: 3,
      image: "/images/blog-desk-setup.png",
      category: "Software Engineering",
      categoryColor: "bg-green-100 text-green-800",
      title: "Building your API Stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: {
        name: "Lana Steiner",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "18 Jan 2024",
      },
      slug: "building-api-stack",
    },
    {
      id: 4,
      image: "/images/blog-mountain-landscape.png",
      category: "Management",
      categoryColor: "bg-orange-100 text-orange-800",
      title: "Bill Walsh leadership lessons",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      author: {
        name: "Alec Whitten",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "17 Jan 2024",
      },
      slug: "bill-walsh-leadership-lessons",
    },
    {
      id: 5,
      image: "/images/blog-team-meeting.png",
      category: "Design",
      categoryColor: "bg-blue-100 text-blue-800",
      title: "PM mental models",
      description: "Mental models are simple expressions of complex processes or relationships.",
      author: {
        name: "Demi Wilkinson",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "16 Jan 2024",
      },
      slug: "pm-mental-models",
    },
    {
      id: 6,
      image: "/images/blog-minimal-desk.png",
      category: "Product",
      categoryColor: "bg-purple-100 text-purple-800",
      title: "What is Wireframing?",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      author: {
        name: "Candice Wu",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "15 Jan 2024",
      },
      slug: "what-is-wireframing",
    },
    {
      id: 7,
      image: "/images/blog-kitchen-work.png",
      category: "Design",
      categoryColor: "bg-blue-100 text-blue-800",
      title: "How collaboration makes us better designers",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      author: {
        name: "Natali Craig",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "14 Jan 2024",
      },
      slug: "how-collaboration-makes-us-better-designers",
    },
    {
      id: 8,
      image: "/images/blog-man-headphones.png",
      category: "Design",
      categoryColor: "bg-blue-100 text-blue-800",
      title: "Our top 10 Javascript frameworks to use",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      author: {
        name: "Drew Cano",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "13 Jan 2024",
      },
      slug: "top-10-javascript-frameworks",
    },
    {
      id: 9,
      image: "/images/blog-woman-headphones.png",
      category: "Customer Success",
      categoryColor: "bg-pink-100 text-pink-800",
      title: "Podcast: Creating a better CX Community",
      description: "Starting a community doesn't need to be complicated, but how do you get started?",
      author: {
        name: "Orlando Diggs",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "12 Jan 2024",
      },
      slug: "creating-better-cx-community",
    },
  ]

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Header */}
        <div>
          <Header currentPage="blog" background="white" textColor="black"/>
        </div>

        {/* Hero Section */}
        <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">Resources and insights</h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              The latest industry news, interviews, technologies, and resources.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2">
                  Search
                </Button>
              </div>
            </div>

            {/* Filter Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <span className="text-gray-600 font-medium">Popular:</span>
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                UX
              </Badge>
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                Website
              </Badge>
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                Freelancing
              </Badge>
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                E-commerce
              </Badge>
              <Badge variant="outline" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
                About Mika
              </Badge>
            </div>
          </div>
        </section>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection>
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8">
              <button className="text-gray-900 font-medium border-b-2 border-orange-500 pb-2">All Courses</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium pb-2">Design</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium pb-2">Graphic Design</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium pb-2">Websites</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium pb-2">Products</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium pb-2">Branding</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium pb-2">Software Engineering</button>
              <button className="text-gray-600 hover:text-gray-900 font-medium pb-2">Programs</button>
            </div>
          </div>
        </section>
        </AnimatedSection>

        {/* Blog Grid */}
        <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className={`${post.categoryColor} mb-3`}>{post.category}</Badge>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center group-hover:text-orange-600 transition-colors">
                        {post.title}
                        <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{post.description}</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
                          <Image
                            src={post.author.avatar || "/placeholder.svg"}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                          <div className="text-sm text-gray-500">{post.author.date}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50 bg-transparent">
                <ArrowRight className="mr-2 h-4 w-4 rotate-90" />
                Load more
              </Button>
            </div>
          </div>
        </section>
        </AnimatedSection>

        <AnimatedSection>
          <WorkCTA />
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
