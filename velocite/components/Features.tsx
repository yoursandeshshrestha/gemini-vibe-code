import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-asphalt py-24 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="font-display text-4xl text-white">BLUEPRINTS</h2>
        </div>

        <div className="space-y-2">
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.id}
              className="border border-white/10 bg-phantom-grey overflow-hidden relative"
              onHoverStart={() => setExpandedId(feature.id)}
              onHoverEnd={() => setExpandedId(null)}
              onClick={() => setExpandedId(expandedId === feature.id ? null : feature.id)}
            >
              <div className="p-6 flex justify-between items-center cursor-pointer z-10 relative">
                <h3 className={`font-display text-2xl transition-colors duration-300 ${expandedId === feature.id ? 'text-electric-cyan' : 'text-gray-400'}`}>
                  {feature.title}
                </h3>
                <span className="font-mono text-xs text-gray-500">{feature.id.toUpperCase()} // 00{FEATURES.indexOf(feature) + 1}</span>
              </div>

              <AnimatePresence>
                {expandedId === feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 200, opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="relative bg-black/50"
                  >
                    <div className="absolute inset-0 p-6 flex items-center">
                      <div className="w-1/3 flex justify-center">
                         {/* Animated SVG Icon */}
                         <svg width="64" height="64" viewBox="0 0 24 24" className="stroke-electric-cyan fill-none stroke-[0.5]">
                            <motion.path 
                              d={feature.iconPath}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                            />
                         </svg>
                      </div>
                      <div className="w-2/3 border-l border-white/10 pl-8">
                        <p className="font-sans text-lg text-white mb-4">{feature.description}</p>
                        <button className="text-xs font-mono text-signal-red uppercase hover:underline">View Schematics &gt;</button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Progress Bar Bottom */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-electric-cyan" style={{ width: expandedId === feature.id ? '100%' : '0%', transition: 'width 0.5s ease' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};