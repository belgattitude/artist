'use client';

import type { FC } from 'react';
import { useEffect, useRef } from 'react';

type Props = {
  sources: Array<{ url: string; type: string }>;
  playbackRate: number;
  autoPlay: boolean;
};
export const VideoBackground: FC<Props> = (props) => {
  const { sources, playbackRate = 1.0, autoPlay = true } = props;
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    videoRef.current?.load();
  }, [sources]);

  return (
    <div
      className={
        'm-5 flex w-[400px] flex-col border p-5 shadow-amber-900 drop-shadow-2xl'
      }
    >
      <div className={''}>
        <video
          className={
            'absolute top-0 left-0 -z-10 block h-full w-full overflow-hidden bg-black object-cover'
          }
          id="background-video"
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
      <div className={'text-white'}>
        <h1 className={'text-4xl font-extrabold'}>Hello world</h1>
        <p>
          Iqlksqdjf lqsdjf qqs dflkjqsd f qs dflqsjdf lqsd jf qs dflsqdjf qs df
          qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
          qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
          qsdlkfj sqdf lkq jdfl
        </p>
        <p>
          Iqlksqdjf lqsdjf qqs dflkjqsd f qs dflqsjdf lqsd jf qs dflsqdjf qs df
          qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
          qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
          qsdlkfj sqdf lkq jdfl
        </p>
        <p>
          Iqlksqdjf lqsdjf qqs dflkjqsd f qs dflqsjdf lqsd jf qs dflsqdjf qs df
          qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
          qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl qsdlkfj sqdf lkq jdfl
          qsdlkfj sqdf lkq jdfl
        </p>
      </div>
    </div>
  );
};
