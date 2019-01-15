import React from 'react';
import { Header } from './Header';
import { Cards } from './Cards';
import styles from './PricingTable.less';


const PricingTable = (props) => (
  <div className ={styles.containerTable}>
    <Header/>
    <Cards
      {... props }
    />
  </div>
);

export { PricingTable };
