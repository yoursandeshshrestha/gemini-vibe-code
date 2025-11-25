import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const CollectionShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to rotation degrees
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 1.1]);
  
  // Opacity of annotations based on scroll points
  const annotation1Opacity = useTransform(scrollYProgress, [0.1, 0.2, 0.3], [0, 1, 0]);
  const annotation2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
  const annotation3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 0.9], [0, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-oatmeal">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute top-8 w-full text-center z-10">
          <h3 className="text-espresso font-serif text-3xl">The Collection</h3>
          <p className="text-brass font-mono text-xs uppercase tracking-widest mt-2">Rotate to Inspect</p>
        </div>

        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
          
          {/* Center Rotating Product */}
          <motion.div style={{ rotate, scale }} className="relative z-20 w-3/4 h-3/4">
             {/* Using a placeholder that looks good when rotated or a top-down view would be better for 2D rotation. 
                 Since we don't have a 3D model, we simulate the "Spin" by rotating a top-down or symmetrical view. */}
             <img 
               src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2000&auto=format&fit=crop" 
               alt="Top View Leather Bag"
               className="w-full h-full object-contain drop-shadow-2xl"
             />
          </motion.div>

          {/* Annotations */}
          <Annotation 
            text="Vegetable-Tanned Edge" 
            style={{ opacity: annotation1Opacity }} 
            className="top-1/4 right-0"
            lineAngle={45}
          />
          <Annotation 
            text="Solid Brass Clasp" 
            style={{ opacity: annotation2Opacity }} 
            className="bottom-1/4 left-0"
            lineAngle={-135}
          />
           <Annotation 
            text="Double-Stitched Handle" 
            style={{ opacity: annotation3Opacity }} 
            className="top-0 left-1/4"
            lineAngle={-45}
          />

          {/* Circular Track Background */}
          <div className="absolute inset-0 rounded-full border border-taupe/30 scale-125 pointer-events-none" />
          <div className="absolute inset-0 rounded-full border border-dashed border-taupe/20 scale-150 pointer-events-none" />
          
        </div>

        <div className="absolute bottom-12 w-full flex justify-between px-12 z-10">
            <div className="font-mono text-[10px] text-espresso uppercase">
                Model: 001<br/>
                Finish: Cognac
            </div>
            <div className="font-mono text-[10px] text-espresso uppercase text-right">
                Weight: 0.8kg<br/>
                Capacity: 12L
            </div>
        </div>
      </div>
    </section>
  );
};

const Annotation: React.FC<{ 
  text: string; 
  style: any; 
  className?: string;
  lineAngle?: number;
}> = ({ text, style, className, lineAngle = 0 }) => (
  <motion.div 
    style={style}
    className={`absolute z-30 flex items-center gap-4 ${className}`}
  >
    <div className={`w-3 h-3 bg-forest rounded-full shadow-lg relative`}>
      <div className="absolute inset-0 bg-forest rounded-full animate-ping opacity-20" />
    </div>
    <div className="bg-white/90 backdrop-blur px-3 py-2 border border-taupe shadow-sm rounded-sm">
        <p className="font-mono text-[10px] text-forest uppercase tracking-wide whitespace-nowrap">{text}</p>
    </div>
  </motion.div>
);
