import React from 'react';
import constructFromTemplates from 'services/constructFromTemplates';

import { ProfileWithDropdown } from 'components/gkh-components/AppHeader/ProfileWithDropdown';

import * as data from './data';


const GKHComponent = () =>
  <div style={{ marginLeft: 'auto' }}>
    <ProfileWithDropdown
      activeNavLink='Reports'
      setActiveNavLink= {() => {}}
    />
  </div>;


export default constructFromTemplates(GKHComponent, data);
