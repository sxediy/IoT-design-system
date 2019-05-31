import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

// eslint-disable-next-line
import { ButtonDropDownSingleMenu } from 'components/gkh-components/Buttons/ButtonDropDownSingleMenu/ButtonDropDownSingleMenu';

import {
  items,
  LogoComponent,
  buttonName,
  callbackFunction,
} from 'components/gkh-components/Buttons/ButtonDropDownSingleMenu/fakeData';

import * as data from './about';


const OurComponent = () => (
  <ButtonDropDownSingleMenu
    items={ items }
    LogoComponent={ LogoComponent }
    buttonName={ buttonName }
    callbackFunction={ callbackFunction }
  />
);


export default constructFromTemplates(OurComponent, data);
