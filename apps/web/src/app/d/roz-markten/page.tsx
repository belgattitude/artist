// https://codesandbox.io/s/camera-scroll-tu24h?file=/src/App.js:623-670

import type { Metadata } from 'next';
import React from 'react';
import type { Experience } from '@/components/experience/experience-overlay';
import { ExperiencePage } from '@/components/experience/experience-page';

export const metadata: Metadata = {
  title: 'Roz Whytes - Research - DeMarkten - feb 2023',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

// const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
const img = 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg';
// const videoUrl = 'https://media.failwell.be/dark.mp4';
const videoUrl = 'https://media.failwell.be/roz/Roz2.mp4';

const Poem = () => {
  return (
    <div className={'w-[500px] text-2xl font-extralight text-[#a0a0a0]'}>
      <p>
        (Par seulement une aide précipitée, elle lave l'assombrissement flêtri
        d'un souvenir ancien.)
      </p>

      <p className={'mt-5'}>
        C'est là, à cet endroit précis, suspendu entre deux cîmes d'arbres que
        la couleur prends forme conique, sphérique, scénique.
      </p>

      <p className={'mt-5'}>
        Puis un autre jour, différenciation par le sourire d'un soleil levant.
      </p>

      <p className={'mt-5'}>
        Il y a un souffle divin caché entre les lignes du destin en courbe et
        prolongations, le décor enseveli, redécoré en quadrillages symétriques
        semble se courber afin de former un lit de rivière
      </p>

      <p className={'mt-5'}>
        Elle emprunte, l'eau, les dessins fermentés d'un angle contrarié.
      </p>

      <p>Au sommet d'un souterrain.</p>

      <p>
        Transfiguration déraisonnée de sagesse aux accents de tendresse
        délibérée.
      </p>

      <p>Dé-libérée, aimante, amante.</p>

      <p>Profondeur de cette nuit</p>

      <p>Ici et maintenant,</p>

      <p>Un réveil</p>
    </div>
  );
};

export const getExperiences = async (): Promise<Experience[]> => {
  return [
    {
      title: 'trio',
      description: `
      Relaxed and unconcerned. Happening or coming to pass without design.
    `,
      video: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
    },
    {
      title: 'double tap',
      description: <Poem />,
      // img: 'https://media.failwell.be/mr/garage29/garage29-stephanie-love.webp',
    },
  ];
};

export default async function DiaryGarage29Page() {
  const experiences = await getExperiences();
  return (
    <>
      <ExperiencePage
        experiences={experiences}
        bgFallbackImg={img}
        bgVideoUrl={videoUrl}
      />
    </>
  );
}
