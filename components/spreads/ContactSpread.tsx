import React, { useState } from 'react';

const ContactSpread: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sreeansh786@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      {/* Left Page: Let's Talk & Open to Grid */}
      <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-texture">
        <header className="mb-12">
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 font-mono ink-reveal">
            Chapter VIII
          </span>
          <h1 className="font-display text-4xl lg:text-5xl text-primary dark:text-white font-black mb-6 tracking-tight ink-reveal" style={{ animationDelay: '0.2s' }}>
            Let's Talk
          </h1>
        </header>

        <div className="flex-grow space-y-6 ink-soak" style={{ animationDelay: '0.4s' }}>
          <p className="font-serif text-lg leading-relaxed text-ink-light dark:text-gray-300 text-justify">
            <span className="float-left text-5xl font-display font-bold mr-3 mt-[-6px] text-primary dark:text-white">I</span>
            'm a first-year student at VIT Chennai — actively building, actively learning, and actively looking for opportunities to contribute to real work.
          </p>
          <p className="font-serif text-lg leading-relaxed text-ink-light dark:text-gray-300 text-justify">
            I'm open to internships, research collaborations, and project partnerships — particularly in AI systems, full-stack product development, or anything that sits at the intersection of the two.
          </p>
          <p className="font-serif text-lg leading-relaxed text-ink-light dark:text-gray-300 text-justify">
            If something I've built resonates with what you're working on, I'd genuinely like to hear about it.
          </p>

          {/* Open To Grid */}
          <div className="pt-8">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Open to</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Internships', icon: 'work_outline' },
                { title: 'Research Collab', icon: 'science' },
                { title: 'Open Source', icon: 'group_work' },
                { title: 'Project Partnerships', icon: 'lightbulb_outline' }
              ].map(item => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700/60 bg-white/20 dark:bg-black/10 rounded-sm"
                >
                  <span className="material-icons text-accent-blue text-lg" aria-hidden="true">{item.icon}</span>
                  <span className="font-mono text-xs text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '0.8s' }}>
          15
        </div>
      </div>

      {/* Right Page: Get in Touch cards & actions */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-paper-light dark:bg-paper-dark text-primary dark:text-white">
        <header className="mb-10 border-b-2 border-primary/10 pb-4 ink-reveal" style={{ animationDelay: '0.6s' }}>
          <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
        </header>

        <div className="flex-grow flex flex-col justify-between">
          <div className="space-y-4 ink-reveal" style={{ animationDelay: '0.8s' }}>
            {/* Email Card */}
            <div className="border border-gray-200 dark:border-gray-700 p-5 bg-white/60 dark:bg-gray-800/40 hover:border-gray-400 transition-colors flex items-center justify-between rounded-sm">
              <div className="flex items-center gap-4">
                <span className="material-icons text-gray-400">email</span>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400">Email</span>
                  <a href="mailto:sreeansh786@gmail.com" className="font-mono text-sm hover:text-accent-blue transition-colors">
                    sreeansh786@gmail.com
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="text-gray-400 hover:text-accent-blue transition-colors p-1.5 focus:outline-none"
                title="Copy to clipboard"
                aria-label="Copy Email address"
              >
                <span className="material-icons text-base">
                  {copied ? 'check' : 'content_copy'}
                </span>
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/sreeansh-dash/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-700 p-5 bg-white/60 dark:bg-gray-800/40 hover:border-gray-400 transition-colors flex items-center justify-between rounded-sm group block"
            >
              <div className="flex items-center gap-4">
                <span className="material-icons text-gray-400">link</span>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400">LinkedIn</span>
                  <span className="font-mono text-sm group-hover:text-accent-blue transition-colors">
                    in/sreeansh-dash
                  </span>
                </div>
              </div>
              <span className="material-icons text-base text-gray-400 group-hover:text-accent-blue transition-colors">
                arrow_outward
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/Sreeansh-Dash"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 dark:border-gray-700 p-5 bg-white/60 dark:bg-gray-800/40 hover:border-gray-400 transition-colors flex items-center justify-between rounded-sm group block"
            >
              <div className="flex items-center gap-4">
                <span className="material-icons text-gray-400">code</span>
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400">GitHub</span>
                  <span className="font-mono text-sm group-hover:text-accent-blue transition-colors">
                    Sreeansh-Dash
                  </span>
                </div>
              </div>
              <span className="material-icons text-base text-gray-400 group-hover:text-accent-blue transition-colors">
                arrow_outward
              </span>
            </a>

            {/* Location Card */}
            <div className="border border-gray-200 dark:border-gray-700 p-5 bg-white/60 dark:bg-gray-800/40 hover:border-gray-400 transition-colors flex items-center gap-4 rounded-sm">
              <span className="material-icons text-gray-400">location_on</span>
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-wider text-gray-400">Location</span>
                <span className="font-sans text-sm font-bold block text-gray-900 dark:text-white">
                  VIT Chennai, India
                </span>
                <span className="font-serif text-xs text-gray-500 italic block mt-0.5">
                  (from Bhilai, CG)
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Handwritten Note */}
          <div className="pt-10 pb-4 ink-reveal" style={{ animationDelay: '1.4s' }}>
            <p className="font-handwriting text-3xl text-center text-gray-500 dark:text-gray-400">
              "Thank you for reading."
            </p>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-end text-xs font-mono text-gray-400 fade-scale" style={{ animationDelay: '1.2s' }}>
          Vol. 1 · Page 016
        </div>
      </div>
    </>
  );
};

export default ContactSpread;