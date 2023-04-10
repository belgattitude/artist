export type InteractionData = {
  slug: string;
  title: string;
  type:
    | 'short-movie'
    | 'performance'
    | 'event'
    | 'creation'
    | 'training-material';
  category: ('movie' | 'performance' | 'exhibition')[];
  link?: string;
  authors: string[];
  shortText?: string | string[];
  year?: number;
  previewVideo: {
    start: number;
    end?: number;
    src: string;
    playbackRate?: number;
    className?: string;
  };
};
export const interactionsData: InteractionData[] = [
  {
    slug: 'interstices',
    type: 'short-movie',
    title: 'Interstices',
    category: ['movie'],
    authors: ['Typhen Rocchia'],
    year: 2023,
    previewVideo: {
      start: 2,
      end: 5,
      src: 'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4',
      playbackRate: 0.2,
      className: '',
    },
  },
  {
    slug: 'soft-touch-to-death',
    title: 'Soft touch to death',
    type: 'short-movie',
    category: ['movie'],
    authors: ['Johan Legraie', 'Paola Madrid'],
    year: 2022,
    previewVideo: {
      start: 35,
      end: 42,
      src: 'https://media.reflective-resonance.be/paola/soft-touch-to-death-720p.mp4',
      playbackRate: 0.8,
      className: 'brightness-[1.1]',
    },
  },
  {
    slug: 'canon-revisited',
    type: 'creation',
    title: 'Canon Revisited',
    category: ['performance'],
    link: '/d/roz-wythes',
    authors: ['Roz Wythes'],
    year: 2023,
    shortText: ['Look for what you notice', 'but no one else see'],
    previewVideo: {
      start: 24,
      end: 29.1,
      src: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
      playbackRate: 0.3,
      className: '',
    },
  },
  {
    slug: 'bubble-dance',
    type: 'event',
    title: 'Bubble dance',
    category: ['performance'],
    authors: ['public'],
    shortText: ['Creating new fictions'],
    previewVideo: {
      start: 11,
      end: 14.3,
      src: 'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4',
      playbackRate: 0.4,
      className: '',
    },
  },
  {
    slug: 'sudakas-training',
    type: 'creation',
    title: 'Training',
    category: ['performance'],
    authors: ['Les sudakas'],
    shortText: ['Look for what you notice', 'but no one else see'],
    previewVideo: {
      start: 24,
      end: 31.1,
      src: 'https://media.failwell.be/sudakas/sudakas-training-entry.mp4',
      playbackRate: 0.7,
      className: '',
    },
  },
];

export const getInteractionData = () => {
  return interactionsData;
};
