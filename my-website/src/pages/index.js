import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header style={{ background: 'none' }} className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container" >
        <h1 className="hero__title"
          style={{
            color: 'red',


            //dopasuj szerokość do tekstu
            // width: 'fit-content',

          }}
        >{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{
          color: 'red',
        }}>{siteConfig.tagline}</p>
        <div className={styles.buttons} >
          <Link style={{ border: '5px solid red' }}
            className="button button--secondary button--lg"
            to="https://patrykjaseniuk.github.io/StatkiTS/">
            Zagraj teraz
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Background
      imgSrc={'Statek.mp4'}
      style={{
        height: '100vh',
      }}>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <div >
          <HomepageHeader />
          {/* <HomepageFeatures /> */}
        </div>
        <main  >
        </main>
      </Layout>
    </Background>


  );
}


const Background = ({ children, imgSrc, style }) => {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}>
        <video autoPlay muted loop src={imgSrc} style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.7,
          ...style

        }} />
      </div>
      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  )
}