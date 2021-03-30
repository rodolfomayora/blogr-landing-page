import React, { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import Conteiner from '../Container';
import ProductLinks from '../ProductLinks';
import CompanyLinks from '../CompanyLinks';
import ConnectLinks from '../ConnectLinks';

const Footer: FC = () => (
  <footer className={style.Footer}>
    <Conteiner>
      <Link href="/">
        <a className={style.logoWrapper}>
          <img className={style.logo}
            src="/images/svg/logo.svg"
            alt="Blogr Logo"
          />
        </a>
      </Link>
      
      <div className={style.linksWrapper}>
        <div className={style.titleLinks}>Product</div>
        <nav className={style.linkList}>
          <ProductLinks />
        </nav>
      </div>
      <div className={style.linksWrapper}>
        <div className={style.titleLinks}>Company</div>
        <nav className={style.linkList}>
          <CompanyLinks />
        </nav>
      </div>
      <div className={style.linksWrapper}>
        <div className={style.titleLinks}>Connect</div>
        <nav className={style.linkList}>
          <ConnectLinks />
        </nav>
      </div>
    </Conteiner>
  </footer>
);

export default Footer;