import React from 'react';

import constructFromTemplates from 'services/constructFromTemplates';

import { RowTimeFilterWrapper } from 'components/gkh-components/RowTimeFilter/RowTimeFilterWrapper';

import { initialDateFrom, initialDateTo, isTSRV } from 'components/gkh-components/RowTimeFilter/fakeData';


import * as data from './about';


const OurComponent = () =>
  <RowTimeFilterWrapper
    initialDateFrom={ initialDateFrom }
    initialDateTo={ initialDateTo }
    isTSRV= { isTSRV }
  />;

export default constructFromTemplates(OurComponent, data);
