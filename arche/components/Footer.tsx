import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/London' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-graphite text-alabaster px-6 py-20 min-h-screen flex flex-col justify-between relative overflow-hidden">
      
      {/* Call to Action */}
      <div className="flex-grow flex items-center justify-center relative z-10">
        <motion.button 
          whileHover="hover"
          className="relative group overflow-hidden"
        >
          <span className="relative z-10 text-[12vw] md:text-[15vw] leading-none font-serif tracking-tight mix-blend-difference">
            Let's Talk
          </span>
          {/* Liquid Fill Effect */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full bg-clay rounded-t-full"
            variants={{
              hover: { height: "150%", transition: { duration: 0.8, ease: [0.32, 0, 0.67, 0] } }
            }}
            initial={{ height: "0%" }}
            style={{ borderRadius: "50% 50% 0 0" }}
          />
        </motion.button>
      </div>

      {/* Grid Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-alabaster/20 pt-10 font-sans text-sm tracking-wide">
        <div className="flex flex-col justify-between h-full">
           <span className="block text-alabaster/50 mb-4">Location</span>
           <p>12 Hans Crescent<br/>Knightsbridge, London<br/>SW1X 0LZ</p>
        </div>
        
        <div className="flex flex-col justify-between h-full">
           <span className="block text-alabaster/50 mb-4">Contact</span>
           <p>studio@arche.design<br/>+44 (0) 20 7946 0123</p>
        </div>

        <div className="flex flex-col justify-between h-full">
           <span className="block text-alabaster/50 mb-4">Social</span>
           <div className="flex flex-col gap-1">
             <a href="#" className="hover:text-clay transition-colors">Instagram</a>
             <a href="#" className="hover:text-clay transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-clay transition-colors">Pinterest</a>
           </div>
        </div>

        <div className="flex flex-col justify-between items-start md:items-end h-full">
          <span className="block text-alabaster/50 mb-4">London Time</span>
          <p className="text-xl tabular-nums">{time}</p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full text-center pb-2 opacity-20 text-[10px] uppercase">
         © Arché 2024. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
