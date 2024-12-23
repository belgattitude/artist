'use client';

import HlsVideo from 'hls-video-element/react';

import { cn } from '@/components/utils';

type Props = {
  src: string;
  poster?: string;
  autoplay?: boolean;
  muted?: boolean;
  preload?: 'none' | 'auto' | 'metadata';
  className?: string;
};

const defaultProps = {
  autoplay: false,
  muted: false,
  preload: 'metadata',
} as const satisfies Partial<Props>;

export const HlsVideoPlayer = (props: Props) => {
  const { autoplay, preload, muted, src, poster, className } = {
    ...props,
    ...defaultProps,
  };

  const optionals = {
    ...(poster === undefined ? {} : { poster }),
  };

  return (
    <HlsVideo
      src={src}
      className={cn('', className)}
      controls={true}
      crossOrigin="anonymous"
      playsInline={true}
      autoplay={autoplay}
      muted={muted}
      preload={preload}
      suppressHydrationWarning={true}
      {...optionals}
    />
  );
};
