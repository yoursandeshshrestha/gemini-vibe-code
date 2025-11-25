import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Create a stable reference for the ticker callback
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    // Add listener
    gsap.ticker.add(update);

    // Disable lag smoothing in GSAP to prevent jumps during smooth scrolling
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Cleanup: Remove the EXACT same listener function
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <div className="w-full min-h-screen">{children}</div>;
};

export default SmoothScroll;