import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { CAR_MODELS } from '../constants';
import { Wind } from 'lucide-react';

export const Models: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Translate X based on vertical scroll progress of the container
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-phantom-grey">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 px-20">
          {CAR_MODELS.map((car) => (
            <div key={car.id} className="relative h-[80vh] w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center group">
              
              {/* Holographic Grid Background */}
              <div className="absolute inset-0 border border-steel-blue/20 bg-[linear-gradient(rgba(58,78,92,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(58,78,92,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Car Image with Wind Tunnel Effect */}
              <div className="relative z-10">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-auto object-cover grayscale brightness-75 group-hover:brightness-100 transition-all duration-500"
                />
                {/* Simulated Wind Lines (SVG) */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-500" viewBox="0 0 800 400">
                   <motion.path d="M0 100 Q 400 50 800 120" fill="none" stroke="#00F0FF" strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                   />
                   <motion.path d="M0 200 Q 400 180 800 220" fill="none" stroke="#00F0FF" strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                   />
                </svg>
              </div>

              {/* Info Overlay */}
              <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end z-20">
                <div>
                  <h3 className="font-display text-4xl md:text-6xl text-white mb-2">{car.name}</h3>
                  <p className="font-mono text-electric-cyan text-sm tracking-widest">{car.tagline}</p>
                </div>
                
                <div className="flex gap-8 mt-4 md:mt-0 font-mono text-sm">
                  <div className="flex flex-col">
                    <span className="text-gray-500">ACCEL_0-60</span>
                    <span className="text-white text-xl">{car.specs.acceleration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">RANGE_EPA</span>
                    <span className="text-white text-xl">{car.specs.range}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500">POWER_HP</span>
                    <span className="text-white text-xl">{car.specs.hp}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};