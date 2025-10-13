"use client";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Star, Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from "lucide-react";
import type { Course } from "@/data/courses";

function StarRating({ value, max = 5, size = 16 }: { value: number; max?: number; size?: number }) {
  const fullStars = Math.floor(value);
  const hasHalf = value % 1 >= 0.5;
  const stars = Array.from({ length: max }).map((_, i) => {
    const filled = i < fullStars || (hasHalf && i === fullStars);
    return (
      <Star
        key={`star-${i}`}
        width={size}
        height={size}
        className={`inline-block ${filled ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    );
  });
  return <div className="flex items-center gap-1">{stars}</div>;
}

function RatingBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-16 text-sm text-gray-700 font-montserrat">{label}</div>
      <div className="flex-1 h-2 bg-gray-200 rounded">
        <div className="h-2 bg-orange-500 rounded" style={{ width: `${percent}%` }} />
      </div>
      <div className="w-10 text-sm text-gray-700 font-montserrat">{percent}%</div>
    </div>
  );
}

function AnimatedBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      className={`${className} motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      {children}
    </div>
  );
}

export default function CourseDetailClient({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum" | "instructor" | "reviews">("overview");
  const [copied, setCopied] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | 5 | 4 | 3 | 2 | 1>("all");
  const imageSrc = useMemo(() => `/images/edtech-project/${course.image}`, [course.image]);
  const priceText = course.free || course.price === 0 ? "Free" : `$${course.price}`;

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = course.title;

  const openShare = (url: string) => {
    if (typeof window === "undefined") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleShare = (platform: "facebook" | "twitter" | "linkedin" | "whatsapp" | "email" | "copy") => {
    const u = encodeURIComponent(shareUrl);
    const t = encodeURIComponent(shareTitle);
    switch (platform) {
      case "facebook":
        openShare(`https://www.facebook.com/sharer/sharer.php?u=${u}&quote=${t}`);
        break;
      case "twitter":
        openShare(`https://twitter.com/intent/tweet?url=${u}&text=${t}`);
        break;
      case "linkedin":
        openShare(`https://www.linkedin.com/sharing/share-offsite/?url=${u}`);
        break;
      case "whatsapp":
        openShare(`https://api.whatsapp.com/send?text=${t}%20${u}`);
        break;
      case "email":
        if (typeof window !== "undefined") {
          window.location.href = `mailto:?subject=${t}&body=${u}`;
        }
        break;
      case "copy":
        if (navigator?.clipboard && typeof window !== "undefined") {
          navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          });
        }
        break;
    }
  };

  return (
    <div>
      {/* Header */}
      <AnimatedBlock className="max-w-6xl mx-auto px-4 pt-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-montserrat">{course.title}</h1>
            <div className="mt-2 flex items-center gap-3">
              {course.instructorImage && (
                <Image src={course.instructorImage} alt={course.instructor} width={28} height={28} className="rounded-full" />
              )}
              <div>
                <p className="text-sm text-gray-900 font-semibold font-montserrat">{course.instructor}</p>
                <p className="text-xs text-gray-500 font-montserrat">Instructor</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <StarRating value={course.rating ?? 0} />
              <span className="text-sm text-gray-700 font-montserrat">{course.rating.toFixed(1)}</span>
              <span className="text-sm text-gray-500 font-montserrat">({course.reviews} reviews)</span>
            </div>
            <p className="mt-1 text-sm text-orange-600 font-montserrat">{priceText}</p>
          </div>
        </div>
      </AnimatedBlock>

      {/* Media + Sidebar */}
      <section className="max-w-6xl mx-auto px-4 mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AnimatedBlock className="relative w-full rounded-lg overflow-hidden border border-gray-200 will-change-transform motion-safe:transition-transform motion-safe:duration-300 hover:scale-[1.01]">
            <Image src={imageSrc} alt={course.title} width={960} height={540} className="w-full h-auto object-cover" />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 bg-white shadow rounded-full flex items-center justify-center motion-safe:transition-transform motion-safe:duration-300 hover:scale-[1.05]">
                <div className="w-0 h-0 border-l-8 border-l-gray-900 border-y-8 border-y-transparent ml-1" />
              </div>
            </div>
          </AnimatedBlock>

          {/* Tabs */}
          <AnimatedBlock className="mt-4">
            <div className="flex items-center gap-4 border-b">
              {[
                { id: "overview", label: "Overview" },
                { id: "curriculum", label: "Curriculum" },
                { id: "instructor", label: "Instructor" },
                { id: "reviews", label: "Reviews" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className={`py-2 text-sm font-montserrat motion-safe:transition-colors motion-safe:duration-200 ${
                    activeTab === t.id ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <AnimatedBlock className="pt-4">
                {/* Description */}
                <h2 className="text-lg font-semibold text-gray-900 font-montserrat">Description</h2>
                <p className="mt-2 text-sm text-gray-700 leading-6 font-montserrat">{course.description}</p>

                {/* What you will learn */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 font-montserrat">What you will learn in this course</h3>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatYouWillLearn?.map((item, idx) => (
                      <div
                        key={`learn-${idx}`}
                        className="rounded-lg border border-gray-200 p-4 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px] hover:shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</div>
                          <p className="text-sm text-gray-800 font-montserrat">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course Rating */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 font-montserrat">Course Rating</h3>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-lg border border-gray-200 p-4 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px] hover:shadow-sm">
                      <div className="text-3xl font-bold text-gray-900 font-montserrat">{course.rating.toFixed(1)}</div>
                      <div className="mt-1"><StarRating value={course.rating ?? 0} /></div>
                      <p className="mt-1 text-xs text-gray-500 font-montserrat">Course Rating</p>
                    </div>
                    <div className="md:col-span-2 rounded-lg border border-gray-200 p-4 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px] hover:shadow-sm">
                      <div className="space-y-2">
                        <RatingBar label="5 star" percent={course.ratingBreakdown?.five ?? 0} />
                        <RatingBar label="4 star" percent={course.ratingBreakdown?.four ?? 0} />
                        <RatingBar label="3 star" percent={course.ratingBreakdown?.three ?? 0} />
                        <RatingBar label="2 star" percent={course.ratingBreakdown?.two ?? 0} />
                        <RatingBar label="1 star" percent={course.ratingBreakdown?.one ?? 0} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Student Feedback */}
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 font-montserrat">Student Feedbacks</h3>
                    <select className="border rounded px-3 py-2 text-sm font-montserrat motion-safe:transition-colors">
                      <option>5 Star Rating</option>
                      <option>4 Star Rating</option>
                      <option>3 Star Rating</option>
                      <option>2 Star Rating</option>
                      <option>1 Star Rating</option>
                    </select>
                  </div>
                  <div className="mt-3 space-y-4">
                    {course.studentFeedback?.map((fb, idx) => (
                      <div
                        key={`fb-${idx}`}
                        className="rounded-lg border border-gray-200 p-4 motion-safe:transition-all motion-safe:duration-300 hover:-translate-y-[1px] hover:shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <Image src={fb.avatar} alt={fb.name} width={36} height={36} className="rounded-full" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-semibold text-gray-900 font-montserrat">{fb.name}</p>
                                <p className="text-xs text-gray-500 font-montserrat">{fb.date}</p>
                              </div>
                              <StarRating value={fb.rating} />
                            </div>
                            <p className="mt-2 text-sm text-gray-700 leading-6 font-montserrat">{fb.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <button className="px-4 py-2 border rounded text-sm font-montserrat motion-safe:transition-colors hover:bg-gray-50">Load More</button>
                  </div>
                </div>
              </AnimatedBlock>
            )}

            {activeTab === "curriculum" && (
              <AnimatedBlock className="pt-4 space-y-4">
                {course.curriculum?.map((m, idx) => (
                  <div
                    key={`mod-${idx}`}
                    className="rounded-lg border border-gray-200 p-4 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px] hover:shadow-sm"
                  >
                    <p className="text-sm font-semibold text-gray-900 font-montserrat">{m.title}</p>
                    <ul className="mt-2 list-disc pl-5 space-y-1">
                      {m.lessons?.map((lesson, i) => (
                        <li key={`ls-${idx}-${i}`} className="text-sm text-gray-700 font-montserrat">{lesson}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AnimatedBlock>
            )}

            {activeTab === "instructor" && (
              <AnimatedBlock className="pt-4">
                <div className="rounded-lg border border-gray-200 p-4 flex items-start gap-4 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px] hover:shadow-sm">
                  {course.instructorImage && (
                    <Image src={course.instructorImage} alt={course.instructor} width={64} height={64} className="rounded-full" />
                  )}
                  <div>
                    <p className="text-base font-semibold text-gray-900 font-montserrat">{course.instructor}</p>
                    <p className="mt-1 text-sm text-gray-700 font-montserrat">{course.subtitle}</p>
                  </div>
                </div>
              </AnimatedBlock>
            )}

            {activeTab === "reviews" && (
              <AnimatedBlock className="pt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 font-montserrat">Student Reviews</h3>
                  <select
                    className="border rounded px-3 py-2 text-sm font-montserrat motion-safe:transition-colors"
                    value={String(reviewFilter)}
                    onChange={(e) => {
                      const val = e.target.value;
                      setReviewFilter(val === "all" ? "all" : (parseInt(val, 10) as 5 | 4 | 3 | 2 | 1));
                    }}
                  >
                    <option value="all">All Ratings</option>
                    <option value="5">5 Star Rating</option>
                    <option value="4">4 Star Rating</option>
                    <option value="3">3 Star Rating</option>
                    <option value="2">2 Star Rating</option>
                    <option value="1">1 Star Rating</option>
                  </select>
                </div>

                <div className="mt-3 space-y-4">
                  {(course.studentFeedback || [])
                    .filter((fb) => (reviewFilter === "all" ? true : fb.rating === reviewFilter))
                    .map((fb, idx) => (
                      <div
                        key={`rev-${idx}`}
                        className="rounded-lg border border-gray-200 p-4 motion-safe:transition-all motion-safe:duration-300 hover:-translate-y-[1px] hover:shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <Image src={fb.avatar} alt={fb.name} width={36} height={36} className="rounded-full" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-semibold text-gray-900 font-montserrat">{fb.name}</p>
                                <p className="text-xs text-gray-500 font-montserrat">{fb.date}</p>
                              </div>
                              <StarRating value={fb.rating} />
                            </div>
                            <p className="mt-2 text-sm text-gray-700 leading-6 font-montserrat">{fb.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-4">
                  <button className="px-4 py-2 border rounded text-sm font-montserrat motion-safe:transition-colors hover:bg-gray-50">Load More</button>
                </div>
              </AnimatedBlock>
            )}
          </AnimatedBlock>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="rounded-lg border border-gray-200 p-4">
            <ul className="space-y-2">
              <li className="flex justify-between text-sm font-montserrat"><span className="text-gray-600">Course Duration</span><span className="text-gray-900">{course.duration}</span></li>
              <li className="flex justify-between text-sm font-montserrat"><span className="text-gray-600">Price</span><span className="text-gray-900">{priceText}</span></li>
              <li className="flex justify-between text-sm font-montserrat"><span className="text-gray-600">Students Enrolled</span><span className="text-gray-900">{course.students}</span></li>
              <li className="flex justify-between text-sm font-montserrat"><span className="text-gray-600">Course Level</span><span className="text-gray-900">{course.level}</span></li>
              <li className="flex justify-between text-sm font-montserrat"><span className="text-gray-600">Course Language</span><span className="text-gray-900">{course.language}</span></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 font-montserrat">This course includes:</h4>
              <ul className="mt-2 space-y-1">
                <li className="text-sm text-gray-700 font-montserrat">Downloadable resources</li>
                <li className="text-sm text-gray-700 font-montserrat">Assignments & quizzes</li>
                <li className="text-sm text-gray-700 font-montserrat">Certificate of completion</li>
                <li className="text-sm text-gray-700 font-montserrat">Access on mobile</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-900 font-montserrat">Share this course:</h4>
              <div className="mt-2 flex gap-2">
                <button
                  aria-label="Share on Facebook"
                  onClick={() => handleShare("facebook")}
                  className="w-9 h-9 rounded bg-blue-600 text-white flex items-center justify-center hover:opacity-90 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px]"
                >
                  <Facebook size={18} />
                </button>
                <button
                  aria-label="Share on Twitter"
                  onClick={() => handleShare("twitter")}
                  className="w-9 h-9 rounded bg-sky-500 text-white flex items-center justify-center hover:opacity-90 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px]"
                >
                  <Twitter size={18} />
                </button>
                <button
                  aria-label="Share on LinkedIn"
                  onClick={() => handleShare("linkedin")}
                  className="w-9 h-9 rounded bg-blue-700 text-white flex items-center justify-center hover:opacity-90 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px]"
                >
                  <Linkedin size={18} />
                </button>
                <button
                  aria-label="Share via Email"
                  onClick={() => handleShare("email")}
                  className="w-9 h-9 rounded bg-gray-800 text-white flex items-center justify-center hover:opacity-90 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px]"
                >
                  <Mail size={18} />
                </button>
                <button
                  aria-label="Copy course link"
                  onClick={() => handleShare("copy")}
                  className="w-9 h-9 rounded border border-gray-300 text-gray-700 flex items-center justify-center hover:bg-gray-50 motion-safe:transition-transform motion-safe:duration-200 hover:-translate-y-[1px]"
                >
                  <LinkIcon size={18} />
                </button>
              </div>
              {copied && (
                <p className="mt-2 text-xs text-green-600 font-montserrat">Link copied to clipboard</p>
              )}
            </div>
          </div>

          {/* Related Courses */}
          <div className="mt-4 rounded-lg border border-gray-200 p-4">
            <h4 className="text-sm font-semibold text-gray-900 font-montserrat">Related Courses</h4>
            <div className="mt-3 space-y-3">
              {/* In a client boundary we receive full courses list in parent; here we can show placeholders or rely on server-rendered parent passing related */}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}