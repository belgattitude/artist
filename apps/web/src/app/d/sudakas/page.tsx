'use client';

// https://codesandbox.io/s/camera-scroll-tu24h?file=/src/App.js:623-670

import { useAspect, useVideoTexture, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import type { FC, MutableRefObject } from 'react';
import React, { useRef, Suspense, forwardRef } from 'react';
import { VideoPlayer } from '@/components/player/VideoPlayer';

// const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
const img = 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg';

// export const metadata: Metadata = {
//  title: 'MR - Garage29 - feb 2023',
// };

// const videoUrl = 'https://media.failwell.be/dark.mp4';
const videoUrl = 'https://media.failwell.be/sudakas/sudakas-training-entry.mp4';

const url = 'https://media.failwell.be/mr/garage29';
const images = Array.from(
  { length: 10 },
  (_v, idx) =>
    `${url}/mr-garage29-secretary-notes-feb-2023-${String(idx + 1).padStart(
      3,
      '0'
    )}.jpg`
);

function Scene() {
  // const size = useAspect(1800, 1000);
  const size = useAspect(1800, 1000);
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url={img} />}>
        <VideoMaterial url={videoUrl} />
      </Suspense>
    </mesh>
  );
}

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url, {
    autoplay: true,
    playbackRate: 0.4,
  });
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

type OverlayProps = {
  scroll: MutableRefObject<number>;
};

const dictionnary = [
  {
    title: 'Anything unrelated',
    description: `
                    
    `,
    video: 'https://media.failwell.be/sudakas/sudakas-training-entry.mp4',
  },
];

// eslint-disable-next-line react/display-name
const Overlay = forwardRef<HTMLDivElement, OverlayProps>(({ scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current =
        e.currentTarget.scrollTop /
        (e.currentTarget.scrollHeight - window.innerHeight);
    }}
  >
    {dictionnary.map(({ title, description, video }) => (
      <div key={title} style={{ height: '200vh' }}>
        <div className="dot">
          <h1>{title}</h1>
          <p>{description}</p>
          {video && (
            <VideoPlayer
              url={video}
              muted={true}
              loop={false}
              // playsinline={true}
              light={false}
              playbackRate={1}
              controls={true}
              // playing={true}
              width={'100%'}
              style={{ width: '100%', marginTop: '15px' }}
              height={'100%'}
            />
          )}
        </div>
      </div>
    ))}
    {/* <span className="caption">G-29</span> */}
  </div>
));

const DiaryGarage29Page: FC = () => {
  const overlay = useRef();
  // const caption = useRef<HTMLSpanElement>();
  const scroll = useRef<number>(0);

  return (
    <>
      <Canvas
        orthographic
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
        shadows
        // eventSource={document.getElementById('root')}
        eventPrefix="client"
        className={''}
      >
        <Scene />
      </Canvas>

      <div>
        <Overlay ref={overlay.current} scroll={scroll} />
      </div>
    </>
  );
};

export default DiaryGarage29Page;
