import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

// eslint-disable-next-line
import { ButtonDropDownDoubleMenu } from 'components/gkh-components/Buttons/ButtonDropDownDoubleMenu/ButtonDropDownDoubleMenu';

import {
  firstLineData,
  secondLineData,
  buttonName,
  LogoComponent,
  callbackFunction,
} from 'components/gkh-components/Buttons/ButtonDropDownDoubleMenu/fakeData';

import * as data from './about';


const OurComponent = () => (
  <ButtonDropDownDoubleMenu
    firstLineData={ firstLineData }
    secondLineData={ secondLineData }
    buttonName={ buttonName }
    LogoComponent={ LogoComponent }
    callbackFunction={ callbackFunction }
  />
);


export default constructFromTemplates(OurComponent, data);
