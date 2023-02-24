import type { Metadata } from 'next';
import type { FC } from 'react';
import { VideoPlayer } from '@/components/player/VideoPlayer';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage: FC = () => {
  const videoUrl = 'https://media.failwell.be/dark.mp4';
  return (
    <div className={'border-1 container mx-auto flex flex-col gap-5 p-5'}>
      <div className={'text-white'}>
        <h1 className={'text-xl'}>Sébastien Vanvelthem</h1>
        <p>Dancer | Instant composition | Choreography</p>
        <p>New website coming soon</p>
      </div>
      <div className={'grow-1 aspect-[2/1] w-full bg-black'}>
        <VideoPlayer
          url={videoUrl}
          muted={true}
          loop={true}
          playsinline={true}
          light={false}
          playbackRate={0.3}
          controls={false}
          playing={true}
          width={'100%'}
          height={'100%'}
        />
      </div>
    </div>
  );
};

export default HomePage;
