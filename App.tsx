import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BookLayout from './components/BookLayout';
import Navigation from './components/Navigation';
import { Chapter } from './types';
import { NAVIGATION_ITEMS } from './constants';
import CoverSpread from './components/spreads/CoverSpread';
import ProjectsSpread from './components/spreads/ProjectsSpread';
import CaseStudySpread from './components/spreads/CaseStudySpread';
import GrievanceSpread from './components/spreads/GrievanceSpread';
import SkillsSpread from './components/spreads/SkillsSpread';
import AboutSpread from './components/spreads/AboutSpread';
import ResumeSpread from './components/spreads/ResumeSpread';
import ContactSpread from './components/spreads/ContactSpread';
import SmartCaneSpread from './components/spreads/SmartCaneSpread';
import BookScene from './components/BookScene';
import BookOpeningSequence from './components/BookOpeningSequence';
import InkCursor from './components/InkCursor';
import { useAnimation } from './components/AnimationContext';
import PageCurlWrapper from './components/PageCurlWrapper';

const App: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState<Chapter>(Chapter.COVER);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const { reduceAnimations, setReduceAnimations } = useAnimation();

  // Book opening cinematic state
  const [bookOpened, setBookOpened] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const hasOpened = sessionStorage.getItem('book-opened');
      return !!hasOpened;
    }
    return false;
  });

  const handleOpenComplete = () => {
    sessionStorage.setItem('book-opened', '1');
    setBookOpened(true);
  };

  // Touch device detection for custom cursor
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const handleNavigate = (targetChapter: Chapter) => {
    if (targetChapter === currentChapter) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isMobile) {
      setCurrentChapter(targetChapter);
      return;
    }

    // Determine direction
    const currentIndex = NAVIGATION_ITEMS.findIndex(item => item.id === currentChapter);
    const targetIndex = NAVIGATION_ITEMS.findIndex(item => item.id === targetChapter);
    const newDirection = targetIndex > currentIndex ? 1 : -1;

    setDirection(newDirection);
    setCurrentChapter(targetChapter);
  };

  // Determine Next and Previous Chapters for buttons
  const currentIndex = NAVIGATION_ITEMS.findIndex(item => item.id === currentChapter);
  const prevChapter = currentIndex > 0 ? NAVIGATION_ITEMS[currentIndex - 1] : null;
  const nextChapter = currentIndex < NAVIGATION_ITEMS.length - 1 ? NAVIGATION_ITEMS[currentIndex + 1] : null;

  const handlePrev = () => prevChapter && handleNavigate(prevChapter.id);
  const handleNext = () => nextChapter && handleNavigate(nextChapter.id);

  const renderSpread = () => {
    switch (currentChapter) {
      case Chapter.COVER:
        return <CoverSpread onNavigate={handleNavigate} />;
      case Chapter.ABOUT:
        return <AboutSpread />;
      case Chapter.PROJECTS:
        return <ProjectsSpread onNavigate={handleNavigate} />;
      case Chapter.DEEP_DIVE_1:
        return <SmartCaneSpread onNavigate={handleNavigate} />;
      case Chapter.DEEP_DIVE_2:
        return <GrievanceSpread />;
      case Chapter.TOOLKIT:
        return <SkillsSpread />;
      case Chapter.RESUME:
        return <ResumeSpread />;
      case Chapter.CLOSING:
        return <ContactSpread />;
      default:
        return <CoverSpread onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`min-h-screen flex items-start md:items-center justify-center p-4 md:p-8 py-10 md:py-8 font-body transition-colors duration-300 relative ${!isTouch ? 'cursor-none' : ''}`}>
      {/* Background: dark ambient with subtle paper grain — fits the book aesthetic */}
      <div className="fixed inset-0 -z-10 bg-[#0f0e0d] w-screen h-screen overflow-hidden">
        {/* Subtle radial glow — like a lamp above the desk */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(80,60,40,0.25),transparent)]" />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
      </div>

      {/* Control Panel: Dark Mode and Reduce Animations */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* Reduce Animations Toggle */}
        <button
          className={`p-3 rounded-full shadow-lg hover:scale-105 transition-all border text-xl flex items-center justify-center ${
            reduceAnimations
              ? 'bg-amber-100 dark:bg-amber-950 border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300'
              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-stone-400'
          }`}
          onClick={() => setReduceAnimations(!reduceAnimations)}
          aria-label="Toggle Animations"
          title={reduceAnimations ? "Enable animations" : "Reduce animations"}
        >
          <span className="material-icons-outlined text-xl block">
            {reduceAnimations ? 'play_circle' : 'pause_circle'}
          </span>
        </button>

        {/* Dark Mode Toggle */}
        <button
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-yellow-400 flex items-center justify-center"
          onClick={() => document.documentElement.classList.toggle('dark')}
          aria-label="Toggle Dark Mode"
        >
          <span className="material-icons-outlined text-xl block">
            dark_mode
          </span>
        </button>
      </div>

      {/* Book Scene Wrapper */}
      <div className="w-full relative">
        {!bookOpened ? (
          <BookOpeningSequence onComplete={handleOpenComplete} />
        ) : (
          <BookScene>
            <BookLayout
              onPrev={prevChapter ? handlePrev : undefined}
              onNext={nextChapter ? handleNext : undefined}
              prevLabel={prevChapter?.label}
              nextLabel={nextChapter?.label}
            >
              <Navigation currentChapter={currentChapter} onNavigate={handleNavigate} />
              
              <div className="w-full h-full relative" style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <PageCurlWrapper
                    key={currentChapter}
                    direction={direction}
                    reduceAnimations={reduceAnimations}
                  >
                    {renderSpread()}
                  </PageCurlWrapper>
                </AnimatePresence>
              </div>
            </BookLayout>
          </BookScene>
        )}
      </div>

      {/* Custom Ink Cursor */}
      {!isTouch && <InkCursor />}
    </div>
  );
};

export default App;