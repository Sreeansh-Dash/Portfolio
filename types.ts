export enum Chapter {
  COVER = 'COVER',
  INDEX = 'INDEX',
  ABOUT = 'ABOUT',
  WALKING_STICK = 'WALKING_STICK',
  BLOOD_ANALYZER = 'BLOOD_ANALYZER',
  CASCADEX = 'CASCADEX',
  RESUME = 'RESUME',
  CONTACT = 'CONTACT'
}

export interface NavItem {
  id: Chapter;
  label: string;
  roman: string;
  pageNumber: string;
  subLabel?: string;
}

export interface Project {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  status: string;
  statusLabel: string;
  tags: string[];
  hasPhotos: boolean;
  photos?: string[];
  statCallout?: string;
  ctaText?: string;
  link?: string;
  comingSoon?: boolean;
}