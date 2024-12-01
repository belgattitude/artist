'use client';

import { motion } from 'motion/react';
import type { FC } from 'react';

import { HlsVideoPlayer } from '@/components/player/HlsVideoPlayer';
import { cn } from '@/components/utils';

type BunnyVideo = {
  title: string;
  url: string;
  poster: string;
  preview: string;
};

const getAlexBunnyVideos = (): BunnyVideo[] => {
  const bunnyBase = 'https://vz-c4fe36bb-faa.b-cdn.net';
  return [
    {
      title: 'Alex Athens - Utopia lab - Training',
      videoId: '7e1601bf-55a3-4f7b-9f23-77282555edd1',
    },
    {
      title: 'Love is Louder - Bozaar',
      videoId: 'c5012175-52d3-42f2-85a6-05fcee6384a8',
    },

    {
      title: 'Alex Athens Museum - Take 1',
      videoId: 'd45cc24d-e26e-4cfe-a05a-0e54c3573b16',
    },
    {
      title: 'Alex Athens Museum - Take 2',
      videoId: '47dbb738-f83f-4b2c-b0f5-0b474429b639',
    },
    {
      title: 'Alex Training - La Hulpe',
      videoId: 'a7e2dd38-dc1a-49e2-9e44-59ae613c1863',
    },

    {
      title: 'Alex Solo Normandie',
      videoId: '71fb077c-921a-4eca-8faa-019db69b2ddd',
    },
    {
      title: 'Alex Anomalies',
      videoId: '1b9a0f13-7e16-450e-875a-93871f6272d0',
    },
  ].map((video) => {
    const { videoId, title } = video;
    return {
      title,
      preview: `${bunnyBase}/${videoId}/preview.webp`,
      poster: `${bunnyBase}/${videoId}/thumbnail.jpg`,
      // poster:
      // 'https://vz-c4fe36bb-faa.b-cdn.net/8fafe09c-5d96-42f7-b0b1-911499006be6/thumbnail_9006419f.jpg',
      url: `${bunnyBase}/${videoId}/playlist.m3u8`,
    };
  });
};

export const AlexVideos: FC = () => {
  const bunnyVideos = getAlexBunnyVideos();
  return (
    <div
      className={
        // 'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
        cn('mt-[30vh] w-full rounded-t-xl', 'p-5', 'alex-noisy-bg')
      }
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={'p-5 font-sans text-2xl'}
      >
        #Videos
      </motion.div>
      <div className={'grid grid-cols-1 gap-10 md:grid-cols-4'}>
        {bunnyVideos.map((video) => {
          return (
            <div
              key={video.url}
              className={'flex aspect-16/9 bg-black shadow-2xl drop-shadow-2xl'}
            >
              <HlsVideoPlayer
                className={cn(
                  'rounded brightness-150 contrast-125 saturate-[10%]',
                  'hover:saturate-100 hover:contrast-100 hover:brightness-100'
                )}
                preload={'none'}
                src={video.url}
                poster={video.poster}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
