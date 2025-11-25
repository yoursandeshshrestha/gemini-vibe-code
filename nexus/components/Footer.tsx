import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const [userCount, setUserCount] = useState(12403);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live user count increase occasionally
      if (Math.random() > 0.7) {
        setUserCount(prev => prev + 1);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-nexus-navy text-white pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main CTA */}
        <div className="relative mb-24 group cursor-pointer">
          <div className="absolute inset-0 bg-nexus-teal w-0 group-hover:w-full transition-all duration-700 ease-out z-0" />
          <div className="relative z-10 border-t border-b border-white/20 py-16 flex justify-between items-center px-4 md:px-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Start Your Free Trial</h2>
            <div className="bg-white text-nexus-navy rounded-full p-4 group-hover:rotate-45 transition-transform duration-500">
              <ArrowRight size={32} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nexus</h3>
            <p className="text-white/60 max-w-sm font-sans mb-8">
              The intelligent operating system for modern product teams. Streamline, automate, and scale with precision.
            </p>
            <div className="font-mono text-nexus-teal text-sm flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              LIVE USERS: {userCount.toLocaleString()}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-mono text-white/40 text-sm">PRODUCT</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">Features</li>
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">Integrations</li>
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">Security</li>
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">Enterprise</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-white/40 text-sm">COMPANY</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">About</li>
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">Blog</li>
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-nexus-teal cursor-pointer transition-colors">Legal</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-mono">
           <p>© 2024 NEXUS SYSTEMS INC. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <span>PRIVACY POLICY</span>
             <span>TERMS OF SERVICE</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;