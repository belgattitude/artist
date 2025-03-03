import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { describeRoute } from 'hono-openapi';
import { validator as vValidator } from 'hono-openapi/valibot';
import * as v from 'valibot';

import { bunnyStreamConfig } from '@/config/bunny.config';
import { BunnyApiVideos } from '@/lib/bunny/bunny-api-videos';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const app = new Hono().basePath('/api');

const searchRequestSchema = v.object({
  libraryId: v.optional(v.string()),
  collection: v.optional(v.string()),
});

app.get(
  '/bunny/list',
  describeRoute({
    description: 'Search',
    responses: {
      200: {
        description: 'Successful response',
      },
    },
  }),
  vValidator('query', searchRequestSchema),
  async (c) => {
    const _params = c.req.valid('query');
    const bunnyApi = new BunnyApiVideos(bunnyStreamConfig.embros);
    const videos = await bunnyApi.getVideoList({
      collection: 'd0784b24-f6fe-41db-a7e9-02ac2ee4805d',
    });

    return c.json({
      data: videos,
    });
  }
);

export const DELETE = handle(app);
export const GET = handle(app);
export const PATCH = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
