import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Color interpolation from Clean Brass -> Aged Patina
  const textColor = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["#B8860B", "#2B2B2B"] 
  );

  // Texture opacity simulates rust/patina appearing
  const textureOpacity = useTransform(scrollYProgress, [0.2, 0.7], [0, 0.8]);

  return (
    <section ref={containerRef} className="min-h-screen py-32 bg-forge-white relative overflow-hidden flex items-center justify-center">
      
      <motion.div 
        className="relative max-w-6xl px-6 text-center z-10 mix-blend-multiply"
        style={{ color: textColor }}
      >
        <h2 className="text-6xl md:text-8xl font-serif font-bold italic leading-tight">
          "We craft tools meant to last <span className="font-black not-italic">generations</span>."
        </h2>
        
        {/* Texture Overlay constrained to text area roughly (visual trick) */}
        <motion.div 
          style={{ opacity: textureOpacity }}
          className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/rust.png')] bg-repeat opacity-50 mix-blend-overlay"
        />
      </motion.div>

      {/* Background grit */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-20 pointer-events-none" />
      
    </section>
  );
};

export default Philosophy;