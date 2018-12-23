import React from 'react';
import MenuBar from 'components/menuBar';
import ResourcesTablePage from 'pages/pricing-table';
import styles from './home.less';


const Home = () => (
  <section className={styles.gkhContainer}>
    <aside className={styles.menuBar}>
      <MenuBar />
    </aside>
    <arcticle className={styles.gkhComponentst}>
      <ResourcesTablePage/>
    </arcticle>
  </section>
);

export default Home;
