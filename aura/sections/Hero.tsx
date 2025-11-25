import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ripple Animation
      tl.to(rippleRef.current, {
        scale: 1,
        opacity: 0,
        duration: 2.5,
        ease: "power2.out",
        onStart: () => {
          // In a real app, play sound here
        }
      });

      // Text Fade Up
      tl.fromTo(textRef.current, 
        { y: 50, opacity: 0, filter: "blur(10px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" },
        "-=1.5"
      );

      setMounted(true);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-white">
      {/* Ripple Element */}
      <div 
        ref={rippleRef}
        className="absolute w-[50px] h-[50px] rounded-full border border-[#F0F0F0] scale-0 opacity-100 origin-center"
        style={{ borderWidth: '1px' }}
      ></div>
      <div 
        className="absolute w-[50px] h-[50px] rounded-full border border-[#FAFAFA] scale-0 opacity-50 origin-center"
        style={{ animation: mounted ? 'ripple 3s ease-out forwards' : 'none', animationDelay: '0.2s' }}
      ></div>

      {/* Main Content */}
      <div ref={textRef} className="text-center z-10 opacity-0">
        <h1 className="font-serif text-6xl md:text-9xl tracking-[0.2em] text-[#4A4A4A] mb-4">AURA</h1>
        <p className="font-sans text-[#4A4A4A]/60 tracking-widest text-sm uppercase">Botanical Skincare</p>
      </div>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.8; border-width: 2px; }
          100% { transform: scale(30); opacity: 0; border-width: 0px; }
        }
      `}</style>
    </section>
  );
};