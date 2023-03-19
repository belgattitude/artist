'use client';

import type { FC } from 'react';
import { useCallback } from 'react';
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
        'relative flex flex-col flex-grow bg-black drop-shadow pt-[20px]',
        className
      )}
    >
      <div>
        <video
          className={
            'absolute top-0 left-0 -z-10 block h-full w-full overflow-hidden bg-black object-cover'
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
          'mb-[50px] mr-[20px] max-w-[400px] bg-black/40 p-[65px] tracking-wide text-[#a0a0a0]'
        }
      >
        <h1 className={'mb-5  text-6xl font-thin text-white'}>Casual</h1>
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
          <p>
            Iqlksqdjf lqsdjf qqs dflkjqsd f qs dflqsjdf lqsd jf qs dflsqdjf qs
            df qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
            qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
            qsdlkfj sqdf lkq jdfl
          </p>
        </div>
      </div>
    </div>
  );
};
