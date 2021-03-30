import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const About: FC = () => (
  <Layout pageTitle="About">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>About</h1>
    </main>
  </Layout>
)

export default About;