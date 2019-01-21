import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { Cards } from 'components/gkh-components/PricingTable/Cards';
import { pricingData } from 'components/gkh-components/PricingTable/fakeData';

import * as data from './data';


const OurComponent = () =>
  <Cards
    pricingData={pricingData}
    changeActiveElement= {() => {}}
    activeResourceType={'Тепло'}
  />;


export default constructFromTemplates(OurComponent, data);
