import React, { useState } from 'react';
import StickyNote from '../StickyNote';

const ContactSpread: React.FC = () => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setToastMessage(`${label} copied!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    };

    return (
        <>
            {/* Toast Notification */}
            <div className={`fixed top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-6 py-3 rounded-full shadow-xl transition-all duration-300 z-50 flex items-center gap-3 ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none'}`}>
                <span className="material-icons text-sm">check_circle</span>
                <span className="font-mono text-sm font-bold tracking-wide">{toastMessage}</span>
            </div>

            {/* Left Page: Closing Narrative */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative border-r border-gray-200 dark:border-gray-700/50">
                <header className="mb-12">
                    <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono ink-reveal">
                        Chapter VIII
                    </span>
                    <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-6 tracking-tight ink-reveal" style={{ animationDelay: '0.2s' }}>
                        Closing Notes
                    </h1>
                </header>

                <div className="flex-grow space-y-6 ink-soak" style={{ animationDelay: '0.4s' }}>
                    <p className="font-serif text-lg leading-relaxed text-ink-light dark:text-gray-300 text-justify hyphens-auto">
                        <span className="float-left text-5xl font-display font-bold mr-3 mt-[-6px] text-primary dark:text-white">T</span>
                        his portfolio concludes one volume of my journey in engineering—defined by exploration, iteration, and systems thinking. Each chapter reflects a process of learning through constraints, experimentation, and refinement.
                    </p>
                    <p className="font-serif text-lg leading-relaxed text-ink-light dark:text-gray-300 text-justify hyphens-auto">
                        I am interested in problems that sit at the intersection of software intelligence and system design, particularly where clarity, precision, and real-world impact matter more than abstraction alone.
                    </p>
                    <p className="font-serif text-lg leading-relaxed text-ink-light dark:text-gray-300 text-justify hyphens-auto">
                        If you are working on research, assistive technology, or engineering-driven products, I am open to meaningful collaboration.
                    </p>
                </div>

                <div className="mt-auto pt-8 text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '0.8s' }}>
                    068
                </div>
            </div>

            {/* Right Page: Contact & Actions */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark">

                {/* Section: Get in Touch */}
                <div className="mt-12 space-y-8 lg:max-w-md">
                    <div className="ink-reveal" style={{ animationDelay: '0.6s' }}>
                        <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 font-mono">
                            Let's Collaborate
                        </span>
                        <h2 className="font-display text-3xl font-bold text-primary dark:text-white mb-8">
                            Get in Touch
                        </h2>

                        <div className="space-y-4 font-mono text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-gray-400">email</span>
                                <span
                                    onClick={() => handleCopy('sreeyaju@gmail.com', 'Email')}
                                    className="cursor-pointer hover:text-primary dark:hover:text-white transition-colors relative group"
                                    title="Click to copy"
                                >
                                    sreeyaju@gmail.com
                                    <span className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 material-icons text-[14px]">content_copy</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-icons text-gray-400">call</span>
                                <span
                                    onClick={() => handleCopy('+91-9307362174', 'Phone number')}
                                    className="cursor-pointer hover:text-primary dark:hover:text-white transition-colors relative group"
                                    title="Click to copy"
                                >
                                    +91-9307362174
                                    <span className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 material-icons text-[14px]">content_copy</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Send Email Action */}
                    <div className="pt-4 ink-reveal" style={{ animationDelay: '0.8s' }}>
                        <a
                            href="mailto:sreeyaju@gmail.com?subject=Collaboration%20Opportunity&body=Hi%20Sreeansh,"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-white text-white dark:text-primary text-xs font-bold uppercase tracking-widest hover:bg-black dark:hover:bg-gray-200 transition-colors relative before:absolute before:-inset-8 before:z-10"
                        >
                            <span>Start a Conversation</span>
                            <span className="material-icons text-sm">arrow_forward</span>
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="pt-12 ink-reveal" style={{ animationDelay: '1.0s' }}>
                        <h3 className="font-serif text-primary dark:text-white text-lg mb-6 flex items-center">
                            <span className="w-8 h-[1px] bg-primary dark:bg-white mr-3"></span>
                            Socials
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'GitHub', url: 'https://github.com/Sreeansh-Dash', icon: 'code' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sreeansh-dash', icon: 'link' },
                                { name: 'LeetCode', url: 'https://leetcode.com/u/JijnashuM/', icon: 'data_object' },
                            ].map(social => (
                                <li key={social.name}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group w-full block p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 hover:border-primary dark:hover:border-white transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary transition-colors">
                                                <span className="material-icons text-lg">{social.icon}</span>
                                            </span>
                                            <span className="font-mono text-sm uppercase tracking-wide font-bold text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-white transition-colors">{social.name}</span>
                                        </div>
                                        <span className="material-icons text-sm text-gray-400 group-hover:text-primary dark:group-hover:text-white transform group-hover:translate-x-1 transition-all">arrow_forward</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sticky Note */}
                <StickyNote className="absolute bottom-32 right-12 rotate-2 fade-scale" style={{ animationDelay: '1.4s' }}>
                    <div className="text-center">
                        <p className="font-handwriting text-xl leading-tight text-gray-700">
                            Chennai, India
                        </p>
                        <p className="font-handwriting text-lg text-green-700 font-bold mt-2">
                            ● Open to work
                        </p>
                    </div>
                </StickyNote>

                <div className="mt-auto pt-8 flex justify-end text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1.2s' }}>
                    Vol. 1 · Page 069
                </div>
            </div>
        </>
    );
};

export default ContactSpread;