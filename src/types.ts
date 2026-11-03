export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'mobile' | 'fullstack' | 'iot' | 'web';
  githubUrl?: string;
  liveUrl?: string;
  visualTag: string;
  accentColors: {
    from: string;
    to: string;
    border: string;
  };
  highlights: string[];
}

export interface Credential {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  description: string;
  skills: string[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  handle: string;
  url: string;
  icon: string;
}

export type ViewMode = 'portfolio' | 'video-backdrop' | 'pure-video' | 'split-view';
