import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const CHARS = 'ABCDEF0123456789';

const generateLine = (length: number) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
  }
  return result;
};

export const DataMatrix: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  const [lines, setLines] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial generation
    const tempLines = [];
    for (let i = 0; i < 20; i++) {
      tempLines.push(generateLine(30));
    }
    setLines(tempLines);

    // Matrix rain effect loop
    const interval = setInterval(() => {
      setLines(prev => prev.map((line, i) => {
        if (Math.random() > 0.8) return generateLine(30);
        return line;
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="font-mono text-xs leading-relaxed opacity-60 overflow-hidden relative h-full">
      {lines.map((line, i) => (
        <div key={i} className="flex justify-between">
            {line.split('').map((char, j) => {
                // Highlight logic based on active section
                const isHighlight = 
                    (activeIndex === 0 && i < 5 && j < 10) ||
                    (activeIndex === 1 && i > 5 && i < 12 && j > 10 && j < 20) ||
                    (activeIndex === 2 && i > 12);
                
                const isPulse = Math.random() > 0.98;

                return (
                    <span 
                        key={j} 
                        className={`
                            transition-colors duration-300
                            ${isHighlight ? 'text-[#00FEE9] opacity-100 font-bold' : 'text-[#EEF2FF] opacity-30'}
                            ${isPulse && isHighlight ? 'text-[#D95372] scale-125 inline-block' : ''}
                        `}
                    >
                        {char}
                    </span>
                )
            })}
        </div>
      ))}
      {/* Scan line overlay */}
      <motion.div 
        className="absolute w-full h-[2px] bg-[#00FEE9] opacity-50 shadow-[0_0_10px_#00FEE9]"
        animate={{ top: ["0%", "100%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
    </div>
  );
};