import {
  Monoton,
  Space_Grotesk,
  Rubik_80s_Fade,
  Abyssinica_SIL,
  Anek_Latin,
  Rubik_Dirt,
} from 'next/font/google';
import type { FC, PropsWithChildren } from 'react';

export const fontMonoton = Rubik_Dirt({
  subsets: ['latin'],
  // weight: 'variable',
  weight: ['400'],
  variable: '--font-family-monoton',
});

export const FontLoaderMonoton: FC<PropsWithChildren> = (props) => (
  <div className={`${fontMonoton.className} ${fontMonoton.variable}`}>
    {props.children}
  </div>
);
