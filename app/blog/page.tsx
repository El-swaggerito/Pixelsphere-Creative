import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import WorkCTA from "@/components/work-cta"
import PageTransition from "@/components/PageTransition";
import AnimatedSection from "@/components/AnimatedSection";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPage() {
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
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-sora">Resources and insights</h1>
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
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Load More Button */}
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
