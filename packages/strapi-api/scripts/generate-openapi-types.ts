import { writeFileSync } from 'node:fs';

import openapiTS, { astToString } from 'openapi-typescript';
import pc from 'picocolors';
import * as v from 'valibot';

const source = process.env.OPENAPI_SOURCE;
const target = './src/generated/openapi/openapi.types.ts';

const envSchema = v.object({
  OPENAPI_SOURCE: v.string(),
});

const params = v.parse(envSchema, process.env);

const localPath = new URL(params.OPENAPI_SOURCE, import.meta.url);

console.info(`${pc.blue('Info')} Parsing OPENAPI ${source}`);
const nodes = await openapiTS(localPath, { pathParamsAsTypes: false });

try {
  writeFileSync(target, astToString(nodes), { encoding: 'utf8' });
} catch (e) {
  console.error(`${pc.red('Error')} ${(e as Error).message}`);
  // eslint-disable-next-line unicorn/no-process-exit
  process.exit(1);
}

console.info(`${pc.green('Success')} Updated ${target}`);
// eslint-disable-next-line unicorn/no-process-exit
process.exit(0);
