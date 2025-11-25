import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-white text-white">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-spectrum-gradient animate-[pulse_8s_ease-in-out_infinite] bg-[length:400%_400%]" 
           style={{ animation: 'gradientMove 15s ease infinite' }}
      ></div>
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 opacity-90">
            Ready to light it up?
        </h2>
        
        <motion.button 
           whileHover={{ scale: 1.05 }}
           whileTap={{ scale: 0.95 }}
           className="px-10 py-6 text-xl md:text-2xl font-bold rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-white hover:text-electric-blue transition-all duration-300 interactive-target"
        >
            Illuminate Your Vision
        </motion.button>
      </div>

      <div className="absolute bottom-10 w-full px-10 flex flex-col md:flex-row justify-between items-center text-sm font-sans opacity-80 z-10">
          <div className="mb-4 md:mb-0">
             <p>San Francisco • Tokyo • Berlin</p>
          </div>
          <div className="flex items-center gap-1">
             <div className="w-2 h-2 bg-lime-green rounded-full animate-pulse" />
             <p>Powered by Creativity & Code</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-6">
             <a href="#" className="hover:underline">Instagram</a>
             <a href="#" className="hover:underline">LinkedIn</a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
