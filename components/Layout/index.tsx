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
      <meta name="keywords" content="blogr, blog, blogs, post, posts editor, content, management" />
      <meta name="theme-color" content="hsl(13, 100%, 72%)" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <Header />
    {children}
    <Footer />
    <AtributionBlock />
  </>
);

export default Layout;