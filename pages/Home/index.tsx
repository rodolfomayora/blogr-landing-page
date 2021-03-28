import React, { FC } from 'react';
import { Layout, Container, PrimaryButton } from '../../components';
import styles from './style.module.scss';

const Home: FC = () => (
  <Layout pageTitle='Home'>
    <main className={styles.Home}>
      
      <Container>
        <section>
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div>
            <PrimaryButton>Start for Free</PrimaryButton>
            <PrimaryButton buttonStyle='transparent'>
              Learn More
            </PrimaryButton>
          </div>
        </section>

      </Container>
    </main>
  </Layout>
);

export default Home;