import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { RowTimeFilter } from 'components/gkh-components/RowTimeFilter/RowTimeFilter';

import { dateFrom, dateTo, setDate, isTSRV } from 'components/gkh-components/RowTimeFilter/fakeData';


import * as data from './about';


const OurComponent = () =>
  <RowTimeFilter
    dateFrom={dateFrom}
    dateTo={dateTo}
    setDate={setDate}
    isTSRV={isTSRV}
  />;

export default constructFromTemplates(OurComponent, data);
