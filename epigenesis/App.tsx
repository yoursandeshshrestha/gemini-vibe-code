import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Activity, Zap, Shield, ArrowRight, Dna, Database, Microscope } from 'lucide-react';

import { HelixHero } from './components/HelixHero';
import { MolecularProfile } from './components/MolecularProfile';
import { DataMatrix } from './components/DataMatrix';
import { ProfileType, CaseStudy } from './types';

// --- Constants ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    name: "ELARA VANCE",
    title: "Neuro-Plasticity Enhancement",
    metric: "+240% Cognitive Output",
    image: "https://picsum.photos/1920/1080?random=1",
    description: "Targeted CRISPR modulation of BDNF pathways resulted in unprecedented memory retention and processing speed."
  },
  {
    id: 2,
    name: "JONAH REED",
    title: "Cellular Senescence Reversal",
    metric: "-12.5 Biological Years",
    image: "https://picsum.photos/1920/1080?random=2",
    description: "Telomere extension therapy combined with senolytic agents restored mitochondrial efficiency to peak athletic baselines."
  },
  {
    id: 3,
    name: "PROJECT: AETHEL",
    title: "Environmental Adaptation",
    metric: "Total Toxin Immunity",
    image: "https://picsum.photos/1920/1080?random=3",
    description: "Synthetic gene drive integration allowing for safe metabolic processing of heavy metals and industrial pollutants."
  }
];

export default function App() {
  const [activeProfile, setActiveProfile] = useState<ProfileType>(ProfileType.LONGEVITY);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [loading, setLoading] = useState(true);

  // Scroll Handling
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, { mass: 0.1, stiffness: 50, damping: 10 });
  
  // Fake Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Case Study Cycler
  const nextCaseStudy = () => {
    setActiveCaseStudy((prev) => (prev + 1) % CASE_STUDIES.length);
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#02041A] flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex space-x-2 text-4xl font-mono text-[#00FEE9] tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Staggered text reveal */}
            {"EPIGENESIS".split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div 
            className="mt-4 h-1 w-32 bg-[#D95372]"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#02041A] text-[#EEF2FF] min-h-screen selection:bg-[#00FEE9] selection:text-[#02041A]">
      
      {/* --- Sticky Navigation --- */}
      <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-mono tracking-[0.3em] font-bold text-[#00FEE9]">EPIGENESIS</div>
        <div className="hidden md:flex space-x-8 text-xs font-mono tracking-widest opacity-80">
          <a href="#methodology" className="hover:text-[#00FEE9] transition-colors">METHODOLOGY</a>
          <a href="#profiles" className="hover:text-[#00FEE9] transition-colors">PROFILES</a>
          <a href="#cases" className="hover:text-[#00FEE9] transition-colors">RESULTS</a>
        </div>
      </nav>

      {/* --- SECTION 1: HERO (Double Helix) --- */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold tracking-tighter text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="block text-[#EEF2FF] text-glow">REWRITE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00FEE9] to-[#D95372] primary-glow">
              THE CODE
            </span>
          </motion.h1>
          <motion.p 
            className="mt-6 text-sm font-mono tracking-[0.2em] text-[#00FEE9] opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            BESPOKE GENETIC ARCHITECTURE
          </motion.p>
        </div>
        
        <Canvas className="absolute inset-0 z-0">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <HelixHero />
          <Environment preset="night" />
        </Canvas>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Dna className="text-[#D95372] w-6 h-6" />
          </motion.div>
          <div className="h-16 w-[1px] bg-gradient-to-b from-[#D95372] to-transparent mt-2"></div>
        </div>
      </section>

      {/* --- SECTION 2: METHODOLOGY (Data Stream) --- */}
      <section id="methodology" className="relative py-24 px-6 md:px-24 border-t border-[#00FEE9]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-24 sticky top-24">
             {/* Step 1 */}
             <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-[#00FEE9]/10 rounded border border-[#00FEE9]/50">
                    <Microscope className="w-6 h-6 text-[#00FEE9]" />
                  </div>
                  <h3 className="text-2xl font-mono text-[#00FEE9]">01. SEQUENCING</h3>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                   We begin with a deep-read whole genome sequence (WGS) at 60x coverage, mapping over 6 billion base pairs to identify rare variants and epigenetic markers unseen by standard consumer tests.
                </p>
             </div>

             {/* Step 2 */}
             <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-[#D95372]/10 rounded border border-[#D95372]/50">
                    <Database className="w-6 h-6 text-[#D95372]" />
                  </div>
                  <h3 className="text-2xl font-mono text-[#D95372]">02. ANALYSIS</h3>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                   Our proprietary AI, <span className="text-[#EEF2FF] font-mono">AEON-7</span>, cross-references your unique code against a living database of longevity research, identifying optimized metabolic pathways.
                </p>
             </div>
             
             {/* Step 3 */}
             <div className="group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-2 bg-[#EEF2FF]/10 rounded border border-[#EEF2FF]/50">
                    <Activity className="w-6 h-6 text-[#EEF2FF]" />
                  </div>
                  <h3 className="text-2xl font-mono text-[#EEF2FF]">03. SYNTHESIS</h3>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                   We engineer a custom intervention plan—ranging from peptide protocols to lifestyle modulation—designed to rewrite your biological expression.
                </p>
             </div>
          </div>

          <div className="h-[600px] border border-[#00FEE9]/20 bg-[#02041A]/50 backdrop-blur-sm rounded-lg p-6 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#02041A] to-transparent z-10"></div>
             <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#02041A] to-transparent z-10"></div>
             {/* Dynamic Data Matrix Component */}
             <DataMatrix activeIndex={0} /> 
             {/* Note: In a real implementation, we'd use scroll position to update activeIndex */}
          </div>

        </div>
      </section>

      {/* --- SECTION 3: BESPOKE PROFILES (WebGL Molecule) --- */}
      <section id="profiles" className="relative h-screen bg-[#02041A] overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,254,233,0.05)_0%,_transparent_70%)]"></div>

        <div className="absolute top-10 left-0 w-full text-center z-20">
           <h2 className="text-sm font-mono tracking-[0.5em] text-gray-500">SELECT YOUR VECTOR</h2>
        </div>

        {/* 3D Viewport */}
        <div className="w-full h-3/4 relative z-10">
           <Canvas>
             <PerspectiveCamera makeDefault position={[0, 0, 14]} />
             <ambientLight intensity={0.2} />
             <pointLight position={[10, 10, 10]} intensity={1} color="#00FEE9" />
             <pointLight position={[-10, -10, -10]} intensity={0.5} color="#D95372" />
             <MolecularProfile activeProfile={activeProfile} />
             <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
           </Canvas>
        </div>

        {/* Radial Navigation */}
        <div className="absolute bottom-20 flex gap-8 z-30">
           <button 
             onClick={() => setActiveProfile(ProfileType.LONGEVITY)}
             className={`flex flex-col items-center group transition-all duration-500 ${activeProfile === ProfileType.LONGEVITY ? 'scale-110' : 'opacity-50'}`}
           >
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-colors ${activeProfile === ProfileType.LONGEVITY ? 'border-[#00FEE9] bg-[#00FEE9]/20 shadow-[0_0_20px_#00FEE9]' : 'border-gray-600'}`}>
                <Shield className="w-5 h-5 text-[#00FEE9]" />
              </div>
              <span className="font-mono text-xs tracking-widest text-[#00FEE9]">LONGEVITY</span>
           </button>

           <button 
             onClick={() => setActiveProfile(ProfileType.PERFORMANCE)}
             className={`flex flex-col items-center group transition-all duration-500 ${activeProfile === ProfileType.PERFORMANCE ? 'scale-110' : 'opacity-50'}`}
           >
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-colors ${activeProfile === ProfileType.PERFORMANCE ? 'border-[#D95372] bg-[#D95372]/20 shadow-[0_0_20px_#D95372]' : 'border-gray-600'}`}>
                <Zap className="w-5 h-5 text-[#D95372]" />
              </div>
              <span className="font-mono text-xs tracking-widest text-[#D95372]">PERFORMANCE</span>
           </button>

           <button 
             onClick={() => setActiveProfile(ProfileType.RESILIENCE)}
             className={`flex flex-col items-center group transition-all duration-500 ${activeProfile === ProfileType.RESILIENCE ? 'scale-110' : 'opacity-50'}`}
           >
              <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-2 transition-colors ${activeProfile === ProfileType.RESILIENCE ? 'border-[#EEF2FF] bg-[#EEF2FF]/20 shadow-[0_0_20px_#EEF2FF]' : 'border-gray-600'}`}>
                <Activity className="w-5 h-5 text-[#EEF2FF]" />
              </div>
              <span className="font-mono text-xs tracking-widest text-[#EEF2FF]">RESILIENCE</span>
           </button>
        </div>
      </section>

      {/* --- SECTION 5: CASE STUDIES (Scanner Effect) --- */}
      <section id="cases" className="relative h-screen w-full overflow-hidden bg-black">
        <AnimatePresence mode='wait'>
            <motion.div 
                key={CASE_STUDIES[activeCaseStudy].id}
                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
            >
                {/* Background Image with Darkening */}
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${CASE_STUDIES[activeCaseStudy].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#02041A] via-[#02041A]/80 to-transparent" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-32 max-w-4xl">
                    <div className="mb-4 flex items-center space-x-2 text-[#D95372]">
                         <span className="w-2 h-2 bg-[#D95372] rounded-full animate-pulse"/>
                         <span className="font-mono text-xs tracking-widest">CASE STUDY {CASE_STUDIES[activeCaseStudy].id.toString().padStart(2, '0')}</span>
                    </div>
                    
                    <h2 className="text-6xl md:text-8xl font-bold mb-2 text-white">{CASE_STUDIES[activeCaseStudy].name}</h2>
                    <h3 className="text-2xl font-mono text-[#00FEE9] mb-8">{CASE_STUDIES[activeCaseStudy].title}</h3>
                    
                    <div className="border-l-4 border-[#00FEE9] pl-6 mb-12">
                         <p className="text-xl text-gray-300 leading-relaxed mb-6">{CASE_STUDIES[activeCaseStudy].description}</p>
                         <div className="text-4xl font-bold text-white text-glow">{CASE_STUDIES[activeCaseStudy].metric}</div>
                    </div>
                </div>

                {/* Scan Line Decoration */}
                <motion.div 
                    className="absolute w-full h-[2px] bg-[#00FEE9] shadow-[0_0_20px_#00FEE9] z-50 top-0"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: 0 }}
                />
            </motion.div>
        </AnimatePresence>
        
        {/* Navigation for Slider */}
        <button 
            onClick={nextCaseStudy}
            className="absolute bottom-12 right-12 md:right-32 z-50 flex items-center space-x-4 group"
        >
             <span className="font-mono text-sm tracking-widest text-white group-hover:text-[#00FEE9] transition-colors">NEXT PROFILE</span>
             <div className="p-4 border border-white/20 group-hover:border-[#00FEE9] group-hover:bg-[#00FEE9]/10 rounded-full transition-all">
                 <ArrowRight className="w-6 h-6 text-white group-hover:text-[#00FEE9]" />
             </div>
        </button>
      </section>

      {/* --- SECTION 6: FOOTER --- */}
      <footer className="relative py-24 bg-[#02041A] border-t border-[#00FEE9]/10 flex flex-col items-center justify-center">
         <div className="w-full max-w-4xl text-center px-6 z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">EVOLUTION IS A CHOICE.</h2>
            <p className="text-gray-400 mb-12 max-w-xl mx-auto">
               The biological limitations you were born with are no longer binding. Begin the synthesis process today.
            </p>
            
            <button className="relative group px-12 py-6 overflow-hidden bg-transparent border border-[#D95372] text-[#D95372] hover:text-white transition-colors duration-500">
               <span className="relative z-10 font-mono text-lg tracking-[0.2em] font-bold">INITIATE SEQUENCE</span>
               <div className="absolute inset-0 bg-[#D95372] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
               
               {/* Particle dissolve effect on button hover (CSS Simulated) */}
               <div className="absolute top-0 right-0 w-2 h-full bg-[#D95372] blur-md opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-700"></div>
            </button>
         </div>
         
         {/* Footer visual: Grid lines */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
             <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-[radial-gradient(circle,_#00FEE9_1px,_transparent_1px)] bg-[size:40px_40px] opacity-10 transform rotate-12"></div>
         </div>
         
         <div className="mt-24 text-xs font-mono text-gray-600 tracking-widest">
            © 2024 EPIGENESIS LABS. ALL RIGHTS RESERVED.
         </div>
      </footer>
    </div>
  );
}