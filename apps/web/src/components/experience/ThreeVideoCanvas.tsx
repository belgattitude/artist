'use client';

import { useAspect, useTexture, useVideoTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { FC } from 'react';
import { Suspense } from 'react';

const Scene: FC<{ imgUrl: string; videoUrl: string }> = (props) => {
  // const size = useAspect(1800, 1000);
  const { videoUrl, imgUrl } = props;
  const size = useAspect(4000, 1000);
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<FallbackMaterial url={imgUrl} />}>
        <VideoMaterial url={videoUrl} />
      </Suspense>
    </mesh>
  );
};

const VideoMaterial: FC<{ url: string }> = ({ url }) => {
  const texture = useVideoTexture(url, {
    autoplay: true,
    playbackRate: 0.4,
  });
  return <meshBasicMaterial map={texture} toneMapped={false} />;
};

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url);
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

export const ThreeVideoCanvas: FC<{ imgUrl: string; videoUrl: string }> = (
  props
) => {
  const { videoUrl, imgUrl } = props;
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
      <Scene imgUrl={imgUrl} videoUrl={videoUrl} />
    </Canvas>
  );
};
