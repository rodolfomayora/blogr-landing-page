import React, { FC } from 'react';
import style from './style.module.scss';
import ProductLinks from '../ProductLinks';
import CompanyLinks from '../CompanyLinks';
import ConnectLinks from '../ConnectLinks';

const Footer: FC = () => (
  <footer className={style.Footer}>
    <img className={style.logo}
      src="/images/svg/logo.svg"
      alt="Blogr Logo"
    />
    <nav className={style.navLinks}>
      <div className={style.categoryLinks}>Product</div>
      <ProductLinks />
    </nav>
    <nav className={style.navLinks}>
      <div className={style.categoryLinks}>Company</div>
      <CompanyLinks />
    </nav>
    <nav className={style.navLinks}>
      <div className={style.categoryLinks}>Connect</div>
      <ConnectLinks />
    </nav>
  </footer>
);

export default Footer;