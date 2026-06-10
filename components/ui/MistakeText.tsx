import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useAnimation } from '../AnimationContext';

interface MistakeTextProps {
  text: string;
  className?: string;
  mistakeAt?: number;
  wrongChars?: string;
  typeSpeed?: number;
  eraseSpeed?: number;
  pauseAfterMistake?: number;
  cursorFadeDelay?: number;
}

const MistakeText: React.FC<MistakeTextProps> = ({
  text,
  className = '',
  mistakeAt = 10,
  wrongChars = 'typo',
  typeSpeed = 40,
  eraseSpeed = 25,
  pauseAfterMistake = 300,
  cursorFadeDelay = 500,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const { reduceAnimations } = useAnimation();

  const [displayedText, setDisplayedText] = useState('');
  const [phase, setPhase] = useState<'idle' | 'typing-prefix' | 'typing-mistake' | 'pausing' | 'erasing' | 'retyping' | 'done'>('idle');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorOpacity, setCursorOpacity] = useState(1);

  // Safe checks
  const safeMistakeAt = Math.min(Math.max(0, mistakeAt), text.length);
  const prefix = text.slice(0, safeMistakeAt);
  const suffix = text.slice(safeMistakeAt);

  useEffect(() => {
    if (reduceAnimations) {
      setDisplayedText(text);
      setPhase('done');
      return;
    }
    if (isInView && phase === 'idle') {
      setPhase('typing-prefix');
    }
  }, [isInView, phase, reduceAnimations, text]);

  useEffect(() => {
    if (reduceAnimations) return;
    if (phase === 'idle') return;

    let timer: any;

    if (phase === 'typing-prefix') {
      const currentLength = displayedText.length;
      if (currentLength < prefix.length) {
        timer = setTimeout(() => {
          setDisplayedText(prefix.slice(0, currentLength + 1));
        }, typeSpeed);
      } else {
        // Prefix typing done
        if (wrongChars && wrongChars.length > 0) {
          setPhase('typing-mistake');
        } else {
          setPhase('retyping');
        }
      }
    } else if (phase === 'typing-mistake') {
      const wrongTypedLength = displayedText.length - prefix.length;
      if (wrongTypedLength < wrongChars.length) {
        timer = setTimeout(() => {
          setDisplayedText(prefix + wrongChars.slice(0, wrongTypedLength + 1));
        }, typeSpeed);
      } else {
        setPhase('pausing');
      }
    } else if (phase === 'pausing') {
      timer = setTimeout(() => {
        setPhase('erasing');
      }, pauseAfterMistake);
    } else if (phase === 'erasing') {
      const wrongTypedLength = displayedText.length - prefix.length;
      if (wrongTypedLength > 0) {
        timer = setTimeout(() => {
          setDisplayedText(prefix + wrongChars.slice(0, wrongTypedLength - 1));
        }, eraseSpeed);
      } else {
        setPhase('retyping');
      }
    } else if (phase === 'retyping') {
      const suffixTypedLength = displayedText.length - prefix.length;
      if (suffixTypedLength < suffix.length) {
        timer = setTimeout(() => {
          setDisplayedText(prefix + suffix.slice(0, suffixTypedLength + 1));
        }, typeSpeed);
      } else {
        setPhase('done');
      }
    } else if (phase === 'done') {
      timer = setTimeout(() => {
        setCursorOpacity(0);
        const cleanupTimer = setTimeout(() => {
          setCursorVisible(false);
        }, 500);
        return () => clearTimeout(cleanupTimer);
      }, cursorFadeDelay);
    }

    return () => clearTimeout(timer);
  }, [phase, displayedText, prefix, suffix, wrongChars, typeSpeed, eraseSpeed, pauseAfterMistake, cursorFadeDelay, reduceAnimations]);

  if (reduceAnimations) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={containerRef} className={className}>
      {displayedText}
      {cursorVisible && (
        <span
          className="mistake-cursor"
          style={{
            opacity: cursorOpacity,
            transition: 'opacity 0.5s ease',
          }}
        >
          |
        </span>
      )}
    </span>
  );
};

export default MistakeText;
