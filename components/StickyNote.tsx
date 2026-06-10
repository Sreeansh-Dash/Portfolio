import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from './AnimationContext';

interface StickyNoteProps {
  children: React.ReactNode;
  rotation?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StickyNote: React.FC<StickyNoteProps> = ({ children, rotation = "3deg", className = "", style }) => {
  const [isFolded, setIsFolded] = useState(false);
  const { liteMode: reduceAnimations } = useAnimation();

  // Parse rotation string (e.g. "6deg" -> 6)
  const baseRotation = parseFloat(rotation) || 3;

  const swayAnimate = isFolded
    ? { rotate: 0 }
    : reduceAnimations
    ? { rotate: baseRotation }
    : { rotate: [baseRotation - 1, baseRotation + 0.5, baseRotation - 1, baseRotation - 2.5, baseRotation - 1] };

  const swayTransition = isFolded || reduceAnimations
    ? {}
    : { duration: 10, repeat: Infinity, ease: 'easeInOut' };

  return (
    <motion.div
      onClick={() => setIsFolded(!isFolded)}
      className={`
        absolute bg-sticky-yellow shadow-md p-4 z-20 cursor-pointer transition-all duration-500 ease-in-out origin-top
        ${className}
        ${isFolded ? 'h-10 w-32 overflow-hidden hover:opacity-90' : 'w-32 h-32 md:w-40 md:h-40'}
      `}
      animate={swayAnimate}
      transition={swayTransition}
      style={style}
      title={isFolded ? "Click to read note" : "Click to fold note"}
    >
      {/* Tape effect */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 bg-yellow-400/30 opacity-60 rounded-sm"></div>

      {/* Content */}
      <div className={`font-handwriting text-2xl leading-tight text-gray-800 transition-opacity duration-300 ${isFolded ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col h-full items-center justify-center">
          {children}
        </div>
      </div>

      {/* Folded State View */}
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isFolded ? 'opacity-100' : 'opacity-0'}`}>
        <span className="font-handwriting text-sm text-gray-600 font-bold uppercase tracking-widest">Note</span>
        <span className="material-icons text-xs text-gray-500 ml-1">expand_more</span>
      </div>

      {/* Minimal fold icon when open */}
      {!isFolded && (
        <div className="absolute bottom-1 right-1 opacity-50">
          <span className="material-icons text-[14px]">expand_less</span>
        </div>
      )}
    </motion.div>
  );
};

export default StickyNote;