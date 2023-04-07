'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { VideoCard } from '@/components/video/VideoCard';

export type InteractionsProps = {
  className?: string;
};

export const Interactions: FC<InteractionsProps> = (props) => {
  const { className = '' } = props;
  const { push } = useRouter();
  // bg-[#ffe900]

  const commonVideoCls = 'min-h-[300px]';

  return (
    <div className={`p-5 font-family-elika-gorika`}>
      <h1
        className={twMerge(
          'mb-5 py-5 text-2xl font-thin md:text-3xl',
          className
        )}
      >
        Interactions
      </h1>
      <div className={'mx-auto flex flex-col flex-wrap gap-5 lg:flex-row'}>
        <VideoCard
          // handleClick={() => {
          // >  push('/d/roz-wythes');
          // >}}
          className={commonVideoCls}
          title="Interstices"
          text={
            <>
              <p>Typhen Rocchia Ⓒ 2023</p>
            </>
          }
          video={{
            // src: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=24,29.1',
            // src: 'https://media.failwell.be/roz/Roz2.mp4',
            src: 'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4#t=2,6',
            playbackRate: 0.2,
            playbackStrategy: {
              type: 'autoplay',
              inViewport: true,
            },
            loop: true,
            className:
              // 'transition duration-1000 grayscale-[100] contrast-[1.5] invert-[1] hover:blur-[0px] hover:invert-0',
              'transition duration-1000 ',
          }}
        />

        <VideoCard
          // handleClick={() => {
          // >  push('/d/roz-wythes');
          // >}}
          className={commonVideoCls}
          title="Soft Touch to Death"
          text={
            <>
              <p>Johan Legraie / Paola Madrid Ⓒ 2022</p>
            </>
          }
          video={{
            // src: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=24,29.1',
            // src: 'https://media.failwell.be/roz/Roz2.mp4',
            src: 'https://media.reflective-resonance.be/paola/johan-legraie-soft-touch-to-death-light.mp4#t=60,70',
            playbackRate: 0.9,
            loop: true,
            className:
              // 'transition duration-1000 grayscale-[100] contrast-[1.5] invert-[1] hover:blur-[0px] hover:invert-0',
              'transition duration-1000 brightness-[1.4]',
          }}
        />

        <VideoCard
          handleClick={() => {
            push('/d/roz-wythes');
          }}
          className={commonVideoCls}
          title="Roz Wythes"
          text={
            <>
              <p className={'rotate-45'}>Look for what you notice</p>
              <p>but no one else see</p>
            </>
          }
          video={{
            src: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=24,29.1',
            // src: 'https://media.failwell.be/roz/Roz2.mp4',
            // src: 'https://media.failwell.be/roz/roz-rolling-end.m4v#t=16,28',
            playbackRate: 0.3,
            loop: true,
            className:
              // 'transition duration-1000 grayscale-[100] contrast-[1.5] invert-[1] hover:blur-[0px] hover:invert-0',
              'transition duration-1000 ',
          }}
        />
        <VideoCard
          title={'Bubble Dance'}
          className={commonVideoCls}
          text={''}
          video={{
            src: 'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4#t=11,14.3',
            playbackRate: 0.4,
            loop: true,
            // className:
            // 'transition duration-1000 rotate-180 hover:rotate-0 translate-x-full hover:translate-x-0 blur-[35px] invert-[1] hover:blur-[0px] hover:invert-0',
          }}
        />
        <VideoCard
          title={'Les sudakas'}
          className={commonVideoCls}
          text={
            <>
              <p>Look for what you notice</p>
              <p>but no one else see</p>
            </>
          }
          video={{
            src: 'https://media.failwell.be/sudakas/sudakas-training-entry.mp4#t=67,71',
            playbackRate: 0.7,
            loop: true,
            // className: 'transition duration-1000',
          }}
        />
      </div>
    </div>
  );
};
