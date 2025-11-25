import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const wipeX = useTransform(scrollYProgress, [0, 0.5], ["-100%", "0%"]);

  return (
    <section ref={containerRef} className="h-[150vh] relative bg-forge-black overflow-hidden flex flex-col">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Noise/Video Overlay */}
        <motion.div 
          style={{ opacity: videoOpacity }}
          className="absolute inset-0 w-full h-full z-0"
        >
           {/* Simulate Video with Image for Demo */}
           <img 
            src="https://picsum.photos/id/1063/1920/1080" 
            alt="Sparks flying" 
            className="w-full h-full object-cover filter brightness-50 contrast-125 grayscale"
           />
           <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        </motion.div>

        {/* The Stamp Text */}
        <motion.div 
          style={{ scale: textScale, opacity: textOpacity }}
          className="relative z-10 text-center"
        >
          <h1 className="text-[15vw] leading-none font-serif font-bold text-forge-black stroke-text tracking-tighter opacity-90 select-none">
            FORGE
          </h1>
          <p className="font-display text-forge-brass text-2xl tracking-[0.5em] mt-4 uppercase">
            Est. 1892
          </p>
        </motion.div>

        {/* Wipe Effect */}
        <motion.div 
          style={{ x: wipeX }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-forge-copper/20 to-transparent z-20 pointer-events-none w-[200%]"
        />
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-forge-white/50 text-xs font-sans uppercase tracking-widest">Scroll to Ignite</span>
          <div className="w-[1px] h-12 bg-forge-white/30"></div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;