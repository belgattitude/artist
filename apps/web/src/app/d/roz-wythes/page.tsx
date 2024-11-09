// https://codesandbox.io/s/camera-scroll-tu24h?file=/src/App.js:623-670

import type { Metadata } from 'next';

import { fetchExperience } from '@/data/experiences';

import { DynamicRozContent } from './DynamicRozContent';

const slug = 'canon-revisited-roz-wythes';

export const generateMetadata = async (params: {
  slug: string;
}): Promise<Metadata> => {
  const experience = await fetchExperience(slug);
  return {
    title: experience.title,
    description: experience.description,
  };
};

export default async function DiaryRozMarktenPage() {
  const experience = await fetchExperience(slug);
  return <DynamicRozContent experience={experience} />;
}
