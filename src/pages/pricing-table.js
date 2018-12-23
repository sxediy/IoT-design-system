import React from 'react';
import PropTypes from 'prop-types';
import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards';
import { pricingData } from 'components/gkh-components/PricingTable/data';


const ResourcesTablePage = () =>
  <ResourcesTable
    pricingData={pricingData}
    changeActiveColumn = {() => {}}
    activeResourceType={'Тепло'}
  />;

ResourcesTablePage.propTypes = {
  pricingData: PropTypes.object,
  changeActiveColumn: PropTypes.func,
  activeResourceType: PropTypes.string,
};

export default ResourcesTablePage;
