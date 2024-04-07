import { siteConfig } from '@/config/site.config';

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

const mediaUrl = siteConfig.publicStorage.mediaBaseUrl;
export const interactionsData: InteractionData[] = [
  {
    slug: 'interstices',
    type: 'short-movie',
    title: 'Interstices',
    category: ['movie'],
    authors: ['Typhen Rocchia'],
    link: '/d/interstices-typhen-rocchia',
    year: 2023,
    previewVideo: {
      start: 4,
      end: 7,
      src: 'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4',
      playbackRate: 0.4,
      className: '',
    },
  },
  {
    slug: 'soft-touch-to-death',
    title: 'Soft touch to death',
    type: 'short-movie',
    category: ['movie'],
    authors: ['Johan Legraie', 'Paola Madrid'],
    link: '/d/soft-touch-to-death',
    year: 2022,
    previewVideo: {
      start: 35,
      end: 39,
      src: 'https://media.reflective-resonance.be/paola/soft-touch-to-death-720p.mp4',
      playbackRate: 0.6,
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
  {
    slug: 'explos-movement-research-g29',
    type: 'training-material',
    title: 'Explorations',
    category: ['performance'],
    authors: ['Movement research'],
    shortText: ['Look for what you notice', 'but no one else see'],
    link: '/d/explos-movement-research-g29',
    previewVideo: {
      start: 8,
      end: 10,
      src: `${mediaUrl}/mr/garage29/garage29-1.mp4`,
      playbackRate: 0.6,
      className: '',
    },
  },
  {
    slug: 'alex-experiment-one',
    type: 'training-material',
    title: 'Explorations',
    category: ['performance'],
    authors: ['Alex'],
    shortText: ['Look for what you notice', 'but no one else see'],
    link: '/d/',
    previewVideo: {
      start: 8,
      end: 120,
      src: `${mediaUrl}/alex/alex-experiment-one.m4v`,
      playbackRate: 0.3,
      className: '',
    },
  },
  // https://media.failwell.be/alex/alex-experiment-one.m4v
];

type Filters = {
  slug?: string;
  slugs?: string[];
  excludedSlugs?: string[];
};
export const getInteractionData = (filters?: Filters) => {
  if (filters === undefined) {
    return interactionsData;
  }
  const included = interactionsData.filter((data) => {
    if (filters.slug !== undefined || filters.slugs !== undefined) {
      if (filters.slug && filters.slug === data.slug) {
        return true;
      }
      if (filters.slugs?.includes(data.slug)) {
        return true;
      }
      return false;
    }
    return true;
  });

  const { excludedSlugs } = filters;
  if (excludedSlugs === undefined) {
    return included;
  }
  return included.filter((data) => {
    if (excludedSlugs.includes(data.slug)) {
      return false;
    }
    return true;
  });
};
