'use client';

import type { FC, ReactElement } from 'react';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { ClientComponent2 } from '@/components/ClientComponent2';
import type { ExperienceSection } from '@/components/experience/experience-overlay';
import { ExperienceOverlay } from '@/components/experience/experience-overlay';
import { ThreeVideoCanvas } from '@/components/experience/ThreeVideoCanvas';
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
  const overlay = useRef();
  // const caption = useRef<HTMLSpanElement>();
  const scroll = useRef<number>(0);

  return (
    <>
      {/* <ThreeVideoCanvas videoUrl={video} imgUrl={bgFallbackImg} /> */}

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
        {experience.headerText !== undefined ? (
          <div
            className={
              'ml-5 mt-[35px] inline-block overflow-hidden font-family-elika-gorika text-7xl font-normal tracking-tight text-white'
            }
          >
            {experience.headerText}
          </div>
        ) : null}

        <ExperienceOverlay
          sections={experience.sections}
          ref={overlay.current}
          scroll={scroll}
        />
      </div>
    </>
  );
};
