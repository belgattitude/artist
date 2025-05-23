'use client';

import { motion } from 'motion/react';
import type { FC } from 'react';

import { HlsVideoPlayer } from '@/components/player/HlsVideoPlayer';
import { cn } from '@/components/utils';

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

const getAlexBunnyVideos = (): BunnyVideo[] => {
  const bunnyBase = 'https://vz-c4fe36bb-faa.b-cdn.net';
  return [
    {
      title: 'Amorgos - From sea to earth - Soft edit',
      videoId: '04bd39d0-13da-4f47-b47b-8191b88d68ab',
    },
    {
      title: 'Athens - Utopia lab - Training',
      videoId: '7e1601bf-55a3-4f7b-9f23-77282555edd1',
    },
    {
      title: 'Solo Normandie 3rd part (reframed)',
      videoId: '30d4cda9-219d-47d8-9221-d75e2413ee26',
    },
    {
      title: 'Solo Normandie 3rd part',
      videoId: 'd03ff76a-1c8f-4caf-ac0f-f0fcfbe58a77',
    },
    {
      title: 'Joji - Impro - Wim Mertens',
      videoId: 'ac478d99-8b26-44fd-bdd1-b05914a40eb7',
    },
    {
      title: 'Athens Museum - Take 1',
      videoId: 'd45cc24d-e26e-4cfe-a05a-0e54c3573b16',
    },
    {
      title: 'Athens Museum - Take 2',
      videoId: '47dbb738-f83f-4b2c-b0f5-0b474429b639',
    },
    {
      title: 'Athens Olympic stadium',
      videoId: '0d1b066d-f7d1-4fdc-ae33-1e652f817a54',
    },
    {
      title: 'Rolling Grass - La Hulpe',
      videoId: 'a7e2dd38-dc1a-49e2-9e44-59ae613c1863',
    },
    {
      title: 'Love is Louder - Bozaar',
      videoId: 'c5012175-52d3-42f2-85a6-05fcee6384a8',
    },
    {
      title: 'Solo Normandie',
      videoId: '71fb077c-921a-4eca-8faa-019db69b2ddd',
    },
    {
      title: 'Anomalies',
      videoId: '1b9a0f13-7e16-450e-875a-93871f6272d0',
    },
    {
      title: 'Joji - Alex James Seb - Take 1',
      videoId: 'e1c4043d-1613-4e6d-a3fa-7820f627c52f',
    },
    {
      title: 'Joji - Alex James Seb - Take 2',
      videoId: '3235e167-8a29-4009-8e65-459a3fce24ff',
    },
    {
      title: 'Joji - Alex James Seb - Take 3',
      videoId: '5572c6a7-94bf-40a3-a6ab-d825c17495c6',
    },
    {
      title: 'Joji - Alex James Seb - Take 4',
      videoId: '8a8c8d41-1751-4ae3-9714-a9d733b02bda',
    },
    {
      title: 'Joji - Alex James Seb - Take 5',
      videoId: '54fcebf2-5ea8-4f06-99e1-d68908c6e611',
    },
    {
      title: 'Joji - Alex James Seb Take  6',
      videoId: 'fa151ef2-9b65-4376-8681-012d6adca2c6',
    },
    {
      title: 'Joji - Alex Seb - Take 1',
      videoId: 'a6c709ea-316b-450c-9ee5-ca538743d382',
    },
    {
      title: 'Athens - Impro - Olympics stadium',
      videoId: '9776a5b4-af9c-4d23-a6f5-a167a0579854',
    },
    {
      title: 'Tic-Tac solo with Lucas Condro',
      videoId: '2b7c089e-7bca-441c-8f9f-bbb74a28aaea',
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
      directLink: `https://iframe.mediadelivery.net/play/344861/${videoId}`,
    };
  });
};

export const AlexVideos: FC = () => {
  const bunnyVideos = getAlexBunnyVideos();
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
                key={video.url.m3u8}
                className={
                  'flex aspect-16/9 max-h-[350px] justify-center bg-black shadow-2xl drop-shadow-2xl'
                }
              >
                <HlsVideoPlayer
                  /*
                  className={cn(
                    'rounded brightness-150 contrast-125 saturate-[10%]',
                    'hover:saturate-100 hover:contrast-100 hover:brightness-100'
                  )}
                  */
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
                  >
                    Direct link
                  </a>
                </div>
                <div>
                  <a href={video.directLink} target={'_blank'}>
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
