const {
  getDefaultIgnorePatterns,
} = require('@belgattitude/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    // project: 'tsconfig.json',
    project: true,

    // extraFileExtensions: ['.mdx'],
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  ignorePatterns: [
    ...getDefaultIgnorePatterns(),
    'src/gql/**/*',
    'src/generated/**/*',
  ],
  extends: [
    '@belgattitude/eslint-config-bases/typescript',
    '@belgattitude/eslint-config-bases/simple-import-sort',
    '@belgattitude/eslint-config-bases/import-x',
    '@belgattitude/eslint-config-bases/regexp',
    '@belgattitude/eslint-config-bases/react',
    '@belgattitude/eslint-config-bases/react-query',
    '@belgattitude/eslint-config-bases/tailwind',
    '@belgattitude/eslint-config-bases/storybook',
    'next/core-web-vitals',
    // after next plugins to avoid parser errors
    // '@belgattitude/eslint-config-bases/mdx',
    // Apply prettier and disable incompatible rules
    '@belgattitude/eslint-config-bases/prettier-plugin',
  ],
  rules: {
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'unicorn/consistent-destructuring': 'off',
  },
  overrides: [
    {
      files: ['next.config.mjs', 'src/lib/env/*.mjs'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/order': 'off',
      },
    },
    {
      files: ['next.config.mjs', 'src/lib/env/*.mjs'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        'import/order': 'off',
      },
    },
  ],
};
