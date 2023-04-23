'use client';

import type { FC } from 'react';
import React, { useRef, useState } from 'react';
import type { Experience } from '@/components/experience/experience-overlay';
import { ExperienceOverlay } from '@/components/experience/experience-overlay';
import { ThreeVideoCanvas } from '@/components/experience/ThreeVideoCanvas';

type Props = {
  experiences: Experience[];
  bgVideoUrl: string;
  bgFallbackImg: string;
};

export const ExperiencePage: FC<Props> = (props) => {
  const { experiences, bgFallbackImg, bgVideoUrl } = props;
  const overlay = useRef();
  // const caption = useRef<HTMLSpanElement>();
  const scroll = useRef<number>(0);

  const [video, _setVideo] = useState<string>(bgVideoUrl);

  return (
    <>
      <ThreeVideoCanvas videoUrl={video} imgUrl={bgFallbackImg} />
      {/*
      <VideoBackground
        src={video}
        playbackRate={0.4}
        className={'fixed h-full w-full object-cover'}
      /> */}
      <div className={'flex flex-col'}>
        <ExperienceOverlay
          experiences={experiences}
          ref={overlay.current}
          scroll={scroll}
        />
      </div>
      <div className={'text-fuchsia-500'}>COPY right</div>
    </>
  );
};
