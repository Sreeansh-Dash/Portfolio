import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import { useAnimation } from '../AnimationContext';

const ResumeSpread: React.FC = () => {
    const { reduceAnimations } = useAnimation();

    return (
        <>
            {/* Left Page: Header & Education */}
            <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50">
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-200/40 to-transparent dark:from-black/40 pointer-events-none"></div>

                <header className="flex justify-between items-start mb-12">
                    <div className="flex items-center space-x-2 text-ink-light dark:text-ink-dark opacity-70">
                        <span className="material-icons text-sm">menu_book</span>
                        <span className="text-xs uppercase tracking-widest font-semibold">Portfolio Book</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-serif italic">Ch. VII</div>
                </header>

                <div className="space-y-8 z-10">
                    <div>
                        <h1 className="font-serif text-5xl md:text-6xl text-primary dark:text-white mb-4">
                            <SplitText text="Resume" delay={80} duration={0.4} />
                        </h1>
                        <p className="font-serif text-xl italic text-gray-500 dark:text-gray-400 border-b pb-6 border-gray-300 dark:border-gray-700">
                            <SplitText text="Education & Experience" delay={60} duration={0.4} />
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">Education</h3>

                            <div className="flex justify-between items-baseline border-b border-dashed border-gray-300 dark:border-gray-700 pb-3">
                                <div>
                                    <h4 className="font-serif text-lg font-bold text-ink-light dark:text-ink-dark">VIT Chennai</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">B.Tech CSE (AI & ML) · CGPA: 9.62</p>
                                </div>
                                <span className="text-sm font-serif text-gray-400 font-medium">2023 – 2027</span>
                            </div>

                            <div className="flex justify-between items-baseline border-b border-dashed border-gray-300 dark:border-gray-700 pb-3">
                                <div>
                                    <h4 className="font-serif text-lg font-bold text-ink-light dark:text-ink-dark">DPS Bhilai</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">CBSE Class XII · 93.4%</p>
                                </div>
                                <span className="text-sm font-serif text-gray-400 font-medium">2023</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 font-bold uppercase">
                    <span>Vol. 1</span>
                    <span>13</span>
                </div>
            </div>

            {/* Right Page: Experience, Certifications, Skills */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-200/40 to-transparent dark:from-black/40 pointer-events-none"></div>

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

                {/* Download Action (Top Right) */}
                <div className="absolute top-12 right-12 z-30">
                    <a
                        href="/Sreeansh_dash_resume_visual.pdf"
                        download
                        className="group flex flex-col items-end gap-2 text-gray-500 hover:text-primary dark:hover:text-white transition-colors"
                    >
                        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold">
                             <span>Download PDF</span>
                             <span className="material-icons text-sm group-hover:translate-y-0.5 transition-transform">download</span>
                        </div>
                        {/* Optional handwritten note */}
                        <motion.span
                          className="font-handwriting text-gray-400 text-sm block"
                          animate={reduceAnimations ? { rotate: -2 } : { rotate: [-2, -0.5, -2, -3.5, -2] }}
                          transition={reduceAnimations ? {} : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <WrittenText text="Full resume?" delay={400} speed={15} showCursor={true} />
                        </motion.span>
                    </a>
                </div>

                <div className="mt-8 z-10 space-y-10 pl-4 lg:pl-8">
                    {/* Experience */}
                    <section>
                        <h3 className="font-serif text-primary dark:text-white text-xl mb-6 flex items-center">
                            <span className="w-8 h-[1px] bg-primary dark:bg-white mr-3"></span>
                            <SplitText text="Experience" delay={50} duration={0.4} />
                        </h3>
                        <div className="space-y-6 border-l border-gray-200 dark:border-gray-700 ml-4 pl-6 relative">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white border-2 border-primary dark:border-white"></div>
                            <div className="relative">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h4 className="font-bold text-ink-light dark:text-ink-dark">Operations & Marketing Lead</h4>
                                    <span className="text-xs font-serif text-gray-500 font-medium">8 months (2023 – 2024)</span>
                                </div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">KalingaJyoti — Student Cultural Organisation, VIT Chennai</p>
                                <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-outside ml-4 space-y-1 text-justify">
                                    <li>Managed operations and marketing for one of VIT Chennai's active student cultural organisations</li>
                                    <li>Led a team of 30+ members across event logistics, on-campus outreach, and scheduling</li>
                                    <li>Coordinated and executed multiple large-scale on-campus cultural events end to end</li>
                                    <li>Owned the marketing function: social communication, promotional collateral, and audience growth</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section>
                        <h3 className="font-serif text-primary dark:text-white text-xl mb-4 flex items-center">
                            <span className="w-8 h-[1px] bg-primary dark:bg-white mr-3"></span>
                            <SplitText text="Certifications" delay={50} duration={0.4} />
                        </h3>
                        <div className="ml-13 pl-1">
                            <h4 className="font-bold text-ink-light dark:text-ink-dark mb-1">Google UX Design Certificate — Google / Coursera</h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-outside ml-4 space-y-1 text-justify">
                                <li>Completed all 7 courses in the Google UX Design Professional Certificate programme</li>
                                <li>Applied learning: user research, wireframing, low-to-high fidelity prototyping, usability testing</li>
                                <li>Informed the design decisions in the Portfolio site and Grievance AI interface work</li>
                            </ul>
                        </div>
                    </section>

                    {/* Skills Summary */}
                    <section>
                        <h3 className="font-serif text-primary dark:text-white text-xl mb-6 flex items-center">
                            <span className="w-8 h-[1px] bg-primary dark:bg-white mr-3"></span>
                            <SplitText text="Skills Summary" delay={50} duration={0.4} />
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm">
                            {[
                                { t: 'Languages', v: 'Python, Java, C, C++, TypeScript' },
                                { t: 'Frameworks & UI', v: 'React, Tailwind CSS, HTML/CSS' },
                                { t: 'AI / ML', v: 'NLP, Classification, Clustering, Data Analysis' },
                                { t: 'Design', v: 'Figma, UX Design, Wireframing, Interaction Design' },
                                { t: 'Tools', v: 'Git, GitHub, VS Code, Groq API, Embedded Systems' },
                            ].map(s => (
                                <div key={s.t}>
                                    <h5 className="font-bold text-[10px] uppercase tracking-wider text-gray-400 mb-2">{s.t}</h5>
                                    <p className="text-ink-light dark:text-ink-dark font-serif italic text-base">{s.v}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="mt-auto pt-8 flex justify-between items-end text-[10px] tracking-widest text-gray-400 font-bold uppercase">
                    <span>Resume</span>
                    <span>14</span>
                </div>
            </div>
        </>
    );
};

export default ResumeSpread;