"use client";
import { EdtechNavbar, EdtechFooter, CourseHeroSection, BestCourseSection, AllCoursesSection } from "@/components/edtech-platform";
import PageTransition from "@/components/PageTransition";

export default function EdtechCoursesPage() {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <EdtechNavbar />
        <main className="flex-grow">
          <CourseHeroSection />
          <AllCoursesSection />
        </main>
        <EdtechFooter />
      </div>
    </PageTransition>
  );
}