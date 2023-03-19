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
import { fontInter } from '@/components/fonts/FontInter';
import { fontMonoton } from '@/components/fonts/FontMonoton';
import { MainLayout } from '@/components/layout/main-layout';

export const metadata: Metadata = {
  title: {
    default: 'Reflective Resonance',
    template: '%s | Reflective Resonance',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${fontInter.variable} ${fontMonoton.variable}`}>
        <MainLayout hideMainNav={true}>
          <div className={'font-family-inter flex h-[100vh] w-full'}>
            {children}
          </div>
        </MainLayout>
      </body>
    </html>
  );
}
