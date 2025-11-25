import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current || !containerRef.current) return;

    const chars = textRef.current.querySelectorAll('.char');
    
    // Animate colors across the spectrum based on scroll
    gsap.to(chars, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      color: (i) => {
        // Pseudo-random gradient mapping
        const colors = ['#007BFF', '#FF008C', '#7CFC00', '#8A2BE2'];
        return colors[i % colors.length];
      },
      letterSpacing: "0.05em", // Expand subtly
      stagger: 0.01,
      ease: "none"
    });

  }, []);

  const text = "Where algorithms paint with light.";

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 md:px-20 min-h-[80vh] flex items-center justify-center bg-white">
      <div className="max-w-6xl w-full">
        <h2 ref={textRef} className="text-5xl md:text-8xl font-heading font-bold leading-tight text-dynamic-grey text-center">
          {text.split('').map((char, i) => (
            <span key={i} className="char inline-block transition-colors duration-300">
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>
        
        <div className="mt-16 flex justify-center">
             <p className="max-w-xl text-center text-lg md:text-xl font-sans text-gray-500 leading-relaxed">
               We don't just design visuals; we code living ecosystems. Our work bridges the gap between digital precision and organic chaos.
             </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
