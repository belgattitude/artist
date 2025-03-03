// @ts-check
import { createEnv } from '@t3-oss/env-nextjs';
import * as v from 'valibot';

export const serverEnv = createEnv({
  server: {
    BUNNY_STREAM_ACCESS_KEY: v.optional(v.pipe(v.string())),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  // },
  // For Next.js >= 13.4.4, you can just reference process.env:
  experimental__runtimeEnv: process.env,
});
