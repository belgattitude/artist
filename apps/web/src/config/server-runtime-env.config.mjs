// @ts-check

import { isParsableDsn } from '@httpx/dsn-parser';
import { z } from 'zod';

import { getValidatedServerRuntimeEnv } from '../lib/env/index.mjs';

const dsnSchema = z.custom((dsn) => isParsableDsn(dsn), 'Invalid DSN format.');

export const serverRuntimeEnvSchema = z.object({
  // --------------------------------------------------------------------
  // Global server side services
  // --------------------------------------------------------------------
  APP_CACHE_DSN: z.union([dsnSchema, z.literal('')]),
});

export const getServerRuntimeEnv = () =>
  getValidatedServerRuntimeEnv(serverRuntimeEnvSchema);
