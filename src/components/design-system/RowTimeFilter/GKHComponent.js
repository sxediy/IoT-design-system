import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { RowTimeFilter } from 'components/gkh-components/RowTimeFilter/RowTimeFilter';

import { dateFrom, dateTo, setDate, isTSRV } from 'components/gkh-components/RowTimeFilter/data';


import * as data from './data';


const GKHComponent = () =>
  <RowTimeFilter
    dateFrom={dateFrom}
    dateTo={dateTo}
    setDate={setDate}
    isTSRV={isTSRV}
  />;

export default constructFromTemplates(GKHComponent, data);
