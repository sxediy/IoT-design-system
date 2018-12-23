import React from 'react';
import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards';
import { pricingData } from 'components/gkh-components/PricingTable/data';
import PropTypes from 'prop-types';

const GKH = () =>
  <ResourcesTable
    pricingData={pricingData}
    changeActiveColumn = {() => {}}
    activeResourceType={'Тепло'}
  />;

export default GKH;

GKH.propTypes = {
  pricingData: PropTypes.object,
  changeActiveColumn: PropTypes.func,
  activeResourceType: PropTypes.string,
};
