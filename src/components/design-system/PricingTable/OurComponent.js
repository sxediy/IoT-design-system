import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { PricingTable } from 'components/gkh-components/PricingTable/PricingTable';
import { pricingData } from 'components/gkh-components/PricingTable/fakeData';

import * as data from './about';


const OurComponent = () =>
  <PricingTable
    pricingData={pricingData}
    initActiveElement={'Тепло'}
  />;


export default constructFromTemplates(OurComponent, data);
