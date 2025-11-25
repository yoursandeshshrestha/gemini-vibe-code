import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Modules from './components/Modules';
import Architecture from './components/Architecture';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased text-nexus-navy bg-nexus-bg selection:bg-nexus-teal selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Modules />
        <Architecture />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;