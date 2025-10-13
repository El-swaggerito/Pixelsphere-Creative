// Course data types
export interface CourseReview {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CourseModule {
  title: string;
  lessons: string[];
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  instructor: string;
  instructorImage?: string;
  rating: number;
  reviews: number;
  price: number;
  free?: boolean;
  level: string;
  language: string;
  duration: string;
  weeks?: number;
  students: number;
  certificate: boolean;
  description: string;
  whatYouWillLearn: string[];
  curriculum: CourseModule[];
  studentFeedback: CourseReview[];
  ratingBreakdown?: {
    five: number;
    four: number;
    three: number;
    two: number;
    one: number;
  };
}

// Course data
export const courses: Course[] = [
  {
    slug: "english-language",
    title: "English Language",
    subtitle: "8-12 Grades",
    image: "course-1.png",
    instructor: "Melissa Garcia",
    instructorImage: "/images/Avatar (1).png",
    rating: 4.8,
    reviews: 123,
    price: 0,
    free: true,
    level: "Beginner to Intermediate",
    language: "English",
    duration: "8 weeks",
    weeks: 8,
    students: 156,
    certificate: true,
    description: "Master the basics of the English Language with this 8-week course. Students will cover English Language as a core subject in the curriculum. The aim of this course is to enhance students' understanding of basic grammar, pronunciation, vocabulary, and communication skills.",
    whatYouWillLearn: [
      "Develop basic conversational skills",
      "Pronounce words correctly with improved diction",
      "Build vocabulary for everyday situations",
      "Advanced grammar and sentence construction",
      "Formal and informal writing styles",
      "Public speaking and presentation skills"
    ],
    curriculum: [
      {
        title: "Introduction to English",
        lessons: [
          "Basic Greetings and Introductions",
          "Alphabet and Pronunciation",
          "Numbers and Counting"
        ]
      },
      {
        title: "Grammar Fundamentals",
        lessons: [
          "Nouns and Articles",
          "Verbs and Tenses",
          "Adjectives and Adverbs"
        ]
      }
    ],
    studentFeedback: [
      {
        name: "Eva Preciado",
        avatar: "/images/Avatar (2).png",
        rating: 5,
        date: "2 days ago",
        comment: "I've been struggling with English for years. This course was exactly what I needed to build my confidence and improve my skills. The teacher was so patient and helpful."
      },
      {
        name: "James Russell",
        avatar: "/images/Avatar (3).png",
        rating: 4,
        date: "1 week ago",
        comment: "Great course for anyone looking to improve their English skills. The lessons are well-structured and the practice exercises really help reinforce what you've learned. I only wish there were more advanced topics covered."
      },
      {
        name: "Priya Natarajan",
        avatar: "/images/Avatar.png",
        rating: 5,
        date: "3 weeks ago",
        comment: "Clear explanations and lots of speaking practice. My confidence in everyday conversations improved dramatically by week 4."
      },
      {
        name: "Ahmed Saleh",
        avatar: "/images/Avatar (7).png",
        rating: 3,
        date: "5 days ago",
        comment: "Solid introduction with useful exercises. I found the grammar sections a bit fast, but the review materials helped."
      },
      {
        name: "Chloe Park",
        avatar: "/images/Avatar (4).png",
        rating: 4,
        date: "1 month ago",
        comment: "Loved the pronunciation drills and the writing tips. Would love a module focused on business English."
      },
      {
        name: "Mateo Alvarez",
        avatar: "/images/Avatar (1).png",
        rating: 5,
        date: "2 months ago",
        comment: "Engaging instructor and practical content. The speaking assignments felt like real scenarios and were fun to do."
      }
    ],
    ratingBreakdown: {
      five: 70,
      four: 20,
      three: 7,
      two: 2,
      one: 1
    }
  },
  {
    slug: "mathematics",
    title: "Mathematics",
    subtitle: "8-12 Grades",
    image: "course-2.png",
    instructor: "Robert Johnson",
    instructorImage: "/images/Avatar (4).png",
    rating: 4.6,
    reviews: 98,
    price: 49.99,
    level: "Intermediate",
    language: "English",
    duration: "10 weeks",
    weeks: 10,
    students: 132,
    certificate: true,
    description: "Develop strong mathematical skills with our comprehensive Mathematics course. From algebra to calculus, this course covers essential mathematical concepts that form the foundation for advanced studies in science, engineering, and other technical fields.",
    whatYouWillLearn: [
      "Master algebraic equations and expressions",
      "Understand geometric principles and theorems",
      "Develop skills in statistical analysis",
      "Apply mathematical concepts to real-world problems",
      "Prepare for standardized tests and college-level mathematics",
      "Build logical reasoning and analytical thinking"
    ],
    curriculum: [
      {
        title: "Algebra Fundamentals",
        lessons: [
          "Linear Equations and Inequalities",
          "Quadratic Equations",
          "Functions and Graphs"
        ]
      },
      {
        title: "Geometry",
        lessons: [
          "Points, Lines, and Angles",
          "Triangles and Polygons",
          "Circles and Spheres"
        ]
      }
    ],
    studentFeedback: [
      {
        name: "Michael Chen",
        avatar: "/images/Avatar (5).png",
        rating: 5,
        date: "3 days ago",
        comment: "This mathematics course has transformed my understanding of the subject. The instructor breaks down complex concepts into manageable parts, making it easy to follow along and build confidence."
      },
      {
        name: "Sarah Williams",
        avatar: "/images/Avatar (6).png",
        rating: 4,
        date: "2 weeks ago",
        comment: "Very thorough coverage of mathematical concepts. The practice problems were particularly helpful in reinforcing the material. Would recommend to anyone struggling with math."
      },
      {
        name: "Olivia Brown",
        avatar: "/images/Avatar (2).png",
        rating: 5,
        date: "1 week ago",
        comment: "Excellent pacing and clarity. The algebra section finally clicked for me after years of confusion."
      },
      {
        name: "Daniel Silva",
        avatar: "/images/Avatar (3).png",
        rating: 4,
        date: "4 days ago",
        comment: "Strong examples and well-structured lessons. Geometry proofs were challenging but rewarding."
      },
      {
        name: "Hannah Patel",
        avatar: "/images/Avatar (1).png",
        rating: 3,
        date: "2 weeks ago",
        comment: "Helpful course overall. Some sections moved quickly, but the extra practice sets were a lifesaver."
      }
    ],
    ratingBreakdown: {
      five: 65,
      four: 25,
      three: 8,
      two: 1,
      one: 1
    }
  },
  {
    slug: "science",
    title: "Science",
    subtitle: "8-12 Grades",
    image: "course-3.png",
    instructor: "Dr. Emily Chen",
    instructorImage: "/images/Avatar (7).png",
    rating: 4.9,
    reviews: 145,
    price: 59.99,
    level: "Beginner to Advanced",
    language: "English",
    duration: "12 weeks",
    weeks: 12,
    students: 178,
    certificate: true,
    description: "Explore the fascinating world of science through this comprehensive course covering physics, chemistry, and biology. Students will engage in theoretical learning and practical experiments to develop a deep understanding of scientific principles and their applications.",
    whatYouWillLearn: [
      "Understand fundamental principles of physics, chemistry, and biology",
      "Conduct scientific experiments and analyze results",
      "Apply the scientific method to solve problems",
      "Recognize the interconnections between different scientific disciplines",
      "Develop critical thinking and analytical skills",
      "Understand the impact of science on society and the environment"
    ],
    curriculum: [
      {
        title: "Physics Fundamentals",
        lessons: [
          "Motion and Forces",
          "Energy and Work",
          "Electricity and Magnetism"
        ]
      },
      {
        title: "Chemistry Basics",
        lessons: [
          "Atomic Structure",
          "Chemical Bonding",
          "Reactions and Equations"
        ]
      },
      {
        title: "Biology Essentials",
        lessons: [
          "Cell Structure and Function",
          "Genetics and Inheritance",
          "Ecosystems and Environment"
        ]
      }
    ],
    studentFeedback: [
      {
        name: "David Kim",
        avatar: "/images/Avatar (9).png",
        rating: 5,
        date: "1 week ago",
        comment: "This science course is exceptional! The instructor's passion for the subject is evident, and the way complex concepts are explained makes learning enjoyable and accessible."
      },
      {
        name: "Lisa Thompson",
        avatar: "/images/Avatar.png",
        rating: 5,
        date: "3 weeks ago",
        comment: "I've always struggled with science, but this course changed everything. The practical experiments and visual demonstrations helped me understand concepts I've struggled with for years."
      },
      {
        name: "Nora Evans",
        avatar: "/images/Avatar (6).png",
        rating: 4,
        date: "5 days ago",
        comment: "Great balance of theory and hands-on activities. The biology unit was especially engaging."
      },
      {
        name: "Miguel Santos",
        avatar: "/images/Avatar (5).png",
        rating: 5,
        date: "2 weeks ago",
        comment: "Clear labs, detailed notes, and excellent support from the instructor. Highly recommend."
      },
      {
        name: "Priyanka Sharma",
        avatar: "/images/Avatar (2).png",
        rating: 4,
        date: "1 month ago",
        comment: "Physics explanations were spot on. Would love additional optional readings for chemistry."
      }
    ],
    ratingBreakdown: {
      five: 80,
      four: 15,
      three: 3,
      two: 1,
      one: 1
    }
  },
  {
    slug: "history",
    title: "History",
    subtitle: "8-12 Grades",
    image: "course-4.png",
    instructor: "Professor Thomas Wilson",
    instructorImage: "/images/Avatar (3).png",
    rating: 4.7,
    reviews: 112,
    price: 39.99,
    level: "All Levels",
    language: "English",
    duration: "9 weeks",
    weeks: 9,
    students: 145,
    certificate: true,
    description: "Journey through time with our comprehensive History course. From ancient civilizations to modern events, students will develop a deep understanding of historical events, their causes, and their impact on the world today.",
    whatYouWillLearn: [
      "Analyze key historical events and their significance",
      "Understand the development of civilizations across different time periods",
      "Evaluate primary and secondary historical sources",
      "Recognize patterns and connections in historical developments",
      "Develop critical thinking through historical analysis",
      "Understand how history shapes current global issues"
    ],
    curriculum: [
      {
        title: "Ancient Civilizations",
        lessons: [
          "Mesopotamia and Egypt",
          "Greece and Rome",
          "Early Asian Civilizations"
        ]
      },
      {
        title: "Medieval Period",
        lessons: [
          "European Feudalism",
          "Islamic Golden Age",
          "Byzantine Empire"
        ]
      },
      {
        title: "Modern History",
        lessons: [
          "Renaissance and Enlightenment",
          "Industrial Revolution",
          "World Wars and Their Impact"
        ]
      }
    ],
    studentFeedback: [
      {
        name: "Jennifer Lopez",
        avatar: "/images/Avatar (6).png",
        rating: 5,
        date: "5 days ago",
        comment: "This history course brings the past to life! The instructor's storytelling ability makes historical events engaging and memorable. I've gained a new appreciation for how history shapes our world."
      },
      {
        name: "Mark Robinson",
        avatar: "/images/Avatar (5).png",
        rating: 4,
        date: "2 weeks ago",
        comment: "Very informative and well-structured course. The timeline approach helps connect events across different regions and time periods. Would have liked more interactive elements."
      },
      {
        name: "Aisha Rahman",
        avatar: "/images/Avatar (3).png",
        rating: 5,
        date: "3 weeks ago",
        comment: "Fantastic storytelling and context. The modern history unit connected dots I never noticed before."
      },
      {
        name: "Tom Bennett",
        avatar: "/images/Avatar (4).png",
        rating: 3,
        date: "1 week ago",
        comment: "Solid overview with good sources. Some sections felt dense, but the summaries helped."
      },
      {
        name: "Elena Petrova",
        avatar: "/images/Avatar (1).png",
        rating: 4,
        date: "2 months ago",
        comment: "Loved the primary source analysis. Would enjoy a deeper dive into Eastern European history."
      }
    ],
    ratingBreakdown: {
      five: 75,
      four: 15,
      three: 7,
      two: 2,
      one: 1
    }
  },
  {
    slug: "computer-science",
    title: "Computer Science",
    subtitle: "8-12 Grades",
    image: "course-2.png",
    instructor: "Alex Morgan",
    instructorImage: "/images/Avatar (4).png",
    rating: 4.9,
    reviews: 156,
    price: 69.99,
    level: "Beginner to Intermediate",
    language: "English",
    duration: "14 weeks",
    weeks: 14,
    students: 210,
    certificate: true,
    description: "Dive into the world of computing with our Computer Science course. Students will learn programming fundamentals, algorithms, data structures, and basic web development, providing a solid foundation for further studies or careers in technology.",
    whatYouWillLearn: [
      "Master programming fundamentals using Python",
      "Understand algorithms and data structures",
      "Develop problem-solving skills through coding challenges",
      "Create simple web applications using HTML, CSS, and JavaScript",
      "Learn database basics and data management",
      "Understand computer systems and networks"
    ],
    curriculum: [
      {
        title: "Programming Fundamentals",
        lessons: [
          "Introduction to Python",
          "Variables and Data Types",
          "Control Structures and Functions"
        ]
      },
      {
        title: "Algorithms and Data Structures",
        lessons: [
          "Arrays and Lists",
          "Searching and Sorting",
          "Introduction to Object-Oriented Programming"
        ]
      },
      {
        title: "Web Development Basics",
        lessons: [
          "HTML and CSS Fundamentals",
          "JavaScript Basics",
          "Building Simple Web Applications"
        ]
      }
    ],
    studentFeedback: [
      {
        name: "Ryan Zhang",
        avatar: "/images/Avatar (9).png",
        rating: 5,
        date: "1 week ago",
        comment: "This course is perfect for beginners! I had zero programming experience, but the step-by-step approach made learning to code accessible and even fun. Now I'm building my own projects!"
      },
      {
        name: "Sophia Garcia",
        avatar: "/images/Avatar (2).png",
        rating: 5,
        date: "3 weeks ago",
        comment: "Excellent introduction to computer science concepts. The instructor explains complex topics clearly, and the hands-on projects reinforce learning. This course has inspired me to pursue further studies in CS."
      },
      {
        name: "Luke Harrison",
        avatar: "/images/Avatar (6).png",
        rating: 4,
        date: "4 days ago",
        comment: "Solid foundations with practical exercises. The data structures section was particularly well explained."
      },
      {
        name: "Maya Kapoor",
        avatar: "/images/Avatar (5).png",
        rating: 5,
        date: "2 weeks ago",
        comment: "Loved the projects—great mix of Python and web basics. The instructor’s feedback was very helpful."
      },
      {
        name: "Ben Nguyen",
        avatar: "/images/Avatar (3).png",
        rating: 4,
        date: "1 month ago",
        comment: "Clear pace and relevant examples. Would appreciate an optional unit on Git workflows."
      }
    ],
    ratingBreakdown: {
      five: 85,
      four: 10,
      three: 3,
      two: 1,
      one: 1
    }
  },
  {
    slug: "art-and-design",
    title: "Art and Design",
    subtitle: "8-12 Grades",
    image: "course-2.png",
    instructor: "Isabella Martinez",
    instructorImage: "/images/Avatar (1).png",
    rating: 4.8,
    reviews: 134,
    price: 49.99,
    level: "All Levels",
    language: "English",
    duration: "10 weeks",
    weeks: 10,
    students: 168,
    certificate: true,
    description: "Unleash your creativity with our Art and Design course. Students will explore various artistic mediums, design principles, and creative techniques while developing their unique artistic voice and portfolio of work.",
    whatYouWillLearn: [
      "Master fundamental drawing and painting techniques",
      "Understand color theory and composition",
      "Explore different artistic mediums and styles",
      "Apply design principles to create effective visual communications",
      "Develop digital art and design skills",
      "Create a portfolio showcasing your artistic development"
    ],
    curriculum: [
      {
        title: "Drawing Fundamentals",
        lessons: [
          "Line, Shape, and Form",
          "Perspective and Proportion",
          "Shading and Texture"
        ]
      },
      {
        title: "Color and Composition",
        lessons: [
          "Color Theory and Mixing",
          "Compositional Principles",
          "Visual Storytelling"
        ]
      },
      {
        title: "Digital Art and Design",
        lessons: [
          "Introduction to Digital Tools",
          "Vector vs. Raster Graphics",
          "Digital Illustration Techniques"
        ]
      }
    ],
    studentFeedback: [
      {
        name: "Emma Wilson",
        avatar: "/images/Avatar (6).png",
        rating: 5,
        date: "4 days ago",
        comment: "This course has transformed my artistic abilities! The instructor provides clear demonstrations and personalized feedback that has helped me grow as an artist. Highly recommended for anyone looking to develop their creative skills."
      },
      {
        name: "Jason Lee",
        avatar: "/images/Avatar (5).png",
        rating: 4,
        date: "2 weeks ago",
        comment: "Great introduction to various art techniques and mediums. The course strikes a good balance between theory and practice. I particularly enjoyed the digital art section and would have liked even more content on that topic."
      },
      {
        name: "Zoe Carter",
        avatar: "/images/Avatar (2).png",
        rating: 5,
        date: "1 week ago",
        comment: "Inspiring lessons and practical critiques. The color theory module changed how I approach my work."
      },
      {
        name: "Marco Rossi",
        avatar: "/images/Avatar (4).png",
        rating: 4,
        date: "3 weeks ago",
        comment: "Strong curriculum spanning traditional and digital. More advanced digital painting would be a great addition."
      },
      {
        name: "Li Wei",
        avatar: "/images/Avatar (1).png",
        rating: 5,
        date: "1 month ago",
        comment: "Well-structured and motivating. The portfolio-building tips were extremely useful."
      }
    ],
    ratingBreakdown: {
      five: 75,
      four: 20,
      three: 3,
      two: 1,
      one: 1
    }
  }
];

// Helper function to get course by slug
export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find(course => course.slug === slug);
}