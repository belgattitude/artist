import type { Metadata } from 'next';
import type { FC } from 'react';
import React from 'react';
import { Interactions } from '@/components/sections/Interactions';
import { IntroAnimatedText } from '@/components/sections/IntroAnimatedText';
import { getInteractionData } from '@/data/interactions';

export const metadata: Metadata = {};

const HomePage: FC = () => {
  const firstPageVideos = ['soft-touch-to-death', 'interstices'];
  return (
    <div className={'mx-auto mt-5 flex flex-col gap-5'}>
      <div className={'p-5 font-text-primary'}>
        <h1 className={'mb-5 font-family-elika-gorika text-3xl tracking-wider'}>
          Sébastien Vanvelthem
        </h1>
        <div className={'tracking-wide'}>
          <p>Dance | Instant composition | Improvisation</p>
          <p>New website coming soon</p>
        </div>
      </div>

      <div className={``}>
        <Interactions
          title={'Interactions'}
          items={getInteractionData({
            slugs: firstPageVideos,
          })}
        />
      </div>

      <IntroAnimatedText />
      <div className={``}>
        <Interactions
          title={'Interactions'}
          items={getInteractionData({
            excludedSlugs: firstPageVideos,
          })}
        />
      </div>
    </div>
  );
};

export default HomePage;
