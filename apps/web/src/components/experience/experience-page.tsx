'use client';

import type { FC } from 'react';
import { useRef } from 'react';
import type { ExperienceSection } from '@/components/experience/experience-overlay';
import { ExperienceOverlay } from '@/components/experience/experience-overlay';
import { ThreeVideoCanvas } from '@/components/experience/ThreeVideoCanvas';
import { VideoBackground } from '@/components/video/VideoBackground';

export type Experience = {
  slug: string;
  title: string;
  description: string;
  background: {
    type: 'video';
    src: string;
    loop: boolean;
    poster: string;
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
        className={'fixed h-full w-full object-cover'}
        playbackRate={background.playbackRate}
        loop={background.loop}
        poster={background.poster}
        playbackStrategy={{
          type: 'autoplay',
          inViewport: false,
        }}
      />
      <div className={'flex flex-col'}>
        <ExperienceOverlay
          sections={experience.sections}
          ref={overlay.current}
          scroll={scroll}
        />
      </div>
      <div className={'text-fuchsia-500'}>COPY right</div>
    </>
  );
};
