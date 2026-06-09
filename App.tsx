import React, { useState } from 'react';
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
import Lightfall from './components/Lightfall';

const App: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState<Chapter>(Chapter.COVER);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev' | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNavigate = (targetChapter: Chapter) => {
    if (targetChapter === currentChapter || isFlipping) return;

    // Determine direction
    const currentIndex = NAVIGATION_ITEMS.findIndex(item => item.id === currentChapter);
    const targetIndex = NAVIGATION_ITEMS.findIndex(item => item.id === targetChapter);
    const direction = targetIndex > currentIndex ? 'next' : 'prev';

    setFlipDirection(direction);
    setIsFlipping(true);

    // Timing matches the CSS transition (0.6s)
    setTimeout(() => {
      setCurrentChapter(targetChapter);
      // Short delay to allow content swap before returning
      setTimeout(() => {
        setFlipDirection(null);
        setIsFlipping(false);
      }, 50);
    }, 600);
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
        return <GrievanceSpread />; // Renamed in UI but kept component for now
      case Chapter.TOOLKIT:
        return <SkillsSpread />; // Renamed in UI
      case Chapter.RESUME:
        return <ResumeSpread />;
      case Chapter.CLOSING:
        return <ContactSpread />; // Renamed in UI
      default:
        return <CoverSpread onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center p-4 md:p-8 py-10 md:py-8 font-body transition-colors duration-300 relative">
      {/* Fullscreen background Lightfall component */}
      <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden bg-[#020d20]">
        <Lightfall
          colors={['#A6C8FF', '#5227FF', '#FF9FFC']}
          backgroundColor="#020d20"
          speed={1}
          streakCount={8}
          streakWidth={1}
          streakLength={1}
          glow={1}
          density={1}
          twinkle={1}
          zoom={2}
          backgroundGlow={1}
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1}
          mouseRadius={0.6}
        />
      </div>

      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-105 transition-transform border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-yellow-400"
          onClick={() => document.documentElement.classList.toggle('dark')}
          aria-label="Toggle Dark Mode"
        >
          <span className="material-icons-outlined text-xl block">
            dark_mode
          </span>
        </button>
      </div>

      <div className="w-full relative">
        <BookLayout
          flipDirection={flipDirection}
          onPrev={prevChapter ? handlePrev : undefined}
          onNext={nextChapter ? handleNext : undefined}
          prevLabel={prevChapter?.label}
          nextLabel={nextChapter?.label}
        >
          <Navigation currentChapter={currentChapter} onNavigate={handleNavigate} />
          {renderSpread()}
        </BookLayout>
      </div>
    </div>
  );
};

export default App;