import React from 'react';
import { Chapter } from '../../types';

interface Props {
    onNavigate: (chapter: Chapter) => void;
}

const SmartCaneSpread: React.FC<Props> = () => {
    return (
        <>
            {/* Left Page: Narrative & Context */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50">
                <header className="mb-8">
                    <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono ink-reveal">
                        Project Deep Dive · Ch. IV
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-2 tracking-tight ink-reveal" style={{ animationDelay: '0.2s' }}>
                        Smart Walking Stick
                    </h1>
                    <h2 className="font-serif text-xl text-ink-light dark:text-gray-300 italic mb-8 ink-reveal" style={{ animationDelay: '0.4s' }}>
                        Embedded AI for Independent Mobility
                    </h2>
                </header>

                <div className="flex-grow">
                    {/* Abstract / Problem Statement */}
                    <div className="font-serif text-base text-ink-light dark:text-gray-300 text-justify leading-relaxed space-y-4 max-w-prose ink-soak" style={{ animationDelay: '0.6s' }}>
                        <p>
                            Traditional assistive mobility devices often lack contextual awareness and adaptive feedback, limiting their effectiveness in real-world navigation. This project explores how embedded intelligence and mechanical design can be combined to improve independent mobility for visually impaired users.
                        </p>
                        <p>
                            The goal was to design an affordable, reliable, and fully offline assistive system capable of real-time obstacle detection and guided motion, while operating under strict constraints of latency, power consumption, and usability.
                        </p>
                        <p>
                            The system integrates sensor fusion and AI-based perception, with all inference performed on-device to ensure privacy, responsiveness, and consistent performance across environments.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row gap-8 text-sm ink-soak" style={{ animationDelay: '0.8s' }}>
                        {/* Contributors */}
                        <div className="flex-1">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Contributors</h4>
                            <div className="font-serif text-ink dark:text-gray-300">
                                <p><span className="italic">Guide:</span> Dr. Sukriti</p>
                                <p><span className="italic">Team:</span> R. Harshvardhan, Soumit M.</p>
                            </div>
                        </div>

                        {/* Components */}
                        <div className="flex-1">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 border-b border-gray-200 pb-1">Components</h4>
                            <ul className="font-mono text-xs text-ink dark:text-gray-300 space-y-1 list-disc pl-4">
                                <li>ESP32 Controller</li>
                                <li>OV2640 Camera & MPU6050 IMU</li>
                                <li>Ultrasonic Sensors & TinyML Models</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1s' }}>
                    07
                </div>
            </div>

            {/* Right Page: Technical Approach & Outcome */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">

                {/* Section: The Approach */}
                <div className="mb-8">
                    <h3 className="font-display text-2xl font-bold text-ink-light dark:text-white mb-4 border-b-2 border-primary/10 pb-2 ink-reveal" style={{ animationDelay: '0.6s' }}>
                        The Approach
                    </h3>
                    <div className="ink-soak" style={{ animationDelay: '0.8s' }}>
                        <p className="font-serif text-sm text-ink-light dark:text-gray-300 leading-relaxed text-justify mb-4">
                            The system combines ultrasonic proximity sensing with embedded AI to provide continuous environmental awareness. Sensor data is processed locally, eliminating cloud dependence and minimizing response time.
                        </p>
                        <p className="font-serif text-sm text-ink-light dark:text-gray-300 leading-relaxed text-justify">
                            A key design decision is the use of Ackermann steering-based motion control, enabling smoother directional guidance and improved stability while navigating uneven or constrained terrain. The overall architecture prioritizes low power operation without compromising reliability or safety.
                        </p>
                    </div>
                </div>

                {/* Visual Reference */}
                <div className="relative mb-4 group flex justify-center fade-scale" style={{ animationDelay: '1s' }}>
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow-100/80 dark:bg-yellow-900/40 rotate-1 shadow-sm border border-yellow-200/50 backdrop-blur-[1px] z-20"></div>

                    <div className="relative">
                        <div className="bg-stone-100 dark:bg-stone-800 p-2 shadow-md rotate-1 border border-stone-200 dark:border-stone-700 transition-transform duration-500 group-hover:rotate-0 inline-block">
                            <img
                                src="/smartcane.png"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x600/e5e5e5/a0a0a0?text=Prototype+Mk.+I";
                                }}
                                alt="Smart Cane Prototype Mk. I"
                                className="w-auto h-auto max-h-[320px] object-contain opacity-90 mx-auto"
                            />
                        </div>
                        <div className="text-center mt-2 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                            Figure 1. Prototype Mk. I
                        </div>

                        {/* Handwritten Annotation - Adjusted to point to chassis */}
                        <div className="absolute -right-25 bottom-30 w-32 transform -rotate-12 text-red-700 dark:text-red-400 font-handwriting text-sm leading-tight opacity-90 mix-blend-multiply dark:mix-blend-normal pointer-events-none hidden md:flex flex-col items-center">
                            <span className="block mb-1 text-center">Ackermann steering geometry</span>
                            <svg className="w-8 h-8 text-red-700 transform -rotate-45 self-start -ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Outcome Section */}
                <div className="mt-auto ink-reveal" style={{ animationDelay: '1.2s' }}>
                    <h3 className="font-display text-xl font-bold text-ink-light dark:text-white mb-4">
                        Outcome
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="border border-stone-300 dark:border-stone-600 p-3 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-2xl font-bold font-display text-primary dark:text-white mb-1">
                                Real-time
                            </span>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                                Obstacle Detection
                            </span>
                        </div>
                        <div className="border border-stone-300 dark:border-stone-600 p-3 bg-stone-50 dark:bg-stone-800/50">
                            <span className="block text-2xl font-bold font-display text-primary dark:text-white mb-1">
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
