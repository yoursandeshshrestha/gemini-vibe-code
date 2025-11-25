import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const IMAGES = [
  "https://picsum.photos/600/800?grayscale",
  "https://picsum.photos/600/400?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/600/500?grayscale",
  "https://picsum.photos/600/700?grayscale",
  "https://picsum.photos/600/450?grayscale",
];

export const Circuit: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const unsubscribe = scrollY.on("change", () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 150);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <section className="min-h-screen bg-asphalt py-24 px-4">
       <div className="max-w-7xl mx-auto mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-white text-right">THE CIRCUIT <br/><span className="text-gray-600 text-2xl">LIFESTYLE & TELEMETRY</span></h2>
       </div>

       <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative overflow-hidden break-inside-avoid"
            >
              {/* Image with Motion Blur Filter applied dynamically via style/class logic could go here, 
                  but simple inline style transition is performant */}
              <div 
                className="transition-[filter] duration-100 ease-out"
                style={{ filter: isScrolling ? 'blur(2px) brightness(1.2)' : 'blur(0px) brightness(1)' }}
              >
                <img src={src} alt={`Lifestyle ${i}`} className="w-full h-auto object-cover" />
              </div>
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="font-mono text-electric-cyan text-xs">IMG_SEQ_{1024 + i}</span>
              </div>
            </motion.div>
          ))}
       </div>
    </section>
  );
};