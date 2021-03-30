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
    <DropDown toggleName="Product">
      <ProductLinks />
    </DropDown>
    <DropDown toggleName="Company">
      <CompanyLinks />
    </DropDown>
    <DropDown toggleName="Connect">
      <ConnectLinks />
    </DropDown>

    <div className={style.autenthication}>
      <Link href="/Account">
        <a className={style.logIn}>Login</a>
      </Link>
        
      <PrimaryButton
        buttonStyle="gradient"
        path="/Account"
      >
        Sign Up
      </PrimaryButton>
    </div>
  </nav>
)

export default MenuMobile;