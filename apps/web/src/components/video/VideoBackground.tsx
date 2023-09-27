'use client';

import { useEffect, useRef, type FC } from 'react';
import { useDeepCompareEffect, useInViewRef } from 'rooks';
import { twMerge } from 'tailwind-merge';
import { getVideoUrlTimeRange } from '@/lib/url/getVideoUrlTimeRange';

export type PlaybackStrategy =
  | {
      type: 'autoplay';
      inViewport?: boolean;
    }
  | {
      type: 'playOnMouseOver';
      something?: string;
    };

export type VideoBackgroundProps = {
  className?: string;
  src: string;
  playbackRate?: number;
  playbackStrategy?: PlaybackStrategy;
  playing?: boolean;
  muted?: boolean;
  loop?: boolean;
  preload?: HTMLVideoElement['preload'];
  poster?: string;
  // @todo support for sources (not needed now)
  // sources: Array<{ url: string; type: string }>;
};

const defaultPlaybackStrategy: Required<PlaybackStrategy> = {
  type: 'autoplay',
  inViewport: true,
};

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
const logError = (msg: string, e?: Error | DOMException | unknown) => {
  if (process.env.NODE_ENV === 'development') {
    const errorMsg = e instanceof Error ? [e.name, e.message].join(': ') : '';
    console.log(`[VideoBackground] ${msg} (${errorMsg})`);
  }
};

export const VideoBackground: FC<VideoBackgroundProps> = (props) => {
  const {
    src,
    playbackRate = 1.0,
    className,
    playbackStrategy,
    muted = true,
    playing = props.playing ?? false,
    loop = false,
    poster,
    preload = 'metadata',
  } = props;

  const { start, end } = getVideoUrlTimeRange(src);
  const videoRef = useRef<HTMLVideoElement>(null);

  const strategy: PlaybackStrategy = {
    ...defaultPlaybackStrategy,
    ...(playbackStrategy ?? {}),
  };

  useEffect(() => {
    const domVideo = videoRef.current;
    const handleTimeUpdate = (_event: Event) => {
      const domVideo = videoRef.current;
      if (domVideo) {
        if (end && domVideo.currentTime >= end - 0.3) {
          domVideo.currentTime = start;
          if (!domVideo.paused) {
            domVideo.play().catch((e) => {
              logError("Couldn't loop and call play", e);
            });
          }
        }
      }
    };

    if (!domVideo) {
      console.log(
        'Error: videoRef is unknown, did you conditionally rendered the video tag ?'
      );
    } else {
      domVideo.playbackRate = playbackRate;

      if (loop && end) {
        domVideo.addEventListener('timeupdate', handleTimeUpdate);
      }
      return () => {
        domVideo.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [playbackRate, start, end, loop]);

  const [viewInRef] = useInViewRef((entries) => {
    if (strategy.type == 'autoplay' && strategy.inViewport) {
      if (videoRef.current) {
        if (entries?.[0].isIntersecting) {
          videoRef.current.play().catch((e) => {
            logError("Couldn't trigger play() while intersecting", e);
          });
        } else {
          videoRef.current.pause();
        }
      }
    }
  });

  useDeepCompareEffect(() => {
    if (videoRef.current) {
      switch (strategy.type) {
        case 'playOnMouseOver':
          videoRef.current?.pause();
          break;
        case 'autoplay':
          videoRef.current?.play().catch((e) => {
            logError("Couldn't start autoplay", e);
          });
          break;
      }
    }
  }, [strategy]);

  const autoPlay = strategy.type == 'autoplay' && !strategy.inViewport;

  return (
    <div ref={viewInRef}>
      <video
        className={twMerge(
          'absolute top-0 left-0 -z-10 block h-full w-full overflow-hidden object-cover',
          className
        )}
        autoPlay={autoPlay}
        ref={videoRef}
        // loop={loop}
        muted={muted}
        disablePictureInPicture={true}
        playsInline={true}
        src={src}
        poster={poster}
        preload={preload}
      />
    </div>
  );
};
