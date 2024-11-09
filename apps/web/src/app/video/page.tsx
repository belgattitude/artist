'use client';

import dynamic from 'next/dynamic';

const DynamicThreeJsVideo = dynamic(
  () => import('./ThreeJsVideo').then((mod) => mod.ThreeJsVideo),
  {
    ssr: false,
  }
);

export default function VideoRoute() {
  return <DynamicThreeJsVideo />;
}
