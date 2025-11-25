import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

export const UGCGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]); // Parallax effect

  return (
    <section ref={containerRef} className="py-32 px-4 overflow-hidden">
      <div className="text-center mb-16">
        <h3 className="text-espresso font-serif text-3xl">Worn By You</h3>
        <p className="font-mono text-xs text-brass mt-2 uppercase tracking-widest">#AELIAARCHIVE</p>
      </div>

      <motion.div 
        style={{ y }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4"
      >
        {TESTIMONIALS.map((item, index) => (
           <TiltCard key={item.id} item={item} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

const TiltCard: React.FC<{ item: typeof TESTIMONIALS[0], index: number }> = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - left) / width - 0.5;
    const yPos = (event.clientY - top) / height - 0.5;
    
    x.set(xPos * 10); // Rotate Y axis
    y.set(yPos * -10); // Rotate X axis (inverted)
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: mouseY,
        rotateY: mouseX,
        transformStyle: "preserve-3d"
      }}
      className={`relative bg-white p-4 shadow-lg border border-taupe/20 ${index % 2 === 0 ? 'mt-0' : 'lg:mt-12'}`} // Staggered layout
    >
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="aspect-[3/4] overflow-hidden mb-4 bg-oatmeal"
      >
        <img 
          src={item.image} 
          alt={`Worn by ${item.author}`} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div style={{ transform: "translateZ(10px)" }}>
        <p className="font-serif text-lg text-espresso italic">"{item.text}"</p>
        <div className="mt-4 flex justify-between items-center border-t border-taupe/30 pt-3">
          <span className="font-sans text-xs font-bold text-espresso">{item.author}</span>
          <span className="font-mono text-[10px] text-forest uppercase">{item.location}</span>
        </div>
      </div>
    </motion.div>
  );
};
