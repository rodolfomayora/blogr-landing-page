import React, { FC } from 'react';
import LayoutProps from './type';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import AtributionBlock from '../AtributionBlock';

const Layout: FC<LayoutProps> = ({ children, pageTitle = 'Default' }) => (
  <>
    <Head>
      <title>{pageTitle} {' '} | Blogr Landing Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="page description" />
    </Head>
    <Header />
    {children}
    <Footer />
    <AtributionBlock />
  </>
);

export default Layout;