import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { PricingTable } from 'components/gkh-components/PricingTable/PricingTable';
import { pricingData, initActiveElement1 } from 'components/gkh-components/PricingTable/fakeData';

import * as data from './about';


const OurComponent = () => (
  <PricingTable
    pricingData={ pricingData }
    initActiveElement={ initActiveElement1 }
  />
);


export default constructFromTemplates(OurComponent, data);
