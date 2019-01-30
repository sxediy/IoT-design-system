import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';

import * as data from './about';


const OurComponent = () =>
  <div style={{ marginLeft: 'auto' }}>
    <ProfileWithDropdown />
  </div>;


export default constructFromTemplates(OurComponent, data);
