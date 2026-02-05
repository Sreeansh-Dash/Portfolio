import React from 'react';
import { Chapter } from '../../types';
import { NAVIGATION_ITEMS } from '../../constants';
import StickyNote from '../StickyNote';

interface Props {
  onNavigate: (chapter: Chapter) => void;
}

const CoverSpread: React.FC<Props> = ({ onNavigate }) => {
  return (
    <>
      {/* Left Page: Hero / Intro (Personal Details) */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative border-r border-gray-200 dark:border-gray-700/50">
        <div className="mt-8 md:mt-16 relative">
          <StickyNote className="-top-4 -right-4 md:-right-8 ink-soak" rotation="6deg" style={{ animationDelay: '1.2s' }}>
            <p className="font-handwriting text-2xl leading-tight">Smart-working,<br />Analytical,<br />Innovative,<br />Reliable.<br /><span className="block text-right mt-2 text-base">- S.D.</span></p>
          </StickyNote>

          {/* Photo Space */}
          <div className="mb-8 w-32 h-32 md:w-40 md:h-40 relative ink-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="absolute inset-0 border-2 border-gray-200 dark:border-gray-600 transform -rotate-2"></div>
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 shadow-sm p-1 transform rotate-1">
              <img
                src="/profile.jpg"
                alt="Sreeansh Dash"
                className="w-full h-full object-cover contrast-125"
              />
            </div>
          </div>

          <h4 className="text-accent-blue font-bold tracking-widest text-xs uppercase mb-4 ink-reveal" style={{ animationDelay: '0.2s' }}>Portfolio & Journal</h4>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary dark:text-white leading-[0.9] mb-6 ink-reveal" style={{ animationDelay: '0.4s' }}>
            Sreeansh<br />Dash
          </h1>

          <div className="flex items-center gap-4 mb-8 ink-soak" style={{ animationDelay: '0.8s' }}>
            <div className="w-1 h-12 bg-gray-200 dark:bg-gray-700"></div>
            <p className="font-display italic text-xl md:text-2xl text-gray-600 dark:text-gray-300">B.Tech CSE (AI & ML) Student</p>
          </div>

          <hr className="w-16 border-t-2 border-gray-200 dark:border-gray-700 mb-8 fade-scale" style={{ animationDelay: '0.9s' }} />

          <p className="font-serif italic text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-md mb-12 ink-soak" style={{ animationDelay: '1s' }}>
            "To turn the page is to move from thought to creation"
          </p>

          <div className="flex flex-wrap gap-4 ink-soak" style={{ animationDelay: '1.4s' }}>
            <button
              onClick={() => onNavigate(Chapter.PROJECTS)}
              className="bg-primary text-white dark:bg-white dark:text-primary px-8 py-3 font-display font-bold tracking-wide text-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
            >
              View Work
              <span className="material-icons text-sm">arrow_forward</span>
            </button>
            <button
              onClick={() => onNavigate(Chapter.CLOSING)}
              className="border border-gray-300 dark:border-gray-600 px-8 py-3 font-display font-bold tracking-wide text-sm text-gray-800 dark:text-gray-200 hover:border-gray-800 dark:hover:border-gray-300 transition-colors"
            >
              CONTACT
            </button>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase fade-scale" style={{ animationDelay: '1.5s' }}>
          <span>Preface</span>
          <span>Page 001</span>
        </div>
      </div>

      {/* Right Page: Table of Contents (Index) */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">
        <div className="flex items-center gap-3 mb-12 opacity-70 fade-scale" style={{ animationDelay: '0.3s' }}>
          <span className="material-icons text-2xl">menu_book</span>
          <span className="font-display font-bold text-lg tracking-wide">Portfolio Book</span>
        </div>

        <div className="mb-10 flex items-baseline justify-between border-b border-gray-300 dark:border-gray-600 pb-4 ink-reveal" style={{ animationDelay: '0.5s' }}>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary dark:text-white">Index</h1>
          <span className="font-display italic text-gray-500 dark:text-gray-400 text-lg hidden sm:block">Table of Contents</span>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-2">
          {NAVIGATION_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className="group cursor-pointer fade-scale p-5 -mx-5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              style={{ animationDelay: `${0.6 + (idx * 0.1)}s` }}
              onClick={() => onNavigate(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate(item.id) }}
            >
              <div className="flex items-baseline justify-between mb-1">
                <div className="flex items-baseline gap-6">
                  <span className="text-sm font-bold text-gray-400 dark:text-gray-500 tracking-widest w-12 group-hover:text-accent-blue transition-colors">CH. {item.roman}</span>
                  <h3 className="font-display font-bold text-2xl text-primary dark:text-white group-hover:text-accent-blue transition-colors underline decoration-transparent group-hover:decoration-accent-blue/30 underline-offset-4">{item.label}</h3>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono group-hover:text-primary dark:group-hover:text-white transition-colors">{item.pageNumber}</span>
              </div>
              {item.subLabel && (
                <p className="text-base text-gray-500 dark:text-gray-400 pl-[4.5rem] italic font-display group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{item.subLabel}</p>
              )}
            </div>
          ))}
        </div>

        <span>Vol. 1</span>
        <span>Page 002</span>
      </div>
    </>
  );
};

export default CoverSpread;