import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';

import { AlexVideos } from './AlexVideos';

const BgVideo: FC = () => {
  const background = {
    url: 'https://media.reflective-resonance.be/alex/alex-utopia-lab-web-rf25.mp4#t=92,102.5',
    // className: 'contrast-100 brightness-150 hue-rotate-180',
    className:
      'contrast-100 scale-110 brightness-150 grayscale translate-y-[-10px]',
  };
  return (
    <VideoBackground
      src={background.url}
      className={cn('fixed h-full w-full object-cover', background.className)}
      playbackRate={0.3}
      loop={true}
      // poster={background.poster}
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
      <BgVideo />
      <div className={'flex flex-col'}>
        <div className={'flex items-center justify-center gap-5'}>
          <div
            className={
              'mt-[300px] font-family-elika-gorika text-3xl font-extralight text-gray-300 lg:text-9xl'
            }
          >
            Alexandra M.
          </div>
        </div>
        <AlexVideos />
      </div>
    </div>
  );
}
