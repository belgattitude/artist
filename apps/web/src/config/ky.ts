import { KyFactory } from '@/lib/factory/ky.factory';

export const ky = new KyFactory({}).create({
  timeout: 10_000,
  retry: {
    limit: 1,
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
    afterStatusCodes: [413, 429, 503],
    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
  },
});
