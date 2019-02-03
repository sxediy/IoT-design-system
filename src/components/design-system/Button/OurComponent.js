import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { Button } from 'components/gkh-components/Buttons/Button/Button';
import {
  buttonName,
  // size,
  isDarkness,
  // isDisabled,
  background,
  boxShadow,
  border,
  textColor,
  // textSize,
  callbackFunction,
} from 'components/gkh-components/Buttons/Button/fakeData';

import * as data from './about';


const OurComponent = () =>
  <Button
    buttonName={ buttonName }
    // size={ size }
    isDarkness= { isDarkness }
    // isDisabled={ isDisabled }
    background = { background }
    boxShadow= { boxShadow }
    border={ border }
    textColor = { textColor }
    // textSize = { textSize }
    callbackFunction= { callbackFunction }
  />;


export default constructFromTemplates(OurComponent, data);
