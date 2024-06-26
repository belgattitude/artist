import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { useMainLayoutStore } from '@/components/layout/main-layout-store';
import { MainSidebar } from '@/components/layout/sidebar/main-sidebar';
import { BurgerIcon } from '@/components/menu/burger-icon';
import { siteConfig } from '@/config/site.config';
import CloseIcon from '@/public/icons/menu/cross-svgrepo-com.svg';

const { mainNavLinks } = siteConfig;

type Props = {
  className?: string;
};

export const MainNav: FC<Props> = (props) => {
  const { className } = props;
  const toggleSideBar = useMainLayoutStore((state) => state.toggleSidebar);
  const isSideBarOpen = useMainLayoutStore((state) => state.isSidebarOpen);

  return (
    <div
      className={twMerge(
        'bg-white absolute top-0 right-0 flex flex-row justify-end',
        className
      )}
    >
      <nav>
        {isSideBarOpen ? (
          <CloseIcon className={'size-6'} onClick={toggleSideBar} />
        ) : (
          <BurgerIcon className={'size-32'} onClick={toggleSideBar} />
        )}

        <MainSidebar mainLinks={mainNavLinks} />
      </nav>
    </div>
  );
};
