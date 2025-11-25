import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  { id: '01', title: 'Architectural Lighting', description: 'Transforming built environments into dynamic canvases using projection mapping and smart LEDs.', patternType: 'grid' },
  { id: '02', title: 'Event Visuals', description: 'Live, audio-reactive visual performances that synchronize with soundscapes for immersive experiences.', patternType: 'waves' },
  { id: '03', title: 'Brand Experiences', description: 'Interactive installations that tell your story through movement, light, and user participation.', patternType: 'particles' }
];

const Services: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-32 px-6 md:px-20 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
         <h2 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-12">Our Expertise</h2>
         
         <div className="flex flex-col">
            {services.map((service) => (
               <div 
                 key={service.id} 
                 className="relative border-t border-gray-200 py-12 group cursor-pointer interactive-target"
                 onMouseEnter={() => setHovered(service.id)}
                 onMouseLeave={() => setHovered(null)}
               >
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between relative z-10 mix-blend-multiply">
                      <span className="text-sm font-bold text-electric-blue mb-2 md:mb-0 md:w-24">
                          {service.id}
                      </span>
                      <h3 className={`text-4xl md:text-6xl font-heading font-bold transition-all duration-300 ${hovered === service.id ? 'tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-radiant-pink' : 'text-dynamic-grey'}`}>
                          {service.title}
                      </h3>
                      <div className="hidden md:block w-64" /> {/* Spacer */}
                  </div>

                  {/* Description Reveal */}
                  <AnimatePresence>
                    {hovered === service.id && (
                        <motion.div 
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="overflow-hidden md:ml-24 mt-4 max-w-xl"
                        >
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Refraction/Pattern Background Effect */}
                  <motion.div 
                     className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white -z-10 origin-left"
                     initial={{ scaleX: 0 }}
                     animate={{ scaleX: hovered === service.id ? 1 : 0 }}
                     transition={{ duration: 0.4, ease: "circOut" }}
                  />
                  
                  {/* Subtle Light Leak */}
                  {hovered === service.id && (
                      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-electric-blue/5 to-transparent pointer-events-none blur-3xl" />
                  )}
               </div>
            ))}
            <div className="border-t border-gray-200" />
         </div>
      </div>
    </section>
  );
};

export default Services;
