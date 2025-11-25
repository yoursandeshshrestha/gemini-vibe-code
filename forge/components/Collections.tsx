import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { COLLECTIONS } from '../constants';
import { Product } from '../types';

const Collections: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="h-[300vh] bg-forge-black relative">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 pl-[10vw]">
          {COLLECTIONS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Extra space at end */}
          <div className="w-[50vw] shrink-0" />
        </motion.div>
        
        <div className="absolute top-10 left-10 z-20">
          <h3 className="font-display text-forge-white text-4xl tracking-widest border-b border-forge-copper/50 pb-2">
            The Collections
          </h3>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div 
      className="w-[80vw] md:w-[60vw] h-[70vh] shrink-0 flex flex-col md:flex-row items-center justify-center p-8 border-r border-forge-pencil/30 relative group overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
       {/* Heat Map Overlay */}
       <motion.div
        className="pointer-events-none absolute inset-0 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 200px at ${mouseX}px ${mouseY}px, rgba(184, 115, 51, 0.6), transparent 80%)`,
        }}
      />
      
      {/* Dynamic Heat Spot (Visual Glow) */}
      {hovered && (
        <motion.div 
            className="absolute w-64 h-64 rounded-full bg-orange-500/20 blur-3xl pointer-events-none z-0"
            style={{
                left: mouseX,
                top: mouseY,
                x: -128,
                y: -128
            }}
        />
      )}

      <div className="relative z-10 w-full md:w-1/2 flex justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full max-w-md object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
        />
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-4 mt-8 md:mt-0 text-forge-white">
        <h4 className="text-5xl md:text-7xl font-serif">{product.name}</h4>
        <div className="flex items-center gap-4">
          <span className="font-display text-forge-brass text-2xl border px-2 py-1 border-forge-brass">
            {product.weight.toFixed(1)} KG
          </span>
          <span className="font-sans text-sm tracking-wide text-forge-white/60 uppercase">
            {product.material}
          </span>
        </div>
        <p className="font-sans text-forge-white/80 max-w-sm leading-relaxed">
            {product.description}
        </p>
        <button className="mt-8 self-start px-8 py-3 bg-forge-copper text-forge-black font-display text-xl tracking-wider hover:bg-forge-white transition-colors">
            Inspect
        </button>
      </div>
    </div>
  );
};

export default Collections;