'use client';

import type { FC } from 'react';
import React from 'react';
import { VideoCard } from '@/components/video/VideoCard';

export const ClientComponent: FC = () => {
  return (
    <div>
      <div
        className={'border-2 border-amber-500 p-5'}
        onMouseEnter={() => {
          console.log('Mouse is entering');
        }}
      >
        I'm the client component. Please hover me and watch the console
      </div>
      <div>
        <VideoCard
          // handleClick={() => {
          // >  push('/d/roz-wythes');
          // >}}
          className={'aspect-16/9  min-h-[250px]'}
          title="Interstices"
          text={
            <>
              <p>Typhen Rocchia Ⓒ 2023</p>
            </>
          }
          video={{
            // src: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=24,29.1',
            // src: 'https://media.failwell.be/roz/Roz2.mp4',
            src: 'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4#t=0,14',
            playbackRate: 0.3,
            playbackStrategy: {
              type: 'onHover',
            },
            loop: true,
            className:
              // 'transition duration-1000 grayscale-[100] contrast-[1.5] invert-[1] hover:blur-[0px] hover:invert-0',
              'transition duration-1000 ',
          }}
        />
      </div>
    </div>
  );
};
