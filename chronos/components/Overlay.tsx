import React from 'react';
import { Scroll } from '@react-three/drei';

interface SectionProps {
  children: React.ReactNode;
  align?: 'left' | 'right' | 'center';
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, align = 'center', className = '' }) => {
  const alignmentClasses = {
    left: 'items-start text-left pl-10 md:pl-20',
    right: 'items-end text-right pr-10 md:pr-20',
    center: 'items-center text-center',
  };

  return (
    <section className={`h-screen w-full flex flex-col justify-center p-8 ${alignmentClasses[align]} ${className}`}>
      {children}
    </section>
  );
};

export const Overlay: React.FC = () => {
  return (
    <Scroll html>
      <div className="w-screen">
        
        {/* Section 1: Hero */}
        <Section align="center">
          <h1 className="font-mono text-6xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 animate-pulse drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            CHRONOS
          </h1>
          <p className="font-sans text-xl md:text-2xl mt-4 text-cyan-400 tracking-widest opacity-80">
            ARCHITECTURE OF TIME
          </p>
        </Section>

        {/* Section 2: Core Modalities */}
        <Section align="left">
          <div className="max-w-xl backdrop-blur-sm bg-black/30 p-8 border-l-2 border-cyan-500">
            <h2 className="font-mono text-4xl mb-6 text-white glow-text">THE QUANTUM LATTICE</h2>
            <div className="space-y-4 font-sans text-gray-300">
              <p>
                <span className="text-cyan-400 font-bold">01. PREDICTIVE ANALYTICS</span><br/>
                Analyzing temporal patterns to forecast structural necessities.
              </p>
              <p>
                <span className="text-orange-500 font-bold">02. HISTORICAL MAPPING</span><br/>
                Reconstructing lost architectures through data interpolation.
              </p>
              <p>
                <span className="text-purple-400 font-bold">03. SIMULATED FUTURES</span><br/>
                Testing civilization durability against entropy.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 3: Deep Dive */}
        <Section align="center">
           <div className="pointer-events-none">
             <h2 className="font-mono text-5xl md:text-7xl text-white opacity-20 mix-blend-overlay">TEMPORAL VORTEX</h2>
           </div>
        </Section>

        {/* Section 4: Epistemological Engine */}
        <Section align="center">
          <div className="max-w-2xl text-center">
             <h2 className="font-mono text-4xl mb-4 text-white">NEURAL CONSTELLATION</h2>
             <p className="font-sans text-lg text-gray-400 leading-relaxed">
               Our central AI, <span className="text-cyan-400">AEON</span>, processes billions of historical data points per second. 
               Like a digital consciousness, it weaves disparate events into a coherent tapestry of cause and effect.
             </p>
          </div>
        </Section>

        {/* Section 5: The Horizon */}
        <Section align="left">
           <h2 className="font-mono text-4xl mb-2 text-white">THE HORIZON</h2>
           <p className="font-sans text-xl text-cyan-300 max-w-md">
             Where probability meets reality. We visualize the cities of tomorrow, today.
           </p>
        </Section>

        {/* Section 6: Contact */}
        <Section align="center">
          <div className="flex flex-col items-center z-50">
             <h2 className="font-mono text-3xl mb-8 text-gray-400">INITIATE SEQUENCE</h2>
             
             <button 
                className="group relative px-12 py-6 bg-transparent border border-cyan-500 text-cyan-500 font-mono text-xl tracking-widest overflow-hidden transition-all duration-300 hover:bg-cyan-500 hover:text-black focus:outline-none"
                onClick={() => alert("Transmission Sent to CHRONOS Core.")}
             >
                <span className="relative z-10">CONTACT</span>
                <div className="absolute inset-0 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
             </button>

             <div className="mt-12 text-xs font-sans text-gray-600">
               © 2124 CHRONOS TEMPORAL FIRM. ALL TIMELINES RESERVED.
             </div>
          </div>
        </Section>

      </div>
    </Scroll>
  );
};