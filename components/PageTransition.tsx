"use client"
import { motion, AnimatePresence, easeIn, easeOut } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react';

// Default animation variants
const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: easeIn } },
};

interface PageTransitionProps {
  children: React.ReactNode;
  customVariants?: typeof variants;
  className?: string;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  customVariants,
  className,
}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={customVariants || variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
        style={{ minHeight: '100vh' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 