import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ResourceNameAndUnit } from 'components/gkh-components/ResourceNameAndUnit/ResourceNameAndUnit';
import { resourcesValues } from 'components/gkh-components/ResourceNameAndUnit/fakeData';


import * as data from './data';


const GKHComponent = () =>
  <ResourceNameAndUnit
    resourcesValues= { resourcesValues }
  />;

export default constructFromTemplates(GKHComponent, data);
