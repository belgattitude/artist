import '@/styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { fontElikaGorika } from '@/components/fonts/FontElikaGorika';
import { fontInter } from '@/components/fonts/FontInter';
import { fontMonoton } from '@/components/fonts/FontMonoton';
import { MainLayout } from '@/components/layout/main-layout';
import { UrqlProvider } from '../../providers/UrqlProvider';

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body
        className={`h-full ${fontInter.variable} ${fontMonoton.variable} ${fontElikaGorika.variable}`}
      >
        <UrqlProvider>
          <MainLayout hideMainNav={true}>
            <div
              className={
                'flex w-full bg-black font-family-inter text-[#fefefe]'
              }
            >
              {children}
            </div>
          </MainLayout>
        </UrqlProvider>
      </body>
    </html>
  );
}
