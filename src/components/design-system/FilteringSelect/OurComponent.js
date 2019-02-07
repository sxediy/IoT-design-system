import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';


import { FilteringSelect } from 'components/gkh-components/FilteringSelect/FilteringSelect';
import {
  initialSelected,
  cityList,
  placeholder,
  displayProp,
} from 'components/gkh-components/FilteringSelect/fakeData';


import * as data from './about';


const OurComponent = () =>
  <FilteringSelect
    initialSelected={initialSelected}
    list={cityList}
    placeholder={placeholder}
    displayProp={displayProp}
  />;

export default constructFromTemplates(OurComponent, data);
