import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { Button } from 'components/gkh-components/Buttons/Button/Button';
import {
  buttonName,
  size,
  background,
  isBordered,
  // isDisabled,
  // textColor,
  // textSize,
  callbackFunction,
} from 'components/gkh-components/Buttons/Button/fakeData';

import * as data from './about';


const OurComponent = () =>
  <Button
    buttonName={ buttonName }
    size={ size }
    background = { background }
    isBordered={ isBordered }
    // isDisabled={ isDisabled }
    // textColor = { textColor }
    // textSize = { textSize }
    callbackFunction= { callbackFunction }
  />;


export default constructFromTemplates(OurComponent, data);
