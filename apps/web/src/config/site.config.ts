import type { Metadata } from 'next';
import type { ReadonlyDeep } from 'type-fest';

type NavLink = {
  title: string;
  href: string;
};

export type BaseSiteConfig = {
  defaultHtmlLang: 'en' | 'fr';
  publicStorage: {
    mediaBaseUrl: string;
  };
  mainNavLinks: NavLink[];
  defaultMetadata: Metadata;
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
  defaultMetadata: {
    title: 'Reflective Resonance',
    applicationName: 'Reflective Resonance',
    description: 'Resonances appears along the paths of life',
    authors: [{ name: 'Sébastien Vanvelthem' }],
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
      userScalable: true,
    },
    themeColor: '#000000',
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
} as const satisfies ReadonlyDeep<BaseSiteConfig>;

export type SiteConfig = typeof siteConfig;
