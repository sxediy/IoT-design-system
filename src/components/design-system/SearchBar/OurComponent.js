import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';


import { SearchBar } from 'components/gkh-components/SearchBar/SearchBar';
import {
  displayProp,
  cityList,
  initialCity,
  streetList,
  initialStreet,
  houseList,
  initialHouse,
  cityPlaceholder,
  streetPlaceholder,
  housePlaceholder,
} from 'components/gkh-components/SearchBar/fakeData';


import * as data from './about';


const OurComponent = () =>
  <SearchBar
    displayProp={displayProp}
    initialFirst={initialCity}
    initiaSecond={initialStreet}
    initialThird={initialHouse}
    firstList={cityList}
    secondList={streetList}
    thirdList={houseList}
    firstPlaceholder={cityPlaceholder}
    secondPlaceholder={streetPlaceholder}
    thirdPlaceholder={housePlaceholder}
  />;

export default constructFromTemplates(OurComponent, data);