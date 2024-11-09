import type { FC } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { IconMenu } from '@/components/icons/IconMenu';
import { useMainLayoutStore } from '@/components/layout/main-layout-store';
import { MainSidebar } from '@/components/layout/sidebar/main-sidebar';
import { cn } from '@/components/utils';
import { siteConfig } from '@/config/site.config';

const { mainNavLinks } = siteConfig;

type Props = {
  className?: string;
};

export const MainNav: FC<Props> = (props) => {
  const { className } = props;
  const toggleSideBar = useMainLayoutStore(
    useShallow((state) => state.toggleSidebar)
  );
  const isSideBarOpen = useMainLayoutStore(
    useShallow((state) => state.isSidebarOpen)
  );

  return <></>;

  return (
    <div
      className={cn(
        'bg-white absolute top-0 right-0 flex flex-row justify-end',
        className
      )}
    >
      <nav>
        {isSideBarOpen ? (
          <IconMenu
            className={'size-6'}
            // onClick={toggleSideBar}
          />
        ) : (
          <IconMenu
            className={'size-32'}
            // onClick={toggleSideBar}
          />
        )}

        <MainSidebar mainLinks={mainNavLinks} />
      </nav>
    </div>
  );
};
