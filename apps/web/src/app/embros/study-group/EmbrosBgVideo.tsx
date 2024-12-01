import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';

import { embrosConfig } from './embros.config';

export const EmbrosBgVideo: FC = () => {
  // https://{pull_zone_url}.b-cdn.net/{video_id}/play_720p.mp4
  const baseUrl = `https://${embrosConfig.bunnyPullZone}.b-cdn.net`;
  const videoId = 'a7387a34-740c-4345-8962-85f28e59fe8d';
  const background = {
    url: `${baseUrl}/${videoId}/play_720p.mp4#t=20,40`,
    className: '',
    // className:
    //  'contrast-100 scale-110 brightness-150 grayscale translate-y-[-10px]',
  };
  return (
    <div
      className={
        'absolute left-0 top-0 -z-10 block size-full overflow-hidden border bg-black object-cover'
      }
    >
      <VideoBackground
        src={background.url}
        className={cn(
          'fixed h-full w-full object-cover grayscale brightness-200 contrast-100 -translate-x-[200px] scale-50',
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
    </div>
  );
};
