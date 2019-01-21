import React from 'react';
import { Header } from 'components/gkh-components/PricingTable/Header';
import { Cards } from 'components/gkh-components/PricingTable/Cards';
import styles from 'components/gkh-components/PricingTable/PricingTable.less';


const PricingTable = (props) => (
  <div className ={styles.containerTable}>
    <Header/>
    <Cards
      {... props }
    />
  </div>
);

export { PricingTable };
