import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'always exploring',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        explore my own knowledge system
      </>
    ),
  },
  {
    title: 'always changing',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        what never changes is change;continuously trying new technology stacks
      </>
    ),
  },
  {
    title: 'always unchanged',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        remain true to original aspiration and keep mission firmly in mind.
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
