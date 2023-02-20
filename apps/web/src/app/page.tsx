'use client';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import type { FC } from 'react';
import { useRef } from 'react';
// import ReactPlayer from 'react-player';
// import { VideoPlayer } from '@/components/player/VideoPlayer';
const VideoPlayer = dynamic(
  () =>
    import('../components/player/VideoPlayer').then((mod) => mod.VideoPlayer),
  {
    ssr: false,
  }
);
const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage: FC = () => {
  const videoUrl = 'https://media.failwell.be/dark.mp4';
  return (
    <div className={'border-1 container mx-auto flex flex-row gap-5 p-5'}>
      <div className={''}>
        <h1>Sébastien Vanvelthem</h1>
        <p>Dancer | Instant composition | Project</p>
        <p>New website coming soon</p>
      </div>
      <div>
        <VideoPlayer
          url={videoUrl}
          muted={true}
          loop={true}
          playsinline={true}
          light={false}
          playbackRate={0.2}
          controls={false}
          width={800}
          height={600}
          playing={true}
        />
        {/*
        <Image
          priority={true}
          src={img}
          width={800}
          height={400}
          alt={'Butoh picture'}
        /> */}
      </div>
    </div>
  );
};

export default HomePage;
