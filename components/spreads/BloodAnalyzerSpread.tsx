import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import { useAnimation } from '../AnimationContext';

const BloodAnalyzerSpread: React.FC = () => {
  const { reduceAnimations } = useAnimation();
  const [hoveredStack, setHoveredStack] = useState(false);

  return (
    <>
      {/* Left Page: Narrative & Problem Framing */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-texture">
        <header className="mb-8 flex justify-between items-start">
          <div className="flex items-center space-x-2 opacity-70">
            <span className="material-icons text-xs">menu_book</span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold">Portfolio Book</span>
          </div>
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase font-mono">
            Chapter V
          </span>
        </header>

        <div className="flex-grow space-y-8 max-w-xl justify-center flex flex-col">
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-3 tracking-tight">
              <SplitText text="Blood Report Analyzer" delay={70} duration={0.4} />
            </h1>
            <h2 className="font-serif text-xl md:text-2xl text-ink-light dark:text-gray-300 italic">
              <SplitText text="Personalized Risk Scoring via KMeans & XGBoost" delay={60} duration={0.4} />
            </h2>
          </div>

          {/* Problem Framing */}
          <div className="font-serif text-lg text-ink-light dark:text-gray-300 text-justify leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2.5">Problem Framing</h3>
            <p>
              Standard blood test reports flag results based on population averages that ignore individual metabolic variation. This project challenges that assumption. By clustering patients into distinct metabolic profiles, we establish personalized ranges that reduce misclassification rates.
            </p>
          </div>

          {/* Key Insignts */}
          <div className="font-serif text-base md:text-lg text-ink-light dark:text-gray-300 leading-relaxed">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2.5">Key Insights</h3>
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
              <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Toolkit</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {['Python', 'XGBoost', 'KMeans', 'PCA', 'Healthcare ML', 'Scikit-Learn'].map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-gray-700 dark:text-gray-300 rounded text-xs font-mono">{tag}</span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="flex-grow">
              <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2.5 border-b border-gray-200 dark:border-gray-800 pb-1">Status</h4>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">Research Complete</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-xs font-mono text-gray-400 dark:text-gray-500">
          Page 009
        </div>
      </div>

      {/* Right Page: Visual Analytics & Outcomes */}
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

        <div className="flex-grow flex flex-col justify-center max-w-xl space-y-8">
          {/* Section: Divergence Analytics */}
          <div>
            <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white mb-4 border-b-2 border-primary/10 pb-2.5">
              <SplitText text="Divergence Analytics" delay={50} duration={0.4} />
            </h3>
            <div className="my-4 pl-4 border-l-4 border-accent-blue py-1.5 italic font-serif text-lg text-gray-700 dark:text-gray-300 leading-relaxed bg-accent-blue/[0.03]">
              "70% of cluster-specific thresholds diverge more than 10% from standard global ranges."
            </div>
          </div>

          {/* Staggered double photo stack with SVG fallbacks */}
          <div 
            className="relative w-full h-56 flex items-center justify-center bg-stone-50 dark:bg-stone-900/30 rounded border border-stone-100 dark:border-stone-800 p-4"
            onMouseEnter={() => setHoveredStack(true)}
            onMouseLeave={() => setHoveredStack(false)}
          >
            <div className="relative w-full max-w-sm h-full flex items-center justify-center">
              
              {/* Primary Image: t-SNE Clusters */}
              <motion.div 
                className="absolute left-4 top-2 w-52 aspect-video bg-white dark:bg-gray-800 p-1.5 border-2 border-stone-300 dark:border-stone-700 shadow-md z-10 origin-bottom-left"
                animate={hoveredStack && !reduceAnimations ? { rotate: -3, x: -8, y: -4 } : { rotate: 0, x: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-stone-100 dark:bg-stone-900 relative overflow-hidden flex flex-col items-center justify-center">
                  <img 
                    src="/tsne_clusters.png" 
                    alt="t-SNE cluster visualization" 
                    className="w-full h-full object-cover hidden"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  {/* SVG Fallback */}
                  <svg className="w-full h-full p-2 text-primary/20" viewBox="0 0 100 60" fill="currentColor">
                    <circle cx="20" cy="20" r="3" fill="#ef4444" opacity="0.8"/>
                    <circle cx="25" cy="15" r="4" fill="#ef4444" opacity="0.6"/>
                    <circle cx="18" cy="25" r="3" fill="#ef4444" opacity="0.7"/>
                    
                    <circle cx="80" cy="40" r="4" fill="#3b82f6" opacity="0.8"/>
                    <circle cx="75" cy="45" r="3" fill="#3b82f6" opacity="0.7"/>
                    <circle cx="85" cy="35" r="3.5" fill="#3b82f6" opacity="0.9"/>
                    
                    <circle cx="50" cy="30" r="4.5" fill="#10b981" opacity="0.8"/>
                    <circle cx="55" cy="25" r="3" fill="#10b981" opacity="0.7"/>
                  </svg>
                  <span className="absolute bottom-1 right-2 font-mono text-[9px] text-gray-500 uppercase">Fig 2.1 · t-SNE Clusters</span>
                </div>
              </motion.div>

              {/* Secondary Image: Divergence validation */}
              <motion.div 
                className="absolute right-4 bottom-2 w-48 aspect-video bg-white dark:bg-gray-800 p-1.5 border-2 border-stone-300 dark:border-stone-700 shadow-xl z-20 origin-top-right"
                animate={hoveredStack && !reduceAnimations ? { scale: 1.05, x: 12, y: 4, rotate: 2 } : { scale: 1.0, x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-stone-100 dark:bg-stone-900 relative overflow-hidden flex flex-col items-center justify-center">
                  <img 
                    src="/06_novelty_validation.png" 
                    alt="Divergence chart" 
                    className="w-full h-full object-cover hidden"
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                  {/* SVG Fallback */}
                  <svg className="w-full h-full p-2 text-primary/20" viewBox="0 0 100 60" fill="currentColor">
                    <rect x="10" y="45" width="10" height="5" fill="#10b981"/>
                    <rect x="25" y="30" width="10" height="20" fill="#ef4444"/>
                    <rect x="40" y="15" width="10" height="35" fill="#ef4444"/>
                    <rect x="55" y="40" width="10" height="10" fill="#10b981"/>
                    <rect x="70" y="20" width="10" height="30" fill="#ef4444"/>
                    <line x1="5" y1="50" x2="95" y2="50" stroke="#999" strokeWidth="1"/>
                  </svg>
                  <span className="absolute bottom-1 right-2 font-mono text-[9px] text-gray-500 uppercase">Fig 2.2 · Range Divergence</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="pt-4">
            <h3 className="font-display text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 font-mono">
              Key Outcomes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-stone-200 dark:border-stone-800 p-3 bg-stone-50/50 dark:bg-stone-900/30">
                <span className="block text-2xl font-bold font-display text-primary dark:text-white mb-1">
                  5 Profiles
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  KMeans Metabolic Profiles
                </span>
              </div>
              <div className="border border-stone-200 dark:border-stone-800 p-3 bg-stone-50/50 dark:bg-stone-900/30">
                <span className="block text-2xl font-bold font-display text-primary dark:text-white mb-1">
                  0.87 AUC
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  XGBoost Condition Scoring
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 flex justify-end text-xs font-mono text-gray-400 dark:text-gray-500">
          Vol. 1 · Page 010
        </div>
      </div>
    </>
  );
};

export default BloodAnalyzerSpread;
