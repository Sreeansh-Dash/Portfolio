import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import { useAnimation } from '../AnimationContext';

const CascadeXSpread: React.FC = () => {
  const { reduceAnimations } = useAnimation();
  const [hoveredMockup, setHoveredMockup] = useState(false);

  return (
    <>
      {/* Left Page: Narrative & Problem Framing */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-750/50 bg-paper-texture">
        <header className="mb-8 flex justify-between items-start">
          <div className="flex items-center space-x-2 opacity-70">
            <span className="material-icons text-xs">menu_book</span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold">Portfolio Book</span>
          </div>
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase font-mono">
            Chapter VI
          </span>
        </header>

        <div className="flex-grow space-y-8 max-w-xl justify-center flex flex-col">
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-3 tracking-tight">
              <SplitText text="CascadeX" delay={70} duration={0.4} />
            </h1>
            <h2 className="font-serif text-xl md:text-2xl text-ink-light dark:text-gray-300 italic">
              <SplitText text="Scan first. Take second." delay={60} duration={0.4} />
            </h2>
          </div>

          {/* Problem Framing */}
          <div className="font-serif text-lg text-ink-light dark:text-gray-300 text-justify leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2.5">Problem Framing</h3>
            <p>
              Polypharmacy — taking multiple medications simultaneously — is one of the most under-addressed risks for elderly patients. CascadeX makes the hidden danger visible.
            </p>
          </div>

          {/* Technical Approach */}
          <div className="font-serif text-base md:text-lg text-ink-light dark:text-gray-300 leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2.5">Technical Approach</h3>
            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
              <li><strong>Neo4j Graph Database:</strong> Queries known adverse drug-drug interactions in real-time.</li>
              <li><strong>Groq API Integration:</strong> Explains clinical interaction risks in natural, reassuring, plain language that anyone can understand.</li>
              <li><strong>Expo EAS Build:</strong> Cross-platform native mobile app designed for fast performance and ease of camera scanner invocation.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-8 text-sm">
            {/* Tech Tags */}
            <div className="flex-grow">
              <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Toolkit</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['React Native', 'Neo4j', 'Groq API', 'Expo EAS', 'Graph Database', 'TypeScript'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-gray-700 dark:text-gray-300 rounded text-xs font-mono">{tag}</span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="flex-grow">
              <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Status</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">In Progress</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-xs font-mono text-gray-400 dark:text-gray-500">
          Page 011
        </div>
      </div>

      {/* Right Page: Visual Mockups & Interactions */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative bg-paper-light dark:bg-paper-dark">
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

        <div className="flex-grow flex flex-col justify-center max-w-xl space-y-6">
          {/* Section: Mobile Interaction */}
          <div>
            <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white mb-4 border-b-2 border-primary/10 pb-2.5">
              <SplitText text="Mobile Interaction" delay={50} duration={0.4} />
            </h3>
            <p className="font-serif text-base md:text-lg text-ink-light dark:text-gray-300 leading-relaxed text-justify">
              Designed with a simple camera scan interface so that elderly patients can scan barcodes on prescription bottles. The application outputs immediate alerts without requiring complicated navigation.
            </p>
          </div>

          {/* Phone Mockup Frame Placeholder */}
          <div 
            className="relative w-full h-64 mt-4 overflow-hidden rounded bg-stone-50 dark:bg-stone-900/30 p-4 flex items-center justify-center border border-stone-100 dark:border-stone-850"
            onMouseEnter={() => setHoveredMockup(true)}
            onMouseLeave={() => setHoveredMockup(false)}
          >
            <div className="relative w-full max-w-[280px] h-full flex items-center justify-center">
              
              {/* Phone Mockup 1 (Background - Scan Mode) */}
              <motion.div 
                className="absolute left-6 w-28 h-48 bg-white dark:bg-gray-800 p-1 border-2 border-stone-300 dark:border-stone-700 rounded-2xl shadow-md z-10 origin-bottom-left"
                animate={hoveredMockup && !reduceAnimations ? { rotate: -10, x: -10 } : { rotate: -6, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-stone-950 rounded-xl flex flex-col items-center justify-center p-2 relative overflow-hidden">
                  {/* Camera view simulation */}
                  <div className="absolute inset-2 border-2 border-dashed border-white/20 rounded flex items-center justify-center">
                    <span className="material-icons text-xl text-white/40">qr_code_scanner</span>
                  </div>
                  <span className="absolute bottom-2 font-mono text-[7px] text-white/40 uppercase font-bold tracking-widest">Aim at Barcode</span>
                </div>
              </motion.div>

              {/* Phone Mockup 2 (Foreground - Warning Result) */}
              <motion.div 
                className="absolute right-6 w-32 h-52 bg-white dark:bg-gray-800 p-1 border-2 border-stone-400 dark:border-stone-600 rounded-2xl shadow-2xl z-20 origin-top-right"
                animate={hoveredMockup && !reduceAnimations ? { rotate: 3, scale: 1.05, x: 10 } : { rotate: 0, scale: 1.0, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-stone-950 rounded-xl flex flex-col justify-between p-3 text-white">
                  {/* Warning dialog simulation */}
                  <div className="text-center mt-2">
                    <span className="material-icons text-red-500 text-lg">warning</span>
                    <h5 className="font-mono text-[8px] font-bold text-red-400 tracking-wider mt-1">ALERT DECTECTED</h5>
                  </div>
                  
                  <div className="border border-red-500/20 bg-red-950/20 p-1.5 rounded text-left my-2">
                    <p className="font-sans text-[7px] leading-tight text-red-200">
                      <strong>Aspirin + Ibuprofen:</strong> High risk of gastrointestinal irritation.
                    </p>
                  </div>
                  
                  <div className="bg-stone-900 p-1.5 rounded text-left">
                    <p className="font-serif text-[6px] leading-snug text-gray-400">
                      "Ask your physician before combining these two pain relievers."
                    </p>
                  </div>

                  <span className="font-mono text-[6px] text-gray-500 tracking-widest text-center uppercase mt-1">CascadeX v0.1</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Screenshots text caption */}
          <div className="text-center font-mono text-xs text-gray-400 uppercase tracking-widest">
            [ CascadeX — App Screenshots Coming Soon ]
          </div>
        </div>

        <div className="mt-8 pt-8 flex justify-end text-xs font-mono text-gray-400 dark:text-gray-500">
          Vol. 1 · Page 012
        </div>
      </div>
    </>
  );
};

export default CascadeXSpread;
