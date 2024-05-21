import React, { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import DropDown from '../DropDown';
import ProductLinks from '../ProductLinks';
import CompanyLinks from '../CompanyLinks';
import ConnectLinks from '../ConnectLinks';
import { ButtonLinkGradient } from '#components/ButtonLinkGradient';

const MenuMobile: FC = () => (
  <nav className={style.MenuMobile}>
    <DropDown toggleName="product">
      <ProductLinks />
    </DropDown>
    <DropDown toggleName="company">
      <CompanyLinks />
    </DropDown>
    <DropDown toggleName="connect">
      <ConnectLinks />
    </DropDown>

    <div className={style.autenthication}>
      <Link href="/account">
        <a className={style.logIn}>Login</a>
      </Link>
        
      <ButtonLinkGradient href="/account">
        Sign Up
      </ButtonLinkGradient>
    </div>
  </nav>
)

export default MenuMobile;