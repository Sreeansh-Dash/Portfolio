import { Chapter, NavItem, Project } from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: Chapter.COVER,
    label: 'The Cover',
    roman: 'I',
    pageNumber: '1-2',
    subLabel: 'Preface'
  },
  {
    id: Chapter.INDEX,
    label: 'Table of Contents',
    roman: 'II',
    pageNumber: '3-4',
    subLabel: 'Contents'
  },
  {
    id: Chapter.ABOUT,
    label: 'How I Think',
    roman: 'III',
    pageNumber: '5-6',
    subLabel: 'Philosophy & Way of Thinking'
  },
  {
    id: Chapter.WALKING_STICK,
    label: 'Smart Walking Stick',
    roman: 'IV',
    pageNumber: '7-8',
    subLabel: 'Project 01'
  },
  {
    id: Chapter.BLOOD_ANALYZER,
    label: 'Blood Report Analyzer',
    roman: 'V',
    pageNumber: '9-10',
    subLabel: 'Project 02'
  },
  {
    id: Chapter.CASCADEX,
    label: 'CascadeX Scanner',
    roman: 'VI',
    pageNumber: '11-12',
    subLabel: 'Project 03'
  },
  {
    id: Chapter.RESUME,
    label: 'The Paper Trail',
    roman: 'VII',
    pageNumber: '13-14',
    subLabel: 'Resume & History'
  },
  {
    id: Chapter.CONTACT,
    label: "Let's Talk",
    roman: 'VIII',
    pageNumber: '15-16',
    subLabel: 'Get in Touch'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'walking-stick',
    number: '01',
    name: 'Smart Terrain-Specific Ackermann Steering Walking Stick',
    tagline: "Because independence shouldn't depend on good terrain.",
    status: 'patent-pending',
    statusLabel: 'Patent Design — Under Review',
    tags: ['C++', 'ESP32', 'Arduino', 'IMU', 'Ultrasonic', 'Embedded'],
    hasPhotos: false,
    description: 'A fully designed assistive device for visually impaired users that combines real-time obstacle detection with IMU-based fall detection. The mechanical frame applies Ackermann steering geometry — borrowed from automotive design — to improve directional stability across uneven surfaces. Fall detection triggers immediate SMS and buzzer alerts to caregivers, reducing emergency response time. This is a patent-pending design. The device has been fully engineered and documented; physical fabrication is the next step.',
    ctaText: 'Patent Pending'
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
    description: "Standard blood test reports flag results as 'abnormal' based on population-wide averages that ignore individual metabolic variation. This project challenges that assumption. Trained on the NidaanKosha dataset (99,992 patients, 109 biomarkers), the system first clusters patients into 5 metabolic profiles using KMeans — then computes personalized 5th/95th percentile thresholds for each cluster. The result: 70% of cluster-specific thresholds diverge more than 10% from standard global ranges, confirming that one-size-fits-all references misclassify a large portion of patients. A multi-label XGBoost classifier then flags risk across 6 conditions — Anaemia, Diabetes Risk, Dyslipidemia, Kidney Risk, Liver Stress, and Thyroid Abnormality — with AUC-ROC scores up to 0.87 on the test set.",
    ctaText: 'Research Complete'
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
    description: "Polypharmacy — taking multiple medications simultaneously — is one of the most under-addressed risks for elderly patients. CascadeX makes the hidden danger visible. Scan any medicine's barcode, and the app instantly queries a Neo4j graph database mapping known drug-drug interactions. The Groq API handles natural language explanations, translating clinical interaction data into plain language any patient can understand. Built with Expo EAS for cross-platform mobile deployment. Primary users: elderly patients managing multiple prescriptions. Actual users: anyone who's ever wondered 'can I take these two together?'",
    ctaText: 'In Progress'
  }
];