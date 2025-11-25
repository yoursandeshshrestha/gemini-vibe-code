import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Lock, Server, Cpu, Database, Globe } from 'lucide-react';
import { cn } from '../utils/cn';
import { ArchitectureItem } from '../types';

const items: ArchitectureItem[] = [
  { id: 'cloud', title: 'Cloud Native', description: 'Serverless architecture that scales infinitely.', detail: 'Built on edge networks ensuring <50ms latency globally.', metric: '50ms' },
  { id: 'security', title: 'Zero Trust', description: 'Identity-aware proxies at every endpoint.', detail: 'SOC2 Type II certified with end-to-end encryption.', metric: 'AES-256' },
  { id: 'api', title: 'API First', description: 'Connects with your existing stack seamlessly.', detail: 'GraphQL endpoints for precise data fetching.', metric: '100%' },
];

const Architecture: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 border-b border-nexus-silver pb-4 flex justify-between items-end">
           <h2 className="text-3xl font-bold text-nexus-navy">System Architecture</h2>
           <span className="font-mono text-nexus-teal text-sm">SECURE_LAYER_V4</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-t border-nexus-silver">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className={cn(
                "relative p-10 border-r border-b border-nexus-silver cursor-pointer hover:bg-nexus-bg transition-colors group h-80 flex flex-col justify-between",
                selectedId === item.id ? "bg-nexus-bg" : "bg-white"
              )}
            >
              <div className="flex justify-between items-start">
                  <div className="p-3 bg-white border border-nexus-silver rounded-md group-hover:border-nexus-teal transition-colors">
                     {item.id === 'cloud' && <Cloud className="text-nexus-navy" />}
                     {item.id === 'security' && <Lock className="text-nexus-navy" />}
                     {item.id === 'api' && <Server className="text-nexus-navy" />}
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-nexus-teal text-2xl">↗</span>
                  </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-nexus-navy mb-2">{item.title}</h3>
                <p className="text-sm text-nexus-navy/60 font-mono">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-nexus-navy/50 backdrop-blur-sm p-4"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={selectedId}
                className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                 <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 text-nexus-navy/50 hover:text-nexus-navy"
                 >
                    CLOSE
                 </button>
                 
                 {items.map((item) => item.id === selectedId && (
                     <div key={item.id}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-nexus-bg rounded-md">
                                {item.id === 'cloud' && <Cloud size={32} />}
                                {item.id === 'security' && <Lock size={32} />}
                                {item.id === 'api' && <Server size={32} />}
                            </div>
                            <h2 className="text-3xl font-bold text-nexus-navy">{item.title}</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-nexus-bg p-6 rounded border border-nexus-silver">
                                <h4 className="font-mono text-xs text-nexus-navy/60 mb-2">INFRASTRUCTURE</h4>
                                <p className="text-nexus-navy">{item.detail}</p>
                            </div>
                             <div className="bg-nexus-navy p-6 rounded border border-nexus-navy text-white flex flex-col justify-center items-center">
                                <h4 className="font-mono text-xs text-white/60 mb-1">PERFORMANCE METRIC</h4>
                                <span className="text-4xl font-bold text-nexus-teal">{item.metric}</span>
                            </div>
                        </div>

                        <div className="h-40 bg-nexus-bg rounded border border-nexus-silver flex items-center justify-center overflow-hidden relative">
                             {/* Abstract Graphic */}
                             <div className="absolute inset-0 flex items-center justify-center opacity-20">
                                <Globe size={120} className="animate-spin-slow" />
                             </div>
                             <div className="font-mono text-sm text-nexus-navy z-10">
                                 System Status: OPERATIONAL
                             </div>
                        </div>
                     </div>
                 ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Architecture;