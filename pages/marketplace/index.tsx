import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Marketplace: FC = () => (
  <Layout pageTitle="Marketplace">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Marketplace</h1>
    </main>
  </Layout>
)

export default Marketplace;