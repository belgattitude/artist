'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import type { FC, ReactNode } from 'react';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { VideoBackground } from '@/components/video/VideoBackground';
import type {
  VideoBackgroundProps,
  PlaybackStrategy,
} from '@/components/video/VideoBackground';

export type VideoCardProps = {
  className?: string;
  video: VideoBackgroundProps & { className?: string };
  title: ReactNode;
  text: ReactNode;
  handleClick?: () => void;
};
export const VideoCard: FC<VideoCardProps> = (props) => {
  const { video, title, className = '', text, handleClick } = props;
  const {
    className: videoClassName = '',
    playbackStrategy,
    ...videoProps
  } = video;
  const [playing, setPlaying] = useState<boolean>(false);

  const strategy: PlaybackStrategy = playing
    ? {
        type: 'autoplay',
      }
    : {
        type: 'playOnMouseOver',
      };
  return (
    <div
      className={twMerge(
        'relative flex flex-col flex-grow drop-shadow pt-[20px] border-2 border-amber-500',
        className
      )}
      onMouseOver={(event) => {
        console.log('onMouseEnter setPlaying', true);
        setPlaying(true);
        event.preventDefault();
      }}
      onMouseLeave={(event) => {
        console.log('onMouseOut setPlaying', false);
        setPlaying(false);
        event.preventDefault();
      }}
    >
      <div
        className={
          'border-1 absolute -left-5 rotate-90 bg-white px-3 py-1 font-family-inter font-thin text-[#222]'
        }
      >
        Video
      </div>
      <VideoBackground
        className={videoClassName}
        {...videoProps}
        playbackStrategy={strategy}
        playing={playing}
      />
      <div
        className={
          'mx-[20px] max-w-[95%] bg-black/60 p-[15px] tracking-wide text-[#a0a0a0] md:mx-[20px] md:mb-[50px] md:p-[65px] lg:max-w-[78%]'
        }
      >
        <h1
          className={clsx(
            'mb-5 cursor-pointer text-5xl font-thin text-white md:text-5xl'
          )}
        >
          <a
            className={clsx('', {
              'hover:bg-amber-500': handleClick !== undefined,
            })}
            onClick={(e) => {
              e.preventDefault();
              if (handleClick) {
                handleClick();
              }
            }}
          >
            {title}
          </a>
        </h1>
        <div className={'relative flex'}>{text}</div>
      </div>
    </div>
  );
};
