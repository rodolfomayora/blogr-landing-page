import React, { FC, useState } from 'react';
import DropDownProps from './type';
import style from './style.module.scss';

const DropDown: FC<DropDownProps> = ({ children, toggleName }) => {

  const initialStyle: string = style.toggle;
  const activeStyle: string = style.toggle + ' ' + style.active;
  const [isToggle, setIsToggle] = useState<boolean>(false);

  return (
    <div className={style.DropDown}>
      <div className={isToggle ? activeStyle : initialStyle}
        onClick={() => setIsToggle(crr => !crr)}
      >
        {toggleName}
      </div>
      {
        isToggle && (
          <div className={style.items}>
            {children}
          </div>
        )
      }
    </div>
  )
}

export default DropDown;