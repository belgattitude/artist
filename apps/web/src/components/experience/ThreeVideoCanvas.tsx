'use client';

import { useAspect, useTexture, useVideoTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

// const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
const img = 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg';
// const videoUrl = 'https://media.failwell.be/dark.mp4';
// const videoUrl = 'https://media.failwell.be/mr/garage29/garage29-background.mp4';
const videoUrl =
  'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4';

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
    playbackRate: 1,
  });
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export const ThreeVideoCanvas = () => {
  return (
    <Canvas
      orthographic
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
      shadows={false}
      // eventSource={document.getElementById('root')}
      eventPrefix="client"
      gl={{
        antialias: false,
        alpha: true,
      }}
      resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
    >
      <Scene />
    </Canvas>
  );
};
