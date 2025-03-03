export const bunnyStreamServerConfig = {
  embros: {
    getAccessKey: () => {
      /*
      return typeof window === 'undefined'
        ? ''
        : (serverEnv.BUNNY_STREAM_ACCESS_KEY ?? '');
      */
      return typeof window === 'undefined'
        ? ''
        : (process.env.BUNNY_STREAM_ACCESS_KEY ?? '');
    },
  },
} as const;
