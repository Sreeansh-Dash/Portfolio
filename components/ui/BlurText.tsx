import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useAnimation } from '../AnimationContext';

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number; // step delay in ms between items
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  duration?: number;
  threshold?: number;
  rootMargin?: string;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  delay = 30,
  animateBy = 'words',
  direction = 'bottom',
  duration = 0.5,
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: threshold,
    margin: rootMargin as any,
  });

  const { reduceAnimations } = useAnimation();

  if (reduceAnimations) {
    return <span className={className}>{text}</span>;
  }

  // Split text into letters or words
  const items = animateBy === 'letters' ? Array.from(text) : text.split(' ');

  // Determine starting transform properties based on direction
  let startX = 0;
  let startY = 0;
  if (direction === 'top') startY = -20;
  else if (direction === 'bottom') startY = 20;
  else if (direction === 'left') startX = -20;
  else if (direction === 'right') startX = 20;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      x: startX,
      y: startY,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
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
        const isSpace = item === ' ';
        return (
          <motion.span
            key={idx}
            className="inline-block whitespace-pre"
            variants={itemVariants}
            style={{ display: 'inline-block' }}
          >
            {isSpace ? ' ' : item}
            {animateBy === 'words' && idx < items.length - 1 ? ' ' : ''}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default BlurText;
