import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Żagle',
    imgSource: 'img/zagiel.gif',
    description: (
      <>
        Żagle produkują siłę napędową z wiatru.
      </>
    ),
  },
  {
    title: 'Miecz i Ster',
    imgSource: 'Statek.mp4',
    description: (
      <>
        Miecz i ster produkują siłę napędową z prądu wody.
      </>
    ),
  },
  {
    title: 'Zwroty',
    imgSource: 'img/zwrot.gif',
    description: (
      <>
        Zawładnij wiatrem za pomocą żagli i wodą za pomocą steru, aby płynąć tam gdzie chcesz.
      </>
    ),
  },
];

function Feature({ imgSource, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* wyświetl gif */}
        <video autoPlay src={imgSource} alt="StatkiTS" style={{
          // przytnij w koło
          borderRadius: '50%',

        }} />


        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
