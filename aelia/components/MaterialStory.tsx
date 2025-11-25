import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MATERIALS } from '../constants';
import { SlatReveal } from './ui/SlatReveal';
import { Search } from 'lucide-react';

export const MaterialStory: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h3 className="text-espresso font-serif text-4xl mb-2">Material Transparency</h3>
            <p className="text-espresso/60 font-sans max-w-md">Inspect the grain. We have nothing to hide.</p>
          </div>
          <div className="hidden md:block text-right">
             <p className="font-mono text-[10px] text-brass uppercase tracking-wider">Hover to Magnify</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MATERIALS.map((material, index) => (
            <MaterialCard key={material.id} material={material} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MaterialCard: React.FC<{ material: typeof MATERIALS[0], index: number }> = ({ material, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="group">
      <SlatReveal delay={index * 0.2}>
        <div 
          ref={cardRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          className="relative aspect-[4/5] overflow-hidden bg-taupe cursor-none"
        >
          {/* Base Image */}
          <img 
            src={material.image} 
            alt={material.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none mix-blend-overlay" />

          {/* Magnifying Glass Effect */}
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: mousePos.x - 80, // Center the 160px circle
                  y: mousePos.y - 80
                }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="absolute top-0 left-0 w-40 h-40 rounded-full border-2 border-brass bg-white shadow-2xl overflow-hidden z-20 pointer-events-none"
              >
                <div 
                  className="absolute w-[300%] h-[300%] max-w-none"
                  style={{
                    left: -(mousePos.x * 3) + 80,
                    top: -(mousePos.y * 3) + 80,
                    width: '300%', // Zoom level
                    height: '300%'
                  }}
                >
                   <img 
                    src={material.image} 
                    alt="Zoomed Texture"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Crosshair inside loupe */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <Search size={16} className="text-brass" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fallback cursor hint if JS fails or for touch */}
          <div className="md:hidden absolute bottom-4 right-4 bg-white/80 p-2 rounded-full backdrop-blur-sm">
             <Search size={16} className="text-espresso" />
          </div>
        </div>
      </SlatReveal>
      
      <div className="mt-6 border-t border-taupe pt-4">
        <div className="flex justify-between items-baseline">
            <h4 className="font-serif text-xl text-espresso">{material.name}</h4>
            <span className="font-mono text-[10px] text-brass uppercase">{material.id}</span>
        </div>
        <p className="font-sans text-sm text-espresso/70 mt-2">{material.description}</p>
        <div className="mt-2 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-forest" />
            <span className="font-mono text-[10px] text-espresso/50 uppercase tracking-wider">{material.origin}</span>
        </div>
      </div>
    </div>
  );
};
