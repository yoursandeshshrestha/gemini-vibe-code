import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Installations from './components/Installations';
import Process from './components/Process';
import Services from './components/Services';
import TheLab from './components/TheLab';
import Footer from './components/Footer';

function App() {
  
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="relative w-full min-h-screen bg-white text-dynamic-grey selection:bg-electric-blue selection:text-white cursor-none">
        <CustomCursor />
        
        <main>
          <Hero />
          <Philosophy />
          <Installations />
          <Process />
          <Services />
          <TheLab />
        </main>
        
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
