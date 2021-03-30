import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Pricing: FC = () => (
  <Layout pageTitle="Pricing">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Pricing</h1>
    </main>
  </Layout>
)

export default Pricing;