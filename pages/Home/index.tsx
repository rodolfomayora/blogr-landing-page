import React, { FC } from 'react';
import { Layout, Container, PrimaryButton } from '../../components';
import style from './style.module.scss';

const Home: FC = () => (
  <Layout pageTitle='Home'>
    <main className={style.Home}>

      {/* Main Section */}
      <section className={style.mainSection}>
        <Container>
          <h1 className={style.mainTitle}>
            A modern publishing platform
          </h1>
          <p className={style.mainParagraph}>
            Grow your audience and build your online brand
          </p>
          <div className={style.mainButtons}>
            <PrimaryButton>Start for Free</PrimaryButton>
            <PrimaryButton buttonStyle='transparent'>
              Learn More
            </PrimaryButton>
          </div>
        </Container>
        <img className={style.background}
          src="/images/svg/bg-pattern-intro.svg"
          alt="background"
        />
      </section>
      
      <section>
      </section>
        

      
    </main>
  </Layout>
);

export default Home;