import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end center"]
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[80vh] flex items-center justify-center px-6 py-24 bg-alabaster">
      <div className="relative max-w-6xl mx-auto">
        {/* Outlined Layer */}
        <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-transparent stroke-text leading-tight tracking-tight">
          We build spaces that breathe with the rhythm of nature.
        </h2>

        {/* Filled Layer (Masked) */}
        <motion.div 
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-graphite leading-tight tracking-tight whitespace-normal">
            We build spaces that breathe with the rhythm of nature.
          </h2>
        </motion.div>

        <div className="mt-12 flex justify-end">
          <p className="max-w-md text-sm md:text-base font-sans text-graphite/70 leading-relaxed">
            Our approach blends the brutal honesty of raw materials with the ephemeral qualities of light and shadow. Architecture is not static; it is a living entity.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #D1D1D1;
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
