import React, { useEffect } from 'react';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { MaterialStory } from './components/MaterialStory';
import { CollectionShowcase } from './components/CollectionShowcase';
import { EthicalSourcing } from './components/EthicalSourcing';
import { UGCGrid } from './components/UGCGrid';
import { Footer } from './components/Footer';
import { MagneticButton } from './components/ui/MagneticButton';
import { ShoppingBag, Menu } from 'lucide-react';

const App: React.FC = () => {
  
  // Custom cursor logic could go here, but focusing on the requested interactions
  
  return (
    <div className="bg-oatmeal min-h-screen selection:bg-brass selection:text-white">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-oatmeal">
        <div className="font-serif text-xl font-bold tracking-widest">AELIA</div>
        
        <div className="flex items-center gap-6">
           <MagneticButton className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest hover:text-brass transition-colors">
              Account
           </MagneticButton>
           
           <MagneticButton className="relative">
              <ShoppingBag size={20} className="hover:fill-current transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brass rounded-full" />
           </MagneticButton>

           <MagneticButton>
              <Menu size={24} />
           </MagneticButton>
        </div>
      </nav>

      <main>
        <Hero />
        <Philosophy />
        <MaterialStory />
        <CollectionShowcase />
        <EthicalSourcing />
        <UGCGrid />
      </main>

      <Footer />
    </div>
  );
};

export default App;
