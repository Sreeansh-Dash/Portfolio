import React from 'react';
import { motion } from 'framer-motion';
import { Chapter } from '../../types';
import SplitText from '../ui/SplitText';
import BlurText from '../ui/BlurText';

interface Props {
    onNavigate: (chapter: Chapter) => void;
}

const SmartCaneSpread: React.FC<Props> = () => {
    return (
        <>
            {/* Left Page: Narrative & Context */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50">
                <header className="mb-8">
                    <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono">
                        <SplitText text="Project Deep Dive · Ch. IV" delay={40} duration={0.4} />
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-2 tracking-tight">
                        <SplitText text="Smart Walking Stick" delay={70} duration={0.4} />
                    </h1>
                    <h2 className="font-serif text-xl text-ink-light dark:text-gray-300 italic mb-8">
                        <SplitText text="Embedded AI for Independent Mobility" delay={60} duration={0.4} />
                    </h2>
                </header>

                <div className="flex-grow space-y-6">
                    {/* Problem Framing */}
                    <div className="font-serif text-base text-ink-light dark:text-gray-300 text-justify leading-relaxed max-w-prose">
                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2">Problem Framing</h3>
                        <p>
                            <BlurText
                                text="Visually impaired individuals navigating unfamiliar environments face a gap that standard white canes don't address: uneven terrain, sudden drops, and obstacles below knee height. The challenge was building a low-cost, hardware-level response to that gap."
                                animateBy="words"
                                delay={20}
                            />
                        </p>
                    </div>

                    {/* Key Decisions */}
                    <div className="font-serif text-sm text-ink-light dark:text-gray-300 leading-relaxed max-w-prose ink-soak" style={{ animationDelay: '0.8s' }}>
                        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-2">Key Decisions</h3>
                        <ul className="list-disc list-outside pl-4 space-y-1.5 text-justify">
                            <li>Ackermann geometry chosen over simpler pivot steering for natural walking-pace control</li>
                            <li>Multi-angle ultrasonic array rather than single forward sensor — covers low obstacles and drops</li>
                            <li>Haptic feedback prioritised over audio-only — usable in noisy environments</li>
                            <li>Offline-first: no cloud dependency, works in any environment</li>
                        </ul>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row gap-8 text-sm ink-soak" style={{ animationDelay: '1.0s' }}>
                        {/* Contributors */}
                        <div className="flex-1">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Contributors</h4>
                            <div className="font-serif text-xs text-ink dark:text-gray-300">
                                <p><span className="italic">Guide:</span> Dr. Sukriti</p>
                                <p><span className="italic">Team:</span> R. Harshvardhan, Soumit M.</p>
                            </div>
                        </div>

                        {/* Components */}
                        <div className="flex-1">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Components</h4>
                            <ul className="font-mono text-[11px] text-ink dark:text-gray-300 space-y-1 list-disc pl-4">
                                <li>ESP32 Controller</li>
                                <li>OV2640 Camera & MPU6050 IMU</li>
                                <li>Ultrasonic Sensors & TinyML Models</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1.2s' }}>
                    07
                </div>
            </div>

            {/* Right Page: Technical Approach & Outcome */}
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

                {/* Section: What Was Built */}
                <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white mb-3 border-b-2 border-primary/10 pb-2">
                        <SplitText text="What Was Built" delay={50} duration={0.4} />
                    </h3>
                    <p className="font-serif text-sm text-ink-light dark:text-gray-300 leading-relaxed text-justify ink-soak" style={{ animationDelay: '0.8s' }}>
                        A mobility aid integrating Ackermann steering geometry for directional stability, ultrasonic sensors for proximity detection across multiple angles, and haptic + audio feedback calibrated to terrain type and obstacle distance. The system runs entirely on embedded hardware with no external connectivity required.
                    </p>
                </div>

                {/* Visual Reference */}
                <div className="relative mb-4 group flex justify-center fade-scale" style={{ animationDelay: '1.0s' }}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-100/80 dark:bg-yellow-900/40 rotate-1 shadow-sm border border-yellow-200/50 backdrop-blur-[1px] z-20"></div>

                    <div className="relative">
                        <div className="bg-stone-100 dark:bg-stone-800 p-2 shadow-md rotate-1 border border-stone-200 dark:border-stone-700 transition-transform duration-500 group-hover:rotate-0 inline-block">
                            <img
                                src="/smartcane.png"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x600/e5e5e5/a0a0a0?text=Prototype+Mk.+I";
                                }}
                                alt="Smart Cane Prototype Mk. I"
                                className="w-auto h-auto max-h-[180px] object-contain opacity-90 mx-auto"
                            />
                        </div>
                        <div className="text-center mt-2 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                            Figure 1. Prototype Mk. I
                        </div>

                        {/* Handwritten Annotation - Pointing to chassis */}
                        <div className="absolute -right-25 bottom-12 w-32 transform -rotate-12 text-red-700 dark:text-red-400 font-handwriting text-sm leading-tight opacity-90 mix-blend-multiply dark:mix-blend-normal pointer-events-none hidden md:flex flex-col items-center">
                            <span className="block mb-1 text-center">Ackermann steering geometry</span>
                            <svg className="w-8 h-8 text-red-700 transform -rotate-45 self-start -ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* What I Learned */}
                <div className="mb-4 ink-reveal" style={{ animationDelay: '1.2s' }}>
                    <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary dark:text-blue-300 mb-1">What I Learned</h4>
                    <p className="font-serif text-xs italic text-ink-light dark:text-gray-300 leading-relaxed text-justify">
                        Building in hardware makes every decision irreversible in a way that software doesn't. You can't hot-reload a circuit. That constraint changed how I approach architecture generally — decide slowly, build once.
                    </p>
                </div>

                {/* Outcome Section */}
                <div className="mt-auto ink-reveal" style={{ animationDelay: '1.4s' }}>
                    <h3 className="font-display text-sm font-bold text-ink-light dark:text-white mb-2">
                        Outcome
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-stone-300 dark:border-stone-600 p-2.5 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1">
                                Real-time
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                                Obstacle Detection
                            </span>
                        </div>
                        <div className="border border-stone-300 dark:border-stone-600 p-2.5 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-xl font-bold font-display text-primary dark:text-white mb-1">
                                Low
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                                Latency & Power
                            </span>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1.4s' }}>
                    Vol. 1 · Page 008
                </div>
            </div>
        </>
    );
};

export default SmartCaneSpread;
