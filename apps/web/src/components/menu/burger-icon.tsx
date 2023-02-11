'use client';

import type { FC, ImgHTMLAttributes } from 'react';
import Icon from '@/public/icons/menu/burger-advanced-svgrepo-com.svg';

type Props = ImgHTMLAttributes<HTMLImageElement>;
export const BurgerIcon: FC<Props> = (props) => {
  const { className = '', ...rest } = props;
  return <Icon className={className} {...rest} />;
};
