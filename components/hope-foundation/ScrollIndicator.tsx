"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ScrollIndicatorProps {
  color?: string;
  backgroundColor?: string;
  position?: "top" | "bottom";
  showArrow?: boolean;
}

export default function ScrollIndicator({
  color = "#FBFDAC", // Hope Foundation yellow accent
  backgroundColor = "#131A1B", // Dark background to match Hope Foundation theme
  position = "bottom",
  showArrow = true,
}: ScrollIndicatorProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the page the user has scrolled
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300); // Show after scrolling 300px
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();
    
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`fixed ${position === "top" ? "top-0" : "bottom-8"} right-8 z-50 flex items-center justify-center`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div 
            className="relative cursor-pointer rounded-full shadow-lg"
            onClick={scrollToTop}
            style={{ backgroundColor }}
            aria-label="Scroll to top"
            role="button"
            tabIndex={0}
          >
            {/* Circular progress indicator */}
            <svg 
              className="w-12 h-12"
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke={color}
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - scrollProgress)}`}
                transform="rotate(-90 50 50)"
                style={{ transition: "stroke-dashoffset 0.1s ease-in-out" }}
              />
              {/* Percentage text */}
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
                style={{ fontFamily: "Movement, sans-serif" }}
              >
                {Math.round(scrollProgress * 100)}%
              </text>
            </svg>
            
            {/* Arrow up icon */}
            {showArrow && (
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                initial={{ y: 0 }}
                animate={{ y: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}