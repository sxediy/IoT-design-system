import React from 'react';

import constructFromTemplates from 'services/constructFromTemplates';

import { RowTimeFilter } from 'components/gkh-components/RowTimeFilter/RowTimeFilter';

import {
  initialDateFrom,
  initialDateTo,
  today,
  disabledDate,
  isTSRV
} from 'components/gkh-components/RowTimeFilter/fakeData';


import * as data from './about';


const OurComponent = () =>
  <RowTimeFilter
    initialDateFrom={ initialDateFrom }
    initialDateTo={ initialDateTo }
    today={ today }
    disabledDate={ disabledDate }
    isTSRV= { isTSRV }
  />;

export default constructFromTemplates(OurComponent, data);
