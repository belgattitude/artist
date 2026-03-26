'use client';

import { motion } from 'motion/react';
import type { FC } from 'react';

import { HlsVideoPlayer } from '@/components/player/HlsVideoPlayer';
import { cn } from '@/components/utils';

import { evyConfig } from './evy.config';

type BunnyVideo = {
  title: string;
  url: {
    m3u8: string;
    mp4: string;
  };
  poster: string;
  preview: string;
  directLink: string;
};

const getEvyBunnyVideos = (): BunnyVideo[] => {
  const bunnyBase = `https://${evyConfig.bunnyPullZone}.b-cdn.net`;
  return [
    {
      title: 'Practice 1 - Ananda studio - part 5',
      videoId: 'd5aa7c3c-b7be-4b9e-b989-759518fc9020',
      filmedBy: 'Sébastien Vanvelthem',
      period: 'March 2026',
      location: 'Ananda studio - Petralona',
    },
    {
      title: 'Practice 1 - Ananda studio  - part 2',
      videoId: '6319e312-cf7e-4af5-a621-5ae6c4abc09d',
      filmedBy: 'Kat',
      period: 'March 2026',
      location: 'Ananda studio - Petralona',
    },
  ].map((video) => {
    const { videoId, title } = video;
    // const bunnyBase = 'https://vz-c4fe36bb-faa.b-cdn.net';
    return {
      title,
      preview: `${bunnyBase}/${videoId}/preview.webp`,
      poster: `${bunnyBase}/${videoId}/thumbnail.jpg`,
      // poster:
      // 'https://vz-c4fe36bb-faa.b-cdn.net/8fafe09c-5d96-42f7-b0b1-911499006be6/thumbnail_9006419f.jpg',
      url: {
        m3u8: `${bunnyBase}/${videoId}/playlist.m3u8`,
        mp4: `${bunnyBase}/${videoId}/play_720p.mp4`,
      },
      directLink: `https://iframe.mediadelivery.net/play/621227/${videoId}`,
    };
  });
};

export const EvyVideos: FC = () => {
  const bunnyVideos = getEvyBunnyVideos();
  return (
    <div
      className={
        // 'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
        cn('mt-[10vh] lg:mt-[30vh] w-full rounded-t-xl', 'p-5', 'alex-noisy-bg')
      }
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={'py-5 font-sans text-2xl'}
      >
        #Videos
      </motion.div>
      <div className={'grid grid-cols-1 gap-10 md:grid-cols-3'}>
        {bunnyVideos.map((video) => {
          return (
            <div key={video.url.m3u8} className={'flex flex-col gap-2'}>
              <div>{video.title}</div>
              <div
                className={
                  'flex aspect-16/9 max-h-[350px] justify-center bg-black shadow-2xl drop-shadow-2xl'
                }
              >
                <HlsVideoPlayer
                  /*
                  className={cn(
                    'rounded-sm brightness-150 contrast-125 saturate-10',
                    'hover:saturate-100 hover:contrast-100 hover:brightness-100'
                  )}
                  */
                  key={video.url.m3u8}
                  preload={'none'}
                  src={video.url.m3u8}
                  poster={video.poster}
                />
              </div>
              <div className={'flex flex-row gap-5'}>
                <div>
                  <a
                    href={video.url.mp4}
                    target={'_blank'}
                    className={'p-1 text-white hover:bg-white hover:text-black'}
                    rel="noreferrer"
                  >
                    Direct link
                  </a>
                </div>
                <div>
                  <a href={video.directLink} target={'_blank'} rel="noreferrer">
                    Iframe
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
