import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { DropdownWithTripleMenu } from 'components/gkh-components/Buttons/ButtonWithTripleMenu/DropdownWithTripleMenu';
import SmartCheckboxWithButton from 'components/gkh-components/Checkbox/SmartCheckboxWithButton';


import {
  firstLineData,
  secondLineData,
  buttonName,
  logo,
  options,
  onSubmit,
} from 'components/gkh-components/Buttons/ButtonWithTripleMenu/data';

import * as data from './data';


const GKHComponent = () =>
  <DropdownWithTripleMenu
    firstLineData={firstLineData}
    secondLineData={secondLineData}
    thirdLine={(...args) =>
      <SmartCheckboxWithButton
        args={args}
        click={onSubmit}
        plainOptions={options}
        defaultCheckedList={options}
      />
    }
    buttonName={buttonName}
    logo={logo}
  />;


export default constructFromTemplates(GKHComponent, data);
