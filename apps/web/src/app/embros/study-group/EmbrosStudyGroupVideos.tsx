'use client';

import { motion } from 'motion/react';
import type { FC } from 'react';

import { HlsVideoPlayer } from '@/components/player/HlsVideoPlayer';
import { cn } from '@/components/utils';

import { embrosConfig } from './embros.config';

type BunnyVideo = {
  title: string;
  url: {
    m3u8: string;
    mp4: string;
  };
  date: string;
  poster: string;
  category: 'study' | 'rehearsal' | 'performance';
  preview: string;
};

const getStudyGroupBunnyVideos = (): BunnyVideo[] => {
  const bunnyBase = 'https://vz-a7c17ef9-09c.b-cdn.net';
  const videos = [
    {
      title: 'Embros study group - Cyrielle',
      date: '04/12/2024',
      category: 'study',
      videoId: 'b57e4eb9-9edf-4c37-91e6-80ccc13ce494',
    },
    {
      title: 'Embros study group - Chrisas',
      date: '04/12/2024',
      category: 'study',
      videoId: 'ccfb2d11-758c-4733-aaa6-038ab2f8bf24',
    },
    {
      title: 'Embros study group - Cyrielle',
      date: '26/11/2024',
      category: 'study',
      videoId: 'a7387a34-740c-4345-8962-85f28e59fe8d',
    },
    {
      title: 'Embros study group - Leo',
      date: '26/11/2024',
      category: 'study',
      videoId: '6072a517-a5c9-4fcc-b1c2-4e1eea835183',
    },
    {
      title: 'Rehearsal solo - Christos - Fragment 2',
      date: '09/12/2024',
      category: 'rehearsal',
      videoId: '830dc6f0-c152-40c4-9f4e-4f1de441796d',
    },
    {
      title: 'Rehearsal solo - Christos - Fragment 1',
      date: '09/12/2024',
      category: 'rehearsal',
      videoId: 'ead2e53a-5cc5-490e-9dcb-e6314580f4c5',
    },
    {
      title: 'Rehearsal solo - Christos - Fragment 0',
      date: '09/12/2024',
      category: 'rehearsal',
      videoId: '32e66901-04d6-4b03-a4fb-475865998191',
    },
  ] as const;

  const baseUrl = `https://${embrosConfig.bunnyPullZone}.b-cdn.net`;

  return videos.map((video) => {
    const { videoId, title, date, category } = video;
    return {
      title,
      date,
      category,
      preview: `${bunnyBase}/${videoId}/preview.webp`,
      poster: `${bunnyBase}/${videoId}/thumbnail.jpg`,
      // poster:
      // 'https://vz-c4fe36bb-faa.b-cdn.net/8fafe09c-5d96-42f7-b0b1-911499006be6/thumbnail_9006419f.jpg',
      url: {
        m3u8: `${bunnyBase}/${videoId}/playlist.m3u8`,
        mp4: `${baseUrl}/${videoId}/play_720p.mp4`,
      },
    };
  });
};

export const EmbrosStudyGroupVideos: FC = () => {
  const bunnyVideos = getStudyGroupBunnyVideos();
  const categories = Array.from(
    new Set(bunnyVideos.map((video) => video.category))
  );
  return (
    <>
      {categories.map((category) => {
        const videos = bunnyVideos.filter(
          (video) => video.category === category
        );
        return (
          <div key={category}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={'py-5 font-sans text-2xl'}
            >
              #{category}
            </motion.div>
            <div className={'grid grid-cols-1 gap-10 md:grid-cols-4'}>
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
                          'rounded-sm brightness-150 contrast-125 saturate-10',
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
          </div>
        );
      })}
    </>
  );
};
