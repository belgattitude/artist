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
      <DynamicIntroAnimatedText
        className={'mt-[150px] font-family-elika-gorika text-fuchsia-500'}
        title1={'Beauty remains'}
        title2={'Stubborn'}
        long={`
              Standing in the center of a circle. Long waves hearing a sound
              that breathe across the space. Now lying outside far against the
              walls. Hands handing hopes Wishing musical scores By swiftly
              crossing lines of thoughts. Cause at the very present instant has
              gone distant memories. 
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
