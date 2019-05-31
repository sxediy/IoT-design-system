import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { CounterTabs } from 'components/gkh-components/CounterTabs/CounterTabs';
import { counters, initActiveElement } from 'components/gkh-components/CounterTabs/fakeData';


import * as data from './about';


const OurComponent = () => (
  <CounterTabs
    counters={ counters }
    initActiveElement={ initActiveElement }
  />
);

export default constructFromTemplates(OurComponent, data);
