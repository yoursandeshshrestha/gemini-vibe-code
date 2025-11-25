import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-nexus-silver py-3" : "bg-transparent"
      )}
    >
      <div className="text-xl font-bold tracking-tight text-nexus-navy flex items-center gap-2">
        <div className="w-5 h-5 bg-nexus-navy rounded-sm" />
        NEXUS
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-nexus-navy">
        <a href="#" className="hover:text-nexus-teal transition-colors">Product</a>
        <a href="#" className="hover:text-nexus-teal transition-colors">Solutions</a>
        <a href="#" className="hover:text-nexus-teal transition-colors">Pricing</a>
      </div>
      
      <button className="px-5 py-2 border border-nexus-navy text-nexus-navy font-mono text-xs hover:bg-nexus-navy hover:text-white transition-colors uppercase">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;