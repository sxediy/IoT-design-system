import React from 'react';
import PropTypes from 'prop-types';
import constructFromTemplates from 'services/constructFromTemplates';

import { Cards as ResourcesTable } from 'components/gkh-components/PricingTable/Cards';
import { pricingData } from 'components/gkh-components/PricingTable/data';

import * as data from './data';


const GKHComponent = () =>
  <ResourcesTable
    pricingData={pricingData}
    changeActiveElement= {() => {}}
    activeResourceType={'Тепло'}
  />;


GKHComponent.propTypes = {
  pricingData: PropTypes.object,
  changeActiveElement: PropTypes.func,
  activeResourceType: PropTypes.string,
};

export default constructFromTemplates(GKHComponent, data);
