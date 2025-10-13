"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CourseCard = ({ 
    image = "default-course.png",
  title = "Untitled Course",
  instructor = "Determined-Poitras", 
  weeks = 2, 
  students = 156, 
  price = 29.0, 
  free = true,
  slug = ""
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="relative h-48 w-full">
        <Image
          src={`/images/edtech-project/${image}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-600 mb-1">by {instructor}</p>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">{weeks}Weeks</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="#4CAF50"/>
            </svg>
            <span className="text-sm text-gray-600">{students} Students</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-800">${price.toFixed(1)}</span>
            {free && <span className="text-green-500 font-medium">Free</span>}
          </div>
          <a href={`/edtech-platform/courses/${slug}`} className="text-sm font-medium text-gray-700 hover:text-[#2E7D32]">View Details</a>
        </div>
      </div>
    </div>
  );
};

const AllCoursesSection = () => {
  const courses = [
    {
      image: "course1.png",
      title: "English Language",
      instructor: "Melissa Garcia",
      weeks: 8,
      students: 156,
      price: 0,
      free: true,
      slug: "english-language"
    },
    {
      image: "course2.png",
      title: "Mathematics",
      instructor: "David Chen",
      weeks: 10,
      students: 124,
      price: 49.99,
      free: false,
      slug: "mathematics"
    },
    {
      image: "course3.png",
      title: "Science",
      instructor: "Sarah Johnson",
      weeks: 12,
      students: 178,
      price: 59.99,
      free: false,
      slug: "science"
    },
    {
      image: "course4.png",
      title: "History",
      instructor: "Robert Williams",
      weeks: 10,
      students: 145,
      price: 0,
      free: true,
      slug: "history"
    },
    {
      image: "course5.png",
      title: "Computer Science",
      instructor: "Priya Sharma",
      weeks: 14,
      students: 210,
      price: 69.99,
      free: false,
      slug: "computer-science"
    },
    {
      image: "course6.png",
      title: "Art and Design",
      instructor: "Marcus Lee",
      weeks: 10,
      students: 132,
      price: 54.99,
      free: false,
      slug: "art-and-design"
    }
  ];

  return (
    <section id="all-courses" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">All Our Courses</h2>
            <p className="text-gray-600">Explore our Popular Courses</p>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-100 transition-colors">
            Filter
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CourseCard 
                image={course.image}
                title={course.title}
                instructor={course.instructor}
                weeks={course.weeks}
                students={course.students}
                price={course.price}
                free={course.free}
                slug={course.slug}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.button
            className="bg-[#2E7D32] text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 hover:bg-opacity-90 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AllCoursesSection;