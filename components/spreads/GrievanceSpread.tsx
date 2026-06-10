import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import InteractiveWord from '../ui/InteractiveWord';

interface Props {
    onNavigate?: (chapter: Chapter) => void;
}

const GrievanceSpread: React.FC<Props> = () => {
    return (
        <>
            {/* Left Page: Problem, Role, Contributors */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-[#f7f5f0] dark:bg-[#1f2937]">
                <header className="mb-8">
                    <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono">
                        <SplitText text="Project Deep Dive · Ch. V" delay={40} duration={0.4} />
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-2 tracking-tight">
                        <SplitText text="AI-Powered Grievance Redressal" delay={70} duration={0.4} />
                    </h1>
                    <h2 className="font-serif text-xl text-ink-light dark:text-gray-300 italic mb-8">
                        <SplitText text="Applied AI for Public Issue Resolution" delay={60} duration={0.4} />
                    </h2>
                </header>

                <div className="flex-grow space-y-6">
                    {/* Problem Framing */}
                    <div className="font-serif text-base text-ink-light dark:text-gray-300 text-justify leading-relaxed">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2">Problem Framing</h3>
                        <p>
                            <WrittenText
                                text="Manual grievance handling in institutions is slow, inconsistent, and opaque. Complaints get lost, misrouted, or deprioritised arbitrarily. The goal was an AI-driven pipeline that removes human bottlenecks from classification and routing — not from resolution."
                                delay={200}
                                speed={10}
                            />
                        </p>
                    </div>

                    {/* My Role & Leadership */}
                    <div className="border-l-2 border-primary/20 pl-4 py-1">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-primary dark:text-blue-300 mb-2 font-bold">My Role & Leadership</h4>
                        <p className="font-serif text-sm text-ink dark:text-gray-300 leading-relaxed">
                            I led the project from ideation to deployment, defining the system architecture and coordinating task execution across the team.
                        </p>
                        <ul className="font-mono text-[10px] text-gray-600 dark:text-gray-400 space-y-1 mt-2 list-none">
                            <li className="flex gap-2"><span>›</span> Designing overall system architecture & data flow</li>
                            <li className="flex gap-2"><span>›</span> Leading backend development & API design</li>
                            <li className="flex gap-2"><span>›</span> Integrating AI/NLP models into production</li>
                            <li className="flex gap-2"><span>›</span> Coordinating frontend–backend integration</li>
                        </ul>
                    </div>

                    {/* Key Decisions */}
                    <div className="font-serif text-xs text-ink-light dark:text-gray-300 leading-relaxed space-y-2 max-w-prose">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2">Key Decisions</h3>
                        <ul className="list-disc list-outside pl-4 space-y-1 text-justify">
                            <li><InteractiveWord text="NLP classification" hoverClass="font-handwriting text-lg text-primary" /> <WrittenText text="handles category + urgency in one pass — fewer model calls, lower latency" delay={400} speed={10} /></li>
                            <li><WrittenText text="Rule-based routing on top of ML output — keeps decisions inspectable and correctable" delay={800} speed={10} /></li>
                            <li><InteractiveWord text="Designed for institutional deployment" hoverClass="font-bold text-primary" />: <WrittenText text="no PII stored beyond the session" delay={1200} speed={10} /></li>
                            <li><WrittenText text="Explainability over raw accuracy — a wrong decision that can be traced is better than a right one that can't" delay={1600} speed={10} /></li>
                        </ul>
                    </div>

                    {/* Contributors */}
                    <div className="text-xs">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-1 border-b border-gray-200 pb-1">Contributors</h4>
                        <div className="font-serif text-xs text-ink dark:text-gray-300">
                            <p><span className="italic font-bold">Team Lead:</span> Sreeansh Dash (Me)</p>
                            <p className="mt-0.5"><span className="italic">Team Members:</span> R. Harshavardhan, Amberjeet Singh, Shivam Oli</p>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 text-xs font-mono text-gray-400">
                    09
                </div>
            </div>

            {/* Right Page: System Overview & Tech */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">
                {/* Corner curl — sits at bottom-right, appears on hover */}
                <motion.div
                  className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none z-40"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: 'linear-gradient(225deg, rgba(0,0,0,0.08) 45%, transparent 45%)',
                    borderLeft: '1px solid rgba(0,0,0,0.08)',
                    borderTop: '1px solid rgba(0,0,0,0.08)',
                  }}
                />

                {/* Section: System Architecture */}
                <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white mb-3 border-b-2 border-primary/10 pb-2">
                        <SplitText text="System Architecture" delay={50} duration={0.4} />
                    </h3>
                    <p className="font-serif text-sm text-ink-light dark:text-gray-300 leading-relaxed text-justify">
                        <WrittenText text="The system takes unstructured text input (grievance submissions), runs NLP classification to assign category and urgency, applies a rule-based decision workflow to route to the correct handler, and generates a structured resolution recommendation. Each stage is auditable and explainable — not a black box." delay={400} speed={10} />
                    </p>
                </div>

                {/* Visual Reference: Architecture */}
                <div className="relative mb-4 group flex justify-center py-2">
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
                                className="w-auto h-auto max-h-[160px] object-contain mx-auto hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="text-center mt-1.5 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                            Figure 1. Example Running System
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Python', 'Flask', 'NLP Classification', 'RESTful APIs'].map(tech => (
                            <span key={tech} className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-[10px] font-mono text-stone-600 dark:text-stone-300 rounded-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* What I Learned */}
                <div className="mb-4">
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-1">What I Learned</h4>
                    <p className="font-serif text-xs text-ink-light dark:text-gray-300 leading-relaxed text-justify">
                        <WrittenText text="There's a meaningful difference between building a classifier and building a decision system. The classifier is one component. The architecture around it — routing logic, fallback handling, auditability — is where the actual product lives." delay={800} speed={12} fontHandwriting={true} />
                    </p>
                </div>

                {/* Outcome Section */}
                <div className="mt-auto">
                    <h3 className="font-display text-sm font-bold text-ink-light dark:text-white mb-2">
                        Outcome
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-stone-300 dark:border-stone-600 p-2.5 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1 leading-tight">
                                Automated
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 leading-tight block">
                                Classification & Routing
                            </span>
                        </div>
                        <div className="border border-stone-300 dark:border-stone-600 p-2.5 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1 leading-tight">
                                Reduced
                            </span>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-gray-500 leading-tight block">
                                Response Time & Load
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end text-xs font-mono text-gray-400">
                    Vol. 1 · Page 010
                </div>
            </div>
        </>
    );
};

export default GrievanceSpread;