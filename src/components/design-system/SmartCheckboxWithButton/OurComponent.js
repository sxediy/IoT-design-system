import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import SmartCheckboxWithButton from
  'components/gkh-components/Checkbox/SmartCheckboxWithButton/SmartCheckboxWithButton';


import {
  choisedBefore,
  options,
  onSubmit,
  checkboxTitle,
} from 'components/gkh-components/Checkbox/SmartCheckboxWithButton/fakeData';

import * as data from './about';


const OurComponent = () => (
  <SmartCheckboxWithButton
    args={ choisedBefore }
    callbackFunction={ onSubmit }
    plainOptions={ options}
    checkboxTitle={ checkboxTitle }
    defaultCheckedList={ options }
    styleContainer={ { width: '250px', boxShadow: '0 1px 4px rgba(0, 21, 41, 0.08)' } }
  />
);


export default constructFromTemplates(OurComponent, data);
