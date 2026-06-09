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
    pageNumber: '3-4',
    subLabel: 'How I think'
  },
  {
    id: Chapter.PROJECTS,
    label: 'Projects',
    roman: 'III',
    pageNumber: '5-6',
    subLabel: 'Selected Works'
  },
  {
    id: Chapter.DEEP_DIVE_1,
    label: 'Deep Dive 1',
    roman: 'IV',
    pageNumber: '7-8',
    subLabel: 'Case Study'
  },
  {
    id: Chapter.DEEP_DIVE_2,
    label: 'Deep Dive 2',
    roman: 'V',
    pageNumber: '9-10',
    subLabel: 'Analysis'
  },
  {
    id: Chapter.TOOLKIT,
    label: 'Technical Toolkit',
    roman: 'VI',
    pageNumber: '11-12',
    subLabel: 'Skills & Tools'
  },
  {
    id: Chapter.RESUME,
    label: 'Resume',
    roman: 'VII',
    pageNumber: '13-14',
    subLabel: 'Professional History'
  },
  {
    id: Chapter.CLOSING,
    label: 'Contact',
    roman: 'VIII',
    pageNumber: '15-16',
    subLabel: 'Get in Touch'
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'Smart Cane',
    qualifier: 'Embedded Assistive System',
    category: 'Embedded Systems',
    techStack: 'Ackermann Steering · Ultrasonic Sensors · Terrain Feedback',
    description: 'An intelligent mobility aid integrating Ackermann steering geometry, embedded sensing, and terrain-aware haptic feedback for visually impaired navigation.',
    image: '/accessible.png',
    rotation: 'rotate-0',
    ctaText: 'View Case Study',
    link: Chapter.DEEP_DIVE_1,
  },
  {
    title: 'Grievance AI',
    qualifier: 'Applied NLP System',
    category: 'Machine Learning',
    techStack: 'NLP Classification · Decision Workflows · Automated Resolution',
    description: 'An end-to-end AI pipeline for automated grievance classification, priority scoring, and resolution routing — built around NLP models and structured decision logic.',
    image: '/rocket.png',
    rotation: 'rotate-0',
    ctaText: 'Explore Architecture',
    link: Chapter.DEEP_DIVE_2,
  },
  {
    title: 'CascadeX',
    qualifier: 'Healthcare AI · In Development',
    category: 'AI / Healthcare',
    techStack: 'Computer Vision · Barcode Scanning · Drug Interaction Models',
    description: 'Scans medicine barcodes and flags dangerous drug interactions before they happen — real-time adverse pairing detection at the point of use.',
    image: '/accessible.png',
    rotation: 'rotate-0',
    ctaText: 'Coming Soon',
    comingSoon: true,
  },
  {
    title: 'Blood Report Analyzer',
    qualifier: 'ML Diagnostic Tool · In Development',
    category: 'Machine Learning',
    techStack: 'Clustering Algorithms · Unsupervised ML · Medical Data Analysis',
    description: 'A cluster-adaptive system that reads blood reports, identifies patient groupings through unsupervised learning, and surfaces diagnostic patterns without predefined labels.',
    image: '/rocket.png',
    rotation: 'rotate-0',
    ctaText: 'Coming Soon',
    comingSoon: true,
  },
  {
    title: 'CodeAutopsy',
    qualifier: 'Developer Tool · In Development',
    category: 'Software Engineering',
    techStack: 'Groq API · Static Analysis · GitHub Integration',
    description: 'Takes any GitHub repository URL and maps the structural relationships between files — an architectural X-ray for codebases, powered by Groq.',
    image: '/book_ribbon.png',
    rotation: 'rotate-0',
    ctaText: 'Coming Soon',
    comingSoon: true,
  },
];