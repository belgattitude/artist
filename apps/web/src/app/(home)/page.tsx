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
    <div className={'mx-auto mt-5 flex flex-col gap-5 text-[#a0a0a0]'}>
      <div className={'font-text-primary p-[30px]'}>
        <h1
          className={
            'font-family-monoton mb-5 text-3xl font-extralight tracking-wide'
          }
        >
          Sébastien Vanvelthem
        </h1>
        <div className={'tracking-wide'}>
          <p>Dance | Instant composition | Improvisation</p>
          <p>New website coming soon</p>
        </div>
      </div>
      <div className={'mb-[50px] flex flex-col gap-5 bg-black/70 lg:flex-row'}>
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
        {
          <VideoBackground
            sources={[
              {
                type: 'video/mp4',
                // url: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
                url: 'https://media.failwell.be/sudakas/sudakas-training-entry.mp4#t=8,30',
              },
            ]}
            playbackRate={0.7}
            autoPlay={true}
          />
        }
      </div>
    </div>
  );
};

export default HomePage;
