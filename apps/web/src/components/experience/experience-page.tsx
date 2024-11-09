'use client';

import { type FC, type ReactElement, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  ExperienceOverlay,
  type ExperienceSection,
} from '@/components/experience/experience-overlay';
// import { ThreeVideoCanvas } from '@/components/experience/ThreeVideoCanvas';
import { VideoBackground } from '@/components/video/VideoBackground';

export type Experience = {
  slug: string;
  title: string;
  description: string;
  headerText?: string | ReactElement;
  background: {
    type: 'video';
    className?: string;
    src: string;
    loop: boolean;
    poster?: string;
    playbackRate: number;
  };
  sections: ExperienceSection[];
};

type Props = {
  experience: Experience;
};

export const ExperiencePage: FC<Props> = (props) => {
  const { experience } = props;
  const { background } = experience;
  const overlay = useRef(undefined);
  // const caption = useRef<HTMLSpanElement>();
  const scroll = useRef<number>(0);

  return (
    <>
      <VideoBackground
        src={background.src}
        className={twMerge(
          'fixed h-full w-full object-cover',
          background.className
        )}
        playbackRate={background.playbackRate}
        loop={background.loop}
        poster={background.poster}
        playbackStrategy={{
          type: 'autoplay',
          inViewport: false,
        }}
      />
      <div className={'flex flex-col'}>
        {experience.headerText === undefined ? null : (
          <div
            className={
              'ml-5 mt-[35px] inline-block overflow-hidden font-family-elika-gorika text-7xl font-normal tracking-tight text-white'
            }
          >
            {experience.headerText}
          </div>
        )}

        <ExperienceOverlay
          sections={experience.sections}
          ref={overlay.current}
          scroll={scroll}
        />
      </div>
    </>
  );
};
