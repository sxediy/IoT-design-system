import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { AppHeader } from 'components/gkh-components/AppHeader/AppHeader';
import { initActiveElement1 } from 'components/gkh-components/AppHeader/fakeData';

import * as data from './about';


const OurComponent = () =>
  <AppHeader
    initActiveElement={ initActiveElement1 }
  />;


export default constructFromTemplates(OurComponent, data);
