// @ts-check

import { z } from 'zod';
import { isParsableDsn } from '@soluble/dsn-parser';

const publicEnvSchema = z.object({
  APP_CACHE_DSN: z.union([
    z.custom((dsn) => isParsableDsn(dsn), 'APP_CACHE_DSN is invalid'),
    z.literal(''),
  ]),
  NEXT_PUBLIC_STRAPI_API_URL: z.string().url(),
});

const parsedPublicEnv = publicEnvSchema.safeParse(process.env);

if (!parsedPublicEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(parsedPublicEnv.error.format(), null, 4)
  );
  process.exit(1);
}

export const publicEnv = parsedPublicEnv.data;
