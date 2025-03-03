import { serverEnv } from '@/env/server.env.mjs';

const defaultBunnyPullZone = 'vz-a7c17ef9-09c';
const defaultBunnyBaseUrl = `https://${defaultBunnyPullZone}.b-cdn.net`;

export type BunnyStreamConfig = {
  pullZone: string;
  baseUrl: string;
  videoLibraryId: number;
  getAccessKey: () => string;
};

export const bunnyStreamConfig = {
  embros: {
    pullZone: defaultBunnyPullZone,
    baseUrl: defaultBunnyBaseUrl,
    videoLibraryId: 345_450,
    getAccessKey: () => {
      return typeof window === 'undefined'
        ? (serverEnv.BUNNY_STREAM_ACCESS_KEY ?? '')
        : '';
    },
  },
} as const satisfies Record<string, BunnyStreamConfig>;
