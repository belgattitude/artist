import type { FC } from 'react';

import { cn } from '@/components/utils';

type Props = {
  className?: string;
};

export const IconMenu: FC<Props> = (props) => {
  const { className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn('', className)}
    >
      <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
    </svg>
  );
};
