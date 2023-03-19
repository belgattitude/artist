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
    <div className={'container mx-auto flex flex-col gap-5 bg-white p-5'}>
      <div className={'mt-5 p-5 text-black'}>
        <h1 className={'text-3xl'}>Sébastien Vanvelthem</h1>
        <p>Dance | Instant composition | Improvisation</p>
        <p>New website coming soon</p>
      </div>
      <div className={'mb-[50px] flex flex-col gap-5 lg:flex-row'}>
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
        <VideoBackground
          sources={[
            {
              type: 'video/mp4',
              // url: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
              // url: 'https://media.failwell.be/roz/Roz2.mp4',
              url: 'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4',
              // url: 'https://media.failwell.be/mr/garage29/garage29-background.mp4',
            },
          ]}
          playbackRate={1.0}
          autoPlay={true}
        />
        {/*
        <VideoBackground
          sources={[
            {
              type: 'video/mp4',
              // url: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
              url: 'https://media.failwell.be/citla/citlali-full-graded.mp4',
            },
          ]}
          playbackRate={0.7}
          autoPlay={true}
        />
        */}
      </div>
    </div>
  );
};

export default HomePage;
