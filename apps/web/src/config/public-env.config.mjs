// @ts-check

import pc from 'picocolors';
import { z } from 'zod';

/**
 * @satisfies { Record<`NEXT_PUBLIC_${string}`, import('zod').ZodSchema> }
 */
const schema = {
  NEXT_PUBLIC_STRAPI_API_URL: z.string().url(),
};

const publicEnvSchema = z.object(schema);

const getValidatePublicEnv = () => {
  const parsedEnv = publicEnvSchema.safeParse(process.env);
  if (!parsedEnv.success) {
    if (process) {
      console.error(
        pc.red('error'.padEnd(6)).concat('- Invalid public env(s):'),
        Object.keys(parsedEnv.error.flatten().fieldErrors).join(',')
      );
      console.error(JSON.stringify(parsedEnv.error.format(), null, 2));
      // eslint-disable-next-line unicorn/no-process-exit
      process.exit(1);
    } else {
      throw new Error(
        `Invalid public env(s): ${JSON.stringify(
          parsedEnv.error.format(),
          null,
          2
        )}}`
      );
    }
  }
  return parsedEnv.data;
};

export const publicEnv = getValidatePublicEnv();
