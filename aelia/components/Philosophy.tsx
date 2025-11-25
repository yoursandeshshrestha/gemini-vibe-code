import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const words = "Crafted to outlive the trends. Designed to acquire character. True luxury is not about the newness of the object, but the story it gathers with time.".split(" ");

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            // Use a specific Hook call for each word to create the staggered fill effect
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const color = useTransform(scrollYProgress, [start, end], ["#D9D3CC", "#4A3730"]);
            
            return (
              <motion.span
                key={i}
                style={{ color }}
                className="transition-colors duration-75"
              >
                {word}
              </motion.span>
            );
          })}
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="w-16 h-[1px] bg-brass mx-auto mb-4" />
          <p className="font-mono text-xs text-forest tracking-widest uppercase">The AELIA Philosophy</p>
        </motion.div>
      </div>
    </section>
  );
};
