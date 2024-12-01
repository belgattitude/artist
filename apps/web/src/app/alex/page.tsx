import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';

import { AlexVideos } from './AlexVideos';

const BgVideo: FC = () => {
  const background = {
    url: 'https://media.reflective-resonance.be/alex/alex-utopia-lab-web-rf25.mp4#t=86,93.5',
    // className: 'contrast-100 brightness-150 hue-rotate-180',
    className: 'scale-110 translate-y-[-10px]',
    // 'contrast-100 scale-110 brightness-150 grayscale translate-y-[-10px]',
  };
  return (
    <VideoBackground
      src={background.url}
      className={cn(
        'fixed h-full w-full object-cover saturate-0 brightness-150',
        'translate-y-[-10px]',
        background.className
      )}
      playbackRate={0.4}
      loop={true}
      poster={'/images/textures/noise.png'}
      playbackStrategy={{
        type: 'autoplay',
        inViewport: false,
      }}
    />
  );
};

export default function AlexPage() {
  return (
    <div className={'w-full'}>
      <div
        className={
          // 'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
          cn(
            'w-full',
            'p-5 text-2xl opacity-90 font-family-elika-gorika',
            'alex-noisy-bg'
          )
        }
      >
        @Alex
      </div>
      <BgVideo />
      <div className={'flex flex-col'}>
        <div className={'flex items-center justify-center gap-5'}>
          <div
            className={
              'mt-[100px] font-family-elika-gorika text-3xl font-extralight text-gray-300 lg:text-9xl'
            }
          >
            ..//
          </div>
        </div>
        <AlexVideos />
      </div>
    </div>
  );
}
