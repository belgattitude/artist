import { serverEnv } from '@/env/server.env.mjs';

export const bunnyStreamServerConfig = {
  embros: {
    getAccessKey: () => serverEnv.BUNNY_STREAM_ACCESS_KEY ?? '',
  },
} as const;
