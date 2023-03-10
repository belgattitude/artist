// @ts-check

import path from 'node:path';
import { fileURLToPath } from 'node:url';

import withBundleAnalyzer from '@next/bundle-analyzer';
import nextMdx from '@next/mdx';
import { createSecureHeaders } from 'next-secure-headers';
import { publicEnv } from './src/config/public-env.mjs';

// @ts-ignore
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const workspaceRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
  '..'
);

const withMDX = nextMdx({
  extension: /\.mdx?$/,
});

const isProd = process.env.NODE_ENV === 'production';
const enableCSP = true;
const enableVanillaExtract = true;

const trueEnv = ['true', '1', 'yes'];
const NEXTJS_IGNORE_TYPECHECK = trueEnv.includes(
  process.env?.NEXTJS_IGNORE_TYPECHECK ?? 'false'
);
const NEXTJS_IGNORE_LINT = trueEnv.includes(
  process.env?.NEXTJS_IGNORE_LINT ?? 'false'
);

const strapiUrl = publicEnv.NEXT_PUBLIC_STRAPI_API_URL;
const { hostname: strapiHostname } = new URL(strapiUrl);

// @link https://github.com/jagaapple/next-secure-headers
const secureHeaders = createSecureHeaders({
  contentSecurityPolicy: {
    directives: enableCSP
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
            'https://fonts.gstatic.com',
            strapiUrl,
          ],
          imgSrc: ["'self'", 'https:', 'http:', 'data:'],
          mediaSrc: ["'self'", 'https:', 'http:'],
          workerSrc: ['blob:'],
        }
      : {},
  },
  ...(enableCSP
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
  swcMinify: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  output: 'standalone',

  transpilePackages: isProd
    ? [
        // dist make usage of nullish ?.
        'tailwind-merge',
      ]
    : [],

  eslint: { ignoreDuringBuilds: NEXTJS_IGNORE_LINT },

  images: {
    // Reduce the number of possibles (no real-need)
    deviceSizes: [750, 828, 1080, 1200], // default: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [32, 48, 64, 96], // default: [16, 32, 48, 64, 96, 128, 256, 384]
    // Allow domains and set default ttl if not provided upstream
    domains: [strapiHostname, 'images.unsplash.com', 'media.failwell.be'],
    minimumCacheTTL: 86_400,
  },

  async redirects() {
    return [
      {
        source: '/admin123',
        destination: `${strapiUrl}/admin`,
        permanent: false,
      },
    ];
  },

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

  experimental: {
    appDir: true,
    // https://beta.nextjs.org/docs/configuring/typescript#statically-typed-links
    typedRoutes: true,
    mdxRs: true,
    // https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    outputFileTracingRoot: workspaceRoot,
    outputFileTracingExcludes: {
      // '/api/hello': ['./un-necessary-folder/**/*'],
    },
    // https://nextjs.org/docs/messages/google-fonts-missing-subsets
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
    // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
    esmExternals: true,
  },

  typescript: {
    ignoreBuildErrors: NEXTJS_IGNORE_TYPECHECK,
  },

  webpack: (config, { webpack, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.(js|ts)x?$/,
      use: [
        {
          loader: '@svgr/webpack',
          // https://react-svgr.com/docs/webpack/#passing-options
          options: {
            svgo: true,
            // @link https://github.com/svg/svgo#configuration
            svgoConfig: {
              multipass: false,
              datauri: 'base64',
              js2svg: {
                indent: 2,
                pretty: false,
              },
            },
          },
        },
      ],
    });

    return config;
  },
};

if (enableVanillaExtract) {
  const withVanillaExtract = createVanillaExtractPlugin();
  nextConfig = withVanillaExtract(nextConfig, {
    debug: !isProd,
  });
}

if (process.env.ANALYZE === 'true') {
  nextConfig = withBundleAnalyzer({
    enabled: true,
  })(nextConfig);
}

export default withMDX(nextConfig);
