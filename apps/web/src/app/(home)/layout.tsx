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
import { UrqlProvider } from '../../providers/UrqlProvider';

export const metadata: Metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body
        className={`${fontInter.variable} ${fontMonoton.variable} bg-black`}
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
