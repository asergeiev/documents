import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/logo.png').default,
    description: (
      <>
        CompreFace can be easily integrated into any system without prior machine learning skills.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/graph.png').default,
    description: (
      <>
        CompreFace provides REST API for face recognition, face verification, face detection, 
        face mask detection, landmark detection, age, 
        and gender recognition and is easily deployed with docker.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
