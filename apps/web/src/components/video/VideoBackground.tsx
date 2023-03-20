'use client';

import type { FC } from 'react';
import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  sources: Array<{ url: string; type: string }>;
  playbackRate: number;
  autoPlay: boolean;
};
export const VideoBackground: FC<Props> = (props) => {
  const {
    sources,
    playbackRate = 1.0,
    autoPlay = true,
    className = '',
  } = props;

  const videoRef = useCallback(
    (node: HTMLVideoElement) => {
      if (node !== null) {
        node.playbackRate = playbackRate;
      }
    },
    [playbackRate]
  );

  return (
    <div
      className={twMerge(
        'relative flex flex-col flex-grow drop-shadow pt-[20px]',
        className
      )}
    >
      <div>
        <video
          className={
            'absolute top-0 left-0 -z-10 block h-full w-full overflow-hidden object-cover'
          }
          autoPlay={autoPlay}
          ref={videoRef}
          loop={true}
          muted={true}
          // poster="https://assets.codepen.io/6093409/river.jpg"
        >
          {sources.map(({ url, type }) => {
            return <source key={`${url}`} src={url} type={type} />;
          })}
        </video>
      </div>
      <div
        className={
          'mx-[20px] max-w-[95%] bg-black/40 p-[15px] tracking-wide text-[#a0a0a0] md:mx-[20px] md:mb-[50px] md:p-[65px] lg:max-w-[78%]'
        }
      >
        <h1 className={'mb-5 text-5xl font-thin text-white md:text-6xl'}>
          Interactions
        </h1>
        <div className={''}>
          <p>
            Iqlksqdjf lqsdjf qqs dflkjqsd f qs dflqsjdf lqsd jf qs dflsqdjf qs
            df qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
            qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
            qsdlkfj sqdf lkq jdfl
          </p>
          <p>
            Iqlksqdjf lqsdjf qqs dflkjqsd f qs dflqsjdf lqsd jf qs dflsqdjf qs
            df qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
            qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
            qsdlkfj sqdf lkq jdfl
          </p>
        </div>
        {/*
        <img
          src={'https://media.failwell.be/mr/garage29/gage29-typhen_1.3.4.webp'}
          style={{ width: '100%', marginTop: '15px' }}
        />
        */}
      </div>
    </div>
  );
};
