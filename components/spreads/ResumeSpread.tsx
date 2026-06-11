import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import { useAnimation } from '../AnimationContext';

const ResumeSpread: React.FC = () => {
  const { reduceAnimations } = useAnimation();

  return (
    <>
      {/* Left Page: Header & Education */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-texture">
        <header className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-2 text-ink-light dark:text-ink-dark opacity-70">
            <span className="material-icons text-sm">menu_book</span>
            <span className="text-xs uppercase tracking-widest font-semibold font-mono">Portfolio Book</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 font-serif italic uppercase tracking-widest font-bold">Chapter VII</div>
        </header>

        <div className="space-y-8 flex-grow flex flex-col justify-center max-w-xl">
          <div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-primary dark:text-white mb-2 leading-none">
              <SplitText text="The Paper Trail" delay={80} duration={0.4} />
            </h1>
            <p className="font-serif text-xl italic text-gray-500 dark:text-gray-400 border-b pb-4 border-gray-300 dark:border-gray-700">
              Everything in one place.
            </p>
          </div>

          {/* Key Highlights (Callout Cards) */}
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="border border-stone-200 dark:border-stone-850 p-4 bg-white/50 dark:bg-stone-900/40 rounded-sm">
              <span className="block text-base font-bold text-primary dark:text-white font-mono leading-none">9.62 CGPA</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">VIT Chennai</span>
              <span className="block text-[9px] text-gray-500 font-serif italic mt-0.5">B.Tech CSE AI/ML</span>
            </div>
            
            <div className="border border-stone-200 dark:border-stone-850 p-4 bg-white/50 dark:bg-stone-900/40 rounded-sm">
              <span className="block text-base font-bold text-primary dark:text-white font-mono leading-none">Patent Pending</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">Smart Walking Stick</span>
              <span className="block text-[9px] text-gray-500 font-serif italic mt-0.5">Design Under Review</span>
            </div>

            <div className="border border-stone-200 dark:border-stone-850 p-4 bg-white/50 dark:bg-stone-900/40 rounded-sm">
              <span className="block text-base font-bold text-primary dark:text-white font-mono leading-none">Google UX</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-1">Certified Series</span>
              <span className="block text-[9px] text-gray-500 font-serif italic mt-0.5">Figma · UX Research</span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-widest text-primary dark:text-blue-300 font-bold font-mono">Education</h3>

            <div className="flex justify-between items-baseline border-b border-dashed border-gray-300 dark:border-gray-700 pb-3">
              <div>
                <h4 className="font-sans font-bold text-base text-gray-900 dark:text-white uppercase tracking-wide">Vellore Institute of Technology</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic font-serif">B.Tech in Computer Science & Engineering (AI/ML)</p>
                <p className="text-xs text-accent-blue font-bold font-mono mt-1">CGPA: 9.62 / 10.0</p>
              </div>
              <span className="text-xs font-mono text-gray-400 font-medium whitespace-nowrap ml-4">2024 – 2028 (Expected)</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-dashed border-gray-300 dark:border-gray-700 pb-3">
              <div>
                <h4 className="font-sans font-bold text-base text-gray-900 dark:text-white uppercase tracking-wide">Delhi Public School, Bhilai</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic font-serif">CBSE Class XII</p>
                <p className="text-xs text-accent-blue font-bold font-mono mt-1">Percentage: 93.4%</p>
              </div>
              <span className="text-xs font-mono text-gray-400 font-medium whitespace-nowrap ml-4">Graduated 2024</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase" aria-hidden="true">
          <span>The Paper Trail</span>
          <span>Page 013</span>
        </div>
      </div>

      {/* Right Page: Experience & Certifications */}
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

        {/* Download Action (Top Right) */}
        <div className="absolute top-10 right-6 md:right-12 z-30">
          <a
            href="/Sreeansh_dash_resume_visual.pdf"
            download="Sreeansh_Dash_Resume.pdf"
            className="group flex flex-col items-end gap-1 text-gray-500 hover:text-primary dark:hover:text-white transition-colors"
          >
            <div className="flex items-center gap-1.5 px-3.5 py-2 border border-stone-300 dark:border-stone-700 bg-white/40 dark:bg-gray-800/40 rounded-sm hover:border-gray-800 dark:hover:border-gray-550 transition-colors">
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Download Resume — PDF</span>
              <span className="material-icons text-sm group-hover:translate-y-0.5 transition-transform">download</span>
            </div>
            {/* Handwritten nudge */}
            <motion.span
              className="font-handwriting text-gray-400 text-xs block -mr-2 mt-1"
              animate={reduceAnimations ? { rotate: -2 } : { rotate: [-2, -0.5, -2, -3.5, -2] }}
              transition={reduceAnimations ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <WrittenText text="Full print version?" delay={400} speed={15} showCursor={true} />
            </motion.span>
          </a>
        </div>

        <div className="mt-14 z-10 flex-grow flex flex-col justify-center space-y-8 max-w-xl">
          {/* Experience & Leadership */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-primary dark:text-blue-300 font-bold font-mono">Experience & Leadership</h3>
            
            <div className="space-y-6 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white">Operations Lead — KalingaJyoti</h4>
                  <span className="text-xs font-mono text-gray-400 whitespace-nowrap ml-4">2024 – Present</span>
                </div>
                <p className="text-xs font-serif text-gray-500 dark:text-gray-400 italic mb-2">Student Cultural Organisation, VIT Chennai</p>
                <p className="text-sm font-serif text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  Managed 20+ volunteers for large-scale college cultural events. Handled on-campus operations, coordinated logistics, managed event scheduling, and ensured cross-functional coordination.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white">Open-Source Contributor — Y-SoC</h4>
                  <span className="text-xs font-mono text-gray-400 whitespace-nowrap ml-4">2024 – Present</span>
                </div>
                <p className="text-sm font-serif text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  Participate in collaborative programming, perform code reviews, develop features, and engage in collaborative developer-focused problem-solving on community-driven open-source projects.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-primary dark:text-blue-300 font-bold font-mono">Certifications</h3>
            
            <div className="space-y-6 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white">Google UX Design Professional Certificate</h4>
                <p className="text-xs font-mono text-gray-400 italic">Google / Coursera</p>
                <p className="text-sm font-serif text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                  8-course series covering user research methodologies, user journeys, low/high-fidelity wireframing, interactive prototyping, and usability testing. Primary design tool: Figma.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-gray-900 dark:text-white">Getting Started with Cisco Packet Tracer</h4>
                <p className="text-xs font-mono text-gray-400 italic">Cisco Networking Academy</p>
                <p className="text-sm font-serif text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                  Network environment simulation, device configuration, active topology design, and visual network path verification.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase" aria-hidden="true">
          <span>Credentials</span>
          <span>Page 014</span>
        </div>
      </div>
    </>
  );
};

export default ResumeSpread;