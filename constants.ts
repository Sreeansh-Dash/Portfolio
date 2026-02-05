import { Chapter, NavItem, Project } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: Chapter.COVER,
    label: 'Beginnings',
    roman: 'I',
    pageNumber: '1-2',
    subLabel: 'Introduction'
  },
  {
    id: Chapter.ABOUT,
    label: 'About Me',
    roman: 'II',
    pageNumber: '5-6',
    subLabel: 'How I think'
  },
  {
    id: Chapter.PROJECTS,
    label: 'Projects',
    roman: 'III',
    pageNumber: '14-15',
    subLabel: 'Selected Works'
  },
  {
    id: Chapter.DEEP_DIVE_1,
    label: 'Deep Dive 1',
    roman: 'IV',
    pageNumber: '20-21',
    subLabel: 'Case Study'
  },
  {
    id: Chapter.DEEP_DIVE_2,
    label: 'Deep Dive 2',
    roman: 'V',
    pageNumber: '33-34',
    subLabel: 'Analysis'
  },
  {
    id: Chapter.TOOLKIT,
    label: 'Technical Toolkit',
    roman: 'VI',
    pageNumber: '45-46',
    subLabel: 'Skills & Tools'
  },
  {
    id: Chapter.RESUME,
    label: 'Resume',
    roman: 'VII',
    pageNumber: '58-59',
    subLabel: 'Professional History'
  },
  {
    id: Chapter.CLOSING,
    label: 'Closing Notes',
    roman: 'VIII',
    pageNumber: '68-69',
    subLabel: 'Contact'
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Smart Cane",
    qualifier: "Embedded Assistive System",
    category: "Embedded Systems",
    techStack: "Ackermann Steering • Ultrasonic Sensors • Terrain Feedback",
    description: "An intelligent mobility aid integrating Ackermann steering geometry, embedded sensing, and terrain-aware feedback for visually impaired navigation.",
    image: "https://images.unsplash.com/photo-1555664424-778a69fdb6b8?auto=format&fit=crop&w=500&q=60",
    rotation: "rotate-0",
    ctaText: "View Case Study",
    link: Chapter.DEEP_DIVE_1
  },
  {
    title: "Grievance System",
    qualifier: "Applied AI System",
    category: "Machine Learning Systems",
    techStack: "NLP Models • Decision Workflows • Automated Resolution",
    description: "An end-to-end AI system for automated grievance classification, prioritization, and resolution using NLP and decision workflows.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c61df?auto=format&fit=crop&w=500&q=60",
    rotation: "rotate-0",
    ctaText: "Explore Architecture",
    link: Chapter.DEEP_DIVE_2
  },
  {
    title: "Portfolio Site",
    qualifier: "Interaction & System Design",
    category: "Interaction Design",
    techStack: "React • System Thinking • Interactive Narrative",
    description: "A technically structured portfolio designed as an interactive book, emphasizing clarity, hierarchy, and system thinking in presentation.",
    image: "https://images.unsplash.com/photo-1507842217121-ad95743ea018?auto=format&fit=crop&w=500&q=60",
    rotation: "rotate-0",
    ctaText: "View System Design",
  }
];