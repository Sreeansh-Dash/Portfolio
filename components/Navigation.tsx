import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Chapter, NavItem } from '../types';
import { NAVIGATION_ITEMS } from '../constants';
import { useAnimation } from './AnimationContext';

interface NavigationProps {
  currentChapter: Chapter;
  onNavigate: (chapter: Chapter) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentChapter, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);

    // Reset search state when closing
    if (!nextState) {
      setTimeout(() => {
        setShowSearch(false);
        setSearchQuery("");
      }, 300);
    }
  };

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Handle clicking outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // Reset search state when closing
        setTimeout(() => {
          setShowSearch(false);
          setSearchQuery("");
        }, 300);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const filteredItems = NAVIGATION_ITEMS.filter(item =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.subLabel && item.subLabel.toLowerCase().includes(searchQuery.toLowerCase())) ||
    item.roman.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const { liteMode: reduceAnimations } = useAnimation();

  // Flutter animation for bookmark ribbon
  const flutterAnimate = reduceAnimations ? { skewX: 0 } : { skewX: [0, 1, 0, -0.5, 0] };
  const flutterTransition = reduceAnimations ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut' };

  return (
    <nav ref={navRef} className="absolute right-12 md:right-24 top-0 z-50 flex flex-col items-center" aria-label="Chapter Navigation">
      {/* The Red Ribbon hanging part - Now Toggles */}
      <motion.div
        className="origin-top"
        animate={flutterAnimate}
        transition={flutterTransition}
      >
        <button
          className={`w-8 bg-bookmark-red shadow-md cursor-pointer transition-all duration-300 hover:h-24 ${isOpen ? 'h-16' : 'h-20'} border-none outline-none focus:ring-2 focus:ring-yellow-400`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="chapter-menu"
          aria-label={isOpen ? "Close Chapter Menu" : "Open Chapter Menu"}
        >
          {!isOpen && (
            <div className="w-full h-full flex flex-col items-center justify-end pb-2">
              <span className="text-[8px] font-bold text-white/90 writing-vertical-rl transform rotate-180 mb-1 tracking-widest opacity-80 decoration-transparent">MENU</span>
              <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[10px] border-l-transparent border-r-transparent border-b-paper-light dark:border-b-paper-dark"></div>
            </div>
          )}
        </button>
      </motion.div>

      {/* The Paper Menu Dropdown */}
      <div
        id="chapter-menu"
        className={`
          w-72 bg-paper-light dark:bg-slate-800 shadow-paper-menu rounded-b-sm relative -mt-2 px-8 pt-6 pb-12 
          bg-paper-texture transform origin-top transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
        `}
        aria-hidden={!isOpen}
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-black/10 to-transparent"></div>

        <div className="space-y-4 text-center">
          <div className="border-b border-gray-200 dark:border-gray-600 pb-3 mb-4 min-h-[30px] flex items-center justify-center">
            {showSearch ? (
              <div className="flex items-center w-full gap-2" role="search">
                <label htmlFor="chapter-search" className="sr-only">Search Chapters</label>
                <input
                  id="chapter-search"
                  ref={searchInputRef}
                  type="text"
                  placeholder="SEARCH CHAPTERS..."
                  className="flex-1 bg-transparent border-none focus:ring-0 p-0 text-xs font-bold tracking-[0.2em] text-primary dark:text-white placeholder-gray-400 uppercase"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  onClick={() => { setShowSearch(false); setSearchQuery(""); }}
                  className="text-gray-400 hover:text-bookmark-red"
                  aria-label="Close Search"
                >
                  <span className="material-icons text-sm" aria-hidden="true">close</span>
                </button>
              </div>
            ) : (
              <h3 className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gray-400 dark:text-gray-500">
                Chapter Select
              </h3>
            )}
          </div>

          <ul className="space-y-3 font-display text-lg text-primary dark:text-white transition-all duration-300">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      toggleMenu();
                    }}
                    className={`
                        w-full flex justify-between items-center group cursor-pointer hover:text-bookmark-red transition-colors
                        ${currentChapter === item.id ? 'text-bookmark-red font-bold' : ''}
                    `}
                    aria-current={currentChapter === item.id ? 'page' : undefined}
                  >
                    <span className="text-xs text-gray-400 font-bold group-hover:text-bookmark-red/70 w-6 text-left">{item.roman}</span>
                    <span className="border-b border-transparent group-hover:border-bookmark-red/30 flex-1 text-left ml-4">{item.label}</span>
                  </button>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-400 italic py-4 font-serif">No chapters found.</li>
            )}
          </ul>

          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-center gap-6">
            <button
              onClick={() => { onNavigate(Chapter.COVER); toggleMenu(); }}
              className="group p-1 focus:outline-none focus:ring-2 focus:ring-bookmark-red rounded"
              title="Go to Cover"
              aria-label="Go to Cover Page"
            >
              <span className="material-icons text-gray-400 text-sm group-hover:text-bookmark-red transition-colors" aria-hidden="true">home</span>
            </button>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="group p-1 focus:outline-none focus:ring-2 focus:ring-bookmark-red rounded"
              title="Search Chapters"
              aria-label="Toggle Search"
              aria-expanded={showSearch}
            >
              <span className={`material-icons text-sm transition-colors ${showSearch ? 'text-bookmark-red' : 'text-gray-400 group-hover:text-bookmark-red'}`} aria-hidden="true">search</span>
            </button>
            <button
              onClick={() => { onNavigate(Chapter.CONTACT); toggleMenu(); }}
              className="group p-1 focus:outline-none focus:ring-2 focus:ring-bookmark-red rounded"
              title="Contact Page"
              aria-label="Go to Contact Page"
            >
              <span className="material-icons text-gray-400 text-sm group-hover:text-bookmark-red transition-colors" aria-hidden="true">mail</span>
            </button>
          </div>
        </div>

        {/* Wax Seal Close Button */}
        <button
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 cursor-pointer group z-20 outline-none"
          onClick={toggleMenu}
          title="Close Menu"
          aria-label="Close Menu"
        >
          <div className="w-12 h-12 rounded-full wax-seal flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200 border-2 border-red-900 group-focus:ring-2 group-focus:ring-white">
            <span className="font-cursive text-white/90 text-xl font-bold drop-shadow-md select-none transform -rotate-12 translate-y-0.5">SD</span>
          </div>
        </button>
      </div>

      {/* Decorative triangle at top of menu to connect to ribbon - Now clickable to close */}
      {isOpen && (
        <div
          className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[12px] border-t-bookmark-red filter drop-shadow-sm absolute top-[70px] z-10 cursor-pointer"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navigation;