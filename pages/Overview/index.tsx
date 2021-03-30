import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Overview: FC = () => (
  <Layout pageTitle="Overview">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Overview</h1>
    </main>
  </Layout>
)

export default Overview;