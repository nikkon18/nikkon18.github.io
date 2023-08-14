import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '一直探索',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        探索自己的前端体系
      </>
    ),
  },
  {
    title: '一直改变',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        永远不变的就是变化 不断尝试新技术
      </>
    ),
  },
  {
    title: '一直不变',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        不变的初心 一直not enough
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
