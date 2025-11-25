import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INGREDIENTS } from '../constants';
import { X, Droplet } from 'lucide-react';

export const Ingredients: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedIngredient = INGREDIENTS.find(i => i.id === selectedId);

  return (
    <section className="min-h-screen bg-white py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="mb-16 border-b border-[#F0F0F0] pb-6">
          <h3 className="font-serif text-3xl md:text-4xl text-[#4A4A4A]">Pure Elements</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
          {INGREDIENTS.map((ingredient) => (
            <motion.div
              key={ingredient.id}
              layoutId={`card-${ingredient.id}`}
              onClick={() => setSelectedId(ingredient.id)}
              className="relative w-full h-full cursor-none group overflow-hidden bg-[#FAFAFA]"
            >
              <img 
                src={ingredient.image} 
                alt={ingredient.name} 
                className="w-full h-full object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/10 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-8 left-8">
                <h4 className="font-serif text-2xl text-white mix-blend-difference">{ingredient.name}</h4>
              </div>

              {/* Custom Cursor Hint */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay">
                <Droplet size={48} color="white" strokeWidth={1} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedIngredient && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
             {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-white/90 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-5xl h-[80vh] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                className="absolute top-6 right-6 z-20 text-white mix-blend-difference hover:rotate-90 transition-transform duration-300"
              >
                <X size={32} strokeWidth={1} />
              </button>

              <div className="w-full md:w-2/3 h-1/2 md:h-full relative">
                 <img 
                  src={selectedIngredient.image} 
                  alt={selectedIngredient.name} 
                  className="w-full h-full object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="w-full md:w-1/3 h-1/2 md:h-full p-12 flex flex-col justify-center bg-white">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-4xl mb-4 text-[#4A4A4A]"
                >
                  {selectedIngredient.name}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-sans text-[#4A4A4A]/60 italic mb-8"
                >
                  {selectedIngredient.description}
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-[#F0F0F0] pt-8"
                >
                  <h5 className="font-sans text-xs uppercase tracking-widest text-[#4A4A4A] mb-2">Clinical Benefit</h5>
                  <p className="font-serif text-xl text-[#4A4A4A]">{selectedIngredient.benefit}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};