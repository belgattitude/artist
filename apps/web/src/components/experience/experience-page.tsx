'use client';

import type { FC } from 'react';
import React, { useRef } from 'react';
import type { Experience } from '@/components/experience/experience-overlay';
import { ExperienceOverlay } from '@/components/experience/experience-overlay';
import { ThreeVideoCanvas } from '@/components/experience/ThreeVideoCanvas';

type Props = {
  experiences: Experience[];
};

export const ExperiencePage: FC<Props> = (props) => {
  const { experiences } = props;
  const overlay = useRef();
  // const caption = useRef<HTMLSpanElement>();
  const scroll = useRef<number>(0);

  return (
    <>
      <ThreeVideoCanvas />
      <div>
        <ExperienceOverlay
          experiences={experiences}
          ref={overlay.current}
          scroll={scroll}
        />
      </div>
    </>
  );
};
