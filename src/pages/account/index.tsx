import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Account: FC = () => (
  <Layout pageTitle="Account">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Account</h1>
    </main>
  </Layout>
)

export default Account;