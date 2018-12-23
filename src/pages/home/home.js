import React from 'react';
import MenuBar from 'components/menuBar';
import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards';
import { pricingData } from 'components/gkh-components/PricingTable/data';
import PropTypes from 'prop-types';
import styles from './home.less';


const Home = () => (
  <section className={styles.gkhContainer}>
    <aside className={styles.menuBar}>
      <MenuBar />
    </aside>
    <arcticle className={styles.gkhComponentst}>
      <ResourcesTable
        pricingData={pricingData}
        changeActiveColumn = {() => {}}
        activeResourceType={'Тепло'}
      />;
    </arcticle>
  </section>
);

export default Home;

ResourcesTable.propTypes = {
  pricingData: PropTypes.object,
  changeActiveColumn: PropTypes.func,
  activeResourceType: PropTypes.string,
};
