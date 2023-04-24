import type { Experience } from '@/components/experience/experience-page';
import { siteConfig } from '@/config/site.config';

const mediaUrl = siteConfig.publicStorage.mediaBaseUrl;

const mrG29: Experience = {
  slug: 'explos-movement-research-g29',
  title: 'Explorations. Movement research@garage29',
  description: '',
  background: {
    type: 'video',
    loop: false,
    playbackRate: 0.6,
    // src: `${mediaUrl}/paola/soft-touch-to-death-1440p.mp4#t=179,184`,
    src: `${mediaUrl}/mr/garage29/garage29-1.mp4#t=8,10`,
  },

  sections: [
    {
      title: 'casual',
      description: `
      Relaxed and unconcerned. Happening or coming to pass without design.
    `,
      img: `${mediaUrl}/mr/garage29/garage29-jeanne.webp`,
    },
    {
      title: 'crisp',
      description: `
          Adjective. crisp (comparative crisper, superlative crispest) (of
          something seen or heard) Sharp, clearly defined. Brittle; friable; in a condition to break
          with a short, sharp fracture.
    `,
      img: `${mediaUrl}/mr/garage29/garage29-stephanie-love.webp`,
    },
    {
      title: 'happen',
      description: `
          I lost it because I tried to make it happen rather than let it happen
    `,
      img: `${mediaUrl}/mr/garage29/mr-garage29-secretary-notes-feb-2023-010.webp`,
    },
    {
      title: 'meaning',
      description: `
          You were meaning something when you left, when you stopped waiting.       
    `,
      img: `${mediaUrl}/mr/garage29/gage29-typhen_1.3.4.webp`,
    },
    {
      title: 'speaking',
      description: `
        Dancing & speaking. Moving while talking is very hard because of the language. Topos. Logos.      
    `,
      img: `${mediaUrl}/mr/garage29/garage29-noah_1.3.3.webp`,
    },
    {
      title: 'center',
      description: `
        Don't want radiality. Center outside.        
    `,
      img: `${mediaUrl}/mr/garage29/garage29-els_1.4.4.webp`,
    },
    {
      title: 'erratic',
      description: `
        It's a bit erratic. A bit lost. Create a lot of noise.        
    `,
      img: `${mediaUrl}/mr/garage29/mr-garage29-secretary-notes-feb-2023-003.webp`,
    },
    {
      title: 'constraints',
      description: `

    `,
      img: `${mediaUrl}/mr/garage29/mr-garage29-secretary-notes-feb-2023-004.webp`,
    },
    {
      title: 'impros',
      description: `
    `,
      video: {
        src: `${mediaUrl}/mr/garage29/garage29-1.mp4`,
      },
    },
    {
      title: 'secretary',
      description: `
      Between the ones who dance and the one who write. (all)
    `,
      img: `${mediaUrl}/mr/garage29/mr-garage29-secretary-notes-feb-2023-001.webp`,
    },
    {
      title: 'produce',
      description: `
          A lot of sadness can produce a lot of love. It's going from up to down, down to up 
          in a circular motion.
    `,
      img: `${mediaUrl}/mr/garage29/mr-garage29-secretary-notes-feb-2023-008.webp`,
    },
  ],
};

const softDeath: Experience = {
  slug: 'soft-touch-to-death',
  title: 'Soft touch to death - Paola Madrid / Johan Legraie',
  description: '',
  background: {
    type: 'video',
    loop: false,
    playbackRate: 0.5,
    // src: `${mediaUrl}/paola/soft-touch-to-death-1440p.mp4#t=179,184`,
    src: `${mediaUrl}/paola/soft-touch-to-death-1440p.mp4#t=86,88`,
  },
  sections: [
    {
      title: 'Soft touch to death',
      description: `
         Paola Madrid / Johan Legraie`,
      video: {
        src: `${mediaUrl}/paola/soft-touch-to-death-1440p.mp4`,
        // cover: `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.7.webp`,
      },
    },
    /*
    {
      title: 'Touch and heal',
      description: '',
      img: [
        // `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.2.webp`,
        // `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.3.webp`,
      ],
    }, */
  ],
};

const typhenInterstices: Experience = {
  slug: 'interstices-typhen-rocchia',
  title: 'Interstices - Typhen Rocchia',
  description: '',
  background: {
    type: 'video',
    loop: false,
    playbackRate: 0.4,
    poster: `${mediaUrl}/typhen/interstices/interstices-typhen_1.1.7.webp`,
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
      title: 'Danse',
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
      description: `D'une simension `,
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
    loop: true,
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
    [mrG29, softDeath, rozCanon, typhenInterstices].filter(
      (experience) => experience.slug === slug
    )?.[0] ?? null;
  if (!experience) {
    throw new Error(`Can't find experience '${slug}'`);
  }
  return experience;
};
