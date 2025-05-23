// https://codesandbox.io/s/camera-scroll-tu24h?file=/src/App.js:623-670

import type { Metadata, ResolvingMetadata } from 'next';

import { ExperiencePage } from '@/components/experience/experience-page';
import { fetchExperience } from '@/data/experiences';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Record<string, string | string[] | undefined>;
};

export const generateMetadata = async (
  props: Props,
  _parent?: ResolvingMetadata
): Promise<Metadata> => {
  const params = await props.params;
  const experience = await fetchExperience(params.slug);
  return {
    title: experience.title,
    description: experience.description,
  };
};

export default async function GenericExperiencePage(props: Props) {
  const params = await props.params;
  const experience = await fetchExperience(params.slug);
  return (
    <div className={'flex flex-col'}>
      <ExperiencePage experience={experience} />
    </div>
  );
}
