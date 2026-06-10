import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnimation } from './AnimationContext';

interface Props {
  onComplete: () => void;
}

const BookOpeningSequence: React.FC<Props> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'done'>('closed');
  const { reduceAnimations } = useAnimation();

  useEffect(() => {
    if (reduceAnimations) {
      setPhase('done');
      onComplete();
      return;
    }

    // Start opening after a short pause
    const t1 = setTimeout(() => setPhase('opening'), 600);
    // Signal completion so App can show the real content
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete, reduceAnimations]);

  if (phase === 'done' || reduceAnimations) return null;

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0e0d]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ perspective: '2000px' }}>
            <div className="relative flex" style={{ transformStyle: 'preserve-3d' }}>
              {/* Closed book — left half (back cover, hidden) */}
              <motion.div
                className="w-[340px] h-[480px] bg-[#1c1410] border border-[#2a2018] shadow-2xl"
                style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d' }}
              />

              {/* Right half = cover — rotates open */}
              <motion.div
                className="w-[340px] h-[480px] bg-[#1c1410] border border-[#2a2018] shadow-2xl flex flex-col items-center justify-center gap-4"
                style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
                initial={{ rotateY: 0 }}
                animate={phase === 'opening' ? { rotateY: -175 } : { rotateY: 0 }}
                transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
              >
                {/* Cover content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center px-8"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-700/60 mb-4">
                    Portfolio Vol. 1
                  </p>
                  <h1 className="font-display text-4xl font-bold text-stone-200 leading-tight mb-2">
                    Sreeansh<br />Dash
                  </h1>
                  <div className="w-12 h-px bg-amber-700/40 mx-auto my-4" />
                  <p className="font-serif italic text-stone-400 text-sm">
                    AI &amp; ML · Full Stack · Design
                  </p>
                </motion.div>

                {/* Spine line on the cover edge */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-900/30 via-amber-700/20 to-amber-900/30" />
              </motion.div>
            </div>
          </div>

          {/* Fade hint at the bottom */}
          <motion.p
            className="absolute bottom-12 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Opening...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookOpeningSequence;
