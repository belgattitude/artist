'use client';

// https://codesandbox.io/s/camera-scroll-tu24h?file=/src/App.js:623-670

import { useAspect, useVideoTexture, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import type { Metadata } from 'next';
import type { FC, MutableRefObject, Ref, RefObject } from 'react';
import React, { useRef, Suspense, forwardRef } from 'react';
import { VideoPlayer } from '@/components/player/VideoPlayer';
// import { VideoPlayer } from '@/components/player/VideoPlayer';

// const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
const img = 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg';

// export const metadata: Metadata = {
//  title: 'MR - Garage29 - feb 2023',
// };

// const videoUrl = 'https://media.failwell.be/dark.mp4';
const videoUrl =
  'https://media.failwell.be/mr/garage29/garage29-background.mp4';

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
  const size = useAspect(4000, 1000);
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
    title: 'casual',
    description: `
      Relaxed and unconcerned. Happening or coming to pass without design.
    `,
    img: 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg',
  },
  {
    title: 'crisp',
    description: `
          Adjective. crisp (comparative crisper, superlative crispest) (of
          something seen or heard) Sharp, clearly defined. Brittle; friable; in a condition to break
          with a short, sharp fracture.
    `,
    img: 'https://media.failwell.be/mr/garage29/garage29-stephanie-love.webp',
  },
  {
    title: 'happen',
    description: `
          I lost it because I tried to make it happen rather than let it happen
    `,
    img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-010.jpg',
  },
  {
    title: 'meaning',
    description: `
          You were meaning something when you left, when you stopped waiting.       
    `,
    img: 'https://media.failwell.be/mr/garage29/gage29-typhen_1.3.4.webp',
  },

  {
    title: 'produce',
    description: `
          A lot of sadness can produce a lot of love. It's going from up to down, down to up 
          in a circular motion.
    `,
    img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-008.jpg',
  },
  {
    title: 'speaking',
    description: `
        Dancing & speaking. Moving while talking is very hard because of the language. Topos. Logos.      
    `,
    img: 'https://media.failwell.be/mr/garage29/garage29-noah_1.3.3.webp',
  },
  {
    title: 'center',
    description: `
        Don't want radiality. Center outside.        
    `,
    img: 'https://media.failwell.be/mr/garage29/garage29-els_1.4.4.webp',
  },
  {
    title: 'erratic',
    description: `
        It's a bit erratic. A bit lost. Create a lot of noise.        
    `,
    img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-003.jpg',
  },
  {
    title: 'constraints',
    description: `

    `,
    img: 'https://media.failwell.be/mr/garage29/mr-garage29-secretary-notes-feb-2023-004.jpg',
  },
  {
    title: 'impros',
    description: `

    `,
    video: 'https://media.failwell.be/mr/garage29/garage29-1.mp4',
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
    {dictionnary.map(({ title, description, img, video }) => (
      <div key={title} style={{ height: '200vh' }}>
        <div className="dot">
          <h1>{title}</h1>
          <p>{description}</p>
          {img && (
            <img src={img} style={{ width: '100%', marginTop: '15px' }} />
          )}
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
