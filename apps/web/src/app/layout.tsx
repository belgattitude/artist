import { Analytics } from '@vercel/analytics/react';
import type { ReactNode } from 'react';
import { siteConfig } from '@/config/site.config';
import type { Viewport } from 'next';
import { ReactQueryProvider } from '../providers/ReactQueryProvider';

export const metadata = siteConfig.layoutDefaults.metadata;

export const viewport: Viewport = siteConfig.layoutDefaults.viewport;

// No html, no body, no fonts to allow routing group redefine a general layout
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ReactQueryProvider>{children}</ReactQueryProvider>
      <Analytics />
    </>
  );
}
