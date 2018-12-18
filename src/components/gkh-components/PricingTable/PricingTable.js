import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import { Cards } from './Cards';

const PricingTable = ({ pricingData, changeActiveColumn, activeResourceType }) => (
  <Fragment>
    <Header/>
    <Cards
      pricingData={pricingData}
      changeActiveColumn={changeActiveColumn}
      activeResourceType={activeResourceType}
    />
  </Fragment>
);

PricingTable.propTypes = {
  pricingData: PropTypes.array,
  changeActiveColumn: PropTypes.func,
  activeResourceType: PropTypes.array,
};

export default PricingTable;
