import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { JOURNAL_ENTRIES } from '../constants';

gsap.registerPlugin(ScrollTrigger);

export const Journal: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for cards
      const cards = gsap.utils.toArray<HTMLElement>('.journal-card');
      
      cards.forEach((card, i) => {
        const speed = parseFloat(card.dataset.speed || "1");
        gsap.to(card, {
          y: -50 * speed,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-[#FAFAFA] py-32 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl text-[#4A4A4A]">The Journal</h2>
          <p className="font-sans text-sm mt-4 text-[#4A4A4A]/60 uppercase tracking-widest">Notes on Light & Living</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
          {JOURNAL_ENTRIES.map((entry, index) => (
            <div 
              key={entry.id}
              className={`journal-card flex flex-col ${index % 2 === 0 ? 'mt-0' : 'md:mt-32'}`}
              data-speed={index % 2 === 0 ? "1.2" : "0.8"}
            >
              <div className="w-full h-[400px] overflow-hidden bg-white mb-6 relative group">
                <img 
                  src={entry.image} 
                  alt={entry.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <span className="font-sans text-xs text-[#4A4A4A]/50 uppercase tracking-widest mb-2">{entry.category}</span>
              <h3 className="font-serif text-2xl text-[#4A4A4A] group-hover:underline decoration-[#4A4A4A]/30 underline-offset-4 cursor-pointer">{entry.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};