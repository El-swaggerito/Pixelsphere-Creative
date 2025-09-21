import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, ThumbsUp, Share2, Play, Check, ChevronRight, ArrowRight, ChevronLeft, Instagram, Linkedin, Facebook, Twitter } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FinalCTA from "@/components/final-cta"
import WorkCTA from "@/components/work-cta"
import AnimatedSection from "@/components/AnimatedSection";
import BlogNewsletter from "@/components/blog-newsletter";
import { getBlogPostBySlug } from "@/data/blog-content"
import { Metadata } from "next"
import PageTransition from "@/components/PageTransition"
import { notFound } from "next/navigation"

// Mock blog data - you can replace this with actual data fetching
const getBlogPost = (slug: string) => {
  const blogPosts = {
    "build-professional-website": {
      title: "Build A Professional Website With WordPress.Com",
      category: "Design",
      categoryColor: "bg-blue-100 text-blue-800",
      rating: 5,
      reviews: 1036,
      duration: "2 hr 30 min",
      likes: 1,
      featuredImage: "/images/blog-office-workspace.png",
      hasVideo: true,
      author: {
        name: "Mariana Astorino",
        avatar: "/placeholder.svg?height=60&width=60",
        bio: "Senior UX Designer with 8+ years of experience in creating digital experiences.",
      },
      completionPoints: [
        "Build a fully functional WordPress website from scratch",
        "Customize themes and plugins to match your brand identity",
        "Optimize your website for search engines and performance",
        "Set up e-commerce functionality for online sales",
        "Implement responsive design for mobile compatibility",
        "Create engaging content that converts visitors to customers",
        "Master WordPress security best practices",
        "Set up analytics and tracking for your website",
      ],
      description: `This comprehensive course will teach you everything you need to know about building professional websites using WordPress.com. Whether you're a complete beginner or looking to enhance your existing skills, this course covers all aspects of modern web development.

You'll learn how to create stunning, responsive websites that not only look great but also perform exceptionally well. From basic setup to advanced customization, we'll guide you through every step of the process.

By the end of this course, you'll have the confidence and skills to build professional websites for yourself or your clients, understanding both the technical and design aspects that make websites successful.`,
      learningOutcomes: [
        "Create a professional WordPress website from start to finish",
        "Customize themes and layouts to match your vision",
        "Optimize websites for speed and search engines",
        "Set up contact forms and interactive elements",
        "Implement e-commerce solutions",
        "Understand web hosting and domain management",
        "Master content creation and management",
        "Apply modern design principles",
      ],
      targetAudience: [
        "Freelancers wanting to offer web design services",
        "Business owners looking to build their online presence",
        "Students interested in web development careers",
        "Marketing professionals expanding their skill set",
        "Anyone wanting to create professional websites",
      ],
      requirements: ["Basic computer skills", "Internet connection", "No prior web development experience needed"],
      included: [
        "Lifetime access to course materials",
        "Downloadable resources and templates",
        "Certificate of completion",
        "Access to private community forum",
        "Regular updates and new content",
        "30-day money-back guarantee",
      ],
    },
    "migrating-to-linear": {
      title: "Migrating to Linear 101",
      category: "Product",
      categoryColor: "bg-purple-100 text-purple-800",
      rating: 5,
      reviews: 892,
      duration: "1 hr 45 min",
      likes: 3,
      featuredImage: "/images/blog-office-laptops.png",
      hasVideo: true,
      author: {
        name: "Phoenix Baker",
        avatar: "/placeholder.svg?height=60&width=60",
        bio: "Product Manager with expertise in project management tools and team collaboration.",
      },
      completionPoints: [
        "Successfully migrate your team from other project management tools to Linear",
        "Set up efficient workflows and project structures",
        "Master Linear's unique features and keyboard shortcuts",
        "Implement best practices for issue tracking and sprint planning",
        "Configure integrations with popular development tools",
        "Train your team on Linear's collaborative features",
        "Optimize your workspace for maximum productivity",
        "Create custom views and filters for better project visibility",
      ],
      description: `Linear is revolutionizing how software teams manage projects, track issues, and collaborate. This course provides a comprehensive guide to migrating your team to Linear and maximizing its potential.

You'll learn not just how to use Linear, but how to think about project management in a more streamlined, efficient way. We'll cover everything from basic setup to advanced workflows that can transform your team's productivity.

Whether you're coming from Jira, Asana, or any other project management tool, this course will help you make the transition smooth and successful.`,
      learningOutcomes: [
        "Plan and execute a successful migration to Linear",
        "Set up projects, teams, and workflows efficiently",
        "Master Linear's keyboard-first approach",
        "Implement effective issue tracking systems",
        "Configure integrations with GitHub, Slack, and more",
        "Create custom workflows for your team's needs",
        "Use Linear's analytics and reporting features",
        "Train and onboard team members effectively",
      ],
      targetAudience: [
        "Product managers transitioning to Linear",
        "Development teams looking to improve workflow",
        "Startup founders seeking efficient project management",
        "Scrum masters and team leads",
        "Anyone interested in modern project management tools",
      ],
      requirements: [
        "Basic understanding of project management concepts",
        "Access to Linear workspace (free trial available)",
        "Familiarity with software development processes helpful but not required",
      ],
      included: [
        "Step-by-step migration checklist",
        "Linear workspace templates",
        "Integration setup guides",
        "Team training materials",
        "Best practices documentation",
        "Ongoing support and updates",
      ],
    },
    "building-api-stack": {
      title: "Building your API Stack",
      category: "Software Engineering",
      categoryColor: "bg-green-100 text-green-800",
      rating: 5,
      reviews: 1247,
      duration: "3 hr 15 min",
      likes: 8,
      featuredImage: "/images/blog-desk-setup.png",
      hasVideo: true,
      author: {
        name: "Lana Steiner",
        avatar: "/placeholder.svg?height=60&width=60",
        bio: "Full-stack developer and API architect with 10+ years of experience building scalable systems.",
      },
      completionPoints: [
        "Design and implement RESTful APIs from scratch",
        "Set up proper authentication and authorization systems",
        "Implement API versioning and documentation strategies",
        "Build scalable microservices architectures",
        "Master API testing and monitoring techniques",
        "Deploy APIs to cloud platforms with CI/CD pipelines",
        "Implement rate limiting and security best practices",
        "Create comprehensive API documentation",
      ],
      description: `In today's interconnected world, APIs are the backbone of modern applications. This comprehensive course will teach you everything you need to know about building robust, scalable API stacks that can handle real-world demands.

You'll learn industry best practices, modern tools, and proven patterns for API development. From design principles to deployment strategies, we'll cover the complete API lifecycle.

By the end of this course, you'll be able to architect and build production-ready APIs that are secure, performant, and maintainable.`,
      learningOutcomes: [
        "Design RESTful APIs following industry standards",
        "Implement authentication with JWT and OAuth",
        "Build APIs with Node.js, Express, and modern frameworks",
        "Set up database integration and ORM usage",
        "Create comprehensive API documentation",
        "Implement proper error handling and validation",
        "Deploy APIs to AWS, Google Cloud, or Azure",
        "Monitor and maintain APIs in production",
      ],
      targetAudience: [
        "Backend developers looking to specialize in APIs",
        "Full-stack developers expanding their skills",
        "Software architects designing system integrations",
        "DevOps engineers working with microservices",
        "Anyone building modern web applications",
      ],
      requirements: [
        "Solid understanding of JavaScript/Node.js",
        "Basic knowledge of databases and SQL",
        "Familiarity with HTTP protocols",
        "Development environment setup (Node.js, code editor)",
      ],
      included: [
        "Complete source code for all projects",
        "API design templates and checklists",
        "Deployment scripts and configurations",
        "Testing frameworks and examples",
        "Security audit checklist",
        "Performance optimization guide",
      ],
    },
  }

  return blogPosts[slug as keyof typeof blogPosts] || blogPosts["build-professional-website"]
}

const getRelatedPosts = () => [
  {
    slug: "ux-review-presentations",
    title: "UX review presentations",
    image: "/images/blog-office-workspace.png",
    category: "Design",
    author: "Olivia Rhye",
    date: "12 July 2025",
  },
  {
    slug: "migrating-to-linear",
    title: "Migrating to Linear 101",
    image: "/images/blog-office-laptops.png",
    category: "Product",
    author: "Phoenix Baker",
    date: "12 July 2025",
  },
  {
    slug: "building-api-stack",
    title: "Building your API Stack",
    image: "/images/blog-desk-setup.png",
    category: "Software Engineering",
    author: "Lana Steiner",
    date: "12 July 2025",
  },
]

// Remove the old BlogSinglePage function (lines 231-490)
// Keep only the BlogPostPage function starting at line 516

// Remove these lines (231-490):
// export default function BlogSinglePage({ params }: { params: { slug: string } }) {
//   const post = getBlogPost(params.slug)
//   const relatedPosts = getRelatedPosts()
//   
//   return (
//     <div className="min-h-screen">
//       <Header currentPage="blog" textColor="black" background="white"/>
//   
//       {/* Breadcrumb */}
//       <AnimatedSection>
//       <section className="py-4 bg-gray-50 border-b pt-10">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center text-sm text-gray-600">
//             <Link href="/" className="hover:text-orange-600">
//               Home
//             </Link>
//             <ChevronRight className="h-4 w-4 mx-2" />
//             <Link href="/blog" className="hover:text-orange-600">
//               Blog
//             </Link>
//             <ChevronRight className="h-4 w-4 mx-2" />
//             <span className="text-gray-900">{post.title}</span>
//           </div>
//         </div>
//       </section>
//       </AnimatedSection>
//   
//       {/* Blog Post Header */}
//       <AnimatedSection>
//       <section className="py-12 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Badge className={`${post.categoryColor} mb-4`}>{post.category}</Badge>
//           <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
//   
//           {/* Meta Information */}
//           <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
//             <div className="flex items-center">
//               <div className="flex items-center mr-2">
//                 [1, 2, 3, 4, 5].map((star) => (
//                   <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                 ))}
//               </div>
//               <span className="font-medium">{post.reviews.toLocaleString()} Reviews</span>
//             </div>
//             <div className="flex items-center">
//               <Clock className="h-4 w-4 mr-1" />
//               <span>{post.duration}</span>
//             </div>
//             <div className="flex items-center">
//               <ThumbsUp className="h-4 w-4 mr-1" />
//               <span>{post.likes} like</span>
//             </div>
//             <button className="flex items-center hover:text-orange-600">
//               <Share2 className="h-4 w-4 mr-1" />
//               <span>Share</span>
//             </button>
//           </div>
//   
//           {/* Featured Media */}
//           <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
//             <Image src={post.featuredImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
//             {post.hasVideo && (
//               <div className="absolute inset-0 flex items-center justify-center bg-black/20">
//                 <button className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
//                   <Play className="h-6 w-6 text-white ml-1" />
//                 </button>
//               </div>
//             )}
//           </div>
//   
//           {/* Author Info */}
//           <div className="flex items-center mb-12">
//             <Image
//               src={post.author.avatar || "/placeholder.svg"}
//               alt={post.author.name}
//               width={60}
//               height={60}
//               className="rounded-full mr-4"
//             />
//             <div>
//               <div className="font-semibold text-gray-900">{post.author.name}</div>
//               <div className="text-gray-600 text-sm">{post.author.bio}</div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </AnimatedSection>
//   
//       {/* Blog Content */}
//       <AnimatedSection>
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* After Completing This Course */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">After Completing This Course You Will Be Able To</h2>
//             <ul className="space-y-3">
//               {post.completionPoints.map((point, index) => (
//                 <li key={index} className="flex items-start">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                   <span className="text-gray-700">{point}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//   
//           {/* About This Course */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
//             <div className="prose prose-lg text-gray-700">
//               {post.description.split("\n\n").map((paragraph, index) => (
//                 <p key={index} className="mb-4">
//                   {paragraph}
//                 </p>
//               ))}
//             </div>
//           </div>
//   
//           {/* What You Will Learn */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Will Learn</h2>
//             <ul className="space-y-3">
//               {post.learningOutcomes.map((outcome, index) => (
//                 <li key={index} className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                   <span className="text-gray-700">{outcome}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//   
//           {/* Why Learn With Author */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Learn With {post.author.name}?</h2>
//             <p className="text-gray-700 mb-4">
//               {post.author.name} brings years of industry experience and a passion for teaching to every course. With a
//               proven track record of helping thousands of students achieve their goals, you'll be learning from one of
//               the best in the field.
//             </p>
//             <p className="text-gray-700">
//               The teaching approach focuses on practical, real-world applications that you can immediately implement in
//               your own projects. Every lesson is designed to build upon the previous one, ensuring a smooth learning
//               curve.
//             </p>
//           </div>
//   
//           {/* Who Is This Course For */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Is This Course For?</h2>
//             <ul className="space-y-3">
//               {post.targetAudience.map((audience, index) => (
//                 <li key={index} className="flex items-start">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                   <span className="text-gray-700">{audience}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//   
//           {/* Requirements */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
//             <ul className="space-y-3">
//               {post.requirements.map((requirement, index) => (
//                 <li key={index} className="flex items-start">
//                   <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                   <span className="text-gray-700">{requirement}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//   
//           {/* What Is Included */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">What Is Included?</h2>
//             <ul className="space-y-3">
//               {post.included.map((item, index) => (
//                 <li key={index} className="flex items-start">
//                   <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                   <span className="text-gray-700">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//   
//         </div>
//       </section>
//       </AnimatedSection>
//   
//       {/* More Courses For You */}
//       <AnimatedSection>
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">More Courses For You</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {relatedPosts.map((relatedPost, index) => (
//               <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
//                 <div className="aspect-video relative">
//                   <Image
//                     src={relatedPost.image || "/placeholder.svg"}
//                     alt={relatedPost.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <CardContent className="p-6">
//                   <Badge className="bg-blue-100 text-blue-800 mb-3">{relatedPost.category}</Badge>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
//                     {relatedPost.title}
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </h3>
//                   <div className="flex items-center">
//                     <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
//                     <div>
//                       <div className="text-sm font-medium text-gray-900">{relatedPost.author}</div>
//                       <div className="text-sm text-gray-500">{relatedPost.date}</div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//       </AnimatedSection>
//   
//       {/* Related Courses */}
//       <AnimatedSection>
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Courses</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Link href="/blog/build-professional-website" className="text-orange-600 hover:text-orange-700">
//               Build Professional Website With WordPress
//             </Link>
//             <Link href="/blog/migrating-to-linear" className="text-orange-600 hover:text-orange-700">
//               Migrating to Linear 101
//             </Link>
//             <Link href="/blog/building-api-stack" className="text-orange-600 hover:text-orange-700">
//               Building your API Stack
//             </Link>
//             <Link href="/blog/ux-design-fundamentals" className="text-orange-600 hover:text-orange-700">
//               UX Design Fundamentals
//             </Link>
//           </div>
//         </div>
//       </section>
//       </AnimatedSection>
//   
//       <AnimatedSection>
//         <WorkCTA />
//       </AnimatedSection>
//       <AnimatedSection>
//         <FinalCTA />
//       </AnimatedSection>
//       <AnimatedSection>
//         <Footer />
//       </AnimatedSection>
//     </div>
//   )
// }

interface BlogPostPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found"
    }
  }

  return {
    title: `${post.title} | PixelSphere Creative Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage]
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Header */}
        <div>
          <Header currentPage="blog" background="white" textColor="black"/>
        </div>

        {/* Blog Post Content */}
        <AnimatedSection>
          <article className="pt-4 pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Back to Blog */}
              <Link 
                href="/blog" 
                className="inline-flex items-center text-gray-600 hover:text-orange-600 mb-8 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              {/* Article Header */}
              <header className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 font-sora">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="font-medium">{post.author.name}</span>
                  </div>
                  <span>•</span>
                  <time>{post.publishDate}</time>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
              </header>

              {/* Featured Image */}
              <div className="mb-12">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                  priority
                />
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {/* Introduction */}
                <div className="text-xl text-gray-700 leading-relaxed mb-8">
                  {post.introduction}
                </div>

                {/* Content Sections */}
                {post.sections.map((section, index) => (
                  <section key={index} className="mb-12">
                    {section.heading && (
                      <h2 className="text-2xl font-bold text-gray-900 mb-6 font-sora">
                        {section.heading}
                      </h2>
                    )}
                    
                    {section.content && (
                      <div className="text-gray-700 leading-relaxed mb-6">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-4">{paragraph}</p>
                        ))}
                      </div>
                    )}

                    {section.list && (
                      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                        {section.list.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.image && (
                      <div className="my-8">
                        <Image
                          src={section.image}
                          alt={section.heading || `Section ${index + 1} image`}
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      </div>
                    )}
                  </section>
                ))}

                {/* Conclusion */}
                {post.conclusion && (
                  <div className="border-t border-gray-200 pt-8 mt-12">
                    <div className="text-gray-700 leading-relaxed mb-8">
                      {post.conclusion.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Media Links */}
                <div className="text-center mt-12 pt-8 border-t border-gray-200">
                  <p className="text-gray-600 mb-6">Follow us on our socials for more digital marketing tips</p>
                  <div className="flex justify-center space-x-6">
                    <a 
                      href="https://www.instagram.com/pixelsphere.creatives/" 
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/pixelspherecreatives/" 
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label="Follow us on LinkedIn"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://web.facebook.com/people/PixelSphere-Creatives/pfbid0B6rspCn3TZcKihRrx2KwjyQ9UsFSDkoErGH9SpySwX4i68BH2J1195s4j5HG7W4Dl/" 
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    <a 
                      href="https://x.com/PixelsphereC" 
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label="Follow us on Twitter"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </AnimatedSection>

        {/* Newsletter Subscription Component */}
        <AnimatedSection>
          <BlogNewsletter />
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  return [
    { slug: 'digital-marketing-career' },
    { slug: 'custom-web-design-vs-templates' }, // Updated slug
    { slug: 'migrating-to-linear' },
    { slug: 'building-api-stack' },
    { slug: 'bill-walsh-leadership-lessons' },
    { slug: 'pm-mental-models' },
    { slug: 'what-is-wireframing' },
    { slug: 'how-collaboration-makes-us-better-designers' },
    { slug: 'top-10-javascript-frameworks' },
    { slug: 'creating-better-cx-community' }
  ]
}
