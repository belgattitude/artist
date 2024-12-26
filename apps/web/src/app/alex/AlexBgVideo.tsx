import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';

import { alexConfig } from './alex.config';

export const AlexBgVideo: FC = () => {
  // https://{pull_zone_url}.b-cdn.net/{video_id}/play_720p.mp4
  const baseUrl = `https://${alexConfig.bunnyPullZone}.b-cdn.net`;
  // const videoId = '47dbb738-f83f-4b2c-b0f5-0b474429b639';
  // const videoId = '7e1601bf-55a3-4f7b-9f23-77282555edd1';
  // const videoId = 'ac478d99-8b26-44fd-bdd1-b05914a40eb7';
  const videoId = '04bd39d0-13da-4f47-b47b-8191b88d68ab';
  const background = {
    // url: `${baseUrl}/${videoId}/play_720p.mp4#t=50,101.2`,
    url: `${baseUrl}/${videoId}/play_720p.mp4#t=0,30`,
    className: '',
    // className:
    //  'contrast-100 scale-110 brightness-150 grayscale translate-y-[-10px]',
  };
  return (
    <VideoBackground
      src={background.url}
      className={cn(
        'fixed h-full w-full object-cover brightness-100 contrast-100',
        background.className
      )}
      playbackRate={0.6}
      loop={true}
      poster={'/images/textures/noise.png'}
      playbackStrategy={{
        type: 'autoplay',
        inViewport: false,
      }}
    />
  );
};
