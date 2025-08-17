'use client';

import type { FC } from 'react';

import { HlsVideoPlayer } from '@/components/player/HlsVideoPlayer';
import { cn } from '@/components/utils';
import type { BunnyStreamVideo } from '@/lib/bunny/bunny-api-videos';

const timeToSeconds = (seconds: number): string => {
  return new Date(1000 * seconds).toISOString().slice(11, 19);
};

export const PerfGroupVideoList: FC<{ videos: BunnyStreamVideo[] }> = (
  props
) => {
  const { videos } = props;
  return (
    <>
      <div className={'grid grid-cols-1 gap-10 md:grid-cols-3'}>
        {videos.map((video) => {
          return (
            <div key={video.url.m3u8} className={'flex flex-col gap-2'}>
              <div>
                {video.title} - {timeToSeconds(video.duration)}
              </div>
              <div
                key={video.url.m3u8}
                className={'flex bg-black shadow-2xl drop-shadow-2xl'}
              >
                <HlsVideoPlayer
                  key={video.url.m3u8}
                  className={cn(
                    'rounded-sm',
                    // brightness-150 contrast-125 saturate-10'
                    // 'hover:saturate-100 hover:contrast-100 hover:brightness-100'
                    'aspect-16/9'
                  )}
                  preload={'none'}
                  src={video.url.m3u8}
                  poster={video.poster}
                />
              </div>
              <div className={'flex flex-row gap-5'}>
                <div>
                  <a
                    href={video.url.mp4}
                    // target={'_blank'}
                    download
                  >
                    Download
                  </a>
                </div>
                <div>
                  <a href={video.url.direct} target={'_blank'}>
                    Direct link
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
