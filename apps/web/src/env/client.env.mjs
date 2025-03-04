// @ts-check

/*
 * Please avoid to use valibot default and/or coercion. Default should live under the
 * main Next.js committed ".env" file. As coercion is only available when passing through
 * createEnv it can create some ambiguities between tools consuming the env
 * and might create tree-shakability limits.
 */

import { createEnv } from '@t3-oss/env-nextjs';
import * as v from 'valibot';

export const clientEnv = createEnv({
  client: {
    NEXT_PUBLIC_REACT_QUERY_DEVTOOLS_ENABLED: v.picklist(['true', 'false']),
    NEXT_PUBLIC_STRAPI_API_URL: v.pipe(v.string(), v.url()),
  },
  runtimeEnv: {
    NEXT_PUBLIC_REACT_QUERY_DEVTOOLS_ENABLED:
      process.env.NEXT_PUBLIC_REACT_QUERY_DEVTOOLS_ENABLED,
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  },
  emptyStringAsUndefined: true,
});
