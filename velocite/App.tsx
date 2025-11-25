import React from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Models } from './components/Models';
import { TechLab } from './components/TechLab';
import { Features } from './components/Features';
import { Circuit } from './components/Circuit';
import { Footer } from './components/Footer';
import { CoPilot } from './components/CoPilot';

function App() {
  return (
    <main className="bg-asphalt text-white min-h-screen selection:bg-electric-cyan selection:text-black">
      <Hero />
      <Manifesto />
      <Models />
      <TechLab />
      <Features />
      <Circuit />
      <Footer />
      <CoPilot />
    </main>
  );
}

export default App;