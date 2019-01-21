import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { DropdownWithDoubleMenu } from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DropdownWithDoubleMenu';

import {
  firstLineData,
  secondLineData,
  buttonName,
  logo,
} from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/fakeData';

import * as data from './about';


const OurComponent = () =>
  <DropdownWithDoubleMenu
    firstLineData={firstLineData}
    secondLineData={secondLineData}
    buttonName={buttonName}
    logo={logo}
  />;


export default constructFromTemplates(OurComponent, data);
