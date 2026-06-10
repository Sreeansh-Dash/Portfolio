import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface PageCurlWrapperProps {
  direction: number;
  reduceAnimations: boolean;
  children: React.ReactNode;
}

const PageCurlWrapper: React.FC<PageCurlWrapperProps> = ({
  direction,
  reduceAnimations,
  children,
}) => {
  const rotateYVal = useMotionValue(0);

  // Map the rotateY motion value to a shadow opacity
  const shadowOpacity = useTransform(
    rotateYVal,
    [-180, -90, 0, 90, 180],
    [0, 0.45, 0, 0.45, 0]
  );

  const pageCurlVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 180 : -180,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -180 : 180,
      opacity: 0,
    }),
  };

  const fadeVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  // Determine origin based on flip direction (spine is at center of the book layout)
  const transformOrigin = direction > 0 ? 'left center' : 'right center';

  if (reduceAnimations) {
    return (
      <motion.div
        initial="enter"
        animate="center"
        exit="exit"
        variants={fadeVariants}
        transition={{ duration: 0.15, ease: 'easeInOut' }}
        className="w-full h-full flex flex-col md:flex-row relative z-10"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className="w-full h-full relative"
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        custom={direction}
        initial="enter"
        animate="center"
        exit="exit"
        variants={pageCurlVariants}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="w-full h-full flex flex-col md:flex-row relative z-10"
        style={{
          transformOrigin,
          transformStyle: 'preserve-3d',
          rotateY: rotateYVal,
        }}
      >
        {/* Page Contents */}
        {children}

        {/* Dynamic sweeping page curl shadow/reflection overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            opacity: shadowOpacity,
            background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.45), transparent)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default PageCurlWrapper;
