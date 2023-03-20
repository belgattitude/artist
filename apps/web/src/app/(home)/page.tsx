import type { Metadata } from 'next';
import type { FC } from 'react';
import React from 'react';
import { VideoBackground } from '@/components/video/VideoBackground';

export const metadata: Metadata = {
  title: 'Reflective Resonance',
};

const HomePage: FC = () => {
  const videoUrl = 'https://media.failwell.be/dark.mp4';
  return (
    <div
      className={
        'container mx-auto flex flex-col gap-5 bg-white p-5 text-[#a0a0a0]'
      }
    >
      <div className={'font-text-primary mt-5 text-black'}>
        <h1
          className={
            'font-family-monoton text-3xl font-extralight tracking-wide text-neutral-600'
          }
        >
          Sébastien Vanvelthem
        </h1>
        <div className={'tracking-wide'}>
          <p>Dance | Instant composition | Improvisation</p>
          <p>New website coming soon</p>
        </div>
      </div>
      <div className={'mb-[50px] flex flex-col gap-5 lg:flex-row'}>
        <VideoBackground
          sources={[
            {
              type: 'video/mp4',
              url: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=20,29.1',
              // url: 'https://media.failwell.be/roz/Roz2.mp4#t=20,22',
              // url: videoUrl,
            },
          ]}
          playbackRate={0.2}
          autoPlay={true}
        />
        <VideoBackground
          sources={[
            {
              type: 'video/mp4',
              // url: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
              // url: 'https://media.failwell.be/roz/Roz2.mp4',
              url: 'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4#t=11,15',
              // url: 'https://media.failwell.be/mr/garage29/garage29-background.mp4',
            },
          ]}
          playbackRate={0.4}
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
