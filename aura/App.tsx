import React from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Philosophy } from './sections/Philosophy';
import { Collection } from './sections/Collection';
import { Ingredients } from './sections/Ingredients';
import { Routine } from './sections/Routine';
import { Journal } from './sections/Journal';
import { Footer } from './sections/Footer';

function App() {
  return (
    <SmoothScroll>
      <main className="w-full bg-white text-[#4A4A4A] selection:bg-[#F7E7E6] selection:text-[#4A4A4A]">
        <Navigation />
        <Hero />
        <Philosophy />
        <Collection />
        <Ingredients />
        <Routine />
        <Journal />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;