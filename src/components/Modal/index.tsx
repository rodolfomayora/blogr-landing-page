import React, { FC, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import style from './style.module.scss';

const Modal: FC = ({ children }) => {

  const [element, setElement] = useState<any>(() => {
    return document.getElementById('modal');
  })

  useEffect(() => {
    return () => setElement(null);
  }, [])

  return ReactDOM.createPortal(
    <div className={style.Modal}>
      <div className={style.wrapper}>
        {children}
      </div>
    </div>,
    element
  )
}

export default Modal