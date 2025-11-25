import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Terminal, 
  Shield, 
  Activity, 
  Globe, 
  Cpu, 
  Zap, 
  ChevronRight, 
  Check, 
  Maximize2 
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

// --- Type Definitions ---

interface MousePosition {
  x: number;
  y: number;
}

interface NavItem {
  id: string;
  label: string;
}

interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

// --- Helper Components ---

const ScanlineReveal: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'brightness(0)' }}
      whileInView={{ opacity: 1, filter: 'brightness(1)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="scanline-reveal relative"
    >
      {children}
    </motion.div>
  );
};

const GlitchHeader: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  return (
    <h2 className={`font-mono font-bold uppercase tracking-tight relative glitch-text ${className}`} data-text={text}>
      {text}
    </h2>
  );
};

// --- Custom Cursor ---

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button') || target.closest('a') || target.closest('.interactive');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-exclusion"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`transition-all duration-150 ease-out border-aether-cyan border-2 ${
          isHovering ? 'w-3 h-3 bg-aether-cyan border-none' : 'w-8 h-8 rounded-full'
        }`}
      >
        {!isHovering && (
           <>
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-aether-cyan opacity-50"></div>
             <div className="absolute left-1/2 top-0 h-full w-[1px] bg-aether-cyan opacity-50"></div>
           </>
        )}
      </div>
    </div>
  );
};

// --- Custom Scrollbar ---

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed right-0 top-0 bottom-0 w-[3px] bg-aether-grid z-50">
      <motion.div
        className="absolute top-0 left-0 right-0 bg-aether-cyan origin-top w-full shadow-[0_0_10px_#0891B2]"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
};

// --- Section 1: Hero (ECG Canvas) ---

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      time += 1;
      ctx.fillStyle = '#FFFFFF'; // White BG
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid
      ctx.strokeStyle = '#E2E8F0'; // Light Slate Grid
      ctx.lineWidth = 0.5;
      const gridSize = 40;
      
      // Moving Grid Effect
      const offset = (time * 0.5) % gridSize;

      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Main ECG Line
      ctx.beginPath();
      ctx.strokeStyle = '#94A3B8'; // Slate 400 for the trail
      ctx.lineWidth = 1.5;
      ctx.moveTo(0, canvas.height / 2);

      const centerY = canvas.height / 2;
      
      // Draw static line with moving pulse
      for (let x = 0; x < canvas.width; x++) {
        // Create a "pulse" that travels
        const pulsePos = (time * 8) % (canvas.width + 200) - 100;
        const dist = Math.abs(x - pulsePos);
        
        let y = centerY;
        
        // Heartbeat shape
        if (dist < 100) {
          const t = (100 - dist) / 100;
          // Complex waveform
          y -= Math.sin(t * Math.PI * 4) * 50 * t; 
        }

        // Noise
        y += Math.random() * 2;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);

        // Draw the glowing leading edge
        if (Math.abs(x - pulsePos) < 2) {
             const glow = canvas.getContext('2d');
             if(glow){
                glow.save();
                glow.shadowBlur = 10;
                glow.shadowColor = '#0891B2';
                glow.fillStyle = '#0891B2';
                glow.fillRect(x, y - 2, 4, 4);
                glow.restore();
             }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-80" />
      
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pointer-events-none">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-aether-cyan animate-pulse rounded-full"></div>
              <span className="text-aether-cyan font-mono text-sm tracking-widest uppercase">System Online</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-mono font-bold leading-none tracking-tighter text-aether-white mb-6 glitch-text" data-text="AETHER_OS">
              AETHER_OS
            </h1>
            
            <p className="text-aether-white/70 text-lg md:text-xl font-sans max-w-xl leading-relaxed mb-10 border-l-2 border-aether-cyan/30 pl-6">
              Surgical data clarity for the post-latency era. 
              Forensic analysis of complex systems in real-time.
            </p>
            
            <button className="interactive pointer-events-auto group relative px-8 py-4 bg-transparent overflow-hidden border border-aether-cyan/50 hover:border-aether-cyan transition-colors">
               <div className="absolute inset-0 bg-aether-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
               <span className="relative flex items-center gap-4 text-aether-cyan font-mono font-bold tracking-widest uppercase">
                  Initialize Sequence
                  <Activity className="w-5 h-5 animate-pulse" />
               </span>
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative overlays */}
      <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 pointer-events-none">
         <span className="font-mono text-xs text-aether-white/40">COORDS: 34.0522° N, 118.2437° W</span>
         <span className="font-mono text-xs text-aether-white/40">NET_STATUS: STABLE</span>
      </div>
    </section>
  );
};

// --- Section 2: Core Value (Precision Reveal) ---

const FeatureRow = ({ title, desc, num }: { title: string; desc: string; num: string }) => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -20 }
      }}
      className="group relative flex border-l border-aether-grid hover:border-aether-cyan transition-colors duration-500 py-12 pl-8 md:pl-16"
    >
      <div className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-aether-cyan scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
      
      <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 w-full">
         <span className="font-mono text-aether-violet text-sm tracking-widest opacity-60">
            {num} //
         </span>
         <div className="flex-1">
            <h3 className="text-3xl font-mono text-aether-white mb-2 group-hover:text-aether-cyan transition-colors uppercase tracking-tight">
               {title}
            </h3>
            <p className="font-sans text-aether-white/60 max-w-lg leading-relaxed group-hover:text-aether-white transition-colors duration-300">
               {desc}
            </p>
         </div>
         <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Maximize2 className="w-6 h-6 text-aether-cyan" />
         </div>
      </div>
    </motion.div>
  );
};

const CoreValueSection = () => {
  return (
    <section className="bg-aether-black py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 border-b border-aether-grid pb-4 flex justify-between items-end">
           <GlitchHeader text="Core_Modules" className="text-4xl text-aether-white" />
           <span className="font-mono text-xs text-aether-violet animate-pulse">LIVE_FEED</span>
        </div>
        
        <div className="flex flex-col">
          <FeatureRow 
            num="01"
            title="Anomaly Detection"
            desc="Autonomous identification of irregular data patterns using unsupervised neural networks. Zero configuration required."
          />
          <FeatureRow 
            num="02"
            title="Predictive Modeling"
            desc="High-fidelity simulation of future states based on historical vectors. Anticipate system failures before they manifest."
          />
          <FeatureRow 
            num="03"
            title="Real-Time Ingest"
            desc="Sub-millisecond processing pipeline capable of handling petabyte-scale streams without latency degradation."
          />
        </div>
      </div>
    </section>
  );
};

// --- Section 3: Architecture (3D Globe) ---

const GlobeVisual = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = canvas.parentElement?.offsetWidth || 500;
    let h = canvas.height = canvas.parentElement?.offsetHeight || 500;

    const globeRadius = Math.min(w, h) * 0.35;
    const dots: { lat: number; lon: number; anomaly: boolean }[] = [];
    
    // Generate dots
    for (let i = 0; i < 400; i++) {
       dots.push({
         lat: (Math.random() - 0.5) * Math.PI,
         lon: (Math.random() - 0.5) * Math.PI * 2,
         anomaly: Math.random() > 0.95
       });
    }

    let rotation = 0;
    let animationFrameId: number;

    const render = () => {
       ctx.clearRect(0, 0, w, h);
       ctx.save();
       ctx.translate(w/2, h/2);

       rotation += 0.005;

       dots.forEach(dot => {
          // 3D projection math
          const x = globeRadius * Math.cos(dot.lat) * Math.cos(dot.lon + rotation);
          const y = globeRadius * Math.sin(dot.lat);
          const z = globeRadius * Math.cos(dot.lat) * Math.sin(dot.lon + rotation);
          
          const scale = (z + globeRadius * 2) / (globeRadius * 3); // Simple perspective
          const alpha = Math.max(0.1, (z + globeRadius) / (globeRadius * 2));

          if (z > -globeRadius * 0.5) { // Only draw front-ish dots
             ctx.beginPath();
             ctx.arc(x, y, dot.anomaly ? 3 * scale : 1.5 * scale, 0, Math.PI * 2);
             
             if (dot.anomaly) {
                // Anomaly flash
                const flash = (Math.sin(Date.now() / 100) + 1) / 2;
                ctx.fillStyle = `rgba(124, 58, 237, ${flash})`; // Violet
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#7C3AED';
             } else {
                // Dark dots for white theme
                ctx.fillStyle = `rgba(15, 23, 42, ${alpha})`;
                ctx.shadowBlur = 0;
             }
             ctx.fill();

             // Connect lines nearby (expensive, limiting to few)
             if (Math.random() > 0.99) {
                ctx.strokeStyle = `rgba(8, 145, 178, ${alpha * 0.5})`; // Cyan
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + (Math.random()-0.5)*20, y + (Math.random()-0.5)*20);
                ctx.stroke();
             }
          }
       });

       ctx.restore();
       animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    const handleResize = () => {
       w = canvas.width = canvas.parentElement?.offsetWidth || 500;
       h = canvas.height = canvas.parentElement?.offsetHeight || 500;
    };
    window.addEventListener('resize', handleResize);
    return () => {
       cancelAnimationFrame(animationFrameId);
       window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[500px] md:h-full" />;
};

const ArchitectureSection = () => {
  return (
    <section className="bg-aether-navy relative min-h-screen flex items-center py-20 border-t border-aether-grid">
      <div className="container mx-auto px-6 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
          
          <div className="order-2 lg:order-1 h-full flex flex-col justify-center space-y-12">
            <div>
               <div className="flex items-center gap-3 mb-4">
                  <Globe className="text-aether-cyan w-5 h-5" />
                  <span className="font-mono text-aether-cyan text-sm tracking-widest">NETWORK_TOPOLOGY</span>
               </div>
               <h2 className="text-4xl md:text-5xl font-mono font-bold text-aether-white mb-6">
                 Global<br/>Scalability
               </h2>
               <p className="font-sans text-aether-white/70 text-lg leading-relaxed border-l border-aether-violet/50 pl-6">
                 Distributed edge computing nodes ensure absolute consistency across all availability zones. 
                 The architecture automatically shards data based on load heuristics.
               </p>
            </div>

            <div className="glass-panel p-6">
              <div className="flex justify-between items-center mb-4 border-b border-aether-grid pb-2">
                 <span className="font-mono text-xs text-aether-white/50">SYSTEM_METRICS</span>
                 <span className="font-mono text-xs text-aether-cyan">OPTIMAL</span>
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between font-mono text-sm">
                    <span className="text-aether-white/80">Latency</span>
                    <span className="text-aether-cyan">12ms</span>
                 </div>
                 <div className="w-full bg-aether-grid h-1">
                    <div className="bg-aether-cyan h-1 w-[12%]"></div>
                 </div>
                 
                 <div className="flex justify-between font-mono text-sm">
                    <span className="text-aether-white/80">Throughput</span>
                    <span className="text-aether-cyan">940 GB/s</span>
                 </div>
                 <div className="w-full bg-aether-grid h-1">
                    <div className="bg-aether-cyan h-1 w-[85%]"></div>
                 </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-full min-h-[400px]">
             {/* Radial gradient adjusted for white theme */}
             <div className="absolute inset-0 bg-radial-gradient from-aether-cyan/5 to-transparent opacity-50"></div>
             <GlobeVisual />
             
             {/* Floating Labels */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/4 right-10 glass-panel px-3 py-1 border-l-2 border-aether-violet"
             >
               <span className="font-mono text-xs text-aether-violet">ANOMALY DETECTED</span>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- Section 4: Use Cases (Code Block) ---

const TypewriterText = ({ text, active }: { text: string; active: boolean }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    setDisplayedText('');
    if (!active) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 15); // Speed of typing
    
    return () => clearInterval(interval);
  }, [text, active]);

  return (
    // Explicitly set text color to light gray/white because the container is dark, 
    // but the global theme text color is dark.
    <div className="font-mono text-sm md:text-base text-gray-300 leading-relaxed whitespace-pre-wrap">
      {displayedText}
      <span className="inline-block w-2 h-4 bg-aether-cyan ml-1 animate-pulse align-middle"></span>
    </div>
  );
};

const UseCasesSection = () => {
  const [activeTab, setActiveTab] = useState<'finance' | 'logistics' | 'security'>('finance');

  const content = {
    finance: `// HIGH-FREQUENCY TRADING ALGORITHM
import { MarketStream } from '@aether/finance';

const detectArbitrage = async (stream: MarketStream) => {
  const vectors = await stream.vectorize('50ms');
  
  // Real-time anomaly detection > 99.9% accuracy
  const anomalies = Aether.scan(vectors, { sensitivity: 'high' });
  
  if (anomalies.length > 0) {
    return Aether.executeOrder({
      strategy: 'flash_hedge',
      volume: 'dynamic',
      latency: 0.004 // ms
    });
  }
};`,
    logistics: `// SUPPLY CHAIN OPTIMIZATION
import { GeoFence, Telemetry } from '@aether/logistics';

const optimizeRoute = (fleetId: string) => {
  const activeFleet = Telemetry.get(fleetId);
  
  // Predictive traffic modeling
  const congestionProb = Aether.predict('traffic_grid_4', { horizon: '30m' });
  
  activeFleet.forEach(vehicle => {
    if (congestionProb > 0.8) {
      // Re-route with zero human intervention
      vehicle.updatePath(Aether.Pathfinding.optimal());
    }
  });
};`,
    security: `// NETWORK INTRUSION PREVENTION
import { PacketSniffer } from '@aether/sec';

const monitorTraffic = (interface: string) => {
  // Deep packet inspection
  const packets = PacketSniffer.listen(interface);
  
  packets.subscribe(packet => {
    // Zero-day signature generation
    const signature = Aether.Security.fingerprint(packet);
    
    if (Aether.ThreatDB.isNovel(signature)) {
      // Immediate isolation of compromised node
      Aether.Firewall.quarantine(packet.source);
      console.log('THREAT NEUTRALIZED');
    }
  });
};`
  };

  // Mock Data for Chart
  const chartData = [
    { name: '00:00', val: 4000 },
    { name: '04:00', val: 3000 },
    { name: '08:00', val: 2000 },
    { name: '12:00', val: 2780 },
    { name: '16:00', val: 1890 },
    { name: '20:00', val: 2390 },
    { name: '24:00', val: 3490 },
  ];

  return (
    <section className="bg-aether-black py-24 border-t border-aether-grid/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           <div className="lg:col-span-4 space-y-8">
              <GlitchHeader text="Protocols" className="text-3xl text-aether-white" />
              <div className="flex flex-col space-y-2">
                 {(['finance', 'logistics', 'security'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`interactive text-left px-6 py-4 font-mono uppercase tracking-widest text-sm transition-all duration-300 border-l-2 flex justify-between items-center group
                        ${activeTab === tab 
                          ? 'border-aether-cyan bg-aether-cyan/10 text-aether-cyan' 
                          : 'border-aether-grid text-aether-white/40 hover:text-aether-white hover:border-aether-white'}`}
                    >
                       <span>{tab}_Module</span>
                       {activeTab === tab && <ChevronRight className="w-4 h-4 animate-pulse" />}
                    </button>
                 ))}
              </div>
              
              <div className="glass-panel p-6 hidden lg:block">
                 <div className="font-mono text-xs text-aether-white/50 mb-4">LIVE_EFFICIENCY_METRIC</div>
                 <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0891B2" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#0891B2" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="val" stroke="#0891B2" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
                      </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>
           </div>

           <div className="lg:col-span-8">
              {/* Force dark terminal for aesthetics even in white theme */}
              <div className="bg-[#050C16] border border-aether-grid rounded-sm overflow-hidden h-full min-h-[500px] flex flex-col relative shadow-xl">
                 {/* Window Controls */}
                 <div className="bg-[#0f172a] border-b border-white/10 px-4 py-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-50"></div>
                    <div className="ml-auto font-mono text-xs text-white/30">bash --login</div>
                 </div>
                 
                 {/* Content */}
                 <div className="p-8 font-mono relative flex-1">
                    <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                       <Terminal className="w-24 h-24 text-white" />
                    </div>
                    {/* Explicitly light text inside dark terminal */}
                    <div className="text-gray-400 mb-6">
                       // Load module: <span className="text-aether-violet">{activeTab.toUpperCase()}</span><br/>
                       // Initializing Aether Core v3.1...<br/>
                       // Connection established.
                    </div>
                    <TypewriterText text={content[activeTab]} active={true} />
                 </div>
              </div>
           </div>
           
        </div>
      </div>
    </section>
  );
};

// --- Section 5: Pricing (Transparency Matrix) ---

const PricingCard = ({ tier }: { tier: PricingTier }) => {
  return (
    <div className="interactive group relative p-8 border border-aether-grid bg-white hover:bg-slate-50 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-sm hover:shadow-md">
      {/* Grid Overlay on Hover */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
           style={{
             backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}
      ></div>

      <div className="relative z-10 flex flex-col h-full">
         <h3 className="font-mono text-xl text-aether-white mb-2">{tier.name}</h3>
         <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-bold font-mono text-aether-cyan">{tier.price}</span>
            {tier.price !== 'Custom' && <span className="text-aether-white/50 font-sans text-sm">/mo</span>}
         </div>

         <ul className="space-y-4 mb-12 flex-1">
            {tier.features.map((feat, i) => (
               <li key={i} className="flex items-start gap-3 text-sm text-aether-white/80 font-sans">
                  <Check className="w-4 h-4 text-aether-cyan mt-1 shrink-0" />
                  <span>{feat}</span>
               </li>
            ))}
         </ul>

         <button 
           className={`interactive w-full py-4 font-mono text-sm tracking-widest uppercase transition-all duration-300 border
             ${tier.highlight 
               ? 'bg-aether-cyan text-white border-aether-cyan hover:bg-cyan-700 hover:shadow-lg' 
               : 'border-aether-grid text-aether-white hover:border-aether-cyan hover:text-aether-cyan'}`}
         >
            {tier.cta}
         </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const tiers: PricingTier[] = [
    {
      name: 'Observer',
      price: '$0',
      features: ['Real-time monitoring (1 Node)', 'Basic Anomaly Detection', '24h Data Retention', 'Community Support'],
      cta: 'Initialize Free'
    },
    {
      name: 'Architect',
      price: '$499',
      features: ['Unlimited Nodes', 'Predictive Modeling Engine', '30-Day Retention', 'API Access', 'Priority Support'],
      cta: 'Upgrade Access',
      highlight: true
    },
    {
      name: 'Sovereign',
      price: 'Custom',
      features: ['On-Premise Deployment', 'Custom Neural Models', 'Infinite Retention', 'Dedicated Solutions Engineer'],
      cta: 'Contact Sales'
    }
  ];

  return (
    <section className="bg-aether-navy py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
           <GlitchHeader text="Access_Levels" className="text-4xl md:text-5xl mb-6 inline-block text-aether-white" />
           <p className="font-sans text-aether-white/60 max-w-2xl mx-auto">
             Transparent pricing infrastructure. Scale your intelligence capacity without friction.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
           {tiers.map((tier, i) => (
             <ScanlineReveal key={i} delay={i * 0.2}>
               <PricingCard tier={tier} />
             </ScanlineReveal>
           ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 6: Footer (System Shutdown) ---

const Footer = () => {
  return (
    <footer className="bg-aether-black pt-20 pb-10 relative overflow-hidden">
      {/* De-rezzing Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aether-grid to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
           <div>
              <h2 className="text-2xl font-mono font-bold text-aether-white tracking-tighter mb-2">AETHER</h2>
              <p className="text-aether-white/40 text-sm font-sans">
                 © 2024 Aether Intelligence Systems.<br/>All data streams encrypted.
              </p>
           </div>
           
           <div className="flex gap-8">
              {['Docs', 'Status', 'Legal', 'Login'].map(link => (
                 <a key={link} href="#" className="interactive font-mono text-sm text-aether-white/60 hover:text-aether-cyan uppercase tracking-widest transition-colors">
                    {link}
                 </a>
              ))}
           </div>
        </div>
        
        <div className="flex justify-between items-center border-t border-aether-grid/30 pt-8">
           <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="font-mono text-xs text-aether-white/30">ALL SYSTEMS NOMINAL</span>
           </div>
           <span className="font-mono text-xs text-aether-white/20">v.3.1.20</span>
        </div>
      </div>
    </footer>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  return (
    <div className="bg-aether-black min-h-screen text-aether-white selection:bg-aether-cyan/20 selection:text-aether-cyan cursor-none">
      <CustomCursor />
      <ScrollProgress />
      
      <main>
        <HeroSection />
        <CoreValueSection />
        <ArchitectureSection />
        <UseCasesSection />
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;