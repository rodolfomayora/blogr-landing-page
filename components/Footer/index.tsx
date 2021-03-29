import React, { FC } from 'react';
import style from './style.module.scss';
import Conteiner from '../Container';
import ProductLinks from '../ProductLinks';
import CompanyLinks from '../CompanyLinks';
import ConnectLinks from '../ConnectLinks';

const Footer: FC = () => (
  <footer className={style.Footer}>
    <Conteiner>
      <img className={style.logo}
        src="/images/svg/logo.svg"
        alt="Blogr Logo"
      />
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