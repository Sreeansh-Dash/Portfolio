import React from 'react';
import { motion } from 'framer-motion';
import SplitText from '../ui/SplitText';
import BlurText from '../ui/BlurText';

const SkillsSpread: React.FC = () => {
  return (
    <>
      {/* Left Page: Chapter Header, Drop-cap & Languages */}
      <div className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col relative border-b md:border-r md:border-b-0 border-gray-200 dark:border-gray-700/50 bg-[#1a1a1c] text-gray-300">
        <header className="mb-12">
          <span className="block text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 font-mono">
            <SplitText text="Chapter VI" delay={40} duration={0.4} />
          </span>
          <h1 className="font-display text-4xl lg:text-5xl text-white font-black mb-6 tracking-tight">
            <SplitText text="Technical Toolkit" delay={70} duration={0.4} />
          </h1>
          <div className="w-12 h-0.5 bg-gray-600 ink-reveal" style={{ animationDelay: '0.4s' }}></div>
        </header>

        <div className="flex-grow space-y-8 max-w-prose pt-1">
          <p className="font-serif text-lg leading-relaxed text-gray-300">
            <span className="text-5xl font-display float-left mr-3 mt-[-6px] text-white">T</span>
            <BlurText
              text="ools are not the work — they're how the work gets done. The most important skill is knowing which tool the problem actually needs, and why."
              animateBy="words"
              delay={20}
            />
          </p>
          <p className="font-serif text-lg leading-relaxed text-gray-300">
            My stack spans embedded C/C++ for hardware-level control, Python for ML pipelines and data work, and React/TypeScript for the interface layer.
          </p>

          {/* Spoken Languages */}
          <div className="pt-6 border-t border-gray-800">
            <h5 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-3">Spoken Languages</h5>
            <ul className="grid grid-cols-3 gap-4 text-sm font-serif">
              <li>
                <span className="block font-bold text-white">English</span>
                <span className="text-xs text-gray-500 italic">Fluent</span>
              </li>
              <li>
                <span className="block font-bold text-white">Hindi</span>
                <span className="text-xs text-gray-500 italic">Native</span>
              </li>
              <li>
                <span className="block font-bold text-white">French</span>
                <span className="text-xs text-gray-500 italic">Elementary</span>
              </li>
            </ul>
          </div>

          {/* Currently Exploring */}
          <div className="mt-8 p-4 border border-dashed border-gray-700 bg-black/20 rounded-sm">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500 mb-2">Currently exploring</p>
            <p className="font-serif text-sm italic text-gray-300 leading-relaxed">
              "Groq API integration, unsupervised clustering for medical datasets, barcode/OCR pipelines for healthcare AI."
            </p>
          </div>
        </div>

        <div className="mt-auto pt-8 text-xs font-mono text-gray-600 fade-scale" style={{ animationDelay: '0.8s' }}>
          11
        </div>
      </div>

      {/* Right Page: Skills & Tools grids */}
      <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col relative bg-[#202022] text-gray-300">
        {/* Corner curl — sits at bottom-right, appears on hover */}
        <motion.div
          className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background: 'linear-gradient(225deg, rgba(255,255,255,0.03) 45%, transparent 45%)',
            borderLeft: '1px solid rgba(255,255,255,0.03)',
            borderTop: '1px solid rgba(255,255,255,0.03)',
          }}
        />

        <header className="mb-10 border-b border-gray-800 pb-4">
          <h2 className="font-display text-2xl font-bold text-white">
            <SplitText text="Skills & Tools" delay={50} duration={0.4} />
          </h2>
        </header>

        <div className="flex-grow space-y-8 overflow-y-auto custom-scrollbar pr-2 pb-4">
          {[
            {
              group: 'Languages',
              skills: ['Python', 'Java', 'C', 'C++', 'TypeScript']
            },
            {
              group: 'Web & UI',
              skills: ['React', 'Tailwind CSS', 'HTML / CSS']
            },
            {
              group: 'AI & Machine Learning',
              skills: ['NLP', 'Classification Models', 'Clustering', 'Data Analysis']
            },
            {
              group: 'Design',
              skills: ['Figma', 'UX Design', 'Interaction Design', 'Wireframing']
            },
            {
              group: 'Tools & Platforms',
              skills: ['Git', 'GitHub', 'VS Code', 'Groq API', 'Embedded Systems']
            }
          ].map((item, idx) => (
            <div key={item.group} className="ink-reveal" style={{ animationDelay: `${0.8 + (idx * 0.1)}s` }}>
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-3">{item.group}</h4>
              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1 border border-gray-700 bg-black/10 text-gray-300 rounded-sm hover:border-blue-400 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Certifications Block */}
          <div className="pt-6 border-t border-gray-800 ink-reveal" style={{ animationDelay: '1.4s' }}>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-3">Certifications</h4>
            <div className="border border-gray-800 p-4 bg-black/10 rounded-sm">
              <span className="block font-sans font-bold text-sm text-white uppercase tracking-wider">Google UX Design Certificate</span>
              <p className="font-serif text-xs italic text-gray-400 mt-1">
                User-centered design · Usability · Wireframing · Accessibility
              </p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-8 flex justify-end text-xs font-mono text-gray-600 fade-scale" style={{ animationDelay: '1.5s' }}>
          Vol. 1 · Page 012
        </div>
      </div>
    </>
  );
};

export default SkillsSpread;