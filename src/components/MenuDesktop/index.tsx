import React, { FC } from 'react';
import Link from 'next/link';
import style from './style.module.scss';
import DropDownDesktop from '../DropDownDesktop';
import ProductLinks from '../ProductLinks';
import CompanyLinks from '../CompanyLinks';
import ConnectLinks from '../ConnectLinks';
import { ButtonLink } from '#components/ButtonLink';

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
      <Link href="/account">
        <a className={style.logIn}>Login</a>
      </Link>
      
      <ButtonLink href="/account">
        Sign Up
      </ButtonLink>
    </div>
  </nav>
)

export default MenuDesktop;