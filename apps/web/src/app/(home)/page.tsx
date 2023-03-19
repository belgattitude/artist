import type { Metadata } from 'next';
import type { FC } from 'react';
import React from 'react';
import { VideoBackground } from '@/components/video/VideoBackground';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage: FC = () => {
  const videoUrl = 'https://media.failwell.be/dark.mp4';
  return (
    <div className={'border-1 container mx-auto flex flex-col gap-5 p-5'}>
      <div className={'dot1 mt-5 text-white'}>
        <h1>Sébastien Vanvelthem</h1>
        <p>Dance | Instant composition | Improvisation</p>
        <p>New website coming soon</p>
      </div>
      <div className={'grow-1 aspect-[2/1] w-full bg-black'}>
        <VideoBackground
          sources={[
            {
              type: 'video/mp4',
              url: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
              // url: videoUrl,
            },
          ]}
          playbackRate={0.3}
          autoPlay={true}
        />
      </div>
    </div>
  );
};

export default HomePage;
