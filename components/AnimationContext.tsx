import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnimationContextType {
  reduceAnimations: boolean;
  setReduceAnimations: (reduce: boolean) => void;
  isLowEndDevice: boolean;
  liteMode: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  reduceAnimations: false,
  setReduceAnimations: () => {},
  isLowEndDevice: false,
  liteMode: false,
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reduceAnimations, setReduceAnimationsState] = useState<boolean>(() => {
    const saved = localStorage.getItem('reduce-animations');
    if (saved !== null) {
      return saved === 'true';
    }
    // Fallback to system preference
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const [isLowEndDevice] = useState<boolean>(() => {
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
      return (navigator.hardwareConcurrency ?? 4) <= 4 ||
        (('deviceMemory' in navigator) && (navigator as any).deviceMemory < 4);
    }
    return false;
  });

  const liteMode = reduceAnimations || isLowEndDevice;

  const setReduceAnimations = (reduce: boolean) => {
    setReduceAnimationsState(reduce);
    localStorage.setItem('reduce-animations', String(reduce));
    if (reduce) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  };

  useEffect(() => {
    // Initial sync
    if (reduceAnimations) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }

    // Listen to system preferences changes
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only override if user hasn't explicitly set it, or follow system if they change it
      if (localStorage.getItem('reduce-animations') === null) {
        setReduceAnimationsState(e.matches);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [reduceAnimations]);

  return (
    <AnimationContext.Provider value={{ reduceAnimations, setReduceAnimations, isLowEndDevice, liteMode }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext);
