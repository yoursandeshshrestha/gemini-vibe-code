import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button className="text-[#4A4A4A] hover:text-black transition-colors duration-300">
          <Menu size={24} strokeWidth={1} />
        </button>
        
        <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-serif text-xl tracking-widest text-[#4A4A4A]">AURA</span>
        </div>

        <button className="text-[#4A4A4A] hover:text-black transition-colors duration-300 relative">
          <ShoppingBag size={24} strokeWidth={1} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F7E7E6] rounded-full"></span>
        </button>
      </div>
    </nav>
  );
};