import type { Metadata } from 'next';
import type { FC } from 'react';

import { Interactions } from '@/components/sections/Interactions';
import { DynamicIntroAnimatedText } from '@/components/sections/IntroAnimatedText';
import { getInteractionData } from '@/data/interactions';

export const metadata: Metadata = {};

const HomePage: FC = () => {
  const firstPageVideos = ['soft-touch-to-death', 'interstices'];
  return (
    <div className={'mx-auto mt-5 flex flex-col gap-5'}>
      <div className={``}>
        <Interactions
          title={'Interactions'}
          items={getInteractionData({
            slugs: firstPageVideos,
          })}
        />
      </div>
      <div className={'p-5 font-text-primary'}>
        <h1 className={'mb-5 font-family-elika-gorika text-3xl tracking-wider'}>
          Sébastien Vanvelthem
        </h1>
        <div className={'tracking-wide'}>
          <p>Dance | Instant composition | Improvisation</p>
          <p>New website coming soon</p>
        </div>
      </div>
      <DynamicIntroAnimatedText
        title1={'Beauty remains'}
        title2={'Stubborn'}
        long={`
              Standing in the center of a circle. Long waves hearing a sound
              that breathe across the space. Now lying outside far against the
              walls. Hands handing hopes Wishing musical scores By swiftly
              crossing lines of thoughts. Cause at the very present instant has
              gone distant memories. They've let space to the extinction of
              will.

      `}
      />
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
