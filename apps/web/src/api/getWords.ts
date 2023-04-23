import type { components, paths } from 'artist-strapi-api';
import { ky } from '@/config/ky';
import { getStrapiURL } from '@/config/strapi.config';

const url = '/words';

type WordListReponseData =
  paths[typeof url]['get']['responses'][200]['content']['application/json']['data'];

type P = paths[typeof url]['get']['parameters'];
const p: P = {
  query: {
    fields: '',
  },
};
type B = components['schemas']['WordListResponseDataItem'][];

type GetWords = Awaited<ReturnType<typeof getWords>>;

export const getWords = async () => {
  return ky
    .get(`${getStrapiURL('/api')}${url}`, {
      throwHttpErrors: true,
      keepalive: true,
      credentials: 'include',
      searchParams: {
        test: 1,
      },
    })
    .json<WordListReponseData[]>();
};
