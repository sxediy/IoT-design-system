import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

// eslint-disable-next-line
import { ButtonDropDownTripleMenu } from 'components/gkh-components/Buttons/ButtonDropDownTripleMenu/ButtonDropDownTripleMenu';
import SmartCheckboxWithButton from
  'components/gkh-components/Checkbox/SmartCheckboxWithButton/SmartCheckboxWithButton';

import {
  firstLineData,
  secondLineData,
  buttonName,
  LogoComponent,
  options,
  onSubmit,
} from 'components/gkh-components/Buttons/ButtonDropDownTripleMenu/fakeData';

import { checkboxTitle } from 'components/gkh-components/Checkbox/SmartCheckboxWithButton/fakeData';

import * as data from './about';


const OurComponent = () => (
  <ButtonDropDownTripleMenu
    firstLineData={ firstLineData }
    secondLineData={ secondLineData }
    thirdLine={ (...args) => (
      <SmartCheckboxWithButton
        args={ args }
        callbackFunction={ onSubmit }
        plainOptions={ options }
        checkboxTitle={ checkboxTitle }
        defaultCheckedList={ options }
      />
    )}
    buttonName={ buttonName }
    LogoComponent={ LogoComponent }
  />
);


export default constructFromTemplates(OurComponent, data);
