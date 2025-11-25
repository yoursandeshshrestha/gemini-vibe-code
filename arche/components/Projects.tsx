import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Mouse tracking for distortion center
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <div 
      className="relative w-[80vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 group cursor-none"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full h-full overflow-hidden relative">
        <div className="absolute inset-0 bg-clay/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
        
        {/* SVG Filter for Distortion */}
        <svg className="absolute w-0 h-0">
          <filter id={`distortion-${project.id}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" className="transition-all duration-500 ease-out group-hover:scale-20" />
          </filter>
        </svg>

        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          style={{ filter: `grayscale(20%) contrast(110%)` }}
        />
        
        {/* Custom Cursor Follower */}
        <motion.div 
          className="absolute z-20 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{ 
            left: 0, 
            top: 0,
            x, 
            y,
            translateX: '-50%',
            translateY: '-50%'
          }}
        >
          <ArrowUpRight className="text-white w-8 h-8" />
        </motion.div>
      </div>

      <div className="mt-6 flex justify-between items-baseline border-t border-softgrey pt-4">
        <h3 className="text-3xl font-serif text-graphite">{project.title}</h3>
        <span className="text-xs font-sans text-graphite/60 uppercase tracking-widest">{project.year} — {project.category}</span>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    // Use a matchMedia check to only apply horizontal scroll on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Calculate total width to scroll
      // We want to scroll enough to see all projects. 
      // Approximate: 300vw is roughly correct for the content provided
      
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-300vw", // Moves content to the left
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=3000", // Fixed syntax: standard absolute scroll distance
            scrub: 0.6,
            pin: true,
            // invalidateOnRefresh: true, // Handle resize better
          },
        }
      );
      return () => {
        pin.kill();
      };
    });
    
    return () => mm.revert();

  }, []);

  return (
    <section className="bg-alabaster overflow-hidden">
       {/* Desktop Horizontal Scroll Container */}
      <div ref={triggerRef} className="hidden md:flex h-screen items-center overflow-hidden">
        <div ref={sectionRef} className="flex gap-24 px-24 h-full items-center will-change-transform">
          <div className="w-[30vw] flex-shrink-0 flex flex-col justify-center">
             <h2 className="text-6xl font-serif mb-6">Selected<br/>Works</h2>
             <p className="font-sans text-sm max-w-xs text-graphite/70">A curation of structures that challenge the landscape.</p>
          </div>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {/* Spacer to ensure last item is fully viewable if needed */}
          <div className="w-[10vw] flex-shrink-0"></div>
        </div>
      </div>

      {/* Mobile Vertical Layout */}
      <div className="md:hidden px-6 py-20 flex flex-col gap-20">
        <div>
           <h2 className="text-5xl font-serif mb-6">Selected Works</h2>
        </div>
        {PROJECTS.map((project) => (
            <div key={project.id} className="w-full">
              <div className="w-full aspect-[4/5] overflow-hidden mb-4">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif">{project.title}</h3>
              <p className="text-xs text-graphite/60 mt-1">{project.year}</p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;