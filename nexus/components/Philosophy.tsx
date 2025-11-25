import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [displayText, setDisplayText] = React.useState("");
  const targetText = "COMPLEX PROJECTS REQUIRE INTELLIGENT SIMPLICITY.";
  const chars = "01010101XYZ#@!&%";

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Start decoding when element is in view (approx 0.2 to 0.6 of scroll progress relative to viewport)
    // We want the effect to finish by the time it's centered
    const progress = Math.min(Math.max((latest - 0.2) * 2.5, 0), 1); 
    
    const length = Math.floor(targetText.length * progress);
    const revealed = targetText.substring(0, length);
    
    // Generate scrambled remainder
    let scrambled = "";
    for (let i = length; i < targetText.length; i++) {
        // preserve spaces for layout stability
        if (targetText[i] === ' ') scrambled += ' ';
        else scrambled += chars[Math.floor(Math.random() * chars.length)];
    }
    
    setDisplayText(revealed + scrambled);
  });

  return (
    <section ref={containerRef} className="min-h-[80vh] flex items-center justify-center bg-white border-y border-nexus-silver py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-nexus-navy leading-tight tracking-tighter break-words font-mono text-center">
          {displayText.split("").map((char, index) => (
             <span key={index} className={char === " " ? "" : (targetText[index] === char ? "text-nexus-navy" : "text-nexus-silver")}>
                {char}
             </span>
          ))}
        </h2>
        
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.5, 0.7], [0, 1]) }}
            className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-nexus-navy/70 font-sans">
             Data shouldn't be noise. Nexus decodes your team's workflow into a coherent, actionable signal.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;