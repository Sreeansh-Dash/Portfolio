import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import { NAVIGATION_ITEMS } from '../../constants';
import StickyNote from '../StickyNote';
import SplitText from '../ui/SplitText';
import BlurText from '../ui/BlurText';
import MistakeText from '../ui/MistakeText';

interface Props {
  onNavigate: (chapter: Chapter) => void;
}

const CoverSpread: React.FC<Props> = ({ onNavigate }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <>
      {/* Left Page: Hero / Intro (Personal Details) */}
      <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50">
        <div className="mt-8 md:mt-16 relative">
          <StickyNote className="-top-4 -right-4 md:-right-8" rotation="6deg">
            <div className="font-handwriting text-2xl leading-tight text-gray-800">
              <BlurText text="Building 3 projects before semester 6 ends." animateBy="words" delay={30} />
              <span className="block text-right mt-2 text-base">— S.D.</span>
            </div>
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

          {/* Title and details */}
          <h4 className="text-accent-blue font-bold tracking-widest text-xs uppercase mb-4">
            <SplitText text="Portfolio & Journal" delay={40} duration={0.4} />
          </h4>
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-primary dark:text-white leading-[0.9] mb-6">
            <SplitText text="Sreeansh" delay={80} duration={0.4} />
            <br />
            <SplitText text="Dash" delay={80} duration={0.4} />
          </h1>

          <p className="font-display italic text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-2">
            <SplitText text="AI & ML · Full Stack · Product Design" delay={30} duration={0.4} />
          </p>

          <p className="font-sans text-sm text-gray-500 mb-8 ink-reveal" style={{ animationDelay: '0.6s' }}>
            B.Tech CSE (AI & ML) — VIT Chennai · 9.62 CGPA · 5th Semester
          </p>

          <hr className="w-16 border-t-2 border-gray-200 dark:border-gray-700 mb-8 fade-scale" style={{ animationDelay: '0.9s' }} />

          <p className="font-serif italic text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-md mb-12">
            <MistakeText text="“I don't wait to understand things before building them.”" mistakeAt={42} wrongChars="builsing" />
          </p>

          <div className="flex flex-wrap gap-4 mb-8 ink-soak" style={{ animationDelay: '1.4s' }}>
            <button
              onClick={() => onNavigate(Chapter.PROJECTS)}
              className="bg-primary text-white dark:bg-white dark:text-primary px-8 py-3 font-display font-bold tracking-wide text-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              aria-label="View Projects"
            >
              View Work
              <span className="material-icons text-sm" aria-hidden="true">arrow_forward</span>
            </button>
            <a href="/Sreeansh_dash_resume_visual.pdf" download="Sreeansh_Dash_Resume.pdf"
               onClick={handleDownloadClick}
               className="border border-gray-300 dark:border-gray-600 px-6 py-2.5 font-display font-bold tracking-wide text-sm text-gray-800 dark:text-gray-200 hover:border-gray-800 transition-colors flex items-center gap-2">
              {isDownloading ? (
                <>
                  Downloading… <span className="material-icons text-sm animate-spin">hourglass_top</span>
                </>
              ) : (
                <>
                  Resume <span className="material-icons text-sm">download</span>
                </>
              )}
            </a>
          </div>

          <div className="flex items-center gap-5 ink-soak animate-delay-1500" style={{ animationDelay: '1.5s' }}>
            <a href="https://www.linkedin.com/in/sreeansh-dash/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-gray-500 hover:text-accent-blue transition-colors">
              <span className="material-icons text-base">link</span> LinkedIn
            </a>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a href="https://github.com/Sreeansh-Dash" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-gray-500 hover:text-accent-blue transition-colors">
              <span className="material-icons text-base">code</span> GitHub
            </a>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a href="mailto:sreeansh786@gmail.com"
               className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-gray-500 hover:text-accent-blue transition-colors">
              <span className="material-icons text-base">mail_outline</span> Email
            </a>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase fade-scale" style={{ animationDelay: '1.5s' }} aria-hidden="true">
          <span>Preface</span>
          <span>Page 001</span>
        </div>
      </div>

      {/* Right Page: Table of Contents (Index) */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">
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

        <div className="flex items-center gap-3 mb-12 opacity-70 fade-scale" style={{ animationDelay: '0.3s' }}>
          <span className="material-icons text-2xl" aria-hidden="true">menu_book</span>
          <span className="font-display font-bold text-lg tracking-wide">Portfolio Book</span>
        </div>

        <div className="mb-10 flex items-baseline justify-between border-b border-gray-300 dark:border-gray-600 pb-4 ink-reveal" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary dark:text-white">Index</h2>
          <span className="font-display italic text-gray-500 dark:text-gray-400 text-lg hidden sm:block">Table of Contents</span>
        </div>

        <nav aria-label="Table of Contents" className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-2">
          {NAVIGATION_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              className="w-full text-left group cursor-pointer fade-scale p-5 -mx-5 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              style={{ animationDelay: `${0.6 + (idx * 0.1)}s` }}
              onClick={() => onNavigate(item.id)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onNavigate(item.id) }}
            >
              <div className="flex items-baseline justify-between mb-1">
                <div className="flex items-baseline gap-6">
                  <span className="text-sm font-bold text-gray-400 dark:text-gray-500 tracking-widest w-12 group-hover:text-accent-blue transition-colors">CH. {item.roman}</span>
                  <span className="font-display font-bold text-2xl text-primary dark:text-white group-hover:text-accent-blue transition-colors underline decoration-transparent group-hover:decoration-accent-blue/30 underline-offset-4">{item.label}</span>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-mono group-hover:text-primary dark:group-hover:text-white transition-colors">{item.pageNumber}</span>
              </div>
              {item.subLabel && (
                <p className="text-base text-gray-500 dark:text-gray-400 pl-[4.5rem] italic font-display group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{item.subLabel}</p>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase fade-scale" style={{ animationDelay: '1.5s' }} aria-hidden="true">
          <span>Vol. 1</span>
          <span>Page 002</span>
        </div>
      </div>
    </>
  );
};

export default CoverSpread;