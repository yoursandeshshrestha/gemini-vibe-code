import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Instagram, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [miles, setMiles] = useState(12405920);

  useEffect(() => {
    const interval = setInterval(() => {
      setMiles(prev => prev + Math.floor(Math.random() * 10));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-electric-cyan text-asphalt pt-24 pb-12 overflow-hidden relative">
      
      {/* Massive CTA */}
      <div className="w-full h-64 md:h-96 relative overflow-hidden group cursor-pointer border-y-4 border-black">
        <div className="absolute inset-0 bg-asphalt flex items-center justify-center overflow-hidden">
           {/* Moving Asphalt Texture (CSS Animation would be used here, simulating with translation) */}
           <motion.div 
             className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
             animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
             transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
           />
           <h2 className="relative z-10 font-display text-6xl md:text-9xl text-white group-hover:scale-110 transition-transform duration-500 mix-blend-difference">
             TEST DRIVE
           </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 font-mono text-sm">
        
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl mb-4 font-bold">VELOCITÉ</h3>
          <p className="mb-4">Designed in Tokyo.<br/>Engineered in Munich.<br/>Driven Everywhere.</p>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-bold mb-4 uppercase border-b border-black/20 pb-2">Dealerships</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer"><MapPin size={14}/> TOKYO_SHIBUYA</li>
            <li className="flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer"><MapPin size={14}/> LA_SILVERLAKE</li>
            <li className="flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer"><MapPin size={14}/> LONDON_SHOREDITCH</li>
            <li className="flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer"><MapPin size={14}/> BERLIN_MITTE</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-bold mb-4 uppercase border-b border-black/20 pb-2">Network</h4>
           <div className="flex gap-4">
             <Instagram className="cursor-pointer hover:text-white transition-colors" />
             <Twitter className="cursor-pointer hover:text-white transition-colors" />
             <Linkedin className="cursor-pointer hover:text-white transition-colors" />
           </div>
        </div>

        {/* Live Counter */}
        <div>
           <h4 className="font-bold mb-4 uppercase border-b border-black/20 pb-2">Global Miles</h4>
           <div className="font-display text-3xl font-bold tracking-tighter">
             {miles.toLocaleString()} <span className="text-xs font-mono font-normal">KM</span>
           </div>
           <div className="flex items-center gap-2 mt-2">
             <div className="w-2 h-2 bg-signal-red rounded-full animate-pulse"></div>
             <span className="text-xs">LIVE TELEMETRY</span>
           </div>
        </div>
      </div>

      <div className="text-center mt-24 text-xs font-mono opacity-60">
        © 2024 VELOCITÉ MOTORS. ALL RIGHTS RESERVED. SILENCE IS GOLDEN.
      </div>
    </footer>
  );
};