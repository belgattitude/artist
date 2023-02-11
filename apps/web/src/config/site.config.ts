export const siteConfig = {
  mainNavLinks: [{ title: 'Accueil', href: '/' }],
} as const;

export type SiteConfig = typeof siteConfig;
// export type MainNavLinks = typeof siteConfig.mainNavLinks;
