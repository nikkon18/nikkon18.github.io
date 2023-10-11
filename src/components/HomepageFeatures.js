import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Always Exploring',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Explore my own knowledge system.
      </>
    ),
  },
  {
    title: 'Always Changing',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        What never changes is change;continuously trying new technology stacks.
      </>
    ),
  },
  {
    title: 'Always Unchanged',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Remain true to original aspiration and keep mission firmly in mind.
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
