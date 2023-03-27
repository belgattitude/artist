'use client';

import type { FC } from 'react';
import React, { useCallback, useRef } from 'react';
import { useInViewRef } from 'rooks';
import { twMerge } from 'tailwind-merge';
import { getVideoUrlTimeRange } from '@/lib/url/getVideoUrlTimeRange';

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

  const { start, end } = getVideoUrlTimeRange(src);
  const videoRef = useRef<HTMLVideoElement>();

  const videoRefCallback = useCallback(
    (node: HTMLVideoElement) => {
      videoRef.current = node;
      if (loop) {
        if (node !== null) {
          node.playbackRate = playbackRate;
          node.ontimeupdate = (ev) => {
            ev.preventDefault();
            if (end && node.currentTime >= end - 0.3) {
              node.currentTime = start;
              node.play();
            }
          };
        }
      }
    },
    [playbackRate, src, loop]
  );

  const [viewInRef] = useInViewRef((entries) => {
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
        //  loop={loop}
        muted={muted}
        src={src}
      />
    </div>
  );
};
