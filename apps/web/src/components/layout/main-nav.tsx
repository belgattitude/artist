import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useMainLayoutStore } from '@/components/layout/main-layout-store';
import { MainSidebar } from '@/components/layout/sidebar/main-sidebar';
import { BurgerIcon } from '@/components/menu/burger-icon';
import { siteConfig } from '@/config/site.config';
import CloseIcon from '@/public/icons/menu/cross-svgrepo-com.svg';

const { mainNavLinks } = siteConfig;

export const MainNav: FC<{ className?: string; extraCls?: string }> = (
  props
) => {
  const { className, extraCls } = props;
  const toggleSideBar = useMainLayoutStore((state) => state.toggleSidebar);
  const isSideBarOpen = useMainLayoutStore((state) => state.isSidebarOpen);

  return (
    <div className={twMerge(className, extraCls)}>
      <nav>
        {isSideBarOpen ? (
          <BurgerIcon className={'h-6 w-6'} onClick={toggleSideBar} />
        ) : (
          <CloseIcon className={'h-6 w-6'} onClick={toggleSideBar} />
        )}

        <MainSidebar mainLinks={mainNavLinks} />
      </nav>
    </div>
  );
};
