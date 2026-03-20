import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';

import { evyConfig } from './evy.config';

export const EvyBgVideo: FC = () => {
  const baseUrl = `https://${evyConfig.bunnyPullZone}.b-cdn.net`;
  const videoId = 'd5aa7c3c-b7be-4b9e-b989-759518fc9020';
  const background = {
    url: `${baseUrl}/${videoId}/play_720p.mp4#t=125,135`,
    // className: '',
    className: 'contrast-110 brightness-110 ',
  };
  return (
    <VideoBackground
      src={background.url}
      className={cn(
        'fixed h-full w-full object-cover brightness-100 contrast-100',
        background.className
      )}
      playbackRate={0.5}
      loop={true}
      poster={'/images/textures/noise.png'}
      playbackStrategy={{
        type: 'autoplay',
        inViewport: false,
      }}
    />
  );
};
