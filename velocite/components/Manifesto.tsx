import React from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';

export const Manifesto: React.FC = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewX = useTransform(smoothVelocity, [-2000, 2000], [-30, 30]);
  
  // Color shift logic based on viewport position (simplified approximation via scroll)
  const textColor = useTransform(scrollY, [800, 1400], ["#FFFFFF", "#00F0FF"]);

  return (
    <section className="min-h-screen bg-asphalt flex items-center justify-center overflow-hidden py-24">
      <div className="w-full px-4">
        <motion.div style={{ skewX }} className="w-full">
          <motion.h2 
            style={{ color: textColor }}
            className="font-display text-5xl md:text-8xl lg:text-9xl font-bold leading-tight uppercase text-center transition-colors duration-300"
          >
            Silence is the<br />
            new sound<br />
            of speed.
          </motion.h2>
        </motion.div>
        
        <div className="mt-12 flex justify-between items-end max-w-6xl mx-auto border-t border-steel-blue pt-4">
          <p className="font-mono text-xs text-gray-400 max-w-xs">
            / MANIFESTO_V1.0 <br/>
            WE DO NOT BREAK THE SOUND BARRIER. WE ERASE IT.
          </p>
          <div className="font-display text-4xl text-steel-blue opacity-20">01</div>
        </div>
      </div>
    </section>
  );
};