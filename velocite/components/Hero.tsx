import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Transform scroll into scale/opacity for the tunnel effect
  const tunnelScale = useTransform(scrollY, [0, 500], [1, 5]);
  const tunnelOpacity = useTransform(scrollY, [0, 300], [0, 1]);
  const textOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  
  return (
    <section ref={containerRef} className="relative h-[200vh] bg-asphalt overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Animated Background Tunnel (Simulated with Gradient) */}
        <motion.div 
          style={{ scale: tunnelScale, opacity: tunnelOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-asphalt to-black z-0"
        />
        
        {/* Speed Lines Overlay */}
        <motion.div 
          style={{ opacity: tunnelOpacity }}
          className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" 
        />

        {/* Headlights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute flex space-x-[400px] z-10"
        >
          <div className="w-64 h-64 rounded-full bg-white blur-[100px] opacity-50"></div>
          <div className="w-64 h-64 rounded-full bg-white blur-[100px] opacity-50"></div>
        </motion.div>

        {/* Brand Name */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="z-20 relative text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: [0, 0.4, 0.8, 0.4, 1], letterSpacing: '0.2em' }}
            transition={{ duration: 1.5, times: [0, 0.2, 0.4, 0.6, 1] }}
            className="font-display text-6xl md:text-9xl font-bold text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
          >
            Velocité
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 1.8, duration: 0.8 }}
             className="mt-4 font-mono text-electric-cyan tracking-widest text-sm"
          >
            SYSTEM INITIALIZED // READY TO LAUNCH
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-gray-500 uppercase">Scroll to Ignite</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-electric-cyan to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};