import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Team: FC = () => (
  <Layout pageTitle="Team">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Team</h1>
    </main>
  </Layout>
)

export default Team;