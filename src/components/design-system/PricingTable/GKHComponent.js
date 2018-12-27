import React from 'react';
import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards';
import { pricingData } from 'components/gkh-components/PricingTable/data';
import PropTypes from 'prop-types';


const GKHComponent = () =>
  <ResourcesTable
    pricingData={pricingData}
    changeActiveColumn = {() => {}}
    activeResourceType={'Тепло'}
  />;

export default GKHComponent;

GKHComponent.propTypes = {
  pricingData: PropTypes.object,
  changeActiveColumn: PropTypes.func,
  activeResourceType: PropTypes.string,
};
