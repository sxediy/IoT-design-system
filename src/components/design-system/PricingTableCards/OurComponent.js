import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { Cards } from 'components/gkh-components/PricingTable/Cards';
import { pricingData, initActiveElement2 } from 'components/gkh-components/PricingTable/fakeData';

import * as data from './about';


const OurComponent = () => (
  <Cards
    pricingData={ pricingData }
    initActiveElement={ initActiveElement2 }
  />
);


export default constructFromTemplates(OurComponent, data);
