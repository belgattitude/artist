'use client';

import type { FC } from 'react';

import { HlsVideoPlayer } from '@/components/player/HlsVideoPlayer';
import { cn } from '@/components/utils';
import type { BunnyStreamVideo } from '@/lib/bunny/bunny-api-videos';

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
              <div>{video.title}</div>
              <div
                key={video.url.m3u8}
                className={
                  'flex aspect-16/9 bg-black shadow-2xl drop-shadow-2xl'
                }
              >
                <HlsVideoPlayer
                  className={cn(
                    'rounded brightness-150 contrast-125 saturate-[10%]',
                    'hover:saturate-100 hover:contrast-100 hover:brightness-100'
                  )}
                  preload={'none'}
                  src={video.url.m3u8}
                  poster={video.poster}
                />
              </div>
              <a
                href={video.url.mp4}
                // target={'_blank'}
                download
              >
                Download
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};
