import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import type { VideoBackgroundProps } from '@/components/video/VideoBackground';
import { VideoBackground } from '@/components/video/VideoBackground';

export const metadata: Metadata = {
  title: 'Reflective Resonance',
};

type VideoCardProps = {
  className?: string;
  video: VideoBackgroundProps;
} & PropsWithChildren;
const VideoCard: FC<VideoCardProps> = (props) => {
  const { video, children } = props;
  return (
    <div>
      <VideoBackground {...video} />
      <div>{children}</div>
    </div>
  );
};

const Interactions: FC = () => {
  return (
    <div className={'bg-black/70 p-5'}>
      <h1 className={'mb-5 py-5 text-5xl font-thin text-white md:text-6xl'}>
        Interactions
      </h1>
      <div className={'mx-auto flex flex-col gap-5 lg:flex-row'}>
        <VideoCard
          video={{
            title: 'Roz Wythes',
            src: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=20,29.1',
            playbackRate: 0.2,
            autoPlay: true,
          }}
        >
          <p>Look for what you notice</p>
          <p>but no one else see</p>
        </VideoCard>
        <VideoBackground
          title={'Roz Wythes'}
          src={'https://media.failwell.be/roz/roz-markten-trio.m4v#t=20,29.1'}
          playbackRate={0.2}
          autoPlay={true}
        />
        <VideoBackground
          title={'Bubble dance'}
          src={
            'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4#t=11,15'
          }
          playbackRate={0.4}
          autoPlay={true}
        />
        {
          <VideoBackground
            title={'Les Sudakas'}
            src={
              'https://media.failwell.be/sudakas/sudakas-training-entry.mp4#t=8,30'
            }
            playbackRate={0.7}
            autoPlay={true}
          />
        }
      </div>
    </div>
  );
};

const HomePage: FC = () => {
  return (
    <div className={'mx-auto mt-5 flex flex-col gap-5 text-[#a0a0a0]'}>
      <div className={'font-text-primary p-[30px]'}>
        <h1
          className={
            'font-family-monoton mb-5 text-3xl font-extralight tracking-wide'
          }
        >
          Sébastien Vanvelthem
        </h1>
        <div className={'tracking-wide'}>
          <p>Dance | Instant composition | Improvisation</p>
          <p>New website coming soon</p>
        </div>
      </div>
      <Interactions />
    </div>
  );
};

export default HomePage;
