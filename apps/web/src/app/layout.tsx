import type { ReactNode } from 'react';
import type { WritableDeep } from 'type-fest';
import { siteConfig } from '@/config/site.config';
export const metadata = siteConfig.defaultMetadata as WritableDeep<
  typeof siteConfig.defaultMetadata
>;

// No html, no body, no fonts to allow routing group redefine a general layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
