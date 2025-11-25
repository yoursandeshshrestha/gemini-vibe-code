import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export const Collection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = containerRef.current!.scrollWidth - window.innerWidth + 100; // +100 for padding

      gsap.to(containerRef.current, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-white overflow-hidden flex items-center relative">
      <div className="absolute top-10 left-10 z-10">
        <h3 className="font-sans text-xs tracking-widest uppercase text-[#4A4A4A]/50">The Collection</h3>
      </div>
      
      <div ref={containerRef} className="flex gap-20 px-20 items-center h-full">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="min-w-[350px] md:min-w-[450px] h-[600px] flex flex-col items-center justify-center group relative">
            <motion.div 
              className="w-full h-[500px] relative overflow-hidden bg-[#FAFAFA]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Liquid Distortion Overlay Simulation */}
              <div className="absolute inset-0 bg-[#E8F5E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:blur-[1px] grayscale-[10%] group-hover:grayscale-0"
              />
            </motion.div>
            
            <div className="mt-8 text-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <h4 className="font-serif text-2xl text-[#4A4A4A]">{product.name}</h4>
              <p className="font-sans text-sm mt-2 text-[#4A4A4A]/70">{product.price}</p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute bottom-20 bg-white/90 backdrop-blur-sm px-6 py-3 shadow-sm"
            >
              <span className="font-sans text-xs tracking-widest uppercase">Quick Add</span>
            </motion.div>
          </div>
        ))}
        {/* Spacer for scroll end */}
        <div className="min-w-[100px]"></div>
      </div>
    </section>
  );
};