export const siteConfig = {
  publicStorage: {
    mediaBaseUrl: 'https://media.reflective-resonance.be',
  },
  mainNavLinks: [{ title: 'Accueil', href: '/' }],
} as const;

export type SiteConfig = typeof siteConfig;
// export type MainNavLinks = typeof siteConfig.mainNavLinks;
