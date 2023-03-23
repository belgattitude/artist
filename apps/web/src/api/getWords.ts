import type { components, paths } from 'artist-strapi-api';

const url = '/words';

type A =
  paths[typeof url]['get']['responses'][200]['content']['application/json']['data'];

type B = components['schemas']['WordListResponseDataItem'][];

const a: B = [
  { id: 1, attributes: { cover: { data: { attributes: { url } } } } },
];
