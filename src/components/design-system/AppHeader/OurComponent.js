import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { AppHeader } from 'components/gkh-components/AppHeader/AppHeader';

import * as data from './about';


const OurComponent = () =>
  <AppHeader
    initActiveElement='Reports'
  />;


export default constructFromTemplates(OurComponent, data);
