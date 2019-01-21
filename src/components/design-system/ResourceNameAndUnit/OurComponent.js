import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ResourceNameAndUnit } from 'components/gkh-components/ResourceNameAndUnit/ResourceNameAndUnit';
import { resourcesValues } from 'components/gkh-components/ResourceNameAndUnit/fakeData';


import * as data from './data';


const OurComponent = () =>
  <ResourceNameAndUnit
    resourcesValues= { resourcesValues }
  />;

export default constructFromTemplates(OurComponent, data);
