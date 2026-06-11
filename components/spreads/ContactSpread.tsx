import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import WrittenText from '../ui/WrittenText';
import StickyNote from '../StickyNote';
import { useAnimation } from '../AnimationContext';

const ContactSpread: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const { reduceAnimations } = useAnimation();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sreeansh786@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* Left Page: Let's Talk, Intentions & Open To */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-paper-texture">
        <header className="mb-8 flex justify-between items-start">
          <div className="flex items-center space-x-2 opacity-70">
            <span className="material-icons text-xs">menu_book</span>
            <span className="text-xs uppercase tracking-widest font-mono font-bold">Portfolio Book</span>
          </div>
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase font-mono">
            Chapter VIII
          </span>
        </header>

        <div className="flex-grow space-y-6 pt-1 flex flex-col justify-center max-w-xl">
          <div className="space-y-4">
            <h1 className="font-display text-5xl lg:text-6xl text-primary dark:text-white font-black mb-3 tracking-tight">
              <SplitText text="Let's Talk" delay={70} duration={0.4} />
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-snug">
              "If you're building something interesting, I want to hear about it."
            </p>
          </div>

          <div className="font-serif text-base md:text-lg text-ink-light dark:text-gray-300 space-y-4 leading-relaxed">
            <p>
              I'm currently looking for Software Engineering and AI/ML internships for Summer 2027, preferably in Bengaluru, Hyderabad, Mumbai, or Pune — though I'll always make exceptions for work that's genuinely exciting.
            </p>
            <p>
              Not hiring? That's fine too. Reach out if you want to discuss a project, collaborate on something, or just talk about why standard blood test reference ranges are a systemic problem.
            </p>
          </div>

          {/* Email CTA */}
          <div className="py-4 border-y border-stone-200 dark:border-stone-800 my-4">
            <span className="block text-[10px] font-mono uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">Direct Correspondence</span>
            <a 
              href="mailto:sreeansh786@gmail.com" 
              className="font-mono text-lg md:text-xl font-black text-accent-blue dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all"
            >
              sreeansh786@gmail.com
            </a>
          </div>

          {/* Open To Grid */}
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Open to</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { title: 'Internships', icon: 'work_outline' },
                { title: 'Research Collab', icon: 'science' },
                { title: 'Open Source', icon: 'group_work' },
                { title: 'Partnerships', icon: 'lightbulb_outline' }
              ].map(item => (
                <div
                  key={item.title}
                  className="flex items-center gap-3 p-3 border border-gray-200/80 dark:border-gray-700/60 bg-white/20 dark:bg-black/10 rounded-sm"
                >
                  <span className="material-icons text-accent-blue text-base" aria-hidden="true">{item.icon}</span>
                  <span className="font-mono text-xs text-gray-700 dark:text-gray-300 font-bold uppercase tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase" aria-hidden="true">
          <span>Let's Talk</span>
          <span>Page 015</span>
        </div>
      </div>

      {/* Right Page: Message Form & Socials */}
      <div className="flex-1 p-8 md:p-14 lg:p-20 flex flex-col relative bg-paper-light dark:bg-paper-dark text-primary dark:text-white">
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

        <div className="flex-grow flex flex-col justify-center relative mt-4 space-y-6 max-w-xl">
          
          {/* Contact Form */}
          {submitted ? (
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-stone-250 dark:border-stone-800 pb-2 mb-3">
                Send a Message
              </h3>
              <div className="py-8 text-center space-y-3">
                <span className="material-icons text-3xl text-green-500">check_circle_outline</span>
                <p className="font-serif text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Message sent. I'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          ) : (
          <form
            onSubmit={handleFormSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-stone-250 dark:border-stone-800 pb-2 mb-3">
              Send a Message
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-name" className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Name</label>
                <input 
                  id="form-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="w-full text-sm font-sans p-3 bg-white/40 dark:bg-black/15 border border-stone-300 dark:border-stone-700 rounded-sm focus:outline-none focus:border-accent-blue dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Email</label>
                <input 
                  id="form-email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="w-full text-sm font-sans p-3 bg-white/40 dark:bg-black/15 border border-stone-300 dark:border-stone-700 rounded-sm focus:outline-none focus:border-accent-blue dark:text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="form-message" className="block text-[10px] font-mono uppercase text-gray-400 mb-1">Message</label>
              <textarea 
                id="form-message"
                name="message"
                rows={3}
                required
                placeholder="What are you building?"
                value={formState.message}
                onChange={e => setFormState({ ...formState, message: e.target.value })}
                className="w-full text-sm font-sans p-3 bg-white/40 dark:bg-black/15 border border-stone-300 dark:border-stone-700 rounded-sm focus:outline-none focus:border-accent-blue dark:text-white resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-primary dark:bg-white text-white dark:text-primary font-mono text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-60"
            >
              {isSending ? 'Sending...' : 'Send Message'}
              <span className="material-icons text-sm">{isSending ? 'hourglass_top' : 'arrow_forward'}</span>
            </button>
            {error && (
              <p className="text-xs font-mono text-red-500 dark:text-red-400 text-center">
                Something went wrong. Email me directly at{' '}
                <a href="mailto:sreeansh786@gmail.com" className="underline">sreeansh786@gmail.com</a>
              </p>
            )}
          </form>
          )}

          {/* Social Links Cards */}
          <div className="pt-2 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://github.com/Sreeansh-Dash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 border border-stone-200 dark:border-stone-850 bg-white/40 dark:bg-black/15 rounded-sm hover:border-gray-400 transition-colors group"
              >
                <span className="material-icons text-base text-gray-400 group-hover:text-accent-blue">code</span>
                <div className="min-w-0">
                  <span className="block text-[8px] font-mono text-gray-400 uppercase tracking-wider">GitHub</span>
                  <span className="block text-xs font-mono truncate text-gray-700 dark:text-gray-300">Sreeansh-Dash</span>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/sreeansh-dash/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3 border border-stone-200 dark:border-stone-850 bg-white/40 dark:bg-black/15 rounded-sm hover:border-gray-400 transition-colors group"
              >
                <span className="material-icons text-base text-gray-400 group-hover:text-accent-blue">link</span>
                <div className="min-w-0">
                  <span className="block text-[8px] font-mono text-gray-400 uppercase tracking-wider">LinkedIn</span>
                  <span className="block text-xs font-mono truncate text-gray-700 dark:text-gray-300">in/sreeansh-dash</span>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Sticky Note positioned cleanly */}
          <div className="relative h-24 mt-4 flex justify-center items-center">
            <StickyNote className="absolute -bottom-2" rotation="2deg">
              <div className="font-handwriting text-sm leading-tight text-gray-800 text-center max-w-[160px]">
                <span className="block font-bold">P.S. — I usually reply</span>
                <span className="block mt-0.5">within 24 hours.</span>
                <span className="block text-[11px] text-gray-500 italic mt-1 leading-snug">(Unless I'm debugging something cursed.)</span>
              </div>
            </StickyNote>
          </div>
        </div>

        {/* Footer & Book Closing Line */}
        <div className="mt-auto pt-6 border-t border-stone-200 dark:border-stone-800 text-center">
          <p className="text-[10px] font-mono text-gray-450 dark:text-gray-400 uppercase tracking-widest leading-relaxed">
            Sreeansh Dash · 2025 · Built with React + Vite + Tailwind · Hosted on Netlify
          </p>
          <div className="flex justify-between items-end text-xs tracking-widest text-gray-400 dark:text-gray-500 font-bold uppercase mt-2" aria-hidden="true">
            <span>Get in Touch</span>
            <span>Page 016</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSpread;