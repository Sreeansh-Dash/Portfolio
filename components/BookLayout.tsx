import React from 'react';

interface BookLayoutProps {
  children: React.ReactNode;
  flipDirection?: 'next' | 'prev' | null;
  onPrev?: () => void;
  onNext?: () => void;
  prevLabel?: string;
  nextLabel?: string;
}

const BookLayout: React.FC<BookLayoutProps> = ({
  children,
  flipDirection,
  onPrev,
  onNext,
  prevLabel,
  nextLabel
}) => {
  return (
    <div className="book-container w-full max-w-7xl mx-auto relative perspective-1500">
      {/* The physical book cover/pages container */}
      <div
        className={`
            bg-paper-light dark:bg-paper-dark w-full min-h-[85vh] h-auto md:h-auto md:aspect-[3/2] lg:aspect-[1.5/1] 
            shadow-book rounded-sm flex flex-col md:flex-row overflow-visible md:overflow-hidden relative 
            transition-all duration-300 page-flip-container 
            ${flipDirection === 'next' ? 'flipping-next' : ''}
            ${flipDirection === 'prev' ? 'flipping-prev' : ''}
        `}
      >

        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-paper-texture opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-soft-light z-0" aria-hidden="true"></div>

        {/* Center Spine Shadow for 3D effect */}
        <div className="absolute left-1/2 top-0 bottom-0 w-16 -ml-8 spine-shadow-overlay z-20 pointer-events-none mix-blend-multiply dark:mix-blend-overlay hidden md:block" aria-hidden="true"></div>

        {/* Dynamic Page Flip Shadow - Sweeps across during animation */}
        <div className="absolute inset-0 page-shadow z-30 pointer-events-none" aria-hidden="true"></div>

        {/* Mobile: Top to Bottom separation line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 dark:bg-gray-700 md:hidden z-20" aria-hidden="true"></div>

        {/* Navigation Controls - Unobtrusive until hovered */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-40 group flex items-center gap-2 text-primary dark:text-white transition-all duration-300 outline-none focus:ring-2 focus:ring-accent-blue rounded-full p-2"
            aria-label={prevLabel ? `Previous Chapter: ${prevLabel}` : "Previous Chapter"}
          >
            {/* Arrow - subtle ghost by default */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-all duration-300 backdrop-blur-[2px]">
              <span className="material-icons group-hover:-translate-x-1 transition-transform text-2xl opacity-30 group-hover:opacity-100" aria-hidden="true">arrow_back</span>
            </div>

            {/* Text - hidden and non-blocking until hover */}
            <div className="text-left hidden md:block opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Previous</span>
              <span className="block text-xs font-serif italic text-primary dark:text-white whitespace-nowrap">{prevLabel}</span>
            </div>
          </button>
        )}

        {onNext && (
          <button
            onClick={onNext}
            className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-40 group flex items-center gap-2 text-primary dark:text-white transition-all duration-300 text-right outline-none focus:ring-2 focus:ring-accent-blue rounded-full p-2"
            aria-label={nextLabel ? `Next Chapter: ${nextLabel}` : "Next Chapter"}
          >
            {/* Text - hidden and non-blocking until hover */}
            <div className="text-right hidden md:block opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Next</span>
              <span className="block text-xs font-serif italic text-primary dark:text-white whitespace-nowrap">{nextLabel}</span>
            </div>

            {/* Arrow - subtle ghost by default */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 dark:group-hover:bg-black/20 transition-all duration-300 backdrop-blur-[2px]">
              <span className="material-icons group-hover:translate-x-1 transition-transform text-2xl opacity-30 group-hover:opacity-100" aria-hidden="true">arrow_forward</span>
            </div>
          </button>
        )}

        {/* Content Rendered Here (Usually two flex-1 divs) */}
        {children}
      </div>

      {/* Background decoration under the book */}
      <div className="absolute -z-10 top-4 -left-4 -right-4 bottom-[-20px] bg-white/20 dark:bg-black/20 blur-xl rounded-full opacity-60"></div>
    </div>
  );
};

export default BookLayout;