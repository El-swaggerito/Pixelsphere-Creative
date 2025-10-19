import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WorkCTA from "@/components/work-cta";
import FinalCTA from "@/components/final-cta";
import AnimatedSection from "@/components/AnimatedSection";
import PageTransition from "@/components/PageTransition";

export default function ChopifyWorkPage() {
  return (
    <PageTransition>
      <main className="bg-white min-h-screen overflow-hidden scroll-smooth">
        <Header currentPage="portfolio" textColor="black" background="white" />

        {/* Hero */}
        <AnimatedSection>
          <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="font-sora text-center text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-tight tracking-tight font-bold text-[#121212] mb-10">
                <span className="relative inline-block pr-2 align-middle">
                  <span className="relative z-10">Chopify</span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-2 h-[14px] bg-[#F6B3CB] rounded-md"
                  ></span>
                </span>
                <span className="align-middle"> – Home in</span>
                <br className="hidden sm:block" />
                <span className="align-middle">Every Bite.</span>
              </h1>

              {/* Hero media with decorative assets aligned to the image */}
              <div className="relative w-full group" tabIndex={0}>
                {/* Left-top smiley doodle */}
                <Image
                  src="/images/chopify/svg/Face%205.png"
                  alt=""
                  aria-hidden={true}
                  role="presentation"
                  width={80}
                  height={80}
                  className="absolute top-[-80px] left-[8px] sm:top-[-78px] sm:left-[24px] w-[72px] sm:w-[80px] h-auto pointer-events-none will-change-transform motion-safe:animate-float-slow motion-reduce:animate-none z-10"
                />
                {/* Left sparkle doodle (scribble) */}
                <Image
                  src="/images/chopify/svg/Group.png"
                  alt=""
                  aria-hidden={true}
                  role="presentation"
                  width={64}
                  height={64}
                  className="absolute top-[44%] left-[-56px] sm:top-[46%] sm:left-[-72px] w-[56px] sm:w-[64px] h-auto pointer-events-none will-change-transform motion-safe:animate-drift motion-reduce:animate-none z-10"
                />
                {/* Crown at top-right edge */}
                <Image
                  src="/images/chopify/svg/Scribble.png"
                  alt=""
                  aria-hidden={true}
                  role="presentation"
                  width={110}
                  height={72}
                  className="absolute top-[-24px] right-[-24px] sm:top-[-60px] sm:right-[-28px] w-[104px] sm:w-[112px] h-auto pointer-events-none will-change-transform motion-safe:animate-float-tilt motion-reduce:animate-none z-10"
                />
                {/* Right scribble doodle */}
                <Image
                  src="/images/chopify/svg/Scribble.png"
                  alt=""
                  aria-hidden={true}
                  role="presentation"
                  width={110}
                  height={72}
                  className="hidden"
                />

                <Image
                  src="/images/chopify/chopify-hero.png"
                  alt="Chopify hero collage"
                  width={1600}
                  height={900}
                  className="w-full h-auto rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-[#E6D9DC] transition-transform duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#F6B3CB] relative z-0"
                  priority
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Project Overview */}
        <AnimatedSection>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Project Overview
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chopify approached PixelSphere as a new player in the
                  food-tech industry. With no existing visuals or identity, they
                  needed a complete brand foundation to launch confidently into
                  the competitive food-delivery market.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our goal was to craft a bold, modern identity that
                  communicates trust, freshness, and accessibility while staying
                  adaptable across digital and physical platforms.
                </p>
              </div>
              <div>
                <Image
                  src="/images/chopify/project-overview.png"
                  alt="Project overview visuals"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Role / Challenge / Approach */}
        <AnimatedSection>
          <section className="py-6 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Our Role */}
                <div className="relative bg-[#F9E7A9] rounded-[20px] p-7 sm:p-8 shadow-[0_8px_0_#D8C886] ring-4 ring-[#F3E7B5] rotate-[-2.5deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.02] hover:rotate-[-1deg] hover:shadow-[0_12px_0_#D8C886]">
                  <div className="absolute -top-7 left-6 sm:left-8 rotate-[-3deg] px-4 py-2 rounded-md bg-[#5B4633] text-white font-sora text-lg shadow-md">Our Role</div>
                  <Image src="/images/chopify/svg/Group.png" alt="" aria-hidden={true} role="presentation" width={40} height={40} className="absolute top-6 right-6 opacity-90" />
                  <ul className="list-disc pl-6 space-y-4 text-[#1A1A1A] font-sora text-lg">
                    <li>Brand Discovery & Strategy</li>
                    <li>Logo Design & Visual Identity</li>
                    <li>Color Palette & Typography</li>
                    <li>Brand Guidelines</li>
                    <li>Digital Templates</li>
                  </ul>
                </div>

                {/* The Challenge */}
                <div className="relative bg-[#5C3B2A] rounded-[20px] p-7 sm:p-8 text-white shadow-[0_8px_0_#A7D7F5] ring-4 ring-[#BFE5FF] rotate-[2deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.02] hover:rotate-[1deg] hover:shadow-[0_12px_0_#A7D7F5]">
                  <div className="absolute -top-7 left-10 rotate-[-6deg] px-4 py-2 rounded-md bg-[#F6B3CB] text-[#1F1F1F] font-sora text-lg shadow-md">The Challenge</div>
                  <Image src="/images/chopify/svg/Face%205.png" alt="" aria-hidden={true} role="presentation" width={36} height={36} className="absolute top-6 left-6 opacity-90" />
                  <div className="space-y-4 font-sora text-lg leading-relaxed">
                    <p>Chopify had a vision but no established brand assets. They needed:</p>
                    <ul className="list-disc pl-6 space-y-4">
                      <li>A memorable logo.</li>
                      <li>A color system that conveys energy, freshness, and appetite appeal.</li>
                      <li>A visual identity.</li>
                    </ul>
                  </div>
                </div>

                {/* Our Approach */}
                <div className="relative bg-[#F6B3CB] rounded-[20px] p-7 sm:p-8 shadow-[0_8px_0_#E1A1BC] ring-4 ring-[#FFD6E6] rotate-[-1.5deg] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.02] hover:rotate-[-0.5deg] hover:shadow-[0_12px_0_#E1A1BC]">
                  <div className="absolute -top-7 left-8 rotate-[-5deg] px-4 py-2 rounded-md bg-[#FFE990] text-[#1F1F1F] font-sora text-lg shadow-md">Our Approach</div>
                  <Image src="/images/chopify/svg/Group.png" alt="" aria-hidden={true} role="presentation" width={40} height={40} className="absolute top-6 left-6 opacity-90" />
                  <ul className="list-disc pl-6 space-y-4 text-[#1A1A1A] font-sora text-lg">
                    <li>Brand Discovery and Concept Development</li>
                    <li>Design Execution: Delivered a full visual identity: logo, brand colors, type system, iconography, and usage rules.</li>
                    <li>Application of brand design</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Visual Identity */}
        <AnimatedSection>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                The Visual Identity
              </h2>
              <div className="space-y-8">
                <Image
                  src="/images/chopify/visual-identity.png"
                  alt="Logo forms, monochrome and secondary marks"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
                <Image
                  src="/images/chopify/visual-identity-2.png"
                  alt="Color palette and typography blocks"
                  width={1400}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Featured Branding */}
        <AnimatedSection>
          <section className="py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Featured Branding
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/chopify/branding-1.png"
                    alt="Branding showcase 1"
                    width={900}
                    height={900}
                    className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/chopify/branding-2.png"
                    alt="Branding showcase 2"
                    width={900}
                    height={900}
                    className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/chopify/branding-3.png"
                    alt="Branding showcase 3"
                    width={900}
                    height={900}
                    className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/chopify/branding-4.png"
                    alt="Branding showcase 4"
                    width={900}
                    height={900}
                    className="w-full h-auto rounded-lg transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Result */}
        <AnimatedSection>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Result
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <Image
                  src="/images/chopify/result-1.jpg"
                  alt="Result logo forms and lockups"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
                <Image
                  src="/images/chopify/result-2.png"
                  alt="Result application across sign and packaging"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <ul className="space-y-4">
                    <li className="text-gray-700 leading-relaxed">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-3 align-middle" />
                      Consistent brand experience across physical and digital
                      touchpoints.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-3 align-middle" />
                      Memorable mark and palette designed for quick recognition.
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="text-gray-700 leading-relaxed">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3 align-middle" />
                      Clear guidelines enabling scalable rollout and consistent
                      usage.
                    </li>
                    <li className="text-gray-700 leading-relaxed">
                      <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3 align-middle" />
                      Packaging and signage applied with strong visual
                      coherence.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Before / After */}
        <AnimatedSection>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Before */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500 text-white font-bold mr-3">1</span>
                    <h3 className="font-sora text-xl sm:text-2xl font-bold text-gray-900">Before</h3>
                  </div>
                  <div className="space-y-4 text-gray-800 font-sora text-lg leading-relaxed">
                    <p>Chopify’s original logo was simple and playful, but it lacked depth and brand presence.</p>
                    <p>While the pink script font gave it a fun, casual feel, it didn’t fully communicate trust, culture, or the energy needed to stand out in the food‑tech space.</p>
                    <p>With no supporting identity system, the logo felt more like a placeholder than a scalable brand asset.</p>
                  </div>
                </div>
                {/* After */}
                <div>
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-500 text-white font-bold mr-3">2</span>
                    <h3 className="font-sora text-xl sm:text-2xl font-bold text-gray-900">After</h3>
                  </div>
                  <div className="space-y-4 text-gray-800 font-sora text-lg leading-relaxed">
                    <p>PixelSphere transformed Chopify’s identity into a bold, character‑driven brand.</p>
                    <p><span className="font-bold">Logo Evolution:</span> We refined the typography into a stronger, more balanced wordmark while introducing a mascot chef character; friendly, approachable, and instantly memorable.</p>
                    <p><span className="font-bold">Personality:</span> The new design tells a story, not just a name, but a brand with energy, culture, and warmth.</p>
                    <p><span className="font-bold">Scalability:</span> the updated logo adapts across digital and print with clarity.</p>
                    <p><span className="font-bold">Emotional Connection:</span> The mascot adds life and relatability, turning Chopify into a brand customers want to interact with, not just use.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection>
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-sora text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Experience</h2>
              <div className="flex items-start gap-4">
                <span className="relative mt-2 inline-flex w-5 h-5 rounded-full bg-green-500">
                  <span className="absolute left-[6px] top-[6px] w-2 h-2 rounded-full bg-white" />
                </span>
                <p className="text-gray-800 font-sora text-xl sm:text-2xl leading-relaxed">
                  Chopify went from having no clear identity to a vibrant, professional, and scalable brand system. The new logo gives them the credibility to compete with established food-tech players while retaining a unique charm that speaks directly to their audience.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
        {/* CTAs & Footer */}
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
  );
}
