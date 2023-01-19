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
            <PrimaryButton path="/Pricing">
              Start for Free
            </PrimaryButton>

            <PrimaryButton
              buttonStyle='transparent'
              path="/Features"
            >
              Learn More
            </PrimaryButton>
          </div>
        </Container>
        <img className={style.background}
          src="/images/svg/bg-pattern-intro.svg"
          alt="background"
        />
      </section>
      
      {/* Feature Section 1 */}
      <section className={style.featureSection1}>
        <Container>
          <h2 className={style.titleSection}>Designed for the future</h2>
          <div>
            <img className={style.sectionImage}
              src="/images/svg/illustration-editor-mobile.svg"
              alt="Illustation Editor Mobile"
            />
          </div>
          <section className={style.feature}>
            <h3 className={style.featureTitle}>Introducing an extensible editor</h3>
            <p className={style.description}>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
          </section>

          <section className={style.feature}>
            <h3 className={style.featureTitle}>Robust content management</h3>
            <p className={style.description}>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.</p>
          </section>
        </Container>

        <img className={style.sectionImageDesktop}
          src="/images/svg/illustration-editor-desktop.svg"
          alt="Illustation Editor Desktop"
        />
      </section>
        
      {/* BannerSection */}
      <section className={style.bannerSection}>
        <Container>
          <div className={style.imageWrapper}>
            <img className={style.phoneMockups}
              src="/images/svg/illustration-phones.svg"
              alt="Mockups"
            />
          </div>
          <div className={style.infoWapper}>
            <h2 className={style.bannerTitle}>
              State of the Art Infrastructure
            </h2>
            <p className={style.description}>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
          </div>
        </Container>

        <div className={style.backgroundWrapper}>
          <img className={style.bannerBackground}
            src="/images/svg/bg-pattern-circles.svg"
            alt="parttern circles"
          />
        </div>
      </section>

      {/* Feature Section 2 */}
      <div className={style.featureSection2}>
        <Container>
          <div className={style.imageWrapper}>
            <img className={style.sectionImage}
              src="/images/svg/illustration-laptop-mobile.svg"
              alt="Illustation Laptop Mobile"
            />
          </div>
          <section className={style.feature}>
            <h3 className={style.featureTitle}>Free, open, simple</h3>
            <p className={style.description}>Blogr is a free and open source application backed by a large community of helpful developers, It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics, The architecture is clean and is relatively easy to learn.</p>
          </section>

          <section className={style.feature}>
            <h3 className={style.featureTitle}>Powerful tooling</h3>
            <p className={style.description}>Batteries Included. We built a simple and straightfordward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
          </section>
        </Container>

        <img className={style.sectionImageDesktop}
          src="/images/svg/illustration-laptop-desktop.svg"
          alt="Illustation Laptop Desktop"
        />
      </div>

    </main>
  </Layout>
);

export default Home;