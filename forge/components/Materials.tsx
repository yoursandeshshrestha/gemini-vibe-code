import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MATERIALS } from '../constants';
import { Material } from '../types';

const Materials: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-forge-charcoal py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif text-forge-white mb-16 border-l-4 border-forge-copper pl-6">
          Raw Materials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MATERIALS.map((mat) => (
            <motion.div
              layoutId={mat.id}
              key={mat.id}
              onClick={() => setSelectedId(mat.id)}
              className="aspect-square relative group cursor-zoom-in overflow-hidden border border-forge-pencil/50"
            >
              <img 
                src={mat.image} 
                alt={mat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-forge-white font-display text-3xl">{mat.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                {MATERIALS.filter(m => m.id === selectedId).map(item => (
                    <motion.div
                        layoutId={item.id}
                        key={item.id}
                        className="bg-forge-black w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-forge-brass shadow-2xl relative flex flex-col md:flex-row"
                    >
                         <button 
                            onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                            className="absolute top-4 right-4 z-20 text-forge-white hover:text-forge-copper font-display text-2xl"
                        >
                            CLOSE [X]
                        </button>

                        <div className="w-full md:w-1/2 h-64 md:h-auto">
                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
                            <h2 className="text-4xl md:text-5xl font-serif text-forge-white">{item.name}</h2>
                            <div className="grid grid-cols-2 gap-4 border-y border-forge-pencil/50 py-4">
                                <div>
                                    <span className="block text-forge-brass text-xs uppercase tracking-widest">Forging Temp</span>
                                    <span className="font-display text-2xl text-forge-white">{item.temp}</span>
                                </div>
                                <div>
                                    <span className="block text-forge-brass text-xs uppercase tracking-widest">Process</span>
                                    <span className="font-display text-2xl text-forge-white">{item.process}</span>
                                </div>
                            </div>
                            <p className="font-sans text-forge-white/80 leading-relaxed text-lg">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Materials;