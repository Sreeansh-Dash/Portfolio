import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useAnimation } from '../AnimationContext';

interface WrittenTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  fontHandwriting?: boolean;
  showCursor?: boolean;
}

const WrittenText: React.FC<WrittenTextProps> = ({ 
  text, 
  className = "", 
  speed = 15, // fast typing speed by default
  delay = 0,
  fontHandwriting = false,
  showCursor = false
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const { liteMode } = useAnimation();

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (liteMode) {
      setDisplayedText(text);
      setIsDone(true);
      return;
    }

    if (!isInView) return;

    let timeout: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;
    
    // Start typing after delay
    timeout = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      interval = setInterval(() => {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setIsTyping(false);
          // Keep cursor for a little bit before fading out completely
          setTimeout(() => setIsDone(true), 1500);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isInView, liteMode, text, speed, delay]);

  const fontClass = fontHandwriting ? "font-handwriting text-lg" : "";

  return (
    <span ref={containerRef} className={`relative ${className} ${fontClass}`}>
      {displayedText}
      {!liteMode && showCursor && (
        <span 
          className={`mistake-cursor inline-block font-handwriting transition-opacity duration-1000 ${
            isDone ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ position: 'relative', top: '0.1em' }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default WrittenText;
