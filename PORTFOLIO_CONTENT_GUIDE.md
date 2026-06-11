# Portfolio Content & Structural Guide
**Sreeansh Dash — Portfolio Rebuild Reference**

---

## STRUCTURAL CHANGES OVERVIEW

The portfolio currently has 4 spreads: Cover, About, Skills, Contact.

**New structure (6 spreads):**

| Spread | Component Name | Chapter Title |
|---|---|---|
| 1 | `CoverSpread` | The Cover |
| 2 | `IndexSpread` (NEW) | Table of Contents |
| 3 | `AboutSpread` | How I Think |
| 4 | `ProjectsSpread` (rewrite) | What I've Built |
| 5 | `ResumeSpread` (NEW) | The Paper Trail |
| 6 | `ContactSpread` (rewrite) | Let's Talk |

**Skills** — fold into `AboutSpread` as a compact skills block at the bottom, or as a sidebar panel. Don't give it a full spread.

**Projects sub-spreads** — each project gets its own "page turn" or the three projects live in one wide scrollable spread. Given you have 3 projects, recommend one spread with a vertical scroll or a 3-panel carousel.

**File changes needed:**
- `src/data/types.ts` — add `IndexSpread`, `ResumeSpread` to chapter types
- `src/data/constants.ts` — update chapter list, add all new copy
- `src/components/spreads/IndexSpread.tsx` — create new
- `src/components/spreads/ResumeSpread.tsx` — create new
- `src/components/spreads/AboutSpread.tsx` — significant rewrite
- `src/components/spreads/ProjectsSpread.tsx` — significant rewrite
- `src/components/spreads/ContactSpread.tsx` — fill in (was empty)
- `src/components/spreads/CoverSpread.tsx` — targeted updates

---

## SPREAD 1 — COVER (Hero Page)

### Purpose
First impression. Employer lands here. Must communicate: who you are, what you do, your level, and your openness to work — in under 5 seconds.

### Layout concept
Left half: editorial text block. Right half: your photo (portrait, cropped to roughly magazine-cover style). Sticky note pinned to the photo or overlapping both halves.

### Text content

**Name (Display headline):**
```
Sreeansh Dash
```

**Eyebrow label (small, above name):**
```
AI/ML · Full Stack · Product Design
```

**Tagline (one line, below name — pick one):**

Option A (recommended — confident, specific):
```
I build systems that think — and products people actually use.
```

Option B (role-forward):
```
AI engineer by training. Full-stack builder by instinct. Designer by choice.
```

Option C (punchy, for a bolder aesthetic):
```
From model weights to pixel grids — I work the whole stack.
```

**Academic line (small metadata, below tagline):**
```
B.Tech CSE (AI/ML) · VIT Chennai · 3rd Year · 9.62 CGPA
```

**Sticky note content:**
```
📌 Open to internships
Software Engineering & AI/ML
Summer 2027
```
*(Rotate the note ~-3deg for the handwritten feel)*

**CTA buttons (two):**
```
[↓ Download Resume]   [View My Work →]
```

**Social links (icon row, bottom of left panel):**
```
GitHub  ·  LinkedIn  ·  sreeansh786@gmail.com
```

**Scroll indicator (bottom center, subtle):**
```
Scroll to read  ↓
```
or just a small animated chevron.

### What else a professional hero page includes
These are standard elements you should add if not present:
- **Availability badge** — a small green dot + "Available for internships" sits near your name or sticky note. Green = open, gives recruiters instant signal.
- **Location** — "Chennai, India" in small text somewhere on the page.
- **Response time** — optional, can go in contact section instead.
- The **photo** should be a good headshot or editorial-style photo (not a passport photo). The book aesthetic calls for a slightly editorial crop — maybe shoulders up, slightly off-center.

---

## SPREAD 2 — INDEX (Table of Contents)

### Purpose
Lean into the book metaphor fully. This spread IS a table of contents. Makes the portfolio feel like a deliberate, authored piece — not just a scrolling webpage.

### Layout concept
Full spread, two columns: left column is chapter numbers + names, right column is one-line descriptions. Could also be a single centered column with generous vertical spacing — more editorial.

### Text content

**Page heading:**
```
Contents
```

**Chapter list:**

```
Chapter I    ·    The Cover
             Who is this person and why should you care.

Chapter II   ·    Table of Contents
             You are here.

Chapter III  ·    How I Think
             Philosophy, passions, and what I'm building right now.

Chapter IV   ·    What I've Built
             Three projects. Three different kinds of hard problems.

Chapter V    ·    The Paper Trail
             Credentials, certifications, and academic record.

Chapter VI   ·    Let's Talk
             Internships, collabs, or just a good conversation.
```

**Bottom footnote (small, in the book's editorial voice):**
```
"This portfolio is a work in progress — like everything worth building."
```

---

## SPREAD 3 — HOW I THINK (About/Philosophy)

### Purpose
Not just "about me." This is your worldview, your intellectual fingerprint. Employers want to know if you think well, not just code well.

### Layout concept
Two-column spread. Left: large photo (different from cover photo — more candid/working). Right: text content in editorial blocks. Sticky note pinned somewhere on the page. "Currently Building" section can be a sidebar or a bottom block.

### Text content

**Section eyebrow:**
```
Chapter III
```

**Heading:**
```
How I Think
```

**Philosophy paragraph (this is your intellectual positioning — keep it honest, not generic):**
```
I think in systems first, then in interfaces. Before writing a line of code, I ask: 
what's the smallest version of this that actually solves the real problem? That question 
has taken me from training ML models on medical data to soldering sensors onto circuit 
boards to designing flows in Figma — sometimes in the same week.

I'm drawn to problems where the stakes are real: healthcare, accessibility, 
infrastructure. Not because they're impressive to list, but because the feedback loop is 
honest — either it helps someone or it doesn't.

The tools I use are incidental. What I care about is whether the thing works for 
the person it's built for.
```

**Passion / what drives me (short, punchy lines):**
```
Things I think about more than is probably normal:
—  Why standard blood test reference ranges ignore individual metabolic variation
—  How much better assistive tech could be if hardware engineers and ML people talked more  
—  Whether the next wave of medical AI will actually reach primary care
—  How to make complex systems feel simple from the outside
```

**Sticky note (handwritten style, slightly rotated):**
```
Ship something that works.
Then make it beautiful.
Then ask if it was the
right thing to build at all.

  — note to self
```

**Skills block (compact, below philosophy):**

Use a clean tag/pill layout — no progress bars (they're meaningless and ubiquitous).

```
Code         Python  ·  JavaScript  ·  Java  ·  C/C++
AI/ML        Deep Learning  ·  NLP  ·  Computer Vision  ·  YOLOv8  ·  OpenCV
Build        React  ·  REST APIs  ·  Streamlit  ·  Git
Hardware     ESP32  ·  Arduino  ·  IMU  ·  Ultrasonic Sensors
Design       Figma  ·  UX Research  ·  Prototyping
```

**Currently Building section:**

```
Currently Building ↗

CascadeX
Medicine barcode scanner that flags dangerous drug combinations in real-time.
Neo4j · Groq API · React Native · Expo EAS
[In Progress]

Cluster-Adaptive Blood Report Analyzer
Personalized risk scoring that replaces one-size-fits-all lab reference ranges.
XGBoost · KMeans · Python · NidaanKosha Dataset
[Research Complete — Writeup Pending]

CodeAutopsy
Maps the architecture of any GitHub repo into a visual diagram using Groq.
Groq API · Python · Graph Visualization
[In Progress]
```

---

## SPREAD 4 — WHAT I'VE BUILT (Projects)

### Purpose
Show real work with real context. Not just "here's a project" — each card tells a story: the problem, the insight, the build, the result.

### Layout concept
Three project "cards" or "entries" in a scrollable spread. Each project has:
- Project number + name
- One-line tagline
- Short description (2-3 sentences, no fluff)
- Tech stack tags
- Status badge
- Photo(s) where applicable
- A link or CTA

For the two projects with photos (Blood Report Analyzer and CascadeX): display 2 photos each using a staggered/overlapping layout — not a plain side-by-side grid. Think one photo at ~60% width, the second at ~40% overlapping slightly at the corner, or a subtle "peeking" layout where the second photo is partially visible.

---

### PROJECT 1 — Smart Walking Stick

**Number tag:** `01`

**Name:**
```
Smart Terrain-Specific Ackermann Steering Walking Stick
```

**Tagline:**
```
Because independence shouldn't depend on good terrain.
```

**Description:**
```
A fully designed assistive device for visually impaired users that combines real-time 
obstacle detection with IMU-based fall detection. The mechanical frame applies 
Ackermann steering geometry — borrowed from automotive design — to improve directional 
stability across uneven surfaces. Fall detection triggers immediate SMS and buzzer alerts 
to caregivers, reducing emergency response time.

This is a patent-pending design. The device has been fully engineered and documented; 
physical fabrication is the next step.
```

**Tech tags:**
```
C++  ·  ESP32  ·  Arduino  ·  Ultrasonic Sensors  ·  IMU  ·  Embedded Systems  ·  Ackermann Geometry
```

**Status badge:**
```
🟡  Patent Design — Application Under Review
```

**Photos:** None (design diagrams/schematics if available, otherwise a well-styled placeholder or schematic illustration)

**CTA:**
```
[View Design Specs ↗]   (or just show "Patent Pending" as the CTA)
```

---

### PROJECT 2 — Cluster-Adaptive Blood Report Analyzer

**Number tag:** `02`

**Name:**
```
Cluster-Adaptive Blood Report Analyzer
with Personalized Risk Scoring
```

**Tagline:**
```
Your blood is not average. Your reference ranges shouldn't be either.
```

**Description:**
```
Standard blood test reports flag results as "abnormal" based on population-wide averages 
that ignore individual metabolic variation. This project challenges that assumption.

Trained on the NidaanKosha dataset (99,992 patients, 109 biomarkers), the system first 
clusters patients into 5 metabolic profiles using KMeans — then computes personalized 
5th/95th percentile thresholds for each cluster. The result: 70% of cluster-specific 
thresholds diverge more than 10% from standard global ranges, confirming that 
one-size-fits-all references misclassify a large portion of patients.

A multi-label XGBoost classifier then flags risk across 6 conditions — Anaemia, 
Diabetes Risk, Dyslipidemia, Kidney Risk, Liver Stress, and Thyroid Abnormality — 
with AUC-ROC scores up to 0.87 on the test set.
```

**Tech tags:**
```
Python  ·  XGBoost  ·  KMeans  ·  PCA  ·  Multi-label Classification  ·  Healthcare ML  ·  NidaanKosha
```

**Key stat callout (pull quote style):**
```
"70% of cluster-specific thresholds diverge >10% from standard global ranges."
```

**Status badge:**
```
🟢  Research Complete  ·  Writeup in Progress
```

**Photos:** 2 project screenshots/visualizations
- Suggested: `tsne_clusters.png` (the t-SNE cluster visualization) and `06_novelty_validation.png` (the divergence chart) — both already exist in your results/plots folder.

**CTA:**
```
[Read the Technical Write-up ↗]   (or GitHub repo link once public)
```

---

### PROJECT 3 — CascadeX

**Number tag:** `03`

**Name:**
```
CascadeX
```

**Tagline:**
```
Scan first. Take second.
```

**Description:**
```
Polypharmacy — taking multiple medications simultaneously — is one of the most 
under-addressed risks for elderly patients. CascadeX makes the hidden danger visible.

Scan any medicine's barcode, and the app instantly queries a Neo4j graph database 
mapping known drug-drug interactions. The Groq API handles natural language 
explanations, translating clinical interaction data into plain language any patient 
can understand. Built with Expo EAS for cross-platform mobile deployment.

Primary users: elderly patients managing multiple prescriptions. Actual users: anyone 
who's ever wondered "can I take these two together?"
```

**Tech tags:**
```
React Native  ·  Neo4j  ·  Groq API  ·  Expo EAS  ·  Graph Database  ·  Healthcare
```

**Status badge:**
```
🔵  In Progress
```

**Photos:** 2 app screenshots/mockups (add when ready; for now use a styled "coming soon" placeholder with the app icon/concept art)

**CTA:**
```
[Coming Soon — Follow Progress ↗]   (GitHub link or placeholder)
```

---

### Projects section bottom note (small, editorial voice):

```
More projects — including an NLP-based grievance redressal system and a 
real-time ANPR system — are documented on GitHub.

[View All on GitHub →]
```

---

## SPREAD 5 — THE PAPER TRAIL (Resume)

### Purpose
Quick credential check. Recruiters want to verify CGPA, institutions, certifications — fast.

### Layout concept
Two approaches:
- **Option A (recommended):** Styled inline resume — not a PDF embed. Recreate the resume as a designed component. Cleaner, faster to load, mobile-friendly. Put a "Download PDF" button at the top.
- **Option B:** PDF iframe embed + large download button. Simpler to build.

### Text content

**Section heading:**
```
The Paper Trail
```

**Subheading:**
```
Everything in one place.
```

**Download CTA:**
```
[↓ Download Full Resume — PDF]
```

**Key highlights (callout cards at the top, before the full resume):**

```
9.62 CGPA          Patent Pending         Google UX Certified
VIT Chennai        Smart Walking Stick    8-Course Series
B.Tech CSE AI/ML   Design Under Review    Figma · UX Research
```

**Resume sections to display inline:**

Education:
```
Vellore Institute of Technology (VIT), Chennai
B.Tech in Computer Science & Engineering (AI/ML)
2024 – 2028 (Expected)  ·  CGPA: 9.62 / 10.0

Delhi Public School, Bhilai
CBSE Class XII  ·  Graduated 2024  ·  93.4%
```

Experience & Leadership:
```
Operations Lead — KalingaJyoti, VIT Chennai     2024 – Present
Managed 20+ volunteers for large-scale college events. Logistics, scheduling, 
cross-functional coordination.

Open-Source Contributor — Y-SoC                2024 – Present
Code reviews, feature development, collaborative problem-solving on 
community-driven projects.
```

Certifications:
```
Google UX Design Professional Certificate      Google / Coursera
8-course series: user research, wireframing, low/high-fidelity prototyping, 
usability testing. Tool: Figma.

Getting Started with Cisco Packet Tracer       Cisco Networking Academy
Network simulation, device configuration, topology design.
```

---

## SPREAD 6 — LET'S TALK (Contact)

### Purpose
Convert interest into conversation. Make it feel like reaching out is easy and welcomed.

### Layout concept
Clean, minimal. Big headline. Email address prominently shown (don't hide it only in a form). Social icons. Optional: a simple form (Name + Email + Message). 

Sticky note here too — the last page of the book should have a handwritten feel.

### Text content

**Section heading:**
```
Let's Talk
```

**Subheading / pull:**
```
If you're building something interesting, I want to hear about it.
```

**Body copy:**
```
I'm currently looking for Software Engineering and AI/ML internships for Summer 2027, 
preferably in Bengaluru, Hyderabad, Mumbai, or Pune — though I'll always make 
exceptions for work that's genuinely exciting.

Not hiring? That's fine too. Reach out if you want to discuss a project, collaborate 
on something, or just talk about why standard blood test reference ranges are a 
systemic problem.
```

**Email CTA (prominent, clickable):**
```
sreeansh786@gmail.com
```

**Social links:**
```
GitHub — github.com/Sreeansh-Dash
LinkedIn — linkedin.com/in/sreeansh-dash
```

**Form fields (if using a contact form):**
```
Name  [_______________]
Email [_______________]
Message [_________________________]
        [_________________________]

[Send →]
```

**Sticky note (last page of the book — make it feel like a closing note):**
```
P.S. — I usually reply
within 24 hours.
(Unless I'm debugging
something cursed.)
```

**Bottom footer (book's closing line):**
```
Sreeansh Dash  ·  2025  ·  Built with React + Vite + Tailwind  ·  Hosted on Netlify
```

---

## PHOTO DISPLAY NOTES

**Blood Report Analyzer (2 photos):**
Use: `tsne_clusters.png` and `06_novelty_validation.png` (already generated in your project).
Layout: Staggered stack — primary image at full card width, second image overlapping at bottom-right corner at ~70% scale, with a slight shadow to create depth. On hover, second image slides into full view. This is more interesting than two flat side-by-side images.

**CascadeX (2 photos):**
When screenshots are ready: use a phone mockup frame (Expo/React Native app → phone frame looks natural). Two phone frames, one slightly behind and rotated ~5deg.
Until ready: a styled placeholder with `[ CascadeX — Screenshots Coming Soon ]` with the app logo.

**Smart Walking Stick:**
No build photos exist (only designed). Options:
1. A clean circuit/schematic diagram if you have one
2. A styled placeholder card with the patent-pending badge prominent
3. A CAD render if you made one during the design phase

---

## CONSTANTS.TS / DATA LAYER — WHAT TO UPDATE

```typescript
// New chapter list
export const CHAPTERS = [
  { id: 'cover',    title: 'The Cover',        number: 'I'   },
  { id: 'index',    title: 'Table of Contents', number: 'II'  },
  { id: 'about',    title: 'How I Think',       number: 'III' },
  { id: 'projects', title: "What I've Built",   number: 'IV'  },
  { id: 'resume',   title: 'The Paper Trail',   number: 'V'   },
  { id: 'contact',  title: "Let's Talk",        number: 'VI'  },
]

// Projects data
export const PROJECTS = [
  {
    id: 'walking-stick',
    number: '01',
    name: 'Smart Terrain-Specific Ackermann Steering Walking Stick',
    tagline: "Because independence shouldn't depend on good terrain.",
    status: 'patent-pending',
    statusLabel: 'Patent Design — Under Review',
    tags: ['C++', 'ESP32', 'Arduino', 'IMU', 'Ultrasonic', 'Embedded'],
    hasPhotos: false,
  },
  {
    id: 'blood-analyzer',
    number: '02',
    name: 'Cluster-Adaptive Blood Report Analyzer',
    tagline: "Your blood is not average. Your reference ranges shouldn't be either.",
    status: 'complete',
    statusLabel: 'Research Complete',
    tags: ['Python', 'XGBoost', 'KMeans', 'PCA', 'Healthcare ML'],
    hasPhotos: true,
    photos: ['tsne_clusters.png', '06_novelty_validation.png'],
    statCallout: '70% of cluster thresholds diverge >10% from global ranges',
  },
  {
    id: 'cascadex',
    number: '03',
    name: 'CascadeX',
    tagline: 'Scan first. Take second.',
    status: 'in-progress',
    statusLabel: 'In Progress',
    tags: ['React Native', 'Neo4j', 'Groq API', 'Expo EAS'],
    hasPhotos: false, // set to true when screenshots ready
  },
]
```

---

## TONE GUIDE

The portfolio has an editorial "book" aesthetic. The writing should match that.

**Do:**
- Write in first person, but with restraint. Short, declarative sentences.
- Let the work speak first; the copy supports, doesn't sell.
- Use dashes (—) not hyphens (-) for pauses. Matches the editorial register.
- The sticky notes should sound genuinely handwritten — imperfect, personal.
- Use "I" not "the developer" or "Sreeansh." It's your voice.

**Don't:**
- "Passionate about leveraging cutting-edge AI solutions to drive synergistic outcomes" — no.
- Superlatives without evidence: "exceptional," "expert," "world-class"
- Progress bars for skills (meaningless, ubiquitous, and slightly dishonest)
- Starting every bullet with the same verb ("Developed," "Implemented," "Built")

---

*End of content guide. Use this document alongside AGENT_PROMPT.md to coordinate code changes.*
