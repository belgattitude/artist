// https://codesandbox.io/s/camera-scroll-tu24h?file=/src/App.js:623-670

import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { ExperiencePage } from '@/components/experience/experience-page';
import { fetchExperience } from '@/data/experiences';

const slug = 'research-alex-one';

export const generateMetadata = async (params: {
  slug: string;
}): Promise<Metadata> => {
  const experience = await fetchExperience(slug);
  return {
    title: experience.title,
    description: experience.description,
  };
};

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

const Letter: FC<PropsWithChildren> = ({ children }) => (
  <span
    className={
      'mx-3 rounded border border-white p-2 text-5xl text-white opacity-100'
    }
  >
    {children}
  </span>
);

const Txt: FC<PropsWithChildren> = ({ children }) => (
  <span className={'text-2xl text-white opacity-50'}>{children}</span>
);

const Intro: FC<{ className?: string }> = (props) => {
  const { className = '' } = props;
  return (
    <div className={twMerge('p-5 text-2xl', className)}>
      <Letter>I did not want </Letter>
      <Txt>to get out</Txt>
      <Letter>Until I learned</Letter>
      <Txt>that I did not fall</Txt>
      <Letter>at all.</Letter>
      <Txt>But was pushed</Txt>
      <Letter>And I fell</Letter>
      <Txt>into a strange</Txt>
      <Letter>loop.</Letter>
    </div>
  );
};

export default async function ResearchAlexPage() {
  const experience = await fetchExperience(slug);
  return (
    <>
      <div className={'flex flex-col'}>
        <Intro className={'m-5 p-5'} />
        <ExperiencePage experience={experience} />
      </div>
    </>
  );
}
