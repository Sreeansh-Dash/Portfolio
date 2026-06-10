import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAnimation } from '../AnimationContext';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number; // base delay in ms or step delay
  duration?: number;
  ease?: string | number[];
  splitType?: 'chars' | 'words';
  from?: Record<string, any>;
  to?: Record<string, any>;
  threshold?: number;
  rootMargin?: string;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 50,
  duration = 0.5,
  ease = 'easeOut',
  splitType = 'chars',
  from = { opacity: 0, y: 15 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  // useInView hook from framer-motion checks when text enters viewport
  const isInView = useInView(containerRef, {
    once: true,
    amount: threshold,
    margin: rootMargin as any,
  });

  const { liteMode: reduceAnimations } = useAnimation();

  // If animations are reduced, just render normal static text
  if (reduceAnimations) {
    return <span className={className}>{text}</span>;
  }

  // Split text into characters or words
  const items = splitType === 'chars' ? Array.from(text) : text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const itemVariants = {
    hidden: from,
    visible: {
      ...to,
      transition: {
        duration,
        ease,
      },
    },
  };

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      aria-label={text}
    >
      {items.map((item, idx) => {
        // For chars, we want to preserve spaces as normal space characters without collapsing them
        const isSpace = item === ' ';
        return (
          <motion.span
            key={idx}
            className="inline-block whitespace-pre"
            variants={itemVariants}
            style={{ display: 'inline-block' }}
          >
            {isSpace ? ' ' : item}
            {splitType === 'words' && idx < items.length - 1 ? ' ' : ''}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default SplitText;
