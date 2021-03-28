import React, { FC } from 'react';
import Head from 'next/head'
import styles from './style.module.scss';

const Home: FC = () => (
  <div className={styles.Home}>
    <Head>
      <title>Home | Blogr Landing Page</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="page description" />
      <meta name="keywords" content="blogr, blog, blogs, post, posts editor, content, management" />
      <link rel="icon" href="/favicon.png" />
    </Head>

    <section>
      <h1>HOLA</h1>
    </section>
  </div>
);

export default Home;