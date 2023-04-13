/**
 * Specific eslint rules for this workspace, learn how to compose
 * @link https://github.com/belgattitude/perso/tree/main/packages/eslint-config-bases
 */

// Workaround for https://github.com/eslint/eslint/issues/3458
// eslint-disable-next-line import/no-unassigned-import
require('@belgattitude/eslint-config-bases/patch/modern-module-resolution');

const {
  getDefaultIgnorePatterns,
} = require('@belgattitude/eslint-config-bases/helpers');

module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
  ignorePatterns: [...getDefaultIgnorePatterns()],
  extends: [
    '@belgattitude/eslint-config-bases/typescript',
    '@belgattitude/eslint-config-bases/jest',
    // Apply prettier and disable incompatible rules
    '@belgattitude/eslint-config-bases/prettier-plugin',
  ],
  rules: {},
  overrides: [
    {
      files: ['src/generated/**/*.ts'],
      rules: {
        'prettier/prettier': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'import/export': 'off',
        'import/order': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    },
  ],
};
