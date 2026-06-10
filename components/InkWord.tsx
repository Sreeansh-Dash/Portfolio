import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from './AnimationContext';

interface InkWordProps {
  children: React.ReactNode;
  accent?: boolean;
}

const InkWord: React.FC<InkWordProps> = ({ children, accent = false }) => {
  const { liteMode: reduceAnimations } = useAnimation();

  // If animations are reduced, disable animations entirely
  const wordHover = reduceAnimations ? {} : { y: -2, transition: { duration: 0.15 } };
  const underlineHover = reduceAnimations ? {} : { width: '100%' };

  return (
    <motion.span
      className={`relative inline-block cursor-default ${accent ? 'text-amber-500 dark:text-amber-400 font-medium' : ''}`}
      whileHover={wordHover}
      style={{ display: 'inline-block' }}
    >
      {children}
      {/* Ink underline that draws itself on hover */}
      <motion.span
        className="absolute bottom-0 left-0 h-[1px] bg-current opacity-50"
        initial={{ width: '0%' }}
        whileHover={underlineHover}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        style={{ display: 'block' }}
      />
    </motion.span>
  );
};

export default InkWord;
