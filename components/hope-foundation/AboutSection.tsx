"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ImpactStat {
  number: string;
  label: string;
  icon: React.ComponentType<any>;
}

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  impactStats?: ImpactStat[];
  testimonials?: Testimonial[];
  backgroundColor?: string;
  className?: string;
}

const defaultImpactStats: ImpactStat[] = [
  {
    number: "50,000+",
    label: "Lives Impacted",
    icon: Heart,
  },
  {
    number: "25",
    label: "Communities Served",
    icon: Users,
  },
  {
    number: "15",
    label: "Countries Reached",
    icon: Globe,
  },
  {
    number: "100+",
    label: "Projects Completed",
    icon: Award,
  },
];

const defaultTestimonials: Testimonial[] = [
  {
    quote:
      "Hope Foundation changed our entire community. The education program gave our children a future we never thought possible.",
    author: "Maria Santos",
    location: "Guatemala",
    image: "/images/hopefoundation-project/about-img-1.jpg.png",
  },
  {
    quote:
      "The clean water project brought life back to our village. We can't thank Hope Foundation enough for their dedication.",
    author: "James Okoye",
    location: "Nigeria",
    image: "/images/hopefoundation-project/about-img-2.jpg.png",
  },
];

export default function AboutSection({
  title = "About Hope Foundation",
  subtitle = "Making a Difference",
  description = "We are dedicated to creating positive change in communities worldwide through sustainable development programs, education initiatives, and humanitarian aid.",
  impactStats = defaultImpactStats,
  testimonials = defaultTestimonials,
  backgroundColor = "white",
  className = "",
}: AboutSectionProps) {
  return (
    <AnimatedSection>
      <div className="overflow-hidden">
      <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Images */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Main Image Container */}
                  <div className="relative">
                    {/* Large Main Image */}
                    <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="/images/hopefoundation-project/about-img-2.jpg.png"
                        alt="Hope Foundation Community Impact"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Smaller Overlapping Image */}
                    <motion.div
                      className="absolute -top-8 -left-8 w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Image
                        src="/images/hopefoundation-project/about-img-1.jpg.png"
                        alt="Community Children"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right Column - Content */}
                <motion.div
                  className="lg:pl-8"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Section Tag */}
                  <motion.div
                    className="inline-block mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <span
                      className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                      style={{ fontFamily: "Movement, sans-serif" }}
                    >
                      ABOUT US
                    </span>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h2
                    className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    TO SEE COMMUNITIES
                    <br />
                    FLOURISH
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-gray-600 leading-relaxed mb-8"
                    style={{ fontFamily: "Movement, sans-serif" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    We are a grassroots-driven organization dedicated to
                    transforming lives in marginalized communities through
                    practical, sustainable programs. Founded in 2025, our team
                    is passionate about addressing inequality, promoting
                    education, and empowering women and youth.
                  </motion.p>

                  {/* Values List */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                  >
                    {[
                      "Compassion",
                      "Transparency",
                      "Collaboration",
                      "Respect for human dignity",
                    ].map((value, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                      >
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-gray-900"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span
                          className="text-gray-700 font-medium"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
          </div>
    </AnimatedSection>
  );
}