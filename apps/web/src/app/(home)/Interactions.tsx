'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import React from 'react';
import { VideoCard } from '@/components/video/VideoCard';

export const Interactions: FC = () => {
  const { push } = useRouter();
  return (
    <div className={`p-5`}>
      <h1
        className={`font-family-monoton mb-5 py-5 text-2xl font-thin text-white md:text-3xl`}
      >
        Interactions
      </h1>
      <div className={'mx-auto flex flex-col flex-wrap gap-5 lg:flex-row'}>
        <VideoCard
          handleClick={() => {
            push('/d/roz-wythes');
          }}
          className={'md:min-w-[660px]'}
          title="Roz Wythes"
          text={
            <>
              <p className={'rotate-90'}>Look for what you notice</p>
              <p>but no one else see</p>
            </>
          }
          video={{
            src: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=24,29.1',
            playbackRate: 0.4,
            loop: true,
          }}
        />
        <VideoCard
          title={'Bubble Dance'}
          className={'md:min-w-[660px]'}
          text={
            <div className={'absolute top-0 rotate-90 border-2 text-3xl'}>
              <p className={'text-3xl'}>The object is not to make art</p>
              <div className={'align-bottom text-3xl font-extrabold'}>
                It's to be in that wonderful state
              </div>
              <p>Which makes art inevitable</p>
            </div>
          }
          video={{
            src: 'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4#t=11,14.3',
            playbackRate: 0.4,
            loop: true,
          }}
        />
        <VideoCard
          title={'Les sudakas'}
          className={'min-w-[600px]'}
          text={
            <>
              <p>Look for what you notice</p>
              <p>but no one else see</p>
            </>
          }
          video={{
            src: 'https://media.failwell.be/sudakas/sudakas-training-entry.mp4#t=67,74',
            playbackRate: 0.7,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};
