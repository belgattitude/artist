// https://beta.nextjs.org/docs/rendering/server-and-client-components#third-party-packages

'use client';

import dynamic from 'next/dynamic';

export const VideoPlayer = dynamic(
  () => import('react-player').then((mod) => mod),
  {
    ssr: false,
  }
);
