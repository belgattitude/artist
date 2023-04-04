import path from 'node:path';
import localFont from 'next/font/local';
import type { FC, PropsWithChildren } from 'react';

export const fontElikaGorika = localFont({
  src: '../../../public/fonts/ElikaGorika/Elika_Gorica.woff2',
  display: 'swap',
  variable: '--font-family-elika-gorika',
});

export const FontLoaderElikaGorika: FC<PropsWithChildren> = (props) => (
  <div className={`${fontElikaGorika.className} ${fontElikaGorika.variable}`}>
    {props.children}
  </div>
);
