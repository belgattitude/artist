'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import type { FC, ReactNode } from 'react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { VideoBackground } from '@/components/video/VideoBackground';
import type { VideoBackgroundProps } from '@/components/video/VideoBackground';

export type VideoCardProps = {
  className?: string;
  video: VideoBackgroundProps;
  title: string;
  text: ReactNode;
  handleClick?: () => void;
};
export const VideoCard: FC<VideoCardProps> = (props) => {
  const { video, title, className = '', text, handleClick } = props;
  return (
    <div
      className={twMerge(
        'relative flex flex-col flex-grow drop-shadow pt-[20px]',
        className
      )}
    >
      <VideoBackground {...video} />
      <div
        className={
          'mx-[20px] max-w-[95%] bg-black/60 p-[15px] tracking-wide text-[#a0a0a0] md:mx-[20px] md:mb-[50px] md:p-[65px] lg:max-w-[78%]'
        }
      >
        <h1
          className={clsx(
            'mb-5 cursor-pointer text-5xl font-thin text-white md:text-5xl',
            {
              'hover:bg-amber-500': handleClick !== undefined,
            }
          )}
        >
          <a
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
        <div className={'text-md'}>{text}</div>
      </div>
    </div>
  );
};
