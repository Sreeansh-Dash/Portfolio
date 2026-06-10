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

  // Map the rotateY motion value to a shadow opacity for the crease
  const creaseOpacity = useTransform(
    rotateYVal,
    [-180, -90, 0, 90, 180],
    [0, 0.6, 0, 0.6, 0]
  );

  // Map the rotateY to a sweeping highlight to simulate a curved surface catching light
  const highlightPosition = useTransform(
    rotateYVal,
    [-180, 0, 180],
    ['100%', '50%', '0%']
  );

  const pageCurlVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 180 : -180,
      scale: 0.95,
      rotateZ: dir > 0 ? -2 : 2,
      opacity: 0,
    }),
    center: {
      rotateY: 0,
      scale: 1,
      rotateZ: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -180 : 180,
      scale: 0.95,
      rotateZ: dir > 0 ? 2 : -2,
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
            opacity: creaseOpacity,
            background: useTransform(highlightPosition, (pos) => `linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(255,255,255,0.2) ${pos}, rgba(0,0,0,0.5) 100%)`),
          }}
        />
      </motion.div>
    </div>
  );
};

export default PageCurlWrapper;
