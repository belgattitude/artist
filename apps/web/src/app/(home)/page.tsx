import type { Metadata } from 'next';
import type { FC } from 'react';
import React from 'react';
import { VideoCard } from '@/components/video/VideoCard';
import { Interactions } from './Interactions';

export const metadata: Metadata = {
  title: 'Reflective Resonance',
};

const HomePage: FC = () => {
  return (
    <div className={'mx-auto mt-5 flex flex-col gap-5 text-white'}>
      <div className={'font-text-primary p-5'}>
        <h1 className={'font-family-monoton mb-5 text-3xl tracking-wide'}>
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
