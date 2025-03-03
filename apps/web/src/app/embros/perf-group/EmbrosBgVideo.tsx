import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';
import { bunnyStreamConfig } from '@/config/bunny.config';

export const EmbrosBgVideo: FC = () => {
  // https://{pull_zone_url}.b-cdn.net/{video_id}/play_720p.mp4
  const { baseUrl } = bunnyStreamConfig.embros;

  // const videoId = 'a7387a34-740c-4345-8962-85f28e59fe8d';
  // const videoId = '6072a517-a5c9-4fcc-b1c2-4e1eea835183';
  const videoId = '6935e7c7-1264-4685-9bc3-0c1ee82f7b60';
  // const videoId = 'b57e4eb9-9edf-4c37-91e6-80ccc13ce494';
  // const videoId = 'a96fa827-2cf8-4306-9bdb-6906abf87e55';
  const background = {
    url: `${baseUrl}/${videoId}/play_720p.mp4#t=6,11`,
    className: '',
    // className:
    //  'contrast-100 scale-110 brightness-150 grayscale translate-y-[-10px]',
  };
  return <div></div>;
  return (
    <VideoBackground
      src={background.url}
      className={cn(
        // 'fixed h-full w-full object-cover grayscale brightness-200 contrast-100',
        'fixed h-full w-full object-cover brightness-150 contrast-100',
        background.className
      )}
      playbackRate={0}
      loop={false}
      poster={'/images/textures/noise.png'}
      playbackStrategy={{
        type: 'autoplay',
        inViewport: false,
      }}
    />
  );
};
