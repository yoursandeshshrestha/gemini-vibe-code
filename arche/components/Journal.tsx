import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { JOURNAL } from '../constants';
import { JournalEntry } from '../types';

const EntryCard: React.FC<{ entry: JournalEntry }> = ({ entry }) => (
  <div className="mb-12 md:mb-24 w-full">
    {entry.type === 'image' ? (
      <div className="group relative overflow-hidden">
        <div className="absolute inset-0 bg-alabaster transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10 opacity-10"></div>
        <img src={entry.content} alt="Journal" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        <p className="mt-3 text-xs font-sans text-graphite/50 uppercase tracking-widest">{entry.date}</p>
      </div>
    ) : (
      <div className="bg-limestone p-8 md:p-12 border border-softgrey/30">
        <p className="font-serif text-2xl md:text-3xl leading-snug italic text-graphite">"{entry.content}"</p>
        <p className="mt-6 text-xs font-sans uppercase tracking-widest text-clay">— {entry.author}</p>
      </div>
    )}
  </div>
);

const Journal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -150]); // Faster scroll for parallax

  const leftColumn = JOURNAL.filter((_, i) => i % 2 === 0);
  const rightColumn = JOURNAL.filter((_, i) => i % 2 !== 0);

  return (
    <section ref={containerRef} className="bg-alabaster px-6 py-24 md:py-40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="text-5xl font-serif mb-4">The Journal</h2>
            <div className="w-px h-16 bg-graphite mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div style={{ y: y1 }}>
            {leftColumn.map(entry => <EntryCard key={entry.id} entry={entry} />)}
          </motion.div>
          <motion.div style={{ y: y2 }}>
            {rightColumn.map(entry => <EntryCard key={entry.id} entry={entry} />)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journal;