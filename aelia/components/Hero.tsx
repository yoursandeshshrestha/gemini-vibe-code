import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Veil animations driven by scroll
  const veilOpacity = useTransform(scrollY, [0, 500], [0.6, 0]);
  const veilY = useTransform(scrollY, [0, 500], ["0%", "100%"]);
  
  // Product scale/focus animation
  const scale = useTransform(scrollY, [0, 500], [1, 1.05]);
  const shadowOpacity = useTransform(scrollY, [0, 300], [0.2, 0.6]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
      
      {/* Background Text Texture (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
        <h1 className="text-[20vw] font-serif font-bold text-espresso">AELIA</h1>
      </div>

      <div className="z-10 text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-espresso font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight"
        >
          The Heritage Carrier
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-brass font-mono text-xs uppercase tracking-[0.3em] mt-4"
        >
          Est. 2024 • Tuscany • Sourced: Vachetta
        </motion.p>
      </div>

      {/* Product Stage */}
      <div className="relative w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
        {/* Shadow */}
        <motion.div 
          style={{ opacity: shadowOpacity }}
          className="absolute bottom-10 w-2/3 h-12 bg-black blur-3xl rounded-[50%]" 
        />
        
        {/* Product Image */}
        <motion.img 
          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Leather Bag"
          style={{ scale }}
          className="relative z-10 w-auto h-[60vh] object-contain drop-shadow-2xl"
        />

        {/* The Veil */}
        <motion.div 
          style={{ opacity: veilOpacity, y: veilY }}
          className="absolute inset-0 bg-oatmeal z-20 pointer-events-none mix-blend-soft-light"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-espresso opacity-60">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-espresso/20 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-espresso"
          />
        </div>
      </motion.div>
    </section>
  );
};
