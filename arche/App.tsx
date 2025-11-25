import React, { useEffect } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import MaterialLibrary from './components/MaterialLibrary';
import Services from './components/Services';
import Journal from './components/Journal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="bg-alabaster text-graphite selection:bg-clay selection:text-white">
        <Navigation />
        <main>
          <Hero />
          <Philosophy />
          <Projects />
          <MaterialLibrary />
          <Services />
          <Journal />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;
