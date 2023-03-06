// https://codesandbox.io/s/camera-scroll-tu24h?file=/src/App.js:623-670

import type { Metadata } from 'next';
import { ExperiencePage } from '@/components/experience/experience-page';
import { getExperiences } from '@/components/experience/getExperiences';

export const metadata: Metadata = {
  title: 'MR - Research - Garage29 - feb 2023',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

const url = 'https://media.failwell.be/mr/garage29';
const images = Array.from(
  { length: 10 },
  (_v, idx) =>
    `${url}/mr-garage29-secretary-notes-feb-2023-${String(idx + 1).padStart(
      3,
      '0'
    )}.jpg`
);

// const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
const img = 'https://media.failwell.be/mr/garage29/garage29-jeanne.jpg';
// const videoUrl = 'https://media.failwell.be/dark.mp4';
const videoUrl =
  'https://media.failwell.be/mr/garage29/garage29-background.mp4';

export default async function DiaryGarage29Page() {
  const experiences = await getExperiences();
  return (
    <>
      <ExperiencePage
        experiences={experiences}
        bgFallbackImg={img}
        bgVideoUrl={videoUrl}
      />
    </>
  );
}
