import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Collections from './components/Collections';
import Materials from './components/Materials';
import Craftsmanship from './components/Craftsmanship';
import Legacy from './components/Legacy';
import Footer from './components/Footer';

const App: React.FC = () => {
  
  useEffect(() => {
    // Initialize Smooth Scroll with "Heavy" settings
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full bg-forge-black text-forge-white selection:bg-forge-copper selection:text-forge-black">
      <Hero />
      <Philosophy />
      <Collections />
      <Materials />
      <Craftsmanship />
      <Legacy />
      <Footer />
    </main>
  );
};

export default App;