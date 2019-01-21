import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import SmartCheckboxWithButton from
  'components/gkh-components/Checkbox/SmartCheckboxWithButton/SmartCheckboxWithButton';


import {
  choisedBefore,
  options,
  onSubmit,
} from 'components/gkh-components/Checkbox/SmartCheckboxWithButton/fakeData';

import * as data from './data';


const OurComponent = () =>
  <SmartCheckboxWithButton
    args={choisedBefore}
    click={onSubmit}
    plainOptions={options}
    defaultCheckedList={options}
    styleContainer={{ width: '250px', boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)' }}
  />;


export default constructFromTemplates(OurComponent, data);
