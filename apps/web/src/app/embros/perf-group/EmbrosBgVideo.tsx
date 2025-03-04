import type { FC } from 'react';

import { cn } from '@/components/utils';
import { VideoBackground } from '@/components/video/VideoBackground';
import { bunnyStreamConfig } from '@/config/bunny.config';

export const EmbrosBgVideo: FC = () => {
  // https://{pull_zone_url}.b-cdn.net/{video_id}/play_720p.mp4
  const { baseUrl } = bunnyStreamConfig.embros;

  // const videoId = 'a7387a34-740c-4345-8962-85f28e59fe8d';
  // const videoId = '6072a517-a5c9-4fcc-b1c2-4e1eea835183';
  const videoId = 'dc123f1f-7df9-4de0-bb91-b8109ee48478';
  // const videoId = 'b57e4eb9-9edf-4c37-91e6-80ccc13ce494';
  // const videoId = 'a96fa827-2cf8-4306-9bdb-6906abf87e55';
  const background = {
    url: `${baseUrl}/${videoId}/play_720p.mp4#t=710,730`,
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
        'fixed h-full w-full object-cover brightness-[1.1] contrast-[0.4]',
        background.className
      )}
      playbackRate={1}
      loop={false}
      poster={'/images/textures/noise.png'}
      playbackStrategy={{
        type: 'autoplay',
        inViewport: false,
      }}
    />
  );
};
