'use client';

import dynamic from 'next/dynamic';

export const DynamicRozContent = dynamic(
  () => import('./RozContent').then((mod) => mod.RozContent),
  {
    ssr: false,
  }
);
