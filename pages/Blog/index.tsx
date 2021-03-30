import React, { FC } from 'react';
import style from './style.module.scss';
import { Layout } from '../../components';

const Blog: FC = () => (
  <Layout pageTitle="Blog">
    <main className={style.PageContainer}>
      <h1 className={style.pageTitle}>Blog</h1>
    </main>
  </Layout>
)

export default Blog;