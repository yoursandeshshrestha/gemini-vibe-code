import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current, 
        { 
          filter: "blur(20px)", 
          opacity: 0.2,
          y: 50
        },
        {
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          color: "#4A4A4A",
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "center center",
            scrub: 1,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-6 py-20">
      <div className="max-w-4xl text-center">
        <h2 ref={textRef} className="font-serif text-4xl md:text-6xl leading-tight text-[#4A4A4A]">
          Beauty that reveals your inner luminosity. <br />
          <span className="text-3xl md:text-5xl italic opacity-80 mt-4 block font-light">Crafted in light.</span>
        </h2>
      </div>
    </section>
  );
};