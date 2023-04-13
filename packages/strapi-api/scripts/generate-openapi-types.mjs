import fs from 'fs-extra';

import openapiTS from 'openapi-typescript';
import pc from 'picocolors';
// import  from "dotenv-flow"

const source = process.env.OPENAPI_SOURCE;
const target = './src/generated/openapi/openapi.types.ts';

const localPath = new URL(source, import.meta.url);

console.info(`${pc.blue('Info')} Parsing OPENAPI ${source}`);
const output = await openapiTS(localPath, { pathParamsAsTypes: false });

try {
  fs.writeFileSync(target, output, { encoding: 'utf8' });
} catch (e) {
  console.error(`${pc.red('Error')} ${e.message}`);
  process.exit(1);
}

console.info(`${pc.green('Success')} Updated ${target}`);
process.exit(0);
