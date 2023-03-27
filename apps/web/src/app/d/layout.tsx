import '@/styles/globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { fontInter } from '@/components/fonts/FontInter';

export const metadata: Metadata = {
  title: {
    default: 'Reflective Resonance',
    template: '%s | Reflective Resonance',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <body className={`${fontInter.className} ${fontInter.variable} bg-black`}>
        <div className={'flex w-full'}>{children}</div>
      </body>
    </html>
  );
}
