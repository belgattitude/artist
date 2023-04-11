import type { Metadata } from 'next';
import type { FC } from 'react';
import React from 'react';
import { ClientComponent } from '@/components/ClientComponent';
import { Interactions } from '@/components/sections/Interactions';
import { VideoBackground } from '@/components/video/VideoBackground';
import { getInteractionData } from '@/data/interactions';

export const metadata: Metadata = {};

const HomePage: FC = () => {
  const interactionsData = getInteractionData();
  return (
    <div className={'mx-auto mt-5 flex flex-col gap-5'}>
      <div className={'p-5 font-text-primary'}>
        <h1 className={'mb-5 font-family-elika-gorika text-3xl tracking-wider'}>
          Sébastien Vanvelthem
        </h1>
        <div className={'tracking-wide'}>
          <p>Dance | Instant composition | Improvisation</p>
          <p>New website coming soon</p>
        </div>
      </div>
      {/*
      <div
        className={
          'absolute right-0 z-10 m-5 -scale-100 border-2 bg-black p-5 font-family-monoton text-3xl text-white [writing-mode:vertical-lr]'
        }
      >
        <p>Which makes art inevitable</p>

        <div className={'text-3xl font-extrabold'}>
          It's to be in that wonderful state
        </div>
        <p className={'text-3xl'}>The object is not to make art</p>
      </div>
      */}

      <div className={``}>
        <Interactions
          title={'Interactions'}
          items={getInteractionData({
            slugs: ['soft-touch-to-death', 'interstices'],
          })}
        />
      </div>

      <ClientComponent />
      <div className={``}>
        <Interactions title={'Interactions'} items={getInteractionData()} />
      </div>
    </div>
  );
};

export default HomePage;
