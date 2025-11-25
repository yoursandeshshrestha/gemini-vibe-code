import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { Experience } from './components/Experience';
import { Overlay } from './components/Overlay';
import { CustomCursor, Loader } from './components/UI';
import { THEME } from './types';

const App: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  // Simulate asset loading for the "Dimensional Rift" effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {!loaded && <Loader />}
      
      <div className={`w-full h-screen transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: false, alpha: false, stencil: false, depth: true }}
          dpr={[1, 1.5]} // Optimize performance
        >
          <color attach="background" args={[THEME.black]} />
          
          <Suspense fallback={null}>
            {/* ScrollControls manages the virtual scroll and passes data to Experience */}
            <ScrollControls pages={6} damping={0.2} style={{ scrollbarWidth: 'none' }}>
              <Experience />
              <Overlay />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default App;