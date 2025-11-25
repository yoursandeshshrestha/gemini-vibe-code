import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_COMPONENTS } from '../constants';
import { Disc, Battery, Zap } from 'lucide-react';

export const TechLab: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-black py-24 px-4 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(20,20,20,1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,20,20,1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto h-full flex flex-col">
        <div className="mb-16 border-b border-white/10 pb-4 flex justify-between items-end">
          <h2 className="font-display text-4xl md:text-6xl text-white">TECH LAB</h2>
          <span className="font-mono text-signal-red animate-pulse">CLASSIFIED_ACCESS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECH_COMPONENTS.map((comp) => (
            <motion.div
              key={comp.id}
              className="relative aspect-square border border-white/10 bg-white/5 rounded-lg overflow-hidden group cursor-crosshair"
              onHoverStart={() => setActiveId(comp.id)}
              onHoverEnd={() => setActiveId(null)}
              onClick={() => setActiveId(comp.id)} // For mobile
            >
              {/* Wireframe / Icon State (Default) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                 {comp.id === 'battery' && <Battery className="w-24 h-24 text-steel-blue stroke-1" />}
                 {comp.id === 'motor' && <Zap className="w-24 h-24 text-steel-blue stroke-1" />}
                 {comp.id === 'chassis' && <Disc className="w-24 h-24 text-steel-blue stroke-1" />}
                 <h3 className="mt-6 font-display text-xl text-gray-400">{comp.name}</h3>
              </div>

              {/* Realistic / Active State (Hover) */}
              <div className={`absolute inset-0 bg-phantom-grey flex flex-col justify-between p-6 transition-opacity duration-300 ${activeId === comp.id ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex justify-between items-start">
                   <div className="w-2 h-2 bg-electric-cyan" />
                   <span className="font-mono text-[10px] text-electric-cyan">ID: {comp.id.toUpperCase()}</span>
                </div>
                
                {/* Simulated 3D Render Placeholder */}
                <div className="flex-1 flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 shadow-[0_0_30px_rgba(0,240,255,0.2)] animate-pulse border border-white/20"></div>
                </div>

                <div>
                   <h3 className="font-display text-xl text-white mb-2">{comp.name}</h3>
                   <p className="font-sans text-xs text-gray-400 mb-4">{comp.description}</p>
                   <ul className="space-y-1">
                     {comp.specs.map((s, i) => (
                       <li key={i} className="font-mono text-[10px] text-steel-blue flex justify-between">
                         <span>{s.split(':')[0]}</span>
                         <span className="text-white">{s.split(':')[1]}</span>
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
              
              {/* Target Reticle Overlay */}
              <div className="absolute inset-0 pointer-events-none border border-electric-cyan/0 group-hover:border-electric-cyan/50 transition-all duration-300">
                 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};