import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Particle System
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      life: number;
    }

    const particles: Particle[] = [];
    const colors = ['#007BFF', '#FF008C', '#7CFC00', '#8A2BE2'];

    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 0.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 100 + Math.random() * 100
      });
    };

    // Animation Loop
    const render = () => {
      // Fade out trail
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Spawn particles from center occasionally to keep it alive
      if (Math.random() < 0.2) {
         createParticle(width / 2, height / 2);
      }
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        // Fluid movement noise
        p.vx += (Math.random() - 0.5) * 0.1;
        p.vy += (Math.random() - 0.5) * 0.1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      requestAnimationFrame(render);
    };

    // Initial Explosion
    for (let i = 0; i < 100; i++) {
      createParticle(width / 2, height / 2);
    }

    render();

    // Text Reveal
    const tl = gsap.timeline();
    tl.fromTo('.hero-title-char', 
      { opacity: 0, y: 100, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.05, duration: 1.5, ease: 'power4.out', delay: 0.5 }
    );

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const title = "CHROMAFLOW";

  return (
    <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-60" />
      
      <h1 className="relative z-10 text-[12vw] font-heading font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-dynamic-grey to-black leading-none select-none mix-blend-multiply">
        {title.split('').map((char, index) => (
          <span key={index} className="hero-title-char inline-block">{char}</span>
        ))}
      </h1>
      
      <div className="absolute bottom-10 animate-bounce">
         <span className="text-xs tracking-[0.2em] font-sans text-gray-400">SCROLL TO DISCOVER</span>
      </div>
    </section>
  );
};

export default Hero;
