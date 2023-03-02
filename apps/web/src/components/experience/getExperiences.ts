import type { Experience } from '@/components/experience/experience-overlay';

export const getExperiences = async (): Promise<Experience[]> => {
  return [
    {
      title: 'casual',
      description: `
      Relaxed and unconcerned. Happening or coming to pass without design.
    `,
      img: 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg',
    },
    {
      title: 'crisp',
      description: `
          Adjective. crisp (comparative crisper, superlative crispest) (of
          something seen or heard) Sharp, clearly defined. Brittle; friable; in a condition to break
          with a short, sharp fracture.
    `,
      img: 'https://media.failwell.be/mr/garage29/garage29-stephanie-love.webp',
    },
    {
      title: 'happen',
      description: `
          I lost it because I tried to make it happen rather than let it happen
    `,
      img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-010.jpg',
    },
    {
      title: 'meaning',
      description: `
          You were meaning something when you left, when you stopped waiting.       
    `,
      img: 'https://media.failwell.be/mr/garage29/gage29-typhen_1.3.4.webp',
    },
    {
      title: 'speaking',
      description: `
        Dancing & speaking. Moving while talking is very hard because of the language. Topos. Logos.      
    `,
      img: 'https://media.failwell.be/mr/garage29/garage29-noah_1.3.3.webp',
    },
    {
      title: 'center',
      description: `
        Don't want radiality. Center outside.        
    `,
      img: 'https://media.failwell.be/mr/garage29/garage29-els_1.4.4.webp',
    },
    {
      title: 'erratic',
      description: `
        It's a bit erratic. A bit lost. Create a lot of noise.        
    `,
      img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-003.jpg',
    },
    {
      title: 'constraints',
      description: `

    `,
      img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-004.jpg',
    },
    {
      title: 'impros',
      description: `

    `,
      video: 'https://media.failwell.be/mr/garage29/garage29-1.mp4',
    },
    {
      title: 'fish and chips',
      description: `
      DNAnimality 
    `,
      img: 'https://media.failwell.be/mr/garage29/from-parc_1.5.1.webp',
    },
    {
      title: 'secretary',
      description: `
      Between the ones who dance and the one who write. (all)
    `,
      img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-001.jpg',
    },
    {
      title: 'produce',
      description: `
          A lot of sadness can produce a lot of love. It's going from up to down, down to up 
          in a circular motion.
    `,
      img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-008.jpg',
    },
  ];
};
