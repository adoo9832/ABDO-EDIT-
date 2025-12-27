
import { VideoProject, Service } from './types';

export const PROJECTS: VideoProject[] = [
  {
    id: '1',
    title: 'Neon Cyberpunk Montage',
    category: 'Short-form',
    thumbnail: 'https://picsum.photos/seed/vid1/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    retention: '85%',
    description: 'High-energy edit with custom transitions and sound design.'
  },
  {
    id: '2',
    title: 'The Modern Explorer',
    category: 'Long-form',
    thumbnail: 'https://picsum.photos/seed/vid2/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    retention: '72%',
    description: 'Cinematic travel vlog with color grading and narrative pacing.'
  },
  {
    id: '3',
    title: 'Product Launch 2024',
    category: 'Ad',
    thumbnail: 'https://picsum.photos/seed/vid3/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    retention: '94%',
    description: 'Clean, professional advertisement for a tech startup.'
  },
  {
    id: '4',
    title: 'Street Style Reel',
    category: 'Short-form',
    thumbnail: 'https://picsum.photos/seed/vid4/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    retention: '89%',
    description: 'TikTok/Reels style fast-paced fashion showcase.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Short-form Optimization',
    description: 'Viral-ready Reels, TikToks, and Shorts with high retention captions.',
    icon: 'fa-bolt'
  },
  {
    id: 's2',
    title: 'Full Production Editing',
    description: 'End-to-end long-form editing for YouTube, documentaries, and courses.',
    icon: 'fa-clapperboard'
  },
  {
    id: 's3',
    title: 'Cinematic Color Grading',
    description: 'Professional color correction and grading to give your footage a filmic look.',
    icon: 'fa-palette'
  },
  {
    id: 's4',
    title: 'Sound Design & Mixing',
    description: 'Layered sound effects and crisp audio leveling for an immersive experience.',
    icon: 'fa-volume-high'
  }
];
