import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import StickyNote from '../StickyNote';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
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
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-page">
        <div className="mt-4 md:mt-8 relative flex-grow flex flex-col justify-start overflow-y-auto custom-scrollbar scroll-hint-container pr-2 max-w-xl">
          
          {/* Availability & Location Badges */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 dark:bg-green-950/80 border border-green-200 dark:border-green-800 rounded-full text-xs font-mono font-bold tracking-wider text-green-900 dark:text-green-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Internships
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-muted uppercase">
              <span className="material-icons text-sm">place</span>
              Chennai, India
            </span>
          </div>

          {/* Eyebrow */}
          <h4 className="text-accent-blue dark:text-blue-400 font-bold tracking-[0.2em] text-sm uppercase mb-4 font-mono">
            <SplitText text="AI/ML · Full Stack · Product Design" delay={40} duration={0.4} />
          </h4>

          {/* Name */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-ink leading-[0.95] mb-6 tracking-tight">
            <SplitText text="Sreeansh" delay={80} duration={0.4} />
            <br />
            <SplitText text="Dash" delay={80} duration={0.4} />
          </h1>

          {/* Tagline Option A */}
          <p className="font-serif italic text-2xl md:text-3xl text-ink leading-snug mb-6">
            I build systems that think — and products people actually use.
          </p>

          {/* Introductory Paragraph */}
          <p className="font-serif text-base md:text-lg text-ink leading-relaxed mb-8">
            I build things that cross disciplines — ML models trained on medical data, 
            mobile apps backed by graph databases, hardware that detects falls and calls 
            for help. The common thread is always the same: does it actually work for 
            the person it was built for?
          </p>

          {/* Academic Line */}
          <p className="font-mono text-sm text-muted mb-10 border-l-2 border-accent-blue dark:border-blue-400 pl-4 py-1">
            B.Tech CSE (AI/ML) · VIT Chennai · 3rd Year · 9.62/10.0 CGPA
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-5 mb-6">
            <button
              onClick={() => onNavigate(Chapter.INDEX)}
              className="bg-ink text-page px-10 py-4 font-display font-bold tracking-wide text-base flex items-center gap-2.5 hover:opacity-90 transition-opacity shadow-lg cursor-pointer"
              aria-label="View Index"
            >
              View My Work
              <span className="material-icons text-base animate-bounce-horizontal" aria-hidden="true">arrow_forward</span>
            </button>
            
            <a href="/Sreeansh_dash_resume_visual.pdf" download="Sreeansh_Dash_Resume.pdf"
               onClick={handleDownloadClick}
               className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3.5 font-display font-bold tracking-wide text-base text-ink hover:border-gray-800 dark:hover:border-gray-400 transition-colors flex items-center gap-2.5">
              {isDownloading ? (
                <>
                  Downloading… <span className="material-icons text-sm animate-spin">hourglass_top</span>
                </>
              ) : (
                <>
                  Download Resume <span className="material-icons text-sm">download</span>
                </>
              )}
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-mono border-t border-gray-100 dark:border-gray-800/80 pt-6">
            <a href="https://github.com/Sreeansh-Dash" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-muted hover:text-accent-warm transition-colors">
              <span className="material-icons text-base">code</span> GitHub
            </a>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a href="https://www.linkedin.com/in/sreeansh-dash/" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-1.5 text-muted hover:text-accent-warm transition-colors">
              <span className="material-icons text-base">link</span> LinkedIn
            </a>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <a href="mailto:sreeansh786@gmail.com"
               className="flex items-center gap-1.5 text-muted hover:text-accent-warm transition-colors">
              <span className="material-icons text-base">mail_outline</span> sreeansh786@gmail.com
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 pt-8 flex justify-between items-end text-xs tracking-widest text-muted font-bold uppercase" aria-hidden="true">
          <span className="flex items-center gap-1.5">
            <span className="material-icons text-xs animate-bounce">south</span>
            Scroll to read
          </span>
          <span>Page 001</span>
        </div>
      </div>

      {/* Right Page: Large Photo Layout */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative bg-surface justify-center items-center">
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

        <div className="relative w-full max-w-md aspect-[4/5] flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 transform rotate-1 hover:rotate-0 transition-transform duration-500">
          {/* Engineering grid decorations */}
          <div className="absolute inset-0 border border-gray-300/40 dark:border-gray-600/30 m-4 pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-3.5 h-3.5 bg-accent-blue/80 m-2"></div>
          <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-accent-blue/80 m-2"></div>
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-accent-blue/80 m-2"></div>
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-accent-blue/80 m-2"></div>

          <img
            src="/profile.jpg"
            alt="Sreeansh Dash Portrait"
            className="w-full h-full object-cover contrast-[1.05] grayscale-[10%] dark:opacity-90"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/500x625/eae8e6/4b5563?text=Sreeansh+Dash";
            }}
          />

          {/* Sticky Note overlapping photo frame corner */}
          <StickyNote className="absolute -bottom-8 -right-4 z-30" rotation="-3deg">
            <div className="font-handwriting text-base md:text-lg leading-tight text-gray-800 max-w-[140px]">
              <span className="block font-bold">📌 Open to internships</span>
              <span className="block mt-1 text-xs">Software Engineering & AI/ML</span>
              <span className="block text-accent-blue font-bold text-xs mt-1">Summer 2027</span>
            </div>
          </StickyNote>
        </div>

        {/* Small Caption below photo */}
        <p className="mt-12 font-mono text-[10px] tracking-widest text-muted uppercase">
          Figure 1.0 · Portrait of Sreeansh Dash
        </p>

        <div className="mt-auto w-full pt-8 flex justify-between items-end text-xs tracking-widest text-muted font-bold uppercase" aria-hidden="true">
          <span>Vol. 1</span>
          <span>Page 002</span>
        </div>
      </div>
    </>
  );
};

export default CoverSpread;