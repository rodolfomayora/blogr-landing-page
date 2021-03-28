import React, { FC } from 'react';
import PrimaryButtonProps from './type';
import style from './style.module.scss';

const PrimaryButton: FC<PrimaryButtonProps> = ({
  children = 'Button',
  buttonStyle = 'white'
}) => {
  
  const setStyle = (color: string): string => {
    if (color === 'white')
      return style.PrimaryButon + ' ' + style.white;
    if (color === 'transparent')
      return style.PrimaryButon + ' ' + style.transparent;
  }

  return (
    <div className={setStyle(buttonStyle)}>
      {children}
    </div>
  );
}

export default PrimaryButton;