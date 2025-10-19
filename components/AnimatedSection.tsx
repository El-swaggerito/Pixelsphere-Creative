"use client";
import React, { useRef, useLayoutEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  triggerOnce?: boolean;
  className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  y = 40,
  duration = 1,
  delay = 0,
  triggerOnce = true,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Compute once per prop change (avoids re-creating strings in the effect)
  const toggleActions = useMemo(
    () => (triggerOnce ? "play none none none" : "play reverse play reverse"),
    [triggerOnce]
  );

  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Respect user accessibility preference without altering default behaviour
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set(el, { opacity: 1, y: 0, clearProps: "transform" });
        return;
      }

      gsap.fromTo(
        el,
        { opacity: 0, y, willChange: "transform, opacity" },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
          force3D: true,
          immediateRender: false,
          clearProps: "willChange",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions,
            // Using 'once' communicates intent directly; works alongside toggleActions
            once: triggerOnce,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert(); // kills ScrollTrigger + animations created in this context
    };
  }, [y, duration, delay, toggleActions, triggerOnce]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
