import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MagneticButton = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const element = ref.current;
    if (element) {
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      x.set((e.clientX - centerX) * 0.3); // Magnetic pull strength
      y.set((e.clientY - centerY) * 0.3);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-alabaster pointer-events-none">
      <div className="text-sm font-sans tracking-widest pointer-events-auto">
        EST. 2024
      </div>
      
      <div className="flex gap-4 pointer-events-auto">
        <MagneticButton className="h-12 w-12 rounded-full border border-alabaster/30 backdrop-blur-sm flex items-center justify-center hover:bg-alabaster hover:text-graphite transition-colors duration-300">
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className="w-4 h-px bg-current"></span>
            <span className="w-4 h-px bg-current"></span>
          </div>
        </MagneticButton>
      </div>
    </nav>
  );
};

export default Navigation;