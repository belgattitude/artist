import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { getInteractionData } from '@/data/interactions';

type Props = {
  className?: string;
};

export const MainFooter: FC<Props> = (props) => {
  const { className = '' } = props;

  const interactions = getInteractionData();
  return (
    <footer className={twMerge('', className)}>
      <div className={'flex flex-row items-stretch justify-center gap-5'}>
        <div className={''}>
          {/*
          {interactions.map((interaction) => {
            const { title, slug, link } = interaction;
            return (
              <li key={slug}>
                {link ? <Link href={link}>{title}</Link> : title}
              </li>
            );
          })}
          */}
        </div>
        <div className={''}></div>
      </div>
    </footer>
  );
};
