import React, { FC } from 'react';
import PrimaryButtonProps from './type';
import style from './style.module.scss';

import Link from 'next/link';

const PrimaryButton: FC<PrimaryButtonProps> = ({
  children = 'Button',
  buttonStyle = 'white',
  path = '/'
}) => {

  const whiteStyle: string = style.PrimaryButon + ' ' + style.white;
  const transparent: string = style.PrimaryButon + ' ' + style.transparent;
  const gradient: string = style.PrimaryButon + ' ' + style.gradient;

  const setStyle = (color: string): string => {
    if (color === 'white') return whiteStyle;
    if (color === 'transparent') return transparent;
    if (color === 'gradient') return gradient;
  }

  return (
    <Link href={path}>
      <a className={setStyle(buttonStyle)}>
        {children}
      </a>
    </Link>
  );
}

export default PrimaryButton;