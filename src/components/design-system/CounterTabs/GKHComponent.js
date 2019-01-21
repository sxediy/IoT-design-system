import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { CounterTabs } from 'components/gkh-components/CounterTabs/CounterTabs';
import { counters, activeKey, setActiveCounterNum, } from 'components/gkh-components/CounterTabs/fakeData';


import * as data from './data';


const GKHComponent = () =>
  <CounterTabs
    counters={ counters }
    activeKey={ activeKey }
    setActiveCounterNum={setActiveCounterNum}
  />;

export default constructFromTemplates(GKHComponent, data);
