import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
  { 
    id: 1, 
    step: "01", 
    name: "Cleanse", 
    desc: "Purify with botanical oils", 
    color: "rgba(247, 231, 230, 0.6)", // Pale Blush
    image: "https://picsum.photos/seed/cleanse/400/600"
  },
  { 
    id: 2, 
    step: "02", 
    name: "Treat", 
    desc: "Infuse active hydration", 
    color: "rgba(232, 245, 233, 0.6)", // Mint Dew
    image: "https://picsum.photos/seed/treat/400/600"
  },
  { 
    id: 3, 
    step: "03", 
    name: "Moisturize", 
    desc: "Lock in light and barrier", 
    color: "rgba(240, 240, 240, 0.6)", // Vapor Grey
    image: "https://picsum.photos/seed/moist/400/600"
  },
];

export const Routine: React.FC = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-white relative overflow-hidden">
      
      {/* Background Image Fade */}
      <div className="absolute top-0 right-0 w-1/3 h-full hidden md:block opacity-50 pointer-events-none">
         <AnimatePresence mode="wait">
            {hoveredStep !== null && (
              <motion.img 
                key={hoveredStep}
                src={STEPS.find(s => s.id === hoveredStep)?.image}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover mask-image-linear-gradient"
                style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
              />
            )}
         </AnimatePresence>
      </div>

      <div className="container mx-auto z-10">
        <div className="max-w-2xl">
          {STEPS.map((step) => (
            <motion.div 
              key={step.id}
              className="relative py-12 border-b border-[#F0F0F0] cursor-pointer group"
              onHoverStart={() => setHoveredStep(step.id)}
              onHoverEnd={() => setHoveredStep(null)}
            >
              {/* Bloom Effect */}
              <motion.div 
                className="absolute inset-0 rounded-full blur-[60px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: step.color, transform: 'scale(0.8)' }}
              />

              <div className="flex items-baseline gap-8">
                <span className="font-sans text-sm text-[#4A4A4A]/40">{step.step}</span>
                <h3 className="font-serif text-5xl md:text-7xl text-[#4A4A4A] group-hover:ml-4 transition-all duration-500">{step.name}</h3>
              </div>
              <p className="font-sans text-[#4A4A4A]/60 mt-2 pl-14 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};