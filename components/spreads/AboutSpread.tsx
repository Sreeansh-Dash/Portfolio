import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import BlurText from '../ui/BlurText';
import InkWord from '../InkWord';
import { useAnimation } from '../AnimationContext';
import MistakeText from '../ui/MistakeText';

const AboutSpread: React.FC = () => {
  const { reduceAnimations } = useAnimation();

  return (
    <>
      {/* Left Page: Narrative */}
      <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-texture bg-cover">
        <header className="flex justify-between items-start mb-12 fade-scale" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 opacity-70">
            <span className="material-icons text-gray-600 dark:text-gray-400">menu_book</span>
            <span className="font-display font-bold text-gray-900 dark:text-gray-100 tracking-wide">Portfolio Book</span>
          </div>
          <span className="font-serif text-sm italic text-gray-500 dark:text-gray-400">Chapter II</span>
        </header>

        <div className="flex-grow flex flex-col justify-center">
          <h1 className="font-display text-5xl lg:text-6xl text-primary dark:text-white mb-8 leading-tight">
            <MistakeText text="How I Think" mistakeAt={6} wrongChars="Thnk" />
          </h1>
          <div className="prose dark:prose-invert prose-lg font-serif text-gray-900 dark:text-gray-200 max-w-lg leading-relaxed">
            <p>
              <span className="text-5xl font-display float-left mr-3 mt-[-6px]">I</span>
              <BlurText
                text="'m a third-year AI & ML student at VIT Chennai who builds things before most of my batch knows what they want to build. Not because I'm ahead — but because building is how I learn. I need the problem to be real before the solution means anything to me."
                animateBy="words"
                delay={20}
              />
            </p>
            <p className="mt-6">
              My work cuts across <InkWord>embedded systems</InkWord>, <InkWord>machine learning</InkWord>, and <InkWord>product design</InkWord> — not because I can't focus, but because the most interesting problems sit at exactly those intersections.
            </p>
            <p className="mt-6">
              I care about <InkWord>structural integrity</InkWord>: understanding why a system works, not just that it does.
            </p>
          </div>

          <div className="mt-8 p-4 border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/30 ink-soak" style={{ animationDelay: '1.0s' }}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-400 mb-3">Currently building</p>
            <ul className="space-y-1.5">
              {[
                { name: 'CascadeX', desc: 'Adverse drug interaction scanner' },
                { name: 'Blood Report Analyzer', desc: 'Cluster-adaptive ML diagnostic tool' },
                { name: 'CodeAutopsy', desc: 'GitHub repo architectural mapper (Groq)' },
              ].map((p) => (
                <li key={p.name} className="flex items-baseline gap-2 font-serif text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-accent-blue text-xs font-bold">›</span>
                  <span>
                    <strong className="font-sans font-bold text-gray-900 dark:text-white text-xs uppercase tracking-wider">
                      <InkWord accent>{p.name}</InkWord>
                    </strong>
                    <span className="text-gray-500 dark:text-gray-400 ml-1 italic">— {p.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 font-bold uppercase fade-scale" style={{ animationDelay: '1.2s' }}>
          <span>Vol. 1</span>
          <span>03</span>
        </div>
      </div>

      {/* Right Page: Philosophy */}
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

        {/* Swaying handwritten note */}
        <motion.div
          className="absolute top-24 right-12 w-48 bg-[#fef9c3] dark:bg-[#eab308] dark:bg-opacity-90 p-4 shadow-md z-10"
          animate={reduceAnimations ? { rotate: 2 } : { rotate: [2, 3.5, 2, 0.5, 2] }}
          transition={reduceAnimations ? {} : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="font-handwriting text-xl text-gray-800 dark:text-gray-900 leading-snug">
            <BlurText text="&ldquo;Constraints don't limit the solution. They are the solution.&rdquo;" animateBy="words" delay={25} />
            <span className="block text-right mt-2 text-sm opacity-75">— Note to self</span>
          </div>
          <div className="w-3 h-3 absolute -top-1.5 left-1/2 -ml-1.5 rounded-full bg-gray-400/50 shadow-inner"></div>
        </motion.div>

        <div className="flex-grow flex flex-col mt-32 relative">
          <div className="flex items-start gap-8 mb-10 ink-soak" style={{ animationDelay: '1s' }}>
            <div className="w-32 h-40 flex-shrink-0 bg-gray-200 dark:bg-gray-700 relative overflow-hidden shadow-sm border-4 border-white dark:border-gray-600 transform -rotate-1">
              <img src="/about.jpeg" alt="Sreeansh Dash" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="font-display text-3xl text-gray-900 dark:text-gray-100 mb-2">
                <SplitText text="Way of Thinking" delay={50} duration={0.4} />
              </h2>
              <p className="font-serif italic text-gray-500 dark:text-gray-400 text-lg ink-reveal" style={{ animationDelay: '1.4s' }}>Translating problems to models.</p>
            </div>
          </div>

          <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-8 relative ml-4 ink-soak" style={{ animationDelay: '1.6s' }}>
            <div>
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-black dark:text-white mb-2">Build to understand</h3>
              <p className="font-serif text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                The <InkWord>Smart Cane</InkWord> started as a question: what does "terrain-aware" actually mean in hardware? I built it to find out.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-black dark:text-white mb-2">Systems over features</h3>
              <p className="font-serif text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                The <InkWord>Grievance AI</InkWord> wasn't a classifier. It was a decision pipeline. The difference in framing changes every architectural choice you make.
              </p>
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-black dark:text-white mb-2">Design is structural</h3>
              <p className="font-serif text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
                UX decisions are engineering decisions. Clarity of interface reflects clarity of architecture — you can't fake one without exposing the other.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 font-bold uppercase fade-scale" style={{ animationDelay: '2.5s' }}>
          <span>About Me</span>
          <span>04</span>
        </div>
      </div>
    </>
  );
};

export default AboutSpread;