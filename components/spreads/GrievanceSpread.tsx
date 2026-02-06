import React, { useState } from 'react';
import { Chapter } from '../../types';

interface Props {
    onNavigate?: (chapter: Chapter) => void;
}

const GrievanceSpread: React.FC<Props> = () => {
    return (
        <>
            {/* Left Page: Problem, Role, Contributors */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-[#f7f5f0] dark:bg-[#1f2937]">
                <header className="mb-8">
                    <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono ink-reveal">
                        Project Deep Dive · Ch. V
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-2 tracking-tight ink-reveal" style={{ animationDelay: '0.2s' }}>
                        AI-Powered Grievance Redressal System
                    </h1>
                    <h2 className="font-serif text-xl text-ink-light dark:text-gray-300 italic mb-8 ink-reveal" style={{ animationDelay: '0.4s' }}>
                        Applied AI for Public Issue Resolution
                    </h2>
                </header>

                <div className="flex-grow space-y-8 ink-soak" style={{ animationDelay: '0.6s' }}>
                    {/* Problem Framing */}
                    <div className="font-serif text-base text-ink-light dark:text-gray-300 text-justify leading-relaxed">
                        <p className="mb-4">
                            Large-scale grievance redressal systems often suffer from manual overload, delayed responses, and inconsistent prioritization. This project addresses these limitations by designing an AI-driven system that automates grievance classification, routing, and resolution tracking.
                        </p>
                        <p>
                            The objective was to build a scalable, transparent, and explainable platform capable of handling high volumes of complaints while reducing response time and administrative burden.
                        </p>
                    </div>

                    {/* My Role & Leadership */}
                    <div className="border-l-2 border-primary/20 pl-4 py-1">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-primary dark:text-blue-300 mb-3 font-bold">My Role & Leadership</h4>
                        <p className="font-serif text-sm text-ink dark:text-gray-300 leading-relaxed mb-2">
                            I led the project from ideation to deployment, defining the system architecture and coordinating task execution across the team.
                        </p>
                        <ul className="font-mono text-[11px] text-gray-600 dark:text-gray-400 space-y-1 mt-2 list-none">
                            <li className="flex gap-2"><span>›</span> Designing overall system architecture & data flow</li>
                            <li className="flex gap-2"><span>›</span> Leading backend development & API design</li>
                            <li className="flex gap-2"><span>›</span> Integrating AI/NLP models into production</li>
                            <li className="flex gap-2"><span>›</span> Coordinating frontend–backend integration</li>
                        </ul>
                    </div>

                    {/* Contributors */}
                    <div>
                        <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Contributors</h4>
                        <div className="font-serif text-sm text-ink dark:text-gray-300">
                            <p><span className="italic font-bold">Team Lead:</span> Sreeansh Dash (Me)</p>
                            <p className="mt-1"><span className="italic">Team Members:</span> R. Harshavardhan, Amberjeet Singh, Shivam Oli</p>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1s' }}>
                    033
                </div>
            </div>

            {/* Right Page: System Overview & Tech */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">

                {/* Section: System Overview */}
                <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white mb-4 border-b-2 border-primary/10 pb-2 ink-reveal" style={{ animationDelay: '0.6s' }}>
                        System Overview
                    </h3>
                    <div className="ink-soak" style={{ animationDelay: '0.8s' }}>
                        <p className="font-serif text-sm text-ink-light dark:text-gray-300 leading-relaxed text-justify mb-4">
                            The system processes user-submitted grievances through an AI-powered pipeline that performs automated classification, priority assignment, and department-level routing. Natural language inputs are analyzed to extract intent, urgency, and category.
                        </p>
                        <p className="font-serif text-sm text-ink-light dark:text-gray-300 leading-relaxed text-justify">
                            Human oversight is preserved through transparent decision logic and structured dashboards, ensuring the system remains assistive, accountable, and explainable.
                        </p>
                    </div>
                </div>

                {/* Visual Reference: Architecture */}
                <div className="relative mb-6 group flex justify-center py-4 fade-scale" style={{ animationDelay: '1s' }}>
                    {/* Simple tape effect */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-blue-100/80 dark:bg-blue-900/40 -rotate-1 shadow-sm opacity-80 z-20 mix-blend-multiply dark:mix-blend-overlay"></div>

                    <div className="relative">
                        <div className="bg-white dark:bg-gray-800 p-2 shadow-sm border border-gray-200 dark:border-gray-700">
                            <img
                                src="/grieve.png"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x350/f0f0f0/a0a0a0?text=System+Architecture+Diagram";
                                }}
                                alt="System Architecture Overview"
                                className="w-auto h-auto max-h-[220px] object-contain mx-auto hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="text-center mt-2 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                            Figure 1. Example Running System
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8 ink-reveal" style={{ animationDelay: '1.2s' }}>
                    <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'Flask', 'NLP Classification', 'RESTful APIs'].map(tech => (
                            <span key={tech} className="px-2 py-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-[10px] font-mono text-stone-600 dark:text-stone-300 rounded-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Outcome Section */}
                <div className="mt-auto ink-reveal" style={{ animationDelay: '1.4s' }}>
                    <h3 className="font-display text-xl font-bold text-ink-light dark:text-white mb-4">
                        Outcome
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-stone-300 dark:border-stone-600 p-3 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1 leading-tight">
                                Automated
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 leading-tight block">
                                Classification & Routing
                            </span>
                        </div>
                        <div className="border border-stone-300 dark:border-stone-600 p-3 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1 leading-tight">
                                Reduced
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 leading-tight block">
                                Response Time & Load
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1.6s' }}>
                    Vol. 1 · Page 034
                </div>
            </div>
        </>
    );
};

export default GrievanceSpread;