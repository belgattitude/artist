import { Analytics } from '@vercel/analytics/react';
import type { ReactNode } from 'react';

export const metadata = {};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
