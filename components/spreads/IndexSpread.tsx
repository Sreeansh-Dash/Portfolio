import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import { NAVIGATION_ITEMS } from '../../constants';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';

interface Props {
  onNavigate: (chapter: Chapter) => void;
}

const IndexSpread: React.FC<Props> = ({ onNavigate }) => {
  return (
    <>
      {/* Left Page: Editorial Context / Introduction */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-light dark:bg-paper-dark bg-paper-texture overflow-hidden">
        <header className="mb-12 flex-shrink-0">
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono">
            <SplitText text="Portfolio Vol. 1" delay={40} duration={0.4} />
          </span>
          <h1 className="font-display text-5xl lg:text-6xl text-primary dark:text-white font-black mb-6 tracking-tight">
            <SplitText text="Chapter II" delay={70} duration={0.4} />
          </h1>
        </header>

        <div className="flex-grow flex flex-col justify-start max-w-lg overflow-y-auto custom-scrollbar scroll-hint-container pr-2">
          <div className="space-y-8">
            <h2 className="font-display text-3xl lg:text-4xl text-gray-900 dark:text-gray-100 italic font-semibold leading-snug">
              "This portfolio is a work in progress — like everything worth building."
            </h2>
            <div className="font-serif text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
              <p>
                <WrittenText 
                  text="Inside this volume is a structured record of my academic path, my philosophy on design and engineering, and three projects built to explore the limits of hardware and software constraints."
                  delay={200}
                  speed={8}
                />
              </p>
              <p>
                Use the index on the right or the red bookmark ribbon in the top corner to jump directly to any chapter.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase flex-shrink-0" aria-hidden="true">
          <span>Introduction</span>
          <span>Page 003</span>
        </div>
      </div>

      {/* Right Page: Table of Contents */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative bg-paper-light dark:bg-paper-dark overflow-hidden">
        {/* Corner curl — sits at bottom-right, appears on hover */}
        <motion.div
          className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background: 'linear-gradient(225deg, rgba(0,0,0,0.08) 45%, transparent 45%)',
            borderLeft: '1px solid rgba(0,0,0,0.08)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
          }}
        />

        <div className="flex items-center gap-3.5 mb-10 opacity-80">
          <span className="material-icons text-3xl text-primary dark:text-white" aria-hidden="true">menu_book</span>
          <span className="font-display font-black text-xl tracking-wide text-primary dark:text-white uppercase">Contents</span>
        </div>

        <div className="mb-10 flex items-baseline justify-between border-b-2 border-gray-300 dark:border-gray-600 pb-5">
          <h2 className="font-display text-5xl md:text-6xl font-black text-primary dark:text-white">Index</h2>
          <span className="font-display italic text-gray-500 dark:text-gray-400 text-lg hidden sm:block">Table of Contents</span>
        </div>

        <nav aria-label="Table of Contents" className="flex-1 space-y-4 overflow-y-auto custom-scrollbar scroll-hint-container pr-3">
          {NAVIGATION_ITEMS.map((item, idx) => {
            const isHere = item.id === Chapter.INDEX;
            return (
              <button
                key={item.id}
                className={`w-full text-left group cursor-pointer p-4 -mx-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 ${isHere ? 'bg-black/[0.03] dark:bg-white/[0.03]' : ''}`}
                onClick={() => onNavigate(item.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate(item.id) }}
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <div className="flex items-baseline gap-5">
                    <span className="text-sm font-mono font-bold text-gray-400 dark:text-gray-500 tracking-widest w-16 group-hover:text-accent-blue transition-colors">CH. {item.roman}</span>
                    <span className="font-display font-black text-2xl text-primary dark:text-white group-hover:text-accent-blue transition-colors underline decoration-transparent group-hover:decoration-accent-blue/30 underline-offset-4">{item.label}</span>
                  </div>
                  <span className="text-sm text-gray-400 dark:text-gray-500 font-mono group-hover:text-primary dark:group-hover:text-white transition-colors">{item.pageNumber}</span>
                </div>
                <div className="flex justify-between pl-20">
                  {isHere ? (
                    <span className="text-xs font-mono font-bold text-accent-blue dark:text-blue-400 uppercase tracking-widest inline-flex items-center gap-2 animate-pulse">
                      You are here
                      <span className="w-2 h-2 rounded-full bg-accent-blue dark:bg-blue-400"></span>
                    </span>
                  ) : (
                    item.subLabel && (
                      <p className="text-base text-gray-500 dark:text-gray-400 italic font-serif group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{item.subLabel}</p>
                    )
                  )}
                </div>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-8 flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase" aria-hidden="true">
          <span>Vol. 1</span>
          <span>Page 004</span>
        </div>
      </div>
    </>
  );
};

export default IndexSpread;
