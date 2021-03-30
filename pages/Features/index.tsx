import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Features: FC = () => (
  <Layout pageTitle="Features">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Features</h1>
    </main>
  </Layout>
)

export default Features;