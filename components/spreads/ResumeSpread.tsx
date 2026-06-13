import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import { useAnimation } from '../AnimationContext';

const ResumeSpread: React.FC = () => {
  const { reduceAnimations } = useAnimation();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloading(true);

    const link = document.createElement('a');
    link.href = '/Sreeansh_dash_resume_visual.pdf';
    link.download = 'Sreeansh_Dash_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <>
      {/* Left Page: Header & Education */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-page bg-paper-texture overflow-hidden">
        <header className="flex justify-between items-start mb-8">
          <div className="flex items-center space-x-2 text-ink opacity-70">
            <span className="material-icons text-sm">menu_book</span>
            <span className="text-xs uppercase tracking-widest font-semibold font-mono">Portfolio Book</span>
          </div>
          <div className="text-xs text-muted font-serif italic uppercase tracking-widest font-bold">Chapter VII</div>
        </header>

        <div className="space-y-8 flex-grow flex flex-col justify-center max-w-xl">
          <div>
            <h1 className="font-display text-5xl md:text-6xl font-black text-ink mb-2 leading-none">
              <SplitText text="The Paper Trail" delay={80} duration={0.4} />
            </h1>
            <p className="font-serif text-xl italic text-muted border-b pb-4 border-gray-300 dark:border-gray-700">
              Everything in one place.
            </p>
          </div>

          {/* Key Highlights (Callout Cards) */}
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="border border-stone-200 dark:border-stone-850 p-4 bg-white/50 dark:bg-stone-900/40 rounded-sm">
              <span className="block text-base font-bold text-ink font-mono leading-none">9.62 CGPA</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-muted mt-1">VIT Chennai</span>
              <span className="block text-[9px] text-muted font-serif italic mt-0.5">B.Tech CSE AI/ML</span>
            </div>
            
            <div className="border border-stone-200 dark:border-stone-850 p-4 bg-white/50 dark:bg-stone-900/40 rounded-sm">
              <span className="block text-base font-bold text-ink font-mono leading-none">Patent Pending</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-muted mt-1">Smart Walking Stick</span>
              <span className="block text-[9px] text-muted font-serif italic mt-0.5">Design Under Review</span>
            </div>

            <div className="border border-stone-200 dark:border-stone-850 p-4 bg-white/50 dark:bg-stone-900/40 rounded-sm">
              <span className="block text-base font-bold text-ink font-mono leading-none">Google UX</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-muted mt-1">Certified Series</span>
              <span className="block text-[9px] text-muted font-serif italic mt-0.5">Figma · UX Research</span>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-5">
            <h3 className="text-xs uppercase tracking-widest text-accent-warm font-bold font-mono">Education</h3>

            <div className="flex justify-between items-baseline border-b border-dashed border-gray-300 dark:border-gray-700 pb-3">
              <div>
                <h4 className="font-sans font-bold text-base text-ink uppercase tracking-wide">Vellore Institute of Technology</h4>
                <p className="text-sm text-muted italic font-serif">B.Tech in Computer Science & Engineering (AI/ML)</p>
                <p className="text-xs text-accent-warm font-bold font-mono mt-1">CGPA: 9.62 / 10.0</p>
              </div>
              <span className="text-xs font-mono text-muted font-medium whitespace-nowrap ml-4">2024 – 2028 (Expected)</span>
            </div>

            <div className="flex justify-between items-baseline border-b border-dashed border-gray-300 dark:border-gray-700 pb-3">
              <div>
                <h4 className="font-sans font-bold text-base text-ink uppercase tracking-wide">Delhi Public School, Bhilai</h4>
                <p className="text-sm text-muted italic font-serif">CBSE Class XII</p>
                <p className="text-xs text-accent-warm font-bold font-mono mt-1">Percentage: 93.4%</p>
              </div>
              <span className="text-xs font-mono text-muted font-medium whitespace-nowrap ml-4">Graduated 2024</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-xs tracking-widest text-muted font-bold uppercase" aria-hidden="true">
          <span>The Paper Trail</span>
          <span>Page 013</span>
        </div>
      </div>

      {/* Right Page: Experience & Certifications */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative bg-surface">
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

        <div className="mt-6 md:mt-10 z-10 flex-grow flex flex-col justify-start space-y-8 max-w-xl overflow-y-auto custom-scrollbar scroll-hint-container pr-2">
          
          {/* Experience & Leadership */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-accent-warm font-bold font-mono">Experience & Leadership</h3>
            
            <div className="space-y-6 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-ink">Operations Lead — KalingaJyoti</h4>
                  <span className="text-xs font-mono text-muted whitespace-nowrap ml-4">August 2025 – April 2026</span>
                </div>
                <p className="text-xs font-serif text-muted italic mb-2">Student Cultural Organisation, VIT Chennai</p>
                <p className="text-sm font-serif text-ink leading-relaxed text-justify">
                  Managed 20+ volunteers for large-scale college cultural events. Handled on-campus operations, coordinated logistics, managed event scheduling, and ensured cross-functional coordination.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-ink">Open-Source Contributor — Y-SoC</h4>
                  <span className="text-xs font-mono text-muted whitespace-nowrap ml-4">March 2026 – May 2026</span>
                </div>
                <p className="text-sm font-serif text-ink leading-relaxed text-justify">
                  Participate in collaborative programming, perform code reviews, develop features, and engage in collaborative developer-focused problem-solving on community-driven open-source projects.
                </p>
              </div>
            </div>
          </section>

          {/* Action CTA (Prominent and Inline) */}
          <div className="w-full relative shrink-0">
            <button
              onClick={handleDownloadClick}
              className="group flex items-center justify-between w-full p-4 border-2 border-accent-warm/30 hover:border-accent-warm bg-accent-warm/5 hover:bg-accent-warm/10 transition-all duration-300 rounded-sm cursor-pointer text-left relative z-50 pointer-events-auto"
            >
              <div>
                <span className="block text-xs font-bold text-accent-warm uppercase tracking-widest font-mono mb-1">Full Print Version</span>
                <span className="block text-ink font-display font-bold text-xl group-hover:underline">
                  {isDownloading ? 'Downloading...' : 'Download Resume (PDF)'}
                </span>
              </div>
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-accent-warm text-page flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-sm">
                <span className={`material-icons ${isDownloading ? 'animate-spin' : ''}`}>
                  {isDownloading ? 'hourglass_top' : 'download'}
                </span>
              </div>
            </button>
            <div className="flex justify-end pr-4 mt-2">
              <motion.span
                className="font-handwriting text-muted text-sm inline-block"
                animate={reduceAnimations ? { rotate: -2 } : { rotate: [-2, -0.5, -2, -3.5, -2] }}
                transition={reduceAnimations ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <WrittenText text="Get the full details ⤴" delay={400} speed={15} showCursor={true} />
              </motion.span>
            </div>
          </div>

          {/* Certifications */}
          <section className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-accent-warm font-bold font-mono">Certifications</h3>
            
            <div className="space-y-6 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-ink">Google UX Design Professional Certificate</h4>
                <p className="text-xs font-mono text-muted italic">Google / Coursera</p>
                <p className="text-sm font-serif text-ink mt-1 leading-relaxed">
                  8-course series covering user research methodologies, user journeys, low/high-fidelity wireframing, interactive prototyping, and usability testing. Primary design tool: Figma.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-bold text-sm uppercase tracking-wide text-ink">Getting Started with Cisco Packet Tracer</h4>
                <p className="text-xs font-mono text-muted italic">Cisco Networking Academy</p>
                <p className="text-sm font-serif text-ink mt-1 leading-relaxed">
                  Network environment simulation, device configuration, active topology design, and visual network path verification.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-auto pt-8 flex justify-between items-end text-xs tracking-widest text-muted font-bold uppercase" aria-hidden="true">
          <span>Credentials</span>
          <span>Page 014</span>
        </div>
      </div>
    </>
  );
};

export default ResumeSpread;