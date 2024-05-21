import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Careers: FC = () => (
  <Layout pageTitle="Careers">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Careers</h1>
    </main>
  </Layout>
)

export default Careers;