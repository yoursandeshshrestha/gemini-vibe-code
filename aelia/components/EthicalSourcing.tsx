import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SOURCING_STEPS } from '../constants';

export const EthicalSourcing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-32 px-6 md:px-12 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h3 className="text-espresso font-serif text-4xl md:text-5xl mb-4">The Journey</h3>
          <div className="w-24 h-[1px] bg-brass" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          
          {/* Animated SVG Line connecting steps (Hidden on mobile for simplicity, but could be adapted) */}
          <div className="absolute left-[15px] top-4 bottom-0 w-[2px] md:hidden">
             <div className="w-full h-full bg-taupe/30" />
             <motion.div 
               style={{ scaleY: scrollYProgress, originY: 0 }}
               className="absolute top-0 w-full h-full bg-brass"
             />
          </div>

          <div className="space-y-24 relative z-10">
            {SOURCING_STEPS.map((step, index) => (
              <StepContent key={step.id} step={step} index={index} />
            ))}
          </div>

          <div className="hidden md:block sticky top-32 h-[60vh]">
            {/* Visual Representation Area - Images changing based on scroll position */}
            <VisualStack progress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
};

const StepContent: React.FC<{ step: typeof SOURCING_STEPS[0], index: number }> = ({ step, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ margin: "-20%" }}
      transition={{ duration: 0.6 }}
      className="pl-12 md:pl-0 relative"
    >
      <div className="absolute left-0 md:-left-8 top-1 w-8 h-8 flex items-center justify-center bg-oatmeal border border-brass rounded-full text-brass font-mono text-xs">
        {step.id}
      </div>
      <span className="font-mono text-[10px] text-forest uppercase tracking-widest">{step.location}</span>
      <h4 className="font-serif text-2xl text-espresso mt-2 mb-3">{step.title}</h4>
      <p className="font-sans text-espresso/70 leading-relaxed max-w-sm">{step.description}</p>
    </motion.div>
  );
};

const VisualStack: React.FC<{ progress: any }> = ({ progress }) => {
  // Map progress to active image index
  const activeIndex = useTransform(progress, [0, 0.33, 0.66, 1], [0, 1, 2, 3]);
  const images = [
    "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop", // Farm
    "https://images.unsplash.com/photo-1621255765798-251f24e93096?q=80&w=2069&auto=format&fit=crop", // Tannery (Leather texture)
    "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2009&auto=format&fit=crop", // Atelier
    "https://images.unsplash.com/photo-1473188588951-666fce8e7e68?q=80&w=2174&auto=format&fit=crop"  // You/Lifestyle
  ];

  return (
    <div className="relative w-full h-full rounded-sm overflow-hidden bg-taupe/20 border border-white">
      {images.map((img, i) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(progress, 
          [(i * 0.25) - 0.1, i * 0.25, (i * 0.25) + 0.25], 
          [0, 1, 1] // Simple opacity stack logic
        );
        // Ensure last image stays visible
        const finalOpacity = i === 3 
            // eslint-disable-next-line react-hooks/rules-of-hooks
            ? useTransform(progress, [0.75, 1], [0, 1]) 
            : opacity;

        return (
          <motion.div
            key={i}
            style={{ opacity: i === 0 ? 1 : finalOpacity }} // First image always bottom layer
            className="absolute inset-0"
          >
             <img src={img} alt="" className="w-full h-full object-cover grayscale-[20%] sepia-[10%]" />
             <div className="absolute inset-0 bg-grain opacity-30 mix-blend-overlay" />
          </motion.div>
        )
      })}
    </div>
  );
};
