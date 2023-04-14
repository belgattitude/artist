import type { CodegenConfig } from '@graphql-codegen/cli';

const schemaUrl = process?.env?.GRAPHQL_INTROSPECTION_URL ?? '';

if (schemaUrl.trim() === '') {
  throw new Error(`Missing 'GRAPHQL_INTROSPECTION_URL' env.`);
}

const config: CodegenConfig = {
  overwrite: true,
  schema: schemaUrl,
  documents: ['src/**/*.tsx', 'src/**/*.ts', '!src/gql/**/*'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    './src/gql/': {
      preset: 'client',
      plugins: [],
      // https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#config-api
      config: {
        defaultScalarType: 'unknown',
        disableDescriptions: true,
        enumPrefix: false, // avoid adding typesPrefix
        useTypeImports: true,
        typesPrefix: 'I',
        emitLegacyCommonJSImports: false, // set this to true if problems with bundlers
        // fragmentMasking: false,
      },
    },

    './src/gql/hooks.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
      presetConfig: {},
      config: {
        defaultScalarType: 'unknown',
        disableDescriptions: true,
        enumPrefix: false, // avoid adding typesPrefix
        useTypeImports: true,
        typesPrefix: 'I',
        emitLegacyCommonJSImports: false, // set this to true if problems with bundlers
      },
    },
  },
};

export default config;
