import '@/styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { fontInter } from '@/components/fonts/FontInter';
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
      <body className={`${fontInter.className} ${fontInter.variable} bg-white`}>
        <div className={'flex w-full'}>{children}</div>
      </body>
    </html>
  );
}
