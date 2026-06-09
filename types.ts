export enum Chapter {
  COVER = 'COVER',
  ABOUT = 'ABOUT',
  PROJECTS = 'PROJECTS',
  DEEP_DIVE_1 = 'DEEP_DIVE_1',
  DEEP_DIVE_2 = 'DEEP_DIVE_2',
  TOOLKIT = 'TOOLKIT',
  RESUME = 'RESUME',
  CLOSING = 'CLOSING'
}

export interface NavItem {
  id: Chapter;
  label: string;
  roman: string;
  pageNumber: string;
  subLabel?: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  rotation: string;
  qualifier?: string;
  techStack?: string;
  ctaText?: string;
  link?: Chapter;
  comingSoon?: boolean;
}