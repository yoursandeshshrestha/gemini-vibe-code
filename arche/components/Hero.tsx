import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !svgRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2000", // Increased scroll distance for a heavier, more luxurious feel
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Scale the text mask up until it reveals everything
    // Starting from scale 1 (normal) to scale 100 (huge opening)
    tl.to(textRef.current, {
      scale: 100, 
      transformOrigin: "50% 50%", // Critical: scale exactly from center
      ease: "power2.inOut",
    });

    // Fade out the overlay color near the end to ensure smooth transition
    tl.to(svgRef.current, {
      opacity: 0,
      ease: "power1.out"
    }, "<60%"); // Start fading when scaling is 60% done

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-graphite z-40">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
         <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-sunlight-through-the-trees-of-a-forest-32386-large.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-warm-filter opacity-20 pointer-events-none mix-blend-overlay"></div>
      </div>

      {/* The Curtain Mask */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <svg 
          ref={svgRef}
          className="w-full h-full" 
          viewBox="0 0 1920 1080" 
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="white" />
              <text 
                ref={textRef}
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dominantBaseline="central" 
                fontSize="320" 
                fontWeight="bold" 
                fontFamily="Playfair Display"
                fill="black"
              >
                ARCHÉ
              </text>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="#F2F0E9" mask="url(#text-mask)" />
        </svg>
      </div>

      <div className="absolute bottom-12 left-0 w-full flex justify-center z-20 pointer-events-none">
         <p className="text-xs font-sans tracking-[0.2em] text-graphite uppercase animate-bounce">Scroll to Enter</p>
      </div>
    </section>
  );
};

export default Hero;