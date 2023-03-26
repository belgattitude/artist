'use client';

import type { FC } from 'react';
import React, { useCallback } from 'react';
import { twMerge } from 'tailwind-merge';

export type VideoBackgroundProps = {
  className?: string;
  src: string;
  playbackRate?: number;
  autoPlay: boolean;
  muted?: boolean;
  loop?: boolean;
  // @todo support for sources (not needed now)
  // sources: Array<{ url: string; type: string }>;
};
export const VideoBackground: FC<VideoBackgroundProps> = (props) => {
  const {
    src,
    playbackRate = 1.0,
    className,
    autoPlay = true,
    muted = true,
    loop = false,
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
    <video
      className={twMerge(
        'absolute top-0 left-0 -z-10 block h-full w-full overflow-hidden object-cover',
        className
      )}
      autoPlay={autoPlay}
      ref={videoRef}
      loop={loop}
      muted={muted}
      src={src}
    />
  );
};
