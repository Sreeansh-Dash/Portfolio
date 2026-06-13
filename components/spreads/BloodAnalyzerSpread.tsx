import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import ImageModal from '../ui/ImageModal';
import { useAnimation } from '../AnimationContext';

const BloodAnalyzerSpread: React.FC = () => {
  const { reduceAnimations } = useAnimation();
  const [hoveredStack, setHoveredStack] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Left Page: Narrative & Problem Framing */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-page bg-paper-texture overflow-hidden">
        <header className="mb-8 flex justify-between items-start flex-shrink-0">
          <div className="flex items-center space-x-2 opacity-70">
            <span className="material-icons text-xs">menu_book</span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold">Portfolio Book</span>
          </div>
          <span className="block text-xs font-bold tracking-[0.2em] text-muted uppercase font-mono">
            Chapter V
          </span>
        </header>

        <div className="flex-grow space-y-8 max-w-xl justify-start flex flex-col overflow-y-auto custom-scrollbar scroll-hint-container pr-2">
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-ink font-black mb-3 tracking-tight">
              <SplitText text="Blood Report Analyzer" delay={70} duration={0.4} />
            </h1>
            <h2 className="font-serif text-xl md:text-2xl text-ink italic">
              <SplitText text="Personalized Risk Scoring via KMeans & XGBoost" delay={60} duration={0.4} />
            </h2>
          </div>

          {/* Problem Framing */}
          <div className="font-serif text-lg text-ink text-justify leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent-warm mb-2.5">Problem Framing</h3>
            <p>
              Standard blood test reports flag results based on population averages that ignore individual metabolic variation. This project challenges that assumption. By clustering patients into distinct metabolic profiles, we establish personalized ranges that reduce misclassification rates.
            </p>
          </div>

          {/* Key Insignts */}
          <div className="font-serif text-base md:text-lg text-ink leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent-warm mb-2.5">Key Insights</h3>
            <ul className="list-disc list-outside pl-5 space-y-2 text-justify">
              <li>Trained on the <strong>NidaanKosha dataset</strong> containing 99,992 patients and 109 distinct biomarkers.</li>
              <li>Unsupervised clustering (KMeans + PCA) isolates 5 distinct metabolic profiles based on physiological biomarkers.</li>
              <li>Replaces fixed limits with custom 5th and 95th percentile ranges calculated per-cluster.</li>
              <li>Multi-label XGBoost classifier flags risk across 6 clinical conditions with AUC-ROC scores up to 0.87.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-8 text-sm">
            {/* Tech Tags */}
            <div className="flex-grow">
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Toolkit</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Python', 'XGBoost', 'KMeans', 'PCA', 'Healthcare ML', 'Scikit-Learn'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-ink rounded text-xs font-mono">{tag}</span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="flex-grow">
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Status</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">Research Complete</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-xs font-mono text-muted flex-shrink-0">
          Page 009
        </div>
      </div>

      {/* Right Page: Visual Analytics & Outcomes */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative bg-panel overflow-hidden">
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

        <div className="flex-grow flex flex-col justify-start max-w-xl space-y-8 overflow-y-auto custom-scrollbar scroll-hint-container pr-2">
          {/* Section: Divergence Analytics */}
          <div>
            <h3 className="font-display text-2xl font-bold text-ink mb-4 border-b-2 border-primary/10 pb-2.5">
              <SplitText text="Divergence Analytics" delay={50} duration={0.4} />
            </h3>
            <div className="my-4 pl-4 border-l-4 border-accent-warm py-1.5 italic font-serif text-lg text-ink leading-relaxed bg-accent-warm/[0.03]">
              "70% of cluster-specific thresholds diverge more than 10% from standard global ranges."
            </div>
          </div>

          {/* Staggered double photo stack with polaroid effects, captions, and annotations */}
          <div
            className="relative w-full h-72 flex items-center justify-center bg-stone-50 dark:bg-stone-900/30 rounded border border-stone-100 dark:border-stone-800 p-4 select-none"
            onMouseEnter={() => setHoveredStack(true)}
            onMouseLeave={() => setHoveredStack(false)}
          >
            <div className="relative w-full max-w-sm h-full flex items-center justify-center">

              {/* Primary Image: t-SNE Clusters */}
              <motion.div
                className="absolute left-2 top-2 w-[58%] bg-white dark:bg-stone-850 p-2.5 border border-stone-200 dark:border-stone-800/80 shadow-lg z-10 origin-bottom-left transition-transform duration-500 group-hover:rotate-0 group/img"
                style={{ rotate: -4 }}
                animate={hoveredStack && !reduceAnimations ? { rotate: -2, x: -6, y: -4 } : { rotate: -4, x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Yellow tape */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-yellow-100/80 dark:bg-yellow-900/40 rotate-1 shadow-sm border border-yellow-200/50 backdrop-blur-[1px] z-20 pointer-events-none"></div>

                <div
                  className="relative overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 cursor-pointer"
                  onClick={() => setSelectedImage("/blood_tsne.png")}
                  title="Click to view full size"
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity z-10 pointer-events-none">
                    <span className="text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="material-icons text-sm">zoom_in</span> Click to enlarge
                    </span>
                  </div>
                  <img
                    src="/blood_tsne.png"
                    alt="t-SNE Cluster Analysis"
                    className="w-full h-auto object-contain opacity-95 mx-auto transition-transform duration-300 group-hover/img:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/500x300/eae8e6/4b5563?text=t-SNE+Clusters";
                    }}
                  />
                </div>
                <div className="text-center mt-2.5 font-mono text-[9px] text-muted uppercase tracking-wider">
                  Figure 5.1 · t-SNE Dimensionality
                </div>
              </motion.div>

              {/* Secondary Image: Divergence Validation */}
              <motion.div
                className="absolute right-2 bottom-2 w-[52%] bg-white dark:bg-stone-850 p-2.5 border border-stone-200 dark:border-stone-800/80 shadow-xl z-20 origin-top-right transition-transform duration-500 group-hover:rotate-0 group/img"
                style={{ rotate: 3 }}
                animate={hoveredStack && !reduceAnimations ? { scale: 1.05, x: 8, y: 4, rotate: 1 } : { scale: 1.0, x: 0, y: 0, rotate: 3 }}
                transition={{ duration: 0.3 }}
              >
                {/* Yellow tape */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-yellow-100/80 dark:bg-yellow-900/40 -rotate-2 shadow-sm border border-yellow-200/50 backdrop-blur-[1px] z-20 pointer-events-none"></div>

                <div
                  className="relative overflow-hidden bg-stone-100 dark:bg-stone-900 border border-stone-200/50 dark:border-stone-800/50 cursor-pointer"
                  onClick={() => setSelectedImage("/blood_ranges.png")}
                  title="Click to view full size"
                >
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity z-10 pointer-events-none">
                    <span className="text-white font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <span className="material-icons text-sm">zoom_in</span> Click to enlarge
                    </span>
                  </div>
                  <img
                    src="/blood_ranges.png"
                    alt="Cluster-Specific Reference Ranges"
                    className="w-full h-auto object-contain opacity-95 mx-auto transition-transform duration-300 group-hover/img:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/500x300/eae8e6/4b5563?text=Cluster+Ranges";
                    }}
                  />
                </div>
                <div className="text-center mt-2.5 font-mono text-[9px] text-muted uppercase tracking-wider">
                  Figure 5.2 · Range Divergence
                </div>
              </motion.div>

              {/* Handwritten Annotation - Pointing to t-SNE clusters */}
              <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-32 transform -rotate-12 text-red-800 dark:text-red-400 font-handwriting text-base leading-tight opacity-90 pointer-events-none hidden lg:flex flex-col items-center z-30">
                <span className="block mb-1 text-center font-bold">5 distinct metabolic profiles</span>
                <svg className="w-8 h-8 text-red-800 dark:text-red-400 transform rotate-90 self-end mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>

              {/* Handwritten Annotation - Pointing to range divergence */}
              <div className="absolute -right-15 top-1/100 -translate-y-1/2 w-36 transform rotate-6 text-red-800 dark:text-red-400 font-handwriting text-base leading-tight opacity-90 pointer-events-none hidden lg:flex flex-col items-center z-30">
                <span className="block mb-1 text-center font-bold">70% diverge from global averages!</span>
                <svg className="w-8 h-8 text-red-800 dark:text-red-400 transform -rotate-[135deg] self-start ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>

            </div>
          </div>

          {/* Outcome Section */}
          <div className="pt-4">
            <h3 className="font-display text-xs font-bold text-muted uppercase tracking-widest mb-3 font-mono">
              Key Outcomes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-stone-200 dark:border-stone-800 p-3 bg-stone-50/50 dark:bg-stone-900/30">
                <span className="block text-2xl font-bold font-display text-ink mb-1">
                  5 Profiles
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted">
                  KMeans Metabolic Profiles
                </span>
              </div>
              <div className="border border-stone-200 dark:border-stone-800 p-3 bg-stone-50/50 dark:bg-stone-900/30">
                <span className="block text-2xl font-bold font-display text-ink mb-1">
                  0.87 AUC
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted">
                  XGBoost Condition Scoring
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="https://cluster-adaptive-blood-report-analy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-4 border-2 border-accent-warm/30 hover:border-accent-warm bg-accent-warm/5 hover:bg-accent-warm/10 transition-all duration-300 rounded-sm"
              >
                <div>
                  <span className="block text-sm font-bold text-accent-warm uppercase tracking-widest font-mono mb-1">Live Project</span>
                  <span className="block text-ink font-display font-bold text-xl group-hover:underline">View the Web App</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-warm text-page flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <span className="material-icons">open_in_new</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 flex justify-end text-xs font-mono text-muted flex-shrink-0">
          Vol. 1 · Page 010
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ''}
      />
    </>
  );
};

export default BloodAnalyzerSpread;
