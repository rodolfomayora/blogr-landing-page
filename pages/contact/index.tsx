import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Contact: FC = () => (
  <Layout pageTitle="Contact">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Contact</h1>
    </main>
  </Layout>
)

export default Contact;