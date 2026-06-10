# Portfolio Phase 3 — Animation & 3D Book Experience

## Repo
https://github.com/Sreeansh-Dash/Portfolio

## Stack
React 19 + TypeScript + Vite + Tailwind CSS v4 + existing custom classes preserved from Phase 1/2.

---

## Overview of what this prompt builds

1. Install dependencies (Framer Motion + ReactBits SplitText)
2. 3D book illusion — spine, depth, shadow
3. Opening sequence — closed book → cover opens → first page reveals
4. Page turn animation between chapters
5. Writing/ink effect on all text when a page loads
6. Hover effects on specific key words
7. Idle ambient animations (nothing should ever be completely still)
8. Replace the current background (neon streaks) with something that fits the book

---

## Step 0 — Install dependencies

```bash
npm install framer-motion
npx shadcn@latest add https://reactbits.dev/r/SplitText-ts-tailwind
npx shadcn@latest add https://reactbits.dev/r/BlurText-ts-tailwind
```

SplitText and BlurText will be installed into `components/ui/`. Import them from there.

---

## Step 1 — Replace the background

**Delete** or **disable** the current background animation component entirely (the neon light streaks). 

Replace the root background in `App.tsx` or the main wrapper with this:

```tsx
// Background: dark ambient with subtle paper grain — fits the book aesthetic
<div className="fixed inset-0 -z-10 bg-[#0f0e0d]">
  {/* Subtle radial glow — like a lamp above the desk */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(80,60,40,0.25),transparent)]" />
  {/* Grain texture overlay */}
  <div
    className="absolute inset-0 opacity-[0.035] pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'repeat',
      backgroundSize: '128px 128px',
    }}
  />
</div>
```

---

## Step 2 — 3D Book illusion

### 2a. Add a `BookScene` wrapper component

Create `components/BookScene.tsx`:

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface BookSceneProps {
  children: React.ReactNode;
}

const BookScene: React.FC<BookSceneProps> = ({ children }) => {
  return (
    // Perspective container — gives the whole book 3D depth
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: '2500px', perspectiveOrigin: '50% 45%' }}
    >
      <motion.div
        className="relative w-full max-w-[1400px] h-full"
        style={{ transformStyle: 'preserve-3d' }}
        // Subtle continuous tilt — book never sits perfectly flat
        animate={{ rotateX: [0.5, 1.5, 0.5] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Book body */}
        <div
          className="relative w-full h-full flex shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: '-18px 8px 60px rgba(0,0,0,0.7), 18px 8px 40px rgba(0,0,0,0.4)',
          }}
        >
          {/* Spine — left edge, visible as a 3D face */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: '-14px',
              top: 0,
              width: '14px',
              height: '100%',
              transformOrigin: 'right center',
              transform: 'rotateY(-90deg)',
              background: 'linear-gradient(to right, #1a1510, #2a2018)',
              borderLeft: '1px solid rgba(255,255,255,0.04)',
            }}
          />
          {/* Page stack — right edge, visible as layered pages */}
          <div
            className="absolute pointer-events-none"
            style={{
              right: '-10px',
              top: '2px',
              width: '10px',
              height: 'calc(100% - 4px)',
              transformOrigin: 'left center',
              transform: 'rotateY(90deg)',
              background:
                'repeating-linear-gradient(to bottom, #e8e2d4 0px, #d4cfc4 1px, #e8e2d4 3px)',
            }}
          />
          {/* Actual spread content */}
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default BookScene;
```

### 2b. Wrap the spread in `App.tsx`

In `App.tsx`, wherever the current two-page spread is rendered, wrap it:

```tsx
import BookScene from './components/BookScene';

// Replace:
<div className="flex ..."> {/* current spread wrapper */}

// With:
<BookScene>
  <div className="flex ..."> {/* keep existing spread wrapper */}
</BookScene>
```

---

## Step 3 — Opening sequence (plays once on first load)

Create `components/BookOpeningSequence.tsx`:

```tsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const BookOpeningSequence: React.FC<Props> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'done'>('closed');

  useEffect(() => {
    // Start opening after a short pause
    const t1 = setTimeout(() => setPhase('opening'), 600);
    // Signal completion so App can show the real content
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0e0d]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ perspective: '2000px' }}>
            <div className="relative flex" style={{ transformStyle: 'preserve-3d' }}>

              {/* Closed book — left half (back cover, hidden) */}
              <motion.div
                className="w-[340px] h-[480px] bg-[#1c1410] border border-[#2a2018] shadow-2xl"
                style={{ transformOrigin: 'right center', transformStyle: 'preserve-3d' }}
              />

              {/* Right half = cover — rotates open */}
              <motion.div
                className="w-[340px] h-[480px] bg-[#1c1410] border border-[#2a2018] shadow-2xl flex flex-col items-center justify-center gap-4"
                style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
                initial={{ rotateY: 0 }}
                animate={phase === 'opening' ? { rotateY: -175 } : { rotateY: 0 }}
                transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.2 }}
              >
                {/* Cover content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center px-8"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-amber-700/60 mb-4">
                    Portfolio Vol. 1
                  </p>
                  <h1 className="font-display text-4xl font-bold text-stone-200 leading-tight mb-2">
                    Sreeansh<br />Dash
                  </h1>
                  <div className="w-12 h-px bg-amber-700/40 mx-auto my-4" />
                  <p className="font-serif italic text-stone-400 text-sm">
                    AI &amp; ML · Full Stack · Design
                  </p>
                </motion.div>

                {/* Spine line on the cover edge */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-amber-900/30 via-amber-700/20 to-amber-900/30" />
              </motion.div>

            </div>
          </div>

          {/* Fade hint at the bottom */}
          <motion.p
            className="absolute bottom-12 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Opening...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookOpeningSequence;
```

In `App.tsx`:

```tsx
import BookOpeningSequence from './components/BookOpeningSequence';

const App = () => {
  const [bookOpened, setBookOpened] = useState(false);

  return (
    <>
      {!bookOpened && <BookOpeningSequence onComplete={() => setBookOpened(true)} />}
      {/* existing app content */}
    </>
  );
};
```

---

## Step 4 — Page turn animation between chapters

When the user navigates to a different chapter, animate the transition as a page turn.

### 4a. Wrap spread content in `App.tsx` with AnimatePresence

```tsx
import { AnimatePresence, motion } from 'framer-motion';

// Wherever you render the current chapter component:
<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={currentChapter}
    custom={direction}
    initial="enter"
    animate="center"
    exit="exit"
    variants={{
      enter: (dir: number) => ({
        rotateY: dir > 0 ? 25 : -25,
        opacity: 0,
        transformOrigin: dir > 0 ? 'left center' : 'right center',
      }),
      center: {
        rotateY: 0,
        opacity: 1,
        transformOrigin: 'center',
      },
      exit: (dir: number) => ({
        rotateY: dir > 0 ? -25 : 25,
        opacity: 0,
        transformOrigin: dir > 0 ? 'right center' : 'left center',
      }),
    }}
    transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
    style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}
  >
    {/* chapter content */}
  </motion.div>
</AnimatePresence>
```

### 4b. Track direction in `App.tsx`

```tsx
const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

const navigate = (chapter: Chapter) => {
  const currentIdx = NAVIGATION_ITEMS.findIndex(i => i.id === currentChapter);
  const nextIdx = NAVIGATION_ITEMS.findIndex(i => i.id === chapter);
  setDirection(nextIdx > currentIdx ? 1 : -1);
  setCurrentChapter(chapter);
};
```

---

## Step 5 — Writing/ink effect for text

Use the installed `SplitText` ReactBits component on all major text blocks in every spread.

### How to use it

```tsx
import SplitText from '@/components/ui/SplitText';

// Replace static headings like:
<h1 className="font-display text-6xl ...">Chapter III</h1>

// With:
<SplitText
  text="Chapter III"
  className="font-display text-6xl ..."
  delay={100}
  duration={0.4}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
  to={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
  threshold={0.1}
  rootMargin="-10px"
/>
```

### Apply SplitText to these elements in every spread:
- Chapter number (`Chapter I`, `Chapter II`, etc.)
- Chapter title heading (the large `h1` on each left page)
- The italic subtitle line

### Apply BlurText to these:
- First paragraph of body text on each spread
- The sticky note content

```tsx
import BlurText from '@/components/ui/BlurText';

<BlurText
  text="Your paragraph here..."
  className="font-serif text-lg ..."
  delay={30}
  animateBy="words"
  direction="top"
/>
```

---

## Step 6 — Hover effects on key words

In `AboutSpread.tsx` and other narrative spreads, wrap specific meaningful words/phrases in `motion.span` with hover animations.

### Helper component — add to `components/InkWord.tsx`:

```tsx
import React from 'react';
import { motion } from 'framer-motion';

interface InkWordProps {
  children: React.ReactNode;
  accent?: boolean;
}

const InkWord: React.FC<InkWordProps> = ({ children, accent = false }) => (
  <motion.span
    className={`relative inline-block cursor-default ${accent ? 'text-amber-400' : ''}`}
    whileHover={{ y: -2, transition: { duration: 0.15 } }}
    style={{ display: 'inline-block' }}
  >
    {children}
    {/* Ink underline that draws itself on hover */}
    <motion.span
      className="absolute bottom-0 left-0 h-[1px] bg-current opacity-50"
      initial={{ width: '0%' }}
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ display: 'block' }}
    />
  </motion.span>
);

export default InkWord;
```

### Apply `InkWord` in `AboutSpread.tsx` around these specific phrases:
- `"Smart Cane"` 
- `"Grievance AI"`
- `"embedded systems"`
- `"machine learning"`
- `"product design"`
- `"structural integrity"`
- `"CascadeX"`, `"Blood Report Analyzer"`, `"CodeAutopsy"` in the Currently Building block

---

## Step 7 — Idle ambient animations (nothing stays still)

### 7a. Sticky notes — gentle continuous sway

On every sticky note element in every spread, wrap with:

```tsx
<motion.div
  animate={{ rotate: [2, 3.5, 2, 0.5, 2] }}
  transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
>
  {/* sticky note content */}
</motion.div>
```

### 7b. Page corner curl — hover on the bottom-right corner of each right page

Add to every right-page spread div:

```tsx
{/* Corner curl — sits at bottom-right, appears on hover */}
<motion.div
  className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none"
  initial={{ opacity: 0 }}
  whileHover={{ opacity: 1 }}
  style={{
    background: 'linear-gradient(225deg, rgba(255,255,255,0.05) 45%, transparent 45%)',
    borderLeft: '1px solid rgba(255,255,255,0.05)',
    borderTop: '1px solid rgba(255,255,255,0.05)',
  }}
/>
```

### 7c. The BookScene tilt — already handled in Step 2 (subtle rotateX breathing).

### 7d. Navigation arrows — heartbeat pulse

Wherever the prev/next chapter arrow buttons are rendered:

```tsx
<motion.button
  animate={{ scale: [1, 1.04, 1] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  onClick={...}
>
```

### 7e. Bookmark ribbon flutter

On the `CH. III` bookmark ribbon (and any others), add:

```tsx
<motion.div
  animate={{ skewX: [0, 1, 0, -0.5, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
>
  {/* ribbon */}
</motion.div>
```

---

## Step 8 — Cursor: custom ink cursor (optional but recommended)

Add a custom cursor that looks like an ink drop trailing behind the pointer. 

Create `components/InkCursor.tsx`:

```tsx
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const InkCursor: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 18 });
  const springY = useSpring(y, { stiffness: 150, damping: 18 });

  useEffect(() => {
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [x, y]);

  return (
    <>
      {/* Fast precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-400/80 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ x, y }}
      />
      {/* Lagging ink blob */}
      <motion.div
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-amber-400/20 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ x: springX, y: springY }}
      />
    </>
  );
};

export default InkCursor;
```

In `App.tsx`, add `<InkCursor />` at the root, and add `cursor-none` to the `<body>` or root div.

**Only show the custom cursor on non-touch devices:**
```tsx
const [isTouch, setIsTouch] = useState(false);
useEffect(() => {
  setIsTouch(window.matchMedia('(pointer: coarse)').matches);
}, []);

// Render: {!isTouch && <InkCursor />}
```

---

## Constraints

- Do NOT change any Tailwind class names from Phase 1/2 (bg-paper-light, font-display, ink-reveal, etc.)
- Do NOT remove any existing layout structure — add wrappers around it, don't replace it
- All animations must respect `prefers-reduced-motion`:
  ```tsx
  import { useReducedMotion } from 'framer-motion';
  const shouldReduce = useReducedMotion();
  // Pass to animate props: if shouldReduce, skip or simplify
  ```
- The custom cursor must be hidden on mobile/touch (`pointer: coarse`)
- The opening sequence must only play once per session — use `sessionStorage` to skip it on refresh:
  ```tsx
  const hasOpened = sessionStorage.getItem('book-opened');
  const [bookOpened, setBookOpened] = useState(!!hasOpened);
  const handleOpen = () => { sessionStorage.setItem('book-opened', '1'); setBookOpened(true); };
  ```
- All new components must be exported as default React functional components typed with TypeScript
- Framer Motion `AnimatePresence` must always have a unique `key` prop on its direct child
