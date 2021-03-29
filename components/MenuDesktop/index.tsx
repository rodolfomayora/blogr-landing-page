import React, { FC } from 'react';
import style from './style.module.scss';
import DropDownDesktop from '../DropDownDesktop';
import ProductLinks from '../ProductLinks';
import CompanyLinks from '../CompanyLinks';
import ConnectLinks from '../ConnectLinks';
import PrimaryButton from '../PrimaryButton';


const MenuDesktop: FC = () => (
  <nav className={style.MenuDesktop}>
    <div className={style.linkList}>
      <DropDownDesktop toggleName="Product">
        <ProductLinks />
      </DropDownDesktop>
      <DropDownDesktop toggleName="Company">
        <CompanyLinks />
      </DropDownDesktop>
      <DropDownDesktop toggleName="Connect">
        <ConnectLinks />
      </DropDownDesktop>
    </div>

    <div className={style.autenthication}>
      <div className={style.logIn}>Login</div>
      <PrimaryButton buttonStyle="white">
        Sign Up
      </PrimaryButton>
    </div>
  </nav>
)

export default MenuDesktop;