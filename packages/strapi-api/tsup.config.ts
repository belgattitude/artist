import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'],
  splitting: true,
  clean: true,
  dts: true,
  format: ['esm'],
  platform: 'browser',
  target: ['es2018', 'chrome80', 'edge20', 'firefox80', 'node18'],
  tsconfig: new URL('./tsconfig.build.json', import.meta.url).pathname,
  sourcemap: !options.watch,
  minify: !options.watch,
}));
