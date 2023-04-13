'use client';

import type { FC } from 'react';
import { useWords } from '../../api/graphql/useWords';

export const WordList: FC = () => {
  const [result] = useWords();

  const { data, fetching, error } = result;

  return <div>{JSON.stringify(data)}</div>;
};
