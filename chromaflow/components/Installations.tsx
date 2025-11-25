import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play } from 'lucide-react';
import { InstallationProject } from '../types';

const projects: InstallationProject[] = [
  {
    id: '1',
    title: 'Nebula Void',
    image: 'https://picsum.photos/1920/1080?random=1',
    description: 'Immersive light chamber.'
  },
  {
    id: '2',
    title: 'Sonic Prism',
    image: 'https://picsum.photos/1920/1080?random=2',
    description: 'Audio-reactive sculpture.'
  },
  {
    id: '3',
    title: 'Datastream',
    image: 'https://picsum.photos/1920/1080?random=3',
    description: 'Real-time network visualization.'
  },
  {
    id: '4',
    title: 'Solar Wind',
    image: 'https://picsum.photos/1920/1080?random=4',
    description: 'Outdoor kinetic projection.'
  }
];

const Installations: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <div className="absolute top-10 left-10 z-20">
          <h3 className="text-xs font-bold tracking-widest text-dynamic-grey uppercase border-b border-black pb-2">Selected Works</h3>
        </div>

        <motion.div style={{ x }} className="flex gap-0">
          {projects.map((project) => (
            <div key={project.id} className="group relative w-screen h-screen flex-shrink-0 flex items-center justify-center overflow-hidden bg-gray-100">
              
              {/* Image with Filter Trick */}
              <div className="relative w-full h-full overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  // Apply SVG filter on hover via class or style (using backdrop-filter hack or similar)
                  // For this demo, we use a subtle scale and opacity shift as React-friendly filter simulation
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Simulated Ripple Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay bg-gradient-to-tr from-electric-blue/20 to-radiant-pink/20" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-20 left-10 md:left-20 text-white z-10">
                 <motion.h2 
                   className="text-6xl md:text-8xl font-heading font-bold mb-4 opacity-80"
                   initial={{ y: 20, opacity: 0 }}
                   whileInView={{ y: 0, opacity: 0.9 }}
                   transition={{ duration: 0.8 }}
                 >
                   {project.title}
                 </motion.h2>
                 <div className="flex items-center gap-4">
                    <button className="interactive-target w-16 h-16 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                        <Play size={24} fill="currentColor" className="ml-1" />
                    </button>
                    <span className="text-lg font-light tracking-wide">{project.description}</span>
                 </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Installations;
