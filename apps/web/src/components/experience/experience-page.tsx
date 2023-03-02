'use client';

import type { FC } from 'react';
import React, { useRef, useState } from 'react';
import type { Experience } from '@/components/experience/experience-overlay';
import { ExperienceOverlay } from '@/components/experience/experience-overlay';
import { ThreeVideoCanvas } from '@/components/experience/ThreeVideoCanvas';

type Props = {
  experiences: Experience[];
};

// const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
const img = 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg';
// const videoUrl = 'https://media.failwell.be/dark.mp4';
const videoUrl =
  'https://media.failwell.be/mr/garage29/garage29-background.mp4';
// const videoUrl =
//  'https://media.failwell.be/bubble/bubble_dance_11th_april_2021.mp4';

export const ExperiencePage: FC<Props> = (props) => {
  const { experiences } = props;
  const overlay = useRef();
  // const caption = useRef<HTMLSpanElement>();
  const scroll = useRef<number>(0);

  const [video, setVideo] = useState<string>(videoUrl);

  return (
    <>
      <ThreeVideoCanvas videoUrl={video} imgUrl={img} />
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
