import React, { FC } from 'react';
import PrimaryButtonProps from './type';
import style from './style.module.scss';

const PrimaryButton: FC<PrimaryButtonProps> = ({
  children = 'Button',
  buttonStyle = 'white'
}) => {
  const whiteStyle: string = style.PrimaryButon + ' ' + style.white;
  const transparent: string = style.PrimaryButon + ' ' + style.transparent;
  const gradient: string = style.PrimaryButon + ' ' + style.gradient;
  // const gradient: string
  const setStyle = (color: string): string => {
    if (color === 'white') return whiteStyle;
    if (color === 'transparent') return transparent;
    if (color === 'gradient') return gradient;
  }

  return (
    <div className={setStyle(buttonStyle)}>
      {children}
    </div>
  );
}

export default PrimaryButton;