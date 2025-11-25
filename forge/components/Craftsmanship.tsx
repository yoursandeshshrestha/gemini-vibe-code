import React, { useState } from 'react';
import { motion } from 'framer-motion';

const STEPS = [
  { id: 1, title: "Heat & Strike", desc: "Raw ingots are heated to 1200°C and struck by a 5-ton drop hammer." },
  { id: 2, title: "Rough Grinding", desc: "Edges are deburred and the primary shape is refined by hand." },
  { id: 3, title: "Seasoning", desc: "Layers of flax oil are baked on for 8 hours to create the initial patina." },
  { id: 4, title: "Final Polish", desc: "Handles are buffed and brass rivets are set with precision." }
];

const Craftsmanship: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-32 bg-forge-black relative min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto w-full px-6 relative z-10">
        <h2 className="text-forge-white/20 font-display text-9xl absolute -top-20 -left-10 select-none pointer-events-none">
          PROCESS
        </h2>
        
        <div className="space-y-0">
          {STEPS.map((step) => (
            <motion.div
              key={step.id}
              className="group relative border-b border-forge-pencil/30 py-12 cursor-default transition-colors duration-500 hover:bg-white/5"
              onMouseEnter={() => setActiveStep(step.id)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div className="flex items-baseline justify-between relative z-10">
                <span className="text-forge-copper font-display text-xl mr-8">0{step.id}</span>
                <h3 className="text-4xl md:text-6xl font-serif text-forge-white group-hover:translate-x-4 transition-transform duration-500">
                  {step.title}
                </h3>
                <div className="hidden md:block w-32 h-[1px] bg-forge-copper/50"></div>
              </div>
              
              <motion.p 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                    height: activeStep === step.id ? 'auto' : 0, 
                    opacity: activeStep === step.id ? 1 : 0 
                }}
                className="text-forge-white/70 font-sans max-w-lg ml-14 mt-4 overflow-hidden"
              >
                {step.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Ambience (Simulated Video Loop based on step) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 transition-opacity duration-1000">
         <img 
            src={`https://picsum.photos/id/${activeStep ? 100 + activeStep : 100}/1920/1080`} 
            className="w-full h-full object-cover grayscale"
            alt="Process Background"
         />
         <div className="absolute inset-0 bg-black/60"></div>
      </div>
    </section>
  );
};

export default Craftsmanship;