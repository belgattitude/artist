import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const testFiles = ['./src/**/*.test.{js,ts}', './test/**/*.test.{js,ts}'];

export default defineConfig({
  plugins: [tsconfigPaths()],
  esbuild: {
    target: ['node16'],
  },
  test: {
    globals: true,
    environment: 'node',
    passWithNoTests: true,
    setupFiles: './test/_setup/setupVitest.ts',
    cache: {
      dir: '../../.cache/vitest/api',
    },
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'clover'],
      all: true,
      include: ['src/**/*.{js,jsx,ts,tsx}'],
    },
    deps: {
      /*
      experimentalOptimizer: {
        enabled: false,
      }, */
    },
    include: testFiles,
    // To mimic Jest behaviour regarding mocks.
    // @link https://vitest.dev/config/#clearmocks
    clearMocks: true,
    mockReset: true,
    restoreMocks: true,
    exclude: [
      '**/node_modules/**',
      'dist/**',
      '**/coverage/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
});
