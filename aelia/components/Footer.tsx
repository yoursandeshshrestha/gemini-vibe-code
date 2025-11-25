import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-oatmeal py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Decorative grain */}
      <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        <h2 className="text-brass font-serif text-6xl md:text-9xl mb-12 tracking-tighter opacity-90">AELIA</h2>

        <div className="mb-20">
          <button className="group relative px-12 py-5 overflow-hidden transition-all duration-300">
             {/* The "Hot Stamp" Effect */}
             <div className="absolute inset-0 border border-brass group-hover:bg-brass transition-colors duration-300" />
             
             <span className="relative flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-brass group-hover:text-espresso transition-colors duration-300 group-hover:font-bold">
                View The Collection
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
             </span>
             
             {/* Inner Shadow for stamped depth effect on hover */}
             <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </button>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-brass/20 pt-12">
           <div className="text-left">
              <h4 className="font-serif text-xl mb-4 text-brass">Contact</h4>
              <ul className="space-y-2 font-sans text-sm text-taupe/80">
                <li className="hover:text-brass cursor-pointer transition-colors">Client Services</li>
                <li className="hover:text-brass cursor-pointer transition-colors">Book an Appointment</li>
                <li className="hover:text-brass cursor-pointer transition-colors">Press Inquiries</li>
              </ul>
           </div>
           
           <div className="text-left md:text-center">
             <h4 className="font-serif text-xl mb-4 text-brass">Social</h4>
             <ul className="space-y-2 font-sans text-sm text-taupe/80">
                <li className="hover:text-brass cursor-pointer transition-colors">Instagram</li>
                <li className="hover:text-brass cursor-pointer transition-colors">Pinterest</li>
              </ul>
           </div>

           <div className="text-left md:text-right">
              <h4 className="font-serif text-xl mb-4 text-brass">Legal</h4>
               <ul className="space-y-2 font-sans text-sm text-taupe/80">
                <li className="hover:text-brass cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-brass cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-brass cursor-pointer transition-colors">Sourcing Transparency</li>
              </ul>
           </div>
        </div>

        <div className="mt-20 font-mono text-[10px] text-taupe/40 uppercase tracking-widest">
           © 2024 Aelia Heritage Goods • Crafted in Europe
        </div>
      </div>
    </footer>
  );
};
