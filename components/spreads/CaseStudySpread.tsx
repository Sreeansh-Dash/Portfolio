import React from 'react';

const CaseStudySpread: React.FC = () => {
    return (
        <>
            {/* Left Page: Narrative */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-[#f7f5f0] dark:bg-[#252528]">
                <div className="flex items-center justify-between mb-12 border-b border-gray-300/50 dark:border-gray-700/50 pb-4 fade-scale" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <span className="material-icons text-sm" aria-hidden="true">architecture</span>
                        <span className="text-xs uppercase tracking-widest font-sans">Project Deep Dive</span>
                    </div>
                    <span className="text-xs font-mono text-gray-400">CH. III</span>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                    <h1 className="font-display text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-2 ink-reveal">
                        Smart Walking Stick
                    </h1>
                    <h2 className="font-serif italic text-xl text-gray-600 dark:text-gray-400 mb-10 font-light ink-reveal" style={{ animationDelay: '0.3s' }}>
                        Embedded AI for Independent Mobility
                    </h2>

                    <div className="prose dark:prose-invert font-serif text-lg leading-relaxed text-gray-700 dark:text-gray-300 ink-soak" style={{ animationDelay: '0.6s' }}>
                        <p className="mb-6">
                            <span className="float-left text-7xl leading-[0.75] font-display font-bold mr-3 mt-1 text-gray-900 dark:text-white">T</span>
                            raditional assistive devices often lack contextual awareness and feedback. This project aimed to bridge that gap by creating an affordable, reliable device that works offline.
                        </p>
                        <p className="mb-6">
                            I designed an embedded system combining sensor fusion and <em className="font-semibold text-gray-900 dark:text-gray-100">AI-based perception</em>, prioritizing low latency and energy efficiency for visually impaired users.
                        </p>

                        <h3 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mt-12 mb-4 border-l-4 border-accent-blue pl-4 ink-reveal" style={{ animationDelay: '1s' }}>Components</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-gray-400 text-base">
                            <li>ESP32 Controller</li>
                            <li>OV2640 Camera & MPU6050 IMU</li>
                            <li>Ultrasonic Sensors & TinyML Models</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 font-bold uppercase fade-scale" style={{ animationDelay: '1.5s' }}>
                    <span>Vol. 1</span>
                    <span>042</span>
                </div>
            </div>

            {/* Right Page: Technical Visuals */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">
                <div className="mt-12 flex-1 relative">

                    <div className="absolute -right-2 top-32 w-32 transform rotate-1 hidden xl:block z-20 ink-soak" style={{ animationDelay: '1.5s' }}>
                        <p className="font-handwriting text-xl text-blue-600 dark:text-blue-400 leading-tight">
                            <span className="text-2xl block mb-1">*</span>
                            Ackermann steering-based motion control for uneven terrains.
                        </p>
                        <span className="material-icons absolute -left-6 -top-2 text-blue-600 dark:text-blue-400 opacity-50 transform rotate-180">arrow_right_alt</span>
                    </div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center ink-reveal" style={{ animationDelay: '0.8s' }}>
                                The Approach
                                <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
                            </h3>
                            <p className="font-serif text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6 ink-soak" style={{ animationDelay: '1.2s' }}>
                                The system integrates ultrasonic sensors for proximity and an AI model for object recognition, processed locally to ensure privacy and speed.
                            </p>
                        </div>

                        {/* Polaroid */}
                        <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-500 w-64 mx-auto my-4 group cursor-pointer ink-soak" style={{ animationDelay: '1.8s' }}>
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white/30 dark:bg-white/10 border border-white/20 z-10 backdrop-blur-sm shadow-sm rotate-[-2deg]"></div>
                            <div className="bg-white p-3 pb-8 shadow-polaroid rounded-sm">
                                <div className="aspect-square bg-gray-100 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" alt="Hardware Prototype" className="w-full h-full object-cover" />
                                </div>
                                <div className="mt-3 font-handwriting text-gray-600 text-xl text-center transform -rotate-1">
                                    Prototype Mk. I
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center ink-reveal" style={{ animationDelay: '2s' }}>
                                Outcome
                                <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow ml-4"></div>
                            </h3>
                            <div className="grid grid-cols-2 gap-4 ink-soak" style={{ animationDelay: '2.4s' }}>
                                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded border border-gray-100 dark:border-white/5 text-center">
                                    <span className="block text-2xl font-display font-bold text-gray-900 dark:text-white">Real-time</span>
                                    <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500">Obstacle Detection</span>
                                </div>
                                <div className="p-4 bg-gray-50 dark:bg-white/5 rounded border border-gray-100 dark:border-white/5 text-center">
                                    <span className="block text-2xl font-display font-bold text-gray-900 dark:text-white">Low</span>
                                    <span className="text-[10px] font-sans uppercase tracking-wider text-gray-500">Latency & Power</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 font-bold uppercase fade-scale" style={{ animationDelay: '2.5s' }}>
                    <span>Engineering Log</span>
                    <span>043</span>
                </div>
            </div>
        </>
    );
};

export default CaseStudySpread;