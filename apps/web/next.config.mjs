// @ts-check

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createSecureHeaders } from 'next-secure-headers';

import { buildEnv } from './src/env/build.env.mjs';
import { clientEnv } from './src/env/client.env.mjs';

const workspaceRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..'
);

const isProd = process.env.NODE_ENV === 'production';

const strapiUrl = clientEnv.NEXT_PUBLIC_STRAPI_API_URL;
const { hostname: strapiHostname } = new URL(strapiUrl);

// @link https://github.com/jagaapple/next-secure-headers

const secureHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    directives:
      buildEnv.NEXT_BUILD_ENV_CSP === 'true'
        ? {
            defaultSrc: "'self'",
            // 'unsafe-inline' for emotion... possible to add a hash too
            styleSrc: ["'self'", "'unsafe-inline'"],
            // 'unsafe-inline' for react-markdown
            scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
            scriptSrcElem: [
              "'self'",
              "'unsafe-eval'",
              "'unsafe-inline'",
              'blob:', // for threejs to work
            ],
            frameSrc: ["'self'"],
            connectSrc: [
              "'self'",
              'https://vitals.vercel-insights.com',
              'https://media.failwell.be',
              'https://b-artist.failwell.be',
              'https://fonts.gstatic.com',
              strapiUrl,
            ],
            imgSrc: ["'self'", 'https:', 'http:', 'data:'],
            mediaSrc: ["'self'", 'https:', 'http:'],
            workerSrc: ['blob:'],
          }
        : {},
  },
  ...(buildEnv.NEXT_BUILD_ENV_CSP === 'true'
    ? {
        forceHTTPSRedirect: [
          true,
          { maxAge: 60 * 60 * 24 * 4, includeSubDomains: true },
        ],
      }
    : {}),
  referrerPolicy: 'same-origin',
});

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  httpAgentOptions: {
    keepAlive: true,
  },

  transpilePackages: isProd
    ? [
        // dist make usage of nullish ?.
        'tailwind-merge',
      ]
    : [],

  eslint: { ignoreDuringBuilds: buildEnv.NEXT_BUILD_IGNORE_ESLINT === 'true' },

  images: {
    // Reduce the number of possibles (no real-need)
    deviceSizes: [750, 828, 1080, 1200], // default: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96], // default: [16, 32, 48, 64, 96, 128, 256, 384]
    // Allow domains and set default ttl if not provided upstream
    domains: [
      strapiHostname,
      'images.unsplash.com',
      'media.failwell.be',
      'b-cdn.net',
    ],
    minimumCacheTTL: 86_400,
  },

  // eslint-disable-next-line @typescript-eslint/require-await
  async redirects() {
    return [
      {
        source: '/admin123',
        destination: `${strapiUrl}/admin`,
        permanent: false,
      },
    ];
  },

  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        // All page routes, not the api ones
        source: '/:path((?!api).*)*',
        headers: [
          ...secureHeaders,
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'same-origin' },
        ],
      },
    ];
  },

  // output: 'standalone',

  experimental: {
    // https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    // outputFileTracingRoot: workspaceRoot,
    // Caution if using pnpm you might also need to consider that things are hoisted
    // under node_modules/.pnpm/<something variable>. Depends on version

    // outputFileTracingExcludes: {
    //  '*': [
    //    '**/node_modules/@swc/core-linux-x64-gnu/**/*',
    //    '**/node_modules/@swc/core-linux-x64-musl/**/*',
    //    // If you're nor relying on mdx-remote... drop this
    //    '**/node_modules/esbuild/linux/**/*',
    //    '**/node_modules/webpack/**/*',
    //    '**/node_modules/terser/**/*',
    //    // If you're not relying on sentry edge or any weird stuff... drop this too
    //    // https://github.com/getsentry/sentry-javascript/pull/6982
    //    '**/node_modules/rollup/**/*',
    //  ],
    // },

    // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
    esmExternals: true,
  },

  typescript: {
    ignoreBuildErrors: buildEnv.NEXT_BUILD_IGNORE_TYPECHECK === 'true',
  },

  productionBrowserSourceMaps:
    buildEnv.NEXT_BUILD_PRODUCTION_SOURCEMAPS === 'true',

  compiler: {
    ...(process.env.NODE_ENV === 'production'
      ? {
          removeConsole: {
            exclude: ['error', 'warning'],
          },
          reactRemoveProperties: {
            properties: ['^data-testid$'],
          },
        }
      : {}),
  },
};

if (process.env.ANALYZE === 'true') {
  try {
    const withBundleAnalyzer = await import('@next/bundle-analyzer').then(
      (mod) => mod.default
    );
    nextConfig = withBundleAnalyzer({
      enabled: true,
    })(nextConfig);
  } catch {
    // Do nothing, @next/bundle-analyzer is probably purged in prod or not installed
  }
}

export default nextConfig;
