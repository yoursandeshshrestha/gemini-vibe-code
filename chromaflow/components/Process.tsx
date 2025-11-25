import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const topics = [
    { title: "Data Visualization", desc: "Turning chaos into pattern." },
    { title: "Kinetic Sculpture", desc: "Movement as a medium." },
    { title: "Interactive Environs", desc: "Spaces that listen." }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Grid points
    const points: {x: number, y: number, ox: number, oy: number}[] = [];
    const spacing = 40;
    
    const init = () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        points.length = 0;
        for(let x = 0; x < width; x += spacing) {
            for(let y = 0; y < height; y += spacing) {
                points.push({x, y, ox: x, oy: y});
            }
        }
    };
    init();
    window.addEventListener('resize', init);

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
        ctx.clearRect(0, 0, width, height);
        
        // Draw connections or dots
        ctx.fillStyle = '#E0E0E0';
        
        points.forEach(p => {
            // Mouse interaction
            const dx = mouseX - p.ox;
            const dy = mouseY - p.oy;
            const dist = Math.sqrt(dx*dx + dy*dy);
            const maxDist = 200;
            const force = Math.max(0, (maxDist - dist) / maxDist);
            
            // Move points away from mouse (repel) or towards (attract)
            // Let's do a smooth attraction
            const angle = Math.atan2(dy, dx);
            const move = force * 40;
            
            p.x = p.ox - Math.cos(angle) * move;
            p.y = p.oy - Math.sin(angle) * move;

            ctx.beginPath();
            ctx.arc(p.x, p.y, force > 0 ? 2 : 1, 0, Math.PI * 2);
            // Color shift based on interaction
            if (force > 0) {
                 ctx.fillStyle = `rgba(0, 123, 255, ${force})`;
            } else {
                 ctx.fillStyle = '#E0E0E0';
            }
            ctx.fill();
        });

        requestAnimationFrame(animate);
    };
    animate();

    return () => {
        window.removeEventListener('resize', init);
        window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-white flex flex-col justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <div 
            key={index} 
            className="group relative p-8 border border-gray-100 hover:border-transparent transition-colors duration-500 rounded-xl interactive-target"
            onMouseEnter={() => setActiveTopic(index)}
            onMouseLeave={() => setActiveTopic(null)}
          >
            {/* Background Hover Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl shadow-2xl`} />
            
            <div className="relative z-10">
                <div className="w-12 h-12 mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
                    <span className="font-heading font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold mb-2">{topic.title}</h3>
                <p className="text-sm font-sans text-gray-500 mb-6">{topic.desc}</p>
                
                <div className="flex items-center text-xs font-bold uppercase tracking-widest text-electric-blue opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight size={14} className="ml-2" />
                </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 left-0 w-full text-center pointer-events-none">
          <p className="text-xs text-gray-300 uppercase tracking-widest">Interactive Canvas</p>
      </div>
    </section>
  );
};

export default Process;
