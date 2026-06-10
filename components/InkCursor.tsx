import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useAnimation } from './AnimationContext';

const InkCursor: React.FC = () => {
  const { liteMode: reduceAnimations } = useAnimation();
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Springs for lagging cursor
  const springX = useSpring(x, { stiffness: 150, damping: 18 });
  const springY = useSpring(y, { stiffness: 150, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <>
      {/* Fast precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-400/80 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x, y }}
      />
      {/* Lagging ink blob — disable spring movement if reduceAnimations is enabled */}
      {!reduceAnimations && (
        <motion.div
          className="fixed top-0 left-0 w-7 h-7 rounded-full border border-amber-400/20 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
          style={{ x: springX, y: springY }}
        />
      )}
    </>
  );
};

export default InkCursor;
