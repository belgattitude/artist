import { serverEnv } from '@/env/server.env.mjs';

export const bunnyStreamServerConfig = {
  embros: {
    getAccessKey: () => {
      return typeof window === 'undefined'
        ? ''
        : (serverEnv.BUNNY_STREAM_ACCESS_KEY ?? '');
    },
  },
} as const;
