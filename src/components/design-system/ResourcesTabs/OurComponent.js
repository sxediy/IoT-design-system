import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ResourceTabs } from 'components/gkh-components/ResourceTabs/ResourceTabs';
import { tabsArr } from 'components/gkh-components/ResourceTabs/fakeData';


import * as data from './about';


const OurComponent = () =>
  <ResourceTabs
    tabsArr={ tabsArr }
    active={'Тепло'}
    changeActiveElement={ () => {} }
  />;


export default constructFromTemplates(OurComponent, data);
