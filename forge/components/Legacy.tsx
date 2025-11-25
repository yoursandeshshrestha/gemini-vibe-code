import React from 'react';
import { TIMELINE } from '../constants';

const Legacy: React.FC = () => {
  return (
    <section className="py-32 bg-forge-charcoal relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* Center Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-forge-pencil"></div>

        <div className="space-y-24">
          {TIMELINE.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <span className="block text-forge-copper font-display text-4xl mb-2 bg-forge-charcoal inline-block px-2 border border-forge-pencil/50">
                    {event.year}
                  </span>
                  <h3 className="text-3xl font-serif text-forge-white mb-4">{event.title}</h3>
                  <p className="text-forge-white/70 font-sans">{event.description}</p>
                </div>

                {/* Dot on Line */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-forge-brass rounded-full -translate-x-1/2 border-4 border-forge-charcoal z-10"></div>

                {/* Image Side (Optional) */}
                <div className="w-full md:w-1/2 hidden md:flex justify-center items-center p-8">
                  {event.image && (
                     <div className="w-48 h-32 overflow-hidden border border-forge-white/20 rotate-3">
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                     </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Legacy;