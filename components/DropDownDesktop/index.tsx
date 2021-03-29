import React, { FC } from 'react';
import DropDownDesktopProps from './type';
import style from './style.module.scss';

const DropDownDesktop: FC<DropDownDesktopProps> = ({
  children,
  toggleName
}) => {

  return (
    <div className={style.DropDownDesktop}>
      <div className={style.toggle}>
        <span className={style.toggleName}>{toggleName}</span>
      </div>

      <div className={style.itemWrapper}>
        <div className={style.items}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DropDownDesktop;