import type { Metadata, Viewport } from 'next';

type NavLink = {
  title: string;
  href: string;
};

export type BaseSiteConfig = {
  defaultHtmlLang: 'en' | 'fr';
  layoutDefaults: {
    metadata: Metadata;
    viewport: Viewport;
  };
  publicStorage: {
    mediaBaseUrl: string;
  };
  mainNavLinks: NavLink[];
};

export const siteConfig = {
  defaultHtmlLang: 'en',
  publicStorage: {
    mediaBaseUrl: 'https://media.reflective-resonance.be',
  },
  mainNavLinks: [
    { title: 'Accueil', href: '/' },
    { title: 'Blog', href: '/blog' },
  ],
  layoutDefaults: {
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 2,
      themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'black' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
      ],
      // userScalable: true,
    },
    metadata: {
      title: 'Reflective Resonance',
      applicationName: 'Reflective Resonance',
      description: 'Resonances appears along the paths of life',
      // authors: [{ name: 'Sébastien Vanvelthem' }],
      manifest: '/icons/rr/site.webmanifest',
      icons: {
        icon: [
          {
            rel: 'icon',
            url: '/icons/rr/favicon.ico',
          },
          {
            rel: 'shortcut icon',
            url: '/icons/rr/favicon.ico',
          },
          {
            type: 'image/png',
            sizes: '32x32',
            url: '/icons/rr/favicon-32x32.png',
          },
          {
            type: 'image/png',
            sizes: '32x32',
            url: '/icons/rr/favicon-16x16.png',
          },
        ],
        apple: {
          sizes: '180x180',
          url: '/icons/rr/apple-touch-icon.png',
        },
      },
    },
  },
} as const satisfies BaseSiteConfig;

export type SiteConfig = typeof siteConfig;
