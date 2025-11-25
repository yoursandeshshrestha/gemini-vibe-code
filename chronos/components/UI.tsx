import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    >
        {/* Crosshair Design */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400" />
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-400" />
      <div className="absolute top-1/2 left-1/2 w-2 h-2 border border-cyan-400 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </div>
  );
};

export const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
            <div className="relative flex flex-col items-center">
                {/* Dimensional Rift Effect */}
                <div className="w-2 h-2 bg-white rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-64 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse mb-4"></div>
                <h2 className="font-mono text-xl text-white tracking-[0.5em] animate-pulse">INITIALIZING</h2>
                <div className="mt-2 font-mono text-xs text-purple-400">LOADING ASSETS...</div>
            </div>
        </div>
    )
}