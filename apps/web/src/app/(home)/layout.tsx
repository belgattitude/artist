import '@/styles/globals.css';
import type { Metadata } from 'next';
import {
  Inter,
  /*
  Space_Grotesk,
  Rubik_Dirt,
  Press_Start_2P,
  Monoton,
  Rubik_80s_Fade, */
} from 'next/font/google';
import type { ReactNode } from 'react';
import { fontElikaGorika } from '@/components/fonts/FontElikaGorika';
import { fontInter } from '@/components/fonts/FontInter';
import { fontMonoton } from '@/components/fonts/FontMonoton';
import { MainLayout } from '@/components/layout/main-layout';
import { UrqlProvider } from '../../providers/UrqlProvider';
/*
<link rel="apple-touch-icon" sizes="180x180" href="/icons/rr/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/icons/rr/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/rr/favicon-16x16.png">
<link rel="manifest" href="/icons/rr/site.webmanifest">
<link rel="mask-icon" href="/icons/rr/safari-pinned-tab.svg" color="#5bbad5">
<link rel="shortcut icon" href="/icons/rr/favicon.ico">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-config" content="/icons/rr/browserconfig.xml">
<meta name="theme-color" content="#ffffff">
*/
export const metadata: Metadata = {
  title: 'Reflective Resonance',
  description: 'Resonances appears along the paths of life',
  viewport: 'width=device-width, initial-scale=1',
  applicationName: 'Reflective Resonance',
  icons: {
    icon: [
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
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body
        className={`${fontInter.variable} ${fontMonoton.variable} ${fontElikaGorika.variable}`}
      >
        <UrqlProvider>
          <MainLayout hideMainNav={true}>
            <div className={'font-family-inter flex h-[100vh] w-full'}>
              {children}
            </div>
          </MainLayout>
        </UrqlProvider>
      </body>
    </html>
  );
}
