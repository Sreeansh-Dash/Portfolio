import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import SplitText from '../ui/SplitText';
import BlurText from '../ui/BlurText';
import WrittenText from '../ui/WrittenText';
import InteractiveWord from '../ui/InteractiveWord';

interface Props {
  onNavigate: (chapter: Chapter) => void;
}

const SmartCaneSpread: React.FC<Props> = () => {
  return (
    <>
      {/* Left Page: Narrative & Context */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-light dark:bg-paper-dark bg-paper-texture overflow-hidden">
        <header className="mb-8 flex justify-between items-start flex-shrink-0">
          <div className="flex items-center space-x-2 opacity-70">
            <span className="material-icons text-xs">menu_book</span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold">Portfolio Book</span>
          </div>
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase font-mono">
            Chapter IV
          </span>
        </header>

        <div className="flex-grow space-y-8 max-w-xl justify-start flex flex-col overflow-y-auto custom-scrollbar pr-2">
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-3 tracking-tight">
              <SplitText text="Smart Walking Stick" delay={70} duration={0.4} />
            </h1>
            <h2 className="font-serif text-xl md:text-2xl text-ink-light dark:text-gray-300 italic">
              <SplitText text="Embedded AI for Independent Mobility" delay={60} duration={0.4} />
            </h2>
          </div>

          {/* Problem Framing */}
          <div className="font-serif text-lg text-ink-light dark:text-gray-300 text-justify leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2.5">Problem Framing</h3>
            <p>
              <BlurText
                text="Visually impaired individuals navigating unfamiliar environments face a gap that standard white canes don't address: uneven terrain, sudden drops, and obstacles below knee height. The challenge was building a low-cost, hardware-level response to that gap."
                animateBy="words"
                delay={20}
              />
            </p>
          </div>

          {/* Key Decisions */}
          <div className="font-serif text-base md:text-lg text-ink-light dark:text-gray-300 leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2.5">Key Decisions</h3>
            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
              <li><InteractiveWord text="Ackermann geometry" hoverClass="font-handwriting text-lg text-red-600 dark:text-red-400" /> chosen over simpler pivot steering for natural walking-pace control</li>
              <li>Multi-angle ultrasonic array rather than single forward sensor — covers low obstacles and drops</li>
              <li>Haptic feedback prioritised over audio-only — usable in noisy environments</li>
              <li><InteractiveWord text="Offline-first" hoverClass="font-bold text-primary dark:text-white" />: no cloud dependency, works in any environment</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-8 text-sm">
            {/* Contributors */}
            <div className="flex-grow">
              <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Contributors</h4>
              <div className="font-serif text-sm text-gray-600 dark:text-gray-400 leading-normal">
                <p><span className="italic">Guide:</span> Dr. Sukriti</p>
                <p><span className="italic">Team:</span> R. Harshvardhan, Soumit M.</p>
              </div>
            </div>

            {/* Components */}
            <div className="flex-grow">
              <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Components</h4>
              <ul className="font-mono text-xs text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
                <li>ESP32 Controller</li>
                <li>OV2640 Camera & MPU6050 IMU</li>
                <li>Ultrasonic Sensors & TinyML</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-xs font-mono text-gray-400 dark:text-gray-500 flex-shrink-0">
          Page 007
        </div>
      </div>

      {/* Right Page: Technical Approach & Outcome */}
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

        <div className="flex-grow flex flex-col justify-start max-w-xl space-y-6 overflow-y-auto custom-scrollbar pr-2">
          {/* Section: What Was Built */}
          <div>
            <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white mb-4 border-b-2 border-primary/10 pb-2.5">
              <SplitText text="What Was Built" delay={50} duration={0.4} />
            </h3>
            <p className="font-serif text-base md:text-lg text-ink-light dark:text-gray-300 leading-relaxed text-justify">
              <WrittenText text="A mobility aid integrating Ackermann steering geometry for directional stability, ultrasonic sensors for proximity detection across multiple angles, and haptic + audio feedback calibrated to terrain type and obstacle distance. The system runs entirely on embedded hardware with no external connectivity required." delay={400} speed={8} />
            </p>
          </div>

          {/* Visual Reference */}
          <div className="relative my-6 group flex flex-col items-center">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-40 h-7 bg-yellow-100/80 dark:bg-yellow-900/40 rotate-1 shadow-sm border border-yellow-200/50 backdrop-blur-[1px] z-20"></div>

            <div className="relative">
              <div className="bg-stone-50 dark:bg-stone-850 p-3 shadow-lg rotate-1 border border-stone-200 dark:border-stone-800 transition-transform duration-500 group-hover:rotate-0 inline-block">
                <img
                  src="/smartcane.png"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/500x300/eae8e6/4b5563?text=Prototype+Mk.+I";
                  }}
                  alt="Smart Cane Prototype"
                  className="w-auto h-auto max-h-[200px] object-contain opacity-90 mx-auto"
                />
              </div>
              <div className="text-center mt-3 font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Figure 2.0 · Prototype Chassis & Sensor Mount
              </div>

              {/* Handwritten Annotation - Pointing to chassis */}
              <div className="absolute -right-24 bottom-14 w-36 transform -rotate-12 text-red-800 dark:text-red-400 font-handwriting text-base leading-tight opacity-90 pointer-events-none hidden md:flex flex-col items-center">
                <span className="block mb-1 text-center font-bold">Ackermann steering geometry</span>
                <svg className="w-8 h-8 text-red-800 dark:text-red-400 transform -rotate-45 self-start -ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </div>
          </div>

          {/* What I Learned */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2">What I Learned</h4>
            <p className="font-serif text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
              <WrittenText text="Building in hardware makes every decision irreversible in a way that software doesn't. You can't hot-reload a circuit. That constraint changed how I approach architecture generally — decide slowly, build once." delay={1000} speed={12} fontHandwriting={true} showCursor={true} />
            </p>
          </div>

          {/* Outcome Section */}
          <div className="pt-2">
            <h3 className="font-display text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 font-mono">
              Outcome Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-stone-200 dark:border-stone-800 p-3 bg-stone-50/50 dark:bg-stone-900/30">
                <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1">
                  Real-time
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Obstacle Detection
                </span>
              </div>
              <div className="border border-stone-200 dark:border-stone-800 p-3 bg-stone-50/50 dark:bg-stone-900/30">
                <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1">
                  Low
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Latency & Power
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 flex justify-end text-xs font-mono text-gray-400 dark:text-gray-500 flex-shrink-0">
          Vol. 1 · Page 008
        </div>
      </div>
    </>
  );
};

export default SmartCaneSpread;
