'use client';
import type { FC } from 'react';
import type { ReactPlayerProps } from 'react-player';
import ReactPlayer from 'react-player';

type Props = ReactPlayerProps & {
  // playerRef: unknown;
};
export const VideoPlayer: FC<Props> = (props) => {
  const { ...restProps } = props;
  return <ReactPlayer {...restProps} />;
};
