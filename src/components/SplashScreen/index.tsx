import React, { FC, useState, useEffect } from 'react';
import style from './style.module.scss';

const SplashScreen: FC = () => {
  const visible: string = style.SplashScreen;
  const hidden: string = style.SplashScreen + ' ' + style.hidden;
  const [componentStyle, setCompnentStyle] = useState<string>(visible);
  const [isLoad, setIsLoad] = useState<boolean>(true);
  useEffect(() => {

    const init = () => {
      window.setTimeout(() => {
        setCompnentStyle(hidden)
      }, 1000);

      window.setTimeout(() => {
        setIsLoad(false)
      }, 2000);
    }

    window.addEventListener('load', init);
  }, [])
  
  return isLoad ? (
    <div className={componentStyle}>
      <img className={style.logo}
        src="/images/svg/logo.svg"
        alt="blogr logo"  
      />
    </div>
  ) : (
    <></>
  )
}

export default SplashScreen;