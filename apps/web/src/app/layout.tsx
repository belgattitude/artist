import '@/styles/globals.scss';
import type { ReactNode } from 'react';
import { MainLayout } from '@/components/layout/main-layout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <head />
      <body>
        <MainLayout hideMainNav={true}>
          <div className={'container'}>{children}</div>
        </MainLayout>
      </body>
    </html>
  );
}
