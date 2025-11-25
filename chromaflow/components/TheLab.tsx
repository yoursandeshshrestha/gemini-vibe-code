import React, { useEffect, useState } from 'react';
import { LabItem } from '../types';
import { useLenis } from '@studio-freight/react-lenis';
import { generateArtDescription } from '../services/geminiService';

const labItems: LabItem[] = [
  { id: '1', type: 'image', content: 'https://picsum.photos/600/600?random=10', span: 'col-span-1 md:col-span-1' },
  { id: '2', type: 'generative', content: 'Code Poetry', span: 'col-span-1 md:col-span-1' },
  { id: '3', type: 'image', content: 'https://picsum.photos/600/800?random=11', span: 'col-span-1 md:col-span-1 row-span-2' },
  { id: '4', type: 'code', content: 'void main() { gl_FragColor = vec4(1.0); }', span: 'col-span-1 md:col-span-2' },
  { id: '5', type: 'image', content: 'https://picsum.photos/600/600?random=12', span: 'col-span-1' },
  { id: '6', type: 'generative', content: 'Simulations', span: 'col-span-1' },
];

const TheLab: React.FC = () => {
  const [skew, setSkew] = useState(0);
  const [scale, setScale] = useState(1);
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});

  useLenis((lenis: any) => {
    // Calculate warp based on velocity
    const velocity = lenis.velocity;
    setSkew(velocity * 0.25);
    // Subtle scale down on fast scroll
    setScale(Math.max(0.95, 1 - Math.abs(velocity) * 0.002));
  });

  // Example of using the Gemini Service
  useEffect(() => {
    const fetchDescriptions = async () => {
       const newDescs: Record<string, string> = {};
       for (const item of labItems) {
         if (item.type === 'generative') {
             // Mocking the call here to prevent API errors in this demo environment, 
             // but using the service structure defined.
             // In real env: const desc = await generateArtDescription(item.content);
             const desc = await Promise.resolve("Algorithmic beauty in constant flux.");
             newDescs[item.id] = desc;
         }
       }
       setDescriptions(newDescs);
    };
    fetchDescriptions();
  }, []);

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
         <h2 className="text-5xl font-heading font-bold">The Lab</h2>
         <p className="text-right text-gray-500 max-w-xs">Experiments, prototypes, and generative sketches.</p>
      </div>

      <div 
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 transition-transform duration-100 ease-linear"
        style={{ transform: `scale(${scale}) skewY(${skew}deg)` }}
      >
        {labItems.map((item) => (
          <div 
            key={item.id} 
            className={`relative group overflow-hidden bg-gray-50 rounded-lg aspect-square ${item.span || ''} ${item.type === 'code' ? 'aspect-auto h-48 md:h-auto' : ''}`}
          >
            {item.type === 'image' && (
              <img src={item.content} alt="Lab experiment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            )}
            
            {item.type === 'code' && (
              <div className="p-6 w-full h-full flex flex-col justify-between bg-black text-lime-green font-mono text-xs md:text-sm overflow-hidden relative">
                 <div className="opacity-50 select-none">
                    {`// GLSL Shader Prototype`}
                    <br/>
                    {`uniform float time;`}
                    <br/>
                    {`varying vec2 vUv;`}
                 </div>
                 <div className="z-10 relative">
                     {item.content}
                 </div>
                 {/* Decorative cursor */}
                 <div className="absolute top-0 right-0 p-2">
                     <div className="w-2 h-2 bg-lime-green animate-pulse rounded-full" />
                 </div>
              </div>
            )}

            {item.type === 'generative' && (
               <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-4 text-center group-hover:bg-dynamic-grey group-hover:text-white transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full border-2 border-current border-dashed animate-[spin_10s_linear_infinite] mb-4" />
                  <h4 className="font-bold text-xl">{item.content}</h4>
                  <p className="text-xs mt-2 opacity-60">
                      {descriptions[item.id] || "Loading synthesis..."}
                  </p>
               </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheLab;
