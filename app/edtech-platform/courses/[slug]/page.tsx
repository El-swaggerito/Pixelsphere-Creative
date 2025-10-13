import PageTransition from "@/components/PageTransition";
import { EdtechNavbar, EdtechFooter } from "@/components/edtech-platform";
import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import CourseDetailClient from "@/components/edtech-platform/CourseDetailClient";

interface CoursePageProps {
  params: { slug: string };
}

export default function CourseDetailPage({ params }: CoursePageProps) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) {
    notFound();
  }

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-white">
        <EdtechNavbar />
        <main className="flex-grow">
          <CourseDetailClient course={course!} />
        </main>
        <EdtechFooter />
      </div>
    </PageTransition>
  );
}

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}