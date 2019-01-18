import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { DropdownWithDoubleMenu } from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/DropdownWithMenu';

import {
  getFirstLineData,
  firstLineData,
  secondLineData,
  buttonName,
  logo,
} from 'components/gkh-components/Buttons/ButtonWithDoubleMenu/data';

import * as data from './data';


const GKHComponent = () =>
  <DropdownWithDoubleMenu
    getFirstLineData={getFirstLineData}
    firstLineData={firstLineData}
    secondLineData={secondLineData}
    buttonName={buttonName}
    logo={logo}
  />;


export default constructFromTemplates(GKHComponent, data);
