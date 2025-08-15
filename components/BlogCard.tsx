"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface BlogPostProps {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  slug: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPostProps;
  index?: number;
  className?: string;
}

export default function BlogCard({ post, index = 0, className = "" }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={className}
    >
      <Link href={`/blog/${post.slug}`} className="block group">
        <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <CardContent className="p-4 sm:p-6">
            <Badge className={`${post.categoryColor} mb-2 sm:mb-3 text-xs sm:text-sm`}>
              {post.category}
            </Badge>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center group-hover:text-orange-500 transition-colors duration-300">
              {post.title}
              <motion.div
                className="ml-2"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover:text-orange-500 transition-colors duration-300" />
              </motion.div>
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 group-hover:text-orange-400 transition-colors duration-300 text-sm sm:text-base">
              {post.description}
            </p>
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full mr-2 sm:mr-3 overflow-hidden">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors duration-300">
                  {post.author.name}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 group-hover:text-orange-400 transition-colors duration-300">
                  {post.author.date}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
