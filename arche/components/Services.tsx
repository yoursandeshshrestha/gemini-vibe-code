import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section className="relative bg-alabaster py-32 px-6 overflow-hidden">
      
      {/* Background Image Reveal */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30">
        <AnimatePresence mode="wait">
          {hoveredService && (
            <motion.img
              key={hoveredService}
              src={SERVICES.find(s => s.id === hoveredService)?.image}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-2/3 h-2/3 object-cover grayscale"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-sm font-sans uppercase tracking-widest mb-12 text-graphite/50">Our Expertise</h2>
        
        <div className="flex flex-col">
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group border-t border-softgrey py-10 cursor-pointer flex flex-col md:flex-row justify-between items-baseline md:items-center relative transition-colors"
            >
              <div className="flex items-center gap-6">
                <span className="font-sans text-xs text-clay opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">0{SERVICES.indexOf(service) + 1}</span>
                <h3 className="text-4xl md:text-6xl font-serif text-graphite group-hover:translate-x-4 transition-transform duration-500">{service.title}</h3>
              </div>
              
              <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-4">
                 <p className="text-sm font-sans max-w-xs text-right hidden md:block">{service.description}</p>
                 <div className="w-10 h-10 rounded-full border border-graphite flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                 </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-softgrey w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
