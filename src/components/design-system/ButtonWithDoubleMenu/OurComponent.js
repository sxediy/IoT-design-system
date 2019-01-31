import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { DropdownWithDoubleMenu } from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DropdownWithDoubleMenu';

import {
  firstLineData,
  secondLineData,
  buttonName,
  LogoComponent,
  callbackFunction,
} from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/fakeData';

import * as data from './about';


const OurComponent = () =>
  <DropdownWithDoubleMenu
    firstLineData={ firstLineData }
    secondLineData={ secondLineData }
    buttonName={ buttonName }
    LogoComponent={ LogoComponent }
    callbackFunction={ callbackFunction }
  />;


export default constructFromTemplates(OurComponent, data);
