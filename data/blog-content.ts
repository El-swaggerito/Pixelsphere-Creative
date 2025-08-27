export interface BlogSection {
  heading?: string
  content?: string
  list?: string[]
  image?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  featuredImage: string
  author: {
    name: string
    avatar: string
  }
  publishDate: string
  readTime: number
  introduction: string
  sections: BlogSection[]
  conclusion?: string
}

export const blogContent: BlogPost[] = [
  {
    slug: "digital-marketing-career",
    title: "How to Start a Career in Digital Marketing",
    excerpt: "Digital marketing has quickly become one of the most in-demand fields in Canada and around the world. Learn how to start your journey in this fast-moving industry.",
    featuredImage: "/images/digitalmarketing/hero.png",
    author: {
      name: "PixelSphere Team",
      avatar: "/images/favicon.png"
    },
    publishDate: "August 25, 2025",
    readTime: 8,
    introduction: "Digital marketing has quickly become one of the most in-demand fields in Canada and around the world. From social media marketing to SEO, email campaigns to content creation, businesses today need skilled marketers who can navigate the online space. If you've been thinking about starting a career in digital marketing, the good news is - you don't need to follow a traditional path. With the right mindset, skills, and resources, you can carve your own way into this fast-moving industry.",
    sections: [
      {
        content: "Online businesses are popping out like Canadians in summer after experiencing 7 months of winter. Brands are craving for visibility now more than ever as the social media platforms' algorithms are hard to keep up with - hence the need for digital marketing experts. Looking forward to start a career in the digital marketing field, here are some simple steps you can take to begin your journey.",
        image: "/images/digitalmarketing/1.png"
      },
      {
        heading: "Step 1: Understand What Digital Marketing Really Is",
        content: "Digital marketing goes far beyond running ads. It's about creating strategies to connect businesses with their audience online. It involves areas such as:",
        list: [
          "SEO (Search Engine Optimization) - improving visibility and ranking on Google.",
          "Content Marketing - creating valuable posts, videos, and blogs.",
          "Social Media Marketing - building brand presence on social media platforms like Instagram, LinkedIn, Facebook, X (FKA Twitter) and TikTok.",
          "Email Marketing - building and nurturing audiences directly in their electronic mail.",
          "Paid Advertising on (PPC) - running campaigns to drive quick and measurable results."
        ],
        image: "/images/digitalmarketing/2.png"
      },
      {
        heading: "Step 2: Learn the Foundations",
        content: "The beauty of digital marketing is that you don't need a formal degree to get started. There are plenty of online courses, free guides, and certifications available. Platforms like Grow with Google, HubSpot Academy, Coursera, Udemy and YouTube offer excellent entry-level resources. Take advantage of such platforms, they have FREE and paid resources. Platforms like Udemy and Coursera also have intermediate and advanced courses on Digital Marketing."
      },
      {
        heading: "Step 3: Get Hands-On Experience",
        content: "Nothing beats learning by doing. Start small:",
        list: [
          "Create a blog and experiment with SEO. You can start by building templates using the free trials availabe on platforms such as: Squarespace and Wordpress etc.",
          "Manage social media accounts for a local business or community group.",
          "Lookout for internships with organizations that hire remotely or in-person and learn from experts.",
          "Run a small ad campaign with a limited budget to see how targeting works."
        ],
        image: "/images/digitalmarketing/3.png"
      },
      {
        // Create a separate section for the follow-up content
        content: "These real-life experiments will help you build a portfolio and stand out when applying for jobs."
      },
      {
        heading: "Step 4: Stay Updated",
        content: "Digital marketing changes quickly. Trends shift, algorithms update and consumer behaviour evolves. Follow reputable industry blogs, educative social media platforms (PixelSphere Instagram Handle), listen to podcasts and join online communities to stay ahead. Networking, both online and offline is key to finding opportunities and learning from others."
      },
      {
        heading: "Step 5: Build Your Personal Brand",
        content: "Employers and clients alike want to see how you market yourself. Treat your own social media or LinkedIn as your personal case study. Share insights, test new strategies, and show your understanding of the field. Your personal brand becomes proof of your skills and can be an added advantage during interviews - gives you an edge over other candidates during employment interviews, as it can serve as your portfolio projects.",
        image: "/images/digitalmarketing/4.png"
      }
    ],
    conclusion: "Starting a career in digital marketing doesn't happen overnight, but with curiosity, consistency, and creativity, you'll find yourself making real impact in the industry.\n\nWe at PixelSphere Creatives, we've helped countless brands navigate the digital space with strategies that actually work. Whether you're just starting your career or looking to level up, surrounding yourself with the right mentors and creative partners makes all the difference.\n\nIf you're ready to dive deeper into digital marketing or want to learn from our professionals, we'd love to connect with you. Follow us on our socials and stay connected as we post a lot of educating and insightful digital marketing tips."
  },
  // Add more blog posts here using the same structure
  {
    slug: "custom-web-design-vs-templates",
    title: "Custom Web Design vs Templates: The Smarter Choice for Your Brand",
    excerpt: "When it comes to building a website, every business owner faces the same question: Should I invest in a custom web design or stick with ready-made templates? Your decision directly impacts how your brand is perceived online.",
    featuredImage: "/images/customvstemplate/hero.png",
    author: {
      name: "PixelSphere Team",
      avatar: "/images/favicon.png"
    },
    publishDate: "August 25, 2025",
    readTime: 6,
    introduction: "When it comes to building a website, every business owner faces the same question: 'Should I invest in a custom web design or stick with ready-made templates?' Both options have their pros and cons, but your decision directly impacts how your brand is perceived online. In today's competitive digital landscape, where attention spans are shorter than a Canadian winter day, making the right choice is critical.",
    sections: [
      {
        content: "Template websites are popular because they're budget-friendly and quick to set up. Platforms like WordPress, Squarespace and Shopify offer countless designs that are ready to go with just a few clicks.",
        image: "/images/customvstemplate/1.png"
      },
      {
        heading: "Template Websites",
        content: "Templates are popular because they're budget-friendly and quick to set up. Platforms like WordPress, Squarespace and Shopify offer countless designs that are ready to go with just a few clicks.\n\nSpeaking against the fact that it's affordable, it also has a fast launch and doesn't require coding experience. However, the cons outweighs the pros. Template websites are often faced with problems such as; limited customization, overused designs and they make it difficult to scale as your business grows. One other common issue associated with template websites is the responsiveness to different viewports (screen sizes) i.e your site might look fine on desktop but break across mobile and tablets screen sizes.",
        image: "/images/customvstemplate/2.png"
      },
      {
        content: "The reality is that while templates can get you online fast, they often come with identical layouts that dozens or even hundreds of other businesses are already using. That doesn't exactly scream originality, uniqueness or professionalism."
      },
      {
        heading: "The Power of Custom Web Design",
        content: "Custom web design, on the other hand, is built around your brand from the ground up. It's not about squeezing your identity into a pre-made layout - it's about creating a digital experience that reflects your story, values and target audience needs.\n\nThough it doesn't come cheap, generally custom web designs are expensive and they take time to build (longer development timeline). Nonetheless, these attributes are worth it in the long run. Custom web design or development are not only unique to your brand, they are also scalable, have flexible features, easily optimized for performance and search engine.",
        image: "/images/customvstemplate/3.png"
      },
      {
        content: "Think of custom web design as commissioning a tailored suit versus buying one off the rack. A tailored suit not only fits better - it feels better and makes a statement about your professionalism. The same is true for your website and this also speaks on your brand itself. A brand with a custom web design reflects on its brand quality. A brand with a template website on the otherhand might be seen as inferior"
      },
      {
        heading: "Which Is the Smarter Choice for Your Brand?",
        content: "If you're launching a side hustle or testing a new product, templates might be enough for now. However, if you're focused on building a strong brand presence - whether it's a growing local shop in Toronto, a service-based business in Vancouver or an e-commerce brand in Calgary - custom web design offers long-term value.\n\nYour website is often your first impression, and in business, first impressions count. Investing in custom design gives you an edge: authenticity, adaptability and a site built for your exact goals.",
        image: "/images/customvstemplate/4.png"
      }
    ],
    conclusion: "Finally, your website isn't just a digital placeholder - it's your brand's home base. While template website may save money upfront, custom web design is the smarter choice for businesses that want to stand out, grow, earn trust online, and become a leading brand name.\n\nThis is where we come in. At PixelSphere Creatives, we focus on crafting custom websites that truly reflect your brand's identity. We also help Canadian businesses turn clicks into lasting relationships, gain more visibility and rank higher with our on-page SEO expertise.\n\nReady to attract more customers online? Reach out to us today to build a custom website for your brand."
  },
  {
    slug: "build-professional-website",
    title: "Build a Professional Website",
    excerpt: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    featuredImage: "/images/blog-office-workspace.png",
    author: {
      name: "Mariana Astorino",
      avatar: "/images/Avatar.png"
    },
    publishDate: "January 20, 2024",
    readTime: 5,
    introduction: "Digital marketing has quickly become one of the most in-demand fields in Canada and around the world. From social media marketing to SEO, email campaigns to content creation, businesses today need skilled marketers who can navigate the online space.",
    sections: [
      {
        heading: "Getting Started",
        content: "This is placeholder content that follows the same structure as the digital marketing post. All blog posts will use this standardized format until individual content is created.",
        image: "/images/digitalmarketing/1.png"
      }
    ],
    conclusion: "This standardized content structure ensures consistency across all blog posts while allowing for easy updates when new content is added."
  }
  // Continue with other blog posts...
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogContent.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogContent
}