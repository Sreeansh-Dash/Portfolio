import React from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from './AnimationContext';

interface BookSceneProps {
  children: React.ReactNode;
}

const BookScene: React.FC<BookSceneProps> = ({ children }) => {
  const { reduceAnimations } = useAnimation();

  // Gentle breathing rotateX animation
  const tiltAnimate = reduceAnimations
    ? { rotateX: 0 }
    : { rotateX: [0.5, 1.5, 0.5] };

  const tiltTransition = reduceAnimations
    ? {}
    : { duration: 12, repeat: Infinity, ease: 'easeInOut' };

  return (
    // Perspective container — gives the whole book 3D depth
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: '2500px', perspectiveOrigin: '50% 45%' }}
    >
      <motion.div
        className="relative w-full max-w-[1400px] h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={tiltAnimate}
        transition={tiltTransition}
      >
        {/* Book body */}
        <div
          className="relative w-full h-full flex shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '-18px 8px 60px rgba(0,0,0,0.7), 18px 8px 40px rgba(0,0,0,0.4)',
          }}
        >
          {/* Spine — left edge, visible as a 3D face */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '-14px',
              top: 0,
              width: '14px',
              height: '100%',
              transformOrigin: 'right center',
              transform: 'rotateY(-90deg)',
              background: 'linear-gradient(to right, #1a1510, #2a2018)',
              borderLeft: '1px solid rgba(255,255,255,0.04)',
            }}
          />
          {/* Page stack — right edge, visible as layered pages */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: '-10px',
              top: '2px',
              width: '10px',
              height: 'calc(100% - 4px)',
              transformOrigin: 'left center',
              transform: 'rotateY(90deg)',
              background:
                'repeating-linear-gradient(to bottom, #e8e2d4 0px, #d4cfc4 1px, #e8e2d4 3px)',
            }}
          />
          {/* Actual spread content */}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default BookScene;
