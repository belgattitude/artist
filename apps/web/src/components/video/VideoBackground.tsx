'use client';

import type { FC } from 'react';
import React, { useCallback, useRef, useState } from 'react';
import { useInViewRef } from 'rooks';
import { twMerge } from 'tailwind-merge';

export type VideoBackgroundProps = {
  className?: string;
  src: string;
  playbackRate?: number;
  autoPlay?: boolean;
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
    autoPlay = false,
    muted = true,
    loop = false,
  } = props;

  const videoRef = useRef<HTMLVideoElement>();

  const videoRefCallback = useCallback(
    (node: HTMLVideoElement) => {
      videoRef.current = node;
      if (node !== null) {
        node.playbackRate = playbackRate;
      }
    },
    [playbackRate, src]
  );

  const [viewInRef] = useInViewRef((entries, observer) => {
    if (videoRef.current) {
      if (entries?.[0].isIntersecting) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  });

  return (
    <div ref={viewInRef}>
      <video
        className={twMerge(
          'absolute top-0 left-0 -z-10 block h-full w-full overflow-hidden object-cover',
          className
        )}
        autoPlay={autoPlay}
        ref={videoRefCallback}
        loop={loop}
        muted={muted}
        src={src}
      />
    </div>
  );
};
