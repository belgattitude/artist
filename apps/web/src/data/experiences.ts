import type { Experience } from '@/components/experience/experience-page';
import { siteConfig } from '@/config/site.config';

const mediaUrl = siteConfig.publicStorage.mediaBaseUrl;

const typhenInterstices: Experience = {
  slug: 'interstices-typhen-rocchia',
  title: 'Interstices - Typhen Rocchia',
  description: '',
  background: {
    type: 'video',
    loop: false,
    playbackRate: 0.4,
    poster: `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.1.webp`,
    src: `${mediaUrl}/typhen/INTERSTICES_typhen-light.mp4#t=94,98`,
  },
  sections: [
    {
      title: 'Interstices',
      description: `
         Entre mondes racontés .`,
      video: {
        src: 'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4',
        cover: `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.7.webp`,
      },
    },
    {
      title: 'Féminisme',
      description:
        '"La danse est un acte de résistance. Le corps féminin, souvent sexualisé et objectivé, peut être réapproprié et célébré à travers la danse. En combinant cela avec une conscience écologique, nous pouvons créer un mouvement qui honore la Terre et tous ses habitants, y compris les femmes." - Angela Davis',
      img: [
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.2.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.3.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.4.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.5.webp`,
      ],
    },
    {
      title: 'Ecologie',
      description: 'Se relier à la nature au corps',
      img: [
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.6.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.7.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.8.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.9.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.10.webp`,
        `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.11.webp`,
      ],
    },
  ],
};

const rozCanon: Experience = {
  slug: 'canon-revisited-roz-wythes',
  title: 'Canon revisited - Roz Wythes',
  description: '',
  background: {
    type: 'video',
    loop: false,
    playbackRate: 0.4,
    poster: `${mediaUrl}/roz/roz-blob-video-bg.jpg`,
    src: `${mediaUrl}/roz/Roz2.mp4`,
  },
  sections: [
    {
      title: 'I did not fall',
      description: `
         I did not want to get out. 
         Until I learned that I did not fall at all. 
         But was pushed. And I fell into a strange loop. (Alice Fitzgerald)`,
      video: {
        src: `${mediaUrl}/roz/roz-rolling-end.m4v`,
      },
    },
    {
      title: 'trio',
      description: `
      Relaxed and unconcerned. Happening or coming to pass without design.
    `,
      video: {
        src: `${mediaUrl}/roz/roz-markten-trio.m4v`,
        cover: `${mediaUrl}/roz/roz-blob-video-bg.jpg`,
      },
    },
    {
      title: 'double tap',
      description: 'cool',
    },
    {
      title: 'Stand',
      description: 'Standing - Awake',
      img: [
        `${mediaUrl}/roz/exports/P1006590.jpg`,
        `${mediaUrl}/roz/exports/P1006627.jpg`,
      ],
    },
    {
      title: 'Photos',
      description: 'Photos from the performance in de Markten.',
      img: [
        `${mediaUrl}/roz/exports/P1006696.jpg`,
        `${mediaUrl}/roz/exports/P1006722.jpg`,
      ],
    },
  ],
};

export const fetchExperience = async (slug: string): Promise<Experience> => {
  const experience =
    [rozCanon, typhenInterstices].filter(
      (experience) => experience.slug === slug
    )?.[0] ?? null;
  if (!experience) {
    throw new Error(`Can't find experience '${slug}'`);
  }
  return experience;
};
