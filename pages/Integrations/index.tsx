import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Integrations: FC = () => (
  <Layout pageTitle="Integrations">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Integrations</h1>
    </main>
  </Layout>
)

export default Integrations;