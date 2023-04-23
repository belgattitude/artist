import type { Experience } from '@/components/experience/experience-overlay';

const typhenInterstices: ExperienceData = {
  title: '',
  description: '',
  videoBg:
    'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4#t=94,95',
  sections: [
    {
      title: 'Interstices',
      description: `
         Interstices est un projet de court métrage crée par Typhen entre 2022 et 2023.`,
      video:
        'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4',
    },
    {
      title: 'Stand',
      description: 'Standing - Awake',
      img: [
        'https://media.failwell.be/roz/exports/P1006590.jpg',
        'https://media.failwell.be/roz/exports/P1006627.jpg',
      ],
    },
  ],
};

const rozCanon = [
  {
    title: 'I did not fall',
    description: `
         I did not want to get out. 
         Until I learned that I did not fall at all. 
         But was pushed. And I fell into a strange loop. (Alice Fitzgerald)`,
    video: 'https://media.reflective-resonance.be/roz/roz-rolling-end.m4v',
  },
  {
    title: 'trio',
    description: `
      Relaxed and unconcerned. Happening or coming to pass without design.
    `,
    video: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
  },
  {
    title: 'double tap',
    description: 'cool',
  },
  {
    title: 'Stand',
    description: 'Standing - Awake',
    img: [
      'https://media.failwell.be/roz/exports/P1006590.jpg',
      'https://media.failwell.be/roz/exports/P1006627.jpg',
    ],
  },
  {
    title: 'Photos',
    description: 'Photos from the performance in de Markten.',
    img: [
      'https://media.failwell.be/roz/exports/P1006696.jpg',
      'https://media.failwell.be/roz/exports/P1006722.jpg',
    ],
  },
];

type ExperienceData = {
  title: string;
  description: string;
  videoBg: string;
  sections: Experience[];
};

export const fetchExperience = async (
  slug: string
): Promise<ExperienceData> => {
  return typhenInterstices;
};
