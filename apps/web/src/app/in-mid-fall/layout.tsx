import '@/styles/globals.css';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { fontElikaGorika } from '@/components/fonts/FontElikaGorika';
import { fontInter } from '@/components/fonts/FontInter';
import { fontMonoton } from '@/components/fonts/FontMonoton';
import { MainLayout } from '@/components/layout/main-layout';

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body
        className={`h-full bg-white font-family-inter ${fontInter.variable} ${fontMonoton.variable} ${fontElikaGorika.variable}`}
      >
        <MainLayout hideMainNav={true}>
          <div className={'flex text-[#fefefe]'}>{children}</div>
        </MainLayout>
      </body>
    </html>
  );
}
