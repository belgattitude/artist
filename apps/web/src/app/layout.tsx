import '@/styles/globals.scss';
import { Inter } from '@next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { MainLayout } from '@/components/layout/main-layout';

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'Reflective Resonance',
    template: '%s | Reflective Resonance',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <head />
      <body className={`${inter.className} ${inter.variable}`}>
        <MainLayout hideMainNav={true}>
          <div className={'flex w-full'}>{children}</div>
        </MainLayout>
      </body>
    </html>
  );
}
