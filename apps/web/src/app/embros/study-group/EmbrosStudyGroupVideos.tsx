'use client';

import { motion } from 'motion/react';
import type { FC } from 'react';

import { HlsVideoPlayer } from '@/components/player/HlsVideoPlayer';
import { cn } from '@/components/utils';

type BunnyVideo = {
  title: string;
  url: string;
  date: string;
  poster: string;
  preview: string;
};

const getAlexBunnyVideos = (): BunnyVideo[] => {
  const bunnyBase = 'https://vz-a7c17ef9-09c.b-cdn.net';
  return [
    {
      title: 'Embros study group - Cyrielle',
      date: '26/11/2024',
      videoId: 'a7387a34-740c-4345-8962-85f28e59fe8d',
    },
  ].map((video) => {
    const { videoId, title, date } = video;
    return {
      title,
      date,
      preview: `${bunnyBase}/${videoId}/preview.webp`,
      poster: `${bunnyBase}/${videoId}/thumbnail.jpg`,
      // poster:
      // 'https://vz-c4fe36bb-faa.b-cdn.net/8fafe09c-5d96-42f7-b0b1-911499006be6/thumbnail_9006419f.jpg',
      url: `${bunnyBase}/${videoId}/playlist.m3u8`,
    };
  });
};

export const EmbrosStudyGroupVideos: FC = () => {
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
            <div key={video.url} className={'flex flex-col gap-2'}>
              <div>{video.title}</div>
              <div
                key={video.url}
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
                  src={video.url}
                  poster={video.poster}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
