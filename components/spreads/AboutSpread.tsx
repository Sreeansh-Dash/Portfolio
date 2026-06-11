import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import InteractiveWord from '../ui/InteractiveWord';
import InkWord from '../InkWord';
import StickyNote from '../StickyNote';
import { useAnimation } from '../AnimationContext';
import MistakeText from '../ui/MistakeText';

const AboutSpread: React.FC = () => {
  const { liteMode: reduceAnimations } = useAnimation();

  return (
    <>
      {/* Left Page: Philosophy & Currently Building */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-light dark:bg-paper-dark bg-paper-texture overflow-hidden">
        <header className="flex justify-between items-start mb-10 flex-shrink-0">
          <div className="flex items-center gap-3 opacity-70">
            <span className="material-icons text-gray-600 dark:text-gray-400">menu_book</span>
            <span className="font-display font-bold text-gray-900 dark:text-gray-100 tracking-wide text-xs uppercase">Portfolio Book</span>
          </div>
          <span className="font-serif text-xs italic text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">Chapter III</span>
        </header>

        <div className="flex-grow flex flex-col justify-start max-w-xl overflow-y-auto custom-scrollbar pr-2">
          <h1 className="font-display text-5xl lg:text-6xl text-primary dark:text-white mb-8 leading-tight font-black">
            <MistakeText text="How I Think" mistakeAt={6} wrongChars="Thnk" />
          </h1>

          <div className="prose dark:prose-invert prose-lg font-serif text-gray-900 dark:text-gray-200 leading-relaxed space-y-6">
            <p className="text-lg md:text-xl">
              <span className="text-5xl font-display font-black float-left mr-3 mt-[-4px]">I</span>
              think in systems first, then in interfaces. Before writing a line of code, I ask: what's the smallest version of this that actually solves the real problem? That question has taken me from training ML models on medical data to soldering sensors onto circuit boards to designing flows in Figma — sometimes in the same week.
            </p>
            <p className="text-lg md:text-xl">
              I'm drawn to problems where the stakes are real: healthcare, accessibility, infrastructure. Not because they're impressive to list, but because the feedback loop is honest — either it helps someone or it doesn't.
            </p>
            <p className="italic text-lg md:text-xl text-gray-600 dark:text-gray-400 border-l-2 border-accent-blue dark:border-blue-400 pl-4">
              The tools I use are incidental. What I care about is whether the thing works for the person it's built for.
            </p>
          </div>

          {/* Currently Building Block */}
          <div className="mt-8 p-5 border border-dashed border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/30 rounded-sm">
            <p className="font-mono text-xs uppercase tracking-widest text-primary dark:text-blue-300 font-bold mb-4">Currently Building</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">CascadeX</h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-400 uppercase tracking-widest">In Progress</span>
                </div>
                <p className="font-serif text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">Medicine barcode scanner flagging dangerous drug combinations. <span className="font-mono text-xs text-gray-500 dark:text-gray-400 font-medium">(Neo4j · Groq · React Native)</span></p>
              </div>
              
              <div>
                <div className="flex justify-between items-baseline mt-1">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">Cluster-Adaptive Blood Analyzer</h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-400 uppercase tracking-widest">Research Done</span>
                </div>
                <p className="font-serif text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">Personalized risk scoring replacing one-size-fits-all limits. <span className="font-mono text-xs text-gray-500 dark:text-gray-400 font-medium">(XGBoost · KMeans · Python)</span></p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mt-1">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-gray-900 dark:text-white">CodeAutopsy</h4>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-400 uppercase tracking-widest">In Progress</span>
                </div>
                <p className="font-serif text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-1">Maps GitHub repo structures visually using Groq LLM. <span className="font-mono text-xs text-gray-500 dark:text-gray-400 font-medium">(Groq API · Python · Graph Viz)</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase flex-shrink-0" aria-hidden="true">
          <span>Vol. 1</span>
          <span>Page 005</span>
        </div>
      </div>

      {/* Right Page: Intellectual Fingerprint, Sticky Note & Skills */}
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

        {/* Pinned handwritten note positioned cleanly in top-right without covering text */}
        <StickyNote className="absolute top-8 right-6 md:right-12 z-20" rotation="-2deg">
          <div className="font-handwriting text-xs md:text-sm text-gray-800 leading-snug max-w-[140px]">
            <span className="block font-bold">Ship something that works.</span>
            <span className="block mt-1">Then make it beautiful.</span>
            <span className="block mt-1">Then ask if it was the right thing to build at all.</span>
            <span className="block text-right mt-2 text-[9px] opacity-75">— note to self</span>
          </div>
        </StickyNote>

        <div className="flex-grow flex flex-col mt-6 relative justify-start overflow-y-auto custom-scrollbar pr-2">
          <div className="flex items-start gap-8 mb-8 pr-24 md:pr-32">
            <div className="w-28 h-36 flex-shrink-0 bg-gray-200 dark:bg-gray-700 relative overflow-hidden shadow-md border-2 border-white dark:border-gray-600 transform -rotate-2">
              <img src="/about.jpeg" alt="Sreeansh working" className="w-full h-full object-cover" />
            </div>
            <div className="pt-3">
              <h2 className="font-display text-2xl text-gray-900 dark:text-gray-100 font-bold mb-1.5">
                Way of Thinking
              </h2>
              <p className="font-serif italic text-gray-500 dark:text-gray-400 text-sm">
                Translating problems to systems.
              </p>
            </div>
          </div>

          {/* Passions list */}
          <div className="mb-8 space-y-3">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-black dark:text-white">Things I think about more than is normal</h4>
            <ul className="space-y-2 font-serif text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed pl-5 list-disc">
              <li>Why standard blood test reference ranges ignore individual metabolic variation</li>
              <li>How much better assistive tech could be if hardware engineers and ML people talked more</li>
              <li>Whether the next wave of medical AI will actually reach primary care</li>
              <li>How to make complex systems feel simple from the outside</li>
            </ul>
          </div>

          {/* Skills block */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-4">
            <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-black dark:text-white mb-4">Technical Toolkit</h4>
            <div className="space-y-3 font-mono text-xs">
              {[
                { category: 'Code', items: ['Python', 'JavaScript', 'Java', 'C/C++'] },
                { category: 'AI/ML', items: ['Deep Learning', 'NLP', 'Computer Vision', 'YOLOv8', 'OpenCV'] },
                { category: 'Build', items: ['React', 'REST APIs', 'Streamlit', 'Git'] },
                { category: 'Hardware', items: ['ESP32', 'Arduino', 'IMU', 'Ultrasonic Sensors'] },
                { category: 'Design', items: ['Figma', 'UX Research', 'Prototyping'] }
              ].map(skill => (
                <div key={skill.category} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-1.5 border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                  <span className="w-24 font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest text-[10px]">{skill.category}</span>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span key={item} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-sans font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase flex-shrink-0" aria-hidden="true">
          <span>About Me</span>
          <span>Page 006</span>
        </div>
      </div>
    </>
  );
};

export default AboutSpread;