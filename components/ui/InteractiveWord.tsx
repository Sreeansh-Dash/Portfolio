import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from '../AnimationContext';

interface InteractiveWordProps {
  text: string;
  defaultClass?: string;
  hoverClass?: string;
  className?: string;
}

const InteractiveWord: React.FC<InteractiveWordProps> = ({ 
  text, 
  defaultClass = "", 
  hoverClass = "font-handwriting text-xl text-primary dark:text-yellow-400 font-bold",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { liteMode } = useAnimation();

  return (
    <motion.span
      className={`inline-block cursor-pointer transition-all duration-200 ${className} ${isHovered ? hoverClass : defaultClass}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      whileHover={liteMode ? {} : { scale: 1.1, rotate: [-1, 2, -1] }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {text}
    </motion.span>
  );
};

export default InteractiveWord;
