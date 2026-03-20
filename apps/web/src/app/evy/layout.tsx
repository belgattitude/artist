import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Staatliches } from 'next/font/google';
import type { ReactNode } from 'react';

import { fontElikaGorika } from '@/components/fonts/FontElikaGorika';
import { fontInter } from '@/components/fonts/FontInter';
import { fontMonoton } from '@/components/fonts/FontMonoton';
import { MainLayout } from '@/components/layout/main-layout';

export const metadata: Metadata = {};

const staatliches = Staatliches({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-family-staatliches',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body
        className={`h-full bg-black font-family-inter ${staatliches.className} ${fontInter.variable} ${fontMonoton.variable} ${fontElikaGorika.variable}`}
      >
        <MainLayout hideMainNav={true}>
          <div className={'flex text-[#fefefe]'}>{children}</div>
        </MainLayout>
      </body>
    </html>
  );
}
