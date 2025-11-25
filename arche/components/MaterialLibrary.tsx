import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MATERIALS } from '../constants';
import { Material } from '../types';
import { X } from 'lucide-react';

const MaterialLibrary: React.FC = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null);

  return (
    <section className="bg-limestone px-6 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-b border-softgrey pb-8 flex justify-between items-end">
          <h2 className="text-5xl md:text-7xl font-serif text-graphite">Materiality</h2>
          <p className="hidden md:block font-sans text-sm text-graphite/60">Tactile exploration</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MATERIALS.map((material) => (
            <motion.div
              key={material.id}
              layoutId={`material-container-${material.id}`}
              onClick={() => setSelectedMaterial(material)}
              className="relative aspect-square group cursor-pointer overflow-hidden bg-gray-200"
            >
              <motion.img
                layoutId={`material-img-${material.id}`}
                src={material.texture}
                alt={material.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                 <span className="opacity-0 group-hover:opacity-100 text-white font-serif text-4xl transition-opacity duration-300">+</span>
              </div>
              <motion.div 
                layoutId={`material-title-${material.id}`}
                className="absolute bottom-6 left-6 bg-alabaster/90 backdrop-blur-sm px-4 py-2"
              >
                <span className="font-sans text-xs uppercase tracking-widest text-graphite">{material.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMaterial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMaterial(null)}
              className="absolute inset-0 bg-graphite/90 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`material-container-${selectedMaterial.id}`}
              className="relative w-full max-w-5xl h-[80vh] bg-alabaster shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedMaterial(null); }}
                className="absolute top-6 right-6 z-20 p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors"
              >
                <X className="text-white" />
              </button>

              <div className="w-full md:w-2/3 h-1/2 md:h-full relative">
                 <motion.img
                  layoutId={`material-img-${selectedMaterial.id}`}
                  src={selectedMaterial.texture}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/3 p-10 flex flex-col justify-center bg-graphite text-alabaster">
                 <motion.h3 
                   layoutId={`material-title-${selectedMaterial.id}`}
                   className="text-4xl font-serif mb-4"
                 >
                   {selectedMaterial.name}
                 </motion.h3>
                 <div className="w-12 h-px bg-clay mb-6"></div>
                 <p className="font-sans text-sm leading-relaxed text-gray-300 mb-8">
                   {selectedMaterial.description}
                 </p>
                 <div className="mt-auto">
                    <p className="text-xs uppercase tracking-widest text-clay mb-1">Origin</p>
                    <p className="font-serif italic">{selectedMaterial.origin}</p>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MaterialLibrary;
