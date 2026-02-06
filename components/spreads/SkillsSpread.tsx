import React from 'react';
import StickyNote from '../StickyNote';

const SkillsSpread: React.FC = () => {
    return (
        <>
            {/* Left Page: Philosophy & Mindset */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-r border-gray-200 dark:border-gray-700/50 bg-[#1a1a1c] text-gray-300">
                <header className="mb-12">
                    <span className="block text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 font-mono ink-reveal">
                        Chapter VI
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl text-white font-black mb-6 tracking-tight ink-reveal" style={{ animationDelay: '0.2s' }}>
                        Technical Toolkit
                    </h1>
                    <div className="w-12 h-0.5 bg-gray-600 ink-reveal" style={{ animationDelay: '0.4s' }}></div>
                </header>

                <div className="flex-grow space-y-8 max-w-prose ink-soak" style={{ animationDelay: '0.6s' }}>
                    <p className="font-serif text-lg leading-relaxed text-gray-300">
                        My approach is grounded in the belief that the best tools are those that enable precision, control, and clarity. I prefer technologies that expose system behavior rather than obscure it, allowing informed engineering decisions.
                    </p>
                    <p className="font-serif text-lg leading-relaxed text-gray-300">
                        I enjoy working in constraint-driven environments where limitations around compute, latency, or resources force better architectural choices. Across projects, I value maintainability, explainability, and correctness—both in code and in system design.
                    </p>

                    <div className="pt-8">
                        <p className="font-serif italic text-gray-500">
                            "Translating real-world problems into computational models."
                        </p>
                    </div>
                </div>

                <div className="mt-auto pt-8 text-xs font-mono text-gray-600 fade-scale" style={{ animationDelay: '0.8s' }}>
                    045
                </div>
            </div>

            {/* Right Page: Domains & Tools */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-[#202022] text-gray-300">

                {/* Core Domains */}
                <div className="mb-12 ink-reveal" style={{ animationDelay: '0.8s' }}>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Core Domains</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="font-display text-xl text-white font-bold mb-2">AI & Machine Learning</h4>
                            <p className="font-serif text-sm text-gray-400 leading-relaxed">
                                Deep learning fundamentals, NLP concepts, and computer vision, with emphasis on applied and explainable models rather than purely experimental results.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-display text-xl text-white font-bold mb-2">Embedded Systems</h4>
                            <p className="font-serif text-sm text-gray-400 leading-relaxed">
                                IoT fundamentals and sensor-driven systems, focusing on low-level control, hardware–software integration, and real-time constraints.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Languages & Tools */}
                <div className="ink-reveal" style={{ animationDelay: '1.0s' }}>
                    <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">Languages & Tools</h3>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h5 className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-wide">Programming</h5>
                            <ul className="space-y-2 font-mono text-sm text-gray-300">
                                <li>Python</li>
                                <li>Java</li>
                                <li>C / C++</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-xs text-gray-500 font-bold uppercase mb-4 tracking-wide">Technologies</h5>
                            <ul className="space-y-2 font-mono text-sm text-gray-300">
                                <li>HTML / CSS / JavaScript</li>
                                <li>Git / GitHub</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sticky Note */}
                <StickyNote className="bottom-24 right-12 rotate-1 max-w-[200px] ink-reveal" style={{ animationDelay: '1.4s' }}>
                    <p className="text-xl font-handwriting leading-tight">
                        New sections are <br />underway...
                    </p>
                </StickyNote>

                <div className="mt-auto pt-8 flex justify-end text-xs font-mono text-gray-600 fade-scale" style={{ animationDelay: '1.2s' }}>
                    Vol. 1 · Page 046
                </div>
            </div>
        </>
    );
};

export default SkillsSpread;