import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Activity, Layers, Command } from 'lucide-react';
import { cn } from '../utils/cn';

const CodeLine = ({ text, delay }: { text: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
      className="font-mono text-sm text-green-400 mb-1"
    >
      <span className="text-gray-500 mr-2">$</span>
      {text}
    </motion.div>
  );
};

const DashboardUI = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full h-full bg-white rounded-lg shadow-2xl border border-nexus-silver overflow-hidden flex flex-col"
  >
    {/* Fake Window Header */}
    <div className="h-10 border-b border-nexus-silver flex items-center px-4 space-x-2 bg-nexus-bg">
      <div className="w-3 h-3 rounded-full bg-red-400/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
      <div className="w-3 h-3 rounded-full bg-green-400/80" />
      <div className="ml-4 font-mono text-xs text-nexus-navy/50">nexus_dashboard_v2.0.exe</div>
    </div>
    
    {/* Dashboard Content */}
    <div className="flex-1 p-6 flex gap-6">
      {/* Sidebar */}
      <div className="w-16 flex flex-col items-center gap-6 border-r border-nexus-silver pr-6">
        <div className="p-2 bg-nexus-navy rounded-md text-white"><Command size={20} /></div>
        <div className="p-2 text-nexus-navy/40"><Layers size={20} /></div>
        <div className="p-2 text-nexus-navy/40"><Activity size={20} /></div>
      </div>
      
      {/* Main Area */}
      <div className="flex-1 grid grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
           {/* Chart Placeholder */}
           <div className="h-64 bg-nexus-bg rounded-md border border-nexus-silver p-4 relative overflow-hidden group">
              <div className="absolute inset-x-0 bottom-0 h-32 flex items-end justify-between px-4 pb-4 gap-2 opacity-50">
                {[40, 70, 50, 90, 60, 80, 45, 75, 55, 95].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                    className="w-full bg-nexus-teal rounded-t-sm"
                  />
                ))}
              </div>
              <div className="font-sans font-semibold text-nexus-navy">Real-time Velocity</div>
              <div className="font-mono text-xs text-nexus-navy/60 mt-1">Updates every 50ms</div>
           </div>
           
           <div className="grid grid-cols-2 gap-6">
             <div className="h-32 bg-white border border-nexus-silver rounded-md p-4 shadow-sm">
                <div className="font-mono text-xs text-nexus-navy/60">Active Nodes</div>
                <div className="text-3xl font-bold text-nexus-navy mt-2">1,024</div>
                <div className="text-xs text-green-500 font-mono mt-1">+12% vs last hr</div>
             </div>
             <div className="h-32 bg-white border border-nexus-silver rounded-md p-4 shadow-sm">
                <div className="font-mono text-xs text-nexus-navy/60">System Load</div>
                <div className="text-3xl font-bold text-nexus-navy mt-2">34%</div>
                <div className="w-full bg-gray-100 h-1 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-nexus-violet w-1/3" />
                </div>
             </div>
           </div>
        </div>
        
        <div className="col-span-1 space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-nexus-bg p-3 rounded-md border border-nexus-silver flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-nexus-teal animate-pulse" />
              <div className="flex-1">
                <div className="h-2 w-16 bg-gray-200 rounded mb-1" />
                <div className="h-1.5 w-full bg-gray-200 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Hero: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Sequence the loading animation
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowDashboard(true), 500);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-nexus-bg flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#182848 1px, transparent 1px), linear-gradient(90deg, #182848 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="terminal"
            exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
            className="z-10 bg-black w-full max-w-2xl h-96 rounded-lg shadow-2xl p-6 font-mono text-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="mt-6">
              <CodeLine text="initiating_nexus_core..." delay={0.5} />
              <CodeLine text="loading_modules [====================] 100%" delay={1.2} />
              <CodeLine text="optimizing_grid_layout..." delay={1.8} />
              <CodeLine text="establishing_secure_handshake..." delay={2.4} />
              <CodeLine text="ready." delay={3.0} />
            </div>
          </motion.div>
        ) : (
          <div className="z-10 container mx-auto px-6 h-full flex flex-col pt-24 pb-12">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-nexus-navy mb-4">
                The Intelligent <br/> Workflow Platform
              </h1>
              <p className="text-xl text-nexus-navy/60 font-mono max-w-lg">
                Systematic clarity for complex teams. <br/>
                Frictionless. Modular. Scalable.
              </p>
            </motion.div>
            
            <div className="flex-1 relative">
              {showDashboard && <DashboardUI />}
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;