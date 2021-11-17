import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        CompreFace can be easily integrated into any system without prior machine learning skills.
      </>
    ),
  },
  {
    title: 'Features',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The system can accurately identify people even when it has 
        only “seen” their photo once. Technology-wise, CompreFace has 
        several advantages over similar free face recognition solutions. 
      </>
    ),
  },
  {
    title: 'REST API',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        CompreFace provides REST API for face recognition, face verification, 
        face detection, face mask detection, landmark detection, 
        age, and gender recognition and is easily deployed with docker
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
