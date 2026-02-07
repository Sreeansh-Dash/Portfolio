import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import { Project, Chapter } from '../../types';

interface Props {
  onNavigate: (chapter: Chapter) => void;
}

const ProjectItem: React.FC<{ project: Project; onNavigate: (chapter: Chapter) => void }> = ({ project, onNavigate }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (project.link) {
      onNavigate(project.link);
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const isLinkable = !!project.link;
  const isPortfolio = project.title === "Portfolio Site";

  // Icon selection based on project title
  let iconSrc = project.image; // Default fallback (though we replace it below)
  if (project.title === "Smart Cane") iconSrc = "/accessible.png";
  else if (project.title === "Grievance System") iconSrc = "/rocket.png";
  else if (project.title === "Portfolio Site") iconSrc = "/book_ribbon.png";

  return (
    <div className="flex gap-6 items-start group">
      {/* Thumbnail / Schematic View */}
      <div
        className="flex-shrink-0 w-24 h-24 border border-stone-300 dark:border-stone-600 p-4 bg-stone-100 dark:bg-stone-800 relative overflow-hidden transition-transform duration-300 flex items-center justify-center"
      >
        <div className="absolute inset-0 border-[0.5px] border-stone-400/30 m-1 z-10 pointer-events-none"></div>
        {/* Corner markers for engineering feel */}
        <div className="absolute top-0 left-0 w-1 h-1 bg-stone-400 z-10"></div>
        <div className="absolute top-0 right-0 w-1 h-1 bg-stone-400 z-10"></div>
        <div className="absolute bottom-0 left-0 w-1 h-1 bg-stone-400 z-10"></div>
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-stone-400 z-10"></div>

        <img
          src={iconSrc}
          alt={project.title}
          className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-500"
        />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <div className="mb-1">
          <span className="text-[10px] font-mono tracking-wider uppercase text-red-800 dark:text-red-400 block mb-0.5">
            {project.qualifier}
          </span>
          <button
            onClick={handleClick}
            className={`text-left font-display text-xl font-bold text-primary dark:text-white transition-colors ${isLinkable ? 'cursor-pointer hover:text-accent-blue' : ''} focus:outline-none focus:underline`}
            aria-expanded={!isLinkable ? isExpanded : undefined}
          >
            {project.title}
            {isLinkable && <span className="material-icons text-sm ml-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-5px] group-hover:translate-x-0" aria-hidden="true">arrow_forward</span>}
          </button>
        </div>

        {/* Tech Stack Metadata */}
        <div className="text-[10px] font-mono text-stone-500 dark:text-stone-400 border-l-2 border-stone-300 dark:border-stone-600 pl-2 mb-2">
          {project.techStack}
        </div>

        {/* Description & CTA */}
        <div className="relative">
          <p className={`text-sm text-ink-light dark:text-gray-400 leading-relaxed font-serif ${isExpanded ? '' : 'line-clamp-2'}`}>
            {project.description}
          </p>

          <div className="mt-2 flex items-center gap-4">
            {isPortfolio ? (
              <span className="text-xs font-sans font-bold tracking-wide text-green-600 dark:text-green-400 inline-flex items-center gap-1 uppercase">
                Viewing right now!
                <span className="material-icons text-[12px]">check_circle</span>
              </span>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleClick();
                }}
                className="text-xs font-sans font-bold tracking-wide text-accent-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1 transition-colors uppercase border-b border-transparent hover:border-blue-700 dark:hover:border-blue-300"
              >
                {project.ctaText || "View System"}
                <span className="material-icons text-[12px]">
                  {isLinkable ? 'arrow_outward' : (isExpanded ? 'expand_less' : 'expand_more')}
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSpread: React.FC<Props> = ({ onNavigate }) => {
  return (
    <>
      {/* Left Page: Engineering Context */}
      <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50">
        <header className="mb-12">
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 font-mono ink-reveal">
            Portfolio Vol. 1
          </span>
          <h1 className="font-display text-4xl lg:text-6xl text-primary dark:text-white font-black mb-4 tracking-tight ink-reveal" style={{ animationDelay: '0.2s' }}>
            Chapter III
          </h1>
          <h2 className="font-display text-2xl lg:text-3xl text-ink-light dark:text-gray-300 italic serif ink-reveal" style={{ animationDelay: '0.4s' }}>
            — Engineering & Systems
          </h2>
        </header>

        <div className="flex-grow ink-soak" style={{ animationDelay: '0.6s' }}>
          <p className="text-lg text-ink-light dark:text-gray-300 text-justify hyphens-auto pt-1 font-serif leading-relaxed">
            <span className="float-left text-6xl font-display font-bold mr-3 mt-[-10px] text-primary dark:text-white">E</span>
            ngineering is the art of balancing constraints. Whether designing embedded control loops or distributed AI pipelines, my focus is on system integrity, scalability, and impact.
          </p>
          <p className="text-lg text-ink-light dark:text-gray-300 text-justify hyphens-auto mt-8 font-serif leading-relaxed">
            This collection highlights my work in building robust systems—from hardware-level signal processing to user-facing interaction design. Each project represents a specific problem solved through rigorous architectural thinking.
          </p>

          <div className="mt-12 p-4 border border-dashed border-stone-300 dark:border-stone-600 bg-stone-50 dark:bg-stone-800/50 rounded-sm">
            <h5 className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-2">System Principles</h5>
            <ul className="text-sm font-mono text-stone-700 dark:text-stone-300 space-y-1">
              <li>› Latency-Critical Optimization</li>
              <li>› Resource-Constrained Intelligence</li>
              <li>› Human-Centric Architecture</li>
            </ul>
          </div>
        </div>

        <div className="mt-auto pt-8 text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1s' }}>
          014
        </div>
      </div>

      {/* Right Page: Project List */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">
        <div className="absolute top-0 right-6 w-10 h-24 bg-red-800 dark:bg-red-900 shadow-lg z-30 fade-scale" style={{ animationDelay: '0.8s' }}>
          <div className="w-full h-full bg-gradient-to-b from-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0 border-l-[20px] border-r-[20px] border-b-[15px] border-l-transparent border-r-transparent border-b-paper-light dark:border-b-paper-dark transform rotate-180 mb-[-15px]"></div>
          <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white/70 text-[10px] font-mono font-bold writing-vertical-rl">CH. III</span>
        </div>

        <div className="h-full flex flex-col">
          <div className="flex justify-between items-baseline mb-10 border-b-2 border-primary/10 pb-4 ink-reveal" style={{ animationDelay: '0.8s' }}>
            <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white">Selected Works</h3>
            <span className="text-sm font-mono text-gray-400">2024 — 2026</span>
          </div>

          <ul className="space-y-10 overflow-y-auto custom-scrollbar h-full pr-4 pb-4">
            {PROJECTS.map((project, idx) => (
              <li key={idx} className="group cursor-default fade-scale" style={{ animationDelay: `${1 + (idx * 0.2)}s` }}>
                <ProjectItem project={project} onNavigate={onNavigate} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-8 flex justify-end text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1.5s' }}>
          015
        </div>
      </div>
    </>
  );
};

export default ProjectsSpread;