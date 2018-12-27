import React, { Fragment } from 'react';
import { Header } from './Header';
import { Cards } from './Cards';

const PricingTable = (props) => (
  <Fragment>
    <Header/>
    <Cards
      {... props }
    />
  </Fragment>
);

export { PricingTable };
