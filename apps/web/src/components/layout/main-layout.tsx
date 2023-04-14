'use client';

import type { FC, PropsWithChildren } from 'react';
import { MainFooter } from '@/components/layout/main-footer';
import { MainNav } from './main-nav';

type Props = PropsWithChildren & {
  hideMainNav?: boolean;
};

export const MainLayout: FC<Props> = (props) => {
  const { hideMainNav } = props;
  return (
    <>
      <MainNav extraCls={hideMainNav ? 'hidden' : ''} />
      <div className={''}>{props.children}</div>
      <MainFooter />
    </>
  );
};
