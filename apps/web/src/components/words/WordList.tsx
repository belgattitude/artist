'use client';

import type { FC } from 'react';
import { useQuery } from 'urql';

import { fullWordFragment, searchWords } from '@/api/graphql/words.gql';
import { VideoPlayer } from '@/components/player/VideoPlayer';
import { getStrapiURL } from '@/config/strapi.config';
import { type FragmentType, useFragment } from '@/gql/fragment-masking';

type WordCardProps = {
  word: FragmentType<typeof fullWordFragment>;
};

const WordCard: FC<WordCardProps> = (props) => {
  const word = useFragment(fullWordFragment, props.word);
  const image = word.cover?.data?.attributes?.url ?? null;
  const video = word.video?.data?.attributes?.url ?? null;
  return (
    <div>
      <h1>{word.name}</h1>
      {image && (
        <img
          alt={word.name ?? ''}
          className={'aspect-16/9 w-full'}
          src={getStrapiURL(image)}
        />
      )}
      {video && (
        <div className={'aspect-16/9 w-full'}>
          <VideoPlayer
            url={getStrapiURL(video)}
            controls={true}
            width={'100%'}
          />
        </div>
      )}
    </div>
  );
};

export const WordList: FC = () => {
  const [{ data }] = useQuery({
    query: searchWords,
    variables: {
      limit: 50,
    },
  });

  if (!data) {
    return null;
  }

  return (
    <div className={'font-family-elika-gorika'}>
      {data.words?.data.map((word) => {
        return (
          word.attributes && <WordCard key={word.id} word={word.attributes} />
        );
      })}
    </div>
  );
};
