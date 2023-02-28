import '@/styles/globals.css';
import type { Metadata } from 'next';
import {
  Inter,
  Space_Grotesk,
  Rubik_Dirt,
  Press_Start_2P,
  Monoton,
  Rubik_80s_Fade,
} from 'next/font/google';
import type { ReactNode } from 'react';
import { MainLayout } from '@/components/layout/main-layout';

const inter = Inter({
  subsets: ['latin'],
  // weight: 'variable',
  weight: ['400'],
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
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} ${inter.variable} bg-white`}>
        <div className={'flex w-full'}>{children}</div>
      </body>
    </html>
  );
}
