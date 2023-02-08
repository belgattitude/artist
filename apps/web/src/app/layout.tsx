import '@/styles/globals.scss';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={'en'}>
      <head />
      <body>
        <div className={'container'}>{children}</div>
      </body>
    </html>
  );
}
