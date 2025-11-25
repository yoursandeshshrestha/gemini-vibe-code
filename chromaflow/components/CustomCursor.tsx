import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isInteractive = target.closest('a, button, .interactive-target');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Aura / Follower */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-dynamic-grey pointer-events-none z-[9998]"
        style={{
           borderColor: isHovering ? '#FF008C' : '#333333'
        }}
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.8 : 0.3,
          backgroundColor: isHovering ? 'rgba(255, 0, 140, 0.1)' : 'transparent'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
};

export default CustomCursor;
