import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';

import { alexConfig } from './alex.config';

export const AlexBgVideo: FC = () => {
  // https://{pull_zone_url}.b-cdn.net/{video_id}/play_720p.mp4
  const baseUrl = `https://${alexConfig.bunnyPullZone}.b-cdn.net`;
  // const videoId = '47dbb738-f83f-4b2c-b0f5-0b474429b639';
  const videoId = '7e1601bf-55a3-4f7b-9f23-77282555edd1';
  const background = {
    url: `${baseUrl}/${videoId}/play_720p.mp4#t=50,101.2`,
    className: '',
    // className:
    //  'contrast-100 scale-110 brightness-150 grayscale translate-y-[-10px]',
  };
  return (
    <VideoBackground
      src={background.url}
      className={cn(
        'fixed h-full w-full object-cover brightness-150 contrast-150 grayscale',
        background.className
      )}
      playbackRate={1}
      loop={true}
      poster={'/images/textures/noise.png'}
      playbackStrategy={{
        type: 'autoplay',
        inViewport: false,
      }}
    />
  );
};
