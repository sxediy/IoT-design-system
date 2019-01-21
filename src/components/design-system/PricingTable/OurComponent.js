import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { PricingTable } from 'components/gkh-components/PricingTable/PricingTable';
import { pricingData } from 'components/gkh-components/PricingTable/fakeData';

import * as data from './about';


const OurComponent = () =>
  <PricingTable
    pricingData={pricingData}
    changeActiveElement= {() => {}}
    activeResourceType={'Тепло'}
  />;


export default constructFromTemplates(OurComponent, data);
