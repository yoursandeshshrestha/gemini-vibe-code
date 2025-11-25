import React from 'react';
import { motion } from 'framer-motion';

interface SlatRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const SlatReveal: React.FC<SlatRevealProps> = ({ children, className = "", delay = 0 }) => {
  const slats = 5; // Number of slats
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <div className="absolute inset-0 flex pointer-events-none">
        {Array.from({ length: slats }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1], // Custom easing similar to Expo.easeOut
              delay: delay + (i * 0.1)
            }}
            style={{ originY: 0 }}
            className="flex-1 bg-oatmeal h-full"
          />
        ))}
      </div>
    </div>
  );
};
