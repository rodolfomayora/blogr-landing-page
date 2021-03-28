import React, { FC } from 'react';
import { Layout, Container } from '../../components';
import styles from './style.module.scss';

const Home: FC = () => (
  <Layout pageTitle='Home'>
    <main className={styles.Home}>
      <Container>
        <section>
          <h1>HOLA Layout</h1>
        </section>
      </Container>
    </main>
  </Layout>
);

export default Home;