import React, { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import DropDown from '../DropDown';
import ProductLinks from '../ProductLinks';
import CompanyLinks from '../CompanyLinks';
import ConnectLinks from '../ConnectLinks';
import PrimaryButton from '../PrimaryButton';


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
        
      <PrimaryButton
        buttonStyle="gradient"
        path="/account"
      >
        Sign Up
      </PrimaryButton>
    </div>
  </nav>
)

export default MenuMobile;